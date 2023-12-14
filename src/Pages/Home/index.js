import React, { useState, useContext, useEffect } from 'react';
import { Background, Container, Button, ButtonText, SelectedNumber, FlatListBox, ButtonRestart } from './styles';
import { AuthContext } from '../../Contexts/auth'
import Navbar from '../../Layout/Navbar';

import Quest from './Quest';
import Timer from './Timer';
import Analisys from './Analisys';
import Result from './Result';

export default function Home() {

  const { user, updateRecord } = useContext(AuthContext)

  const [start, setStart] = useState(false)
  const [startGame, setStartGame] = useState(false)
  const [number, setNumber] = useState(Math.floor(Math.random() * 100))
  const [selectedNumber, setSelectedNumber] = useState('')
  const [quests, setQuests] = useState([])
  const [questIndex, setQuestIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [answers, setAnswers] = useState([])
  const [certos, setCertos] = useState(0)
  const [errados, setErrados] = useState(0)
  
  const [time, setTime] = useState(0)
  const [runTimer, setRunTimer] = useState(false)
  useEffect(() => {

    if(start && runTimer){
      setTimeout(() => {
        setTime(time+1)
      }, 1000)
    }

  }, [time])

  useEffect(() => {

    if (quests && quests.length >= 10 && selectedNumber) {

      setTimeout(() => {
        if (selectedNumber) {
          setTime(1)
          setRunTimer(true)
          setStartGame(true)
        }
      }, 5000)

    }

  }, [quests && quests.length >= 10 && selectedNumber])

  useEffect(() => {

    updateRecord(time, certos, errados)

  }, [(certos + errados) == 10])

  function saveAnswer(answer) {

    setAnswers(oldAnswers => [...oldAnswers, answer])

  }

  async function next(answer, resposta) {

    if (questIndex + 1 < quests.length - 1) {
      setQuestIndex(questIndex + 1)
      if(answer == resposta){

        console.log(`${answer} == ${resposta}: ${answer == resposta}`)
        setCertos(certos+1)

      }else{

        console.log(`${answer} != ${resposta}: ${answer != resposta}`)
        setErrados(errados+1)

      }

    } else {
      setQuestIndex(questIndex + 1)
      if(answer == resposta){

        console.log(`${answer} == ${resposta}: ${answer == resposta}`)
        setCertos(certos+1)

      }else{

        console.log(`${answer} != ${resposta}: ${answer != resposta}`)
        setErrados(errados+1)

      }
      setRunTimer(false)
    }

  }

  function handlePlay(restart) {

    if (restart) {

      setSelectedNumber(false)
      setAnswers([])
      setQuests([])
      setQuestIndex(0)
      setTime(0)
      setRunTimer(false)

    }

    setStart(true)
    setRunTimer(true)
    // Escolaridades:
    // Fundamental I
    // Fundamental II
    // Ensino Médio / Técnico
    // Ensino Superior
    if (user.escolaridade == "Fundamental I") {

      const numbers = [];
      for (let i = 0; i < 100; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        numbers.push(number);
      }

      let operations = ["+", "-"];
      const lastNumber = numbers[numbers.length - 1];
      let questoes = [];

      numbers.map((num, index) => {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let problem, answer;

        switch (operation) {
          case "+":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber + num)}`.includes(".")) {

              answer = Number(`${(lastNumber + num)}`.slice(0, `${(lastNumber + num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber + num)

            }
            break;
          case "-":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber - num)}`.includes(".")) {

              answer = Number(`${(lastNumber - num)}`.slice(0, `${(lastNumber - num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber - num)

            }
            break;
        }

        questoes.push({
          answer,
          problem,
        })

        setTimeout(() => {
          setNumber(num)
          if (index == (numbers.length - 1)) {
            setSelectedNumber(num)
          }
        }, 50 * index);
      });

      for (let i = 0; i <= 10; i++) {

        if (questoes[i].answer && questoes[i].problem) {

          setQuests(oldQuests => [...oldQuests, questoes[i]])

        } else {

          i--

        }

      }

    } else if (user.escolaridade == "Fundamental II") {

      const numbers = [];
      for (let i = 0; i < 100; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        numbers.push(number);
      }

      let operations = ["+", "-", "x"];
      const lastNumber = numbers[numbers.length - 1];
      let questoes = [];

      numbers.map((num, index) => {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let problem, answer;

        switch (operation) {
          case "+":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber + num)}`.includes(".")) {

              answer = Number(`${(lastNumber + num)}`.slice(0, `${(lastNumber + num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber + num)

            }
            break;
          case "-":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber - num)}`.includes(".")) {

              answer = Number(`${(lastNumber - num)}`.slice(0, `${(lastNumber - num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber - num)

            }
            break;
          case "x":
            problem = `${lastNumber} x ${num}`;
            if (`${(lastNumber * num)}`.includes(".")) {

              answer = Number(`${(lastNumber * num)}`.slice(0, `${(lastNumber * num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber * num)

            }
            break;
        }

        questoes.push({
          answer,
          problem,
        })

        setTimeout(() => {
          setNumber(num)
          if (index == (numbers.length - 1)) {
            setSelectedNumber(num)
          }
        }, 50 * index);
      });

      let lastNums = []

      for (let i = 0; i <= 10; i++) {

        let num = Math.floor(Math.random() * questoes.length - 1)
        while (lastNums.includes(num)) {

          num = Math.floor(Math.random() * questoes.length - 1)

        }

        if (questoes[num].answer && questoes[num].problem && !!!quests.find(quest => quest.answer == questoes[num].answer)) {

          setQuests(oldQuests => [...oldQuests, questoes[num]])
          lastNums.push(num)

        } else {

          i--

        }


      }

    } else if (user.escolaridade == "Ensino Médio / Técnico") {

      const numbers = [];
      for (let i = 0; i < 100; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        numbers.push(number);
      }

      let operations = ["+", "-", "x", "÷", "√"];
      const lastNumber = numbers[numbers.length - 1];
      let questoes = [];

      numbers.map((num, index) => {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let problem, answer;

        switch (operation) {
          case "+":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber + num)}`.includes(".")) {

              answer = Number(`${(lastNumber + num)}`.slice(0, `${(lastNumber + num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber + num)

            }
            break;
          case "-":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber - num)}`.includes(".")) {

              answer = Number(`${(lastNumber - num)}`.slice(0, `${(lastNumber - num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber - num)

            }
            break;
          case "x":
            problem = `${lastNumber} x ${num}`;
            if (`${(lastNumber * num)}`.includes(".")) {

              answer = Number(`${(lastNumber * num)}`.slice(0, `${(lastNumber * num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber * num)

            }
            break;
          case "÷":
            problem = `${lastNumber} ÷ ${num}`;
            if (`${(lastNumber / num)}`.includes(".")) {

              answer = Number(`${(lastNumber / num)}`.slice(0, `${(lastNumber / num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber / num)

            }
            break;
          case "√":
            problem = `√${lastNumber}`;
            if (`${Math.sqrt(lastNumber)}`.includes(".")) {

              answer = Number(`${Math.sqrt(lastNumber)}`.slice(0, `${Math.sqrt(lastNumber)}`.indexOf(".") + 3))

            } else {

              answer = Math.sqrt(lastNumber)

            }
            break;
        }

        questoes.push({
          answer,
          problem,
        })

        setTimeout(() => {
          setNumber(num)
          if (index == (numbers.length - 1)) {
            setSelectedNumber(num)
          }
        }, 50 * index);
      });

      for (let i = 0; i <= 10; i++) {

        if (questoes[i].answer && questoes[i].problem) {

          setQuests(oldQuests => [...oldQuests, questoes[i]])

        } else {

          i--

        }

      }

    } else if (user.escolaridade == "Ensino Superior") {

      const numbers = [];
      for (let i = 0; i < 100; i++) {
        const number = (Math.random() * 100) + 1;
        const roundedNumber = Math.round(number * 100) / 100;
        numbers.push(roundedNumber);
      }

      let operations = ["+", "-", "x", "÷", "√", "^"];
      const lastNumber = numbers[numbers.length - 1];
      let questoes = [];

      numbers.map((num, index) => {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let problem, answer;

        switch (operation) {
          case "+":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber + num)}`.includes(".")) {

              answer = Number(`${(lastNumber + num)}`.slice(0, `${(lastNumber + num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber + num)

            }
            break;
          case "-":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber - num)}`.includes(".")) {

              answer = Number(`${(lastNumber - num)}`.slice(0, `${(lastNumber - num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber - num)

            }
            break;
          case "x":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber * num)}`.includes(".")) {

              answer = Number(`${(lastNumber * num)}`.slice(0, `${(lastNumber * num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber * num)

            }
            break;
          case "÷":
            problem = `${lastNumber} ${operation} ${num}`;
            if (`${(lastNumber / num)}`.includes(".")) {

              answer = Number(`${(lastNumber / num)}`.slice(0, `${(lastNumber / num)}`.indexOf(".") + 3))

            } else {

              answer = (lastNumber / num)

            }
            break;
          case "√":
            problem = `√${lastNumber}`;
            if (`${Math.sqrt(lastNumber)}`.includes(".")) {

              answer = Number(`${Math.sqrt(lastNumber)}`.slice(0, `${Math.sqrt(lastNumber)}`.indexOf(".") + 3))

            } else {

              answer = Math.sqrt(lastNumber)

            }
            break;
          case "^":
            let exp = Math.floor(Math.random() * 3) + 1
            problem = `${lastNumber} ^ ${exp}`;
            if (`${Math.pow(lastNumber, exp)}`.includes(".")) {

              answer = Number(`${Math.pow(lastNumber, exp)}`.slice(0, `${Math.pow(lastNumber, exp)}`.indexOf(".") + 3))

            } else {

              Math.pow(lastNumber, exp)

            }
            break;
        }

        questoes.push({
          problem,
          answer,
        })

        setTimeout(() => {
          setNumber(num)
          if (index == (numbers.length - 1)) {
            setSelectedNumber(num)
          }
        }, 50 * index);
      });

      for (let i = 0; i <= 10; i++) {

        if (questoes[i].answer && questoes[i].problem) {

          setQuests(oldQuests => [...oldQuests, questoes[i]])

        } else {

          i--

        }

      }
    }
  }

  return (
    <Background>
      <Container
        // behavior={Platform.OS == "ios" ? 'padding' : ''}
        // enabled
      >
        <Navbar title="Home" />

        {!start ?
          <Button onPress={() => handlePlay()}>

            <ButtonText> JOGAR! </ButtonText>

          </Button>
          : !selectedNumber ? <SelectedNumber> {number} </SelectedNumber>
            : !startGame ?
              <>
                <SelectedNumber selected={true}> {selectedNumber} </SelectedNumber>
              </>
              : questIndex + 1 <= quests.length - 1 ? 
              <>
              
                <Timer min={Math.floor(time / 60)} sec={`${time % 60}`.slice(0,2)} />
                <Quest quest={quests[questIndex].problem} answer={quests[questIndex].answer} next={next} saveAnswer={saveAnswer} />
              
              </>
              :
              (
                <>
                  <Timer min={Math.floor(time / 60)} sec={`${time % 60}`.slice(0,2)} />
                  <Analisys quests={quests} answers={answers} certos={certos} errados={errados}/>
                  <FlatListBox
                    data={answers}
                    renderItem={({ item, index }) => (
                      <Result quests={quests} resposta={item} index={index} />
                    )}
                    keyExtractor={(item, index) => item + index}
                  />
                  <ButtonRestart onPress={() => handlePlay(true)} style={{ marginVertical: 10 }}>

                    <ButtonText> RECOMEÇAR! </ButtonText>

                  </ButtonRestart>
                </>
              )
        }
      </Container>
    </Background>
  );
}
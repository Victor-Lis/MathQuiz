import { useEffect, useState } from 'react';
import {
    PlayBoxScroll,
    PlayBox,
    ResponseBox,
    Quest,
    Answer,
    ProgressBar,
    Progress,
    ButtonNext,
    ButtonNextText,
    ResumeBox,
    ResumeBoxText,
    ResumeBoxDescription,
    BestPlay,
    ResumeBoxStrong,
    RestartBox,
    RestartText,
} from './styles';
import { Text } from 'react-native';

export default function Game({ user, nivel, updateRecord, setPlaying }) {

    const [number, setNumber] = useState()
    const [quests, setQuests] = useState()
    const [answers, setAnswers] = useState("a")
    const [currentQuest, setCurrentQuest] = useState(0)

    const [hasResponse, setHasResponse] = useState(false)
    const [answer, setAnswer] = useState()

    const [time, setTime] = useState(0)
    const [runTimer, setRunTimer] = useState(false)
    const [rights, setRights] = useState(0)

    function getNumbers() {

        if (nivel) {
            if (nivel == "Fundamental I") {

                let q = []
                let a = []

                for (var i = 0; i < 10; i++) {

                    let newNumber = Math.floor(Math.random() * 10) + 1
                    let num = Math.floor(Math.random() * 10) + 1

                    let operations = ["+", "-"]
                    let newOperation = Math.floor(Math.random() * operations.length)
                    q.push(`${num} ${operations[newOperation]} ${newNumber}`)
                    if (operations[newOperation] == "+") {

                        a.push(num + newNumber)

                    } else if (operations[newOperation] == "-") {

                        a.push(num - newNumber)

                    }

                    setQuests(q)
                    setAnswers(a)

                }

            } else if (nivel == "Fundamental II") {

                let q = []
                let a = []

                for (var i = 0; i < 10; i++) {

                    let newNumber = Math.floor(Math.random() * 100) + 1
                    let num;
                    if (number) {

                        num = number

                    } else {

                        num = Math.floor(Math.random() * 100) + 1

                    }

                    let operations = ["+", "-", "X", "÷"]
                    let newOperation = Math.floor(Math.random() * operations.length)
                    q.push(`${num} ${operations[newOperation]} ${newNumber}`)
                    if (operations[newOperation] == "+") {

                        a.push(num + newNumber)

                    } else if (operations[newOperation] == "-") {

                        a.push(num - newNumber)

                    } else if (operations[newOperation] == "X") {

                        a.push(num * newNumber)

                    } else if (operations[newOperation] == "÷") {

                        a.push(`${num / newNumber}`.slice(0, 4))

                    }

                    setQuests(q)
                    setAnswers(a)

                }

            } else if (nivel == "Ensino Médio / Técnico") {

                let q = []
                let a = []

                for (var i = 0; i < 10; i++) {
                    
                    let newNumber = Math.floor(Math.random() * 100) + 1
                    let num = Math.floor(Math.random() * 100) + 1
                    
                    let operations = ["+", "-", "X", "÷", "^"]
                    let newOperation = Math.floor(Math.random() * operations.length)

                    
                    let invertNum = Math.floor(Math.random() * 10) + 1
                    if (invertNum <= 5) {

                        num = num * -1

                    }

                    let invertNewNumber = Math.floor(Math.random() * 10) + 1
                    if (invertNewNumber <= 5) {

                        newNumber = newNumber * -1

                    }


                    if (operations[newOperation] == "^") {

                        newNumber = Math.floor(Math.random() * 3)

                    }

                    if (operations[newOperation] == "+") {

                        a.push(num + newNumber)

                    } else if (operations[newOperation] == "-") {

                        a.push(num - newNumber)

                    } else if (operations[newOperation] == "X") {

                        a.push(num * newNumber)

                    } else if (operations[newOperation] == "÷") {

                        a.push(`${num / newNumber}`.slice(0, 4))
                        
                    } else {

                        a.push(`${Math.pow(num, newNumber)}`.slice(0, 4))

                    }

                    q.push(`${num} ${operations[newOperation]} ${newNumber}`)
                    setQuests(q)
                    setAnswers(a)

                }

            } else {

                let q = []
                let a = []

                for (var i = 0; i < 10; i++) {
                    
                    let newNumber = Math.floor(Math.random() * 1000) + 1
                    let num = Math.floor(Math.random() * 1000) + 1
                    
                    let operations = ["+", "-", "X", "÷", "^", "√"]
                    let newOperation = Math.floor(Math.random() * operations.length)
                    
                    let invertNum = Math.floor(Math.random() * 10) + 1
                    if (invertNum <= 5 && operations[newOperation] != "√") {

                        num = num * -1

                    }

                    let invertNewNumber = Math.floor(Math.random() * 10) + 1
                    if (invertNewNumber <= 5) {

                        newNumber = newNumber * -1

                    }


                    if (operations[newOperation] == "^") {

                        newNumber = Math.floor(Math.random() * 3)

                    }
                    if (operations[newOperation] != "√") {
                        q.push(`${num} ${operations[newOperation]} ${newNumber}`)
                    }else{
                        q.push(`${operations[newOperation]}${num}`)
                    }
                    if (operations[newOperation] == "+") {

                        a.push(num + newNumber)

                    } else if (operations[newOperation] == "-") {

                        a.push(num - newNumber)

                    } else if (operations[newOperation] == "X") {

                        a.push(num * newNumber)

                    } else if (operations[newOperation] == "÷") {

                        a.push(`${num / newNumber}`.slice(0, 4))

                    } else if (operations[newOperation] == "^") {

                        a.push(`${Math.pow(num, newNumber)}`.slice(0, 4))

                    } else {

                        a.push(`${Math.sqrt(num)}`.slice(0, 4))

                    }

                    setQuests(q)
                    setAnswers(a)

                }

            }

        }

    }

    function getAnswer() {

        if (answer) {

            if (!hasResponse) {

                setHasResponse(!hasResponse)
                if (answers[currentQuest] == answer) {

                    setRights(rights + 1)

                }

            } else {

                setHasResponse(false)
                setAnswer()
                setCurrentQuest(currentQuest + 1)

            }

            if (currentQuest >= 9) {

                setRunTimer(false)
                updateRecord(time, rights, 10 - rights)

            }

        }

    }

    function formatTime(min, sec) {

        return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`

    }

    useEffect(() => {

        if (runTimer) {
            setTimeout(() => {
                setTime(time + 1)
            }, 1000)
        }

    }, [time])

    useEffect(() => {

        setRunTimer(true)
        setTime(time + 1)
        getNumbers()

    }, [])

    return (
        <PlayBoxScroll>
            {currentQuest < 10 && quests ?
                <PlayBox>

                    <ProgressBar>
                        <Progress width={(currentQuest + 1)}>
                            {currentQuest > 0 && <Text> {formatTime(Math.floor(time / 60), `${(time % 60)-1}`.slice(0, 2))} </Text>}
                        </Progress>
                    </ProgressBar>
                    <ResponseBox>
                        <Quest> {!hasResponse ? quests[currentQuest] : answers[currentQuest]} </Quest>
                        <Answer onChangeText={(txt) => setAnswer(txt)} value={answer} keyboardType='numeric' color={hasResponse ? answers[currentQuest] == answer ? "rgb(0,255,0)" : "rgb(255, 0,0)" : "#fff"} editable={!hasResponse} />
                    </ResponseBox>
                    <ButtonNext onPress={() => getAnswer()}>

                        <ButtonNextText> {!hasResponse ? "Responder!" : "Próximo"} </ButtonNextText>

                    </ButtonNext>

                </PlayBox>
                :
                <ResumeBox>

                    <ResumeBoxText> Fim! </ResumeBoxText>

                    <BestPlay> Partida Atual</BestPlay>
                    <ResumeBoxDescription> Tempo: {formatTime(Math.floor(time / 60), `${(time % 60)-1}`.slice(0, 2))} </ResumeBoxDescription>
                    <ResumeBoxDescription> Acertos <ResumeBoxStrong color="rgb(15, 215, 0)">{rights}</ResumeBoxStrong> </ResumeBoxDescription>
                    <ResumeBoxDescription> Erros <ResumeBoxStrong color="rgb(215, 15, 0)">{10 - rights}</ResumeBoxStrong> </ResumeBoxDescription>

                    {user.escolaridade == "Fundamental I" &&
                        <>
                            <BestPlay> Melhor Partida </BestPlay>
                            <ResumeBoxDescription> Tempo: {formatTime(Math.floor(user.melhorPartida1.tempo / 60), `${user.melhorPartida1.tempo % 60}`.slice(0, 2))} </ResumeBoxDescription>
                            <ResumeBoxDescription> Acertos <ResumeBoxStrong color="rgb(15, 215, 0)">{user.melhorPartida1.certos}</ResumeBoxStrong> </ResumeBoxDescription>
                            <ResumeBoxDescription> Erros <ResumeBoxStrong color="rgb(215, 15, 0)">{user.melhorPartida1.errados}</ResumeBoxStrong> </ResumeBoxDescription>

                            <RestartBox onPress={() => setPlaying(false)}>
                                <RestartText> Recomeçar </RestartText>
                            </RestartBox>
                        </>
                    }
                    {user.escolaridade == "Fundamental II" &&
                        <>
                            <BestPlay> Melhor Partida </BestPlay>
                            <ResumeBoxDescription> Tempo: {formatTime(Math.floor(user.melhorPartida2.tempo / 60), `${user.melhorPartida2.tempo % 60}`.slice(0, 2))} </ResumeBoxDescription>
                            <ResumeBoxDescription> Acertos <ResumeBoxStrong color="rgb(15, 215, 0)">{user.melhorPartida2.certos}</ResumeBoxStrong> </ResumeBoxDescription>
                            <ResumeBoxDescription> Erros <ResumeBoxStrong color="rgb(215, 15, 0)">{user.melhorPartida2.errados}</ResumeBoxStrong> </ResumeBoxDescription>

                            <RestartBox onPress={() => setPlaying(false)}>
                                <RestartText> Recomeçar </RestartText>
                            </RestartBox>
                        </>
                    }
                    {user.escolaridade == "Ensino Médio / Técnico" &&
                        <>
                            <BestPlay> Melhor Partida </BestPlay>
                            <ResumeBoxDescription> Tempo: {formatTime(Math.floor(user.melhorPartida3.tempo / 60), `${user.melhorPartida3.tempo % 60}`.slice(0, 2))} </ResumeBoxDescription>
                            <ResumeBoxDescription> Acertos <ResumeBoxStrong color="rgb(15, 215, 0)">{user.melhorPartida3.certos}</ResumeBoxStrong> </ResumeBoxDescription>
                            <ResumeBoxDescription> Erros <ResumeBoxStrong color="rgb(215, 15, 0)">{user.melhorPartida3.errados}</ResumeBoxStrong> </ResumeBoxDescription>

                            <RestartBox onPress={() => setPlaying(false)}>
                                <RestartText> Recomeçar </RestartText>
                            </RestartBox>
                        </>
                    }
                    {user.escolaridade == "Ensino Superior" &&
                        <>
                            <BestPlay> Melhor Partida </BestPlay>
                            <ResumeBoxDescription> Tempo: {formatTime(Math.floor(user.melhorPartida4.tempo / 60), `${user.melhorPartida4.tempo % 60}`.slice(0, 2))} </ResumeBoxDescription>
                            <ResumeBoxDescription> Acertos <ResumeBoxStrong color="rgb(15, 215, 0)">{user.melhorPartida4.certos}</ResumeBoxStrong> </ResumeBoxDescription>
                            <ResumeBoxDescription> Erros <ResumeBoxStrong color="rgb(215, 15, 0)">{user.melhorPartida4.errados}</ResumeBoxStrong> </ResumeBoxDescription>

                            <RestartBox onPress={() => setPlaying(false)}>
                                <RestartText> Recomeçar </RestartText>
                            </RestartBox>
                        </>
                    }

                </ResumeBox>
            }
        </PlayBoxScroll>
    );
}
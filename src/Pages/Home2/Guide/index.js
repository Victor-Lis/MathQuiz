import { GuideBox, GuideTitle, GuideStrong, GuideDescription } from './styles';

export default function Guide({nivel}) {

    function guideTitleColor(nivel){

        if(nivel == "Fundamental I"){

            return "rgb(0,225,0)"

        }else if(nivel == "Fundamental II"){

            return "rgb(225,225,0)"

        }else if(nivel == "Ensino Médio / Técnico"){

            return "rgb(255,150,0)"

        }else{

            return "rgb(225,0,0)"

        }

    }

    function guideNumbers(nivel){

        if(nivel == "Fundamental I"){

            return "Naturais(N) menores ou iguais a 100"

        }else if(nivel == "Fundamental II"){

            return "Inteiros(Z) menores ou iguais a 1000"

        }else if(nivel == "Ensino Médio / Técnico"){

            return "Racionais(Q)"

        }else{

            return "Não há limitações"

        }

    }

    function guideOperations(nivel){

        if(nivel == "Fundamental I"){

            return "+     -"

        }else if(nivel == "Fundamental II"){

            return "+     -     X     ÷"

        }else if(nivel == "Ensino Médio / Técnico"){

            return "+     -     X     ÷     ^     √"

        }else{

            return "+     -     X     ÷     ^     √"

        }

    }

    return (
        <GuideBox>
            <GuideTitle> <GuideStrong size={20} transform={"none"} color={guideTitleColor(nivel)}>Nível</GuideStrong> {nivel} </GuideTitle>

            <GuideStrong margin={"15px 15px 2.5px 15px"}>Números</GuideStrong>
            <GuideDescription> {guideNumbers(nivel)} </GuideDescription>

            <GuideStrong margin={"15px 15px 2.5px 15px"}>Operações</GuideStrong>
            <GuideDescription> {guideOperations(nivel)} </GuideDescription>
        </GuideBox>
    );
}
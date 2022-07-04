import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";

interface props {
  letter: string;
  customOnClick(): void;
  answer: string;
}

const Resp = ({ letter, customOnClick, answer }: props) => {
  return (
    <Box
      sx={{
        background: "rgba(229, 147, 87, 0.1)",
        color: "#9F9180",
        fontSize: "15px",
        display: "flex",
        width: "80%",
        marginTop: "20px",
      }}
      onClick={customOnClick}
    >
      <Box
        sx={{
          width: "70px",
          height: "70px",
          color: "#E18251",
          backgroundColor: "white",
          border: "2px solid #E18251",
          fontSize: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        {letter}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {answer}
      </Box>
    </Box>
  );
};

const perguntas = [
  {
    question: "Qual idade precisa para doar?",
    answer: ["16 a 69 anos", "Menor que 16", "Maior que 69", "Indefinido"],
    correct: 0,
  },
  {
    question: "Qual peso precisa para doar?",
    answer: ["Menos que 50kg", "Mais que 50kg", "Mais que 40kg", "Indefinido"],
    correct: 1,
  },
  {
    question: "Pessoas doentes podem doar?",
    answer: ["Não", "Sim", "Talvez", "Indefinido"],
    correct: 0,
  },
  {
    question: "Que tipo de alimentos evitar comer antes de doar?",
    answer: ["Gordurosos", "Energeticos", "Saudaveis", "Indefinido"],
    correct: 0,
  },
  {
    question: "Quantas horas no minimo precisa ter dormido na ultima noite?",
    answer: ["4 horas", "3 horas", "6 horas", "1o horas"],
    correct: 2,
  },
  {
    question: "Quantas vezes um homem pode doar sangue por ano?",
    answer: ["2 vezes", "1 vez", "4 vezes", "5 vezes"],
    correct: 3,
  },
  {
    question: "Quantas vezes uma mulher pode doar sangue por ano?",
    answer: ["2 vezes", "1 vez", "3 vezes", "5 vezes"],
    correct: 3,
  },
  {
    question: "Uma mulher pode doar quanto tempo apos o parto?",
    answer: ["2 dias", "12 meses", "2 anos", "1 mes"],
    correct: 1,
  },
  {
    question: "Quanto tempo apos resfriado alguem pode doar?",
    answer: ["1 dia", "2 horas", "1 mes", "7 dias"],
    correct: 3,
  },
  {
    question: "Quem faz tatuagem pode doar apos quanto tempo?",
    answer: ["12 meses", "4 meses", "2 anos", "1 semana"],
    correct: 0,
  },
];

const Quiz = () => {
  const [question, setQuestion] = useState(1);
  const [success, setSuccess] = useState(false);
  const [corrects, setCorrects] = useState(0);
  const [pergunta, setPergunta] = useState(perguntas[0]);

  const handleQuestion = (pergunta: any, index: number) => {
    if (pergunta.correct === index) setCorrects(corrects + 1);
    if (question === 10) setSuccess(true);
    else {
      setQuestion(question + 1);
      setPergunta(perguntas[question]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HeaderHome text="Quiz" />
      {!success && (
        <>
          <Box sx={{ padding: "10px", width: "100%" }}>
            <Typography sx={{ color: "#A6A1B3" }}>
              Questao {question} de 10
            </Typography>
            <Box
              sx={{
                width: "100%",
                background: "#D7DBD9",
                height: "4px",
                marginTop: "5px",
              }}
            >
              <Box
                sx={{
                  width: `${question * 10}%`,
                  background:
                    "linear-gradient(122.59deg, #E5BD57 0%, #D53B3B 69.5%)",
                  height: "4px",
                  marginTop: "5px",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              paddingBottom: '100px'
            }}
          >
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                color: "#E18251",
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              {pergunta.question}
            </Box>
            <Resp
              letter="A"
              answer={pergunta.answer[0]}
              customOnClick={() => handleQuestion(pergunta, 0)}
            />
            <Resp
              letter="B"
              answer={pergunta.answer[1]}
              customOnClick={() => handleQuestion(pergunta, 1)}
            />
            <Resp
              letter="C"
              answer={pergunta.answer[2]}
              customOnClick={() => handleQuestion(pergunta, 2)}
            />
            <Resp
              letter="D"
              answer={pergunta.answer[3]}
              customOnClick={() => handleQuestion(pergunta, 3)}
            />
          </Box>
        </>
      )}
      {success && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#E18251",
            fontSize: "30px",
            marginTop: "20px",
            width: '100%',
            textAlign: 'center'
          }}
        >
          {" "}
          Você acertou {corrects} de 10 questões
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
 
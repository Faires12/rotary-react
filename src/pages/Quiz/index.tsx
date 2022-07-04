import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import HeaderHome from '../../components/HeaderHome'

interface props {
    letter: string
    customOnClick() : void
}

const Resp = ({letter, customOnClick} : props) => {
    return (
        <Box sx={{background: "rgba(229, 147, 87, 0.1)", color: "#9F9180", fontSize: '15px', display: 'flex',
        width: '80%', marginTop: '20px'}} onClick={customOnClick}>
            <Box sx={{width: '70px', height: '70px', color: "#E18251", backgroundColor: 'white', border: '2px solid #E18251',
            fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px'}}>
                {letter}
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
            Resposta da pergunta sendo que algo aqui vai ser {letter}.
            </Box>
        </Box>
    )
}

const Quiz = () => {
    const [question, setQuestion] = useState(1)
    const [success, setSuccess] = useState(false)

    const handleQuestion = () => {
        if(question === 10)
            setSuccess(true)
        setQuestion(question+1)
    }
    return (
        <Box sx={{width: '100%'}}>
            <HeaderHome text='Quiz'/>
            {!success && <><Box sx={{padding: '10px', width: '100%'}}>
                <Typography sx={{color: "#A6A1B3"}}>Questao {question} de 10</Typography>
                <Box sx={{width: '100%', background: "#D7DBD9", height: '4px', marginTop: '5px'}}>
                    <Box sx={{width: `${question*10}%`, 
                    background: "linear-gradient(122.59deg, #E5BD57 0%, #D53B3B 69.5%)", height: '4px', marginTop: '5px'}}></Box>
                </Box>
            </Box>
            <Box sx={{width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                <Box sx={{width: '100%', textAlign: 'center', color: "#E18251", fontSize: '16px', marginTop: '15px'}}>
                    Questão {question}
                </Box>
                
                <Resp letter="A" customOnClick={handleQuestion}/>
                <Resp letter="B" customOnClick={handleQuestion}/>
                <Resp letter="C" customOnClick={handleQuestion}/>
                <Resp letter="D" customOnClick={handleQuestion}/>
            </Box></>}
            {
                success && 
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: "#E18251", fontSize: '30px', marginTop: '20px'}}> Parabens</Box>
            }
        </Box>
    )
}

export default Quiz
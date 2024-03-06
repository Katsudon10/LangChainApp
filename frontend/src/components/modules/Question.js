import React, { useState } from 'react';
import {Button,Input} from '@chakra-ui/react';

import axios from 'axios';
import Answer from '../atoms/Answer';


function Question() {
    const [question,setQuestion] = useState("")
    const [answer,setAnswer] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/chat',{question: question}).then((res) => {
            setAnswer(res.data);
        }).catch((err) => {
            console.log(err);
        });
        setQuestion("");
    }

    return (
        <div>
            <form >
                <Input 
                    size="md" 
                    width="auto" 
                    type="text" 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder='質問を入力してください'
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                />
                <Button onClick={handleSubmit} colorScheme="teal" size="md">実行する</Button>
            </form>
            {answer ? (
                <div>
                    <Answer answer={answer[0].answer} model="OpenAI" />
                    <Answer answer={answer[1].answer} model="Azure" />
                    <Answer answer={answer[2].answer} model="Gemini" />
                </div>
                ) :
                (<div>
                    <p>生成中です．</p>
                </div>)
            }
        </div>
    );
};

export default Question;
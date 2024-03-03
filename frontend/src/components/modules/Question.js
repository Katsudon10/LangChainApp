import React, { useState } from 'react';
import {Button,Input} from '@chakra-ui/react';

import {Link} from "react-router-dom";

function Question() {
    const [question,setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        <Link to="/result" />
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
        </div>
    );
};

export default Question;
import React, { useState } from 'react';
import {Button} from '@chakra-ui/react';

import {Link} from "react-router-dom";

function Question() {
    const [question,setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        <Link to="/result" />
    }

    return (
        <div>
            <form >
                <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='質問を入力してください'/>
                <Button onClick={handleSubmit} colorScheme="teal" size="md">実行する</Button>
            </form>
        </div>
    );
};

export default Question;
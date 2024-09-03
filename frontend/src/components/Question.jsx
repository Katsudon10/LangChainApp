import React, { useState } from 'react';

import axios from 'axios';
import Chat from './Chat';


function Question() {
    const [messages, setMessages] = useState([]);
    const [question,setQuestion] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(question.trim()) {
            setMessages(prevMessages => [...prevMessages, { message: question, sender: 'user' }]);
            axios.post('http://localhost:8000/chat',{question:question}).then((res) => {
                setMessages(prevMessages => [...prevMessages, { message: res.data[0].answer, sender: 'OpenAI' }]);
                setMessages(prevMessages => [...prevMessages, { message: res.data[1].answer, sender: 'Google' }]);
                setMessages(prevMessages => [...prevMessages, { message: res.data[2].answer, sender: 'Claude' }]);
            }).catch((err) => {
                console.log(err);
            });
            setQuestion("");
        }
    };

    // const sendGPTs = (question) => {
    //     axios.post('http://localhost:8000/chat',{question: question}).then((res) => {
    //         setMessages([...messages, { message: res.data.answer, sender: 'bot' }]);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    return (
        <div className='container mx-auto pt-16 h-[calc(100%-8rem)] flex flex-col'>
            <div className="flex-grow overflow-y-auto hide-scrollbar p-4">
                {messages.map((msg, index) => (
                    // <div
                    //     key={index}
                    //     className={`p-2 my-2 rounded-lg ${
                    //     msg.sender === 'user' ? 'bg-blue-500 text-white max-w-md ml-auto block w-fit' : 'bg-gray-300 text-black mr-auto'
                    //     }`}
                    // >
                    //     {msg.message}
                    // </div>
                    
                    <Chat  key={index} message={msg.message} sender={msg.sender} />
                ))}
            </div>
            <div className='fixed bottom-6 left-0 right-0 container mx-auto p-4 bg-white border-t'>
                <form className='flex items-center space-x-2'>
                    <textarea
                        rows={1}
                        type="text" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                        placeholder='メッセージを送信する'
                        className='flex-grow p-2 border rounded resize-none'
                    />
                    <button onClick={handleSubmit} className='w-20 p-2 bg-blue-500 text-white rounded-lg' >実行する</button>
                </form>
            </div>
        </div>
    );
};

export default Question;
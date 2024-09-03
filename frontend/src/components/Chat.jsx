import React from 'react'
import Avatar from './Avatar'

function Chat({message,sender}) {
  return (
    <div className={sender !== 'user' ? 'flex' : null}>
      {sender !== 'user' ? <Avatar sender={sender} /> : null}
      <div
        className={`p-2 my-2 rounded-lg ${
          sender === 'user' ? 'bg-blue-500 text-white max-w-md ml-auto block w-fit' : 'bg-gray-300 text-black mr-auto'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Chat
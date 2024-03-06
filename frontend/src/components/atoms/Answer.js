const Answer = ({answer,model}) =>{
    return (
        <div>
            <div className="answer" style={AnswerStyle}>
                <h1>{model}</h1>
                <p>{answer}</p>
            </div>
        </div>
    )
};

export default Answer;

const AnswerStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    margin: '20px 0',
    borderRadius: '10px'
}
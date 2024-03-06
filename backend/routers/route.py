from fastapi import APIRouter

from typing import List
import schemas.chat as chat_schema
import schemas.history as history_schema
import schemas.chat as model_schema
import schemas.chat as question_schema

from LangChain.GoogleChat import Chat_GoogleAI
# from LangChain.AzureChat import Chat_Azure
# from LangChain.OpenAIChat import Chat_OpenAI

router = APIRouter()

@router.get("/history/",response_model=List[history_schema.History])
async def history():
    pass

@router.post("/chat/",response_model=List[chat_schema.Chat])
# async def chat(question:question_schema.Question,model:List[model_schema.Model]):
async def chat(question:question_schema.Question):
    # ans_google=Chat_GoogleAI("gemini-pro",1.0,1.0,question.question)
    # ans_azure=Chat_Azure("gpt-35-turbo",1.0,1.0,question.question)
    # ans_openai=Chat_OpenAI("gpt-3.5-turbo",1.0,1.0,question.question)
    # retrun [chat_schema.Chat(answer=ans_openai),chat_schema.Chat(answer=ans_azure),chat_schema.Chat(answer=ans_google)]
    
    ans=Chat_GoogleAI("gemini-pro",1.0,1.0,question.question)
    return [chat_schema.Chat(answer=ans),chat_schema.Chat(answer=ans),chat_schema.Chat(answer=ans)]
    


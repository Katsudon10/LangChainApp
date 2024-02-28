from fastapi import APIRouter

from typing import List
import schemas.chat as chat_schema
import schemas.history as history_schema
import schemas.chat as model_schema
import schemas.chat as question_schema

router = APIRouter()

@router.get("/history/",response_model=List[history_schema.History])
async def history():
    pass

@router.post("/chat/",response_model=List[chat_schema.Chat])
async def chat(question:question_schema.Question,model:List[model_schema.Model]):
    return [chat_schema.Chat(answer="Hello"),chat_schema.Chat(answer="World")]


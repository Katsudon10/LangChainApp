from typing import List, Optional
from pydantic import BaseModel

class Chat(BaseModel):
    answer: str
    class Config:
        orm_mode = True

class Question(BaseModel):
    question: str
    class Config:
        orm_mode = True

class Model(BaseModel):
    model_name: str
    temperature: float
    top_p: float
    class Config:
        orm_mode = True
from typing import List, Optional
from pydantic import BaseModel

class History(BaseModel):
    question: str
    answer: List[str]
    class Config:
        orm_mode = True
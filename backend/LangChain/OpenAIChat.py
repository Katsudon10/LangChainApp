import os
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI

load_dotenv()

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

def Chat_OpenAI(model_name,temperature,top_p, question):
    model = ChatOpenAI(
        model_name=model_name,
        temperature=temperature,
        # model_kwargs={
        #     "top_p": top_p,
        # }
    )

    answer = model.invoke(question).content
    return answer

if __name__ == "__main__":
    print(Chat_OpenAI("gpt-4o",0,1.0, "10 plus 10"))
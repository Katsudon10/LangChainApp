import os
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()

os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")

def Chat_GoogleAI(model_name,temperature,top_p, question):
    model = ChatGoogleGenerativeAI(
        model=model_name,
        temperature=temperature,
        # kwargs={
        #     "top_p": top_p,
        # }
    )

    answer = model.invoke(question).content
    return answer

if __name__ == "__main__":
    print(Chat_GoogleAI("gemini-pro",1.0,1.0, "What is the meaning of life?"))
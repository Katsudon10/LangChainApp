import os
from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

load_dotenv()

os.environ["AZURE_OPENAI_API_KEY"] = os.getenv("AZURE_OPENAI_API_KEY")
os.environ["AZURE_OPENAI_ENDPOINT"] = os.getenv("AZURE_OPENAI_ENDPOINT")

def Chat_Azure(model_name,temperature,top_p, question):
    model = AzureChatOpenAI(
        model_name=model_name,
        temperature=temperature,
        kwargs={
            "top_p": top_p,
        }
    )

    answer = model.invoke(question).content
    return answer

if __name__ == "__main__":
    print(Chat_Azure("gpt-35-turbo",1.0,0.7, "What is the meaning of life?"))
import os
from dotenv import load_dotenv

from langchain_anthropic import ChatAnthropic

load_dotenv()

os.environ["ANTHROPIC_API_KEY"] = os.getenv("ANTHROPIC_API_KEY")

def Chat_Anthropic(model_name,temperature,top_p, question):
    model = ChatAnthropic(
        model_name=model_name,
        temperature=temperature,
        kwargs={
            "top_p": top_p,
        }
    )

    answer = model.invoke(question).content
    return answer

if __name__ == "__main__":
    # model_name = "claude-3-opus-20240229"
    # model_name = "claude-3-sonnet-20240229"
    # model_name = "claude-3-haiku-20240307"

    print(Chat_Anthropic("claude-3-opus-20240229",1.0,0.7, "What is the meaning of life?"))
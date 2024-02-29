# LangChainApp(制作中)
複数のLLMに同じ質問を同時に行い結果を返すアプリケーション．

対応しているLLM
* gemini[Google]
* chatGPT[openAI] (coming soon)
* Azure OpenAI[microsoft] (coming soon)
* Amazon Bedrok[Amazon] (coming soon)

# 開発環境
* Node.js 20.11.1
* Python 3.9.18
* MySQL 8.0

# 環境構築
1. ```bash
   git clone https://github.com/Katsudon10/LangChainApp.git
   ```
2. .envの作成 
   ```.env
   DB_HOST=
   DB_ROOT_PASSWORD=
   DB_NAME=
   DB_USER=
   DB_PASSWORD=

   OPENAI_API_KEY=""
   AZURE_OPENAI_API_KEY=""
   AZURE_OPENAI_ENDPOINT=""
   GOOGLE_API_KEY=""
   ```
3. ```bash
   docker compose up -d
   ```
4. http://localhost:3000/ にアクセス

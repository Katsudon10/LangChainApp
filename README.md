# LangChainApp
複数のLLMに同じ質問を同時に行い結果を返すアプリケーション．
![実行した様子](https://github.com/Katsudon10/LangChainApp/blob/main/assets/LLM.png)
各LLMを実行するにはAPIキーをenvファイルに書き込んでください．

# 作成経緯
* LLMは必ず正しい情報を生成するわけではないので，情報の正確性を確かめる必要がある．
* LLMの特徴として分からないものは生成内容が雑になる．
* そのため，複数のLLMを実行し，生成した内容の類似度が高ければ情報の信頼度が高いと判定できる

# 現状 
* フロントエンドの改修に向けReact，TypeScriptを勉強中です．
* データベースは環境構築は終わっていますが，履歴を表示する機能を実装する予定です．

# 対応しているLLM
* gemini [Google]
* chatGPT [openAI] 
* Claude3 [Anthropic] 

# 開発環境
* Node.js 20.11.1
* Python 3.9.18
* MySQL 8.0

# 環境構築
1. ```bash
   git clone https://github.com/Katsudon10/LangChainApp.git
   ```
2. .envの作成 
   実行するには各LLMのAPIキーが必要です．
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
   ANTHROPIC_API_KEY=""
   ```
3. ```bash
   docker compose up -d
   ```
4. http://localhost:3000/ にアクセス

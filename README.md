# 課題3(アプリケーションエンジニアBootcamp)　
### 課題3URL : https://app-kadai3.vercel.app

## 求人検索画面
<img width="998" alt="image" src="https://github.com/user-attachments/assets/16265f81-99eb-4750-8536-5837c00926c6">

## 求人投稿画面
<img width="1001" alt="image" src="https://github.com/user-attachments/assets/97da9d89-31cb-4cc3-b042-ede950316672">

# 使用技術

- **Node.js**: v20
- **npm**: 10.8.2
- **フロントエンド & バックエンド**:
  - [Next.js](https://nextjs.org/) 14.2.7
  - [React](https://reactjs.org/) 18.3.1
  - [TypeScript](https://www.typescriptlang.org/) 5.x
  - [Tailwind CSS](https://tailwindcss.com/) 3.4.1
- **データベース**: [Supabase](https://supabase.com/) (PostgreSQLベース)
- **ホスティング**: [Vercel](https://vercel.com/)

# 機能一覧
- 求人の一覧表示
- 求人職種のカテゴリフィルタリング
- 年収額によるフィルタリング
- 新規求人情報の投稿
  - ヘッダーの求人投稿リンクから投稿画面に遷移
  - 求人タイトル、カテゴリ、年収(万円)を入力して投稿
- レスポンシブデザイン対応

# 動作手順

1.　 app_kadai3リポジトリをクローンする。
2'  .env'ファイルを作成して、Supabaseの環境変数を設定してください。
```.env
NEXT_PUBLIC_SUPABASE_URL=Supabase_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=Supabaseのキー
```
3. Dockerコンテナをビルドし、起動する。
```
docker-compose up --build
```
4. ブラウザで、`http://localhost:3000` にアクセスする

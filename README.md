# GLPro-api

GLPro のバックエンド

## 採用技術

- Express
- Typescript
- jest
- Prisma

## Started

パッケージ導入  
`npm install`

開発環境起動  
`npm run dev`<br>

Router ファイル更新  
`npm run router`<br>

Swagger 更新  
`npm run Swagger`<br>

Prettier  
`npm run format`<br>

jest  
`npm run test`<br>

prisma studio  
`npx prisma studio`<br>

## DB 設定

マイグレーションの実行<br>
`npx prisma migrate dev --name init --preview-feature`

クライアントコードの作成<br>
`npx prisma generate`

## 開発環境立ち上げまで

`npm install` を実行後
`npm run dev` を実行し http://localhost:8080 を起動する

## 開発ルール

- vscode の拡張機能である eslint・Prettier を導入する<br>
  => Prettier は自動フォーマットを有効化すること
  設定方法は以下を参照: https://qiita.com/yuma-ito-bd/items/cca7490fd7e300bbf169#vscodeでの自動フォーマット設定

- 命名規則などは Google Javascript style ガイドに従う<br>
  => [Google style ガイド](https://w.atwiki.jp/aias-jsstyleguide2/pages/1.html)

## Github 運用ルール

[Github 運用について](https://github.com/yoshida874/GLPro-web/blob/develop/documents/githubRule.md)

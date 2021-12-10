# Prisma ドキュメント

## 使用手順

### 1. Prisma schema ファイルの作成

```typescript : schema.prisma

  //データベースの接続情報
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }

  // generateコマンドで生成するものを指定
  generator client {
    provider = "prisma-client-js"
  }

  // アプリケーションで使用するモデル
  model User {
    id    Int     @id @default(autoincrement())
    email String  @unique
    name  String?
  }
```

### 2. Prisma Client の生成

@prisma/client をインストール。

> npm install @prisma/client

### 3. Prisma schema を読み込む

> prisma generate

### 4. クエリーの発行

@prisma/client からインポートして、Prisma Client インスタンスを作成し、クエリーを発行する。

```
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
```

### 5. クエリー例

- 全ユーザーの取得

```typescript
const allUsers = await prisma.user.findMany();
```

- 名前に「prisma」を含むユーザーを取得

```typescript
const getWithUser = await prisma.user.findMany({
  where: {
    name: { contains: 'prisma' },
  },
});
```

- ユーザーの追加

```typescript
const createUser = await prisma.user.create({
  create: {
    email: "hoge@prisma.io",
    name: 'prisma',
});
```

- 条件を指定してユーザーを更新

```typescript
const updateUser = await prisma.user.update({
  where: { id: 42 },
  data { name: "prisma" },
});
```

### 6. マイグレーションの実行

> prisma migrate

---

## Prisma Studio コマンド一覧

### DB への接続手順 ([Getting Started](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgres))

### Prisma の初期化

> <font color="Green">npx prisma init</font>

### Prisma と DB の接続確認

> <font color="Green">npx prisma migrate dev --name init</font>

### DB の更新

> <font color="Green">npx prisma migrate dev --name init "更新内容"</font>

### Seed の登録

#### ./prisma/seed.ts が実行されます。

> <font color="Green">npx prisma db seed</font>

### db の再構築

> <font color="Green">prisma db reset</font>

#### このコマンドは

1. db の再構築
1. `prisma migrate`
1. `prisma db seed`

を順番に実行しています。

### Prisma studio の 起動

> <font color="Green">npx prisma studio<</font>

---

### [公式ドキュメントはこちらをクリック](https://www.prisma.io/docs/)

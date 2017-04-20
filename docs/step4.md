## ハンズオン４：Cognito UserPoolで会員登録基盤を作る

### Goal
Cognito UserPoolで会員登録基盤を作る
※ここではServerless Frameworkは使いません

### 1:コンソールを開く

### 2:UserPoolを作る
emailでのログインはオフにする

### 3:Serverless Frameworkで使用するためのAPPを作る
`secret`をオフにしないとあとで泣く

### 4:会員登録画面のサンプルコードを取得する
ブラウザ上から実行できる会員登録ページのサンプルが、AWSのリポジトリにあります。
まずはこれを使って先ほど作ったUserPoolにユーザー登録してみましょう。

```
$ git clone git@github.com:aws/amazon-cognito-identity-js.git
$ cd amazon-cognito-identity-js/examples/babel-webpack/
```

### 5:サンプルコードをセットアップする
※この辺りから、React / webpackなどがでてきます
サンプルアプリとCognitoの接続設定をします。

```
$ vim src/config.js
export default {
  region: '{Cognito UserPoolを作ったリージョン}',
  IdentityPoolId: '{空欄でOK}',
  UserPoolId: '{Cognito UserPoolのID}',
  ClientId: '{Cognito UserPoolで作ったAPPのClientId}',
}
```

そのあとビルドを実行してからindex.htmlにアクセスしてみましょう。

```
$ npm install
$ npm run build
```

localhostでアクセスしたい場合は、`php -S localhost:8000`とかするとOK

#### ローカルで実行できない場合
`amazon-cognito-identity-js/examples/babel-webpack/`の中身をS3にアップロードして、静的ウェブサイトとして公開しましょう。

## Serverless Frameworkハンズオン資料

4/22にJAWS-UG Kyotoで開催されたハンズオンの資料です。

### 流れ

- [Step1: Serverless Frameworkに触れてみる](docs/step1.md)
- [Step2: Serverless Frameworkでプロジェクトを作成する](docs/step2.md)
- [Step3: Serverless FrameworkでAPIを作成する](docs/step3.md)

== ここからAdnvanced Mode ===

- [Step4: Cognito UserPoolで会員登録基盤を作る](docs/step4.md)
- [Step5: ログイン状態限定のAPIを作る](docs/step5.md)

### サンプルコード
- [Step2](example/step2)
- [Step3](example/step3)
- [Step4](https://github.com/aws/amazon-cognito-identity-js/tree/master/examples/babel-webpack)
- [Step5](https://github.com/hideokamoto/react-serverless-dashboard)


### 後編について
ブラウザ上で動かせるようにするため、Step4から`React`が出てきます。
基本的にはコピペと値の変更だけで動くはずですが、Step4以降突然作業内容が大きく変わってきますのでご了承ください。


### 「待ち時間暇なんだけどー」という方へ

[おまけ](docs/opptional.md)として、Serverless Frameworkを使ったもろもろのQiita記事まとめを用意しています。
各記事をみながらいろいろ遊んでみてください。

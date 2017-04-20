## ハンズオン３：Serverless FrameworkでAPIを作成する

### Goal
Serverless Frameworkを使用して、API Gateway + AWS Lambdaをデプロイする


### 1:`serverless.yml`でプロジェクトの設定を書く
Serverless Frameworkのプロジェクトは、`serverless.yml`で管理されています。

[Document(https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)

`functions`という項目に、Lambdaの定義が書かれています。
下にコメントアウトされている`events`で、API GatewayやDynamoDB Stream / Alexa Skill Kitなどとの連携もできます。

```
functions:
  hello:
    handler: handler.hello

#    The following are a few example events you can configure
#    NOTE: Please make sure to change your handler code to work with those events
#    Check the event documentation for details
#    events:
#      - http:
#          path: users/create
#          method: get
```


### 2:サンプルのLambdaにGETのAPIを追加する

作成したLambdaにAPI Gatewayを関連づけるには、`events/http`を設定します。

```
functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello
          method: get
```

- events: Lambdaを呼び出すイベントの定義
- http: API Gateway
- path: APIのパス`https://example.api.gateway/stage/PATH_NAME`
- method: リクエストメソッド

この状態で`sls deploy`してみましょう。

### 3:デプロイしたAPIにアクセスする

### 4:(小ネタ)HTMLを表示させる
こんな感じにすると、JSONじゃなくてHTMLがかえってくる。
```
functions:
  index:
    handler: src/index.index
    events:
      - http:
          path: /
          method: get
          integration: lambda
          response:
            headers:
              Content-Type: "'text/html'"
            template: $input.path('$')
```

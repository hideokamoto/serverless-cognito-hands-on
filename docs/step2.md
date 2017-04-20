## ハンズオン２：Serverless Frameworkでプロジェクトを作成する

### Goal
Serverless Frameworkを使用して、AWS Lambdaをデプロイする

### 1:プロジェクトを作成する
$ sls create

```
$ sls create --help
Plugin: Create
create ........................ Create new Serverless service
    --template / -t (required) ......... Template for the service. Available templates: "aws-nodejs", "aws-python", "aws-groovy-gradle", "aws-java-maven", "aws-java-gradle", "aws-scala-sbt", "aws-csharp", "azure-nodejs", "openwhisk-nodejs" and "plugin"
    --path / -p ........................ The path where the service should be created (e.g. --path my-service)
    --name / -n ........................ Name for the service. Overwrites the default name of the created service.
```

- `--template`で作成するリソースのランタイムを指定できます。（AWS Lambdaの場合は、`aws-XXXX`を選びます）
- `--path`を指定すると、そのパス名でディレクトリを作成してくれます。
- `--name`を指定すると、Serverless Frameworkで作成するプロジェクトの名前を定義できます

#### 実行サンプル
```
$ sls create --name step2-example --path step2 --template aws-nodejs
Serverless: Generating boilerplate...
Serverless: Generating boilerplate in "/Users/YOUR_USERNAME/hands-on/example/step2"
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v1.10.1
 -------'

Serverless: Successfully generated boilerplate for template: "aws-nodejs"
```

createに成功すると、以下のように３つのファイルが自動で生成されます。

```
$ tree
.
└── step2
    ├── .gitignore
    ├── handler.js
    └── serverless.yml

1 directory, 3 files
```

### 2:サンプルコードをローカル実行する

aws-nodejsなど、一部のtemplateは`sls invoke local`コマンドでローカル実行ができます。
します。

```
$ sls invoke local -f hello
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":\"\"}"
}
```

使用できるパラメーターは以下の3つです。

```
$ sls invoke local --help
Plugin: Invoke
invoke local .................. Invoke function locally
    --function / -f (required) ......... Name of the function
    --path / -p ........................ Path to JSON or YAML file holding input data
    --data / -d ........................ input data
```

Lambdaに値を渡したいとは、`--data`オプションを利用しましょう。
```
$ sls invoke local -f hello -d '{ "hoge" : true }'
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":{\"hoge\":true}}"
}
```

AWS Lambdaの実装については、通常のものと変わりありませんので省略します。

### 3: Lambdaファンクションをデプロイする
`serverless deploy`コマンドを利用することで、`serverless.yml`に定義されたリソースをデプロイできます。

```
$ serverless deploy --help
Plugin: Deploy
deploy ........................ Deploy a Serverless service
deploy function ............... Deploy a single function from the service
deploy list ................... List deployed version of your Serverless Service
    --stage / -s ....................... Stage of the service
    --region / -r ...................... Region of the service
    --noDeploy / -n .................... Build artifacts without deploying
    --verbose / -v ..................... Show all stack events during deploym
```

helpには記載されていませんが、AWS-CLI同様`--profile`オプションが利用できます。
```
$ sls deploy --profile CUSTOME-PROFILE
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
.....
Serverless: Stack create finished...
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (409 B)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
...............
Serverless: Stack update finished...
Service Information
service: step2-example
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  None
functions:
  hello: step2-example-dev-hello
```

#### Tips:複数環境へのデプロイ
開発用・本番用など、リソースを複数デプロイしたい場合は`--stage`オプションを利用します。
AWS Lambdaのエイリアス機能は利用できませんのでご注意ください。

#### Tips:リソース上限に注意
Serverless FrameworkはCloudFormationを利用しています。
大量のプロジェクトを１つのリージョンにデプロイし続けると、CloudFormationのスタック上限に引っかかる可能性がありますのでご注意ください。

1リージョン200スタックいけるので、大丈夫だとは思いますが・・・
参考：http://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html

### 4: デプロイしたLambdaを実行する

`sls invoke local`がローカル実行のコマンドでした。
AWS上のLambdaを実行する場合は、`sls invoke`を利用します。

```
$ sls invoke -f hello
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":{}}"
}
```

### 5: デプロイしたリソースを削除する
どうせなので、削除もやってしまいましょう。

```
$ sls remove
Serverless: Getting all objects in S3 bucket...
Serverless: Removing objects in S3 bucket...
Serverless: Removing Stack...
Serverless: Checking Stack removal progress...
.........
Serverless: Stack removal finished...
```

### まとめ
Serverless Frameworkを使えば、Lambdaファンクションのローカルテストやデプロイ・削除も簡単に行えます。

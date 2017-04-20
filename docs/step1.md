## ハンズオン１：Serverless Frameworkに触れてみる

### Goal
ターミナルからServerless Frameworkのコマンドを実行できるようになる

### 0:環境の確認

#### Node.js
Serverless FrameworkはNode.jsで動作するアプリケーションです。

`node -v`でNode.jsのバージョンを確認しておきましょう。
** このハンズオンでは、AWS Lambdaと同じ、`Node v4`以降を前提としています

```
$ node -v
v7.4.0
```

#### AWS-CLI
また、Serverless FrameworkはAWS-CLIのprofileを使用します。
以下のように、AWS-CLIの設定が実施できているか確認してください。

```
$ cat ~/.aws/config | head
[preview]
cloudfront = true

[profile default]
output = json
```

### 1:Serverless Frameworkをインストールする
それではServerless Frameworkをインストールしましょう。
以下のコマンドを実行してください。

```
$ npm install -g serverless
```

これで今作業している環境で、`serverless`コマンドが利用できるようになりました。

### 2:Serverlessコマンドを実行してみる

```
$ serverless -v
1.10.1
```

`serverless help`または`sls help`で実行できるコマンドの一覧が確認できます。

```
$ sls help

Commands
* Serverless documentation: http://docs.serverless.com
* You can run commands with "serverless" or the shortcut "sls"
* Pass "--help" after any <command> for contextual help

config credentials ............ Configures a new provider profile for the Serverless Framework
create ........................ Create new Serverless service
install ....................... Install a Serverless service from GitHub
deploy ........................ Deploy a Serverless service
deploy function ............... Deploy a single function from the service
deploy list ................... List deployed version of your Serverless Service
invoke ........................ Invoke a deployed function
invoke local .................. Invoke function locally
info .......................... Display information about the service
logs .......................... Output the logs of a deployed function
metrics ....................... Show metrics for a specific function
remove ........................ Remove Serverless service and all resources
rollback ...................... Rollback the Serverless service to a specific deployment
slstats ....................... Enable or disable stats

Plugins
AwsCompileAlexaSkillEvents, AwsCompileApigEvents, AwsCompileCloudWatchEventEvents, AwsCompileFunctions, AwsCompileIoTEvents, AwsCompileS3Events, AwsCompileSNSEvents, AwsCompileScheduledEvents, AwsCompileStreamEvents, AwsConfigCredentials, AwsDeploy, AwsDeployFunction, AwsDeployList, AwsInfo, AwsInvoke, AwsInvokeLocal, AwsLogs, AwsMetrics, AwsProvider, AwsRemove, AwsRollback, Config, Create, Deploy, Info, Install, Invoke, Logs, Metrics, Package, Remove, Rollback, SlStats
```

ここからはこのコマンドを使用して、LambdaやAPI Gatewayを作成していきます。

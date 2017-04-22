## おまけ

### Step5のサイトを公開するには？

`npm run build`した後に`public/`ディレクトリ配下を公開サーバーにアップロードすればOKです。

ただしReact Routerの仕様上、全てのリクエストをindex.htmlにリダイレクトする必要があり、そのままS3にアップロードするだけでは死にます。

Netlify用のリダイレクトルールは設定されていますので、Netlifyの無料アカウントを利用されるのがよいかもしれません。
https://www.netlify.com/

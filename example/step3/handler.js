'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  callback(null, response);
};

module.exports.html = (event, context, cb) => {
    var renderedPage = renderFullPage( 'Go Serverless v1.0! Your function executed successfully!');
  cb(null, renderedPage );
};

function renderFullPage(renderedContent) {
  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <div id="container">
          <h1>${renderedContent}</h1>
        </div>
    </body>
</html>`;
}

const express = require('express');

const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/dist'));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

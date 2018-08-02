var express = require('express');
var router = express.Router();
var linebot = require('linebot');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var bot = linebot({
  channelId: "1593876483",
  channelSecret: "3d1efd68c1debe10dd6143258c235540",
  channelAccessToken: "KMyl9eXYjFuMne4jnsT6WZz+qss9y8AX9KU7AGktkvMgR7DrddH1zIgWWIC6uwD6Spv3P1KnNsQle4MStyTrTgd8O2eGK+6yUnJkTELfeQM86rMi86N90J21M4NFARY9ZUak+nEoZrlno2Ui2KU+0wdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

module.exports = router;

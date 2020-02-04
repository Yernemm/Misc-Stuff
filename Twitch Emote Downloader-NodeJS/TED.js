var http = require('https');
var fs = require('fs');

var j = 680000;
download(j);
function download(i){
var file = fs.createWriteStream("emotes/"+i + ".png");
var request = http.get("https://static-cdn.jtvnw.net/emoticons/v1/"+ i +"/3.0", function(response) {
  response.pipe(file);
  console.log(i);
  j++;
  download(j);
});
}


var player = videojs('my-video');
const {ipcRenderer} = require('electron');

$("#my-video").width($(window).width());
$("#my-video").height($(window).height());
$( window ).resize(function() {
  $("#my-video").width($(window).width());
  $("#my-video").height($(window).height());
})


player.ready(function(){
  player.play();
});

ipcRenderer.on('info', function(event , data){
  if(data.key=='play'){
    player.play();
  }
  if(data.key=='pause'){
    player.pause();
  }
  if(data.key=='forward'){
    var at=player.currentTime();
    player.currentTime(at+20);
  }
  if(data.key=='rewind'){
    var at=player.currentTime();
    player.currentTime(at-20);
  }
  if(data.key=="F2"){
    $(window).load("http://localhost:8888/");
  }
  if(parseInt(data.key)>0 && parseInt(data.key)<10){
    var tot = player.duration();
    var go = Math.floor(tot/parseInt(data.key)*10)
    player.currentTime(go);
  }
})

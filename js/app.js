$(document).ready(function(){

 var controller = new ScrollMagic.Controller();

 var scene1= new ScrollMagic.Scene({
    triggerElement:"#trigger1"})
    .setTween("#basic", 0.5, {backgroundColor:"#008000"})
    .addTo(controller);


var scene2= new ScrollMagic.Scene({
    triggerElement:"#trigger12"})
    .setTween("#basic", 0.5, {backgroundColor:"#ffa500"})
    .addTo(controller);

var scene3= new ScrollMagic.Scene({
   triggerElement:"#trigger3"})
   .setTween("#basic", 0.5, {backgroundColor:"#a52a2a"})
   .addTo(controller);



  });

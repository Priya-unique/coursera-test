(function(window){
  var speakWord = "Hello";
  var hellospeak= function(name){
  console.log(speakWord + " " + name);
}
   window.hellospeak=hellospeak;
})(window);

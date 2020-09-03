(function(window) {
	var speakWord = "Good Bye";
	var byespeak = function (name) {
  		console.log(speakWord + " " + name);
  }
	window.byespeak = byespeak;
})(window);

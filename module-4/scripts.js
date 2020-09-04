var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++) {
  var speakWord="";
  if (names[i][0]=='j'||names[i][0]=='J') {
      speakWord = "Good Bye";
  } else {
      speakWord = "Hello";
  }
  document.write(speakWord + " " + name[i]);
}

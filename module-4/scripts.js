var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++) {
  if (names[i][0]=='j'||names[i][0]=='J') {
    document.write("Good Bye " + names[i]);
  } else {
    document.write("Hello " + names[i]);
  }
}

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++) {
  if (names[i][0]=='j'||names[i][0]=='J') {
    console.log("Good\n Bye " + names[i]+"\n\n");
  } else {
    console.log("Hello \n" + names[i]+"\n\n");
  }
}

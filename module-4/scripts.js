var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++) {
  if (names[i][0]=='y'||names[i][0]=='Y') {
    console.log("Good Bye" + names[i]);
  } else {
    console.log("Hello" + names[i]);
  }
}

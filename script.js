(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (/* fill in parts of the 'for' loop to loop over names array */ var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (/* fill in condition here */ firstLetter == 'j') {
      // byeSpeaker.xxxx
      byeSpeaker.speak(names[i]);
    } else {
      
      helloSpeaker.speak(names[i]);
    }
  }
  })();

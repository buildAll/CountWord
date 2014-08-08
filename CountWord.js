




var CountWord = function(){
  var startButton = document.getElementById("start");
    
    var string = document.getElementById("string");

    var word = document.getElementById("word");
    
    var test = document.getElementById("testWord");
    


  startButton.onclick = startCount;
}
;
var startCount = function(){
  var output = document.getElementById("result");
  var currentParagraph = string.value;
  var theWord = word.value;


  if (currentParagraph.length > 0) 
  {

      if (theWord.length > currentParagraph.length) 
      {
        output.innerHTML = "Invalid Word! Please put a word that is shorter then the paragraph..." ;
      }
      else
      { 
        if (theWord.length === 0) 
        {
           output.innerHTML = "Pleae input a word first..."
        } 
        else
        {
           output.innerHTML =  theWord + " appeared " + Count(currentParagraph,theWord) + " times" ;
        };
      }
    
  } 
  else
  {
    output.innerHTML = "Please input a paragraph first...";
  };
  
  return false;
};


var Count = function(str,wd){

    var lenWd = wd.length;
    var lenStr = str.length;
    var currentLetterinStr = 0;
    var currentLetterinWd = 0;
    var numberOftheSameLetter = 0;
    var numberOfPresence = 0;
    var i = 0;
   

     for (i = 0; i < lenStr - lenWd + 1; i++) 
     {
        for (currentLetterinWd = 0; currentLetterinWd <lenWd; currentLetterinWd++) 
         {
           // alert(wd[currentLetterinWd]);
            if(str[i+ currentLetterinStr] === wd[currentLetterinWd])
            {
              numberOftheSameLetter++;
            }
            currentLetterinStr++;
         }
            

                 
        if (numberOftheSameLetter === lenWd) 
        {
           numberOfPresence++;
        } 
        
        numberOftheSameLetter = 0;
        currentLetterinStr = 0;
     };

     return numberOfPresence;
      
};

window.onload = CountWord;
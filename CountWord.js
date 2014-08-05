/*window.onload = function() {

  // Get references to elements on the page.
  var string = document.getElementById('string');
  var start = document.getElementById('start');
  var result = document.getElementById('result');


  
  start.onclick = function() {
      
     var text = string.value;
     
     if (text) {
     	result = "OK";
     }
     else{
     	result = "Shit"
     }

     result.innerHTML = "hello world";


    //return false;
  };

};*/




var CountWord = function(){
	var startButton = document.getElementById("start");
    
    var string = document.getElementById("string");

    var word = document.getElementById("word");
    
    var test = document.getElementById("testWord");
    


	startButton.onclick = count;
};

var count = function(){
	var output = document.getElementById("result");
	var currentParagraph = string.value;
    //test.innerHTML = word.value;
    alert(word.value);
	if (currentParagraph.length > 0) {
		output.innerHTML = currentParagraph;
	} else{
		output.innerHTML = "Please input a paragraph first!";
	};
	
	return false;
};

window.onload = CountWord;


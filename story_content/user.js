function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cxoum6wdH7":
        Script1();
        break;
      case "5mKYSexSMQM":
        Script2();
        break;
      case "68JxTqFT3Mc":
        Script3();
        break;
  }
}

function Script1()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
 (!document.mozFullScreen && !document.webkitIsFullScreen)) {
 if (document.documentElement.requestFullScreen) { 
 document.documentElement.requestFullScreen(); 
 } else if (document.documentElement.mozRequestFullScreen) { 
 document.documentElement.mozRequestFullScreen(); 
 } else if (document.documentElement.webkitRequestFullScreen) { 
 document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); 
 } 
 } else { 
 if (document.cancelFullScreen) { 
 document.cancelFullScreen(); 
 } else if (document.mozCancelFullScreen) { 
 document.mozCancelFullScreen(); 
 } else if (document.webkitCancelFullScreen) { 
 document.webkitCancelFullScreen(); 
 } 
 }
}

function Script2()
{
  GetPlayer().SetVar("all_clear", false);
}

function Script3()
{
  




GetPlayer().SetVar("all_clear", false);
var myInput =GetPlayer().GetVar("TextEntry");



  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.match(lowerCaseLetters)) {  
    GetPlayer().SetVar("letter", true);
  } else {
    GetPlayer().SetVar("letter", false);
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.match(upperCaseLetters)) {  
    GetPlayer().SetVar("capital", true);
  } else {
    GetPlayer().SetVar("capital", false);
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.match(numbers)) {  
    GetPlayer().SetVar("number", true);
  } else {
    GetPlayer().SetVar("number", false);
  }
  
   var symbols = /[!@#$%^&]/g;
  if(myInput.match(symbols)) {  
    GetPlayer().SetVar("symbol", true);
  } else {
    GetPlayer().SetVar("symbol", false);
  }
  
  // Validate length
  if(myInput.length >= 8) {
    GetPlayer().SetVar("length", true);
  } else {
    GetPlayer().SetVar("length", false);
  }
  
  
var letter = GetPlayer().GetVar("letter");
var capital = GetPlayer().GetVar("capital");
var number = GetPlayer().GetVar("number");
var length = GetPlayer().GetVar("length");
var symbol = GetPlayer().GetVar("symbol");

GetPlayer().SetVar("all_clear", letter && capital && number && length && symbol);
}


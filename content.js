var el = chrome.runtime.onMessage;
if(el){
  el.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting){
        myFunction1(request.greeting);
        //sendResponse({farewell: "goodbye"});
      }
      else $('body').unhighlight();
    });
}

function myFunction1(s) {
    if(s) {
      var str = $('body').text();
      var regex = new RegExp(s, "gm");
      //console.log(regex);
      $("body").unhighlight();
      var res = str.match(regex);
      //console.log(res);
      if (res) $("body").highlight(res);
      else $("body").unhighlight(); 
    }
    else {
      $("body").unhighlight();
    }
}
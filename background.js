document.getElementById("bouton").addEventListener("click", myFunction);
document.getElementById("barre").addEventListener("change", myFunction);
document.getElementById("barre").addEventListener("keyup", myFunction);


function myFunction(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: $('#barre').val()}, function(response) {
      
    });
  });
}



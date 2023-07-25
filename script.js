function highlight() {
    //Write your code here
  var bold = document.querySelectorAll('strong')
  bold.forEach(function(word) {
    word.style.color = 'green';
  });

}


function return_normal() {
    //Write your code here
 var bold = document.querySelectorAll('strong')
  bold.forEach(function(word) {
    word.style.color = 'black';
  });
    
}

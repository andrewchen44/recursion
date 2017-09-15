// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
   var results = [];

   if(document.body.classList.contains(className)){
       results.push(document.body);
   }

   function getClass(node){


     var childList = node.children;
     for(var i = 0; i < childList.length; i++){
       if(childList[i].classList.contains(className)){
        results.push(childList[i]);
       }
       
       if(childList[i].hasChildNodes()) {
        getClass(childList[i]);
       }  

     } 
       return;
   }
   
   getClass(document.body);
   return results;

};

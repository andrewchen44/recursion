// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
      
stringed = '';

 function stringify(value){

       if(value === undefined){
           return ('{}');
       } else if(typeof value === 'string'){
        stringed += '"' + value + '"';
      }  else if(Array.isArray(value) === true){
          stringed += '[';
          if(value.length > 1){
            stringify(value[0]);
            for(var i = 1; i < value.length; i++){
                  stringed += ',';
                  stringify(value[i]);
            }
          } else if (value.length === 1){
                stringify(value[0]);
           }
           stringed += ']'
            return stringed;
          } else if(value ===  null){
              stringed += null; 
          } else if (Object.keys(value).length === 0 && typeof value !== 'number'
                     && typeof value !== 'boolean' && Array.isArray(value) === false) {
                stringed += '{';
                stringed += '}';

          } else if(typeof value === 'object' && typeof value !== 'number'
                     && typeof value !== 'boolean' && Array.isArray(value) === false){
               var keys = Object.keys(value);
               if(typeof value[keys[0]] === 'function'){
                         stringed += '{}';
                         return;
               }
               if(typeof value[keys[0]] === 'undefined'){
                         return '{}';
               }
               if(typeof value[keys[0]] !== 'undefined' || typeof value[keys[0]] !== 'function'){
                  stringed += '{';
               stringify(keys[0]);
               stringed += ':';
               stringify(value[keys[0]]);
               for(var i = 1; i < keys.length; i++){
                     stringed += ',';
                     stringify(keys[i]);
                     stringed += ':';
                     stringify(value[keys[i]]);
               } 
                stringed += '}';  
               }
                  
            } else {
               stringed += value;
              }
 }

stringify(obj);
return stringed;

};

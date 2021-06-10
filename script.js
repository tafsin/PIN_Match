var out;
var ran;
function Random() {
    var x = Math.floor((Math.random() * 9999) + 1000);
    x=x.toString();
    x=x.substring(0,4);
    x=parseInt(x);
    ran=x;
    //alert(x);
    document.getElementById("demo").value= x;
    
  }
   function getOutput(){
     return document.getElementById("output-value").value;
 }
 function printOutput(num){
     

       document.getElementById("output-value").value=num;
  
 }  
     


    var number = document.getElementsByClassName("button");
    for(var i=0; i<number.length;i++){
      number[i].addEventListener('click',function(){
       if(this.id=="clear"){
         //printHistory("");
         printOutput("");
     }
     else if(this.id=="backspace"){
       var output=getOutput().toString();
      if(output){
         output=output.substr(0,output.length-1);
         printOutput(output);
     }      
 }
 else{
        var output = getOutput();
        
           output=output+this.id;
           
          
      
       printOutput(output);
       out = output;
     }
       });
      
    }

function compare(){
 
  var a =ran;
  var b= out;
  var result=1;
  var x = document.getElementById("yes");
  var y = document.getElementById("no");
  if(a==b){
    
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
  }

    else{
      x.style.visibility = "hidden";
      y.style.visibility = "visible";

    // alert(result);
   }
}
 
  
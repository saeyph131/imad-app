//counter
var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
    
  //request
  
  //response
  
  //render var
  counter=counter+1;
  span=document.getElementById('count');
  span.innerHTML=counter.toString();
};
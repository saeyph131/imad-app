console.log('Loaded!');

//change value
var element = document.getElementById('maintext');
element.innerHTML = 'newvalue';



//move the image

var img = document.getElementById('madi');

var marginleft = 0; 

function moveRight(){
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}


img.onclick = function(){
    
    var interval=setInterval(moveRight,100);
    
    
    
};


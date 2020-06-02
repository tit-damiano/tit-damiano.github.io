var tImg = ['Kasandra.png','Aleksios.png'];
        
var vImg = true;
function fSetImg(){
    if (vImg){
        document.getElementById('AC').src = tImg[1];
        vImg = false;
    }
    
    else {
        document.getElementById('AC').src = tImg[0];
        vImg = true;
    }
}
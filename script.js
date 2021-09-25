const text = "New things coming up soon.Please wait!";
const para = document.getElementById("paragraph");

index = 0;

function autotext(){
    para.innerHTML = text.slice(0,index);
    index++;
    if(index > text.length-1){
        index=0;
    }
}

setInterval(autotext,120);
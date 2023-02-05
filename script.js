const display=document.querySelector('.counter');
const Btns=document.querySelector('.buttons');

Btns.addEventListener('click', counter);

let value=0;
function counter(e){
    const btn= e.target.id;
    if(btn==='increment'){
        value+=1;
    }else if (btn==='decrement'){
        value-=1;
    }else{
        value=0;
    }
    display.textContent=value;
}
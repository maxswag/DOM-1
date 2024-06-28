'use strict';


function changestyle(id)
{
    let par = document.querySelector('p');
    let input = document.getElementById(id);
    if(par.classList.contains("underline"))
        par.classList.toggle("underline")
    else if(par.classList.contains("highlight"))
        par.classList.toggle("highlight")
    else if(par.classList.contains("bold"))
        par.classList.toggle("bold")

    par.classList.add(input.value)
    
}


function togglep(id) {
let par = document.getElementById(id)
if(par.classList.contains('visible'))
    par.classList.replace('visible','hidden')
else
par.classList.replace('hidden','visible')


}

function toggleEX(id) {
    let par2 = document.getElementById(id)
    
    par2.classList.toggle('hidden')
    
    
    }

function change(){
    let buton = document.querySelector('section button')
    buton.classList.add('clicked')
    buton.textContent = "Clicked!"
}
const container = document.querySelector('.container');
let starter = true;

function grid(size){
    container.style.setProperty('--grid-size',size)
    for(let i = 1;i <= size*size;i++){
        const content = document.createElement('div');
        content.classList.add('grid'); 
        content.setAttribute('id',"square"+i)
        container.append(content);
    }
}


function randomize(e){   
    const choice = e.target.id;
    if(!choice.includes("square")) return;

    const color = document.querySelector("#"+choice);
    
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    color.style.backgroundColor = `rgb(${r},${g},${b})`; 
    
}

function colorIn(e){
    const choice = e.target.id;
    if(!choice.includes("square")) return;

    const color = document.querySelector("#"+choice);
    color.classList.add('changeBackground'); 

}



function clear(){
    const choice = document.querySelectorAll(".grid");
    choice.forEach(e => e.classList.remove('changeBackground'));
    choice.forEach(e => e.style.backgroundColor = null); 

}



function resize(){
    let size = prompt("What to resize as up to 100 x 100 : ");
    if(!size) return;

    while(size <= 0 || size > 100){
        size = prompt("Please choose a number between 1 - 100:");
        if(size == null) {
            return;
        }       
    }
    const choice = document.querySelectorAll(".grid");
    choice.forEach(e => e.remove())

    grid(size);
}


function clickEvent(e){
    const choice = e.target.id;
    if(!choice) return;
    console.log(choice);

    if(choice.includes("square")){
        return
    } else if(choice.includes("clear")){
        clear()
    } else if(choice.includes("resize")){
        resize()
    } else if(choice.includes("random")){
        window.removeEventListener('mouseover', colorIn);
        window.addEventListener('mouseover',randomize)
    }
}


grid(16);
window.addEventListener('click',clickEvent)
window.addEventListener('mouseover',colorIn)

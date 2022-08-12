const container = document.querySelector('.container');


function grid(size){
    container.style.setProperty('--grid-size',size)
    for(let i = 1;i <= size*size;i++){
        const content = document.createElement('div');
        content.classList.add('grid'); 
        content.setAttribute('id',"square"+i)
        container.append(content);
    }
}

function colorIn(e){
    const choice = document.querySelector("#"+e);
    choice.classList.add('changeBackground'); 

}

function clear(){
    const choice = document.querySelectorAll(".grid");
    choice.forEach(e => e.classList.remove('changeBackground')); 

}

function resize(){
    const size = prompt("What to resize as up to 100 x 100 : ");
    
    const choice = document.querySelectorAll(".grid");
    choice.forEach(e => e.remove())

    grid(size);
}


function clickEvent(e){
    const choice = e.target.id;
    if(!choice) return;

    if(choice.includes("square")){
        colorIn(choice)
    } else if(choice.includes("clear")){
        clear()
    } else if(choice.includes("resize")){
        resize()
    }
}



grid(16);
window.addEventListener('click',clickEvent)


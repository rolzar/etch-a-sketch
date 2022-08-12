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

function clickEvent(e){
    const choice = e.target.id;
    if(!choice) return;

    if(choice.includes("square")){
        colorIn(choice)
    } else if(choice.includes("clear")){
        clear()
    }

}



grid(16);
window.addEventListener('click',clickEvent)


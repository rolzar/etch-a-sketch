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

function color(e){
    console.log(e.target.id);
    const colorIn = document.querySelector("#"+e.target.id);
    console.log(colorIn);
    colorIn.classList.add('changeBackground'); 


}



grid(16);
window.addEventListener('click',color)


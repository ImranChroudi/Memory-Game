const ControlButtons = document.querySelector('.control-buttons');
const nameSpan = document.querySelector('.name span');
const ControlButtonsSpan = document.querySelector('.control-buttons span');
const imgs = document.querySelectorAll('img')

// for supremmier all images 
imgs.forEach((img )=>{
     img.remove()
})



// function control button span
ControlButtonsSpan.onclick = ()=>{
    let yourName = prompt('enter ta name');
    if(yourName == null || yourName == ''){
        ControlButtons.remove()
        nameSpan.innerHTML = 'unknow'
    }
    else{
        ControlButtons.remove()
        nameSpan.innerHTML = yourName;
    }
}

// Arrey colores for elements 
let colores = ['red','bleu','black','white','green','yellow','vert','pink','brown','orange','aqua']
const backs= document.querySelectorAll('.back')
for(let i = 0; i < backs.length; i++ ){
}
let k = 0;
for(let i = 0; i < backs.length; i++ ){
    if(i%2 > 0){
        k = k-1
        backs[i].style.backgroundColor = colores[k]
        k++
    }else{
        backs[i].style.backgroundColor = colores[k]
        k++
    }
}



let blocksContainer = document.querySelector('.memory-game-blocks');
let blocks  = Array.from(blocksContainer.children);


let orderRange = [...Array(blocks.length).keys()];




function chekMatcheBlocks(fristBlock, secondBlock) {
    console.log(fristBlock , secondBlock)
    let teiesElement = document.querySelector('.tries span');
    if(fristBlock.dataset.color === secondBlock.dataset.color ){
        fristBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        fristBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    }else{
        teiesElement.textContent++;
        teiesElement.classList.add('false')

        setTimeout(() => {
            teiesElement.classList.remove('false')
        }, 5000);

        if(teiesElement.textContent === 2 ){
            stopGaime();
        }
        
           
        setTimeout(() => {

            fristBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, 1000);
    }
        
}


blocks.forEach((block, index) => {
    let random = Math.floor(Math.random() * orderRange.length)
    block.style.order = random;
    block.addEventListener('click', function(){
        flipBlock(block);
    })
    
});


function flipBlock(selecteBlock){

    selecteBlock.classList.add('is-flipped');
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if(allFlippedBlocks.length === 2){
        stopClicking();
        chekMatcheBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}    



function stopClicking() {   

    blocksContainer.classList.add('no-clicking');
    
    let removeNo = setTimeout(() => {
        blocksContainer.classList.remove('no-clicking')
    }, 1000);
    return removeNo;
}



function stopGaime() {
    window.location.reload;
}
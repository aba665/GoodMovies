let controls;
let items;
let maxItems; 
let index;
let allMovies;

let currentItem = 0;

let myInterval = setInterval(() => {
    controls = document.querySelectorAll('.controlTwo');
    items = document.querySelectorAll('.item');
    maxItems = items.length; 
    index =  document.querySelectorAll('.selectionMovie')[0]
    allMovies =  document.querySelectorAll('.selectionMovie')  
    
    if(controls && items && maxItems && index && allMovies){
        clearInterval(myInterval);  
        items[0].classList.add('current-item');
        controls.forEach((control) => {
            control.addEventListener('click', () => {
               const isLeft = control.classList.contains('arrow-left');
            
               if(isLeft){
                   console.log('control clicked', isLeft  + currentItem);
                   currentItem -= 1;
               }else{
                   console.log('seta da direita clicada', currentItem);
                   currentItem += 1;
               }
        
               if(currentItem >= maxItems){
                currentItem = 0;
               }
        
               if(currentItem < 0){
                currentItem = maxItems - 1;
               }
        
               items.forEach(item => item.classList.remove('current-item'))
        
               items[currentItem].scrollIntoView({
                inline: "start",
                behavior: "auto",
               })
               
               items[currentItem].classList.add('current-item');
            })
        })
    
    }
}, 2000);

//second part
let controlsTwo;
let itemsTwo;
let maxItemsTwo; 
let indexTwo;
let allMoviesTwo;

let currentItemTwo = 0;

let myIntervalTwo = setInterval(() => {
    controlsTwo = document.querySelectorAll('.control');
    itemsTwo = document.querySelectorAll('.itemTwo');
    maxItemsTwo = itemsTwo.length; 
    
    if(controlsTwo && itemsTwo && maxItemsTwo){
        clearInterval(myInterval);  
        itemsTwo[0].classList.add('current-item');
        
        controlsTwo.forEach((control) => {
            control.addEventListener('click', () => {
               const isLeftTwo = control.classList.contains('arrow-left-two');
            
               if(isLeftTwo){
                   console.log('control clicked', isLeftTwo  + currentItemTwo);
                   currentItemTwo -= 1;
               }else{
                   console.log('seta da direita clicada', currentItemTwo);
                   currentItemTwo += 1;
               }
        
               if(currentItemTwo >= maxItemsTwo){
                currentItemTwo = 0;
               }
        
               if(currentItemTwo < 0){
                currentItemTwo = maxItemsTwo - 1;
               }
        
               itemsTwo.forEach(item => item.classList.remove('current-item'))
        
               itemsTwo[currentItemTwo].scrollIntoView({
                inline: "start",
                behavior: "auto",
               })
               
               itemsTwo[currentItemTwo].classList.add('current-item');
            })
        })
    
    }
}, 2000);


   


    





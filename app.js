const inputBtn = document.getElementById("input-btn");
const inputElement = document.getElementById('input-element');
const ulElement = document.getElementById('ul-element');
const deleteBtn = document.getElementById('delete-btn');
const tabBTn = document.getElementById('tab-btn')

let saveIt = [];

//Getting items from local storage
const lsItems = JSON.parse(localStorage.getItem("saveIt"));

if(lsItems){
    saveIt = lsItems;
    renderItems(saveIt);
}


//adding event-listener for deleteBtn
tabBTn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        saveIt.push(tabs[0].url);
        localStorage.setItem('saveIt',JSON.stringify(saveIt));
        renderItems(saveIt);
    });
});

//function to render items
function renderItems(itemsArray){
    
    let listItems = [];
    
    for(let i=0;i< itemsArray.length;i++){
        listItems += `<li><a href="${itemsArray[i]}" target="_blank">${itemsArray[i]}</a></li>`;
    }
    ulElement.innerHTML = listItems;
    
}

//adding event-listener for inputBtn
inputBtn.addEventListener("click",()=>{
    saveIt.push(inputElement.value);
    inputElement.value = "";

    // adding items to Local storage
    localStorage.setItem('saveIt',JSON.stringify(saveIt));

    renderItems(saveIt);
    
});

//adding event-listener for deleteBtn
deleteBtn.addEventListener("click",()=>{
    localStorage.clear();
    saveIt = [];
    renderItems(saveIt);
});

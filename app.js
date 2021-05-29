const inputBtn = document.getElementById("input-btn");
const inputElement = document.getElementById('input-element');
const ulElement = document.getElementById('ul-element');
const deleteBtn = document.getElementById('delete-btn');

let saveIt = [];

//Getting items from local storage
const lsItems = JSON.parse(localStorage.getItem("saveIt"));

if(lsItems){
    saveIt = lsItems;
    renderItems();
}

deleteBtn.addEventListener("click",()=>{
    localStorage.clear();
    saveIt = [];
    renderItems();
});



//adding event-listeners for inputbtn
inputBtn.addEventListener("click",()=>{
    saveIt.push(inputElement.value);
    inputElement.value = "";

    // adding items to Local storage
    localStorage.setItem('saveIt',JSON.stringify(saveIt));

    renderItems();
    
});

function renderItems(){
    
    let listItems = [];
    
    for(let i=0;i< saveIt.length;i++){
        listItems += `<li><a href="${saveIt[i]}" target="_blank">${saveIt[i]}</a></li>`;
    }
    ulElement.innerHTML = listItems;
    
}
let todoTitle=document.querySelector(".todoTitle");
let todoDescription=document.querySelector(".todoDescription");
let todoDate=document.querySelector(".todoDate");
let addButton=document.querySelector(".addButton");
let popup=document.querySelector(".popup")
let closeButton=document.querySelector(".delete")
let todoZone=document.querySelector(".todoZone");
let form=document.querySelector(".form");





function createItem(title,description,date)
{   let todoItem=document.createElement('div');
    todoItem.classList.add('todoItem');

    let titre=document.createElement('h3');
    titre.textContent=title;
    
   
    let desc=document.createElement('p');
    desc.textContent=description;
   
   
   
    let deadline=document.createElement('button');
    deadline.classList.add("datebutton");
    deadline.textContent=date;


    todoItem.appendChild(titre);
    todoItem.appendChild(desc);
    todoItem.appendChild(deadline);


    return todoItem;


}






addButton.addEventListener('click',function(){

popup.style.display='block';
form.addEventListener("submit",function(event){
    event.preventDefault();
    let titre=todoTitle.value;
    //console.log(titre);
    let description=todoDescription.value;
    //console.log(description);
    let date=todoDate.value;
  //  console.log(date);
 let todoItem=createItem(titre,description,date);
//console.log(todoItem)
  todoZone.appendChild(todoItem);
  popup.style.display='none'

})

});

closeButton.addEventListener("click",function(){

popup.style.display='none';

})


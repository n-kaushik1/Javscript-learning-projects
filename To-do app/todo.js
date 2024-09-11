let todolist =[
    {item:'Buy milk',duedate:'4/10/2024'},
    {item:'goto',duedate:'4/10/2024'}];
display();

function addtodo(){
   let inputelment = document.querySelector('#input');
   let todoItem =inputelment.value;
   let inputdate = document.querySelector('#date');
   let tododate =inputdate.value;
   todolist.push({item:todoItem,duedate:tododate});
   inputelment.value='';
   inputdate.value='';
   display();
}

function display() {
    let displayelement = document.querySelector('.list');

    let newHtml = '';
    
    for(let i=0;i<todolist.length;i++){
       let item = todolist[i].item;
       let duedate = todolist[i].duedate; 
       newHtml+=`
       
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-del" onclick="todolist.splice(${i},1);display();">Delete</button>
        `;
        
    }
    displayelement.innerHTML=newHtml;

}
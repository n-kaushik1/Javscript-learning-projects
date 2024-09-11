let todolist =[];
display();

function addtodo(){
   let inputelment = document.querySelector('#input');
   let todoItem =inputelment.value;
   let inputdate = document.querySelector('#date');
   let tododate =inputdate.value;
   if(inputelment.value!=='' || inputdate.value!==''){
    todolist.push({item:todoItem,duedate:tododate});
    localStorage.setItem('todolist',JSON.stringify(todolist));
   }
   inputelment.value='';
   inputdate.value='';
   display();
}

function display() {
    let displayelement = document.querySelector('.list');
    let newlist = JSON.parse(localStorage.getItem('todolist'));
    let newHtml = '';
    if (newlist!==null){   
     for(let i=0;i<newlist.length;i++){
       let item = newlist[i].item;
       let duedate = newlist[i].duedate; 
       newHtml+=`
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-del" onclick="del(${i});">Delete</button>
        `;
        
    }
    }
    displayelement.innerHTML=newHtml;
}
function del(i) {
    todolist.splice(i, 1);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    display();
}

function clearall(){
    localStorage.clear();
    display();
}
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addEvent);
function addEvent(e) {
    e.preventDefault();

    var item=document.getElementById('main-input').value;
    
    var newItem=document.createElement('li');
    newItem.className="list-group-item";
    newItem.appendChild(document.createTextNode(item));

    var dltButton=document.createElement('button');
    dltButton.className="btn btn-danger btn-sm float-right delete";
    dltButton.appendChild(document.createTextNode('X'));

    newItem.appendChild(dltButton);

    itemList.appendChild(newItem);
}

itemList.addEventListener('click',removeEvent);

function removeEvent(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('delete kr rhe ho?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
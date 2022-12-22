var list =document.getElementById('list')

function data (){
    var inp = document.getElementById('inp1');

    // working with li tag Element 
    var li = document.createElement('li');
    var liText = document.createTextNode(inp.value);
    li.appendChild(liText); 
    list.appendChild(li)
// working with delebutton tag element 
    var delbtn =document.createElement('button');
    var btnText = document.createTextNode('Delete');
    delbtn.setAttribute('class','btn');
    delbtn.setAttribute('onclick','delbtn(this)');    
    delbtn.appendChild(btnText);


   li.appendChild(delbtn);

   // working with editbutton tag element 
 
   var editbtn = document.createElement('button');
   var editText = document.createTextNode('Edits');
   editbtn.setAttribute('class','btn');
   editbtn.setAttribute('onclick','editbtn(this)');
   editbtn.appendChild(editText)

   li.appendChild(editbtn)

    inp.value = " ";
}
function delbtn(a){
   a.parentNode.remove();

}

function editbtn(b){
    var editval = prompt("Enter Edit value")
    b.parentNode.firstChild.nodeValue = editval;
    console.log(b.parentNode.firstChild)
}
/* <div class="item2" id="item"></div>
  */

function criarTodo() {
  // alert('tese')
   var todos_items = document.getElementById('todos_items');
   var texto = document.getElementById('todoArea').value;
   if (texto == ""){
      alert('Campo vazio!')
      apagar()
   }
   var newTodo = document.createElement('div');
   newTodo.classList.add('item')
   newTodo.setAttribute('id', 'item')
   newTodo.innerHTML= `<input type="button" id="apagar" onclick="apagar()" value="X"> ${texto} 
   `
   todos_items.appendChild(newTodo)
   document.getElementById('todoArea').value = "";
   texto.focus();

}
function apagar() {
  // alert('teste')
   var apagar = document.getElementById('item')
   apagar.parentNode.removeChild(apagar)


}

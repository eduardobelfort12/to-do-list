function add(){
                
  let li = document.createElement('li')
  let input_value = document.form.texto.value;
  let input_text = document.createTextNode(input_value)   
  if(input_value === ''){
  document.querySelector('#formulario')   
  let txt = document.createElement('p')
  txt.setAttribute('class', 'close')
  txt.setAttribute('id', 'error')
  txt.innerHTML = 'Ops! É Necessário digitar uma tarefa! X'
  insert = document.querySelector('#formulario')  
  insert.appendChild(txt) 
  }else{   
  li.appendChild(input_text)
  document.querySelector('ul').appendChild(li)
  document.form.texto.value = ""
  createCloseButton(li)
  document.getElementById('error').style.display="none";
  }
}
function createCloseButton(li) {
  let deleteItem = document.createElement("i")
  deleteItem.setAttribute('class', 'fa fa-trash')
  li.appendChild(deleteItem)
  deleteItem.onclick = () => 
  deleteItem.parentElement.style.display = "none"
}
document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => {
  if(e.target.tagName === 'LI')
  e.target.classList.toggle('checked')
})
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', () => {
  
  const inputValue = input.value.trim();

  if (inputValue !== '') {
    const capitalizedInputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = '❌';
    li.textContent = capitalizedInputValue;
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
  } else {
    alert('Please enter a book and a chapter.');
    input.focus();
  }
});

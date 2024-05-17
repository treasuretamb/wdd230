const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

// get chapters list from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to set chapters list to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

let chaptersArray = getChapterList() || [];

// display a chapter on the list
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    // Delete button event listener
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

// Populate the list with chapters from localStorage on page load
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', () => {
    if (input.value !== '') {
        const capitalizedInputValue = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        displayList(capitalizedInputValue);
        chaptersArray.push(capitalizedInputValue);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a book and a chapter.');
        input.focus();
    }
});

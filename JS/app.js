// Variables
const input = document.querySelector('.inputBox');
const button = document.querySelector('.addItem');
const list = document.querySelector('ul');
const item = document.querySelector('li');
const toggleButton = document.querySelector('.toggleComplete');
const toggleIcon = document.querySelector('.toggle');
let li = document.querySelector('li');



// Returns length of input value
function inputLength() {
	return input.value.length;
}


// Returns length of the ul
function listLength() {
	return item.length;
}


// Creates the list item and adds the button to remove the item
function createListItem() {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value = '';


// Function to 'highlight' list items that you have completed
	function crossOut () {
		li.classList.toggle('done');
	}
	li.addEventListener('click', crossOut);

	
// Creates the delete button
	let deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('X'));
	li.appendChild(deleteButton);
	


//Function to remove list item on click of the remove button
	function deleteListItem () {
		li.classList.add('delete');
	}
	deleteButton.addEventListener('click', deleteListItem);
}


// Adds item after clicking button
function addAfterClick () {
	if (inputLength() > 0) {
		createListItem();
	}
}

// Adds item after pressing 'enter'
function addAfterKeypress () {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem();
	}
}


// Calling the above functions on click/keypress actions
button.addEventListener('click', addAfterClick);
input.addEventListener('keypress', addAfterKeypress);


// Adds functionality for the toggle button
toggleButton.addEventListener('click', () => {
	
	let lis = list.children;

	if (toggleIcon.className === 'fas fa-toggle-on'){
		toggleIcon.className = "fas fa-toggle-on fa-rotate-180";
	} else {
		toggleIcon.className = 'fas fa-toggle-on';
	}

	for(let i = 0; i < lis.length; i+=1) {
		let li = lis[i];
		if(li.className === 'done') {
			li.style.display = 'none';
			li.className = 'notDone'
		} else if (li.className === 'notDone'){
			li.style.display = '';
			li.className = 'done';
		}
	}

	// for(let i = 0; i < lis.length; i+=1) {
		
	// 	let li = lis[i];
	// 	li.classList.add('notDone');
	// 	if(li.className === 'notDone') {
	// 		li.style.display = 'none';
	// 		li.className = 'done'
	// 	} else if (li.className === 'done'){
	// 		li.style.display = '';
	// 		li.className = 'notDone';
	// 	}
	// }
});


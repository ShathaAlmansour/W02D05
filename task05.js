let count = 0;
$('#value').on('submit', addNewItem);
$('#List').on('click', '.item', switchStatus);
$('#List').on('click', '.remove', removeItem);
$('#List').on('click', '.edit', editItem);
$('#List').on('submit', '.editor', saveItem);
$('#List').on('blur', '.editor', saveItem);
$('#clear').on('click', clearList);
$('#clearCompleted').on('click', clearCompleted);


function updateCount() {
	console.log(count);
	count = $('#List li').not('.done').length;
	console.log(count);
	$('#con').html(count);
}

function addNewItem(event) {
	event.preventDefault();
	let newItem = $('#new').val();
	$('#List').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	renderList();
}

function removeItem(event) {
	event.preventDefault();
	$(this).parent().remove();
	renderList();
}

function editItem(event) {
	event.preventDefault();
	let itemText = $(this).siblings('.item').html();
	let listItem = $(this).parent();
	listItem.html('<form class="editor"><input value="' + itemText + '"></form>');
	listItem.find('input').focus();
}

function saveItem(event) {
	event.preventDefault();
	let itemText = $(this).children('input').val();
	let listItem = $(this).parent();
	listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');
}

function switchStatus() {
	console.log('switchStatus function is running!');
	console.log($(this)); 
	let listItem = $(this).parent();
	listItem.toggleClass('done');
	renderList();
}

function clearList() {
	$('#List li').remove();
	renderList();
}

function clearCompleted() {
	$('#List li.done').remove();
	renderList();

}
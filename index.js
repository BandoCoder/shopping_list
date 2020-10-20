const store = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: false},
  {name: 'bread', checked: false}
];

function generateListItem(item) {
  // Responsible for generating HTML from store variable
  return `<li data-item-id='${item.id}'>
  <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item_checked" : ''}">${item.name}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`
}

function renderShoppingList() {
  // Responsible for rendering shopping list in DOM
  let html=''
  for(let i = 0; i < store.length; i++) {
    html += generateListItem(store[i])
  }
  $(".shopping-list").html(html);
}

function handleNewItemSubmit(){
  // Responsible for adding a new item to the shopping list
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
  })
}

function handleItemCheckClicked() {
  // This function will handle when Check item is clicked and it needs to be checked off.

}
 function handleDeleteItemClicked() {
  // This function will handle deleting items from shopping cart one by one

 }

function handleShoppingList () {
  //This will hold all callback functions for document ready
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
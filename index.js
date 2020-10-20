const store = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: false},
  {name: 'bread', checked: false}
];

function renderShoppingList() {
  let html=''
  for(let i = 0; i < store.length; i++) {
    html += `<li>
    <span class="shopping-item">${store.name}</span>
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
}

function main () {

}
$(main)
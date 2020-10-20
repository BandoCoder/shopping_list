function main () {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        let entry = $('#shopping-list-entry').val();
        let newListItem =       
        `<li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`

      $('.shopping-list').append(newListItem);
      $('#shopping-list-entry').val('');
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(event.currentTarget).parent().parent().children('.shopping-item').toggleClass('shopping-item__checked');

        // $(event.span).closest( ".button-label" ).toggleClass( ".shopping-item__checked" );
      });

      $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(event.currentTarget).parent().parent().remove();

        // $(event.span).closest( ".button-label" ).toggleClass( ".shopping-item__checked" );
      });
}

$(main);
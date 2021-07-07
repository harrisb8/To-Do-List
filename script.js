
$("button").click(e => {
//1. Adding a new item to the list:


    let inputValue = $('#input').val();
    if (inputValue === '') {
    alert("You must write something!");
    } else {
      $('#input').val('');
  
  
        let li = $('<li></li>');  
        li.text(inputValue);
        $('#list').append(li);
        li.on("dblclick", function() {  
            li.toggleClass("strike");
        });

//3. Adding a delete button
        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
        crossOutButton.on("click", function(e) {
        let liForDeletion = e.target.parentNode;
        $(liForDeletion).remove();
        });
        $('#list').sortable();
    }
})




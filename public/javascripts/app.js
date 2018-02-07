function gobble() {
    var gobbleContent = $('#gobble').val();
    if( !gobbleContent ) return;
    fetch(`/api/gobbles`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify({ content: gobbleContent}),
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      //  $('#gobble').val(JSON.stringify(data, null, 2));
      window.location.reload();
    });
}


document.querySelector('.userGobbles').addEventListener('click', function(event){
    if (event.target.value === 'delete') {
        fetch(`/api/gobbles/${event.target.dataset.gobbleid}`, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json())
        .then(data => {
            window.location.reload();
        });
    } else if (event.target.value === 'update') {
        fetch(`/api/gobbles/${event.target.dataset.gobbleid}`, {
            method: 'PUT',
            credentials: 'include'
        }).then(res => res.json())
        .then(data => {
            res.render('/gobbles/:id')
        });
    }
});


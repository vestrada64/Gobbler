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
    fetch(`/api/gobbles/${event.target.dataset.gobbleid}`, {
        method: 'DELETE',
        credentials: 'include'
    });
})


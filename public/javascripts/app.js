function gobble() {
    if( !$('#gobble').val() ) return;
    fetch(`/api/gobbles`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify({ content: $('#gobble').val()}),
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        $('#gobble').val(JSON.stringify(data, null, 2));
    });
}


document.querySelector('.userGobbles').addEventListener('click', function(event){
    console.dir(event.target);
    fetch(`/api/gobbles/${event.target.dataset.gobbleid}`, {
        method: 'DELETE',
        credentials: 'include'
    });

})
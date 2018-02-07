
function gobble() {
    console.log(user.populate('gobbles', function(err) {console.log(JSON.stringify(user, null, 2))}));
    if( !$('#gobble').val() ) return;
    fetch('/api/gobbles', {
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
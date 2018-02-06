var allUsers;
var template


function gobble() {
    if( !$('#gobble').val() ) return;
    fetch('/api/gobbles', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify({ content: $('#gobble').val()}),
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        $('#gobble').val('');
        var idx = allUsers.findIndex(u => u._id === data._id);
        allUsers[idx] = data;
        render();   
    });
}
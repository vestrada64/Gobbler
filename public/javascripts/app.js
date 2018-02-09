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


document.querySelector('#userGobbles').addEventListener('click', function(event){
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
            body: JSON.stringify({ content: updatedContent}),
            credentials: 'include'
        }).then(res => res.json())
        .then(data => {
            data.redirect('edit')
        });
    }
});

var userGobblesEl = document.getElementById('userGobbles');
userGobblesEl.addEventListener("click", useGravy);

function useGravy(e){

    if (e.target.tagName === 'IMG') {
        if (e.target.className == 'gravyoff') {
            e.target.className = 'gravyon';
            e.target.parentNode.setAttribute("style", "border: 3px solid #9c1515; transition-duration:0.5s");
        } else {
            e.target.className = 'gravyoff';
            e.target.parentNode.setAttribute("style", "border:none; transition-duration:1s");
            
        }
    }
}

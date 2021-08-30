
$('#post-comment').hide();
$('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
});


$('#btn-like').click(function (e) {
    e.preventDefault();
    let imgId = $(this).data('id');

    $.post('/images/' + imgId + '/like')
        .done(data => {
            $('.likes-count').text(data.likes);
        });
});


$('#btn-delete').click(function (e) {
    e.preventDefault();
    let $this = $(this);

    const response = confirm('Are you sure you want to delete this Image?');
    if (response) {
        const imageId = $this.data('id');
        $.ajax({
            url: '/images/' + imageId,
            type: 'DELETE'
        })
            .done(function (result) {
                if(result) {
                    setTimeout(()=> {
                        alert("Image was deleted");
                        window.location.reload();
                        window.location.href = '/';
                    },500);
                }
                else {
                    alert("an error has occurred");
                    window.location.reload();
                    window.location.href = '/';
                }
            })
    }
});
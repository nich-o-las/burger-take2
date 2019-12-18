$(function(){
    const eatBtn = $('.change-eaten');
    const delBtn = $('.del-btn');
    eatBtn.on('click', eatBurger);
    delBtn.on('click', deleteBurger);

    function eatBurger(){
        const id = $(this).data('id');
        $.ajax({
            url: `/${id}`,
            type: 'PUT',
            data: {eaten : true},
            success: function(data) {
                location.reload();
            }
        });
    }

    function deleteBurger(){
        const id = $(this).data('id');
        $.ajax({
            url: `/${id}`,
            type: 'DELETE',
            success: function() {
                location.reload();
            }
        })
    }

});
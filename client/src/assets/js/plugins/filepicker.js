//require(['jquery','basepath'], function ($, basepath) {    
jQuery(document).on('ready', function () {

    $('.upload').click(function(){
        $('.upload').button('loading');
        var callback = $(this).attr('data-upload-callback');
        alert(callback);
        $.get( BaseUrl+"files/add/"+callback, function(data){
            $('#modal-loader').html(data);
            $('#file-modal').modal('show');
            $('.upload').button('reset');
        });
    });
    
    // Function called when an image is added. id is the file id in the database
    function uploadComplete(id, path, callbackModule){
        $('#file-modal').modal('hide');
        require([callbackModule], function(callback){
            callback(id, path);
        });
    };
    
    // Global so it can be called outside of require.js
    window.uploadComplete = uploadComplete;
    //Allow to Edit Title
    $('.editTitle').on('click',function(){
        alert('fdssffdsf');
        alert($(this).data('pk'));
        $('#gtwFileid').val($(this).data('pk'));
        $('#gtwFileTitle').val($(this).data('value'));
        $('.modal-footer').children('input[type="submit"]').show();
        $('.modal-footer').children('button.btn-primary').hide();
        $('#editTitleModal').modal();
    });
    $('#gtwFileUpdateForm').on('submit',function (e){
        $('.modal-footer').children('input[type="submit"]').hide();
        $('.modal-footer').children('button').show();
        e.preventDefault();
        $.ajax({
            url: $(this).prop('action'),
            type: 'POST',
            dataType:'json',
            data:$(this).serialize(),
            success: function (response) {
                if(response.status=='success'){
                    $('#editTitleModal').modal('hide');
                    $('#title_'+response.id).html(response.value);
                    $('[data-pk="'+response.id+'"').data('value',response.value);
                }
            }
        });	
    });
    
    
    //
       
    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            if(numFiles){
                $('#filename').val(label);            
                $(this).closest('form').find("input[type='submit']").prop('disabled', false);
            }
    });
});
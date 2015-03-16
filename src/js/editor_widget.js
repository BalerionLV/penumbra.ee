/**
 * Created by Edgars Anspoks on 2015.03.16..
 */

$(function(){
    /** POST EDITOR */
    CKEDITOR.replace( 'articleBody' );
    /** POST EDITOR */
    /** close editor widget and overlay */
    $('#editor-close-widget').on('click', function(){
        $('.add-post-container').fadeOut('fast');
        $('.overlay').fadeOut('fast');
    });

    $('.add-post').on('click', function(){
        $('.add-post-container').fadeIn('fast');
        $('.overlay').fadeIn('fast');
        menu.closeEditMenu();
    });

    ///** echo data */
    //$('.editor-submit').on('click', function(){
    //    var data = CKEDITOR.instances.articleBody.getData();
    //    alert(data);
    //});
});
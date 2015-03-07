/**
 * Created by Hachiko on 2015.03.07..
 */
var toggler = 0;
$('.login-hover-btn').on({
    click: function(){
        if(toggler == 0){
            $(this).addClass('active-menu-btn');
            $('.login-form').addClass('is-visible');
            $('.login-form').removeClass('is-hidden');
            toggler = 1;
        } else {
            $(this).removeClass('active-menu-btn');
            $('.login-form').removeClass('is-visible');
            $('.login-form').addClass('is-hidden');
            toggler = 0;
        }
    }
});
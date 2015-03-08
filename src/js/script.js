/**
 * Created by Hachiko on 2015.03.07..
 */

menu = {
    loginToggler: 0,
    kbToggler: 0,
    hiddenKbMenu: 'is-hidden-kb',
    visibleKbMenu: 'is-visible-kb',
    hiddenLoginForm: 'is-hidden-login',
    visibleLoginForm: 'is-visible-login',
    activeBtn: 'active-menu-btn',

    loginBtn:$('#login-btn'),
    kbBtn: $('#kb-btn'),
    loginForm: $('#login-form'),
    killboardMenu: $('#killboard-menu'),
    closeLoginForm: function(){
        this.loginToggler = 0;
        this.loginBtn.removeClass(this.activeBtn);
        this.loginForm.removeClass(this.visibleLoginForm);
        this.loginForm.addClass(this.hiddenLoginForm);
    },
    closeKbMenu: function(){
        this.kbToggler = 0;
        this.kbBtn.removeClass(this.activeBtn);
        this.killboardMenu.removeClass(this.visibleKbMenu);
        this.killboardMenu.addClass(this.hiddenKbMenu);
    },
    showLoginForm: function(){
        this.loginBtn.addClass(this.activeBtn);
        this.kbBtn.removeClass(this.activeBtn);
        this.loginForm.addClass(menu.visibleLoginForm);
        this.loginForm.removeClass(menu.hiddenLoginForm);
        this.loginToggler = 1;
    },
    showKbMenu: function(){
        this.kbBtn.addClass(this.activeBtn);
        this.loginBtn.removeClass(this.activeBtn);
        this.killboardMenu.addClass(menu.visibleKbMenu);
        this.killboardMenu.removeClass(this.hiddenKbMenu);
        this.kbToggler = 1;
    }
};

menu.loginBtn.on({
    click: function(){
        if(menu.loginToggler == 0){
            menu.showLoginForm();
            menu.closeKbMenu();
        } else {
            menu.closeLoginForm();
        }
    }
});

menu.kbBtn.on({
    click: function(){
        if(menu.kbToggler == 0){
            menu.showKbMenu();
            menu.closeLoginForm();
        } else {
            menu.closeKbMenu();
        }
    }
});
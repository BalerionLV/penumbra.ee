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
        this.loginForm.removeClass(this.visibleLoginForm)
                      .addClass(this.hiddenLoginForm);
    },
    closeKbMenu: function(){
        this.kbToggler = 0;
        this.kbBtn.removeClass(this.activeBtn);
        this.killboardMenu.removeClass(this.visibleKbMenu)
                          .addClass(this.hiddenKbMenu);
    },
    showLoginForm: function(){
        this.loginBtn.addClass(this.activeBtn);
        this.kbBtn.removeClass(this.activeBtn);
        this.loginForm.addClass(menu.visibleLoginForm)
                      .removeClass(menu.hiddenLoginForm);
        this.loginToggler = 1;
    },
    showKbMenu: function(){
        this.kbBtn.addClass(this.activeBtn)
        this.loginBtn.removeClass(this.activeBtn);
        this.killboardMenu.addClass(menu.visibleKbMenu)
                          .removeClass(this.hiddenKbMenu);
        this.kbToggler = 1;
    }
};

/** menu - login form */
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

/** menu - kb sub-menu */
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

blog = {
    rightCon: $('.right-content'),
    rightExp: 'right-expanded',
    rightContr: 'right-contracted',
    leftCon: $('.left-content'),
    leftExp: 'left-expanded',
    leftContr: 'left-contracted',
    toggler: 1,
    contractRight: function(){
        this.rightCon.addClass(this.rightContr)
                     .removeClass(this.rightExp);
        this.leftCon.addClass(this.leftExp)
                    .removeClass(this.leftContr);
        this.toggler = 1;
        menu.closeLoginForm();
        menu.closeKbMenu();
    },
    expandRight: function(){
        this.rightCon.removeClass(this.rightContr)
                     .addClass(this.rightExp);
        this.leftCon.removeClass(this.leftExp)
                    .addClass(this.leftContr);
        this.toggler = 0;
        menu.closeLoginForm();
        menu.closeKbMenu();
    }
};

/** expand or contract blog page */
blog.rightCon.on({
    click: function(){
        if(blog.toggler == 1){
            blog.expandRight();
        } else {
            blog.contractRight();
        }
    }
});
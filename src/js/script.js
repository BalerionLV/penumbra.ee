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

video = {
    corpToggler: 0,
    allianceToggler: 0,
    allianceVideos: $('#alliance-videos'),
    corporationVideos: $('#corp-videos'),
    videosOpen: 'videos-open',
    videosInvisible: 'invisible',
    corpContracted: 'corp-videos-contracted',
    allianceContracted: 'alliance-videos-contracted',
    openCorp: function(){
        this.corporationVideos.addClass(this.videosOpen)
                              .removeClass(this.corpContracted);
        this.allianceVideos.addClass(this.videosInvisible)
                           .removeClass(this.allianceContracted);
    },
    closeCorp: function(){
        this.corporationVideos.removeClass(this.videosOpen)
                              .addClass(this.corpContracted);
        this.allianceVideos.addClass(this.allianceContracted)
                           .removeClass(this.videosInvisible);
    },
    openAlliance: function(){
        this.allianceVideos.addClass(this.videosOpen)
                           .removeClass(this.allianceContracted);
        this.corporationVideos.addClass(this.videosInvisible)
                              .removeClass(this.corpContracted);
    },
    closeAlliance: function(){
        this.allianceVideos.removeClass(this.videosOpen)
                           .addClass(this.allianceContracted);
        this.corporationVideos.addClass(this.corpContracted)
                              .removeClass(this.videosInvisible);
    }
};
video.corporationVideos.on({
    click: function(){
        if(video.corpToggler == 0){
            video.openCorp();
            video.corpToggler = 1;
        } else {
            video.closeCorp();
            video.corpToggler = 0;
        }
    }
});
video.allianceVideos.on({
    click: function(){
        if(video.allianceToggler == 0){
            video.openAlliance();
            video.allianceToggler = 1;
        } else {
            video.closeAlliance();
            video.allianceToggler = 0;
        }
    }
});

landing = {
    infoToggler: 0,
    preToggler: 0,
    closeInfoBtn: $('#closeInfoBtn'),
    closePreBtn: $('#closePreBtn'),
    showInfoBtn: $('#showInfoBtn'),
    showPreBtn: $('#showPreBtn'),
    infoBox: $('.landing-show-info'),
    preBox: $('.landing-prerequisites'),
    invisible: 'invisible',
    closeInfo: function(){
        this.infoBox.addClass(this.invisible);
        this.infoToggler = 0;
    },
    closePre: function(){
        this.preBox.addClass(this.invisible);
        this.preToggler = 0;
    },
    showInfo: function(){
        this.infoBox.removeClass(this.invisible);
        this.infoToggler = 1;
    },
    showPre: function(){
        this.preBox.removeClass(this.invisible);
        this.preToggler = 1;
    }
};

landing.closeInfoBtn.on({
    click: function(){
        landing.closeInfo();
    }
});
landing.closePreBtn.on({
    click: function(){
        landing.closePre();
    }
});
landing.showInfoBtn.on({
    click: function(){
        if(landing.infoToggler == 0){
            landing.showInfo();
        } else {
            landing.closeInfo();
        }
    }
});
landing.showPreBtn.on({
    click: function(){
        if(landing.preToggler == 0){
            landing.showPre();
        } else {
            landing.closePre();
        }
    }
});
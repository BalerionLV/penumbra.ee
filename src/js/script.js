/**
* Created by Hachiko on 2015.03.07..
*/
/** wrap in fun */
$(function(){
});
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
    lookingToggler: 0,
    applyToggler: 0,

    logo: $('.landing-logo-container'),

    closeInfoBtn: $('#closeInfoBtn'),
    closePreBtn: $('#closePreBtn'),
    closeLookingBtn: $('#close-looking-btn'),
    closeApplyBtn: $('#close-apply-btn'),

    showInfoBtn: $('#showInfoBtn'),
    showPreBtn: $('#showPreBtn'),
    showLookingBtn: $('#looking-for-button'),
    showApplyBtn: $('#apply-button-landing'),

    infoBox: $('.landing-show-info'),
    preBox: $('.landing-prerequisites'),
    descrBox: $('.landing-descr-container'),
    lookingForBox: $('.landing-looking-for'),
    applyBox: $('.landing-apply'),

    invisible: 'invisible',
    leftInvisible: 'left-invisible',
    leftVisible: 'left-visible',
    rightInvisible: 'right-invisible',
    rightVisible: 'right-visible',
    rightApplyVisible: 'right-apply-visible',
    closeInfo: function(){
        this.infoBox.addClass(this.leftInvisible);
        this.infoBox.removeClass(this.leftVisible);
        this.infoToggler = 0;
    },
    closePre: function(){
        this.preBox.addClass(this.rightInvisible);
        this.preBox.removeClass(this.rightVisible);
        this.preToggler = 0;
    },
    showInfo: function(){
        this.infoBox.removeClass(this.leftInvisible);
        this.infoBox.addClass(this.leftVisible);
        this.infoToggler = 1;
        this.closeLookingFor();
    },
    showPre: function(){
        this.preBox.removeClass(this.rightInvisible);
        this.preBox.addClass(this.rightVisible);
        this.preToggler = 1;
        this.closeApply();
    },
    showLookingFor: function(){
        this.closeInfo();
        this.lookingForBox.removeClass(this.leftInvisible);
        this.lookingForBox.addClass(this.leftVisible);
        this.lookingToggler = 1;
    },
    closeLookingFor: function(){
        this.lookingForBox.addClass(this.leftInvisible);
        this.lookingForBox.removeClass(this.leftVisible);
        this.lookingToggler = 0;
    },
    showApply: function(){
        this.closePre();
        this.applyBox.addClass(this.rightApplyVisible);
        this.applyBox.removeClass(this.rightInvisible);
        this.applyToggler = 1;
    },
    closeApply: function(){
        this.applyBox.removeClass(this.rightApplyVisible);
        this.applyBox.addClass(this.rightInvisible);
        this.applyToggler = 0;
    }
};
landing.descrBox.hide();

landing.logo.on('click', function(){
    landing.logo.fadeOut("slow");
    return $.when().done(function(){
        landing.descrBox.delay(1000).fadeIn("slow");
    })
});

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
landing.closeLookingBtn.on({
    click: function(){
        landing.closeLookingFor();
    }
});
landing.closeApplyBtn.on({
    click: function(){
        landing.closeApply();
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
landing.showLookingBtn.on({
    click: function(){
        if(landing.lookingToggler == 0){
            landing.showLookingFor();
        } else {
            landing.closeLookingFor();
        }
    }
});
landing.showApplyBtn.on({
    click: function(){
        if(landing.applyToggler == 0){
            landing.showApply();
        } else {
            landing.closeApply();
        }
    }
});
/**
* Created by Hachiko on 2015.03.07..
*/
///** wrap in fun */
$(function(){
menu = {
    loginToggler: 0,
    kbToggler: 0,
    editToggler: 0,


    hiddenEditMenu: 'is-hidden-blog-menu',
    visibleEditMenu: 'is-visible-blog-menu',
    editMenu: $('#edit-menu'),

    hiddenKbMenu: 'is-hidden-kb',
    visibleKbMenu: 'is-visible-kb',
    hiddenLoginForm: 'is-hidden-login',
    visibleLoginForm: 'is-visible-login',
    activeBtn: 'active-menu-btn',

    loginBtn:$('#login-btn'),
    kbBtn: $('#kb-btn'),
    editBtn: $('#edit-menu-btn'),
    loginForm: $('#login-form'),
    killboardMenu: $('#killboard-menu'),
    showLoginForm: function(){
        this.loginBtn.addClass(this.activeBtn);
        this.kbBtn.removeClass(this.activeBtn);
        this.editBtn.removeClass(this.activeBtn);
        this.loginForm.addClass(menu.visibleLoginForm)
                      .removeClass(menu.hiddenLoginForm);
        this.loginToggler = 1;
    },
    closeLoginForm: function(){
        this.loginToggler = 0;
        this.loginBtn.removeClass(this.activeBtn);
        this.loginForm.removeClass(this.visibleLoginForm)
            .addClass(this.hiddenLoginForm);
    },
    showKbMenu: function(){
        this.kbBtn.addClass(this.activeBtn);
        this.loginBtn.removeClass(this.activeBtn);
        this.editBtn.removeClass(this.activeBtn);
        this.killboardMenu.addClass(menu.visibleKbMenu)
                          .removeClass(this.hiddenKbMenu);
        this.kbToggler = 1;
    },
    closeKbMenu: function(){
        this.kbToggler = 0;
        this.kbBtn.removeClass(this.activeBtn);
        this.killboardMenu.removeClass(this.visibleKbMenu)
            .addClass(this.hiddenKbMenu);
    },
    showEditMenu: function(){
        this.editBtn.addClass(this.activeBtn);
        this.kbBtn.removeClass(this.activeBtn);
        this.loginBtn.removeClass(this.activeBtn);
        this.editMenu.addClass(menu.visibleEditMenu)
            .removeClass(this.hiddenEditMenu);
        this.editToggler = 1;
    },
    closeEditMenu: function(){
        this.editToggler = 0;
        this.editBtn.removeClass(this.activeBtn);
        this.editMenu.removeClass(this.visibleEditMenu)
            .addClass(this.hiddenEditMenu);
    }
};

$('#blog-menu-btn').on('click', function(){
    $('.landing-body').fadeOut('slow');
    setTimeout(continueExecution, 600);
    function continueExecution()
    {
        window.location.replace('http://penumbra.dev.ee/blog.php#');
    }
});
/** menu - login form */
menu.loginBtn.on({
    click: function(){
        if(menu.loginToggler == 0){
            menu.showLoginForm();
            menu.closeKbMenu();
            menu.closeEditMenu();
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
            menu.closeEditMenu();
        } else {
            menu.closeKbMenu();
        }
    }
});

/** menu - EDIT sub-menu */
menu.editBtn.on({
    click: function(){
        if(menu.editToggler == 0){
            menu.showEditMenu();
            menu.closeLoginForm();
            menu.closeKbMenu();
        } else {
            menu.closeEditMenu();
        }
    }
});

$(window).scroll(function() {
    var offset = 150;
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn('fast');
    } else {
        $('.back-to-top').fadeOut('fast');
    }
});

$('.back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
});

/** REGISTER */
$('.register-button').on('click', function(){
$('.registration-container').fadeIn('fast');
$('.overlay').fadeIn('fast');
    menu.closeLoginForm();
});

$('#registration-close-widget').on('click', function(){
    $('.registration-container').fadeOut('fast');
    $('.overlay').fadeOut('fast');
});

blog = {
    rightCon: $('.right-content'),
    recentPosts: $('.recent-posts'),
    rightExp: 'right-expanded',
    rightContr: 'right-contracted',
    expanderBtn: $('.expander-btn'),

    leftCon: $('.left-content'),
    leftExp: 'left-expanded',
    leftContr: 'left-contracted',

    toggler: 1,
    contractRight: function(){
        this.rightCon.addClass(this.rightContr)
                     .removeClass(this.rightExp);
        $('.left-content').toggleClass(this.leftExp);
        $('.left-content').toggleClass(this.leftContr);
        $('.recent-posts').toggleClass('invisible-vis');
        this.expanderBtn.toggleClass('contract-img ');
        this.expanderBtn.find('img').attr('src', 'assets/left-arrow.png');
        this.toggler = 1;
    },
    expandRight: function(){
        this.rightCon.removeClass(this.rightContr)
                     .addClass(this.rightExp);
        $('.left-content').toggleClass(this.leftExp);
        $('.left-content').toggleClass(this.leftContr);
        this.recentPosts.toggleClass('invisible-vis');
        this.expanderBtn.toggleClass('contract-img ');
        this.expanderBtn.find('img').attr('src', 'assets/right-arrow.png');
        this.toggler = 0;
    }
};

/** expand or contract blog page */
blog.expanderBtn.on({
    click: function(){
        if(blog.toggler == 1){
            blog.expandRight();
        } else {
            blog.contractRight();
        }
    }
});

$(document).ready(function(){
    setTimeout(openOnLoad, 1000);
    function openOnLoad(){
        blog.expandRight();
    }
});
//
//$('.right-content').load(function(){
//    blog.expandRight();
//});

blog.rightCon.on('click', '.selectable-header', function(){
    var dataId = this.id;
    $('html,body').animate({scrollTop: $("div[data-id='"+dataId+"']").offset().top-60}, 'slow');
});


video = {
    corpToggler: 0,
    allianceToggler: 0,
    allianceVideos: $('#alliance-videos'),
    corporationVideos: $('#corp-videos'),
    allianceVideosOpen: 'alliance-videos-open',
    corpVideosOpen: 'corp-videos-open',
    videosInvisible: 'invisible',
    corpContracted: 'corp-videos-contracted',
    allianceContracted: 'alliance-videos-contracted',
    openCorp: function(){
        this.corporationVideos.addClass(this.corpVideosOpen)
                              .removeClass(this.corpContracted);
        this.allianceVideos.addClass(this.videosInvisible)
                           .removeClass(this.allianceContracted);
    },
    closeCorp: function(){
        this.corporationVideos.removeClass(this.corpVideosOpen)
                              .addClass(this.corpContracted);
        this.allianceVideos.addClass(this.allianceContracted)
                           .removeClass(this.videosInvisible);
    },
    openAlliance: function(){
        this.allianceVideos.addClass(this.allianceVideosOpen)
                           .removeClass(this.allianceContracted);
        this.corporationVideos.addClass(this.videosInvisible)
                              .removeClass(this.corpContracted);
    },
    closeAlliance: function(){
        this.allianceVideos.removeClass(this.allianceVideosOpen)
                           .addClass(this.allianceContracted);
        this.corporationVideos.addClass(this.corpContracted)
                              .removeClass(this.videosInvisible);
    }
};
video.corporationVideos.on('click', function(){
    if(video.corpToggler == 0){
        video.corporationVideos.removeClass('corp-videos-contracted')
                                .addClass('corp-videos-open');
        video.corpToggler = 1;

        video.allianceVideos.removeClass('alliance-videos-contracted')
                            .addClass('invisible');
    }
    return $.when().done(function(){
        video.corporationVideos.delay(2000).addClass('height');
    })
});
//video.corporationVideos.on({
//    click: function(){
//        if(video.corpToggler == 0){
//            video.openCorp();
//            video.corpToggler = 1;
//        } else {
//            video.closeCorp();
//            video.corpToggler = 0;
//        }
//    }
//});
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
        this.applyBox.addClass(this.rightApplyVisible)
                     .removeClass(this.rightInvisible);
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

var angle = 0;
setInterval(function(){
    angle+=1;
    $("#image").rotate(angle);
},50);

});
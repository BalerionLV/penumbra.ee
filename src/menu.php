<div class="menu-container dark-bg">
    <div class="container relative">
        <div class="banner">
            <a href="index.php" id="banner-menu-btn" >ENSO corp</a>
        </div>
        <div class="back-to-top">
            <img src="assets/up-arrow.png" width="25px;">
        </div>
        <ul class="top-menu">
            <li><a id="blog-menu-btn" href="#">Blog</a></li>
            <?php if(isset($_SESSION["username"])){ ?>
            <li><a id="edit-menu-btn" href="#">Edit</a></li>
            <?php } ?>
            <!--<li><a href="videos.php">Videos</a></li>-->
            <li><a id="kb-btn" href="#">Killboard</a></li>
            <?php if(!isset($_SESSION["username"])){ ?>
            <li><a id="login-btn" href="#">Login</a></li>
            <?php } ?>
            <?php if(isset($_SESSION["username"])){ ?>
            <!--<li><a id="profile" href="#">Profile</a></li>-->
            <li><a id="logout-btn" href="backend/logout.php">Logout</a></li>
            <?php } ?>
            <form action="backend/login.php" id="login-form" method="post" accept-charset="UTF-8" class="login-form is-hidden-login">
                <input class="login-input-fields" type="text" placeholder="Username" maxlength="15" name="username">
                <input class="login-input-fields" type="password" placeholder="Password" maxlength="25" name="password">
                <input class="login-btn" type="submit" value="Enter" name="enter">
            </form>
            <ul id="killboard-menu" class="killboard-menu is-hidden-kb">
                <li><a href="https://zkillboard.com/corporation/98268576/" target="_blank">zKillboard</a></li>
                <li><a href="http://eve-kill.net/?a=corp_detail&crp_id=359700" target="_blank">EVE-Kill</a></li>
                <li><a href="http://eve.battleclinic.com/killboard/combat_record.php?name=Enso+Corp&type=corporation" target="_blank">Battleclinic</a></li>
            </ul>
            <ul id="edit-menu" class="edit-blog-menu is-hidden-blog-menu">
                <li class="add-post"><a href="#">Add an article</a></li>
            </ul>
        </ul>
        <div class="mobile-top-menu">
            -MENU-
        </div>
    </div>
</div>
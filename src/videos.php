<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<!-- HEADER -->
<div class="menu-container dark-bg">
    <div class="container relative">
        <div class="banner">
            <a href="index.html">ENSO corp</a>
        </div>
        <ul class="top-menu">
            <li><a href="blog.php">Blog</a></li>
            <li><a href="videos.php">Videos</a></li>
            <li><a id="kb-btn" href="#">Killboard</a></li>
            <li><a id="login-btn" href="#">Login</a></li>
            <form action="backend/login.php" id="login-form" method="post" accept-charset="UTF-8" class="login-form is-hidden-login">
                <input class="login-input-fields" type="text" placeholder="Username" maxlength="15" name="username">
                <input class="login-input-fields" type="password" placeholder="Password" maxlength="25" name="password">
                <input class="login-btn" type="submit" value="Enter" name="enter">
            </form>
            <ul id="killboard-menu" class="killboard-menu">
                <li><a href="https://zkillboard.com/corporation/98268576/" target="_blank">zKillboard</a></li>
                <li><a href="http://eve-kill.net/?a=corp_detail&crp_id=359700" target="_blank">EVE-Kill</a></li>
                <li><a href="http://eve.battleclinic.com/killboard/combat_record.php?name=Enso+Corp&type=corporation" target="_blank">Battleclinic</a></li>
            </ul>
        </ul>
        <div class="mobile-top-menu">
            -MENU-
        </div>
    </div>
</div>
<!-- CONTENT -->
<div class="container content-container">
    <div class="video-container">
        <div id="corp-videos" class="corp-videos-contracted video-expander">
            <h3>CORPORATION VIDEOS</h3>
        </div>
        <div id="alliance-videos" class="alliance-videos-contracted video-expander">
            <h3>ALLIANCE VIDEOS</h3>
        </div>
        <div class="clear-both"></div>
    </div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/script.js"></script>
</html>
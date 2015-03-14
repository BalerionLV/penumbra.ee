<?php include 'backend/db_connect.php'; ?>

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
            <div class="back-to-top">
                <img src="assets/up-arrow.png" width="25px;">
            </div>
            <ul class="top-menu">
                <li><a href="blog.php">Blog</a></li>
                <li><a href="videos.php">Videos</a></li>
                <li><a id="kb-btn" href="#">Killboard</a></li>
                <?php if(!isset($_SESSION["username"])){ ?>
                <li><a id="login-btn" href="#">Login</a></li>
                <?php } ?>
                <?php if(isset($_SESSION["username"])){ ?>
                <li><a id="profile" href="#">Profile</a></li>
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
            </ul>
            <div class="mobile-top-menu">
                -MENU-
            </div>
        </div>
    </div>
    <!-- CONTENT -->
    <div class="container content-container">
        <div class="right-content right-contracted">
            <div class="expander-btn">
                <img src="assets/left-arrow.png" align="middle" width="20px">
            </div>
            <div class="recent-posts invisible-vis"></div>
        </div>

        <div class="append-content"></div>
       <!--<?php include "backend/get_article.php" ?>-->
        <div class="clear-both"></div>
    </div>

</body>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>-->
<script src="js/jquerylib.js"></script>
<script src="js/script.js"></script>
<script src="js/process_article_data.js"></script>
</html>

<!--
CREATE TABLE members (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(30)
);

/* Then insert an admin for testing: */
INSERT INTO members (username, password)
    VALUES ('admin', '2Strong!');
-=>

<!--
CREATE TABLE posts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    body TEXT,
    created DATETIME DEFAULT NULL,
    modified DATETIME DEFAULT NULL
);

/* Then insert some posts for testing: */
INSERT INTO posts (title, body, created)
    VALUES ('The title', 'This is the post body.', NOW());
INSERT INTO posts (title, body, created)
    VALUES ('A title once again', 'And the post body follows.', NOW());
INSERT INTO posts (title, body, created)
    VALUES ('Title strikes back', 'This is really exciting! Not.', NOW());
-->

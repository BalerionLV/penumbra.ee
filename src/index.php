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
        <div class="container">
            <div class="banner">
                <a href="#">ENSO corp</a>
            </div>
            <ul class="top-menu">
                <li><a href="#">Blog</a></li>
                <li><a href="https://zkillboard.com/corporation/98268576/">Killboard</a></li>
                <li><a class="login-hover-btn" href="#">Login</a></li>
                    <form action="backend/login.php" id="login-form" method="post" accept-charset="UTF-8" class="login-form">

                        <input class="login-input-fields" type="text" placeholder="Username" maxlength="15" name="username">
                        <input class="login-input-fields" type="password" placeholder="Password" maxlength="25" name="password">
                        <input class="login-btn" type="submit" value="Enter" name="enter">
                    </form>
            </ul>
            <div class="mobile-top-menu">
                -MENU-
            </div>
        </div>
    </div>
    <!-- CONTENT -->
    <div class="container content-container">
        <div class="right-content">
            <h4>Recent posts</h4>
        </div>
        <div class="left-content">
            <h2>ANOTHER HEADING</h2>
            <?php session_start(); if(isset($_SESSION["username"])){var_dump($_SESSION["username"]);} echo date("Y/m/d"); ?>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="left-content">
            <h2>SOME HEADING</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="left-content">
            <h2>SOME HEADING</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="clear-both"></div>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/script.js"></script>
</html>
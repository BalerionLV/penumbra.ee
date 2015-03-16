<?php include 'backend/db_connect.php'; ?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<?php include 'registration.php'; ?>
<div class="overlay"></div>
    <!-- HEADER -->
<?php include 'menu.php'; ?>
    <!-- CONTENT -->
    <div class="container content-container">
        <div class="right-content right-contracted">
            <div class="expander-btn">
                <img src="assets/left-arrow.png" align="middle" width="20px">
            </div>
            <div class="recent-posts invisible-vis"></div>
        </div>

        <div class="append-content">
            <form class="add-post-container" method="POST" action="backend/post_article.php">
                <button id="editor-close-widget" class="popup-btn" type="button">X</button>
                <input name="title" class="title-input" type="text" placeholder="Title">
                <textarea name="articleBody"></textarea>
                <button class="editor-submit" type="submit">Submit</button>
            </form>
        </div>
        <div class="clear-both"></div>
    </div>

</body>
<?php include 'scripts.php'; ?>
</html>
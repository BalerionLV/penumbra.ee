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
<?php include 'menu.php'; ?>
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

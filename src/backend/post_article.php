<?php
    include 'db_connect.php';

    $articleTitle = $_POST['title'];
    $articleBody = $_POST['articleBody'];
    $articleAuthor = $_SESSION['username'];

    $sql = "INSERT INTO posts (title, body, created, author) VALUES('$articleTitle', '$articleBody', NOW(), '$articleAuthor')";
    if ($dbc->query($sql) === TRUE) {
        header("location:../blog.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
<?php
    include 'db_connect.php';

    $username = $_POST['username'];
    $password = $_POST['password'];
    $email =  $_POST['email'];

    $sql = "INSERT INTO members (username, password) VALUES('$username', '$password', '$email', NOW())";
    if ($dbc->query($sql) === TRUE) {
header("location:../blog.php");
} else {
echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
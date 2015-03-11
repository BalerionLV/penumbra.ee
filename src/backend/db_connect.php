<?php
    session_set_cookie_params(0);
    session_start();
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $db_name="test";

    $mysqli = new mysqli("$host", "$dbusername", "$dbpassword", "$db_name");
    if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }
?>
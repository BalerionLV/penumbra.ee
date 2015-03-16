<?php
    session_start();
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $db_name="test";

    $tbl_name="members";

    $myusername = trim($_POST['username']);
    $mypassword = trim($_POST['password']);

    $mysqli = new mysqli("$host", "$dbusername", "$dbpassword", "$db_name");
    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    } else {
        printf("Successfully connected to BD...<br>");
    }
    if ($result = $mysqli->query("SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'")) {
        printf("Select returned %d rows.\n", $result->num_rows);

        if($result->num_rows==1){
            $_SESSION['username'] = $myusername;
                if(isset($_SESSION["username"])){
                    $user = $_SESSION["username"];
                    header("location:../blog.php");
                }
        } else {
            $_SESSION['error'] = 'Wrong username or password';
            header("location:../blog.php");
        }
    }
?>
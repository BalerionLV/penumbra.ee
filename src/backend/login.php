<?php
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $db_name="penumbra";
    $tbl_name="penumbra_members";

    $myusername = trim($_POST['username']);
    $mypassword = trim($_POST['password']);

    $mysqli = new mysqli("$host", "$dbusername", "$dbpassword", "$db_name");
    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    } else {
        printf("Successfully connected to BD<br>");
    }

    if ($result = $mysqli->query("SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'")) {
        printf("Select returned %d rows.\n", $result->num_rows);

        if($result->num_rows==1){
            session_name("enso_session");
            session_start();
            $_SESSION['username'] = $myusername;
                if(isset($_SESSION["username"])){
                    header("location:../index.php?logged");
                }
        } else {
            $_SESSION['error'] = 'Wrong username or password';
            header('Location: ../index.php?wrong_cred');
        }
    }
?>
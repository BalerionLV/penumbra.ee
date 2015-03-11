<?php
    include 'db_connect.php';
    $query = $dbc->prepare("SELECT * FROM posts");
    $query->execute();
    $resultSet = $query->get_result();
    $result = $resultSet->fetch_all();

    echo json_encode($result);
?>
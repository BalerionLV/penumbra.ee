<?php
    $table_name = 'posts';

    $sql = "SELECT id, title, body, created, modified FROM $table_name";
    $result = $dbc->query($sql);
    $articleCount = $result->num_rows;

	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			if ($row["modified"] !== NULL){
				$lastModified = 'Modified: ' . $row["modified"];
			} else {
				$lastModified = $row["created"];
			}
			echo '<div class="left-content left-expanded"> <h2>'. $row["title"] .'</h2> '. '<p class="time-created"><i>' . $lastModified . '</i></p>' . '<p> '. $row["body"] .' </p>' . '<div id="article-controls-container" class="article-controls-container"></div>' . '</div>';
		}
	}
 ?>
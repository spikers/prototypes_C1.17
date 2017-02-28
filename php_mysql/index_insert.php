<!-- index_insert.php -->
<?php
require_once('mysql_connect.php');
print($_POST['title']."<br>".$_POST['details']."<br>".$_POST['timestamp']."<br>".$_POST['cheese']."<br><br>");

$query = "INSERT INTO todo_items (`title`, `details`, `user_id`) VALUES ('{$_POST['title']}', '{$_POST['details']}', '5');";
  //INSERT INTO todo_list (`title`, `details`, `user_id`) VALUES ('Choo Choo', 'Become the train', '2');
print($query);

mysqli_query($conn, $query);

?>
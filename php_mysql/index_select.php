<!-- index_select.php -->
<?php
  require_once("./mysql_connect.php");
  $query = "SELECT * FROM todo_items WHERE user_id='2'";
  $result = mysqli_query($conn, $query);
  print(mysqli_affected_rows($conn));
  if (mysqli_num_rows($result)) {
    ?>
    <table>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Details</th>
        <th>Timestamp</th>
        <th>User_ID</th>
      </thead>
      <tbody>
    <?php
    while ($row = mysqli_fetch_assoc($result)) {
      ?>
        <tr>
          <td><?=$row["id"] ?></td>
          <td><?=$row["title"] ?></td>
          <td><?=$row["details"] ?></td>
          <td><?=$row["timestamp"] ?></td>
          <td><?=$row["user_id"] ?></td>
        </tr>
      <?php
    }
    ?>
      </tbody>
    </table>
    <?php
  } else {
    print("None Available");
  }

?>
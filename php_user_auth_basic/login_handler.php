<?php
session_start();
$_POST['password'] = password_hash($_POST['password'], PASSWORD_BCRYPT);

$output = [
  'success'=>['success'=>true, 'message'=>'Welcome, '.$_POST['username']],
  'error'=>['success'=>false, 'message'=>'User or Password Not Found'],
];

//Okay I did this way beforehand, so it's not the SHA1 encryption.*/
$user_info = [
  ['id'=> 0, 'username'=>'tim', 'password'=>'$2y$10$UkU79O3KAoizg.X8.gIxRO2VseyO/ADLHmAmEg5Eu6eWfuJkBhzBC'],
  ['id'=> 1, 'username'=>'danny', 'password'=>'$2y$10$3FHU1qS18IgMvl6wq2tAIOXTSMFAyUnYwmymUh4OreCVfS9q8dGJa'],
  ['id'=> 2, 'username'=>'gwen', 'password'=>'$2y$10$rCBdotVNj4iW8.qGBIvSrugWuqeYTrs31qPIKVXVKPuSZ6KMLDnIa'],
  ['id'=> 3, 'username'=>'mike', 'password'=>'$2y$10$MV/qgERXv5F4Zvt6qH1H5ObRaC5G9NbxmVLKvJxn1uEgWZwL1y1dW'],
  ['id'=> 4, 'username'=>'mark', 'password'=>'$2y$10$Ox/Ez7EgrLf2dHqykgbFG.wnl57GIE6Ez2oWUtQK3pyQKUuNeVgeG']
];

//Password is: securetim, or securemark, etc

$i = 0;
$match = -1;
while ($i < sizeof($user_info)) {
  if ($user_info[$i]['username'] === $_POST['username']) {
    $outputString = json_encode($output['success']);

    print($outputString);
    $match = $i;
    $_SESSION['user_id'] = $_POST['username'];
    $_POST = '';
    return;
  }
  $i = $i + 1;
}
$_POST = '';

$outputString = json_encode($output['error']);
print($outputString);



?>
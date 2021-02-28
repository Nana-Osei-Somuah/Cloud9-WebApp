<?php  

$servername = 'localhost';
$username = 'root';
$password = getenv('mysqlpass') ?? '';
$databasename = 'ashmall';

$sqlconnection = new mysqli($servername, $username, $password, $databasename);

?>
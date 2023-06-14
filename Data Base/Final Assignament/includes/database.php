<?php 
$serverName = "localhost";
$userName = "agabt";
$password = "hola01";
$dbName = "agebirthdayfam";

$conn = new mysqli($serverName, $userName, $password, $dbName);

if ($conn->connect_error) {
    die("No se ha conectado" . $conn->connect_error);
}
?>
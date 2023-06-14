<?php
$serverName = "localhost";
$userName = "agabt";
$password = "hola01";
$dbName = "db_level2_opdr1";

$conn = new mysqli($serverName, $userName, $password, $dbName);

if ($conn->connect_error) {
    die("No se ha conectado" . $conn->connect_error);
}

$id = $_POST["id"];
$title = $_POST["Title"];
$artist = $_POST["Artist"];

$query = "UPDATE Songs SET Artist= '$artist', Title= '$title' WHERE ID= '$id'";

$result = mysqli_query($conn, $query);

if ($result) {
    header('Location: ../index.php');
} else {
    echo mysqli_error($conn);
}

?>
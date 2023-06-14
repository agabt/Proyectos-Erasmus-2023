<?php
$serverName = "localhost";
$userName = "agabt";
$password = "hola01";
$dbName = "db_level2_opdr1";

$conn = new mysqli($serverName, $userName, $password, $dbName);

if ($conn->connect_error) {
    die("No se ha conectado" . $conn->connect_error);
}

$id = $_GET["ID"];

$query = "DELETE FROM Songs WHERE ID='$id'";

$result = mysqli_query($conn, $query);

if($result) {
    header('Location: ../index.php');
} else {
    echo mysqli_error($conn);
}

?>
<?php
require "../includes/database.php";

$id = $_POST["id"];
$name = $_POST["name"];
$description = $_POST["description"];
$wheresells = $_POST["wheresells"];
$linkweb = $_POST["linkweb"];
$price = $_POST["price"];

$query = "UPDATE wishlist SET 
name='$name', 
description='$description', 
wheresells='$wheresells', 
linkweb='$linkweb', 
price='$price' 

WHERE id='$id'";

$result = mysqli_query($conn, $query);

if ($result) {
    header("Location: ../index.php");
} else {
    echo mysqli_error($conn);
    echo "Algo ha ido mal...";
}

<?php
require "../includes/database.php";

$name = $_POST["name"];
$description = $_POST["description"];
$wheresells = $_POST["wheresells"];
$linkweb = $_POST["linkweb"];
$price = $_POST["price"];

$query = "INSERT INTO wishlist (name, description, wheresells, linkweb, price)
            VALUES ('$name', '$description', '$wheresells', '$linkweb', '$price')";

$result = mysqli_query($conn, $query);

if ($result) {
    header("Location: ../index.php");
} else {
    echo mysqli_error($conn);
    echo "Algo ha ido mal...";
}

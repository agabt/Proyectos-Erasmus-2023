<?php
require "../includes/database.php";

$id = $_GET["id"];

$query = "DELETE FROM wishlist WHERE id='$id'";

$result = mysqli_query($conn, $query);

if ($result) {
    header("Location: ../index.php");
} else {
    echo mysqli_error($conn);
    echo "Algo ha ido mal...";
}

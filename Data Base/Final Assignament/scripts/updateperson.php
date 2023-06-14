<?php
require "../includes/database.php";

$id = $_POST["id"];
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$bday = $_POST["bday"];

$query = "UPDATE birthday SET fname='$fname', lname='$lname', bday='$bday' WHERE id='$id'";

$result = mysqli_query($conn, $query);

if ($result) {
    header("Location: ../index.php");
} else {
    echo mysqli_error($conn);
    echo "Algo ha ido mal...";
}

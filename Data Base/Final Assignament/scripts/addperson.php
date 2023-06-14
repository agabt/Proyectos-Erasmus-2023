<?php
require "../includes/database.php";

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$bday = $_POST["bday"];

$query = "INSERT INTO birthday (fname, lname, bday)
            VALUES ('$fname', '$lname', '$bday')";

$result = mysqli_query($conn, $query);

if ($result) {
    header("Location: ../index.php");
} else {
    echo mysqli_error($conn);
    echo "Algo ha ido mal...";
}

<head>
    <link rel="stylesheet" href="style.css">
</head>

<?php
$serverName = "localhost";
$userName = "agabt";
$password = "hola01";
$dbName = "db_level2_opdr1";

$conn = new mysqli($serverName, $userName, $password, $dbName);

if ($conn->connect_error) {
    die("No se ha conectado" . $conn->connect_error);
}

$query = "SELECT * FROM Songs";

$result = mysqli_query($conn, $query);


?>
<table>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Artist</td>
        <td>Options</td>
    </tr>
    <?php
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
    <td>" . $row['ID'] . "</td>
    <td>" . $row['Title'] . "</td>
    <td>" . $row['Artist'] . "</td>
    <td>
    <a class='edit' href='addsong.php?ID=" . $row['ID'] . "'>EDIT</a>
    <a class='delete' href='scripts/deletesong.php?ID=" . $row['ID'] . "'>DELETE</a>
    </td>
    </tr>";
    }
    ?>
</table>

<form action="addsong.php">
    <button type="submit">ADD NEW SONG</button>
</form>
<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styleform.css">
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

$song = null;
if (isset($_GET['ID'])) {
    $id = $_GET['ID'];
    $query = "SELECT * FROM Songs WHERE ID = '$id' ";
    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
    $song = mysqli_fetch_assoc($result);
}

$action = "scripts/addsongscript.php";
if ($song != null) {
    $action = "scripts/esitsong.php";
}

?>

<h1>
    <?php
    if ($song == null) {
        echo "ADD SONG TO THE DATA BASE";
    } else {
        echo "EDIT SONG FROM THE DATA BASE";
    }
    ?>
</h1>

<form action="<?= $action ?>" method="POST">

    <fieldset>
        <label for="title">Title</label>
        <input value="<?= $song['Title'] ?>" id="title" type="text" name="Title" maxlength="60" placeholder="Enter the title here..." required />
    </fieldset>

    <fieldset>
        <label for="artist">Artist</label>
        <input value="<?= $song['Artist'] ?>" id="artist" type="text" name="Artist" maxlength="50" placeholder="Enter the artist here..." required />
    </fieldset>

    <div>
        <button type="submit">
            <?php
            if ($song == null) {
                echo "ADD SONG";
            } else {
                echo "EDIT SONG";
            }
            ?>
        </button>
    </div>

    <?php
    if ($song) {
        echo "<input type='hidden' value='" . $song['ID'] . "' name='id'>";
    }
    ?>

</form>
<?php
session_start();

$newGame = true;

if (count($_SESSION) == 3) {
    $newGame = false;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4x4 Table Memory Game</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<?php
function autoloader($class)
{
    include "classes/" . $class . ".class.php";
}

spl_autoload_register('autoloader');

?>

<body class="game">
    <?php
    if ($newGame) {
        // Declare the variables
        $numbersChosen = array();

        for ($i = 0; count($numbersChosen) < 8; $i = count($numbersChosen)) {
            $number = new RandomNum();
            array_push($numbersChosen, $number->num);
            $numbersChosen = array_unique($numbersChosen);
        }

        $_SESSION["numbersChosen"] = $numbersChosen;
    }


    for ($i = 0; $i < 8; $i++) {
        $num = new Divs($i, "square", $_SESSION["numbersChosen"][$i]);
        echo "<a id='$num->id' href='index.php?number=$num->numberValue&id=$num->id' class='$num->classes'><input value='$num->numberValue' readonly></input></a>";
    }

    for ($i = 0; $i < 8; $i++) {
        $num = new Divs($i + 8, "square", $_SESSION["numbersChosen"][$i]);
        echo "<a id='$num->id' href='index.php?number=$num->numberValue&id=$num->id' class='$num->classes'><input value='$num->numberValue' readonly></input></a>";
    }


    if ($_SESSION["previousNum"] == $_GET["number"] && $_SESSION["previousID"] != $_GET["id"]) {
        echo "Igual";

        ?>

        <script>
            document.getElementById(<?= $_GET["id"] ?>).className += " show";
            document.getElementById(<?= $_SESSION["previousID"] ?>).className+= " show";
        </script>

        <?php

    } else {
        $_SESSION["previousNum"] = $_GET["number"];
        $_SESSION["previousID"] = $_GET["id"];

    }

    // echo $_GET["number"];

    // print_r($_SESSION["numbersChosen"]);

    ?>

</body>

</html>
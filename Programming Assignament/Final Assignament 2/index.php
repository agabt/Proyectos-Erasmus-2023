<?php
session_start();

$newGame = true;

if (count($_SESSION) >= 1) {
    $newGame = false;
}

function autoloader($class)
{
    include "classes/" . $class . ".class.php";
}

spl_autoload_register('autoloader');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4x4 Square Memory Game</title>
</head>

<body>
    <div class="game">

        <?php
        if ($newGame) {
            // Declare the variables
            $numbersChosen = array();
    
            for ($i = 0; count($numbersChosen) < 8; $i = count($numbersChosen)) {
                $number = new RandomNum();
                array_push($numbersChosen, $number->num);
                $numbersChosen = array_unique($numbersChosen);
            }

            $numbersChosen = array_merge($numbersChosen, $numbersChosen);

            shuffle($numbersChosen);
    
            $_SESSION["numbersChosen"] = $numbersChosen;
        }

        $_SESSION["idSqrMatched"] = array();

        $gameShown = new Game($_SESSION["numbersChosen"], $_GET["value"], 
        $_SESSION["valueBefore"], $_GET["id"], $_SESSION["idBefore"]);

        $_SESSION["valueBefore"] = $_GET["value"];
        $_SESSION["idBefore"] = $_GET["id"];

        $_SESSION["idSqrMatched"] = array_push($_SESSION["idSqrMatched"], "hola");

        print_r($_SESSION["idSqrMatched"]);

        ?>

    </div>
</body>

</html>
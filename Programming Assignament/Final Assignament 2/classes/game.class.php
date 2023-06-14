<?php

function gameloader($class)
{
    include "classes/" . $class . ".class.php";
}

spl_autoload_register('gameloader');

class Game
{
    public function __construct($numbersChosen, $valueSquareChosen, $valueSquareBefore, $idSquareChosen, $idSquareBefore)
    {
        function flipped($funcId, $funcIdSqrChosen){
            if ($funcId == $funcIdSqrChosen) {
                $status = "open";
            } else {
                $status = "closed";
            }
    
            return $status;
        }

        function checkEqual($funcValSqrChosen, $funcValSqrBefore, $funcIdSqrChosen, $funcIdSqrBefore){
            if ($funcValSqrChosen == $funcValSqrBefore
            && $funcIdSqrChosen != $funcIdSqrBefore) {
                return true;
                array_push($_SESSION["idSqrMatched"], $funcIdSqrChosen, $funcIdSqrBefore);
                $_SESSION["valueBefore"] = null;
                $_SESSION["idBefore"] = null;
            } else {
                return false;
            }
        }
    
        for ($i = 1; $i < 17; $i++) {
            $status = flipped($i, $idSquareChosen);

            $square = new Square($i, $status, $numbersChosen[$i - 1]);

            if (checkEqual($valueSquareChosen, $valueSquareBefore, $idSquareChosen, $idSquareBefore)
            || $status == "open"
            || in_array($square->id, $_SESSION["idSqrMatched"])
            ) {
                echo "<br>";
                echo "<div class='square open'>$square->value</div>";
            } else {
                echo "<br>";
                echo "<a class='square closed' href='index.php?value=$square->value&id=$square->id'>$square->value</a>";
            }
        }
    }
}

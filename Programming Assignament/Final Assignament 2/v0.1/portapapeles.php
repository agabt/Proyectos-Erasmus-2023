<?php

for ($i = 0; $i < 16; $i++) {
    $num = new Divs($i, "square", array_shift($numbersChosen));
    $_SESSION[$i] = $num;

    $i++;
    $num2 = new Divs($i, "square", $num->numberValue);
    $_SESSION[$i] = $num2;
}
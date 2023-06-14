<?php
function autoloader($class) {
    include 'classes/' . $class . '.class.php';
}

spl_autoload_register('autoloader');

$user1 = new Users("Anthony", "Gab Terescu", "28-01-2005");

$user1->showAttr();

echo "<br>";

// Declare variables
$codbo2 = new Shooter("Call Of Duty: Black Ops 2", "This game is a shooter based in the 2025 and is very cool", "59,99€", "PC, PS3, Xbox 360");

// Echo the variable
$codbo2->message();

?>
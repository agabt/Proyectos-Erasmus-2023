<?php
function autoloader2($class) {
    include '' . $class . '.class.php';
}

spl_autoload_register('autoloader2');

// Shooter is inherited from videogames
class Shooter extends Videogames {
    public $genre;

    public function message() {
        echo "The game " . $this->title . " is a shooter";
    }
}

?>
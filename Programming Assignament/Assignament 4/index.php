<?php
// Making the class videogames
class Videogames {
    public $title;
    public $description;
    protected $price;
    public $platform;

    function __construct($title, $description, $price, $platform) {
        $this->title = $title;
        $this->description = $description;
        $this->price = $price;
        $this->platform = $platform;
    }
}

// Shooter is inherited from videogames
class Shooter extends Videogames {
    public $genre;

    public function message() {
        echo "The game " . $this->title . " is a shooter";
    }
}

// Declare variables
$codbo2 = new Shooter("Call Of Duty: Black Ops 2", "This game is a shooter based in the 2025 and is very cool", "59,99€", "PC, PS3, Xbox 360");

// Echo the variable
$codbo2->message();
?>
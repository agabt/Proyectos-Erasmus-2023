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
?>
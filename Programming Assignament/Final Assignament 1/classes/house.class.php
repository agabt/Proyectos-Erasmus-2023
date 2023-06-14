<?php
class House
{
    public $numberRooms;
    public $numberToilets;
    public $heating;
    public $typeHeating;
    public $streetName;
    public $houseNumber;
    public $place;
    public $price;
    public $m2land;

    public function __construct($numberRooms, $numberToilets, $heating, $typeHeating, $streetName, $houseNumber, $place, $price, $m2land)
    {
        $this->numberRooms = $numberRooms;
        $this->numberToilets = $numberToilets;
        $this->heating = $heating;
        $this->typeHeating = $typeHeating;
        $this->streetName = $streetName;
        $this->houseNumber = $houseNumber;
        $this->place = $place;
        $this->price = $price;
        $this->m2land = $m2land;
    }
}

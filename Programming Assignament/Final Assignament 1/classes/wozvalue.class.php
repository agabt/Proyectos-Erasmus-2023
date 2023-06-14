<?php
class WozValue extends House
{
    public $valuePrice;
    public $valueRooms;
    public $valuePlace;

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

        // Declare the variables we will working with
        $valueConstructPrice = $this->price;
        $valueConstructRooms = $this->numberRooms;
        $valueConstructPlace = strtolower($this->place);

        $this->valuePlace = 0;

        // Add the WOZ value depending on the price
        if ($valueConstructPrice <= 100000) {
            $this->valuePrice = 600;
        } elseif ($valueConstructPrice > 100000 && $valueConstructPrice < 200000) {
            $this->valuePrice = 2000;
        } elseif ($valueConstructPrice >= 200000) {
            $this->valuePrice = 6000;
        }

        // Add the WOZ value depending on the number of rooms
        if ($valueConstructRooms == 1) {
            $this->valueRooms = 100;
        } elseif ($valueConstructRooms == 2) {
            $this->valueRooms = 300;
        } elseif ($valueConstructRooms >= 3) {
            $this->valueRooms = 800;
        }

        // Add the WOZ value depending on the place
        switch ($valueConstructPlace) {
            case 'amsterdam':
                $this->valuePlace = 1000;
                break;

            case 'groningen':
                $this->valuePlace = 1000;
                break;
            
            case 'rotterdam':
                $this->valuePlace = 1000;
                break;
        }
    }
}
<?php

function autoloader($class) {
    include 'classes/' . $class . '.class.php';
}

spl_autoload_register('autoloader');

// House One

$house1 = new WozValue(4, 2, "Yes", "Very good", "Emmerstraat", "18", "Amsterdam", 150000, 200);

echo "House one values: <br>";
echo "<br>";

echo "Number of rooms: " . $house1->numberRooms . "<br>";
echo "Number of toilets: " . $house1->numberToilets . "<br>";
echo "There is heating? " . $house1->heating . "<br>";
echo "If there is, how is it? " . $house1->typeHeating . "<br>";
echo "Street name: " . $house1->streetName . "<br>";
echo "House number: " . $house1->houseNumber . "<br>";
echo "City: " . $house1->place . "<br>";
echo "How much is it? " . $house1->price . "€ <br>";
echo "How many m² of land: " . $house1->m2land . "m² <br>";

echo "<br> Woz values: <br>";
echo "<br>";

echo "Value depending on the price: " . $house1->valuePrice . "€ <br>";
echo "Value depending on the rooms: " . $house1->valueRooms . "€ <br>";
echo "Value depending on the place (1000 if is Amsterdam, Gronningen or Rotterdam): " . $house1->valuePlace. "€";

// House Two

$house2 = new WozValue(1, 1, "No", "It doesn't have", "Van Schaikweg", "95", "Groningen", 100000, 20);

echo "<br><br>";
echo "<br>House two values: <br>";
echo "<br>";

echo "Number of rooms: " . $house2->numberRooms . "<br>";
echo "Number of toilets: " . $house2->numberToilets . "<br>";
echo "There is heating? " . $house2->heating . "<br>";
echo "If there is, how is it? " . $house2->typeHeating . "<br>";
echo "Street name: " . $house2->streetName . "<br>";
echo "House number: " . $house2->houseNumber . "<br>";
echo "City: " . $house2->place . "<br>";
echo "How much is it? " . $house2->price . "€ <br>";
echo "How many m² of land: " . $house2->m2land . "m² <br>";

echo "<br> Woz values: <br>";
echo "<br>";

echo "Value depending on the price: " . $house2->valuePrice . "€ <br>";
echo "Value depending on the rooms: " . $house2->valueRooms . "€ <br>";
echo "Value depending on the place (1000 if is Amsterdam, Gronningen or Rotterdam): " . $house2->valuePlace. "€";


?>
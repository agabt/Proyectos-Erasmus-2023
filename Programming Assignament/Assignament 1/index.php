<?php
class Users {
    public $firstname;
    public $lastname;
    public $dob;
}

$user1 = new Users;

$user1->firstname = "Anthony";
$user1->lastname = "Gab Terescu";
$user1->dob = "28-01-2005";

echo $user1->firstname;
echo $user1->lastname;
echo $user1->dob;

?>
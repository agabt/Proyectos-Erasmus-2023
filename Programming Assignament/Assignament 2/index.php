<?php
class Users {
    public $firstname;
    protected $lastname;
    private $dob;

    public function set_name($name) {
        $this->firstname = $name;
    }

    public function set_lname($lname) {
        $this->lastname = $lname;
    }

    public function set_dob($dob) {
        $this->dob = $dob;
    }

    public function showAttr() {
        echo "First Name: " . $this->firstname . ", Last Name: " . $this->lastname . "<br>" . "Date of Birth: " . $this->dob;
    }
}

$user1 = new Users;

$user1->set_name("Anthony");
$user1->set_lname("Gab Terescu");
$user1->set_dob("28-01-2005");

$user1->showAttr();

?>
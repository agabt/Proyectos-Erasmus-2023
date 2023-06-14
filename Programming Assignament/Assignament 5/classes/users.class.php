<?php
class Users {
    public $firstname;
    protected $lastname;
    private $dob;

    public function __construct($fname, $lname, $dob) {
        $this->firstname = $fname;
        $this->lastname = $lname;
        $this->dob = $dob;
    }

    public function showAttr() {
        echo "First Name: " . $this->firstname . ", Last Name: " . $this->lastname . "<br>" . "Date of Birth: " . $this->dob;
    }
}

?>
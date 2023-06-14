<?php
class RandomNum {
    public $num;

    public function __construct()
    {
        $this->num = rand(1, 50);
    }
}

?>
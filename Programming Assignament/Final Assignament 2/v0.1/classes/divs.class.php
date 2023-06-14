<?php
class Divs{
    public $id;
    public $classes;
    public $numberValue;

    public function __construct($id, $classes, $numberValue)
    {
        $this->id = $id;
        $this->classes = $classes;
        $this->numberValue = $numberValue;
    }
}

?>
<?php
class Square {
    public $id;
    public $status;
    public $value;

    public function __construct($id, $status, $value)
    {
        $this->id = $id;
        $this->status = $status;
        $this->value = $value;
    }
}
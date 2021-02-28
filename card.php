<?php
    class Card 
    {
        private $css = "<link rel='stylesheet' href='./css/card.css'>";
        private $name;
        private $description;
        private $image_src;

        public function __construct($school_name, $school_description, $school_image_src){
            $this->name = $school_name;
            $this->description = $school_description;
            $this->image_src = $school_image_src;
        }

        public function set_CSS($css){
            $this->css = $css;
        }

        public function displayCard(){
            echo "$this->css <div class='card-box'><div class='card-header'><img src='Assets/$this->image_src'></div><div class='card-body'><span id='tag'><a href=\"School-layout\home.php?sName=$this->name\">View School</a></span><h4> $this->name </h4><p> $this->description </p></div></div>";

        }   
    }

?>
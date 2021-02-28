<?php
require_once 'imageFunction.php';


if(isset($_POST['upload'])){
    $pName = $_POST['pName'];
    $price = $_POST['price'];
    $bName = $_POST['shortDesc'];
    $imageDir = uploadImage($_POST['image']);

    if(!empty($imageDir)){
        // Inserting into database
        // All columns other than password are unique
        // Error results when someone registers with details already in system
        $sqlcheck = "INSERT INTO seller (seller_ID, email,pwd, fName, lName, Business)
        VALUES ('$sellerID', '$email', '$pwd','$fName','$lName','$bName');";

        if ($sqlconnection->query($sqlcheck) == TRUE) {
            // close connection
            $sqlconnection->close();
            // echo for AJAX
            echo "true";
        }else{
            // close connection
            $sqlconnection->close();
            // echo for AJAX
            echo "false";}   
    }
}
    




?>

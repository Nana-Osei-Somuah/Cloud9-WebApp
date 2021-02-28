<?php
session_start();
require_once 'imageFunction.php';
require_once 'dbConnect.php';

if(isset($_POST['upload'])){
    $pName = $_POST['pName'];
    $price = $_POST['price'];
    $shortDesc = $_POST['shortDesc'];
    $imageDir = uploadImage($_FILES['image']);
    $sellerID = $_SESSION['sellerID'];
    $productID = uniqid($pName);
    if(!empty($imageDir)){
        // Inserting into database
        // All columns other than password are unique
        // Error results when someone registers with details already in system
        $sqlcheck = "INSERT INTO product (product_ID, pName, price, shortDesc, image_dir, seller_ID	)
        VALUES ('$productID', '$pName', '$price','$shortDesc','$imageDir','$sellerID');";

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
    else{echo 'empty';}
}
    




?>

<?php 
session_start();
require_once 'dbConnect.php';


if(isset($_POST['submit'])){
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $bName = $_POST['bName'];
    $email = $_POST['email'];
    $pwd = password_hash($_POST['pwd'], PASSWORD_DEFAULT);

    $sellerID = uniqid($bName);
    // Inserting into database
    // All columns other than password are unique
    // Error results when someone registers with details already in system
    $sqlcheck = "INSERT INTO seller (seller_ID, email,pwd, fName, lName, Business)
    VALUES ('$sellerID', '$email', '$pwd','$fName','$lName','$bName');";

    if ($sqlconnection->query($sqlcheck) == TRUE) {
        // close connection
        $sqlconnection->close();
        // create session for seller
        $_SESSION['sellerID'] = $sellerID;
        $_SESSION['sellerStatus'] = 'loggedIN';
        // echo for AJAX
        echo "true";
    }else{
        // close connection
        $sqlconnection->close();
        // echo for AJAX
        echo "false";}   

}




?>
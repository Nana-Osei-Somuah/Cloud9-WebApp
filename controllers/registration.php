<?php require_once 'dbConnect.php';


if(isset($_POST['submit'])){
    $ID = $_POST['ashID'];
    $email = $_POST['email'];
    $pwd = password_hash($_POST['pwd'], PASSWORD_DEFAULT);

    $customerID = uniqid($ID);
    
    // Inserting into database
    // All columns other than password are unique
    // Error results when someone registers with details already in system
    $sqlcheck = "INSERT INTO customers (customer_ID, email, ashesi_ID,pwd)
    VALUES ('$customerID', '$email', '$ID','$pwd');";
    
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




?>
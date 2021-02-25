<?php require_once 'dbConnect.php';


if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    
    
    // Inserting into database
    // All columns other than password are unique
    // Error results when someone registers with details already in system
    $sqlcheck = "SELECT pwd from customers where email = '$email';";
    $result = $sqlconnection->query($sqlcheck);
    if ( $result == TRUE) {

        $row = $result->fetch_assoc();
        $len = password_verify($pwd, $row['pwd']);
        if(password_verify($pwd, $row['pwd']) == true){
            // Free result set and close connection
            $result->free_result();
            $sqlconnection->close();
            echo "true";
            
            
        }else{
            // Free result set and close connection
            $result->free_result();
            $sqlconnection->close();
            // Echo for AJAX
            echo 'false';
            
            
        }
        
       
        
    }else{
            // close connection
            $sqlconnection->close();
            // Echo for AJAX
            echo "false";}   

}




?>
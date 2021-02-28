<?php 
    session_start();
    // check if seller session is active
    if(!isset($_SESSION['sellerID'])){
        // if not, redirect them to seller login/registration page
        header('Location: ../sellerLogin.php');
        
    }
    // check seller session status
    if(isset($_SESSION['sellerStatus']) && $_SESSION['sellerStatus'] != 'loggedIN'){
        // if sellers session status is no longer 'loggedIN', destory session
        session_unset();
        // destroy the session
        session_destroy();
    }
?>
<?php
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'net24fgraaff_pizza_app_db');
    define('DB_USER', 'pizzaEater');
    define('DB_PASS', 'pizzaEater');
    
    session_start();

    include_once("DB.php");
    $db = new DB;
?>
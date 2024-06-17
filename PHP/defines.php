<?php
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'net24fgraaff_pizza_app_db');
    define('DB_USER', 'net24fgraaff_pizzaEater');
    define('DB_PASS', 'PizzaEater');
    
    session_start();

    include_once("DB.php");
    $db = new DB;
?>
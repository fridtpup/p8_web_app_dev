<?php
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'pizza_app_db');
    define('DB_USER', 'root');
    define('DB_PASS', '');
    
    session_start();

    include_once("DB.php");
    $db = new DB;
?>
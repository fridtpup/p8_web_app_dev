<?php
class DB
{
    public function connect()
    {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if (!$conn)
        {
            die ('<h1>Database connection failed</h1>');
        }

        return $conn;
    }
}
?>
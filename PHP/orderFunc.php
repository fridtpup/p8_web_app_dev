<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

class orderFunc extends DB
{
    public $sqlQuery;

    public function sendOrder()
    {
        if (isset($_POST['order']))
        {
            $name = $_POST['name'];
            $address = $_POST['address'];
            $phone = $_POST['phone'];
            $pizza = $_POST['pizza'];

            $sql = "INSERT INTO orders (name, phone, adress, pizza) 
            VALUES ('$name', '$phone', '$address', '$pizza')";

            $this->sqlQuery = $this->connect()->query($sql);

            if ($this->sqlQuery)
            {
                header("location:confirmation.html");
            }
        }
    }
}
    
?>
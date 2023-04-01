<?php

class Price extends Base {
 
    static function getTableName() {
        return "Price";
    }


    static function getAll() {
        $conn = self::connection();
        $query = "SELECT *
        FROM price";

        return $conn->query($query)->fetchAll();
    }
    static function get($id) {
        $conn = self::connection();
        $query = "SELECT * FROM price 
        WHERE id = :id OR amount = :id";
        $result = $conn->prepare($query);
        $result->bindParam(':id', $id);
        $result->execute();

        return $result->fetch();
    }
    static function create($item) {
        $conn = self::connection();
        $query = "INSERT INTO price(`amount`) 
        VALUES (:price)";
        $result = $conn->prepare($query);
        $result->bindParam(':price', $item);

        $result->execute();

        if($result) {
            return $conn->lastInsertId();
        }
    }

    static function update($id, $item) {

    }
    static function delete($id) {

    }
}
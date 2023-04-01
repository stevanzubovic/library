<?php

class Discount extends Base {
    static function getTableName() {
        return "discount";
    }


    static function getAll() {
        $conn = self::connection();
        $query = "SELECT *
        FROM discount";

        return $conn->query($query)->fetchAll();
    }
    static function get($id) {
        $conn = self::connection();
            $query = "SELECT * FROM discount
            WHERE id = :id OR name = :id";
    
            $result = $conn->prepare($query);
            $result->bindParam(':id', $id);
            $result->execute();
    
            return $result->fetch();
    }
    static function create($item) {
       
    }

    static function update($id, $item) {

    }
    static function delete($id) {

    }
}
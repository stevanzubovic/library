<?php

class BookPrice extends Base {
    static function getTableName() {
        return "BookPrice";
    }


    static function getAll() {

    }
    static function get($id) {
        $conn = self::connection();
        $query = "SELECT * FROM book_price
        WHERE book_id = :id";

        $result = $conn->prepare($query);
        $result->bindParam(':id', $id);
        $result->execute();

        return $result->fetch();
    }
    static function create($item) {
        $conn = self::connection();
        $query = "INSERT INTO `book_price`(`book_id`, `price_id`) 
        VALUES (:book_id, :price_id)";
        $result = $conn->prepare($query);
        $result->bindParam(':book_id', $item['book_id']);
        $result->bindParam(':price_id', $item['price_id']);

        $result->execute();

        if($result) {
            return $conn->lastInsertId();
        }
    }

    static function update($id, $item) {
        $conn = self::connection();
        $query = "UPDATE `book_price` SET 
        `price_id`= :price_id
        WHERE book_id = :book_id";

        $result = $conn->prepare($query);
        $result->bindParam(':price_id', $item['price_id']);
        $result->bindParam(':book_id', $id);

        $result->execute();

       
    }
    static function delete($id) {

    }
}
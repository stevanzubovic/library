<?php

class Author extends Base {

        static function getTableName() {

        }

        static function getAll() {
            $conn = self::connection();
            $query = "SELECT *
            FROM author";
    
            return $conn->query($query)->fetchAll();
        }
        static function get($id) {
            $conn = self::connection();
            $query = "SELECT * FROM author
            WHERE author.id = :id OR CONCAT(author.name, ' ', author.last_name) LIKE :id";
    
            $result = $conn->prepare($query);
            $result->bindParam(':id', $id);
            $result->execute();
    
            return $result->fetch();
        }
        static function create($item) {
            $conn = self::connection();
            $name = explode(' ', $item, 2);
            if($item[1] == null) {
                $item[1] = '';
            }
            $query = "INSERT INTO `author`(`name`, `last_name`) 
            VALUES (:name, :last_name)";
            $result = $conn->prepare($query);
            $result->bindParam(':name', $name[0]);
            $result->bindParam(':last_name', $name[1]);
    
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
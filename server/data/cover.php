<?php

class Cover extends Base {
    static function getTableName() {
        return "cover";
    }


    static function getAll() {
        $conn = self::connection();
        $query = "SELECT *
        FROM image";

        return $conn->query($query)->fetchAll();
    }
    static function get($id) {

    }
    static function create($item) {
       
    }

    static function update($id, $item) {

    }
    static function delete($id) {

    }
}
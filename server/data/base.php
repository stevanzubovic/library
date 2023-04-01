<?php

    abstract class Base {
        protected static function connection() {
            try {
                $conn = new PDO("mysql:host=".SERVER.";dbname=".DATABASE.";charset=utf8", USERNAME, PASSWORD);
                $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            } catch(PDOException $ex) {
                echo "Connection error!";
            }
        }

        static abstract function getTableName();

        static abstract function getAll();
        static abstract function get($id);
        static abstract function create($item);
        static abstract function update($id, $item);
        static abstract function delete($id);
    }
<?php
require_once ('author.php');
require_once ('price.php');
require_once ('book_price.php');
class Book extends Base {

    static function getTableName() {
        return "book";
    }

    static function getAll() {
        $conn = self::connection();
        $query = "SELECT book.id as id, title, CONCAT(author.name, ' ',IFNULL(last_name, '')) as author,
        url as imageUrl, alt as imageAlt, available, description, amount as basePrice, percent as discountPercent,
        discount.name as discount, image.id as image_id, discount.id as discount_id
        FROM book INNER JOIN author on book.author_id = author.id 
        INNER JOIN image on book.image_id = image.id
        INNER JOIN book_price on book.id = book_price.book_id
        INNER JOIN price on book_price.price_id = price.id
        INNER JOIN discount on book.discount_id = discount.id";

        return $conn->query($query)->fetchAll();

    }

    static function get($id) {
        $conn = self::connection();
        $query = "SELECT book.id as id, title, CONCAT(author.name, ' ',IFNULL(last_name, '')) as author,
        url as imageUrl, alt as imageAlt, available, description, amount as basePrice, percent as discountPercent,
        discount.name as discount, image.id as image_id, discount.id as discount_id
        FROM book INNER JOIN author on book.author_id = author.id 
        INNER JOIN image on book.image_id = image.id
        INNER JOIN book_price on book.id = book_price.book_id
        INNER JOIN price on book_price.price_id = price.id
        INNER JOIN discount on book.discount_id = discount.id
        WHERE book.id = :id";

        $result = $conn->prepare($query);
        $result->bindParam(':id', $id);
        $result->execute();

        return $result->fetch();
    }

    static function create($item) {
        $conn = self::connection();
        $available = $item->available? true : false;
        $author = Author::get($item->author);
        if($author) {
            $author_id = $author->id;
        } else {
            $author_id = Author::create($item->author);
        }
        $price = Price::get($item->amount);
        if($price) {
            $price_id = $price->id;
        } else {
            $price_id = Price::create($item->amount);
        }
        if($item->available =! false) {
            $item->available = true;
        }
        $query = "INSERT INTO book (`title`, `image_id`, `description`, `available`, `discount_id`, `author_id`) 
        VALUES (:title, :image_id, :description, :available, :discount_id, :author_id)";
        $result = $conn->prepare($query);
        $result->bindParam(':title', $item->title);
        $result->bindParam(':image_id', $item->cover);
        $result->bindParam(':description', $item->description);
        $result->bindParam(':available', $item->available);
        $result->bindParam(':author_id', $author_id);
        $result->bindParam(':discount_id', $item->discount_id);
        $result->execute();

        if($result) {
            BookPrice::create(array("book_id"=> $conn->lastInsertId(), "price_id"=>$price_id));
            return $conn->lastInsertId();
        } else {
            return false;
        }

    }

    static function update($id, $item) {
        $conn = self::connection();

        $author = Author::get($item->author);
        if($author) {
            $author_id = $author->id;
        } else {
            $author_id = Author::create($item->author);
        }
        $price = Price::get($item->amount);
        if($price) {
            $price_id = $price->id;
        } else {
            $price_id = Price::create($item->amount);
        }
        if($item->available =! false) {
            $item->available = true;
        }
        $query = "UPDATE `book` SET 
        `title`= :title,
        `image_id`= :cover,
        `description`= :description,
        `available`= :available,
        `discount_id`= :discount_id,
        `author_id`= :author_id 
        WHERE id = :id";
        $result = $conn->prepare($query);
        $result->bindParam(':title', $item->title);
        $result->bindParam(':cover', $item->cover);
        $result->bindParam(':description', $item->description);
        $result->bindParam(':available', $item->available);
        $result->bindParam(':author_id', $author_id);
        $result->bindParam(':discount_id', $item->discount_id);
        $result->bindParam(':id', $id);
        $result->execute();

        if($result) {
            $bookPrice = BookPrice::get($id);
            if($bookPrice) {
                BookPrice::update($id, array("price_id" => $price_id));
            } else {
                BookPrice::create(array("book_id"=> $conn->lastInsertId(), "price_id"=>$price_id));
            }
            return $conn->lastInsertId();
        } else {
            return http_response_code(400);
        }
    }

    static function delete($id) {
        $conn = self::connection();
        $query = "DELETE FROM book WHERE id = :id";
        $result = $conn->prepare($query);
        $result->bindParam(':id', $id);
        return $result->execute();
    }
}


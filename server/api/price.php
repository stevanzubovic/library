<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

header('Access-Control-Allow-Methods: *');
require_once("../config.php");
require_once("../data/base.php");


require_once("../data/price.php");
$className = "Price";

require_once("common/crud.php");

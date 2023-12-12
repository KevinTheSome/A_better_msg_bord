<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$data = json_decode(file_get_contents("php://input"), true);

function read_message_from_file(){
    return json_decode(file_get_contents('messages.json'));
}

echo json_encode(["msg"=> read_message_from_file()]);

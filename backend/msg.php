<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

function read_message_from_file(){
    return json_decode(file_get_contents('messages.json'));
}

function read_input_and_save_json_file(){
    $data = json_decode(file_get_contents("php://input"), true);
    $dataToAppend = ["username" => $data["username"], "msg" => $data["message"]];
    $tempJsonData = read_message_from_file();
    array_push($tempJsonData, $dataToAppend);
    if ($data["username"] != null or $data["msg"] != null){
        file_put_contents('messages.json', json_encode($tempJsonData));
    }
}

read_input_and_save_json_file();

<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$query = $_GET['q'] ?? null;

if (!$query) {
    echo json_encode(["error" => "Query mancante"]);
    exit;
}

// encode stringa (spazi ecc.)
$query = urlencode($query);

$url = "https://api.upcitemdb.com/prod/trial/search?s={$query}&match_mode=1&type=product";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(["error" => curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);

echo $response;
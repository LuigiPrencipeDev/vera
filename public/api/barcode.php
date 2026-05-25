<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // opzionale (utile in sviluppo)

// 👉 recupero EAN da query string
$ean = $_GET['ean'] ?? null;

if (!$ean) {
    echo json_encode([
        "error" => "EAN mancante"
    ]);
    exit;
}

// 👉 tua API KEY
/* $API_KEY = "upc_d57no5jnvqhmninowi4"; */

// 👉 chiamata API esterna
$url = "https://api.upcitemdb.com/prod/trial/lookup?upc=" . $ean;

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
/* curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $API_KEY"
]) */;

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode([
        "error" => curl_error($ch)
    ]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// 👉 ritorni direttamente la risposta
echo $response;
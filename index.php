<?php
/*include __DIR__ . '/common/bootstrap.php';
include __DIR__ . '/common/ColorConsole.php';
$file = __DIR__ . '/access.log';
$result = [];
$result[] = 'HTTP_REFERER "' . ($_SERVER['HTTP_REFERER'] ?? '') . '"';
$result[] = 'HTTP_USER_AGENT "' . $_SERVER['HTTP_USER_AGENT'] . '"';
$result[] = 'REQUEST_METHOD "' . $_SERVER['REQUEST_METHOD'] . '"';
$result[] = 'REMOTE_ADDR "' . $_SERVER['REMOTE_ADDR'] . '"';
$result[] = 'QUERY_STRING "' . ($_SERVER['QUERY_STRING'] ?? '') . '"';
$result[] = 'HTTP_ACCEPT_LANGUAGE "' . $_SERVER['HTTP_ACCEPT_LANGUAGE'] . '"';

Util::writeLog($file,
    "................... {$_SERVER['REMOTE_ADDR']}\n\t"
    . join("\n\t", $result));*/

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MOVE</title>
    <link rel="stylesheet" href="/assets/grid.css">
    <link rel="stylesheet" href="/assets/main.css">
    <link rel="stylesheet" href="/assets/menu.css">

<!--    <script src="assets/na.bundle.js" data-config=""></script>-->
<!--    <script src="http://localhost:8101/animate.bundle.js" data-config=""></script>-->

    <style rel="stylesheet"></style>

</head>
<body>
<div id="page" class="table">
    <div id="menu" class="table-cell valign-top">
        <div class="btn" onclick="callContext('move')">move</div>
        <div class="btn" onclick="callContext('scene')">scene</div>
        <div class="btn" onclick="callContext('components')">components</div>
        <div class="btn" onclick="callContext('animation')">animation</div>
        <div class="btn" onclick="callContext('flyter')">flyter</div>
        <div class="btn" onclick="callContext('textquest')">text quest</div>
        <div class="btn" onclick="callContext('loader')">loader</div>
        <div class="btn" onclick="callContext('spaceman')">spaceman</div>
        <div class="btn" onclick="callContext('car')">car</div>
        <div class="btn" onclick="callContext('car2')">car2</div>
        <div class="btn" onclick="callContext('frames')">frames</div>
        <div class="btn" onclick="callContext('menu')">menu</div>
        <div class="btn" onclick="callContext('subscribe')">subscribe</div>
        <div class="btn" onclick="callContext('transform')">transform</div>
        <div class="btn" onclick="callContext('transform-matrix')">transform-matrix</div>
        <div class="btn" onclick="callContext('mini-game')">mini-game</div>
        <div class="btn" onclick="callContext('mini-game-rpg')">mini-game-rpg</div>
        <div class="btn" onclick="callContext('game-frame')">game-frame</div>
    </div>
    <div id="context" class="table-cell valign-top"></div>
</div>
<script>
    function callContext (demo) {
        location.href = '/demo/' + demo;
    }
</script>
</body>
</html>
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

    <script src="assets/na.bundle.js" data-config=""></script>
    <script src="http://localhost:8101/animate.bundle.js" data-config=""></script>

    <style rel="stylesheet">
        html, body {
            background: #2b2b2b;
            color: #7c7c7f;
            width: 100%;
            height: 100%;
        }

        #page {
            width: 100%;
            height: 100%;
        }

        #menu {
            width: 200px;
            height: 400px;
            color: #848484;
        }

        #menu .btn:hover {
            background: #181818;
        }

        #menu .btn {
            padding: 3px 10px;
            cursor: pointer;
            font-size: 13px;
            font-family: "sans-serif", "sans", "Ubuntu Condensed", "Ubuntu";
        }

        #menu .btn.active {
            background: #181818;
        }

        #context {
            /*background: #181818;*/
            color: chartreuse;
        }
    </style>

</head>
<body>
<div id="page" class="table">
    <div id="menu" class="table-cell valign-top">
        <div class="btn" onclick="callContext('demo')">demo</div>
        <div class="btn" onclick="callContext('move')">move</div>
        <div class="btn" onclick="callContext('scene')">scene</div>
        <div class="btn" onclick="callContext('components')">components</div>
        <div class="btn" onclick="callContext('animation')">animation</div>
        <div class="btn" onclick="callContext('flyter')">flyter</div>
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
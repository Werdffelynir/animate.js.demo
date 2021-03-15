#!/bin/bash

rm -r /var/app/animate.js.demo/node_modules/animate.js/src && \
  cp -r /var/app/animate.js/src /var/app/animate.js.demo/node_modules/animate.js/src

cp /var/app/animate.js/index.js /var/app/animate.js.demo/node_modules/animate.js/index.js

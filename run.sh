#!/bin/bash

# cd /var/app/animate.js/ && sh ./run.sh &

#google-chrome --app=http://localhost:8010/tests/default.html &
#google-chrome http://localhost:8010/tests/default.html
google-chrome --app=http://localhost:8011 &

#google-chrome --proxy-server="socks5://localhost:8030" \
#  --host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE localhost" \
#  --app=http://localhost:8012/tests/default.html

php -S localhost:8011


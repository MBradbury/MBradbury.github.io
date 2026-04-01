#!/bin/bash
# sudo apt-get -y install terser
echo "main"
terser \
    assets/js/plugins/greedy-navigation.js \
    assets/js/_main.js \
    --compress --mangle --output assets/js/main.min.js
./sri-sum.sh assets/js/main.min.js

echo "pub-map"
terser \
    assets/pub-map/pub-map.js \
    --compress --mangle --output assets/pub-map/pub-map.min.js
./sri-sum.sh assets/pub-map/pub-map.min.js

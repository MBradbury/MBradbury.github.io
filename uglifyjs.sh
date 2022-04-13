#!/bin/bash
# sudo apt-get -y install uglifyjs.terser
uglifyjs.terser \
    assets/js/plugins/greedy-navigation.js \
    assets/js/_main.js \
    --compress --mangle --output assets/js/main.min.js

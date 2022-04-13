#!/bin/bash
uglifyjs \
    assets/js/vendor/jquery/jquery-3.6.0.js \
    assets/js/plugins/jquery.greedy-navigation.js \
    assets/js/_main.js \
    -c -m -o assets/js/main.min.js

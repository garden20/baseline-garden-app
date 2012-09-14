define('js/app',[
    'jquery',
    'underscore',
    'handlebars',
    'couchr'
],
function($, _, handlebars, couch){
    var exports = {};

    exports.init = function() {
        console.log('init');
    }

    exports.on_dom_ready = function(){
        console.log('dom!~');
    }


    return exports;
});
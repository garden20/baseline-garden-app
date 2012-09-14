define('js/app',[
    'jquery',
    'underscore',
    'handlebars',
    'couchr',
    'garden-app-support',
    'hbt!templates/test'
],
function($, _, handlebars, couch, garden, template){
    var exports = {};

    exports.init = function() {
        console.log('init');
    }

    exports.on_dom_ready = function(){
        console.log('dom!~');
        garden.get_user_ctx(function(err, usrCtx){
            console.log(err, usrCtx);
        })
        $('.main').html(template());

    }


    return exports;
});
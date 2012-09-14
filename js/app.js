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

    /**
     * This is where you will put things you can do before the dom is loaded.
     */
    exports.init = function() {
    }

    /**
     * This that occur after the dom has loaded.
     */
    exports.on_dom_ready = function(){
        garden.get_garden_ctx(function(err, garden_ctx){
            $('.main').html(template(garden_ctx));
        })
    }


    return exports;
});
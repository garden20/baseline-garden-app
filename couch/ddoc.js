var _ = require('underscore')._;

exports.views = {};
exports.rewrites = [
    { "description": "Access to this database" , "from": "_db" , "to"  : "../.." },
    { "from": "_db/*" , "to"  : "../../*" },
    { "description": "Access to this design document" , "from": "_ddoc" , "to"  : "" },
    { "from": "_ddoc/*" , "to"  : "*"},
    { "description": "Access to the main CouchDB API", "from": "_couchdb" , "to"  : "../../.."},
    { "from": "_couchdb/*" , "to"  : "../../../*"},
    {from: '/', to: 'index.html'},
    {from: '/*', to: '*'}

];




exports.views.by_word = {
    map : function(doc) {
        if (!doc.tag) return;
        for (var i = 0; i < doc.tag.length; i++) {

            emit(doc.tag[i], null);
        };
    },
    reduce: '_count'
}


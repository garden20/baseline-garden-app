Baseline Garden App
===================

This repo is a starting point to create an app for a garden market such as [Garden20](http://garden20.com/market/).

Fork me and modify!

This baseline has been carefully tweeked to make it easy to jump into writing apps. The technology choices have been carefully
balanced for speed, flexibilty and ease of use. Here are some choices made:

 - Using less for stylesheets, less is precompiled on the push.
 - Including the baseline bootstrap less files.
 - using jam to manage clientside dependecies.
 - using handlebars for templating.

 All of the above can be swapped out, but the owness will be on you to get the same benefit as we are providing with this baseline.



## Getting started

First off you will need a few things, you will need ```node``` and ```npm``` installed.

### Install kanso

[Kanso](http://kan.so) is the main tool for working with couchdb. It has great packages and provided the interface to the market.


```
npm install -g kanso
```

### Install Jam

[Jam](http://jamjs.org/) will be used to manage the frontend dependencies. You actually might not need jam, because the dependencies
are already in this repo. But if you want to add new dependencies, please use jam. Its fine to use other package managers as well. We just
dont have time to show how to do so.

```
npm install -g jamjs
```

### Install A Garden or CouchDB

Follow the instructions [here](http://garden20.com/get) to get a garden for yourself.


### Push it

You should now be ready to push this app to your garden. Try this:

```
kanso push http://127.0.0.1:5984/baseline
```

You should see a result like this:

```
Build complete: 900ms
Uploading...
OK: http://127.0.0.1/baseline/_design/baseline/_rewrite/
```

To visit the app type the following in your browser:

```
http://localhost:5984/baseline/_design/baseline/_rewrite/
```

There is a reason we use 127.0.0.1 for pushing and localhost for viewing. You can read about it [here](http://garden20.com/wiki/Localhost_vs_127).

You can also minify your app, which means stylesheets and js into one file each, and greatly reduces. Push your app like this

```
kanso push http://127.0.0.1:5984/baseline --minify
```



## Make it your own

Now that you have can push the app to your garden, you probably want to do your own work on it. Here are some things to do:

### Edit kanso.json

 - Change the "name" property is probably the single most important thing to change off the bat. There is no namespacing and it should be globally unique so check that the name is not taken.
 - Change the url to your github repo location
 - Change the description and long description to match what you are building.
 - Adjust the categories
 - If you want to use flattr for payments, change the flattr_user_id. Or remove it otherwise.

At this point, please dont alter anything else.




### Make an app!

The places you will most likely be editing are the following files:

 - ```js/app.js``` which is your applications main entry point.
 - ```css/app.less``` which your stylesheet.
 - ```templates/*``` which will hold all of your templates
 - ```couch/ddoc.js``` which is a couchdb design document.


### Promotional Stuff

After your app is all polished off, take some time to make some screenshots, icons, a favicon, and promotional images. Overwrite all the placeholder images in the ```img/promo``` folder



## Push To The Development market

You should push to a development market before you push to the main market. This will allow you to test installing your app before others see it.

Create an account, if you have not done so, at https://garden.iriscouch.com/garden/_design/garden/_rewrite/

Then push your app

```
kanso push https://garden.iriscouch.com/garden/_design/garden/_rewrite/upload --minify
```


## Push your app to the Garden Market

Create an account, if you have not done so, at http://garden20.com/account

Then push your app

```
kanso push http://garden20.com/market/upload --minify
```

## FAQ

### I have added a file or folder off the root directory and it is not getting uploaded?

You will need to add it to the list of attachments in ```kanso.json```. eg

 ```
    "attachments": ["css", "img", "jam", "js",  "index.html", "application.appcache", "templates", "newfolder"],
```

### I have added --minify to my push but I am still seeing requests for other resources

If you add new files in the js dir that are not managed by jam, you will have to tell jam to minify them. Alter jam in ```kanso.json```. eg

```
"jam" : {
    "include" : ["js/app", "domReady", "js/newfile]
}
```

### I want some cool js lib, how do I add it?

Lets say your js library is called cooljs

```
jam install cooljs
```

Then modify your ```js/app.js``` file as so:

```
define('js/app',[
    'jquery',
    'underscore',
    'handlebars',
    'couchr',
    'garden-app-support',
    'hbt!templates/test',
    'cooljs'
],
function($, _, handlebars, couch, garden, template, cooljs){
    ....
    cooljs.rule();
    ...
```

You can find available packages here: [jamjs.org](http://jamjs.org/packages#/)

If you dont find your cooljs library just bug someone on #jamjs and they will probably help you add it.

### Only users and admins are able to change things in the db

We turned this on by default so you will be aware of where to handle read security. Alter ```couch/ddoc.js``` and modify the validate_doc_update function.










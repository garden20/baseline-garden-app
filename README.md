Baseline Garden App
===================

This repo is a starting point to create an app for a garden market such as [Garden20](http://garden20.com/market/).

Fork me and modify!

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

Follow the instructions [here](http://garden20.com/get) to get a couchdb for yourself.


## Push it

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

## Initial Changes

Now that you have can push the app to your garden, you probably want to do your own magic to it. Here are some things to do:

### Edit kanso.json

The "name" property is probably the single most important thing to change off the bat. There is no namespacing and it should be globally unique so check that the name is not taken.

// TODO


## Push To The Development market

Please dont push your app to the main market right off the bat. Push it do a development market like

// TODO









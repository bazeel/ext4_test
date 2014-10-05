Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    name: 'App',
    appFolder: 'app',

    controllers: [
        'ItemController'
    ],

    launch: function() {
        Ext.create('App.view.Viewport', {
            renderTo: 'App'
        });
    }
});
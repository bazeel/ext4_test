Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    name: 'App',
    appFolder: 'app',

    controllers: [
        'ItemController'
    ],

    //stores : ['Items'],
    //models : ['Item'],

    launch: function() {
        Ext.create('App.view.Viewport', {
            renderTo: 'App'
            //height: 250,
            //width: 500,
            //margin: '5 5 5 5 ',
            //layout: 'fit',
            //items: Ext.create('App.view.Viewport')
        });
    }
});
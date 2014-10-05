Ext.define('App.store.Items', {
    extend: 'Ext.data.Store',
    model: 'App.model.Item',
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id  : 'myProxyKey'
    }

});
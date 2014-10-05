Ext.define('App.view.Viewport',{
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
        'App.view.ShoppingList'
    ],
    initComponent: function() {
        Ext.apply(this, {
            items: [{
                region: 'north',
                xtype: 'panel',
                height: 26,
                tbar: Ext.create('App.view.TopToolbar')
            },{
                region: 'center',
                xtype: 'ShoppingList'
            }]
        });

        this.callParent(arguments);
    }
});
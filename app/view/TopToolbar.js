Ext.define('App.view.TopToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.TopToolbar',
    items: [
        {
            text: 'Добавить запись',
            action: 'add',
            icon: 'res/icons/add.png'
        },'->',{
            xtype: 'textfield',
            fieldLabel: 'Фильтр по названию',
            labelWidth: 115
        },{
            xtype: 'tool',
            tooltip: 'Очистить фильтр',
            type: 'close',
            text: '',
            action: 'clear'
        },'-',{
            xtype: 'tbspacer', width: 10
        }
    ],
    initComponent: function() {
        this.callParent(arguments);
    }
});
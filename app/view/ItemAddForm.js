Ext.define('App.view.ItemAddForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.ItemAddForm',
    title: 'Добавить/Редактировать',
    width: 320,
    height: 180,
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Название товара',
                        allowBlank: false,
                        msgTarget: 'side',
                        margin: '10'
                    },{
                        xtype: 'numberfield',
                        name: 'count',
                        fieldLabel: 'Кол-во',
                        allowBlank: false,
                        msgTarget: 'side',
                        margin: '10',
                        allowDecimals: false
                    },{
                        xtype: 'numberfield',
                        name: 'price',
                        fieldLabel: 'Цена единицы',
                        allowBlank: false,
                        msgTarget: 'side',
                        margin: '10'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },{
                text: 'Отментить',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
Ext.define('App.view.ShoppingList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.ShoppingList',
    store : 'Items',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : 'Items',
        dock: 'bottom',
        displayInfo: true
    }],

    totalPriceRenderer: function(value, metaData, record){
        var price = record.get('price'),
            count = record.get('count');
        return price * count;
    },

    initComponent: function() {

        this.columns = [
            {
                header: 'Название товара',
                dataIndex: 'name',
                flex: 1
            },{
                header: 'Цена единицы',
                dataIndex: 'price',
                flex: 1
            },{
                header: 'Кол-во',
                dataIndex: 'count',
                flex: 1
            },{
                header: 'Общая цена',
                flex: 1,
                renderer: this.totalPriceRenderer
            },{
                text: 'Редактировать',
                align: 'center',
                xtype: 'actioncolumn',
                items: [
                    {
                        xtype: 'button',
                        tooltip: 'Редактировать',
                        icon: 'res/icons/table_edit.png',
                        scale: 'small',
                        handler: function(view, rowIndex, colIndex, item, e) {
                            this.fireEvent('itemclick', this, 'edit', view, rowIndex, colIndex, item, e);
                        }
                    },{
                        xtype: 'button',
                        tooltip: 'Удалить',
                        icon: 'res/icons/delete.png',
                        scale: 'small',
                        handler: function(view, rowIndex, colIndex, item, e) {
                            this.fireEvent('itemclick', this, 'delete', view, rowIndex, colIndex, item, e);
                        }
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }
});
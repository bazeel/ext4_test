Ext.define('App.controller.ItemController', {
    extend : 'Ext.app.Controller',
    stores : ['Items'],
    models : ['Item'],
    views  : ['ShoppingList', 'ItemAddForm', 'TopToolbar'],

    init : function() {
        this.control({
            'TopToolbar > textfield' : {
                change : this.onSearchChange
            },
            'TopToolbar tool[action=clear]': {
                click: this.clearFilter
            },
            'TopToolbar button[action=add]' : {
                click: this.addItem
            },
            'ShoppingList': {
                itemdblclick: this.editItem
            },
            'ShoppingList actioncolumn': {
                itemclick: this.onActButtonHandler
            },
            'ItemAddForm button[action=save]': {
                click: this.updateItem
            }
        });
    },

    onActButtonHandler: function(column, action, view, rowIndex, colIndex, item, e) {
        var record = view.getStore().getAt(rowIndex);
        if (action == 'edit') {
            this.editItem(null, record);
        } else if (action == 'delete') {
            view.getStore().remove(record);
            view.getStore().sync();
        }
    },

    clearFilter: function(cmp) {
        var topToolbar = cmp.up('toolbar');
        var searchField = topToolbar.down('textfield');
        var itemsStore = this.getItemsStore();
        searchField.setValue('');
        itemsStore.clearFilter();
    },

    onSearchChange: function(cmp, newValue, oldValue, eOpts) {
        var itemsStore = this.getItemsStore();
        itemsStore.clearFilter();
        if (newValue != null) {
            itemsStore.filter('name', newValue);
        }
    },

    editItem: function(grid, record) {
        var view = Ext.widget('ItemAddForm');
        view.down('form').loadRecord(record);
    },

    updateItem: function(button) {
        var win = button.up('window');
        var form = win.down('form').getForm();
        if (form.isValid()) {
            var record = form.getRecord();
            var values = form.getValues();
            if(!record){
                var newRecord = new App.model.Item(values);
                this.getItemsStore().add(newRecord);
            } else {
                record.set(values);
            }
            win.close();
            this.getItemsStore().sync();
        } else {
            Ext.Msg.alert('Ошибка', 'Все поля обязательны для заполнения');
        }
    },

    addItem: function(button) {
        var view = Ext.widget('ItemAddForm');
    }
});
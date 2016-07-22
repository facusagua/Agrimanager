/*
 * File: app/store/Tareas.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Tareas', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Tareas',
        'Ext.data.proxy.LocalStorage'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Tareas',
            autoLoad: true,
            autoSync: true,
            model: 'MyApp.model.Tareas',
            proxy: {
                type: 'localstorage'
            }
        }, cfg)]);
    }
});
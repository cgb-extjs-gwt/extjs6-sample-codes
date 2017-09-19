Ext.define('chapter4.FitLayout', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter4-fitlayout',
    border: true,
    title: 'Fit Layout',
    width: 300,
    height: 300,
    padding: 5,
    layout : 'fit',
    items: [
        {
            xtype: 'button',
            text: '동해물과 백두산아... 하하하하하하.'
        }
    ]
});
/* vim: set tabstop=4 shiftwidth=4: */
/*jshint mootools:true */

(function (exports) {
    'use strict';
    
    var Tabs = new Class({
        init: function (wrap) {
            _.bindAll(Tabs);
            this._wrap = wrap;
            
            this._bar = new Element('div');
            this._bar.set('id', 'tabBar');
            this._wrap.adopt(this._bar);
            
            this._view = new Element('div');
            this._view.set('id', 'tabView');
            this._wrap.adopt(this._wrap);
            
            window.addEvent('resize', this.refreshSize);
            this.refreshSize();
        },
        add: function (name) {
            var title   =   new Element('div'),
                view    =   new Element('div'),
                wrap    =   this._wrap;
            
            title.set({
                'class': 'tabTitle',
                'text': name
            });
            title.addEvent('click', function () {
                wrap.getElements('.tabTitle, .tabView').removeClass('active');
                $$(title, view).addClass('active');
            });
            
            view.set('class', 'tabView');
            
        },
        updateSize: function () {
            var size = this._wrap.getCoordinates();
            this._bar.setStyle('height', '25px');
            this._view.setStyle('height', Math.max(size.height - 25, 0) + 'px');
        }
    });
}) (this);
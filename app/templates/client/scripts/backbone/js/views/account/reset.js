/**
*   Reset View
*/

'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Reset = Backbone.View.extend({

    el: '.content',

    // Compiled template
    template: JST['client/templates/account/reset<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    // Delegated events
    events: {
        'submit form': 'formSubmit'
    },

    // Code that runs when View is initialized
    initialize: function() {
        this.render();
    },

    formSubmit: function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        App.user.reset($form);
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    }

});
define(['uiComponent'], function(Component) {
    return Component.extend({
        initialize: function () {
            alert('Loaded');
            this._super();
            this.sayHello = "Hello this is content populated with KO!";
        }
    });
});
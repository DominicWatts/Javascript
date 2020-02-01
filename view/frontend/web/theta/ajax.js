define(
    [
        'jquery',
        'ko',
        'uiComponent'
    ], function(
        $,
        ko,
        Component
    ) {
    return Component.extend({
        initialize: function () {

            this._super();
           
            var url = '/xigen_javascript/theta/json',
                param = 'ajax=1',
                data;

            $.ajax({
                async: false, // required
                showLoader: true,
                url: url,
                data: param,
                type: "POST",
                dataType: 'json',
                success : function (response) {
                    data = response.html;
                }
            });
            console.log(data);
                                               
            this.response = data;
            this.observe(['response']);
     
        }
    });
});
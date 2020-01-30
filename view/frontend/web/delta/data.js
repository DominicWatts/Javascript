define([], function () {
    var mageJsComponent = function(config, node)
    {
        // alert("A simple magento component.");
        alert("Look in your browser's console");
        // Object { another: "example" } from json
        console.log(config);
        // <div id="data" class="data"> from calling node (unless *)
        console.log(node);
    };

    return mageJsComponent;
});
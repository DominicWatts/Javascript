define([], function () {
    var mageJsComponent = function(config, node)
    {
        // alert("A simple magento component.");
        alert("Look in your browser's console");
        // Object { config: "value" } from json
        console.log(config);
        // <div id="one" class="foo"> from calling node (unless *)
        console.log(node);
    };

    return mageJsComponent;
});
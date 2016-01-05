System.register(['angular2/platform/browser', './app.component', 'angular2/src/core/linker/view_listener', 'angular2/platform/common_dom', 'angular2/core'], function(exports_1) {
    var browser_1, app_component_1, view_listener_1, common_dom_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (view_listener_1_1) {
                view_listener_1 = view_listener_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                core_1.bind(view_listener_1.AppViewListener).toClass(common_dom_1.DebugElementViewListener)
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map
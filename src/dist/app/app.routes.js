"use strict";
var createtask_component_1 = require('./createtask/createtask.component');
var showtask_component_1 = require('./showtask/showtask.component');
var app_component_1 = require('./app.component');
exports.routes = [{
        path: 'createtask',
        component: createtask_component_1.Createtaskcomponent
    }, {
        path: 'showtask',
        component: showtask_component_1.Showtaskcomponent
    }, {
        path: '',
        component: app_component_1.AppComponent
    }];
//# sourceMappingURL=app.routes.js.map
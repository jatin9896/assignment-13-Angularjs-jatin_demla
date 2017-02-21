"use strict";
var createtask_component_1 = require('./createtask/createtask.component');
var showtask_component_1 = require('./showtask/showtask.component');
exports.routes = [{
        path: 'createtask',
        component: createtask_component_1.Createtaskcomponent
    }, {
        path: 'showtask',
        component: showtask_component_1.Showtaskcomponent
    }, {
        path: 'createtask/:id',
        component: createtask_component_1.Createtaskcomponent
    }];
//# sourceMappingURL=app.routes.js.map
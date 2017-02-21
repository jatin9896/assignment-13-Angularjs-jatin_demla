"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var detail_1 = require('../detail');
var detail_service_1 = require('../detail.service');
var router_1 = require("@angular/router");
var Createtaskcomponent = (function () {
    function Createtaskcomponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.details = new detail_1.Detail();
        this.detail = this.service.detail;
    }
    Createtaskcomponent.prototype.ngOnInit = function () {
        var _this = this;
        this.details.date = "";
        this.details.title = "";
        this.details.description = "";
        this.details.priority = 0;
        this.detail = this.service.detail;
        this.route.params.subscribe(function (data) {
            _this.index = +data.id;
            alert(_this.index);
            if (_this.index) {
                // console.log("index is :"+this.index+"data : "+JSON.stringify(data)+"data id : "+data.id);
                _this.details = _this.service.detail[_this.index - 1];
                alert("index is :" + _this.index + "data : " + JSON.stringify(data) + "data id : " + data.id);
            }
        });
    };
    Createtaskcomponent.prototype.submit = function (date, title, desc, priority, event) {
        event.preventDefault();
        // console.log("test : "+JSON.stringify(detail));
        console.log("date : " + date + "title " + title + "desc " + desc + "priority : " + priority);
        //alert(date);
        var p = new detail_1.Detail();
        p.date = date;
        p.description = desc;
        p.title = title;
        p.priority = priority;
        //   alert(p.date);
        this.service.detail.push(p);
        //  alert("Submit clicked"+JSON.stringify(p));
    };
    Createtaskcomponent = __decorate([
        core_1.Component({
            selector: 'createtask',
            templateUrl: './app/createtask/createtask.component.html',
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [detail_service_1.DetailService, router_1.ActivatedRoute, router_1.Router])
    ], Createtaskcomponent);
    return Createtaskcomponent;
}());
exports.Createtaskcomponent = Createtaskcomponent;
//# sourceMappingURL=createtask.component.js.map
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
var detail_service_1 = require('../detail.service');
var Showtaskcomponent = (function () {
    function Showtaskcomponent(service) {
        this.service = service;
        this.detail = this.service.detail;
    }
    Showtaskcomponent.prototype.ngOnInit = function () {
        this.detail = this.service.detail;
    };
    Showtaskcomponent = __decorate([
        core_1.Component({
            selector: 'showtask',
            templateUrl: './app/showtask/showtask.component.html',
            styleUrls: [''],
        }), 
        __metadata('design:paramtypes', [detail_service_1.DetailService])
    ], Showtaskcomponent);
    return Showtaskcomponent;
}());
exports.Showtaskcomponent = Showtaskcomponent;
//# sourceMappingURL=showtask.component.js.map
webpackJsonp([0],{793:function(e,t,o){"use strict";var l=o(16),n=o(19),u=o(0),a=o(216),r=o(794);console.log("`Detail` bundle loaded asynchronously"),t.routes=[{path:"",component:r.Detail,pathMatch:"full"}];var i=function(){function AboutModule(){}return AboutModule.routes=t.routes,AboutModule=__decorate([u.NgModule({declarations:[r.Detail],imports:[l.CommonModule,n.FormsModule,a.RouterModule.forChild(t.routes)]}),__metadata("design:paramtypes",[])],AboutModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},794:function(e,t,o){"use strict";var l=o(0),n=function(){function Detail(){}return Detail.prototype.ngOnInit=function(){console.log("hello `Detail` component")},Detail=__decorate([l.Component({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <router-outlet></router-outlet>\n  "}),__metadata("design:paramtypes",[])],Detail)}();t.Detail=n}});
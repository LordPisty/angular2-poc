System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/angular2-poc.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){this.title="angular2-poc works!"}return a=d([f.Component({moduleId:c.id,selector:"angular2-poc-app",templateUrl:"angular2-poc.component.html",styleUrls:["angular2-poc.component.css"]}),e("design:paramtypes",[])],a)}();return b.Angular2PocAppComponent=g,c.exports}),System.registerDynamic("app/index.js",["./environment","./angular2-poc.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./angular2-poc.component");return b.Angular2PocAppComponent=e.Angular2PocAppComponent,c.exports});
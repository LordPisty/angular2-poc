* angular 2: more config
* components!
* angular changed / js changed
* typescript: compiler es6 -> es5

* requirejs => now js: import @angular/core
								-> alias module: index file / by file!

* +<route_name> : + convention for route, lazy-loading

* <angular2-poc-app>Loading...</angular2-poc-app> old "ng-app"
	-> component with selector

* decorator: @Component
=
var dec = function(options){
	return function(target) {
		target.options = options;
		return target;
	}
} 
https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.9fv8ttyw0

* other option to inject roviders:
bootstrap(Angular2PocAppComponent, [
	ROUTE_PROVIDERS
]);

=> try to keep providers at most child level possible to avoid conflicts

* css/html/js => recommended in same folder / styleguides
* css isolated by component: no conflicts

* no hash => angular 2 server built that way, returns different html but reuses same js
// LocationStrategy.HASH => flag
=> history api

* shared/index.ts ==> index file with node-style modularization
tsconfig.ts ==> "moduleResolution": "node",

* cli naming convetion make minification safe!

* 'manual provider': {provide: Number, useValue: 47} scoped in component and children
* @Inject / @SkipSelf

*   constructor(public team:TeamService, value:Number) {
    console.log(value);
  }
  ==> public =~= this.team = team; + field 'team;'
  ==> private
  ==> protected

* ngOnInit() ==> run code after component is ready

* [(ngModel)]="team.name" 2-way bindind: square inputs, parenthesis output
* right side is always expression 

* css :host => to style component container - selector property
* shadow DOM: component isolation + global stylesheet
	==> encapsulation: ViewEncapsulation. properties ==> unique ids for css

* System.js
	css imports
	lazy loading
	plugins

		
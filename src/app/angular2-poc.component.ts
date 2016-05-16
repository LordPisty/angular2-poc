import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';
import { TeamService } from './shared'

@Component({
  moduleId: module.id,
  selector: 'angular2-poc-app',
  templateUrl: 'angular2-poc.component.html',
  styleUrls: ['angular2-poc.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, TeamService, {provide: Number, useValue: 47}]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/team', component: TeamComponent},
  {path: '/detail/:id', component: DetailComponent}
])
export class Angular2PocAppComponent {
  title = 'angular2-poc works!';
}

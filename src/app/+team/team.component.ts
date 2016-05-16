import { Component, OnInit } from '@angular/core';
import { TeamService, CardComponent } from '../shared';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
  directives:[CardComponent, ROUTER_DIRECTIVES]
})
export class TeamComponent implements OnInit {

  constructor(public team:TeamService) {}

  ngOnInit() {
  }

}

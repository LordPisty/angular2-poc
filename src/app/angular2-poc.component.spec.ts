import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2PocAppComponent } from '../app/angular2-poc.component';

beforeEachProviders(() => [Angular2PocAppComponent]);

describe('App: Angular2Poc', () => {
  it('should create the app',
      inject([Angular2PocAppComponent], (app: Angular2PocAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-poc works!\'',
      inject([Angular2PocAppComponent], (app: Angular2PocAppComponent) => {
    expect(app.title).toEqual('angular2-poc works!');
  }));
});

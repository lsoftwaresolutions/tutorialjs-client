import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'levels' })
export class LevelService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<ILevelQueryInput, ILevel[]>;

  @ResourceAction({
    path: '/levels/{!id}'
  })
  get: ResourceMethod<{id: any}, ILevel>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<ILevel, ILevel>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/levels/{!id}'
  })
  update: ResourceMethod<ILevel, ILevel>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/levels/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

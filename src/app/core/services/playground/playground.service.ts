import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'playgrounds' })
export class PlaygroundService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IPlaygroundQueryInput, IPlayground[]>;

  @ResourceAction({
    path: '/playgrounds/{!id}'
  })
  get: ResourceMethod<{id: any}, IPlayground>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IPlayground, IPlayground>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/playgrounds/{!id}'
  })
  update: ResourceMethod<IPlayground, IPlayground>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/playgrounds/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

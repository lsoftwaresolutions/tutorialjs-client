import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'courses/{!course}/sections/{!section}/items' })
export class ItemService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IItemQueryInput, IItem[]>;

  @ResourceAction({
    path: '/courses/{!course}/sections/{!section}/items/{!id}'
  })
  get: ResourceMethod<{id: any}, IItem>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IItem, IItem>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/courses/{!course}/sections/{!section}/items/{!id}'
  })
  update: ResourceMethod<IItem, IItem>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/courses/{!course}/sections/{!section}/items/{!id}'
  })
  remove: ResourceMethod<any, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

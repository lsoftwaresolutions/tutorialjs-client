import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'items/types' })
export class ItemsTypeService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IItemsTypeQueryInput, IItemsType[]>;

  @ResourceAction({
    path: '/items/types/{!id}'
  })
  get: ResourceMethod<{id: any}, IItemsType>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IItemsType, IItemsType>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/items/types/{!id}'
  })
  update: ResourceMethod<IItemsType, IItemsType>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/items/types/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

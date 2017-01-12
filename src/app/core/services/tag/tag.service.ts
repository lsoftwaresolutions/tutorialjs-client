import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'tags' })
export class TagService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<ITagQueryInput, ITag[]>;

  @ResourceAction({
    path: '/tags/{!id}'
  })
  get: ResourceMethod<{id: any}, ITag>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<ITag, ITag>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/tags/{!id}'
  })
  update: ResourceMethod<ITag, ITag>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/tags/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

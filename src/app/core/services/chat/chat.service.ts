import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'chat' })
export class ChatService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IChatQueryInput, IChat[]>;

  @ResourceAction({
    path: '/chat/{!id}'
  })
  get: ResourceMethod<{id: any}, IChat>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IChat, IChat>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/chat/{!id}'
  })
  update: ResourceMethod<IChat, IChat>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/chat/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

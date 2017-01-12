import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'answers' })
export class AnswerService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IAnswerQueryInput, IAnswer[]>;

  @ResourceAction({
    path: '/answers/{!id}'
  })
  get: ResourceMethod<{id: any}, IAnswer>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IAnswer, IAnswer>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/answers/{!id}'
  })
  update: ResourceMethod<IAnswer, IAnswer>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/answers/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

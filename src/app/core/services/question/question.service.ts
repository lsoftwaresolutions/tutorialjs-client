import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'questions' })
export class QuestionService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<IQuestionQueryInput, IQuestion[]>;

  @ResourceAction({
    path: '/questions/{!id}'
  })
  get: ResourceMethod<{id: any}, IQuestion>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IQuestion, IQuestion>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/questions/{!id}'
  })
  update: ResourceMethod<IQuestion, IQuestion>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/questions/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

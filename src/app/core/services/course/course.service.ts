import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'courses' })
export class CourseService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<ICourseQueryInput, ICourse[]>;

  @ResourceAction({
    path: '/courses/{!id}'
  })
  get: ResourceMethod<{id: any}, ICourse>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<ICourse, ICourse>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/courses/{!id}'
  })
  update: ResourceMethod<ICourse, ICourse>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/courses/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

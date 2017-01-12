import { Injectable, Injector } from '@angular/core';
import { ResourceParams, ResourceAction, ResourceMethod } from 'ng2-resource-rest';
import { Http, RequestMethod } from '@angular/http';
import { APIResourceService } from '../api-resource';

@Injectable()
@ResourceParams({ path: 'courses/{!course}/sections' })
export class SectionService extends APIResourceService {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<ISectionQueryInput, ISection[]>;

  @ResourceAction({
    path: '/courses/{!course}/sections/{!id}'
  })
  get: ResourceMethod<{id: any}, ISection>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<ISection, ISection>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/courses/{!course}/sections/{!id}'
  })
  update: ResourceMethod<ISection, ISection>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/courses/{!course}/sections/{!id}'
  })
  remove: ResourceMethod<any, any>;

  constructor(http: Http, injector: Injector) {
    super(http, injector);
  }

}

// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// Other
import 'ng2-resource-rest';
import '@ng-bootstrap/ng-bootstrap';
import 'ng2-fullpage';
import 'ng2-slim-loading-bar';
import 'ng2-validation';
import 'ng2-webstorage';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// jQuery
import 'jquery';

// Owl Carousel 2
import 'owl.carousel';

// jQuery Color
// import 'jquery-color'; // unused

// Bootstrap
import 'bootstrap-loader';

// Bootstrap Material Design
import 'bootstrap-material-design';

// Fullpage
import 'fullpage.js';

// TweenLite
// import 'gsap';

// Vivus
// import 'vivus';

if ('production' === ENV) {
  // Production
}
else {
  // Development
}

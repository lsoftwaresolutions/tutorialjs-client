import { Component, OnInit } from '@angular/core';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'no-content'
  selector: 'no-content',  // <no-content></no-content>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './no-content.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './no-content.template.pug'
})

export class NoContentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.showPolygons();
  }

  public goBack() {
    window.history.back();
  }

  private showPolygons() {
    jQuery('[class="processed"]').removeAttr('class');
    var polyCount = jQuery('polygon').length;
    jQuery('polygon').each(function(ind, el) {
      setTimeout(function() {
        jQuery('polygon:eq(' + ind + ')').attr('class', 'processed');
      }, Math.random() * 3500);
    });
  }
}

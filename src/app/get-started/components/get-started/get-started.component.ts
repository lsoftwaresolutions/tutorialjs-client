import { Component, OnInit, Input } from '@angular/core';
import * as jQuery from 'jquery';
import * as Vivus from 'vivus';
import { TweenLite, Circ } from 'gsap';
import { CircleService } from '../../services/circle';

// import { MnFullpageService, MnFullpageOptions } from 'ng2-fullpage';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'get-started'
  selector: 'get-started',  // <get-started></get-started>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './get-started.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './get-started.template.pug'
})

export class GetStartedComponent implements OnInit {
  static bgColorsMap: any = {
    1: 'tjs-bg-teal-important',
    2: 'tjs-bg-lightblue-important',
    3: 'tjs-bg-orange-important',
    4: 'tjs-bg-gray-important',
  };
  // Set our default values
  localState = { value: '' };
  width: number;
  height: number;
  largeHeader: any;
  canvas: any;
  ctx: any;
  points: any[];
  target: any;
  animateHeader: boolean = true;

  // TypeScript public modifiers
  constructor(/*private fullpageService: MnFullpageService*/) { }

  ngOnInit() {
    console.log('hello `Get Started` component');
    this.animateLogo();
    this.initHeader();
    this.initAnimation();
    this.addListeners();
  }

  public test(index: number, nextIndex: number, direction: string) {
    let bg = jQuery('.get-started');
    bg.removeClass([
      'tjs-bg-red-important',
      'tjs-bg-orange-important',
      'tjs-bg-beige-important',
      'tjs-bg-teal-important',
      'tjs-bg-lightblue-important',
      'tjs-bg-yellow-important',
      'tjs-bg-darkblue-important',
      'tjs-bg-gray-important',
      'tjs-bg-darkgray-important',
      'tjs-bg-white-important'
    ].join(' '));
    bg.addClass(GetStartedComponent.bgColorsMap[nextIndex]);
    if (nextIndex === 1) {
      let navbar = jQuery('header > nav.navbar');
      navbar.animate({ bottom: 0 }, 300);
      setTimeout(() => {
        navbar.toggleClass('navbar-fixed-top navbar-fixed-bottom');
        navbar.toggleClass('navbar-top navbar-bottom');
      }, 300);
    }
    else if (index === 1) {
      let navbar = jQuery('header > nav.navbar');
      navbar.animate({ bottom: window.innerHeight - navbar.height() }, 700);
      setTimeout(() => {
        navbar.toggleClass('navbar-fixed-top navbar-fixed-bottom');
        navbar.toggleClass('navbar-top navbar-bottom');
      }, 700);
    }
    if (nextIndex === 2) {
      (<any>jQuery('.owl-carousel')).owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 25,
        nav: true,
        responsive : {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    }
  }

  private animateLogo() {
    setTimeout(function() {
      new Vivus('anim-logo', (<any>{
        type: 'scenario-sync',
        duration: 10,
        delay: 0,
        start: 'inViewport',
        file: '../../../../assets/images/anim-logo.svg',
        onReady: function(test) {
          test.play();
        }
      }), function() {
        const transitionTime = '1s';
        jQuery('#anim-logo #letter-j').css({
          transform: 'rotate(180deg) translateX(9%)',
          transition: transitionTime
        });
        jQuery('#anim-logo #letter-s').css({
          transform: 'rotateY(180deg) translateY(150%) translateX(-50%)',
          transition: transitionTime
        });
        // setTimeout(() => {
        //   jQuery('#anim-logo .fill-black').css({
        //     fill: '#2c3033',
        //     transition: transitionTime
        //   });
        //   setTimeout(() => {
        //     jQuery('#anim-logo .fill-blue').css({
        //       fill: '#0c97ce',
        //       transition: transitionTime
        //     });
        //     setTimeout(() => {
        //       jQuery('#anim-logo .fill-red').css({
        //         fill: '#db3340',
        //         transition: transitionTime
        //       });
        //       setTimeout(() => {
        //         jQuery('#anim-logo .fill-yellow').css({
        //           fill: '#e8b81a',
        //           transition: transitionTime
        //         });
        //       }, 500);
        //     }, 500);
        //   }, 500);
        // }, 500);
        // jQuery('#anim-logo .fill-tmp').css({
        //   fill: '#20da9b',
        //   transition: transitionTime
        // });
      });
    }, 750);
  }

  private initHeader() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.target = {x: this.width / 2, y: this.height / 2};

    this.largeHeader = document.getElementById('large-header');
    this.largeHeader.style.height = this.height + 'px';

    this.canvas = document.getElementById('bg-canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d');

    // create points
    this.points = [];
    for (let x = 0; x < this.width; x = x + this.width / 15) {
      for (let y = 0; y < this.height; y = y + this.height / 15) {
        let px = x + Math.random() * this.width / 15;
        let py = y + Math.random() * this.height / 15;
        let p = {x: px, originX: px, y: py, originY: py };
        this.points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < this.points.length; i++) {
      let closest = [];
      let p1 = this.points[i];
      for (let j = 0; j < this.points.length; j++) {
        let p2 = this.points[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (let i = 0; i < this.points.length; i++) {
      let radius: number = 5 + Math.random() * 5;
      let c = new CircleService(this.ctx, this.points[i], radius, 'rgba(255,255,255,1)');
      this.points[i].circle = c;
    }
  }

  // Event handling
  private addListeners() {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', (e) => this.mouseMove(e));
    }
    window.addEventListener('scroll', () => this.scrollCheck());
    window.addEventListener('resize', () => this.resize());
  }

  private mouseMove(e) {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY)    {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    this.target.x = posx;
    this.target.y = posy;
  }

  private scrollCheck() {
    if (document.body.scrollTop > this.height) {
      this.animateHeader = false;
    } else {
      this.animateHeader = true;
    }
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.largeHeader.style.height = this.height + 'px';
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  // animation
  private initAnimation() {
    this.animate();
    for (let i = 0; i < this.points.length; i++) {
      this.shiftPoint(this.points[i]);
    }
  }

  private animate() {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.points.length; i++) {
        // detect points in range
        if (Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
          this.points[i].active = 0.75;
          this.points[i].circle.active = 1;
        } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 20000) {
          this.points[i].active = 0.5;
          this.points[i].circle.active = 0.6;
        } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 40000) {
          this.points[i].active = 0.25;
          this.points[i].circle.active = 0.3;
        } else {
          this.points[i].active = 0;
          this.points[i].circle.active = 0;
        }

        this.drawLines(this.points[i]);
        this.points[i].circle.draw();
      }
    }
    window.requestAnimationFrame(() => this.animate());
  }

  private shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: () => {
        this.shiftPoint(p);
      }
    });
  }

  // Canvas manipulation
  private drawLines(p) {
    if (!p.active) {
      return false;
    }
    for (let i = 0; i < p.closest.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
      this.ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
      this.ctx.stroke();
    }
  }

  private getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
}

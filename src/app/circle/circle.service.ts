import { Injectable } from '@angular/core';

@Injectable()
export class Circle {
  active: number;
  // constructor
  constructor (public ctx, public pos, public radius, public color) { }

  draw() {
    if (!this.active) {
      return false;
    }
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'rgba(156,217,249,' + this.active + ')';
    this.ctx.fill();
  }
}

import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-distraction',
  styleUrl: './distraction.css',
  templateUrl: './distraction.html',
})
export class Distraction {

  private colorList = ['red', 'green', 'blue', 'orange', 'purple', 'cyan', 'grey'];
  private curColorIndex = 0;
  private normalCooldown = 2000;
  private fastCooldown = 200;
  private currentCooldown = this.normalCooldown;

  protected isFast = signal(false);
  protected color = signal('black');

  protected ngOnInit() {
    this.curColorIndex = Math.trunc(Math.random() * this.colorList.length);

    const changeColorFunction = () => {
      this.color.set(this.colorList[this.curColorIndex])
      this.curColorIndex = (this.curColorIndex + 1) % this.colorList.length;
      setTimeout(changeColorFunction, this.currentCooldown);
    }
    setTimeout(changeColorFunction, this.currentCooldown);
  }

  protected onButtonPress() {
    this.isFast.set(true);
    this.currentCooldown = this.fastCooldown;

    setTimeout(() => {
      this.isFast.set(false);
      this.currentCooldown = this.normalCooldown;
    }, 5000)
  }
}

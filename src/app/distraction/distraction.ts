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
  private changeColorFunction!: () => void;
  private normalCooldown = 1000;
  private fastCooldown = 200;
  private taskId!: number;

  protected isFast = signal(false)
  protected color = signal('black')

  protected ngOnInit() {
    this.curColorIndex = Math.trunc(Math.random() * this.colorList.length);

    this.changeColorFunction = () => {
      this.color.set(this.colorList[this.curColorIndex])
      this.curColorIndex = (this.curColorIndex + 1) % this.colorList.length;
    }

    this.changeColorFunction();
    this.taskId = setInterval(this.changeColorFunction, this.normalCooldown);
  }

  protected onButtonPress() {
    this.isFast.set(true);
    clearInterval(this.taskId);
    this.taskId = setInterval(this.changeColorFunction, this.fastCooldown);

    setTimeout(() => {
      this.isFast.set(false);
      clearInterval(this.taskId);
      this.taskId = setInterval(this.changeColorFunction, this.normalCooldown);
    }, 2000)
  }
}

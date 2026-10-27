import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-distraction',
  styleUrl: './distraction.css',
  templateUrl: './distraction.html',
})
export class Distraction {

  private colorList = ['red', 'green', 'blue', 'orange', 'purple', 'cyan', 'aqua']
  private curColorIndex = 0;

  protected isWorking = signal(false)
  protected color = signal('red')

  protected ngOnInit() {
    this.curColorIndex = Math.trunc(Math.random() * (this.colorList.length - 1))

    setInterval(() => {
      this.color.set(this.colorList[this.curColorIndex])
      this.curColorIndex = (this.curColorIndex + 1) % (this.colorList.length - 1)
    }, 200)
  }

  protected onButtonPress() {
    this.isWorking.set(!this.isWorking());
  }
}

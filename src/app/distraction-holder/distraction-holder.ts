import { Component, signal } from '@angular/core';
import { Distraction } from '../distraction/distraction';

@Component({
  imports: [Distraction],
  selector: 'app-distraction-holder',
  styleUrl: './distraction-holder.css',
  templateUrl: './distraction-holder.html',
})
export class DistractionHolder {
  protected distractions = signal<Distraction[]>([]);

  protected onPlusButtonPress() {
    this.distractions.update((val) => {
      val.push(new Distraction());
      return val;
    });
  }

  protected onMinusButtonPress() {
    this.distractions.update((val) => {
      val.pop();
      return val;
    })
  }
}

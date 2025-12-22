import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-trial-zero',
  imports: [],
  templateUrl: './trial-zero.html',
  styleUrl: './trial-zero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialZero {
  protected i = 0;
  protected readonly j = signal(0);

  protected withSignal = signal(true);

  constructor() {
    const destroyRef = inject(DestroyRef);

    const handle = setInterval(() => {
      this.i++;
      this.j.update((value) => value + 1);
      console.info(this.i);
    }, 1_000);

    destroyRef.onDestroy(() => clearInterval(handle));
  }

  protected toggleWithSignal(): void {
    this.withSignal.update((value) => !value);
  }
}

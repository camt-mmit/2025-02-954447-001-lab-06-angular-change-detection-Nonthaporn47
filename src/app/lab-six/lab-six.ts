import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lab-six',
  imports: [],
  templateUrl: './lab-six.html',
  styleUrl: './lab-six.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabSix {
  protected sections = [[{ value: 0 }]];

  protected addSection(): void {
    this.sections.push([{ value: 0 }]);
    console.info(this.sections);
  }

  protected removeSection(index: number): void {
    this.sections.splice(index, 1);
    console.info(this.sections);
  }

  protected onChange(index: number, value: number): void {
    this.sections[index][0].value = value;
    console.info(this.sections);
  }

  protected add(sectionIndex: number) {
    this.sections[sectionIndex].push({ value: 0 });
  }

  protected remove(sectionIndex: number): void {
    this.sections.splice(sectionIndex, 1);
    console.info(this.sections);
  }

  protected getResult(): string {
    return this.sections
      .map((section) => section[0].value)
      .reduce((result, value) => result + value, 0)
      .toLocaleString();
  }
}

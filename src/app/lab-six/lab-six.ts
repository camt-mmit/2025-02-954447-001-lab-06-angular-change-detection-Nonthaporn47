import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lab-six',
  imports: [],
  templateUrl: './lab-six.html',
  styleUrl: './lab-six.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabSixComponent {
  // มี section แรกตั้งแต่เริ่ม
  protected sections: { value: number }[][] = [[{ value: 0 }]];

  protected addSection() {
    this.sections.push([{ value: 0 }]);
  }

  protected removeSection(sectionIndex: number) {
    // ป้องกันการลบ ถ้าเหลือ section เดียว
    if (this.sections.length <= 1) return;
    this.sections.splice(sectionIndex, 1);
  }

  protected add(sectionIndex: number) {
    this.sections[sectionIndex].push({ value: 0 });
  }

  protected remove(sectionIndex: number, inputIndex: number) {
    // ถ้าเหลือ input เดียว ห้ามลบ
    if (this.sections[sectionIndex].length <= 1) return;

    this.sections[sectionIndex].splice(inputIndex, 1);
  }

  protected onChange(sectionIndex: number, inputIndex: number, value: number) {
    this.sections[sectionIndex][inputIndex].value = value ?? 0;
  }

  protected getResult(sectionIndex: number): number {
    return this.sections[sectionIndex].reduce((sum, item) => sum + item.value, 0);
  }
}

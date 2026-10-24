import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
export interface SubjectGrade {
  subject: string;
  grade: number;
}
@Component({
  imports: [CommonModule],
  selector: 'app-grades',
  styleUrl: './grades.css',
  templateUrl: './grades.html',
})
export class Grades {
grades: SubjectGrade[] = [
    { subject: 'מתמטיקה', grade: 85 },
    { subject: 'אנגלית', grade: 30 },
    { subject: 'מדעים', grade: 78 },
    { subject: 'היסטוריה', grade: 92 },
    { subject: 'ספרות', grade: 88 }
  ];
get averageGrade(): number {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, curr) => acc + curr.grade, 0);
    return Math.round(sum / this.grades.length);
  }
}



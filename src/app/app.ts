import { Component, signal,computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 protected readonly idNumber = signal('');

  protected readonly isTermsApproved = signal(false);

protected readonly isFormValid = computed(() => this.isTermsApproved());
  protected onIdNumberChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.idNumber.set(input.value);
  }

  protected onApprovalChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isTermsApproved.set(checkbox.checked);
  }

  protected onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }
  }
}


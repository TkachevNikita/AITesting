import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { TuiButton, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'lib-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiInputModule,
    TuiTextfield,
    ReactiveFormsModule,
    TuiButton,
    TuiLink,
    RouterLink,
  ],
})
export class LoginComponent {
  private readonly router: Router = inject(Router);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  protected readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public login(): void {
    timer(2000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigateByUrl('/chat'),
      });
  }
}

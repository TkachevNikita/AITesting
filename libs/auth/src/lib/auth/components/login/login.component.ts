import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  TuiAlertService,
  TuiButton,
  TuiLink,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import {
  catchError,
  debounceTime,
  Observable,
  switchMap,
  tap,
  timer,
} from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiButtonLoading } from '@taiga-ui/kit';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-auth-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    TuiButton,
    TuiInputModule,
    TuiLink,
    TuiTextfield,
    TuiButtonLoading,
    AsyncPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly router: Router = inject(Router);
  private readonly alerts: TuiAlertService = inject(TuiAlertService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly authService: AuthService = inject(AuthService);

  protected readonly isLoading$: Observable<boolean> = this.authService.loading;
  protected readonly loginForm: FormGroup = new FormGroup({
    login: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public login(): void {
    this.authService
      .login(this.loginForm.value)
      .pipe(
        catchError((err) => {
          return this.alerts.open(err.message, {
            label: 'Ошибка авторизации',
            appearance: 'negative',
          });
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: () => this.router.navigateByUrl('/chat'),
      });
  }
}

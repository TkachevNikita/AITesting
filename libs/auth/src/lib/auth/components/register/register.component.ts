import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiButton, TuiLink, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonLoading, TuiStepper } from '@taiga-ui/kit';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPhoneModule,
} from '@taiga-ui/legacy';
import { Observable, take } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'lib-auth-register',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink,
    TuiButton,
    TuiButtonLoading,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiInputPhoneModule,
    TuiLink,
    TuiStepper,
    TuiTextfield,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly authService: AuthService = inject(AuthService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly router: Router = inject(Router);

  protected isLoading$: Observable<boolean> = this.authService.loading;
  protected activeStepIndex = 0;
  protected verifyCodeSended = false;

  protected readonly registerForm: FormGroup = new FormGroup({
    code: new FormControl<string>(
      { value: '', disabled: !this.verifyCodeSended },
      Validators.required,
    ),
    email: new FormControl<string>('', Validators.required),
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
    passwordConfirm: new FormControl<string>('', Validators.required),
    birthDate: new FormControl<TuiDay | null>(null, Validators.required),
    phoneNumber: new FormControl<string>('', Validators.required),
  });

  public sendVerifyCode(): void {
    this.authService
      .sendVerification(this.registerForm.controls['email'].value as string)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.verifyCodeSended = true;
          this.registerForm.controls['code'].enable();
        },
      });
  }

  public verifyEmail(): void {
    this.authService
      .verifyEmail({
        code: this.registerForm.controls['code'].value,
        email: this.registerForm.controls['email'].value,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.activeStepIndex++,
      });
  }

  public register(): void {
    const userData = this.registerForm.value;

    delete userData.code;

    this.authService
      .register({
        ...userData,
        roleIds: null,
        birthDate: userData.date.toString('DNY', '-'),
      })
      .pipe(take(1))
      .subscribe({
        next: async () => this.router.navigate(['/chat/new']),
      });
  }
}

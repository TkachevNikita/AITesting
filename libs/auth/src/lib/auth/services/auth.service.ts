import {
  IAuthResponse,
  IEmailVerifyRequest,
  ILoginRequest,
  IRegisterRequest,
} from '@aitesting/auth';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly baseUrl: string = 'http://localhost:8000';
  private readonly http: HttpClient = inject(HttpClient);
  private readonly isLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get loading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public login(userData: ILoginRequest): Observable<IAuthResponse> {
    this.isLoading$.next(true);

    return this.http
      .get<IAuthResponse>(`${this.baseUrl}/sign-in`, {
        params: { Login: userData.login, Password: userData.password },
      })
      .pipe(
        tap((response) => localStorage.setItem('token', response.authToken)),
        finalize(() => this.isLoading$.next(false)),
      );
  }

  public register(userData: IRegisterRequest): Observable<IAuthResponse> {
    this.isLoading$.next(true);

    return this.http
      .post<IAuthResponse>(`${this.baseUrl}/register`, userData)
      .pipe(finalize(() => this.isLoading$.next(false)));
  }

  public verifyEmail(verifyData: IEmailVerifyRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/verify-email`, verifyData);
  }

  public sentVerification(email: string): Observable<void> {
    return this.http.post<void>(
      `${this.baseUrl}/send-verification-code`,
      email,
    );
  }
}

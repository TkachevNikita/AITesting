import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';

@Injectable()
export class ChatService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly isLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get loading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public generateTestTask(file: FormData): Observable<string> {
    this.isLoading$.next(true);

    return this.http
      .post('http://localhost:8000/generatetz', file, {
        responseType: 'text',
      })
      .pipe(finalize(() => this.isLoading$.next(false)));
  }
}

import { IRequest } from '@aitesting/shared';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  finalize,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';

@Injectable()
export class ChatService {
  private readonly baseUrl = '//51.250.113.12:31005';
  private readonly http: HttpClient = inject(HttpClient);
  private readonly isLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private readonly requestsSubject$: ReplaySubject<void> =
    new ReplaySubject<void>(1);

  constructor() {
    this.requestsSubject$.next();
  }

  public get requests(): Observable<IRequest[]> {
    return this.requestsSubject$.pipe(
      switchMap(() => this.getHistory()),
      shareReplay({ bufferSize: 1, refCount: true }),
    );
  }

  public get loading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public getHistory(): Observable<IRequest[]> {
    return this.http.get<IRequest[]>(`${this.baseUrl}/tz-history`);
  }

  public generateTestTask(file: FormData): Observable<IRequest> {
    this.isLoading$.next(true);

    return this.http
      .post<IRequest>(`${this.baseUrl}/generatetz`, file)
      .pipe(finalize(() => this.isLoading$.next(false)));
  }

  public getRequestById(id: string): Observable<IRequest | undefined> {
    this.isLoading$.next(true);

    return this.requests.pipe(
      map((requests: IRequest[]) =>
        requests.find((request) => request.id === id),
      ),
      tap(() => this.isLoading$.next(false)),
    );
  }

  public removeRequest(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/remove`, {
        params: { id },
      })
      .pipe(tap(() => this.requestsSubject$.next()));
  }
}

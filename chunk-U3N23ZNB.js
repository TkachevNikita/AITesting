import{C as a,F as c,I as p,L as u,Q as s,U as l,Ub as f,e as o,f as n}from"./chunk-PEKDFGIA.js";var b=(()=>{class t{intercept(e,r){let i=localStorage.getItem("token");if(i){let h=e.clone({setHeaders:{Authorization:`Bearer ${i}`}});return r.handle(h)}return r.handle(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=s({token:t,factory:t.\u0275fac})}return t})();var x=(()=>{class t{baseUrl="http://51.250.113.12:31005";http=l(f);isLoading$=new o(!1);requestsSubject$=new n(1);constructor(){this.requestsSubject$.next()}get requests(){return this.requestsSubject$.pipe(p(()=>this.getHistory()),c({bufferSize:1,refCount:!0}))}get loading(){return this.isLoading$.asObservable()}getHistory(){return this.http.get(`${this.baseUrl}/tz-history`)}generateTestTask(e){return this.isLoading$.next(!0),this.http.post(`${this.baseUrl}/generatetz`,e,{responseType:"text"}).pipe(a(()=>this.isLoading$.next(!1)))}removeRequest(e){return this.http.delete(`${this.baseUrl}/remove`,{params:{id:e}}).pipe(u(()=>this.requestsSubject$.next()))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=s({token:t,factory:t.\u0275fac})}return t})();export{b as a,x as b};

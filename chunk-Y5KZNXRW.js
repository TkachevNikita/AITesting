import{C as n,F as c,I as p,L as u,Q as s,Rb as h,U as l,e as o,f as a}from"./chunk-3PMFW32Z.js";var b=(()=>{class t{intercept(e,r){let i=localStorage.getItem("token");if(i){let f=e.clone({setHeaders:{Authorization:`Bearer ${i}`}});return r.handle(f)}return r.handle(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=s({token:t,factory:t.\u0275fac})}return t})();var x=(()=>{class t{baseUrl="https://localhost:7236";http=l(h);isLoading$=new o(!1);requestsSubject$=new a(1);constructor(){this.requestsSubject$.next()}get requests(){return this.requestsSubject$.pipe(p(()=>this.getHistory()),c({bufferSize:1,refCount:!0}))}get loading(){return this.isLoading$.asObservable()}getHistory(){return this.http.get(`${this.baseUrl}/tz-history`)}generateTestTask(e){return this.isLoading$.next(!0),this.http.post(`${this.baseUrl}/generatetz`,e,{responseType:"text"}).pipe(n(()=>this.isLoading$.next(!1)))}removeRequest(e){return this.http.delete(`${this.baseUrl}/remove`,{params:{id:e}}).pipe(u(()=>this.requestsSubject$.next()))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=s({token:t,factory:t.\u0275fac})}return t})();export{b as a,x as b};

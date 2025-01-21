import{a as P}from"./chunk-QL565KAF.js";import{A as R,B as A,C as z,D as I,d as N,y as G}from"./chunk-5GTYJISE.js";import"./chunk-3BAXWLAR.js";import{a as S}from"./chunk-MQWIETAS.js";import"./chunk-VKJG4RV6.js";import{A as D,C as F,K as k,lb as B,nb as O,s as w,t as L,u as E,v as s,x as M,z as b}from"./chunk-4TNK7JG6.js";import{Ca as C,La as n,Ra as e,Rb as v,Sa as t,Ta as a,U as o,_a as h,ca as g,da as c,dc as T,ec as _,ga as d,hb as i,ta as l,u as f,ub as x,vb as y}from"./chunk-KE45M56U.js";import"./chunk-EQDQRRRY.js";var re=(()=>{class u{router=o(T);alerts=o(P);destroyRef=o(d);authService=o(S);isLoading$=this.authService.loading;loginForm=new E({login:new s(""),password:new s("")});login(){this.authService.login(this.loginForm.value).pipe(f(m=>this.alerts.open(m.message,{label:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438",appearance:"negative"})),k(this.destroyRef)).subscribe({next:()=>this.router.navigateByUrl("/chat/new")})}static \u0275fac=function(r){return new(r||u)};static \u0275cmp=C({type:u,selectors:[["lib-auth-login"]],decls:20,vars:6,consts:[[1,"login-form",3,"formGroup"],[1,"auth__logo"],["width","90","height","90","viewBox","0 0 48 48","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M34.9005 34.5999C31.5405 34.5999 28.4405 33.0199 26.4205 30.2399C25.9405 29.5799 26.0805 28.6399 26.7405 28.1399C27.4005 27.6399 28.3405 27.7998 28.8405 28.4598C30.3005 30.4398 32.5005 31.5798 34.9005 31.5798C39.0805 31.5798 42.5005 28.1799 42.5005 23.9799C42.5005 19.7799 39.1005 16.3799 34.9005 16.3799C32.0605 16.3799 29.3805 17.8998 27.9205 20.3198L22.6205 29.1399C20.6205 32.4799 16.9605 34.5399 13.0805 34.5399C7.24051 34.5399 2.48047 29.7798 2.48047 23.9398C2.48047 18.0998 7.24051 13.3398 13.0805 13.3398C16.4405 13.3398 19.5405 14.9198 21.5605 17.6998C22.0405 18.3598 21.9005 19.2999 21.2405 19.7999C20.5605 20.2799 19.6405 20.1399 19.1405 19.4799C17.6805 17.4999 15.4805 16.3599 13.0805 16.3599C8.90051 16.3599 5.48047 19.7598 5.48047 23.9598C5.48047 28.1598 8.88051 31.5599 13.0805 31.5599C15.9205 31.5599 18.6005 30.0399 20.0605 27.6199L25.3605 18.7999C27.3605 15.4599 31.0205 13.3999 34.9005 13.3999C40.7405 13.3999 45.5005 18.1599 45.5005 23.9999C45.5005 29.8399 40.7405 34.5999 34.9005 34.5999Z","fill","#8038E0"],[1,"auth__title"],["tuiTextfieldSize","s","formControlName","login",3,"tuiTextfieldCleaner"],["tuiTextfieldLegacy","","type","text"],["tuiTextfieldSize","s","formControlName","password",3,"tuiTextfieldCleaner"],["autocomplete","email","tuiTextfieldLegacy","","type","password"],["type","button","tuiButton","",3,"click","loading"],[1,"login-form__message"],["tuiLink","","routerLink","/auth/register"]],template:function(r,p){r&1&&(e(0,"form",0)(1,"div",1),g(),e(2,"svg",2),a(3,"path",3),t()(),c(),e(4,"h2",4),i(5,"\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"),t(),e(6,"tui-input",5),i(7," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D "),a(8,"input",6),t(),e(9,"tui-input",7),i(10," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C "),a(11,"input",8),t(),e(12,"button",9),x(13,"async"),h("click",function(){return p.login()}),i(14," \u0412\u043E\u0439\u0442\u0438 "),t(),e(15,"div",10)(16,"span"),i(17,"\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? "),e(18,"a",11),i(19,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"),t()()()()),r&2&&(n("formGroup",p.loginForm),l(6),n("tuiTextfieldCleaner",!0),l(3),n("tuiTextfieldCleaner",!0),l(3),n("loading",y(13,4,p.isLoading$)))},dependencies:[F,M,w,L,b,D,_,B,z,R,A,G,O,N,I,v],styles:["[_nghost-%COMP%]{height:auto!important}.login-form[_ngcontent-%COMP%]{display:flex;background:#000;flex-direction:column;gap:20px;width:400px;border:1px solid #ffffff;padding:20px 30px;border-radius:32px}.login-form__message[_ngcontent-%COMP%]{color:#fff;align-self:center;font-size:16px}","[_nghost-%COMP%]{display:block;height:100%}.auth[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.auth__title[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:24px;margin-bottom:30px;margin-top:0}.auth__logo[_ngcontent-%COMP%]{align-self:center}"],changeDetection:0})}return u})();export{re as LoginComponent};

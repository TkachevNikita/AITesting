import{b as zt}from"./chunk-POMJF4XM.js";import"./chunk-UL7HYNAQ.js";import{a as Ht}from"./chunk-5UQ2VABN.js";import{Bb as St,E as bt,Fb as At,Hb as Z,Ib as Ft,Jb as N,K as $,L as z,Mb as Nt,N as F,Oa as Mt,Ob as kt,Ra as Pt,Sa as Tt,Sb as Rt,Tb as Vt,Ub as jt,Y as p,_ as Y,a as dt,aa as Ot,ba as v,cc as Bt,g as mt,gb as Dt,h as M,i as S,j as ft,k as A,ka as q,kc as Ut,l as gt,la as Ct,m as ht,qb as wt,vb as It,yb as xt,zb as Et}from"./chunk-6Q3P5BDE.js";import{Bb as rt,Ca as d,Ea as s,F as K,Ga as L,H as Q,Ha as ot,Ia as O,Jb as a,Ka as I,La as m,Lb as st,Ma as W,Mb as G,Na as x,Q as c,Ra as f,Sa as g,T as w,Ta as r,U as n,Vb as at,Wa as E,Wb as lt,Xb as ct,Zb as ut,_a as h,_b as pt,ab as nt,bb as u,bc as vt,c as V,e as J,ea as U,fc as _t,gc as yt,h as T,ia as X,l as y,ma as H,na as tt,p as D,qb as C,r as j,ra as et,t as B,ta as b,xa as it}from"./chunk-PEKDFGIA.js";import{f as R}from"./chunk-EQDQRRRY.js";var ee=(()=>{class t extends A{constructor(i,e,o){super(i,e,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(e){return new(e||t)(w(a),w(M),w(S))};static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();function ie(){return new ft}function oe(t,_,i){return new ht(t,_,i)}var Lt=[{provide:S,useFactory:ie},{provide:A,useClass:ee},{provide:it,useFactory:oe,deps:[ut,A,X]}],ne=[{provide:M,useFactory:()=>new gt},{provide:H,useValue:"BrowserAnimations"},...Lt],Te=[{provide:M,useClass:mt},{provide:H,useValue:"NoopAnimations"},...Lt];function Wt(){return tt("NgEagerAnimations"),[...ne]}var Gt=[{path:"",children:[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",loadChildren:()=>R(void 0,null,function*(){return import("./chunk-7ZTIBIND.js").then(t=>t.authRouter)})},{path:"chat",loadComponent:()=>R(void 0,null,function*(){return import("./chunk-76LURELD.js").then(t=>t.ChatComponent)})}]}];var $t={providers:[Wt(),rt({eventCoalescing:!0}),_t(Gt),{provide:at,useClass:Ht,multi:!0},lt(ct()),dt]};var Yt=(()=>{class t{constructor(){this.doc=n(a),this.el=v(),this.activeElement=null,this.initialized=!1,Promise.resolve().then(()=>{this.initialized=!0,this.activeElement=xt(this.doc),this.el.focus()})}ngOnDestroy(){Et(this.doc),Promise.resolve().then(()=>{Ot(this.activeElement)&&this.activeElement.focus()})}onFocusIn(i){Y(this.el,i)||St({initial:this.el,root:this.el})?.focus()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275dir=s({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&h("focusin.silent",function(k){return o.initialized&&o.onFocusIn(k.target)},!1,et)}})}}return t})();function re(t,_){t&1&&E(0)}function se(t,_){if(t&1&&(f(0,"section",2),O(1,re,1,0,"ng-container",3),r(2,"tui-scroll-controls",4),g()),t&2){let i=_.$implicit;m("@tuiHost",void 0),I("aria-labelledby",i.id),b(),m("polymorpheusOutlet",i.component)("polymorpheusOutletContext",i)}}var ae=F(new J([])),le={appearance:"",size:"m",required:!1,closeable:!0,dismissible:!0,label:"",header:"",data:void 0},Ai=F(T),zi=F(le);var Fi=new Error("Required dialog was dismissed");var qt=(()=>{class t{constructor(){this.el=v(),this.dialogs=z(n(ae),{initialValue:[]})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=d({type:t,selectors:[["tui-dialogs"]],hostBindings:function(e,o){e&1&&h("keydown.silent",function(){return o.el.scrollTop=o.el.scrollHeight/2})},decls:2,vars:3,consts:[[1,"t-overlay"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-scrollbars"]],template:function(e,o){e&1&&(r(0,"div",0),O(1,se,3,4,"section",1)),e&2&&(x("t-overlay_visible",o.dialogs().length),b(),m("ngForOf",o.dialogs()))},dependencies:[st,It,Yt,N,Nt],styles:['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],data:{animation:[bt]}})}}return t})();var Zt=(()=>{class t{constructor(){this.tuiPlatform=n(Z,{skipSelf:!0})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275dir=s({type:t,selectors:[["","tuiPlatform",""]],hostVars:1,hostBindings:function(e,o){e&2&&I("data-platform",o.tuiPlatform)},inputs:{tuiPlatform:"tuiPlatform"},features:[C([{provide:Z,useFactory:()=>n(t).tuiPlatform}])]})}}return t})();var Jt=(()=>{class t extends V{visualViewport=n(Ct).visualViewport;stream$=this.visualViewport?j(D(this.visualViewport,"resize"),D(this.visualViewport,"scroll"),D(this.visualViewport,"scrollend")).pipe(Q(null),y(()=>this.visualViewport),B(Boolean),K({bufferSize:1,refCount:!0})):T;constructor(){super(i=>this.stream$.subscribe(i))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kt=(()=>{class t{constructor(){this.w=n(q),this.style=v().style,this.$=n(Jt).pipe($()).subscribe(({offsetLeft:i,offsetTop:e,height:o,width:P,scale:k})=>{this.style.setProperty("--tui-viewport-x",p(i)),this.style.setProperty("--tui-viewport-y",p(e)),this.style.setProperty("--tui-viewport-height",p(o)),this.style.setProperty("--tui-viewport-width",p(P)),this.style.setProperty("--tui-viewport-scale",String(k)),this.style.setProperty("--tui-viewport-vh",p(this.w.innerHeight/100)),this.style.setProperty("--tui-viewport-vw",p(this.w.innerWidth/100))})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275dir=s({type:t,selectors:[["","tuiVisualViewport",""]]})}}return t})();var Qt=(()=>{class t extends Vt{static{this.\u0275fac=(()=>{let i;return function(o){return(i||(i=U(t)))(o||t)}})()}static{this.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var pe=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverDropdowns"]],[["tuiOverHints"]]],de=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverDropdowns","tuiOverHints"];function me(t,_){t&1&&r(0,"tui-scroll-controls",3)}var Xt=(()=>{class t extends Rt{constructor(){super(),this.reducedMotion=n(Pt),this.duration=wt(n(Tt)),this.isMobileRes=z(n(kt).pipe(y(i=>i==="mobile"),Mt()),{initialValue:!1}),this.nativeScrollbar=n(Ft).mode==="native",this.scrollbars=!(this.nativeScrollbar||n(At)),n(a).documentElement.setAttribute("data-tui-theme",n(Dt).toLowerCase()),this.nativeScrollbar||n(a).defaultView?.document.documentElement.classList.add("tui-zero-scrollbar")}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=d({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","4.17.0"],hostVars:6,hostBindings:function(e,o){e&1&&h("touchstart.passive.silent",function(){return 0}),e&2&&(W("--tui-duration",o.duration,"ms")("--tui-scroll-behavior",o.reducedMotion?"auto":"smooth"),x("_mobile",o.isMobileRes()))},features:[C([],[jt(Qt)]),ot([Zt,Kt]),L],ngContentSelectors:de,decls:14,vars:1,consts:[["viewContainer",""],[1,"t-root-content"],["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(nt(pe),f(0,"div",1),u(1),g(),O(2,me,1,0,"tui-scroll-controls",2),E(3,null,0),u(5,1),r(6,"tui-dialogs"),u(7,2),r(8,"tui-alerts"),u(9,3),r(10,"tui-dropdowns"),u(11,4),r(12,"tui-hints"),u(13,5)),e&2&&(b(2),m("ngIf",o.scrollbars))},dependencies:[G,zt,qt,Bt,Ut,N],styles:[`@keyframes tuiPresent{to{content:""}}@keyframes tuiSkeletonVibe{to{opacity:.5}}.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}
`],encapsulation:2})}}return t})();var te=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(e,o){e&1&&(f(0,"tui-root"),r(1,"router-outlet"),g())},dependencies:[yt,vt,Xt],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}"],changeDetection:0})}return t})();pt(te,$t).catch(t=>console.error(t));

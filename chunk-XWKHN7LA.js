import{$ as A,$a as _t,Cb as yt,Db as Ot,Eb as Ct,Fa as pt,Fb as F,Ga as mt,Gb as Dt,Ia as r,Ja as ft,K as st,N as lt,Na as P,O as ut,Pa as R,R as ct,T as l,U as n,Vb as V,Xb as bt,Z as dt,cb as gt,db as ht,eb as Tt,ha as T,ib as vt,p as rt,pb as It,r as at,wb as w}from"./chunk-4AGDCZ4E.js";import{Bb as ot,Da as I,Ea as f,Eb as nt,Ga as U,Ja as Q,Ka as m,Ma as v,Na as p,Oa as q,Ob as N,Pa as _,R as G,Ta as g,Ua as h,Va as K,W as a,Wa as y,X as H,Xa as O,Y,ab as C,bb as D,cb as b,db as E,ea as Z,eb as $,gb as J,hb as tt,ia as k,ib as et,jb as S,ka as z,lb as x,m as X,n as W,s as L,sb as M,ub as it,va as d}from"./chunk-UUTG5TM7.js";function Et({ownerDocument:t}){let s=t?.defaultView,e=s.safari!==void 0&&s.safari?.pushNotification?.toString()==="[object SafariRemoteNotification]",i=!!s.navigator?.vendor?.includes("Apple")&&!s.navigator?.userAgent?.includes("CriOS")&&!s.navigator?.userAgent?.includes("FxiOS");return e||i}var xt=["tuiOption",""],St=["*"],At=t=>({$implicit:t});function wt(t,s){if(t&1&&(y(0),S(1),O()),t&2){let e=s.polymorpheusOutlet;d(),x(" ",e," ")}}function Lt(t,s){t&1&&E(0)}function kt(t,s){if(t&1&&(y(0),S(1),O()),t&2){let e=s.polymorpheusOutlet;d(),x(" ",e," ")}}function zt(t,s){if(t&1&&(g(0,"div",1),m(1,kt,2,1,"ng-container",2),h()),t&2){let e=D();d(),p("polymorpheusOutlet",e.emptyContent||e.fallback())}}var Ut=l();var Mt=l();function Nt(t){return A(Mt,t)}var j=l();function Ie(t){return A(j,t)}var Pt=(()=>{class t{constructor(){this.isMobile=a(F),this.el=T(),this.dataList=a(G(()=>Ft),{optional:!0}),this.host=a(j,{optional:!0}),this.content=a(Ut,{optional:!0}),this.dropdown=a(bt,{self:!0,optional:!0})?.ref,this.disabled=!1}ngOnDestroy(){this.dataList?.handleFocusLossIfNecessary(this.el)}onClick(){this.host?.handleOption&&this.value!==void 0&&this.host.handleOption(this.value)}onMouseMove(){!this.isMobile&&!yt(this.el)&&this.dataList&&this.el.focus({preventScroll:!0})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=f({type:t,selectors:[["button","tuiOption",""],["a","tuiOption",""],["label","tuiOption",""]],hostAttrs:["type","button","role","option"],hostVars:3,hostBindings:function(i,o){i&1&&C("click",function(){return o.onClick()})("mousemove.silent",function(){return o.onMouseMove()}),i&2&&(v("disabled",o.disabled||null),_("_with-dropdown",o.dropdown==null?null:o.dropdown()))},inputs:{disabled:"disabled",value:"value"},features:[Q([vt])],attrs:xt,ngContentSelectors:St,decls:3,vars:4,consts:[["t",""],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(i,o){if(i&1&&(b(),m(0,wt,2,1,"ng-container",1)(1,Lt,1,0,"ng-template",null,0,ot)),i&2){let u=et(2);p("polymorpheusOutlet",o.content||u)("polymorpheusOutletContext",it(2,At,u))}},dependencies:[w],encapsulation:2,changeDetection:0})}}return t})();function Rt(){let t=["s","m","l"],s=a(j,{optional:!0})?.size;return s&&t.includes(s)?s:"l"}var Ft=(()=>{class t{constructor(){this.options=st,this.ngZone=a(z),this.destroyRef=a(k),this.el=T(),this.cdr=a(nt),this.fallback=ct(a(_t)),this.empty=I(!1),this.size=Rt()}onKeyDownArrow(e,i){let{elements:o}=this;Ct(o.indexOf(e),o,i)}handleFocusLossIfNecessary(e=this.el){Ot(e)&&this.origin?.focus({preventScroll:!0})}ngAfterContentChecked(){L(0).pipe(R(this.ngZone),P(this.destroyRef)).subscribe(()=>{this.empty.set(!this.elements.length),this.cdr.detectChanges()})}getOptions(e=!1){return this.options.filter(({disabled:i})=>e||!i).map(({value:i})=>i).filter(dt)}onFocusIn(e,i){!i.contains(e)&&!this.origin&&(this.origin=e)}get elements(){return Array.from(this.el.querySelectorAll("a,button,input"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=f({type:t,selectors:[["tui-data-list"]],contentQueries:function(i,o,u){if(i&1&&$(u,Pt,5),i&2){let c;J(c=tt())&&(o.options=c)}},hostAttrs:["role","listbox"],hostVars:1,hostBindings:function(i,o){i&1&&C("focusin",function(c){return o.onFocusIn(c.relatedTarget,c.currentTarget)})("mousedown.prevent",function(){return 0})("wheel.silent.passive",function(){return o.handleFocusLossIfNecessary()})("mouseleave",function(c){return o.handleFocusLossIfNecessary(c.target)})("keydown.tab",function(){return o.handleFocusLossIfNecessary()})("keydown.shift.tab",function(){return o.handleFocusLossIfNecessary()})("keydown.arrowDown.prevent",function(c){return o.onKeyDownArrow(c.target,1)})("keydown.arrowUp.prevent",function(c){return o.onKeyDownArrow(c.target,-1)}),i&2&&v("data-size",o.size)},inputs:{emptyContent:"emptyContent",size:"size"},features:[M([Nt(t)])],ngContentSelectors:St,decls:2,vars:1,consts:[["class","t-empty",4,"ngIf"],[1,"t-empty"],[4,"polymorpheusOutlet"]],template:function(i,o){i&1&&(b(),E(0),m(1,zt,2,1,"div",0)),i&2&&(d(),p("ngIf",o.empty()))},dependencies:[N,w],styles:[`tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}
`],encapsulation:2,changeDetection:0})}}return t})(),ye=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=U({type:t,selectors:[["ng-template","tuiDataList",""]]})}}return t})();var Vt=["*"];function Bt(t,s){if(t&1&&(y(0),S(1),O()),t&2){let e=s.polymorpheusOutlet;d(),x(" ",e," ")}}function jt(t,s){if(t&1&&(g(0,"div",6),m(1,Bt,2,1,"ng-container",7),h()),t&2){let e=D(2);_("t-text_horizontal",e.isHorizontal),d(),p("polymorpheusOutlet",e.textContent)}}function Xt(t,s){if(t&1&&(g(0,"div",2),Z(),g(1,"svg",3),K(2,"circle",4),h(),m(3,jt,2,3,"div",5),h()),t&2){let e=D();_("t-loader_horizontal",e.isHorizontal)("t-loader_inherit-color",e.inheritColor),d(3),p("ngIf",e.textContent)}}var Wt={size:"m",inheritColor:!1,overlay:!1},Gt=l(Wt);var Me=(()=>{class t{constructor(){this.isIOS=a(Dt),this.options=a(Gt),this.isApple=Et(T())||this.isIOS,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay,this.loading=!0}get isHorizontal(){return!It(this.size)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=f({type:t,selectors:[["tui-loader"]],hostVars:3,hostBindings:function(i,o){i&2&&(v("data-size",o.size),_("_loading",o.loading))},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",loading:[0,"showLoader","loading"]},ngContentSelectors:Vt,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","height","100%","width","100%",1,"t-icon"],["cx","50%","cy","50%",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(i,o){i&1&&(b(),g(0,"fieldset",0),E(1),h(),m(2,Xt,4,5,"div",1)),i&2&&(_("t-content_has-overlay",o.overlay&&o.loading)("t-content_loading",o.loading),p("disabled",o.loading&&!o.isApple),v("inert",o.loading||null),d(2),p("ngIf",o.loading))},dependencies:[N,w],styles:["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],changeDetection:0})}}return t})();var We=(()=>{class t{constructor(){this.resolver=Tt(),this.backgroundSrc=I(null),this.iconSrc=I(this.resolve(a(gt,{self:!0,optional:!0})||a(ht,{self:!0,optional:!0})))}set icon(e){this.iconSrc.set(this.resolve(e))}set background(e){this.backgroundSrc.set(this.resolve(e))}resolve(e){return e?`url(${this.resolver(e)})`:null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=f({type:t,selectors:[["tui-icon"]],hostVars:4,hostBindings:function(i,o){i&2&&q("--t-icon",o.iconSrc()||"url()")("--t-icon-bg",o.backgroundSrc())},inputs:{icon:"icon",background:"background"},decls:0,vars:0,template:function(i,o){},styles:[`tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}
`],encapsulation:2,changeDetection:0})}}return t})();var ti=(()=>{class t{constructor(){this.destroyRef=a(k),this.zone=a(z),this.el=T(),this.tuiNativeValidator="Invalid"}validate(e){return this.control=e,L(0).pipe(R(this.zone),P(this.destroyRef)).subscribe(()=>this.handleValidation()),null}handleValidation(){this.el.setCustomValidity?.(this.control?.touched&&this.control?.invalid?this.tuiNativeValidator:"")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=U({type:t,selectors:[["","tuiNativeValidator",""]],hostBindings:function(i,o){i&1&&C("focusout",function(){return o.handleValidation()})},inputs:{tuiNativeValidator:"tuiNativeValidator"},features:[M([A(rt,t,!0)])]})}}return t})();var Yt=l();function pi(t){return{provide:Yt,deps:[[new H,new Y,at],[new H,t]],useFactory:Zt}}function Zt(t,s){return t?ft(t).pipe(W(e=>s?s?.fromControlValue(e):e)):X(null)}var mi=l(),fi=l(),_i=l(),gi=l(),hi=n(r("confirm")),Ti=n(r("cancel")),vi=n(r("done")),Ii=n(r("more")),yi=n(r("hide")),Oi=n(r("showAll")),Ci=n(r("otherDate")),Di=n(r("mobileCalendarTexts")),bi=n(r("range")),Ei=n(r("countTexts")),Si=n(r("time")),xi=n(r("dateTexts")),Ai=n(r("digitalInformationUnits")),wi=n(r("copyTexts")),Li=n(r("passwordTexts")),ki=n(r("shortCalendarMonths")),zi=n(r("fileTexts")),Ui=n(r("pagination")),Mi=n(r("inputFileTexts")),Ni=n(r("multiSelectTexts")),Pi=n(r("countries")),Ri=n(r("previewTexts")),Fi=n(r("zoomTexts")),Hi=n(r("phoneSearch")),Qt={icon:()=>"@tui.calendar",min:pt,max:mt,nativePicker:!1},Vi=l(Qt);var qt={stringify:String,identityMatcher:ut,disabledItemHandler:lt},Bi=l(qt);var Kt=l(),ji={provide:V,useFactory:()=>a(F)&&a(Kt,{optional:!0})||a(V,{skipSelf:!0})},$t={rotate:"@tui.rotate-ccw-square",prev:"@tui.arrow-left",next:"@tui.arrow-right",zoomIn:"@tui.plus",zoomOut:"@tui.minus",zoomReset:"@tui.minimize"},Xi=l($t);var Wi=l({});export{j as a,Ie as b,Pt as c,Ft as d,ye as e,Me as f,We as g,ti as h,pi as i,mi as j,yi as k,Oi as l,xi as m,Ai as n,zi as o,Mi as p,Vi as q,Kt as r,ji as s};

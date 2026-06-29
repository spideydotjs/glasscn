(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ii={exports:{}},ms={},ui={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),Gd=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Id=Symbol.for("react.lazy"),Kl=Symbol.iterator;function Dd(e){return e===null||typeof e!="object"?null:(e=Kl&&e[Kl]||e["@@iterator"],typeof e=="function"?e:null)}var di={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ci=Object.assign,gi={};function bn(e,t,n){this.props=e,this.context=t,this.refs=gi,this.updater=n||di}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fi(){}fi.prototype=bn.prototype;function Za(e,t,n){this.props=e,this.context=t,this.refs=gi,this.updater=n||di}var Ja=Za.prototype=new fi;Ja.constructor=Za;ci(Ja,bn.prototype);Ja.isPureReactComponent=!0;var Yl=Array.isArray,pi=Object.prototype.hasOwnProperty,el={current:null},mi={key:!0,ref:!0,__self:!0,__source:!0};function vi(e,t,n){var r,s={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)pi.call(t,r)&&!mi.hasOwnProperty(r)&&(s[r]=t[r]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:ir,type:e,key:a,ref:l,props:s,_owner:el.current}}function Ad(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Fd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xl=/\/+/g;function Ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fd(""+e.key):t.toString(36)}function Mr(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ir:case Td:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+Ps(l,0):r,Yl(s)?(n="",e!=null&&(n=e.replace(Xl,"$&/")+"/"),Mr(s,t,n,"",function(c){return c})):s!=null&&(tl(s)&&(s=Ad(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Xl,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",Yl(e))for(var i=0;i<e.length;i++){a=e[i];var u=r+Ps(a,i);l+=Mr(a,t,n,u,s)}else if(u=Dd(e),typeof u=="function")for(e=u.call(e),i=0;!(a=e.next()).done;)a=a.value,u=r+Ps(a,i++),l+=Mr(a,t,n,u,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mr(e,t,n){if(e==null)return e;var r=[],s=0;return Mr(e,r,"","",function(a){return t.call(n,a,s++)}),r}function Bd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Lr={transition:null},Vd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:el};function hi(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=bn;M.Fragment=Pd;M.Profiler=Ld;M.PureComponent=Za;M.StrictMode=Md;M.Suspense=Od;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd;M.act=hi;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ci({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=el.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)pi.call(t,u)&&!mi.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&i!==void 0?i[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){i=Array(u);for(var c=0;c<u;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:ir,type:e.type,key:s,ref:a,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Gd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rd,_context:e},e.Consumer=e};M.createElement=vi;M.createFactory=function(e){var t=vi.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:qd,render:e}};M.isValidElement=tl;M.lazy=function(e){return{$$typeof:Id,_payload:{_status:-1,_result:e},_init:Bd}};M.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};M.unstable_act=hi;M.useCallback=function(e,t){return ge.current.useCallback(e,t)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,t){return ge.current.useEffect(e,t)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ge.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.3.1";ui.exports=M;var L=ui.exports;const Vr=Ed(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=L,Ud=Symbol.for("react.element"),Wd=Symbol.for("react.fragment"),Qd=Object.prototype.hasOwnProperty,Kd=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yd={key:!0,ref:!0,__self:!0,__source:!0};function xi(e,t,n){var r,s={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Qd.call(t,r)&&!Yd.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Ud,type:e,key:a,ref:l,props:s,_owner:Kd.current}}ms.Fragment=Wd;ms.jsx=xi;ms.jsxs=xi;ii.exports=ms;var o=ii.exports,aa={},bi={exports:{}},je={},yi={exports:{}},ki={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var P=N.length;N.push(T);e:for(;0<P;){var V=P-1>>>1,K=N[V];if(0<s(K,T))N[V]=T,N[P]=K,P=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],P=N.pop();if(P!==T){N[0]=P;e:for(var V=0,K=N.length,Bt=K>>>1;V<Bt;){var Qe=2*(V+1)-1,Vt=N[Qe],ze=Qe+1,Ht=N[ze];if(0>s(Vt,P))ze<K&&0>s(Ht,Vt)?(N[V]=Ht,N[ze]=P,V=ze):(N[V]=Vt,N[Qe]=P,V=Qe);else if(ze<K&&0>s(Ht,P))N[V]=Ht,N[ze]=P,V=ze;else break e}}return T}function s(N,T){var P=N.sortIndex-T.sortIndex;return P!==0?P:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var u=[],c=[],v=1,m=null,p=3,b=!1,y=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=N)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function h(N){if(k=!1,f(N),!y)if(n(u)!==null)y=!0,Ft(_);else{var T=n(c);T!==null&&Nn(h,T.startTime-N)}}function _(N,T){y=!1,k&&(k=!1,g(z),z=-1),b=!0;var P=p;try{for(f(T),m=n(u);m!==null&&(!(m.expirationTime>T)||N&&!be());){var V=m.callback;if(typeof V=="function"){m.callback=null,p=m.priorityLevel;var K=V(m.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(u)&&r(u),f(T)}else r(u);m=n(u)}if(m!==null)var Bt=!0;else{var Qe=n(c);Qe!==null&&Nn(h,Qe.startTime-T),Bt=!1}return Bt}finally{m=null,p=P,b=!1}}var C=!1,j=null,z=-1,F=5,E=-1;function be(){return!(e.unstable_now()-E<F)}function Ge(){if(j!==null){var N=e.unstable_now();E=N;var T=!0;try{T=j(!0,N)}finally{T?Ct():(C=!1,j=null)}}else C=!1}var Ct;if(typeof d=="function")Ct=function(){d(Ge)};else if(typeof MessageChannel<"u"){var wn=new MessageChannel,fr=wn.port2;wn.port1.onmessage=Ge,Ct=function(){fr.postMessage(null)}}else Ct=function(){O(Ge,0)};function Ft(N){j=N,C||(C=!0,Ct())}function Nn(N,T){z=O(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,Ft(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var P=p;p=T;try{return N()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=p;p=N;try{return T()}finally{p=P}},e.unstable_scheduleCallback=function(N,T,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,N){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,N={id:v++,callback:T,priorityLevel:N,startTime:P,expirationTime:K,sortIndex:-1},P>V?(N.sortIndex=P,t(c,N),n(u)===null&&N===n(c)&&(k?(g(z),z=-1):k=!0,Nn(h,P-V))):(N.sortIndex=K,t(u,N),y||b||(y=!0,Ft(_))),N},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(N){var T=p;return function(){var P=p;p=T;try{return N.apply(this,arguments)}finally{p=P}}}})(ki);yi.exports=ki;var Xd=yi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=L,Se=Xd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wi=new Set,Hn={};function Dt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)wi.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zl={},Jl={};function ec(e){return la.call(Jl,e)?!0:la.call(Zl,e)?!1:Jd.test(e)?Jl[e]=!0:(Zl[e]=!0,!1)}function tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nc(e,t,n,r){if(t===null||typeof t>"u"||tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var nl=/[\-:]([a-z])/g;function rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nl,rl);se[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nl,rl);se[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nl,rl);se[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function sl(e,t,n,r){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nc(t,n,s,r)&&(n=null),r||s===null?ec(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),al=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Ni=Symbol.for("react.provider"),_i=Symbol.for("react.context"),ll=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Si=Symbol.for("react.offscreen"),eo=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=eo&&e[eo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ms;function Mn(e){if(Ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ms=t&&t[1]||""}return`
`+Ms+e}var Ls=!1;function Rs(e,t){if(!e||Ls)return"";Ls=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),a=r.stack.split(`
`),l=s.length-1,i=a.length-1;1<=l&&0<=i&&s[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==a[i]){var u=`
`+s[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=i);break}}}finally{Ls=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function rc(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Rs(e.type,!1),e;case 11:return e=Rs(e.type.render,!1),e;case 1:return e=Rs(e.type,!0),e;default:return""}}function da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Wt:return"Portal";case oa:return"Profiler";case al:return"StrictMode";case ia:return"Suspense";case ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _i:return(e.displayName||"Context")+".Consumer";case Ni:return(e._context.displayName||"Context")+".Provider";case ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return t=e.displayName||null,t!==null?t:da(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return da(e(t))}catch{}}return null}function sc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return da(t);case 8:return t===al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ji(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ac(e){var t=ji(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=ac(e))}function Ci(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ji(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function to(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zi(e,t){t=t.checked,t!=null&&sl(e,"checked",t,!1)}function ga(e,t){zi(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&fa(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function no(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fa(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ro(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Ln(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Ei(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function so(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ti(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ti(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Pi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lc=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){lc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function Mi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function Li(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Mi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var oc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(e,t){if(t){if(oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,ln=null,on=null;function ao(e){if(e=cr(e)){if(typeof ba!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ys(t),ba(e.stateNode,e.type,t))}}function Ri(e){ln?on?on.push(e):on=[e]:ln=e}function Gi(){if(ln){var e=ln,t=on;if(on=ln=null,ao(e),t)for(e=0;e<t.length;e++)ao(t[e])}}function qi(e,t){return e(t)}function Oi(){}var Gs=!1;function $i(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return qi(e,t,n)}finally{Gs=!1,(ln!==null||on!==null)&&(Oi(),Gi())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=ys(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var ya=!1;if(tt)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ya=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ya=!1}function ic(e,t,n,r,s,a,l,i,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var On=!1,Ur=null,Wr=!1,ka=null,uc={onError:function(e){On=!0,Ur=e}};function dc(e,t,n,r,s,a,l,i,u){On=!1,Ur=null,ic.apply(uc,arguments)}function cc(e,t,n,r,s,a,l,i,u){if(dc.apply(this,arguments),On){if(On){var c=Ur;On=!1,Ur=null}else throw Error(x(198));Wr||(Wr=!0,ka=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ii(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lo(e){if(At(e)!==e)throw Error(x(188))}function gc(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return lo(s),e;if(a===r)return lo(s),t;a=a.sibling}throw Error(x(188))}if(n.return!==r.return)n=s,r=a;else{for(var l=!1,i=s.child;i;){if(i===n){l=!0,n=s,r=a;break}if(i===r){l=!0,r=s,n=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===n){l=!0,n=a,r=s;break}if(i===r){l=!0,r=a,n=s;break}i=i.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Di(e){return e=gc(e),e!==null?Ai(e):null}function Ai(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ai(e);if(t!==null)return t;e=e.sibling}return null}var Fi=Se.unstable_scheduleCallback,oo=Se.unstable_cancelCallback,fc=Se.unstable_shouldYield,pc=Se.unstable_requestPaint,Y=Se.unstable_now,mc=Se.unstable_getCurrentPriorityLevel,ul=Se.unstable_ImmediatePriority,Bi=Se.unstable_UserBlockingPriority,Qr=Se.unstable_NormalPriority,vc=Se.unstable_LowPriority,Vi=Se.unstable_IdlePriority,vs=null,Ue=null;function hc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(vs,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:yc,xc=Math.log,bc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(xc(e)/bc|0)|0}var br=64,yr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~s;i!==0?r=Rn(i):(a&=l,a!==0&&(r=Rn(a)))}else l=n&~s,l!==0?r=Rn(l):a!==0&&(r=Rn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),s=1<<n,r|=e[n],t&=~s;return r}function kc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-De(a),i=1<<l,u=s[l];u===-1?(!(i&n)||i&r)&&(s[l]=kc(i,t)):u<=t&&(e.expiredLanes|=i),a&=~i}}function wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hi(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-De(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function dl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var $=0;function Ui(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wi,cl,Qi,Ki,Yi,Na=!1,kr=[],pt=null,mt=null,vt=null,Qn=new Map,Kn=new Map,dt=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function io(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function jn(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=cr(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Sc(e,t,n,r,s){switch(t){case"focusin":return pt=jn(pt,e,t,n,r,s),!0;case"dragenter":return mt=jn(mt,e,t,n,r,s),!0;case"mouseover":return vt=jn(vt,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Qn.set(a,jn(Qn.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,Kn.set(a,jn(Kn.get(a)||null,e,t,n,r,s)),!0}return!1}function Xi(e){var t=Tt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=Ii(n),t!==null){e.blockedOn=t,Yi(e.priority,function(){Qi(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return t=cr(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function uo(e,t,n){Rr(e)&&n.delete(t)}function jc(){Na=!1,pt!==null&&Rr(pt)&&(pt=null),mt!==null&&Rr(mt)&&(mt=null),vt!==null&&Rr(vt)&&(vt=null),Qn.forEach(uo),Kn.forEach(uo)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Na||(Na=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,jc)))}function Yn(e){function t(s){return Cn(s,e)}if(0<kr.length){Cn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Cn(pt,e),mt!==null&&Cn(mt,e),vt!==null&&Cn(vt,e),Qn.forEach(t),Kn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Xi(n),n.blockedOn===null&&dt.shift()}var un=at.ReactCurrentBatchConfig,Yr=!0;function Cc(e,t,n,r){var s=$,a=un.transition;un.transition=null;try{$=1,gl(e,t,n,r)}finally{$=s,un.transition=a}}function zc(e,t,n,r){var s=$,a=un.transition;un.transition=null;try{$=4,gl(e,t,n,r)}finally{$=s,un.transition=a}}function gl(e,t,n,r){if(Yr){var s=_a(e,t,n,r);if(s===null)Us(e,t,r,Xr,n),io(e,r);else if(Sc(s,e,t,n,r))r.stopPropagation();else if(io(e,r),t&4&&-1<_c.indexOf(e)){for(;s!==null;){var a=cr(s);if(a!==null&&Wi(a),a=_a(e,t,n,r),a===null&&Us(e,t,r,Xr,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else Us(e,t,r,null,n)}}var Xr=null;function _a(e,t,n,r){if(Xr=null,e=il(r),e=Tt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ii(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function Zi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case ul:return 1;case Bi:return 4;case Qr:case vc:return 16;case Vi:return 536870912;default:return 16}default:return 16}}var gt=null,fl=null,Gr=null;function Ji(){if(Gr)return Gr;var e,t=fl,n=t.length,r,s="value"in gt?gt.value:gt.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[a-r];r++);return Gr=s.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function co(){return!1}function Ce(e){function t(n,r,s,a,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wr:co,this.isPropagationStopped=co,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Ce(yn),dr=W({},yn,{view:0,detail:0}),Ec=Ce(dr),Os,$s,zn,hs=W({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Os=e.screenX-zn.screenX,$s=e.screenY-zn.screenY):$s=Os=0,zn=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),go=Ce(hs),Tc=W({},hs,{dataTransfer:0}),Pc=Ce(Tc),Mc=W({},dr,{relatedTarget:0}),Is=Ce(Mc),Lc=W({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rc=Ce(Lc),Gc=W({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qc=Ce(Gc),Oc=W({},yn,{data:0}),fo=Ce(Oc),$c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ic={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ac(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dc[e])?!!t[e]:!1}function ml(){return Ac}var Fc=W({},dr,{key:function(e){if(e.key){var t=$c[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ic[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bc=Ce(Fc),Vc=W({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),po=Ce(Vc),Hc=W({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Uc=Ce(Hc),Wc=W({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qc=Ce(Wc),Kc=W({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yc=Ce(Kc),Xc=[9,13,27,32],vl=tt&&"CompositionEvent"in window,$n=null;tt&&"documentMode"in document&&($n=document.documentMode);var Zc=tt&&"TextEvent"in window&&!$n,eu=tt&&(!vl||$n&&8<$n&&11>=$n),mo=" ",vo=!1;function tu(e,t){switch(e){case"keyup":return Xc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Jc(e,t){switch(e){case"compositionend":return nu(t);case"keypress":return t.which!==32?null:(vo=!0,mo);case"textInput":return e=t.data,e===mo&&vo?null:e;default:return null}}function eg(e,t){if(Kt)return e==="compositionend"||!vl&&tu(e,t)?(e=Ji(),Gr=fl=gt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eu&&t.locale!=="ko"?null:t.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tg[e.type]:t==="textarea"}function ru(e,t,n,r){Ri(r),t=Zr(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Xn=null;function ng(e){pu(e,0)}function xs(e){var t=Zt(e);if(Ci(t))return e}function rg(e,t){if(e==="change")return t}var su=!1;if(tt){var Ds;if(tt){var As="oninput"in document;if(!As){var xo=document.createElement("div");xo.setAttribute("oninput","return;"),As=typeof xo.oninput=="function"}Ds=As}else Ds=!1;su=Ds&&(!document.documentMode||9<document.documentMode)}function bo(){In&&(In.detachEvent("onpropertychange",au),Xn=In=null)}function au(e){if(e.propertyName==="value"&&xs(Xn)){var t=[];ru(t,Xn,e,il(e)),$i(ng,t)}}function sg(e,t,n){e==="focusin"?(bo(),In=t,Xn=n,In.attachEvent("onpropertychange",au)):e==="focusout"&&bo()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(Xn)}function lg(e,t){if(e==="click")return xs(t)}function og(e,t){if(e==="input"||e==="change")return xs(t)}function ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:ig;function Zn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!la.call(t,s)||!Fe(e[s],t[s]))return!1}return!0}function yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ko(e,t){var n=yo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yo(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ou(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ug(e){var t=ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(r!==null&&hl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=ko(n,a);var l=ko(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dg=tt&&"documentMode"in document&&11>=document.documentMode,Yt=null,Sa=null,Dn=null,ja=!1;function wo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ja||Yt==null||Yt!==Hr(r)||(r=Yt,"selectionStart"in r&&hl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Zn(Dn,r)||(Dn=r,r=Zr(Sa,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Fs={},iu={};tt&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function bs(e){if(Fs[e])return Fs[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in iu)return Fs[e]=t[n];return e}var uu=bs("animationend"),du=bs("animationiteration"),cu=bs("animationstart"),gu=bs("transitionend"),fu=new Map,No="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){fu.set(e,t),Dt(t,[e])}for(var Bs=0;Bs<No.length;Bs++){var Vs=No[Bs],cg=Vs.toLowerCase(),gg=Vs[0].toUpperCase()+Vs.slice(1);_t(cg,"on"+gg)}_t(uu,"onAnimationEnd");_t(du,"onAnimationIteration");_t(cu,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(gu,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function _o(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cc(r,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],u=i.instance,c=i.currentTarget;if(i=i.listener,u!==a&&s.isPropagationStopped())break e;_o(s,i,c),a=u}else for(l=0;l<r.length;l++){if(i=r[l],u=i.instance,c=i.currentTarget,i=i.listener,u!==a&&s.isPropagationStopped())break e;_o(s,i,c),a=u}}}if(Wr)throw e=ka,Wr=!1,ka=null,e}function D(e,t){var n=t[Pa];n===void 0&&(n=t[Pa]=new Set);var r=e+"__bubble";n.has(r)||(mu(t,e,2,!1),n.add(r))}function Hs(e,t,n){var r=0;t&&(r|=4),mu(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[_r]){e[_r]=!0,wi.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||Hs(n,!1,e),Hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,Hs("selectionchange",!1,t))}}function mu(e,t,n,r){switch(Zi(t)){case 1:var s=Cc;break;case 4:s=zc;break;default:s=gl}n=s.bind(null,t,n,e),s=void 0,!ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Us(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;l=l.return}for(;i!==null;){if(l=Tt(i),l===null)return;if(u=l.tag,u===5||u===6){r=a=l;continue e}i=i.parentNode}}r=r.return}$i(function(){var c=a,v=il(n),m=[];e:{var p=fu.get(e);if(p!==void 0){var b=pl,y=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":b=Bc;break;case"focusin":y="focus",b=Is;break;case"focusout":y="blur",b=Is;break;case"beforeblur":case"afterblur":b=Is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Uc;break;case uu:case du:case cu:b=Rc;break;case gu:b=Qc;break;case"scroll":b=Ec;break;case"wheel":b=Yc;break;case"copy":case"cut":case"paste":b=qc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=po}var k=(t&4)!==0,O=!k&&e==="scroll",g=k?p!==null?p+"Capture":null:p;k=[];for(var d=c,f;d!==null;){f=d;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,g!==null&&(h=Wn(d,g),h!=null&&k.push(er(d,h,f)))),O)break;d=d.return}0<k.length&&(p=new b(p,y,null,n,v),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&n!==xa&&(y=n.relatedTarget||n.fromElement)&&(Tt(y)||y[nt]))break e;if((b||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=c,y=y?Tt(y):null,y!==null&&(O=At(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=c),b!==y)){if(k=go,h="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=po,h="onPointerLeave",g="onPointerEnter",d="pointer"),O=b==null?p:Zt(b),f=y==null?p:Zt(y),p=new k(h,d+"leave",b,n,v),p.target=O,p.relatedTarget=f,h=null,Tt(v)===c&&(k=new k(g,d+"enter",y,n,v),k.target=f,k.relatedTarget=O,h=k),O=h,b&&y)t:{for(k=b,g=y,d=0,f=k;f;f=Ut(f))d++;for(f=0,h=g;h;h=Ut(h))f++;for(;0<d-f;)k=Ut(k),d--;for(;0<f-d;)g=Ut(g),f--;for(;d--;){if(k===g||g!==null&&k===g.alternate)break t;k=Ut(k),g=Ut(g)}k=null}else k=null;b!==null&&So(m,p,b,k,!1),y!==null&&O!==null&&So(m,O,y,k,!0)}}e:{if(p=c?Zt(c):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var _=rg;else if(ho(p))if(su)_=og;else{_=ag;var C=sg}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=lg);if(_&&(_=_(e,c))){ru(m,_,n,v);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&fa(p,"number",p.value)}switch(C=c?Zt(c):window,e){case"focusin":(ho(C)||C.contentEditable==="true")&&(Yt=C,Sa=c,Dn=null);break;case"focusout":Dn=Sa=Yt=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,wo(m,n,v);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":wo(m,n,v)}var j;if(vl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Kt?tu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(eu&&n.locale!=="ko"&&(Kt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Kt&&(j=Ji()):(gt=v,fl="value"in gt?gt.value:gt.textContent,Kt=!0)),C=Zr(c,z),0<C.length&&(z=new fo(z,e,null,n,v),m.push({event:z,listeners:C}),j?z.data=j:(j=nu(n),j!==null&&(z.data=j)))),(j=Zc?Jc(e,n):eg(e,n))&&(c=Zr(c,"onBeforeInput"),0<c.length&&(v=new fo("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:c}),v.data=j))}pu(m,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Wn(e,n),a!=null&&r.unshift(er(e,a,s)),a=Wn(e,t),a!=null&&r.push(er(e,a,s))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function So(e,t,n,r,s){for(var a=t._reactName,l=[];n!==null&&n!==r;){var i=n,u=i.alternate,c=i.stateNode;if(u!==null&&u===r)break;i.tag===5&&c!==null&&(i=c,s?(u=Wn(n,a),u!=null&&l.unshift(er(n,u,i))):s||(u=Wn(n,a),u!=null&&l.push(er(n,u,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var pg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function jo(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(mg,"")}function Sr(e,t,n){if(t=jo(t),jo(e)!==t&&n)throw Error(x(425))}function Jr(){}var Ca=null,za=null;function Ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,Co=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Co<"u"?function(e){return Co.resolve(null).then(e).catch(xg)}:Ta;function xg(e){setTimeout(function(){throw e})}function Ws(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Yn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),He="__reactFiber$"+kn,tr="__reactProps$"+kn,nt="__reactContainer$"+kn,Pa="__reactEvents$"+kn,bg="__reactListeners$"+kn,yg="__reactHandles$"+kn;function Tt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zo(e);e!==null;){if(n=e[He])return n;e=zo(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[He]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ys(e){return e[tr]||null}var Ma=[],Jt=-1;function St(e){return{current:e}}function A(e){0>Jt||(e.current=Ma[Jt],Ma[Jt]=null,Jt--)}function I(e,t){Jt++,Ma[Jt]=e.current,e.current=t}var Nt={},ue=St(Nt),ve=St(!1),Gt=Nt;function fn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function he(e){return e=e.childContextTypes,e!=null}function es(){A(ve),A(ue)}function Eo(e,t,n){if(ue.current!==Nt)throw Error(x(168));I(ue,t),I(ve,n)}function vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(x(108,sc(e)||"Unknown",s));return W({},n,r)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Gt=ue.current,I(ue,e),I(ve,ve.current),!0}function To(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=vu(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,A(ve),A(ue),I(ue,e)):A(ve),I(ve,n)}var Xe=null,ks=!1,Qs=!1;function hu(e){Xe===null?Xe=[e]:Xe.push(e)}function kg(e){ks=!0,hu(e)}function jt(){if(!Qs&&Xe!==null){Qs=!0;var e=0,t=$;try{var n=Xe;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,ks=!1}catch(s){throw Xe!==null&&(Xe=Xe.slice(e+1)),Fi(ul,jt),s}finally{$=t,Qs=!1}}return null}var en=[],tn=0,ns=null,rs=0,Ee=[],Te=0,qt=null,Ze=1,Je="";function zt(e,t){en[tn++]=rs,en[tn++]=ns,ns=e,rs=t}function xu(e,t,n){Ee[Te++]=Ze,Ee[Te++]=Je,Ee[Te++]=qt,qt=e;var r=Ze;e=Je;var s=32-De(r)-1;r&=~(1<<s),n+=1;var a=32-De(t)+s;if(30<a){var l=s-s%5;a=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Ze=1<<32-De(t)+s|n<<s|r,Je=a+e}else Ze=1<<a|n<<s|r,Je=e}function xl(e){e.return!==null&&(zt(e,1),xu(e,1,0))}function bl(e){for(;e===ns;)ns=en[--tn],en[tn]=null,rs=en[--tn],en[tn]=null;for(;e===qt;)qt=Ee[--Te],Ee[Te]=null,Je=Ee[--Te],Ee[Te]=null,Ze=Ee[--Te],Ee[Te]=null}var _e=null,Ne=null,B=!1,Ie=null;function bu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Po(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Ne=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Ne=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(B){var t=Ne;if(t){var n=t;if(!Po(e,t)){if(La(e))throw Error(x(418));t=ht(n.nextSibling);var r=_e;t&&Po(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,B=!1,_e=e)}}else{if(La(e))throw Error(x(418));e.flags=e.flags&-4097|2,B=!1,_e=e}}}function Mo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function jr(e){if(e!==_e)return!1;if(!B)return Mo(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ea(e.type,e.memoizedProps)),t&&(t=Ne)){if(La(e))throw yu(),Error(x(418));for(;t;)bu(e,t),t=ht(t.nextSibling)}if(Mo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=_e?ht(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=Ne;e;)e=ht(e.nextSibling)}function pn(){Ne=_e=null,B=!1}function yl(e){Ie===null?Ie=[e]:Ie.push(e)}var wg=at.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var i=s.refs;l===null?delete i[a]:i[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lo(e){var t=e._init;return t(e._payload)}function ku(e){function t(g,d){if(e){var f=g.deletions;f===null?(g.deletions=[d],g.flags|=16):f.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function s(g,d){return g=kt(g,d),g.index=0,g.sibling=null,g}function a(g,d,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<d?(g.flags|=2,d):f):(g.flags|=2,d)):(g.flags|=1048576,d)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,d,f,h){return d===null||d.tag!==6?(d=ta(f,g.mode,h),d.return=g,d):(d=s(d,f),d.return=g,d)}function u(g,d,f,h){var _=f.type;return _===Qt?v(g,d,f.props.children,h,f.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===it&&Lo(_)===d.type)?(h=s(d,f.props),h.ref=En(g,d,f),h.return=g,h):(h=Br(f.type,f.key,f.props,null,g.mode,h),h.ref=En(g,d,f),h.return=g,h)}function c(g,d,f,h){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=na(f,g.mode,h),d.return=g,d):(d=s(d,f.children||[]),d.return=g,d)}function v(g,d,f,h,_){return d===null||d.tag!==7?(d=Rt(f,g.mode,h,_),d.return=g,d):(d=s(d,f),d.return=g,d)}function m(g,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ta(""+d,g.mode,f),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vr:return f=Br(d.type,d.key,d.props,null,g.mode,f),f.ref=En(g,null,d),f.return=g,f;case Wt:return d=na(d,g.mode,f),d.return=g,d;case it:var h=d._init;return m(g,h(d._payload),f)}if(Ln(d)||_n(d))return d=Rt(d,g.mode,f,null),d.return=g,d;Cr(g,d)}return null}function p(g,d,f,h){var _=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:i(g,d,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===_?u(g,d,f,h):null;case Wt:return f.key===_?c(g,d,f,h):null;case it:return _=f._init,p(g,d,_(f._payload),h)}if(Ln(f)||_n(f))return _!==null?null:v(g,d,f,h,null);Cr(g,f)}return null}function b(g,d,f,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return g=g.get(f)||null,i(d,g,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vr:return g=g.get(h.key===null?f:h.key)||null,u(d,g,h,_);case Wt:return g=g.get(h.key===null?f:h.key)||null,c(d,g,h,_);case it:var C=h._init;return b(g,d,f,C(h._payload),_)}if(Ln(h)||_n(h))return g=g.get(f)||null,v(d,g,h,_,null);Cr(d,h)}return null}function y(g,d,f,h){for(var _=null,C=null,j=d,z=d=0,F=null;j!==null&&z<f.length;z++){j.index>z?(F=j,j=null):F=j.sibling;var E=p(g,j,f[z],h);if(E===null){j===null&&(j=F);break}e&&j&&E.alternate===null&&t(g,j),d=a(E,d,z),C===null?_=E:C.sibling=E,C=E,j=F}if(z===f.length)return n(g,j),B&&zt(g,z),_;if(j===null){for(;z<f.length;z++)j=m(g,f[z],h),j!==null&&(d=a(j,d,z),C===null?_=j:C.sibling=j,C=j);return B&&zt(g,z),_}for(j=r(g,j);z<f.length;z++)F=b(j,g,z,f[z],h),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?z:F.key),d=a(F,d,z),C===null?_=F:C.sibling=F,C=F);return e&&j.forEach(function(be){return t(g,be)}),B&&zt(g,z),_}function k(g,d,f,h){var _=_n(f);if(typeof _!="function")throw Error(x(150));if(f=_.call(f),f==null)throw Error(x(151));for(var C=_=null,j=d,z=d=0,F=null,E=f.next();j!==null&&!E.done;z++,E=f.next()){j.index>z?(F=j,j=null):F=j.sibling;var be=p(g,j,E.value,h);if(be===null){j===null&&(j=F);break}e&&j&&be.alternate===null&&t(g,j),d=a(be,d,z),C===null?_=be:C.sibling=be,C=be,j=F}if(E.done)return n(g,j),B&&zt(g,z),_;if(j===null){for(;!E.done;z++,E=f.next())E=m(g,E.value,h),E!==null&&(d=a(E,d,z),C===null?_=E:C.sibling=E,C=E);return B&&zt(g,z),_}for(j=r(g,j);!E.done;z++,E=f.next())E=b(j,g,z,E.value,h),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?z:E.key),d=a(E,d,z),C===null?_=E:C.sibling=E,C=E);return e&&j.forEach(function(Ge){return t(g,Ge)}),B&&zt(g,z),_}function O(g,d,f,h){if(typeof f=="object"&&f!==null&&f.type===Qt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var _=f.key,C=d;C!==null;){if(C.key===_){if(_=f.type,_===Qt){if(C.tag===7){n(g,C.sibling),d=s(C,f.props.children),d.return=g,g=d;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===it&&Lo(_)===C.type){n(g,C.sibling),d=s(C,f.props),d.ref=En(g,C,f),d.return=g,g=d;break e}n(g,C);break}else t(g,C);C=C.sibling}f.type===Qt?(d=Rt(f.props.children,g.mode,h,f.key),d.return=g,g=d):(h=Br(f.type,f.key,f.props,null,g.mode,h),h.ref=En(g,d,f),h.return=g,g=h)}return l(g);case Wt:e:{for(C=f.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(g,d.sibling),d=s(d,f.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=na(f,g.mode,h),d.return=g,g=d}return l(g);case it:return C=f._init,O(g,d,C(f._payload),h)}if(Ln(f))return y(g,d,f,h);if(_n(f))return k(g,d,f,h);Cr(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(g,d.sibling),d=s(d,f),d.return=g,g=d):(n(g,d),d=ta(f,g.mode,h),d.return=g,g=d),l(g)):n(g,d)}return O}var mn=ku(!0),wu=ku(!1),ss=St(null),as=null,nn=null,kl=null;function wl(){kl=nn=as=null}function Nl(e){var t=ss.current;A(ss),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){as=e,kl=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(kl!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(as===null)throw Error(x(308));nn=e,as.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Pt=null;function _l(e){Pt===null?Pt=[e]:Pt.push(e)}function Nu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,_l(t)):(n.next=s.next,s.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,rt(e,n)}return s=r.interleaved,s===null?(t.next=t,_l(r)):(t.next=s.next,s.next=t),r.interleaved=t,rt(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dl(e,n)}}function Ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ls(e,t,n,r){var s=e.updateQueue;ut=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var u=i,c=u.next;u.next=null,l===null?a=c:l.next=c,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,i=v.lastBaseUpdate,i!==l&&(i===null?v.firstBaseUpdate=c:i.next=c,v.lastBaseUpdate=u))}if(a!==null){var m=s.baseState;l=0,v=c=u=null,i=a;do{var p=i.lane,b=i.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,k=i;switch(p=t,b=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){m=y.call(b,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,p=typeof y=="function"?y.call(b,m,p):y,p==null)break e;m=W({},m,p);break e;case 2:ut=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[i]:p.push(i))}else b={eventTime:b,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},v===null?(c=v=b,u=m):v=v.next=b,l|=p;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;p=i,i=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(v===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=v,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);$t|=l,e.lanes=l,e.memoizedState=m}}function Go(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(x(191,s));s.call(r)}}}var gr={},We=St(gr),nr=St(gr),rr=St(gr);function Mt(e){if(e===gr)throw Error(x(174));return e}function jl(e,t){switch(I(rr,t),I(nr,e),I(We,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ma(t,e)}A(We),I(We,t)}function vn(){A(We),A(nr),A(rr)}function Su(e){Mt(rr.current);var t=Mt(We.current),n=ma(t,e.type);t!==n&&(I(nr,e),I(We,n))}function Cl(e){nr.current===e&&(A(We),A(nr))}var H=St(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ks=[];function zl(){for(var e=0;e<Ks.length;e++)Ks[e]._workInProgressVersionPrimary=null;Ks.length=0}var $r=at.ReactCurrentDispatcher,Ys=at.ReactCurrentBatchConfig,Ot=0,U=null,Z=null,ee=null,is=!1,An=!1,sr=0,Ng=0;function ae(){throw Error(x(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Tl(e,t,n,r,s,a){if(Ot=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Cg:zg,e=n(r,s),An){a=0;do{if(An=!1,sr=0,25<=a)throw Error(x(301));a+=1,ee=Z=null,t.updateQueue=null,$r.current=Eg,e=n(r,s)}while(An)}if($r.current=us,t=Z!==null&&Z.next!==null,Ot=0,ee=Z=U=null,is=!1,t)throw Error(x(300));return e}function Pl(){var e=sr!==0;return sr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?U.memoizedState=ee=e:ee=ee.next=e,ee}function Re(){if(Z===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?U.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(x(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?U.memoizedState=ee=e:ee=ee.next=e}return ee}function ar(e,t){return typeof t=="function"?t(e):t}function Xs(e){var t=Re(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Z,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=l=null,u=null,c=a;do{var v=c.lane;if((Ot&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(i=u=m,l=r):u=u.next=m,U.lanes|=v,$t|=v}c=c.next}while(c!==null&&c!==a);u===null?l=r:u.next=i,Fe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,U.lanes|=a,$t|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zs(e){var t=Re(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);Fe(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ju(){}function Cu(e,t){var n=U,r=Re(),s=t(),a=!Fe(r.memoizedState,s);if(a&&(r.memoizedState=s,me=!0),r=r.queue,Ml(Tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,lr(9,Eu.bind(null,n,r,s,t),void 0,null),te===null)throw Error(x(349));Ot&30||zu(n,t,s)}return s}function zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eu(e,t,n,r){t.value=n,t.getSnapshot=r,Pu(t)&&Mu(e)}function Tu(e,t,n){return n(function(){Pu(t)&&Mu(e)})}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function Mu(e){var t=rt(e,1);t!==null&&Ae(t,e,1,-1)}function qo(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=jg.bind(null,U,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lu(){return Re().memoizedState}function Ir(e,t,n,r){var s=Ve();U.flags|=e,s.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function ws(e,t,n,r){var s=Re();r=r===void 0?null:r;var a=void 0;if(Z!==null){var l=Z.memoizedState;if(a=l.destroy,r!==null&&El(r,l.deps)){s.memoizedState=lr(t,n,a,r);return}}U.flags|=e,s.memoizedState=lr(1|t,n,a,r)}function Oo(e,t){return Ir(8390656,8,e,t)}function Ml(e,t){return ws(2048,8,e,t)}function Ru(e,t){return ws(4,2,e,t)}function Gu(e,t){return ws(4,4,e,t)}function qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ou(e,t,n){return n=n!=null?n.concat([e]):null,ws(4,4,qu.bind(null,t,e),n)}function Ll(){}function $u(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Iu(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Du(e,t,n){return Ot&21?(Fe(n,t)||(n=Hi(),U.lanes|=n,$t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function _g(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Ys.transition;Ys.transition={};try{e(!1),t()}finally{$=n,Ys.transition=r}}function Au(){return Re().memoizedState}function Sg(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))Bu(t,n);else if(n=Nu(e,t,n,r),n!==null){var s=ce();Ae(n,e,r,s),Vu(n,t,r)}}function jg(e,t,n){var r=yt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Bu(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,i=a(l,n);if(s.hasEagerState=!0,s.eagerState=i,Fe(i,l)){var u=t.interleaved;u===null?(s.next=s,_l(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=Nu(e,t,s,r),n!==null&&(s=ce(),Ae(n,e,r,s),Vu(n,t,r))}}function Fu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Bu(e,t){An=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dl(e,n)}}var us={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Cg={readContext:Le,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Oo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,qu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sg.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:qo,useDebugValue:Ll,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=qo(!1),t=e[0];return e=_g.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,s=Ve();if(B){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),te===null)throw Error(x(349));Ot&30||zu(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Oo(Tu.bind(null,r,a,e),[e]),r.flags|=2048,lr(9,Eu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if(B){var n=Je,r=Ze;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ng++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zg={readContext:Le,useCallback:$u,useContext:Le,useEffect:Ml,useImperativeHandle:Ou,useInsertionEffect:Ru,useLayoutEffect:Gu,useMemo:Iu,useReducer:Xs,useRef:Lu,useState:function(){return Xs(ar)},useDebugValue:Ll,useDeferredValue:function(e){var t=Re();return Du(t,Z.memoizedState,e)},useTransition:function(){var e=Xs(ar)[0],t=Re().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Cu,useId:Au,unstable_isNewReconciler:!1},Eg={readContext:Le,useCallback:$u,useContext:Le,useEffect:Ml,useImperativeHandle:Ou,useInsertionEffect:Ru,useLayoutEffect:Gu,useMemo:Iu,useReducer:Zs,useRef:Lu,useState:function(){return Zs(ar)},useDebugValue:Ll,useDeferredValue:function(e){var t=Re();return Z===null?t.memoizedState=e:Du(t,Z.memoizedState,e)},useTransition:function(){var e=Zs(ar)[0],t=Re().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Cu,useId:Au,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),s=yt(e),a=et(r,s);a.payload=t,n!=null&&(a.callback=n),t=xt(e,a,s),t!==null&&(Ae(t,e,s,r),Or(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),s=yt(e),a=et(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=xt(e,a,s),t!==null&&(Ae(t,e,s,r),Or(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=yt(e),s=et(n,r);s.tag=2,t!=null&&(s.callback=t),t=xt(e,s,r),t!==null&&(Ae(t,e,r,n),Or(t,e,r))}};function $o(e,t,n,r,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(s,a):!0}function Hu(e,t,n){var r=!1,s=Nt,a=t.contextType;return typeof a=="object"&&a!==null?a=Le(a):(s=he(t)?Gt:ue.current,r=t.contextTypes,a=(r=r!=null)?fn(e,s):Nt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Io(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Oa(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Sl(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Le(a):(a=he(t)?Gt:ue.current,s.context=fn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(qa(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ns.enqueueReplaceState(s,s.state,null),ls(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=rc(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Js(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $a(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tg=typeof WeakMap=="function"?WeakMap:Map;function Uu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cs||(cs=!0,Qa=r),$a(e,t)},n}function Wu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){$a(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$a(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Do(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tg;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Vg.bind(null,e,t,n),t.then(e,e))}function Ao(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fo(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Pg=at.ReactCurrentOwner,me=!1;function de(e,t,n,r){t.child=e===null?wu(t,null,n,r):mn(t,e.child,n,r)}function Bo(e,t,n,r,s){n=n.render;var a=t.ref;return dn(t,s),r=Tl(e,t,n,r,a,s),n=Pl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(B&&n&&xl(t),t.flags|=1,de(e,t,r,s),t.child)}function Vo(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!Al(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Qu(e,t,a,r,s)):(e=Br(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return st(e,t,s)}return t.flags|=1,e=kt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Qu(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(Zn(a,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,st(e,t,s)}return Ia(e,t,n,r,s)}function Ku(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(sn,we),we|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(sn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,I(sn,we),we|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,I(sn,we),we|=r;return de(e,t,s,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ia(e,t,n,r,s){var a=he(n)?Gt:ue.current;return a=fn(t,a),dn(t,s),n=Tl(e,t,n,r,a,s),r=Pl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(B&&r&&xl(t),t.flags|=1,de(e,t,n,s),t.child)}function Ho(e,t,n,r,s){if(he(n)){var a=!0;ts(t)}else a=!1;if(dn(t,s),t.stateNode===null)Dr(e,t),Hu(t,n,r),Oa(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=he(n)?Gt:ue.current,c=fn(t,c));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||u!==c)&&Io(t,l,r,c),ut=!1;var p=t.memoizedState;l.state=p,ls(t,r,l,s),u=t.memoizedState,i!==r||p!==u||ve.current||ut?(typeof v=="function"&&(qa(t,n,v,r),u=t.memoizedState),(i=ut||$o(t,n,i,r,p,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_u(e,t),i=t.memoizedProps,c=t.type===t.elementType?i:Oe(t.type,i),l.props=c,m=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=he(n)?Gt:ue.current,u=fn(t,u));var b=n.getDerivedStateFromProps;(v=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==m||p!==u)&&Io(t,l,r,u),ut=!1,p=t.memoizedState,l.state=p,ls(t,r,l,s);var y=t.memoizedState;i!==m||p!==y||ve.current||ut?(typeof b=="function"&&(qa(t,n,b,r),y=t.memoizedState),(c=ut||$o(t,n,c,r,p,y,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Da(e,t,n,r,a,s)}function Da(e,t,n,r,s,a){Yu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&To(t,n,!1),st(e,t,a);r=t.stateNode,Pg.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=mn(t,e.child,null,a),t.child=mn(t,null,i,a)):de(e,t,i,a),t.memoizedState=r.state,s&&To(t,n,!0),t.child}function Xu(e){var t=e.stateNode;t.pendingContext?Eo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eo(e,t.context,!1),jl(e,t.containerInfo)}function Uo(e,t,n,r,s){return pn(),yl(s),t.flags|=256,de(e,t,n,r),t.child}var Aa={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zu(e,t,n){var r=t.pendingProps,s=H.current,a=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),I(H,s&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=js(l,r,0,null),e=Rt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Fa(n),t.memoizedState=Aa,e):Rl(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Mg(e,t,l,r,i,s,n);if(a){a=r.fallback,l=t.mode,s=e.child,i=s.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=kt(i,a):(a=Rt(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Fa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Aa,r}return a=e.child,e=a.sibling,r=kt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&yl(r),mn(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mg(e,t,n,r,s,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Js(Error(x(422))),zr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=js({mode:"visible",children:r.children},s,0,null),a=Rt(a,s,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&mn(t,e.child,null,l),t.child.memoizedState=Fa(l),t.memoizedState=Aa,a);if(!(t.mode&1))return zr(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(x(419)),r=Js(a,r,void 0),zr(e,t,l,r)}if(i=(l&e.childLanes)!==0,me||i){if(r=te,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,rt(e,s),Ae(r,e,s,-1))}return Dl(),r=Js(Error(x(421))),zr(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Hg.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Ne=ht(s.nextSibling),_e=t,B=!0,Ie=null,e!==null&&(Ee[Te++]=Ze,Ee[Te++]=Je,Ee[Te++]=qt,Ze=e.id,Je=e.overflow,qt=t),t=Rl(t,r.children),t.flags|=4096,t)}function Wo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function ea(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Ju(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(de(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wo(e,n,t);else if(e.tag===19)Wo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ea(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&os(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ea(t,!0,n,null,a);break;case"together":ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lg(e,t,n){switch(t.tag){case 3:Xu(t),pn();break;case 5:Su(t);break;case 1:he(t.type)&&ts(t);break;case 4:jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;I(ss,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Zu(e,t,n):(I(H,H.current&1),e=st(e,t,n),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ju(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ku(e,t,n)}return st(e,t,n)}var ed,Ba,td,nd;ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ba=function(){};td=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Mt(We.current);var a=null;switch(n){case"input":s=ca(e,s),r=ca(e,r),a=[];break;case"select":s=W({},s,{value:void 0}),r=W({},r,{value:void 0}),a=[];break;case"textarea":s=pa(e,s),r=pa(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}va(n,r);var l;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var i=s[c];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(i=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==i&&(u!=null||i!=null))if(c==="style")if(i){for(l in i)!i.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&i[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),a||i===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};nd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rg(e,t,n){var r=t.pendingProps;switch(bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&es(),le(t),null;case 3:return r=t.stateNode,vn(),A(ve),A(ue),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Xa(Ie),Ie=null))),Ba(e,t),le(t),null;case 5:Cl(t);var s=Mt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)td(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return le(t),null}if(e=Mt(We.current),jr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[He]=t,r[tr]=a,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(s=0;s<Gn.length;s++)D(Gn[s],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":to(r,a),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},D("invalid",r);break;case"textarea":ro(r,a),D("invalid",r)}va(n,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Sr(r.textContent,i,e),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Sr(r.textContent,i,e),s=["children",""+i]):Hn.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&D("scroll",r)}switch(n){case"input":hr(r),no(r,a,!0);break;case"textarea":hr(r),so(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Jr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ti(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[He]=t,e[tr]=r,ed(e,t,!1,!1),t.stateNode=e;e:{switch(l=ha(n,r),n){case"dialog":D("cancel",e),D("close",e),s=r;break;case"iframe":case"object":case"embed":D("load",e),s=r;break;case"video":case"audio":for(s=0;s<Gn.length;s++)D(Gn[s],e);s=r;break;case"source":D("error",e),s=r;break;case"img":case"image":case"link":D("error",e),D("load",e),s=r;break;case"details":D("toggle",e),s=r;break;case"input":to(e,r),s=ca(e,r),D("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":ro(e,r),s=pa(e,r),D("invalid",e);break;default:s=r}va(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="style"?Li(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Pi(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Un(e,u):typeof u=="number"&&Un(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Hn.hasOwnProperty(a)?u!=null&&a==="onScroll"&&D("scroll",e):u!=null&&sl(e,a,u,l))}switch(n){case"input":hr(e),no(e,r,!1);break;case"textarea":hr(e),so(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?an(e,!!r.multiple,a,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)nd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Mt(rr.current),Mt(We.current),jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(a=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return le(t),null;case 13:if(A(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ne!==null&&t.mode&1&&!(t.flags&128))yu(),pn(),t.flags|=98560,a=!1;else if(a=jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(x(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(x(317));a[He]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),a=!1}else Ie!==null&&(Xa(Ie),Ie=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):Dl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return vn(),Ba(e,t),e===null&&Jn(t.stateNode.containerInfo),le(t),null;case 10:return Nl(t.type._context),le(t),null;case 17:return he(t.type)&&es(),le(t),null;case 19:if(A(H),a=t.memoizedState,a===null)return le(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Tn(a,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=os(e),l!==null){for(t.flags|=128,Tn(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(H,H.current&1|2),t.child}e=e.sibling}a.tail!==null&&Y()>xn&&(t.flags|=128,r=!0,Tn(a,!1),t.lanes=4194304)}else{if(!r)if(e=os(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!B)return le(t),null}else 2*Y()-a.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Y(),t.sibling=null,n=H.current,I(H,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Il(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Gg(e,t){switch(bl(t),t.tag){case 1:return he(t.type)&&es(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),A(ve),A(ue),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(A(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(H),null;case 4:return vn(),null;case 10:return Nl(t.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var Er=!1,ie=!1,qg=typeof WeakSet=="function"?WeakSet:Set,S=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Va(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qo=!1;function Og(e,t){if(Ca=Yr,e=ou(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,i=-1,u=-1,c=0,v=0,m=e,p=null;t:for(;;){for(var b;m!==n||s!==0&&m.nodeType!==3||(i=l+s),m!==a||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(b=m.firstChild)!==null;)p=m,m=b;for(;;){if(m===e)break t;if(p===n&&++c===s&&(i=l),p===a&&++v===r&&(u=l),(b=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=b}n=i===-1||u===-1?null:{start:i,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(za={focusedElem:e,selectionRange:n},Yr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,O=y.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),O);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(h){Q(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=Qo,Qo=!1,y}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Va(t,n,a)}s=s.next}while(s!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rd(e){var t=e.alternate;t!==null&&(e.alternate=null,rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[tr],delete t[Pa],delete t[bg],delete t[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sd(e){return e.tag===5||e.tag===3||e.tag===4}function Ko(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var ne=null,$e=!1;function lt(e,t,n){for(n=n.child;n!==null;)ad(e,t,n),n=n.sibling}function ad(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:ie||rn(n,t);case 6:var r=ne,s=$e;ne=null,lt(e,t,n),ne=r,$e=s,ne!==null&&($e?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&($e?(e=ne,n=n.stateNode,e.nodeType===8?Ws(e.parentNode,n):e.nodeType===1&&Ws(e,n),Yn(e)):Ws(ne,n.stateNode));break;case 4:r=ne,s=$e,ne=n.stateNode.containerInfo,$e=!0,lt(e,t,n),ne=r,$e=s;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Va(n,t,l),s=s.next}while(s!==r)}lt(e,t,n);break;case 1:if(!ie&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Q(n,t,i)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,lt(e,t,n),ie=r):lt(e,t,n);break;default:lt(e,t,n)}}function Yo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qg),t.forEach(function(r){var s=Ug.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:ne=i.stateNode,$e=!1;break e;case 3:ne=i.stateNode.containerInfo,$e=!0;break e;case 4:ne=i.stateNode.containerInfo,$e=!0;break e}i=i.return}if(ne===null)throw Error(x(160));ad(a,l,s),ne=null,$e=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Q(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),Be(e),r&4){try{Fn(3,e,e.return),_s(3,e)}catch(k){Q(e,e.return,k)}try{Fn(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:qe(t,e),Be(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(qe(t,e),Be(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var s=e.stateNode;try{Un(s,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,i=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&zi(s,a),ha(i,l);var c=ha(i,a);for(l=0;l<u.length;l+=2){var v=u[l],m=u[l+1];v==="style"?Li(s,m):v==="dangerouslySetInnerHTML"?Pi(s,m):v==="children"?Un(s,m):sl(s,v,m,c)}switch(i){case"input":ga(s,a);break;case"textarea":Ei(s,a);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?an(s,!!a.multiple,b,!1):p!==!!a.multiple&&(a.defaultValue!=null?an(s,!!a.multiple,a.defaultValue,!0):an(s,!!a.multiple,a.multiple?[]:"",!1))}s[tr]=a}catch(k){Q(e,e.return,k)}}break;case 6:if(qe(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(x(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(k){Q(e,e.return,k)}}break;case 3:if(qe(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:qe(t,e),Be(e);break;case 13:qe(t,e),Be(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Ol=Y())),r&4&&Yo(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||v,qe(t,e),ie=c):qe(t,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(m=S=v;S!==null;){switch(p=S,b=p.child,p.tag){case 0:case 11:case 14:case 15:Fn(4,p,p.return);break;case 1:rn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:rn(p,p.return);break;case 22:if(p.memoizedState!==null){Zo(m);continue}}b!==null?(b.return=p,S=b):Zo(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{s=m.stateNode,c?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=Mi("display",l))}catch(k){Q(e,e.return,k)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Q(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qe(t,e),Be(e),r&4&&Yo(e);break;case 21:break;default:qe(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sd(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Un(s,""),r.flags&=-33);var a=Ko(e);Wa(e,a,s);break;case 3:case 4:var l=r.stateNode.containerInfo,i=Ko(e);Ua(e,i,l);break;default:throw Error(x(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $g(e,t,n){S=e,od(e)}function od(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var s=S,a=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||Er;if(!l){var i=s.alternate,u=i!==null&&i.memoizedState!==null||ie;i=Er;var c=ie;if(Er=l,(ie=u)&&!c)for(S=s;S!==null;)l=S,u=l.child,l.tag===22&&l.memoizedState!==null?Jo(s):u!==null?(u.return=l,S=u):Jo(s);for(;a!==null;)S=a,od(a),a=a.sibling;S=s,Er=i,ie=c}Xo(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,S=a):Xo(e)}}function Xo(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Go(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Go(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Yn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Ha(t)}catch(p){Q(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Zo(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Jo(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){Q(t,s,u)}}var a=t.return;try{Ha(t)}catch(u){Q(t,a,u)}break;case 5:var l=t.return;try{Ha(t)}catch(u){Q(t,l,u)}}}catch(u){Q(t,t.return,u)}if(t===e){S=null;break}var i=t.sibling;if(i!==null){i.return=t.return,S=i;break}S=t.return}}var Ig=Math.ceil,ds=at.ReactCurrentDispatcher,Gl=at.ReactCurrentOwner,Me=at.ReactCurrentBatchConfig,G=0,te=null,X=null,re=0,we=0,sn=St(0),J=0,or=null,$t=0,Ss=0,ql=0,Bn=null,pe=null,Ol=0,xn=1/0,Ye=null,cs=!1,Qa=null,bt=null,Tr=!1,ft=null,gs=0,Vn=0,Ka=null,Ar=-1,Fr=0;function ce(){return G&6?Y():Ar!==-1?Ar:Ar=Y()}function yt(e){return e.mode&1?G&2&&re!==0?re&-re:wg.transition!==null?(Fr===0&&(Fr=Hi()),Fr):(e=$,e!==0||(e=window.event,e=e===void 0?16:Zi(e.type)),e):1}function Ae(e,t,n,r){if(50<Vn)throw Vn=0,Ka=null,Error(x(185));ur(e,n,r),(!(G&2)||e!==te)&&(e===te&&(!(G&2)&&(Ss|=n),J===4&&ct(e,re)),xe(e,r),n===1&&G===0&&!(t.mode&1)&&(xn=Y()+500,ks&&jt()))}function xe(e,t){var n=e.callbackNode;wc(e,t);var r=Kr(e,e===te?re:0);if(r===0)n!==null&&oo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oo(n),t===1)e.tag===0?kg(ei.bind(null,e)):hu(ei.bind(null,e)),hg(function(){!(G&6)&&jt()}),n=null;else{switch(Ui(r)){case 1:n=ul;break;case 4:n=Bi;break;case 16:n=Qr;break;case 536870912:n=Vi;break;default:n=Qr}n=md(n,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function id(e,t){if(Ar=-1,Fr=0,G&6)throw Error(x(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Kr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fs(e,r);else{t=r;var s=G;G|=2;var a=dd();(te!==e||re!==t)&&(Ye=null,xn=Y()+500,Lt(e,t));do try{Fg();break}catch(i){ud(e,i)}while(!0);wl(),ds.current=a,G=s,X!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(s=wa(e),s!==0&&(r=s,t=Ya(e,s))),t===1)throw n=or,Lt(e,0),ct(e,r),xe(e,Y()),n;if(t===6)ct(e,r);else{if(s=e.current.alternate,!(r&30)&&!Dg(s)&&(t=fs(e,r),t===2&&(a=wa(e),a!==0&&(r=a,t=Ya(e,a))),t===1))throw n=or,Lt(e,0),ct(e,r),xe(e,Y()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Et(e,pe,Ye);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Ol+500-Y(),10<t)){if(Kr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ta(Et.bind(null,e,pe,Ye),t);break}Et(e,pe,Ye);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-De(r);a=1<<l,l=t[l],l>s&&(s=l),r&=~a}if(r=s,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ig(r/1960))-r,10<r){e.timeoutHandle=Ta(Et.bind(null,e,pe,Ye),r);break}Et(e,pe,Ye);break;case 5:Et(e,pe,Ye);break;default:throw Error(x(329))}}}return xe(e,Y()),e.callbackNode===n?id.bind(null,e):null}function Ya(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=fs(e,t),e!==2&&(t=pe,pe=n,t!==null&&Xa(t)),e}function Xa(e){pe===null?pe=e:pe.push.apply(pe,e)}function Dg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Fe(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~ql,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function ei(e){if(G&6)throw Error(x(327));cn();var t=Kr(e,0);if(!(t&1))return xe(e,Y()),null;var n=fs(e,t);if(e.tag!==0&&n===2){var r=wa(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=or,Lt(e,0),ct(e,t),xe(e,Y()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,pe,Ye),xe(e,Y()),null}function $l(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(xn=Y()+500,ks&&jt())}}function It(e){ft!==null&&ft.tag===0&&!(G&6)&&cn();var t=G;G|=1;var n=Me.transition,r=$;try{if(Me.transition=null,$=1,e)return e()}finally{$=r,Me.transition=n,G=t,!(G&6)&&jt()}}function Il(){we=sn.current,A(sn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vg(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&es();break;case 3:vn(),A(ve),A(ue),zl();break;case 5:Cl(r);break;case 4:vn();break;case 13:A(H);break;case 19:A(H);break;case 10:Nl(r.type._context);break;case 22:case 23:Il()}n=n.return}if(te=e,X=e=kt(e.current,null),re=we=t,J=0,or=null,ql=Ss=$t=0,pe=Bn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=s,r.next=l}n.pending=r}Pt=null}return e}function ud(e,t){do{var n=X;try{if(wl(),$r.current=us,is){for(var r=U.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}is=!1}if(Ot=0,ee=Z=U=null,An=!1,sr=0,Gl.current=null,n===null||n.return===null){J=1,or=t,X=null;break}e:{var a=e,l=n.return,i=n,u=t;if(t=re,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=i,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var b=Ao(l);if(b!==null){b.flags&=-257,Fo(b,l,i,a,t),b.mode&1&&Do(a,c,t),t=b,u=c;var y=t.updateQueue;if(y===null){var k=new Set;k.add(u),t.updateQueue=k}else y.add(u);break e}else{if(!(t&1)){Do(a,c,t),Dl();break e}u=Error(x(426))}}else if(B&&i.mode&1){var O=Ao(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Fo(O,l,i,a,t),yl(hn(u,i));break e}}a=u=hn(u,i),J!==4&&(J=2),Bn===null?Bn=[a]:Bn.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Uu(a,u,t);Ro(a,g);break e;case 1:i=u;var d=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(bt===null||!bt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var h=Wu(a,i,t);Ro(a,h);break e}}a=a.return}while(a!==null)}gd(n)}catch(_){t=_,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function dd(){var e=ds.current;return ds.current=us,e===null?us:e}function Dl(){(J===0||J===3||J===2)&&(J=4),te===null||!($t&268435455)&&!(Ss&268435455)||ct(te,re)}function fs(e,t){var n=G;G|=2;var r=dd();(te!==e||re!==t)&&(Ye=null,Lt(e,t));do try{Ag();break}catch(s){ud(e,s)}while(!0);if(wl(),G=n,ds.current=r,X!==null)throw Error(x(261));return te=null,re=0,J}function Ag(){for(;X!==null;)cd(X)}function Fg(){for(;X!==null&&!fc();)cd(X)}function cd(e){var t=pd(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?gd(e):X=t,Gl.current=null}function gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(n=Rg(n,t,we),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function Et(e,t,n){var r=$,s=Me.transition;try{Me.transition=null,$=1,Bg(e,t,n,r)}finally{Me.transition=s,$=r}return null}function Bg(e,t,n,r){do cn();while(ft!==null);if(G&6)throw Error(x(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Nc(e,a),e===te&&(X=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,md(Qr,function(){return cn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Me.transition,Me.transition=null;var l=$;$=1;var i=G;G|=4,Gl.current=null,Og(e,n),ld(n,e),ug(za),Yr=!!Ca,za=Ca=null,e.current=n,$g(n),pc(),G=i,$=l,Me.transition=a}else e.current=n;if(Tr&&(Tr=!1,ft=e,gs=s),a=e.pendingLanes,a===0&&(bt=null),hc(n.stateNode),xe(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(cs)throw cs=!1,e=Qa,Qa=null,e;return gs&1&&e.tag!==0&&cn(),a=e.pendingLanes,a&1?e===Ka?Vn++:(Vn=0,Ka=e):Vn=0,jt(),null}function cn(){if(ft!==null){var e=Ui(gs),t=Me.transition,n=$;try{if(Me.transition=null,$=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,gs=0,G&6)throw Error(x(331));var s=G;for(G|=4,S=e.current;S!==null;){var a=S,l=a.child;if(S.flags&16){var i=a.deletions;if(i!==null){for(var u=0;u<i.length;u++){var c=i[u];for(S=c;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:Fn(8,v,a)}var m=v.child;if(m!==null)m.return=v,S=m;else for(;S!==null;){v=S;var p=v.sibling,b=v.return;if(rd(v),v===c){S=null;break}if(p!==null){p.return=b,S=p;break}S=b}}}var y=a.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}S=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,S=l;else e:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,S=g;break e}S=a.return}}var d=e.current;for(S=d;S!==null;){l=S;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,S=f;else e:for(l=d;S!==null;){if(i=S,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:_s(9,i)}}catch(_){Q(i,i.return,_)}if(i===l){S=null;break e}var h=i.sibling;if(h!==null){h.return=i.return,S=h;break e}S=i.return}}if(G=s,jt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(vs,e)}catch{}r=!0}return r}finally{$=n,Me.transition=t}}return!1}function ti(e,t,n){t=hn(n,t),t=Uu(e,t,1),e=xt(e,t,1),t=ce(),e!==null&&(ur(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)ti(e,e,n);else for(;t!==null;){if(t.tag===3){ti(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=hn(n,e),e=Wu(t,e,1),t=xt(t,e,1),e=ce(),t!==null&&(ur(t,1,e),xe(t,e));break}}t=t.return}}function Vg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Y()-Ol?Lt(e,0):ql|=n),xe(e,t)}function fd(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ce();e=rt(e,t),e!==null&&(ur(e,t,n),xe(e,n))}function Hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fd(e,n)}function Ug(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),fd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Lg(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&xu(t,rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var s=fn(t,ue.current);dn(t,n),s=Tl(null,t,r,e,s,n);var a=Pl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(a=!0,ts(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Sl(t),s.updater=Ns,t.stateNode=s,s._reactInternals=t,Oa(t,r,e,n),t=Da(null,t,r,!0,a,n)):(t.tag=0,B&&a&&xl(t),de(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Qg(r),e=Oe(r,e),s){case 0:t=Ia(null,t,r,e,n);break e;case 1:t=Ho(null,t,r,e,n);break e;case 11:t=Bo(null,t,r,e,n);break e;case 14:t=Vo(null,t,r,Oe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),Ia(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),Ho(e,t,r,s,n);case 3:e:{if(Xu(t),e===null)throw Error(x(387));r=t.pendingProps,a=t.memoizedState,s=a.element,_u(e,t),ls(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=hn(Error(x(423)),t),t=Uo(e,t,r,n,s);break e}else if(r!==s){s=hn(Error(x(424)),t),t=Uo(e,t,r,n,s);break e}else for(Ne=ht(t.stateNode.containerInfo.firstChild),_e=t,B=!0,Ie=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===s){t=st(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&Ra(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,Ea(r,s)?l=null:a!==null&&Ea(r,a)&&(t.flags|=32),Yu(e,t),de(e,t,l,n),t.child;case 6:return e===null&&Ra(t),null;case 13:return Zu(e,t,n);case 4:return jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),Bo(e,t,r,s,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,I(ss,r._currentValue),r._currentValue=l,a!==null)if(Fe(a.value,l)){if(a.children===s.children&&!ve.current){t=st(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var u=i.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=et(-1,n&-n),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ga(a.return,n,t),i.lanes|=n;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(x(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Ga(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}de(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dn(t,n),s=Le(s),r=r(s),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,s=Oe(r,t.pendingProps),s=Oe(r.type,s),Vo(e,t,r,s,n);case 15:return Qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Oe(r,s),Dr(e,t),t.tag=1,he(r)?(e=!0,ts(t)):e=!1,dn(t,n),Hu(t,r,s),Oa(t,r,s,n),Da(null,t,r,!0,e,n);case 19:return Ju(e,t,n);case 22:return Ku(e,t,n)}throw Error(x(156,t.tag))};function md(e,t){return Fi(e,t)}function Wg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Wg(e,t,n,r)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ll)return 11;if(e===ol)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,s,a){var l=2;if(r=e,typeof e=="function")Al(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qt:return Rt(n.children,s,a,t);case al:l=8,s|=8;break;case oa:return e=Pe(12,n,t,s|2),e.elementType=oa,e.lanes=a,e;case ia:return e=Pe(13,n,t,s),e.elementType=ia,e.lanes=a,e;case ua:return e=Pe(19,n,t,s),e.elementType=ua,e.lanes=a,e;case Si:return js(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ni:l=10;break e;case _i:l=9;break e;case ll:l=11;break e;case ol:l=14;break e;case it:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Pe(l,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function Rt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function js(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Si,e.lanes=n,e.stateNode={isHidden:!1},e}function ta(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function na(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kg(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Fl(e,t,n,r,s,a,l,i,u){return e=new Kg(e,t,n,i,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sl(a),e}function Yg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vd(e){if(!e)return Nt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return vu(e,n,t)}return t}function hd(e,t,n,r,s,a,l,i,u){return e=Fl(n,r,!0,e,s,a,l,i,u),e.context=vd(null),n=e.current,r=ce(),s=yt(n),a=et(r,s),a.callback=t??null,xt(n,a,s),e.current.lanes=s,ur(e,s,r),xe(e,r),e}function Cs(e,t,n,r){var s=t.current,a=ce(),l=yt(s);return n=vd(n),t.context===null?t.context=n:t.pendingContext=n,t=et(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(s,t,l),e!==null&&(Ae(e,s,l,a),Or(e,s,l)),l}function ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ni(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bl(e,t){ni(e,t),(e=e.alternate)&&ni(e,t)}function Xg(){return null}var xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vl(e){this._internalRoot=e}zs.prototype.render=Vl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Cs(e,t,null,null)};zs.prototype.unmount=Vl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Cs(null,e,null,null)}),t[nt]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ki();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Xi(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ri(){}function Zg(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var c=ps(l);a.call(c)}}var l=hd(t,r,e,0,null,!1,!1,"",ri);return e._reactRootContainer=l,e[nt]=l.current,Jn(e.nodeType===8?e.parentNode:e),It(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var c=ps(u);i.call(c)}}var u=Fl(e,0,!1,null,null,!1,!1,"",ri);return e._reactRootContainer=u,e[nt]=u.current,Jn(e.nodeType===8?e.parentNode:e),It(function(){Cs(t,u,n,r)}),u}function Ts(e,t,n,r,s){var a=n._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var i=s;s=function(){var u=ps(l);i.call(u)}}Cs(t,l,e,s)}else l=Zg(n,t,e,s,r);return ps(l)}Wi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(dl(t,n|1),xe(t,Y()),!(G&6)&&(xn=Y()+500,jt()))}break;case 13:It(function(){var r=rt(e,1);if(r!==null){var s=ce();Ae(r,e,1,s)}}),Bl(e,1)}};cl=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ce();Ae(t,e,134217728,n)}Bl(e,134217728)}};Qi=function(e){if(e.tag===13){var t=yt(e),n=rt(e,t);if(n!==null){var r=ce();Ae(n,e,t,r)}Bl(e,t)}};Ki=function(){return $};Yi=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};ba=function(e,t,n){switch(t){case"input":if(ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=ys(r);if(!s)throw Error(x(90));Ci(r),ga(r,s)}}}break;case"textarea":Ei(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};qi=$l;Oi=It;var Jg={usingClientEntryPoint:!1,Events:[cr,Zt,ys,Ri,Gi,$l]},Pn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ef={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Di(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{vs=Pr.inject(ef),Ue=Pr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(t))throw Error(x(200));return Yg(e,t,null,n)};je.createRoot=function(e,t){if(!Hl(e))throw Error(x(299));var n=!1,r="",s=xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Fl(e,1,!1,null,null,n,!1,r,s),e[nt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Vl(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Di(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return It(e)};je.hydrate=function(e,t,n){if(!Es(t))throw Error(x(200));return Ts(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Hl(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",l=xd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hd(t,null,e,1,n??null,s,!1,a,l),e[nt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new zs(t)};je.render=function(e,t,n){if(!Es(t))throw Error(x(200));return Ts(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Es(e))throw Error(x(40));return e._reactRootContainer?(It(function(){Ts(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};je.unstable_batchedUpdates=$l;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Es(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ts(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bd)}catch(e){console.error(e)}}bd(),bi.exports=je;var tf=bi.exports,si=tf;aa.createRoot=si.createRoot,aa.hydrateRoot=si.hydrateRoot;const nf=`import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ variant = 'default', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={\`glassify-button \${variant} \${className || ''}\`}
      {...props}
    >
      {children}
    </button>
  );
}
`,rf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassAccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  title: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function GlassAccordion({
  glass = 'frosted',
  title,
  isOpen = false,
  onToggle,
  className,
  children,
  ...props
}: GlassAccordionProps) {
  return (
    <div
      className={cn('glass-accordion', isOpen && 'glass-accordion-open', className)}
      data-glass={glass}
      {...props}
    >
      <button
        className="glass-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="glass-accordion-title">{title}</span>
        <span className="glass-accordion-icon" />
      </button>
      <div className="glass-accordion-content-wrapper">
        <div className="glass-accordion-content">{children}</div>
      </div>
    </div>
  );
}
`,sf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  variant?: 'info' | 'warning' | 'error' | 'success';
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

export function GlassAlert({
  glass = 'frosted',
  variant = 'info',
  icon,
  title,
  className,
  children,
  ...props
}: GlassAlertProps) {
  return (
    <div
      className={cn('glass-alert', \`glass-alert-\${variant}\`, className)}
      data-glass={glass}
      role="alert"
      {...props}
    >
      {icon && <div className="glass-alert-icon">{icon}</div>}
      <div className="glass-alert-body">
        {title && <h5 className="glass-alert-title">{title}</h5>}
        <div className="glass-alert-content">{children}</div>
      </div>
    </div>
  );
}
`,af=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  src?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GlassAvatar({
  glass = 'frosted',
  src,
  fallback,
  size = 'md',
  className,
  ...props
}: GlassAvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      className={cn('glass-avatar', \`glass-avatar-\${size}\`, className)}
      data-glass={glass}
      {...props}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={fallback || 'User Avatar'}
          className="glass-avatar-image"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="glass-avatar-fallback">{fallback}</div>
      )}
    </div>
  );
}
`,lf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  variant?: 'default' | 'secondary' | 'outline';
}

export function GlassBadge({
  glass = 'frosted',
  variant = 'default',
  className,
  children,
  ...props
}: GlassBadgeProps) {
  return (
    <span
      className={cn('glass-badge', \`glass-badge-\${variant}\`, className)}
      data-glass={glass}
      {...props}
    >
      {children}
    </span>
  );
}
`,of=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  separator?: React.ReactNode;
}

export function GlassBreadcrumb({
  glass = 'frosted',
  separator = '/',
  className,
  children,
  ...props
}: GlassBreadcrumbProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <nav
      className={cn('glass-breadcrumb', className)}
      data-glass={glass}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="glass-breadcrumb-list">
        {childrenArray.map((child, index) => {
          const isLast = index === childrenArray.length - 1;
          return (
            <React.Fragment key={index}>
              <li className={cn('glass-breadcrumb-item', isLast && 'glass-breadcrumb-item-active')}>
                {child}
              </li>
              {!isLast && (
                <li className="glass-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
`,uf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function GlassButton({
  glass = 'frosted',
  variant = 'solid',
  size = 'md',
  className,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        'glass-button',
        \`glass-button-\${variant}\`,
        \`glass-button-\${size}\`,
        className
      )}
      data-glass={glass}
      {...props}
    >
      <span className="glass-button-content">{children}</span>
    </button>
  );
}
`,df=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
}

export function GlassCalendar({
  glass = 'frosted',
  selectedDate,
  onSelectDate,
  className,
  ...props
}: GlassCalendarProps) {
  // Static visual shell for the calendar (30 days)
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div
      className={cn('glass-calendar', className)}
      data-glass={glass}
      {...props}
    >
      <div className="glass-calendar-header">
        <button className="glass-calendar-nav-btn">&lsaquo;</button>
        <span className="glass-calendar-month-year">June 2026</span>
        <button className="glass-calendar-nav-btn">&rsaquo;</button>
      </div>

      <div className="glass-calendar-grid">
        {weekdays.map((wd) => (
          <span key={wd} className="glass-calendar-weekday">
            {wd}
          </span>
        ))}
        {days.map((day) => {
          const isSelected = day === 15; // default highlight for mock
          return (
            <button
              key={day}
              className={cn(
                'glass-calendar-day',
                isSelected && 'glass-calendar-day-selected'
              )}
              onClick={() => onSelectDate?.(new Date(2026, 5, day))}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
`,cf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function GlassCard({
  glass = 'frosted',
  className,
  header,
  footer,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn('glass-card', className)}
      data-glass={glass}
      {...props}
    >
      {header && <div className="glass-card-header">{header}</div>}
      <div className="glass-card-content">{children}</div>
      {footer && <div className="glass-card-footer">{footer}</div>}
    </div>
  );
}
`,gf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassCheckbox({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassCheckboxProps) {
  const checkboxId = id || \`glass-checkbox-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-checkbox-wrapper', className)}>
      <label htmlFor={checkboxId} className="glass-checkbox-label">
        <input
          type="checkbox"
          id={checkboxId}
          className="glass-checkbox-input"
          data-glass={glass}
          {...props}
        />
        <span className="glass-checkbox-box" data-glass={glass}>
          <svg
            className="glass-checkbox-checkmark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        {label && <span className="glass-checkbox-text">{label}</span>}
      </label>
    </div>
  );
}
`,ff=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassDrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  position?: 'left' | 'right' | 'top' | 'bottom';
  isOpen?: boolean;
  title?: React.ReactNode;
}

export function GlassDrawer({
  glass = 'frosted',
  position = 'right',
  isOpen = false,
  title,
  className,
  children,
  ...props
}: GlassDrawerProps) {
  return (
    <div
      className={cn(
        'glass-drawer',
        \`glass-drawer-\${position}\`,
        isOpen && 'glass-drawer-open',
        className
      )}
      data-glass={glass}
      {...props}
    >
      <div className="glass-drawer-header">
        {title && <h3 className="glass-drawer-title">{title}</h3>}
      </div>
      <div className="glass-drawer-content">{children}</div>
    </div>
  );
}
`,pf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassDropdownMenuItem {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface GlassDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  isOpen?: boolean;
  items: GlassDropdownMenuItem[];
  trigger: React.ReactNode;
}

export function GlassDropdownMenu({
  glass = 'frosted',
  isOpen = false,
  items,
  trigger,
  className,
  ...props
}: GlassDropdownMenuProps) {
  return (
    <div className={cn('glass-dropdown-wrapper', className)} {...props}>
      <div className="glass-dropdown-trigger">{trigger}</div>
      {isOpen && (
        <div className="glass-dropdown-menu" data-glass={glass} role="menu">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="glass-dropdown-item"
              role="menuitem"
              disabled={item.disabled}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
`,mf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
  error?: string;
}

export function GlassInput({
  glass = 'frosted',
  label,
  error,
  className,
  id,
  ...props
}: GlassInputProps) {
  const inputId = id || \`glass-input-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-input-wrapper', className)}>
      {label && (
        <label htmlFor={inputId} className="glass-input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn('glass-input', error && 'glass-input-error')}
        data-glass={glass}
        {...props}
      />
      {error && <span className="glass-input-error-msg">{error}</span>}
    </div>
  );
}
`,vf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  isOpen?: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

export function GlassModal({
  glass = 'frosted',
  isOpen = false,
  title,
  footer,
  onClose,
  className,
  children,
  ...props
}: GlassModalProps) {
  if (!isOpen) return null;

  return (
    <div className="glass-modal-overlay" onClick={onClose}>
      <div
        className={cn('glass-modal-container', className)}
        data-glass={glass}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <div className="glass-modal-header">
          {title && <h3 className="glass-modal-title">{title}</h3>}
          {onClose && (
            <button className="glass-modal-close-btn" onClick={onClose}>
              &times;
            </button>
          )}
        </div>
        <div className="glass-modal-content">{children}</div>
        {footer && <div className="glass-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
`,hf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  brand?: React.ReactNode;
  links?: React.ReactNode;
  actions?: React.ReactNode;
}

export function GlassNavbar({
  glass = 'frosted',
  className,
  brand,
  links,
  actions,
  children,
  ...props
}: GlassNavbarProps) {
  return (
    <header
      className={cn('glass-navbar', className)}
      data-glass={glass}
      {...props}
    >
      <div className="glass-navbar-inner">
        {brand && <div className="glass-navbar-brand">{brand}</div>}
        {links && <nav className="glass-navbar-links">{links}</nav>}
        {children && <div className="glass-navbar-custom">{children}</div>}
        {actions && <div className="glass-navbar-actions">{actions}</div>}
      </div>
    </header>
  );
}
`,xf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassPaginationProps extends React.HTMLAttributes<HTMLElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function GlassPagination({
  glass = 'frosted',
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: GlassPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={cn('glass-pagination', className)}
      data-glass={glass}
      aria-label="Pagination Navigation"
      {...props}
    >
      <button
        className="glass-pagination-btn"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        aria-label="Previous Page"
      >
        &lsaquo;
      </button>

      {pages.map((page) => {
        const isCurrent = page === currentPage;
        return (
          <button
            key={page}
            className={cn('glass-pagination-btn', isCurrent && 'glass-pagination-btn-active')}
            onClick={() => onPageChange?.(page)}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className="glass-pagination-btn"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        aria-label="Next Page"
      >
        &rsaquo;
      </button>
    </nav>
  );
}
`,bf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function GlassPanel({
  glass = 'frosted',
  className,
  title,
  description,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn('glass-panel', className)}
      data-glass={glass}
      {...props}
    >
      {(title || description) && (
        <div className="glass-panel-header">
          {title && <h2 className="glass-panel-title">{title}</h2>}
          {description && <p className="glass-panel-description">{description}</p>}
        </div>
      )}
      <div className="glass-panel-body">{children}</div>
    </div>
  );
}
`,yf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  value?: number; // 0 to 100
}

export function GlassProgress({
  glass = 'frosted',
  value = 0,
  className,
  ...props
}: GlassProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn('glass-progress', className)}
      data-glass={glass}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className="glass-progress-fill"
        data-glass={glass}
        style={{ width: \`\${clampedValue}%\` }}
      />
    </div>
  );
}
`,kf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassRadio({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassRadioProps) {
  const radioId = id || \`glass-radio-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-radio-wrapper', className)}>
      <label htmlFor={radioId} className="glass-radio-label">
        <input
          type="radio"
          id={radioId}
          className="glass-radio-input"
          data-glass={glass}
          {...props}
        />
        <span className="glass-radio-circle" data-glass={glass}>
          <span className="glass-radio-dot" />
        </span>
        {label && <span className="glass-radio-text">{label}</span>}
      </label>
    </div>
  );
}
`,wf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassSelectOption {
  label: string;
  value: string;
}

export interface GlassSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
  error?: string;
  options?: GlassSelectOption[];
}

export function GlassSelect({
  glass = 'frosted',
  label,
  error,
  options = [],
  className,
  id,
  children,
  ...props
}: GlassSelectProps) {
  const selectId = id || \`glass-select-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-select-wrapper', className)}>
      {label && (
        <label htmlFor={selectId} className="glass-select-label">
          {label}
        </label>
      )}
      <div className="glass-select-container">
        <select
          id={selectId}
          className={cn('glass-select', error && 'glass-select-error')}
          data-glass={glass}
          {...props}
        >
          {children ||
            options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </select>
        <span className="glass-select-arrow" />
      </div>
      {error && <span className="glass-select-error-msg">{error}</span>}
    </div>
  );
}
`,Nf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function GlassSidebar({
  glass = 'frosted',
  className,
  header,
  footer,
  children,
  ...props
}: GlassSidebarProps) {
  return (
    <aside
      className={cn('glass-sidebar', className)}
      data-glass={glass}
      {...props}
    >
      {header && <div className="glass-sidebar-header">{header}</div>}
      <div className="glass-sidebar-body">{children}</div>
      {footer && <div className="glass-sidebar-footer">{footer}</div>}
    </aside>
  );
}
`,_f=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassSlider({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassSliderProps) {
  const sliderId = id || \`glass-slider-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-slider-wrapper', className)}>
      {label && (
        <label htmlFor={sliderId} className="glass-slider-label">
          {label}
        </label>
      )}
      <input
        type="range"
        id={sliderId}
        className="glass-slider"
        data-glass={glass}
        {...props}
      />
    </div>
  );
}
`,Sf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  headers?: string[];
}

export function GlassTable({
  glass = 'frosted',
  headers = [],
  className,
  children,
  ...props
}: GlassTableProps) {
  return (
    <div className="glass-table-container" data-glass={glass}>
      <table className={cn('glass-table', className)} {...props}>
        {headers.length > 0 && (
          <thead>
            <tr className="glass-table-header-row">
              {headers.map((h, i) => (
                <th key={i} className="glass-table-header-cell">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="glass-table-body">{children}</tbody>
      </table>
    </div>
  );
}
`,jf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTabItem {
  id: string;
  label: string;
}

export interface GlassTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  items: GlassTabItem[];
  activeTab: string;
  onChangeTab?: (id: string) => void;
}

export function GlassTabs({
  glass = 'frosted',
  items,
  activeTab,
  onChangeTab,
  className,
  ...props
}: GlassTabsProps) {
  return (
    <div
      className={cn('glass-tabs-container', className)}
      data-glass={glass}
      {...props}
    >
      <div className="glass-tabs-list" role="tablist">
        {items.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              className={cn('glass-tabs-trigger', isActive && 'glass-tabs-trigger-active')}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChangeTab?.(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
`,Cf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
  error?: string;
}

export function GlassTextarea({
  glass = 'frosted',
  label,
  error,
  className,
  id,
  ...props
}: GlassTextareaProps) {
  const textareaId = id || \`glass-textarea-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-textarea-wrapper', className)}>
      {label && (
        <label htmlFor={textareaId} className="glass-textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn('glass-textarea', error && 'glass-textarea-error')}
        data-glass={glass}
        {...props}
      />
      {error && <span className="glass-textarea-error-msg">{error}</span>}
    </div>
  );
}
`,zf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  isOpen?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
}

export function GlassToast({
  glass = 'frosted',
  isOpen = false,
  title,
  description,
  onClose,
  className,
  children,
  ...props
}: GlassToastProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn('glass-toast', className)}
      data-glass={glass}
      role="alert"
      {...props}
    >
      <div className="glass-toast-body">
        {title && <div className="glass-toast-title">{title}</div>}
        {description && <div className="glass-toast-description">{description}</div>}
        {children}
      </div>
      {onClose && (
        <button className="glass-toast-close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
      )}
    </div>
  );
}
`,Ef=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassToggle({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassToggleProps) {
  const toggleId = id || \`glass-toggle-\${Math.random().toString(36).substr(2, 9)}\`;

  return (
    <div className={cn('glass-toggle-wrapper', className)}>
      <label htmlFor={toggleId} className="glass-toggle-label">
        <input
          type="checkbox"
          id={toggleId}
          className="glass-toggle-input"
          data-glass={glass}
          {...props}
        />
        <span className="glass-toggle-track" data-glass={glass}>
          <span className="glass-toggle-thumb" data-glass={glass} />
        </span>
        {label && <span className="glass-toggle-text">{label}</span>}
      </label>
    </div>
  );
}
`,Tf=`import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function GlassTooltip({
  glass = 'frosted',
  content,
  position = 'top',
  className,
  children,
  ...props
}: GlassTooltipProps) {
  return (
    <div className={cn('glass-tooltip-wrapper', className)} {...props}>
      {children}
      <div
        className={cn('glass-tooltip-bubble', \`glass-tooltip-\${position}\`)}
        data-glass={glass}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
}
`,Pf=`.glass-accordion {
  border-radius: var(--glass-radius);
  font-family: var(--glass-font-sans);
  color: var(--glass-text);
  overflow: hidden;
  box-sizing: border-box;
}

/* Glass Variants */
.glass-accordion[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 4px 12px var(--glass-shadow-frosted);
}

.glass-accordion[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 4px 12px var(--glass-shadow-liquid);
}

.glass-accordion[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
}

.glass-accordion-trigger {
  width: 100%;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--glass-text);
  font-weight: 500;
  text-align: left;
  outline: none;
  transition: opacity var(--glass-speed-fast) ease;
}

.glass-accordion-trigger:hover {
  opacity: 0.85;
}

.glass-accordion-title {
  font-size: 0.95rem;
}

.glass-accordion-icon {
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--glass-text);
  border-bottom: 2px solid var(--glass-text);
  transform: rotate(45deg);
  transition: transform var(--glass-speed-normal) ease;
  margin-right: 0.25rem;
}

.glass-accordion-open .glass-accordion-icon {
  transform: rotate(-135deg);
}

.glass-accordion-content-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--glass-speed-normal) ease-out;
}

.glass-accordion-open .glass-accordion-content-wrapper {
  max-height: 500px; /* arbitrary height to slide down */
}

.glass-accordion-content {
  padding: 0 1.25rem 1.25rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--glass-text-muted);
}
`,Mf=`.glass-alert {
  padding: 1rem;
  border-radius: var(--glass-radius);
  display: flex;
  gap: 0.75rem;
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
}

/* Glass Variants */
.glass-alert[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
}

.glass-alert[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
}

.glass-alert[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
}

/* Alert Variants (Coloring & Accents) */
.glass-alert-info {
  border-left: 4px solid #3399ff !important;
  color: var(--glass-text);
}

.glass-alert-warning {
  border-left: 4px solid #ffcc00 !important;
  color: var(--glass-text);
}

.glass-alert-error {
  border-left: 4px solid #ff3333 !important;
  color: var(--glass-text);
}

.glass-alert-success {
  border-left: 4px solid #00cc66 !important;
  color: var(--glass-text);
}

.glass-alert-icon {
  display: flex;
  align-items: flex-start;
  margin-top: 0.1rem;
  flex-shrink: 0;
  font-size: 1.15rem;
}

.glass-alert-body {
  flex: 1;
}

.glass-alert-title {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.glass-alert-content {
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.9;
}
`,Lf=`.glass-avatar {
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border: var(--glass-border-width) solid transparent;
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
  font-weight: 600;
  color: var(--glass-text);
}

/* Sizes */
.glass-avatar-sm {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
}

.glass-avatar-md {
  width: 44px;
  height: 44px;
  font-size: 0.9rem;
}

.glass-avatar-lg {
  width: 60px;
  height: 60px;
  font-size: 1.2rem;
}

/* Glass Variants */
.glass-avatar[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-frosted);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.glass-avatar[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}

.glass-avatar[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border-color: var(--glass-border-matte);
}

.glass-avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.glass-avatar-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}
`,Rf=`.glass-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  font-family: var(--glass-font-sans);
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  line-height: 1;
  box-sizing: border-box;
  border: var(--glass-border-width) solid transparent;
}

/* Glass Variants */
.glass-badge[data-glass="frosted"] {
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
}
.glass-badge[data-glass="frosted"].glass-badge-default {
  background: var(--glass-primary);
  color: #ffffff;
}
.glass-badge[data-glass="frosted"].glass-badge-secondary {
  background: var(--glass-bg-frosted);
  border-color: var(--glass-border-frosted);
  color: var(--glass-text);
}
.glass-badge[data-glass="frosted"].glass-badge-outline {
  border-color: var(--glass-text);
  color: var(--glass-text);
}

.glass-badge[data-glass="liquid"] {
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
}
.glass-badge[data-glass="liquid"].glass-badge-default {
  background: var(--glass-bg-liquid);
  border-color: var(--glass-border-liquid);
  color: var(--glass-text);
}
.glass-badge[data-glass="liquid"].glass-badge-secondary {
  background: var(--glass-primary);
  border-color: var(--glass-border-liquid);
  color: var(--glass-text);
}
.glass-badge[data-glass="liquid"].glass-badge-outline {
  border-color: var(--glass-border-liquid);
  color: var(--glass-text);
}

.glass-badge[data-glass="matte"] {
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
}
.glass-badge[data-glass="matte"].glass-badge-default {
  background: var(--glass-text);
  color: var(--glass-text-inverse);
}
.glass-badge[data-glass="matte"].glass-badge-secondary {
  background: var(--glass-bg-matte);
  border-color: var(--glass-border-matte);
  color: var(--glass-text);
}
.glass-badge[data-glass="matte"].glass-badge-outline {
  border-color: var(--glass-border-matte);
  color: var(--glass-text);
}
`,Gf=`.glass-breadcrumb {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: var(--glass-radius);
  font-family: var(--glass-font-sans);
  box-sizing: border-box;
}

/* Glass Variants */
.glass-breadcrumb[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
}

.glass-breadcrumb[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
}

.glass-breadcrumb[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
}

.glass-breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 0.875rem;
}

.glass-breadcrumb-item {
  display: flex;
  align-items: center;
}

.glass-breadcrumb-item a {
  color: var(--glass-text);
  text-decoration: none;
  opacity: 0.7;
  transition: opacity var(--glass-speed-fast) ease;
}

.glass-breadcrumb-item a:hover {
  opacity: 1;
}

.glass-breadcrumb-item-active {
  color: var(--glass-text);
  font-weight: 600;
  pointer-events: none;
}

.glass-breadcrumb-separator {
  color: var(--glass-text-muted);
  opacity: 0.5;
  user-select: none;
}
`,qf=`.glass-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--glass-radius);
  font-family: var(--glass-font-sans);
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: var(--glass-border-width) solid transparent;
  transition: all var(--glass-speed-normal) ease;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.glass-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Sizes */
.glass-button-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.825rem;
}

.glass-button-md {
  padding: 0.55rem 1.1rem;
  font-size: 0.925rem;
}

.glass-button-lg {
  padding: 0.7rem 1.4rem;
  font-size: 1.05rem;
}

/* Glass & Variant Combinations */

/* Frosted */
.glass-button[data-glass="frosted"] {
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  box-shadow: 0 4px 12px var(--glass-shadow-frosted);
}
.glass-button[data-glass="frosted"].glass-button-solid {
  background: var(--glass-primary);
  color: #ffffff;
}
.glass-button[data-glass="frosted"].glass-button-solid:hover {
  background: var(--glass-primary-hover);
}
.glass-button[data-glass="frosted"].glass-button-outline {
  background: var(--glass-bg-frosted);
  border-color: var(--glass-border-frosted);
  color: var(--glass-text);
}
.glass-button[data-glass="frosted"].glass-button-outline:hover {
  background: var(--glass-primary-hover);
}
.glass-button[data-glass="frosted"].glass-button-ghost {
  background: transparent;
  color: var(--glass-text);
}
.glass-button[data-glass="frosted"].glass-button-ghost:hover {
  background: var(--glass-bg-frosted);
}

/* Liquid */
.glass-button[data-glass="liquid"] {
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  box-shadow: 0 4px 12px var(--glass-shadow-liquid);
}
.glass-button[data-glass="liquid"].glass-button-solid {
  background: var(--glass-bg-liquid);
  color: var(--glass-text);
  border-color: var(--glass-border-liquid);
}
.glass-button[data-glass="liquid"].glass-button-solid:hover {
  box-shadow: 0 0 12px var(--glass-primary);
}
.glass-button[data-glass="liquid"].glass-button-outline {
  background: transparent;
  border-color: var(--glass-border-liquid);
  color: var(--glass-text);
}
.glass-button[data-glass="liquid"].glass-button-outline:hover {
  background: var(--glass-bg-liquid);
}
.glass-button[data-glass="liquid"].glass-button-ghost {
  background: transparent;
  color: var(--glass-text);
}
.glass-button[data-glass="liquid"].glass-button-ghost:hover {
  background: var(--glass-primary);
  box-shadow: inset 0 0 8px var(--glass-primary);
}

/* Matte */
.glass-button[data-glass="matte"] {
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  box-shadow: 0 2px 6px var(--glass-shadow-matte);
}
.glass-button[data-glass="matte"].glass-button-solid {
  background: var(--glass-text);
  color: var(--glass-text-inverse);
}
.glass-button[data-glass="matte"].glass-button-solid:hover {
  opacity: 0.9;
}
.glass-button[data-glass="matte"].glass-button-outline {
  background: var(--glass-bg-matte);
  border-color: var(--glass-border-matte);
  color: var(--glass-text);
}
.glass-button[data-glass="matte"].glass-button-outline:hover {
  background: rgba(0, 0, 0, 0.05);
}
.glass-button[data-glass="matte"].glass-button-ghost {
  background: transparent;
  color: var(--glass-text);
}
.glass-button[data-glass="matte"].glass-button-ghost:hover {
  background: var(--glass-bg-matte);
}
`,Of=`.glass-calendar {
  width: 280px;
  padding: 1rem;
  border-radius: var(--glass-radius);
  font-family: var(--glass-font-sans);
  color: var(--glass-text);
  box-sizing: border-box;
}

/* Glass Variants */
.glass-calendar[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 8px 32px 0 var(--glass-shadow-frosted);
}

.glass-calendar[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 8px 32px 0 var(--glass-shadow-liquid);
}

.glass-calendar[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 4px 16px 0 var(--glass-shadow-matte);
}

.glass-calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
}

.glass-calendar-month-year {
  font-size: 0.9rem;
  font-weight: 600;
}

.glass-calendar-nav-btn {
  background: transparent;
  border: none;
  font-size: 1.15rem;
  cursor: pointer;
  color: var(--glass-text);
  opacity: 0.7;
  transition: opacity var(--glass-speed-fast) ease;
  line-height: 1;
}

.glass-calendar-nav-btn:hover {
  opacity: 1;
}

.glass-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  text-align: center;
}

.glass-calendar-weekday {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--glass-text-muted);
  padding-bottom: 0.25rem;
}

.glass-calendar-day {
  background: transparent;
  border: none;
  font-size: 0.825rem;
  padding: 0.4rem 0;
  border-radius: var(--glass-radius);
  cursor: pointer;
  color: var(--glass-text);
  transition: all var(--glass-speed-fast) ease;
  outline: none;
}

.glass-calendar-day:hover {
  background: var(--glass-primary);
}

.glass-calendar[data-glass="frosted"] .glass-calendar-day:hover {
  background: rgba(0, 0, 0, 0.05);
}

.glass-calendar-day-selected {
  background: var(--glass-primary) !important;
  color: #ffffff !important;
  font-weight: 600;
}

.glass-calendar[data-glass="liquid"] .glass-calendar-day-selected {
  background: var(--glass-text) !important;
  color: var(--glass-text-inverse) !important;
}

.glass-calendar[data-glass="matte"] .glass-calendar-day-selected {
  background: var(--glass-text) !important;
  color: var(--glass-text-inverse) !important;
}
`,$f=`.glass-card {
  border-radius: var(--glass-radius);
  color: var(--glass-text);
  font-family: var(--glass-font-sans);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.glass-card[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 8px 32px 0 var(--glass-shadow-frosted);
}

.glass-card[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 8px 32px 0 var(--glass-shadow-liquid);
}

.glass-card[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 4px 16px 0 var(--glass-shadow-matte);
}

.glass-card-header {
  padding: 1.25rem;
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
  font-weight: 600;
  font-size: 1.125rem;
}

.glass-card-content {
  padding: 1.25rem;
  flex: 1;
}

.glass-card-footer {
  padding: 1rem 1.25rem;
  border-top: var(--glass-border-width) solid var(--glass-border-frosted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
`,If=`.glass-checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  font-family: var(--glass-font-sans);
}

.glass-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  color: var(--glass-text);
  font-size: 0.95rem;
}

.glass-checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.glass-checkbox-box {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--glass-speed-normal) ease;
  border: var(--glass-border-width) solid transparent;
  box-sizing: border-box;
}

/* Checkmark logic */
.glass-checkbox-checkmark {
  width: 12px;
  height: 12px;
  transform: scale(0);
  opacity: 0;
  transition: transform var(--glass-speed-fast) ease, opacity var(--glass-speed-fast) ease;
  color: var(--glass-text-inverse);
}

.glass-checkbox-input:checked ~ .glass-checkbox-box .glass-checkbox-checkmark {
  transform: scale(1);
  opacity: 1;
}

/* Glass Variants */
.glass-checkbox-box[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-frosted);
}
.glass-checkbox-input:checked ~ .glass-checkbox-box[data-glass="frosted"] {
  background: var(--glass-primary);
  border-color: var(--glass-primary);
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.3);
}

.glass-checkbox-box[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}
.glass-checkbox-input:checked ~ .glass-checkbox-box[data-glass="liquid"] {
  background: var(--glass-text);
  border-color: var(--glass-text);
  box-shadow: 0 2px 8px var(--glass-shadow-liquid);
}
.glass-checkbox-input:checked ~ .glass-checkbox-box[data-glass="liquid"] .glass-checkbox-checkmark {
  color: var(--glass-text-inverse);
}

.glass-checkbox-box[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-matte);
}
.glass-checkbox-input:checked ~ .glass-checkbox-box[data-glass="matte"] {
  background: var(--glass-text);
  border-color: var(--glass-text);
}
.glass-checkbox-input:checked ~ .glass-checkbox-box[data-glass="matte"] .glass-checkbox-checkmark {
  color: var(--glass-text-inverse);
}
`,Df=`.glass-drawer {
  position: fixed;
  z-index: 200;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
  transition: transform var(--glass-speed-normal) ease;
  visibility: hidden;
}

.glass-drawer.glass-drawer-open {
  visibility: visible;
  transform: translate(0, 0) !important;
}

/* Positions */
.glass-drawer-left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  transform: translateX(-100%);
}

.glass-drawer-right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  transform: translateX(100%);
}

.glass-drawer-top {
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  transform: translateY(-100%);
}

.glass-drawer-bottom {
  left: 0;
  right: 0;
  bottom: 0;
  height: 300px;
  transform: translateY(100%);
}

/* Glass Variants */
.glass-drawer[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 10px 40px 0 var(--glass-shadow-frosted);
}

.glass-drawer[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 10px 40px 0 var(--glass-shadow-liquid);
}

.glass-drawer[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 6px 20px 0 var(--glass-shadow-matte);
}

.glass-drawer-header {
  padding: 1.25rem;
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
}

.glass-drawer-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--glass-text);
}

.glass-drawer-content {
  padding: 1.25rem;
  flex: 1;
  overflow-y: auto;
  color: var(--glass-text);
}
`,Af=`.glass-dropdown-wrapper {
  position: relative;
  display: inline-flex;
}

.glass-dropdown-trigger {
  display: inline-flex;
}

.glass-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.35rem;
  z-index: 400;
  min-width: 160px;
  padding: 0.25rem;
  border-radius: var(--glass-radius);
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

/* Glass Variants */
.glass-dropdown-menu[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.glass-dropdown-menu[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 4px 12px var(--glass-shadow-liquid);
}

.glass-dropdown-menu[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 2px 6px var(--glass-shadow-matte);
}

.glass-dropdown-item {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  text-align: left;
  border: none;
  background: transparent;
  color: var(--glass-text);
  cursor: pointer;
  border-radius: calc(var(--glass-radius) - 2px);
  transition: all var(--glass-speed-fast) ease;
  outline: none;
}

.glass-dropdown-item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.glass-dropdown-item:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
}

.glass-dropdown-menu[data-glass="frosted"] .glass-dropdown-item:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.05);
}

.glass-dropdown-menu[data-glass="liquid"] .glass-dropdown-item:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.25);
}
`,Ff=`.glass-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: var(--glass-font-sans);
  width: 100%;
  box-sizing: border-box;
}

.glass-input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--glass-text);
}

.glass-input {
  width: 100%;
  padding: 0.6rem 0.9rem;
  font-size: 0.95rem;
  border-radius: var(--glass-radius);
  color: var(--glass-text);
  box-sizing: border-box;
  outline: none;
  transition: all var(--glass-speed-normal) ease;
  background: transparent;
  border: var(--glass-border-width) solid transparent;
}

.glass-input::placeholder {
  color: var(--glass-text-muted);
  opacity: 0.7;
}

/* Glass Variants */
.glass-input[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border-color: var(--glass-border-frosted);
}
.glass-input[data-glass="frosted"]:focus {
  border-color: var(--glass-primary);
  box-shadow: 0 0 8px rgba(0, 102, 204, 0.25);
}

.glass-input[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}
.glass-input[data-glass="liquid"]:focus {
  border-color: var(--glass-border-liquid);
  box-shadow: 0 0 10px var(--glass-shadow-liquid);
}

.glass-input[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-matte);
}
.glass-input[data-glass="matte"]:focus {
  border-color: var(--glass-text);
  box-shadow: 0 0 4px var(--glass-shadow-matte);
}

/* Error State */
.glass-input.glass-input-error {
  border-color: rgba(239, 68, 68, 0.8) !important;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.25) !important;
}

.glass-input-error-msg {
  font-size: 0.75rem;
  color: rgba(239, 68, 68, 0.9);
}
`,Bf=`.glass-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
}

.glass-modal-container {
  width: 100%;
  max-width: 500px;
  border-radius: calc(var(--glass-radius) * 1.5);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
  overflow: hidden;
  animation: glass-modal-in var(--glass-speed-normal) cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes glass-modal-in {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Glass Variants */
.glass-modal-container[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 20px 50px 0 var(--glass-shadow-frosted);
}

.glass-modal-container[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite, glass-modal-in var(--glass-speed-normal) cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 20px 50px 0 var(--glass-shadow-liquid);
}

.glass-modal-container[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 10px 30px 0 var(--glass-shadow-matte);
}

.glass-modal-header {
  padding: 1.25rem 1.5rem;
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.glass-modal-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--glass-text);
}

.glass-modal-close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--glass-text);
  opacity: 0.6;
  transition: opacity var(--glass-speed-fast) ease;
}

.glass-modal-close-btn:hover {
  opacity: 1;
}

.glass-modal-content {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: 60vh;
  color: var(--glass-text);
  line-height: 1.5;
}

.glass-modal-footer {
  padding: 1rem 1.5rem;
  border-top: var(--glass-border-width) solid var(--glass-border-frosted);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
}
`,Vf=`.glass-navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
}

.glass-navbar[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 4px 20px 0 var(--glass-shadow-frosted);
}

.glass-navbar[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border-bottom: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 4px 20px 0 var(--glass-shadow-liquid);
}

.glass-navbar[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-bottom: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 2px 10px 0 var(--glass-shadow-matte);
}

.glass-navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.glass-navbar-brand {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--glass-text);
}

.glass-navbar-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.glass-navbar-links a {
  color: var(--glass-text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity var(--glass-speed-fast) ease;
}

.glass-navbar-links a:hover {
  opacity: 1;
}

.glass-navbar-custom {
  flex: 1;
  display: flex;
  align-items: center;
}

.glass-navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
`,Hf=`.glass-pagination {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--glass-font-sans);
  box-sizing: border-box;
}

.glass-pagination-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 0.4rem;
  border-radius: var(--glass-radius);
  border: var(--glass-border-width) solid transparent;
  background: transparent;
  color: var(--glass-text);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--glass-speed-normal) ease;
  outline: none;
}

.glass-pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Glass Variants */
.glass-pagination[data-glass="frosted"] .glass-pagination-btn {
  background: var(--glass-bg-frosted);
  border-color: var(--glass-border-frosted);
}
.glass-pagination[data-glass="frosted"] .glass-pagination-btn:hover:not(:disabled) {
  background: var(--glass-primary-hover);
}
.glass-pagination[data-glass="frosted"] .glass-pagination-btn-active {
  background: var(--glass-text) !important;
  border-color: var(--glass-text) !important;
  color: var(--glass-text-inverse) !important;
}

.glass-pagination[data-glass="liquid"] .glass-pagination-btn {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  border-color: var(--glass-border-liquid);
}
.glass-pagination[data-glass="liquid"] .glass-pagination-btn:hover:not(:disabled) {
  opacity: 0.85;
}
.glass-pagination[data-glass="liquid"] .glass-pagination-btn-active {
  background: var(--glass-text) !important;
  border-color: var(--glass-text) !important;
  color: var(--glass-text-inverse) !important;
}

.glass-pagination[data-glass="matte"] .glass-pagination-btn {
  background: var(--glass-bg-matte);
  border-color: var(--glass-border-matte);
}
.glass-pagination[data-glass="matte"] .glass-pagination-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.05);
}
.glass-pagination[data-glass="matte"] .glass-pagination-btn-active {
  background: var(--glass-text) !important;
  border-color: var(--glass-text) !important;
  color: var(--glass-text-inverse) !important;
}
`,Uf=`.glass-panel {
  padding: 1.5rem;
  border-radius: calc(var(--glass-radius) * 1.5);
  color: var(--glass-text);
  font-family: var(--glass-font-sans);
  box-sizing: border-box;
}

.glass-panel[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 10px 40px 0 var(--glass-shadow-frosted);
}

.glass-panel[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 10px 40px 0 var(--glass-shadow-liquid);
}

.glass-panel[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 6px 20px 0 var(--glass-shadow-matte);
}

.glass-panel-header {
  margin-bottom: 1.25rem;
}

.glass-panel-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.glass-panel-description {
  margin: 0.25rem 0 0 0;
  font-size: 0.875rem;
  color: var(--glass-text-muted);
}

.glass-panel-body {
  font-size: 1rem;
  line-height: 1.5;
}
`,Wf=`.glass-progress {
  width: 100%;
  height: 8px;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}

.glass-progress-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width var(--glass-speed-normal) ease;
}

/* Glass Variants (Track) */
.glass-progress[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
}
.glass-progress-fill[data-glass="frosted"] {
  background: var(--glass-primary);
}

.glass-progress[data-glass="liquid"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
}
.glass-progress-fill[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
}

.glass-progress[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
}
.glass-progress-fill[data-glass="matte"] {
  background: var(--glass-text);
}
`,Qf=`.glass-radio-wrapper {
  display: inline-flex;
  align-items: center;
  font-family: var(--glass-font-sans);
}

.glass-radio-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  color: var(--glass-text);
  font-size: 0.95rem;
}

.glass-radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.glass-radio-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--glass-speed-normal) ease;
  border: var(--glass-border-width) solid transparent;
  box-sizing: border-box;
}

.glass-radio-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  transition: transform var(--glass-speed-fast) ease, background var(--glass-speed-fast) ease;
  transform: scale(0);
}

.glass-radio-input:checked ~ .glass-radio-circle .glass-radio-dot {
  transform: scale(1);
  background: #ffffff;
}

/* Glass Variants */
.glass-radio-circle[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-frosted);
}
.glass-radio-input:checked ~ .glass-radio-circle[data-glass="frosted"] {
  background: var(--glass-primary);
  border-color: var(--glass-primary);
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.3);
}

.glass-radio-circle[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}
.glass-radio-input:checked ~ .glass-radio-circle[data-glass="liquid"] {
  background: var(--glass-text);
  border-color: var(--glass-text);
  box-shadow: 0 2px 8px var(--glass-shadow-liquid);
}
.glass-radio-input:checked ~ .glass-radio-circle[data-glass="liquid"] .glass-radio-dot {
  background: var(--glass-bg-matte);
}

.glass-radio-circle[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-matte);
}
.glass-radio-input:checked ~ .glass-radio-circle[data-glass="matte"] {
  background: var(--glass-text);
  border-color: var(--glass-text);
}
.glass-radio-input:checked ~ .glass-radio-circle[data-glass="matte"] .glass-radio-dot {
  background: var(--glass-bg-matte);
}
`,Kf=`.glass-select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: var(--glass-font-sans);
  width: 100%;
  box-sizing: border-box;
}

.glass-select-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--glass-text);
}

.glass-select-container {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.glass-select {
  width: 100%;
  padding: 0.6rem 2rem 0.6rem 0.9rem;
  font-size: 0.95rem;
  border-radius: var(--glass-radius);
  color: var(--glass-text);
  box-sizing: border-box;
  outline: none;
  transition: all var(--glass-speed-normal) ease;
  background: transparent;
  border: var(--glass-border-width) solid transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.glass-select option {
  background: var(--glass-bg-frosted);
  color: var(--glass-text);
}

/* Glass Variants */
.glass-select[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border-color: var(--glass-border-frosted);
}
.glass-select[data-glass="frosted"]:focus {
  border-color: var(--glass-primary);
  box-shadow: 0 0 8px rgba(0, 102, 204, 0.25);
}

.glass-select[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}
.glass-select[data-glass="liquid"]:focus {
  border-color: var(--glass-border-liquid);
  box-shadow: 0 0 10px var(--glass-shadow-liquid);
}

.glass-select[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-matte);
}
.glass-select[data-glass="matte"]:focus {
  border-color: var(--glass-text);
  box-shadow: 0 0 4px var(--glass-shadow-matte);
}

/* Error State */
.glass-select.glass-select-error {
  border-color: rgba(239, 68, 68, 0.8) !important;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.25) !important;
}

.glass-select-error-msg {
  font-size: 0.75rem;
  color: rgba(239, 68, 68, 0.9);
}

/* Custom Arrow indicator */
.glass-select-arrow {
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  pointer-events: none;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--glass-text);
  opacity: 0.7;
}
`,Yf=`.glass-sidebar {
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
}

.glass-sidebar[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border-right: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 4px 0 20px 0 var(--glass-shadow-frosted);
}

.glass-sidebar[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border-right: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 4px 0 20px 0 var(--glass-shadow-liquid);
}

.glass-sidebar[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-right: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 2px 0 10px 0 var(--glass-shadow-matte);
}

.glass-sidebar-header {
  padding: 1.5rem;
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
}

.glass-sidebar-body {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.glass-sidebar-footer {
  padding: 1.5rem;
  border-top: var(--glass-border-width) solid var(--glass-border-frosted);
}
`,Xf=`.glass-slider-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: var(--glass-font-sans);
  width: 100%;
  box-sizing: border-box;
}

.glass-slider-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--glass-text);
}

.glass-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  outline: none;
  background: transparent;
  box-sizing: border-box;
}

/* Custom Track */
.glass-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 3px;
  border: var(--glass-border-width) solid transparent;
}
.glass-slider[data-glass="frosted"]::-webkit-slider-runnable-track {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-frosted);
}
.glass-slider[data-glass="liquid"]::-webkit-slider-runnable-track {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  border-color: var(--glass-border-liquid);
}
.glass-slider[data-glass="matte"]::-webkit-slider-runnable-track {
  background: var(--glass-bg-matte);
  border-color: var(--glass-border-matte);
}

/* Custom Thumb */
.glass-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -7px;
  border: var(--glass-border-width) solid transparent;
  transition: transform var(--glass-speed-fast) ease, box-shadow var(--glass-speed-fast) ease;
}

.glass-slider[data-glass="frosted"]::-webkit-slider-thumb {
  background: #ffffff;
  border-color: var(--glass-border-frosted);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.glass-slider[data-glass="frosted"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 0 10px var(--glass-primary);
}

.glass-slider[data-glass="liquid"]::-webkit-slider-thumb {
  background: var(--glass-text);
  border-color: var(--glass-border-liquid);
  box-shadow: 0 2px 6px var(--glass-shadow-liquid);
}
.glass-slider[data-glass="liquid"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

.glass-slider[data-glass="matte"]::-webkit-slider-thumb {
  background: var(--glass-text);
  border-color: var(--glass-border-matte);
}
.glass-slider[data-glass="matte"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

/* Firefox support */
.glass-slider::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 3px;
  border: var(--glass-border-width) solid transparent;
}
.glass-slider[data-glass="frosted"]::-moz-range-track {
  background: var(--glass-bg-frosted);
  border-color: var(--glass-border-frosted);
}
.glass-slider[data-glass="liquid"]::-moz-range-track {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  border-color: var(--glass-border-liquid);
}
.glass-slider[data-glass="matte"]::-moz-range-track {
  background: var(--glass-bg-matte);
  border-color: var(--glass-border-matte);
}

.glass-slider::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  cursor: pointer;
  border: var(--glass-border-width) solid transparent;
  transition: transform var(--glass-speed-fast) ease, box-shadow var(--glass-speed-fast) ease;
}
.glass-slider[data-glass="frosted"]::-moz-range-thumb {
  background: #ffffff;
  border-color: var(--glass-border-frosted);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.glass-slider[data-glass="liquid"]::-moz-range-thumb {
  background: var(--glass-text);
  border-color: var(--glass-border-liquid);
}
.glass-slider[data-glass="matte"]::-moz-range-thumb {
  background: var(--glass-text);
  border-color: var(--glass-border-matte);
}
`,Zf=`.glass-table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: var(--glass-radius);
  box-sizing: border-box;
}

/* Glass Variants for container wrapper */
.glass-table-container[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-frosted);
  -webkit-backdrop-filter: var(--glass-filter-frosted);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 8px 32px 0 var(--glass-shadow-frosted);
}

.glass-table-container[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 8px 32px 0 var(--glass-shadow-liquid);
}

.glass-table-container[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 4px 16px 0 var(--glass-shadow-matte);
}

.glass-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--glass-font-sans);
  color: var(--glass-text);
  font-size: 0.925rem;
}

.glass-table-header-row {
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
}

.glass-table-header-cell {
  padding: 0.9rem 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--glass-text);
  font-size: 0.875rem;
}

.glass-table-body tr {
  border-bottom: var(--glass-border-width) solid var(--glass-border-frosted);
  transition: background-color var(--glass-speed-fast) ease;
}

.glass-table-body tr:last-child {
  border-bottom: none;
}

.glass-table-body tr:hover {
  background-color: var(--glass-primary-hover);
}

.glass-table-body td {
  padding: 0.9rem 1rem;
}
`,Jf=`.glass-tabs-container {
  display: inline-flex;
  padding: 0.25rem;
  border-radius: var(--glass-radius);
  font-family: var(--glass-font-sans);
  box-sizing: border-box;
}

/* Glass Variants (Container) */
.glass-tabs-container[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
}

.glass-tabs-container[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
}

.glass-tabs-container[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
}

.glass-tabs-list {
  display: flex;
  gap: 0.25rem;
}

.glass-tabs-trigger {
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: calc(var(--glass-radius) - 2px);
  border: none;
  background: transparent;
  color: var(--glass-text);
  cursor: pointer;
  transition: all var(--glass-speed-normal) ease;
  outline: none;
}

.glass-tabs-trigger:hover {
  opacity: 0.85;
}

/* Active State Styling */
.glass-tabs-container[data-glass="frosted"] .glass-tabs-trigger-active {
  background: var(--glass-primary-hover);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.glass-tabs-container[data-glass="liquid"] .glass-tabs-trigger-active {
  background: var(--glass-text);
  color: var(--glass-text-inverse);
}

.glass-tabs-container[data-glass="matte"] .glass-tabs-trigger-active {
  background: var(--glass-text);
  color: var(--glass-text-inverse);
}
`,ep=`.glass-textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: var(--glass-font-sans);
  width: 100%;
  box-sizing: border-box;
}

.glass-textarea-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--glass-text);
}

.glass-textarea {
  width: 100%;
  padding: 0.6rem 0.9rem;
  font-size: 0.95rem;
  border-radius: var(--glass-radius);
  color: var(--glass-text);
  box-sizing: border-box;
  outline: none;
  transition: all var(--glass-speed-normal) ease;
  background: transparent;
  border: var(--glass-border-width) solid transparent;
  min-height: 100px;
  resize: vertical;
}

.glass-textarea::placeholder {
  color: var(--glass-text-muted);
  opacity: 0.7;
}

/* Glass Variants */
.glass-textarea[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border-color: var(--glass-border-frosted);
}
.glass-textarea[data-glass="frosted"]:focus {
  border-color: var(--glass-primary);
  box-shadow: 0 0 8px rgba(0, 102, 204, 0.25);
}

.glass-textarea[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}
.glass-textarea[data-glass="liquid"]:focus {
  border-color: var(--glass-border-liquid);
  box-shadow: 0 0 10px var(--glass-shadow-liquid);
}

.glass-textarea[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-matte);
}
.glass-textarea[data-glass="matte"]:focus {
  border-color: var(--glass-text);
  box-shadow: 0 0 4px var(--glass-shadow-matte);
}

/* Error State */
.glass-textarea.glass-textarea-error {
  border-color: rgba(239, 68, 68, 0.8) !important;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.25) !important;
}

.glass-textarea-error-msg {
  font-size: 0.75rem;
  color: rgba(239, 68, 68, 0.9);
}
`,tp=`.glass-toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 600;
  width: 320px;
  max-width: 100vw;
  padding: 1rem;
  border-radius: var(--glass-radius);
  box-sizing: border-box;
  font-family: var(--glass-font-sans);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  animation: glass-toast-slide-in var(--glass-speed-normal) cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes glass-toast-slide-in {
  from {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* Glass Variants */
.glass-toast[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-liquid);
  -webkit-backdrop-filter: var(--glass-filter-liquid);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 10px 30px 0 var(--glass-shadow-frosted);
}

.glass-toast[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite, glass-toast-slide-in var(--glass-speed-normal) cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 10px 30px 0 var(--glass-shadow-liquid);
}

.glass-toast[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
  box-shadow: 0 5px 15px 0 var(--glass-shadow-matte);
}

.glass-toast-body {
  flex: 1;
}

.glass-toast-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--glass-text);
  margin-bottom: 0.2rem;
}

.glass-toast-description {
  font-size: 0.8rem;
  color: var(--glass-text-muted);
  line-height: 1.4;
}

.glass-toast-close-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--glass-text);
  opacity: 0.5;
  transition: opacity var(--glass-speed-fast) ease;
  line-height: 1;
  padding: 0;
}

.glass-toast-close-btn:hover {
  opacity: 1;
}
`,np=`.glass-toggle-wrapper {
  display: inline-flex;
  align-items: center;
  font-family: var(--glass-font-sans);
}

.glass-toggle-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  color: var(--glass-text);
  font-size: 0.95rem;
}

.glass-toggle-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.glass-toggle-track {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  display: inline-block;
  position: relative;
  transition: all var(--glass-speed-normal) ease;
  border: var(--glass-border-width) solid transparent;
  box-sizing: border-box;
}

.glass-toggle-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  top: 2px;
  transition: transform var(--glass-speed-normal) ease, background var(--glass-speed-normal) ease, box-shadow var(--glass-speed-normal) ease;
  box-sizing: border-box;
}

.glass-toggle-input:checked ~ .glass-toggle-track .glass-toggle-thumb {
  transform: translateX(20px);
}

/* Glass Variants (Track) */
.glass-toggle-track[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-frosted);
}
.glass-toggle-input:checked ~ .glass-toggle-track[data-glass="frosted"] {
  background: var(--glass-primary);
  border-color: var(--glass-primary);
}

.glass-toggle-track[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-liquid);
}
.glass-toggle-input:checked ~ .glass-toggle-track[data-glass="liquid"] {
  background: var(--glass-text);
  border-color: var(--glass-text);
}

.glass-toggle-track[data-glass="matte"] {
  background: var(--glass-bg-matte);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border-color: var(--glass-border-matte);
}
.glass-toggle-input:checked ~ .glass-toggle-track[data-glass="matte"] {
  background: var(--glass-text);
  border-color: var(--glass-text);
}

/* Thumb details per variant */
.glass-toggle-thumb[data-glass="frosted"] {
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
.glass-toggle-input:checked ~ .glass-toggle-track .glass-toggle-thumb[data-glass="frosted"] {
  background: #ffffff;
}

.glass-toggle-thumb[data-glass="liquid"] {
  background: var(--glass-text);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
.glass-toggle-input:checked ~ .glass-toggle-track .glass-toggle-thumb[data-glass="liquid"] {
  background: var(--glass-bg-matte);
}

.glass-toggle-thumb[data-glass="matte"] {
  background: var(--glass-text);
}
.glass-toggle-input:checked ~ .glass-toggle-track .glass-toggle-thumb[data-glass="matte"] {
  background: var(--glass-bg-matte);
}
`,rp=`.glass-tooltip-wrapper {
  position: relative;
  display: inline-flex;
}

.glass-tooltip-bubble {
  position: absolute;
  z-index: 300;
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--glass-speed-fast) ease, transform var(--glass-speed-fast) ease;
  font-family: var(--glass-font-sans);
  color: var(--glass-text);
  box-sizing: border-box;
}

.glass-tooltip-wrapper:hover .glass-tooltip-bubble {
  opacity: 1;
}

/* Glass Variants */
.glass-tooltip-bubble[data-glass="frosted"] {
  background: var(--glass-bg-frosted);
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-frosted);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.glass-tooltip-bubble[data-glass="liquid"] {
  background: var(--glass-bg-liquid);
  background-size: 200% 200%;
  animation: glass-liquid-shift var(--glass-speed-liquid) ease infinite;
  backdrop-filter: var(--glass-filter-matte);
  -webkit-backdrop-filter: var(--glass-filter-matte);
  border: var(--glass-border-width) solid var(--glass-border-liquid);
  box-shadow: 0 4px 10px var(--glass-shadow-liquid);
}

.glass-tooltip-bubble[data-glass="matte"] {
  background: var(--glass-bg-matte);
  border: var(--glass-border-width) solid var(--glass-border-matte);
}

/* Positions & Triangles/Offsets */
.glass-tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -6px);
}
.glass-tooltip-wrapper:hover .glass-tooltip-top {
  transform: translate(-50%, -10px);
}

.glass-tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 6px);
}
.glass-tooltip-wrapper:hover .glass-tooltip-bottom {
  transform: translate(-50%, 10px);
}

.glass-tooltip-left {
  right: 100%;
  top: 50%;
  transform: translate(-6px, -50%);
}
.glass-tooltip-wrapper:hover .glass-tooltip-left {
  transform: translate(-10px, -50%);
}

.glass-tooltip-right {
  left: 100%;
  top: 50%;
  transform: translate(6px, -50%);
}
.glass-tooltip-wrapper:hover .glass-tooltip-right {
  transform: translate(10px, -50%);
}
`;/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=e=>{const t=ap(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ra={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},op=L.createContext({}),ip=()=>L.useContext(op),up=L.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:s="",children:a,iconNode:l,...i},u)=>{const{size:c=24,strokeWidth:v=2,absoluteStrokeWidth:m=!1,color:p="currentColor",className:b=""}=ip()??{},y=r??m?Number(n??v)*24/Number(t??c):n??v;return L.createElement("svg",{ref:u,...ra,width:t??c??ra.width,height:t??c??ra.height,stroke:e??p,strokeWidth:y,className:yd("lucide",b,s),...!a&&!lp(i)&&{"aria-hidden":"true"},...i},[...l.map(([k,O])=>L.createElement(k,O)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=(e,t)=>{const n=L.forwardRef(({className:r,...s},a)=>L.createElement(up,{ref:a,iconNode:t,className:yd(`lucide-${sp(ai(e))}`,`lucide-${e}`,r),...s}));return n.displayName=ai(e),n};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],cp=q("bell",dp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],fp=q("calendar-days",gp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],mp=q("chart-no-axes-column",pp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hp=q("check",vp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],li=q("chevron-down",xp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yp=q("chevron-left",bp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wp=q("circle-alert",kp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],_p=q("circle-dot",Np);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],jp=q("circle-user",Sp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],zp=q("columns-3",Cp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Tp=q("copy",Ep);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Mp=q("layers",Pp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Rp=q("layout-grid",Lp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],qp=q("layout-template",Gp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],$p=q("link",Op);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M10 5h11",key:"1hkqpe"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 19h11",key:"14g2nv"}],["path",{d:"m3 10 3-3-3-3",key:"i7pm08"}],["path",{d:"m3 20 3-3-3-3",key:"20gx1n"}]],Dp=q("list-collapse",Ip);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 15h.01",key:"q59x07"}],["path",{d:"M12 7v4",key:"xawao1"}]],Fp=q("message-square-warning",Ap);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Vp=q("moon",Bp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Up=q("mouse-pointer-click",Hp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Qp=q("navigation",Wp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]],Yp=q("notebook-tabs",Kp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Zp=q("panel-left",Xp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],em=q("panel-right",Jp);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],nm=q("sliders-horizontal",tm);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],sm=q("square-check-big",rm);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],lm=q("sun",am);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],im=q("table",om);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],dm=q("tag",um);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],gm=q("text-align-justify",cm);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],pm=q("text-align-start",fm);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],vm=q("toggle-left",mm);function R(...e){const t=[];for(const n of e)if(n){if(typeof n=="string")t.push(n);else if(typeof n=="object")for(const[r,s]of Object.entries(n))s&&t.push(r)}return t.join(" ")}function hm({glass:e="frosted",className:t,header:n,footer:r,children:s,...a}){return o.jsxs("div",{className:R("glass-card",t),"data-glass":e,...a,children:[n&&o.jsx("div",{className:"glass-card-header",children:n}),o.jsx("div",{className:"glass-card-content",children:s}),r&&o.jsx("div",{className:"glass-card-footer",children:r})]})}function xm({glass:e="frosted",className:t,title:n,description:r,children:s,...a}){return o.jsxs("div",{className:R("glass-panel",t),"data-glass":e,...a,children:[(n||r)&&o.jsxs("div",{className:"glass-panel-header",children:[n&&o.jsx("h2",{className:"glass-panel-title",children:n}),r&&o.jsx("p",{className:"glass-panel-description",children:r})]}),o.jsx("div",{className:"glass-panel-body",children:s})]})}function bm({glass:e="frosted",className:t,brand:n,links:r,actions:s,children:a,...l}){return o.jsx("header",{className:R("glass-navbar",t),"data-glass":e,...l,children:o.jsxs("div",{className:"glass-navbar-inner",children:[n&&o.jsx("div",{className:"glass-navbar-brand",children:n}),r&&o.jsx("nav",{className:"glass-navbar-links",children:r}),a&&o.jsx("div",{className:"glass-navbar-custom",children:a}),s&&o.jsx("div",{className:"glass-navbar-actions",children:s})]})})}function ym({glass:e="frosted",className:t,header:n,footer:r,children:s,...a}){return o.jsxs("aside",{className:R("glass-sidebar",t),"data-glass":e,...a,children:[n&&o.jsx("div",{className:"glass-sidebar-header",children:n}),o.jsx("div",{className:"glass-sidebar-body",children:s}),r&&o.jsx("div",{className:"glass-sidebar-footer",children:r})]})}function km({glass:e="frosted",position:t="right",isOpen:n=!1,title:r,className:s,children:a,...l}){return o.jsxs("div",{className:R("glass-drawer",`glass-drawer-${t}`,n&&"glass-drawer-open",s),"data-glass":e,...l,children:[o.jsx("div",{className:"glass-drawer-header",children:r&&o.jsx("h3",{className:"glass-drawer-title",children:r})}),o.jsx("div",{className:"glass-drawer-content",children:a})]})}function oe({glass:e="frosted",variant:t="solid",size:n="md",className:r,children:s,...a}){return o.jsx("button",{className:R("glass-button",`glass-button-${t}`,`glass-button-${n}`,r),"data-glass":e,...a,children:o.jsx("span",{className:"glass-button-content",children:s})})}function wm({glass:e="frosted",label:t,error:n,className:r,id:s,...a}){const l=s||`glass-input-${Math.random().toString(36).substr(2,9)}`;return o.jsxs("div",{className:R("glass-input-wrapper",r),children:[t&&o.jsx("label",{htmlFor:l,className:"glass-input-label",children:t}),o.jsx("input",{id:l,className:R("glass-input",n&&"glass-input-error"),"data-glass":e,...a}),n&&o.jsx("span",{className:"glass-input-error-msg",children:n})]})}function Nm({glass:e="frosted",label:t,error:n,className:r,id:s,...a}){const l=s||`glass-textarea-${Math.random().toString(36).substr(2,9)}`;return o.jsxs("div",{className:R("glass-textarea-wrapper",r),children:[t&&o.jsx("label",{htmlFor:l,className:"glass-textarea-label",children:t}),o.jsx("textarea",{id:l,className:R("glass-textarea",n&&"glass-textarea-error"),"data-glass":e,...a}),n&&o.jsx("span",{className:"glass-textarea-error-msg",children:n})]})}function _m({glass:e="frosted",label:t,error:n,options:r=[],className:s,id:a,children:l,...i}){const u=a||`glass-select-${Math.random().toString(36).substr(2,9)}`;return o.jsxs("div",{className:R("glass-select-wrapper",s),children:[t&&o.jsx("label",{htmlFor:u,className:"glass-select-label",children:t}),o.jsxs("div",{className:"glass-select-container",children:[o.jsx("select",{id:u,className:R("glass-select",n&&"glass-select-error"),"data-glass":e,...i,children:l||r.map(c=>o.jsx("option",{value:c.value,children:c.label},c.value))}),o.jsx("span",{className:"glass-select-arrow"})]}),n&&o.jsx("span",{className:"glass-select-error-msg",children:n})]})}function Sm({glass:e="frosted",label:t,className:n,id:r,...s}){const a=r||`glass-checkbox-${Math.random().toString(36).substr(2,9)}`;return o.jsx("div",{className:R("glass-checkbox-wrapper",n),children:o.jsxs("label",{htmlFor:a,className:"glass-checkbox-label",children:[o.jsx("input",{type:"checkbox",id:a,className:"glass-checkbox-input","data-glass":e,...s}),o.jsx("span",{className:"glass-checkbox-box","data-glass":e,children:o.jsx("svg",{className:"glass-checkbox-checkmark",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})})}),t&&o.jsx("span",{className:"glass-checkbox-text",children:t})]})})}function jm({glass:e="frosted",label:t,className:n,id:r,...s}){const a=r||`glass-radio-${Math.random().toString(36).substr(2,9)}`;return o.jsx("div",{className:R("glass-radio-wrapper",n),children:o.jsxs("label",{htmlFor:a,className:"glass-radio-label",children:[o.jsx("input",{type:"radio",id:a,className:"glass-radio-input","data-glass":e,...s}),o.jsx("span",{className:"glass-radio-circle","data-glass":e,children:o.jsx("span",{className:"glass-radio-dot"})}),t&&o.jsx("span",{className:"glass-radio-text",children:t})]})})}function Cm({glass:e="frosted",label:t,className:n,id:r,...s}){const a=r||`glass-toggle-${Math.random().toString(36).substr(2,9)}`;return o.jsx("div",{className:R("glass-toggle-wrapper",n),children:o.jsxs("label",{htmlFor:a,className:"glass-toggle-label",children:[o.jsx("input",{type:"checkbox",id:a,className:"glass-toggle-input","data-glass":e,...s}),o.jsx("span",{className:"glass-toggle-track","data-glass":e,children:o.jsx("span",{className:"glass-toggle-thumb","data-glass":e})}),t&&o.jsx("span",{className:"glass-toggle-text",children:t})]})})}function zm({glass:e="frosted",label:t,className:n,id:r,...s}){const a=r||`glass-slider-${Math.random().toString(36).substr(2,9)}`;return o.jsxs("div",{className:R("glass-slider-wrapper",n),children:[t&&o.jsx("label",{htmlFor:a,className:"glass-slider-label",children:t}),o.jsx("input",{type:"range",id:a,className:"glass-slider","data-glass":e,...s})]})}function Em({glass:e="frosted",isOpen:t=!1,title:n,footer:r,onClose:s,className:a,children:l,...i}){return t?o.jsx("div",{className:"glass-modal-overlay",onClick:s,children:o.jsxs("div",{className:R("glass-modal-container",a),"data-glass":e,onClick:u=>u.stopPropagation(),...i,children:[o.jsxs("div",{className:"glass-modal-header",children:[n&&o.jsx("h3",{className:"glass-modal-title",children:n}),s&&o.jsx("button",{className:"glass-modal-close-btn",onClick:s,children:"×"})]}),o.jsx("div",{className:"glass-modal-content",children:l}),r&&o.jsx("div",{className:"glass-modal-footer",children:r})]})}):null}function Tm({glass:e="frosted",content:t,position:n="top",className:r,children:s,...a}){return o.jsxs("div",{className:R("glass-tooltip-wrapper",r),...a,children:[s,o.jsx("div",{className:R("glass-tooltip-bubble",`glass-tooltip-${n}`),"data-glass":e,role:"tooltip",children:t})]})}function Pm({glass:e="frosted",isOpen:t=!1,title:n,description:r,onClose:s,className:a,children:l,...i}){return t?o.jsxs("div",{className:R("glass-toast",a),"data-glass":e,role:"alert",...i,children:[o.jsxs("div",{className:"glass-toast-body",children:[n&&o.jsx("div",{className:"glass-toast-title",children:n}),r&&o.jsx("div",{className:"glass-toast-description",children:r}),l]}),s&&o.jsx("button",{className:"glass-toast-close-btn",onClick:s,"aria-label":"Close",children:"×"})]}):null}function Mm({glass:e="frosted",variant:t="info",icon:n,title:r,className:s,children:a,...l}){return o.jsxs("div",{className:R("glass-alert",`glass-alert-${t}`,s),"data-glass":e,role:"alert",...l,children:[n&&o.jsx("div",{className:"glass-alert-icon",children:n}),o.jsxs("div",{className:"glass-alert-body",children:[r&&o.jsx("h5",{className:"glass-alert-title",children:r}),o.jsx("div",{className:"glass-alert-content",children:a})]})]})}function ot({glass:e="frosted",variant:t="default",className:n,children:r,...s}){return o.jsx("span",{className:R("glass-badge",`glass-badge-${t}`,n),"data-glass":e,...s,children:r})}function Lm({glass:e="frosted",value:t=0,className:n,...r}){const s=Math.min(100,Math.max(0,t));return o.jsx("div",{className:R("glass-progress",n),"data-glass":e,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,...r,children:o.jsx("div",{className:"glass-progress-fill","data-glass":e,style:{width:`${s}%`}})})}function Rm({glass:e="frosted",items:t,activeTab:n,onChangeTab:r,className:s,...a}){return o.jsx("div",{className:R("glass-tabs-container",s),"data-glass":e,...a,children:o.jsx("div",{className:"glass-tabs-list",role:"tablist",children:t.map(l=>{const i=l.id===n;return o.jsx("button",{className:R("glass-tabs-trigger",i&&"glass-tabs-trigger-active"),role:"tab","aria-selected":i,onClick:()=>r==null?void 0:r(l.id),children:l.label},l.id)})})})}function Gm({glass:e="frosted",separator:t="/",className:n,children:r,...s}){const a=Vr.Children.toArray(r);return o.jsx("nav",{className:R("glass-breadcrumb",n),"data-glass":e,"aria-label":"Breadcrumb",...s,children:o.jsx("ol",{className:"glass-breadcrumb-list",children:a.map((l,i)=>{const u=i===a.length-1;return o.jsxs(Vr.Fragment,{children:[o.jsx("li",{className:R("glass-breadcrumb-item",u&&"glass-breadcrumb-item-active"),children:l}),!u&&o.jsx("li",{className:"glass-breadcrumb-separator","aria-hidden":"true",children:t})]},i)})})})}function qm({glass:e="frosted",currentPage:t,totalPages:n,onPageChange:r,className:s,...a}){const l=Array.from({length:n},(i,u)=>u+1);return o.jsxs("nav",{className:R("glass-pagination",s),"data-glass":e,"aria-label":"Pagination Navigation",...a,children:[o.jsx("button",{className:"glass-pagination-btn",disabled:t<=1,onClick:()=>r==null?void 0:r(t-1),"aria-label":"Previous Page",children:"‹"}),l.map(i=>{const u=i===t;return o.jsx("button",{className:R("glass-pagination-btn",u&&"glass-pagination-btn-active"),onClick:()=>r==null?void 0:r(i),"aria-current":u?"page":void 0,children:i},i)}),o.jsx("button",{className:"glass-pagination-btn",disabled:t>=n,onClick:()=>r==null?void 0:r(t+1),"aria-label":"Next Page",children:"›"})]})}function Om({glass:e="frosted",isOpen:t=!1,items:n,trigger:r,className:s,...a}){return o.jsxs("div",{className:R("glass-dropdown-wrapper",s),...a,children:[o.jsx("div",{className:"glass-dropdown-trigger",children:r}),t&&o.jsx("div",{className:"glass-dropdown-menu","data-glass":e,role:"menu",children:n.map((l,i)=>o.jsx("button",{className:"glass-dropdown-item",role:"menuitem",disabled:l.disabled,onClick:l.onClick,children:l.label},i))})]})}function sa({glass:e="frosted",src:t,fallback:n,size:r="md",className:s,...a}){const[l,i]=Vr.useState(!1);return o.jsx("div",{className:R("glass-avatar",`glass-avatar-${r}`,s),"data-glass":e,...a,children:t&&!l?o.jsx("img",{src:t,alt:n||"User Avatar",className:"glass-avatar-image",onError:()=>i(!0)}):o.jsx("div",{className:"glass-avatar-fallback",children:n})})}function $m({glass:e="frosted",headers:t=[],className:n,children:r,...s}){return o.jsx("div",{className:"glass-table-container","data-glass":e,children:o.jsxs("table",{className:R("glass-table",n),...s,children:[t.length>0&&o.jsx("thead",{children:o.jsx("tr",{className:"glass-table-header-row",children:t.map((a,l)=>o.jsx("th",{className:"glass-table-header-cell",children:a},l))})}),o.jsx("tbody",{className:"glass-table-body",children:r})]})})}function Im({glass:e="frosted",title:t,isOpen:n=!1,onToggle:r,className:s,children:a,...l}){return o.jsxs("div",{className:R("glass-accordion",n&&"glass-accordion-open",s),"data-glass":e,...l,children:[o.jsxs("button",{className:"glass-accordion-trigger",onClick:r,"aria-expanded":n,children:[o.jsx("span",{className:"glass-accordion-title",children:t}),o.jsx("span",{className:"glass-accordion-icon"})]}),o.jsx("div",{className:"glass-accordion-content-wrapper",children:o.jsx("div",{className:"glass-accordion-content",children:a})})]})}function Dm({glass:e="frosted",selectedDate:t,onSelectDate:n,className:r,...s}){const a=["Su","Mo","Tu","We","Th","Fr","Sa"],l=Array.from({length:30},(i,u)=>u+1);return o.jsxs("div",{className:R("glass-calendar",r),"data-glass":e,...s,children:[o.jsxs("div",{className:"glass-calendar-header",children:[o.jsx("button",{className:"glass-calendar-nav-btn",children:"‹"}),o.jsx("span",{className:"glass-calendar-month-year",children:"June 2026"}),o.jsx("button",{className:"glass-calendar-nav-btn",children:"›"})]}),o.jsxs("div",{className:"glass-calendar-grid",children:[a.map(i=>o.jsx("span",{className:"glass-calendar-weekday",children:i},i)),l.map(i=>{const u=i===15;return o.jsx("button",{className:R("glass-calendar-day",u&&"glass-calendar-day-selected"),onClick:()=>n==null?void 0:n(new Date(2026,5,i)),children:i},i)})]})]})}const Am=Object.assign({"../../../components/button/index.tsx":nf,"../../../components/glass-accordion/index.tsx":rf,"../../../components/glass-alert/index.tsx":sf,"../../../components/glass-avatar/index.tsx":af,"../../../components/glass-badge/index.tsx":lf,"../../../components/glass-breadcrumb/index.tsx":of,"../../../components/glass-button/index.tsx":uf,"../../../components/glass-calendar/index.tsx":df,"../../../components/glass-card/index.tsx":cf,"../../../components/glass-checkbox/index.tsx":gf,"../../../components/glass-drawer/index.tsx":ff,"../../../components/glass-dropdown-menu/index.tsx":pf,"../../../components/glass-input/index.tsx":mf,"../../../components/glass-modal/index.tsx":vf,"../../../components/glass-navbar/index.tsx":hf,"../../../components/glass-pagination/index.tsx":xf,"../../../components/glass-panel/index.tsx":bf,"../../../components/glass-progress/index.tsx":yf,"../../../components/glass-radio/index.tsx":kf,"../../../components/glass-select/index.tsx":wf,"../../../components/glass-sidebar/index.tsx":Nf,"../../../components/glass-slider/index.tsx":_f,"../../../components/glass-table/index.tsx":Sf,"../../../components/glass-tabs/index.tsx":jf,"../../../components/glass-textarea/index.tsx":Cf,"../../../components/glass-toast/index.tsx":zf,"../../../components/glass-toggle/index.tsx":Ef,"../../../components/glass-tooltip/index.tsx":Tf}),Fm=Object.assign({"../../../components/glass-accordion/styles.css":Pf,"../../../components/glass-alert/styles.css":Mf,"../../../components/glass-avatar/styles.css":Lf,"../../../components/glass-badge/styles.css":Rf,"../../../components/glass-breadcrumb/styles.css":Gf,"../../../components/glass-button/styles.css":qf,"../../../components/glass-calendar/styles.css":Of,"../../../components/glass-card/styles.css":$f,"../../../components/glass-checkbox/styles.css":If,"../../../components/glass-drawer/styles.css":Df,"../../../components/glass-dropdown-menu/styles.css":Af,"../../../components/glass-input/styles.css":Ff,"../../../components/glass-modal/styles.css":Bf,"../../../components/glass-navbar/styles.css":Vf,"../../../components/glass-pagination/styles.css":Hf,"../../../components/glass-panel/styles.css":Uf,"../../../components/glass-progress/styles.css":Wf,"../../../components/glass-radio/styles.css":Qf,"../../../components/glass-select/styles.css":Kf,"../../../components/glass-sidebar/styles.css":Yf,"../../../components/glass-slider/styles.css":Xf,"../../../components/glass-table/styles.css":Zf,"../../../components/glass-tabs/styles.css":Jf,"../../../components/glass-textarea/styles.css":ep,"../../../components/glass-toast/styles.css":tp,"../../../components/glass-toggle/styles.css":np,"../../../components/glass-tooltip/styles.css":rp});function Bm(e,t){let n=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const r=[],s=(a,l)=>(r.push(`<span class="${l}">${a}</span>`),`___TOKEN_${r.length-1}___`);t==="tsx"?(n=n.replace(/(\/\/.*)/g,(a,l)=>s(l,"code-comment")),n=n.replace(/(\/\*[\s\S]*?\*\/)/g,(a,l)=>s(l,"code-comment")),n=n.replace(/(["`])(.*?)\1/g,(a,l,i)=>s(l+i+l,"code-string")),n=n.replace(/'(.*?)'/g,(a,l)=>s("'"+l+"'","code-string")),n=n.replace(/\b(import|export|const|let|var|return|function|interface|extends|type|default|from|false|true|null|undefined|as|typeof|instanceof|switch|case|break)\b/g,a=>s(a,"code-keyword")),n=n.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g,a=>s(a,"code-type")),n=n.replace(/\b([a-zA-Z0-9_]+)(?=\s*\()/g,a=>s(a,"code-function"))):t==="css"?(n=n.replace(/(\/\*[\s\S]*?\*\/)/g,(a,l)=>s(l,"code-comment")),n=n.replace(/(\.[a-zA-Z0-9_-]+)/g,a=>s(a,"code-class")),n=n.replace(/(--[a-zA-Z0-9_-]+)/g,a=>s(a,"code-variable")),n=n.replace(/\b([a-zA-Z-]+)\s*:/g,(a,l)=>s(l,"code-property")+":")):t==="bash"&&(n=n.replace(/\b(npx|npm|git|add|init)\b/g,a=>s(a,"code-keyword")),n=n.replace(/(["`])(.*?)\1/g,(a,l,i)=>s(l+i+l,"code-string")),n=n.replace(/'(.*?)'/g,(a,l)=>s("'"+l+"'","code-string")));for(let a=r.length-1;a>=0;a--)n=n.replace(`___TOKEN_${a}___`,r[a]);return n}function Vm(e,t,n){switch(e){case"glass-card":return`import { GlassCard } from '@/components/glass-card';
import { GlassButton } from '@/components/glass-button';

export default function CardExample() {
  return (
    <GlassCard
      glass="${t}"
      header={<div>Glass Card Header</div>}
      footer={
        <>
          <GlassButton glass="${t}" size="sm">Cancel</GlassButton>
          <GlassButton glass="${t}" size="sm" variant="outline">Action</GlassButton>
        </>
      }
    >
      <p style={{ margin: 0 }}>
        A customizable card component with glassmorphic backdrop-filter properties.
      </p>
    </GlassCard>
  );
}`;case"glass-panel":return`import { GlassPanel } from '@/components/glass-panel';

export default function PanelExample() {
  return (
    <GlassPanel 
      glass="${t}" 
      title="Dashboard Panel" 
      description="Explore glass panel styling variants"
    >
      <p style={{ margin: 0 }}>
        Glass panels serve as primary layout containers with fluid borders and rounded shapes.
      </p>
    </GlassPanel>
  );
}`;case"glass-navbar":return`import { GlassNavbar } from '@/components/glass-navbar';
import { GlassButton } from '@/components/glass-button';

export default function NavbarExample() {
  return (
    <GlassNavbar
      glass="${t}"
      brand={<span style={{ fontWeight: 800, letterSpacing: '0.05em' }}>GLASSIFY</span>}
      links={
        <>
          <a href="#home">Home</a>
          <a href="#docs">Docs</a>
          <a href="#about">About</a>
        </>
      }
      actions={<GlassButton glass="${t}" size="sm">Get Started</GlassButton>}
    />
  );
}`;case"glass-sidebar":return`import { GlassSidebar } from '@/components/glass-sidebar';

export default function SidebarExample() {
  return (
    <div style={{ display: 'flex', height: '340px', width: '100%' }}>
      <GlassSidebar
        glass="${t}"
        header={<div style={{ fontWeight: 800, fontSize: '1rem' }}>Glassify Portal</div>}
        footer={<span style={{ fontSize: '0.75rem', opacity: 0.5 }}>v0.1.0-alpha</span>}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {['Dashboard', 'Analytics', 'Components', 'Settings'].map((item) => (
            <a key={item} href="#" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem 0.75rem', borderRadius: '6px', background: 'var(--glass-primary)', fontSize: '0.875rem' }}>{item}</a>
          ))}
        </div>
      </GlassSidebar>
    </div>
  );
}`;case"glass-drawer":return`import { useState } from 'react';
import { GlassDrawer } from '@/components/glass-drawer';
import { GlassButton } from '@/components/glass-button';

export default function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton glass="${t}" onClick={() => setIsOpen(true)}>
        Open Drawer
      </GlassButton>
      
      <GlassDrawer 
        glass="${t}" 
        position="${n.drawerPos}" 
        isOpen={isOpen} 
        title="${n.drawerPos.toUpperCase()} DRAWER"
      >
        <p>Slide-in glass drawer panel component.</p>
        <GlassButton glass="${t}" size="sm" onClick={() => setIsOpen(false)}>
          Dismiss
        </GlassButton>
      </GlassDrawer>
    </>
  );
}`;case"glass-button":return`import { GlassButton } from '@/components/glass-button';

export default function ButtonExample() {
  return (
    <GlassButton 
      glass="${t}" 
      variant="${n.buttonVariant}" 
      size="${n.buttonSize}"
    >
      Click Me
    </GlassButton>
  );
}`;case"glass-input":return`import { useState } from 'react';
import { GlassInput } from '@/components/glass-input';

export default function InputExample() {
  const [value, setValue] = useState('${n.inputValue}');

  return (
    <GlassInput 
      glass="${t}" 
      label="Email Address" 
      placeholder="you@glassify.dev" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      error="${n.inputError}"
    />
  );
}`;case"glass-textarea":return`import { GlassTextarea } from '@/components/glass-textarea';

export default function TextareaExample() {
  return (
    <GlassTextarea 
      glass="${t}" 
      label="Project Notes" 
      placeholder="Type your notes here..." 
      rows={4} 
    />
  );
}`;case"glass-select":return`import { GlassSelect } from '@/components/glass-select';

export default function SelectExample() {
  return (
    <GlassSelect 
      glass="${t}" 
      label="Glass Style Variant" 
      options={[
        { label: 'Frosted — Classic blur', value: 'frosted' },
        { label: 'Liquid — Crystal clear', value: 'liquid' },
        { label: 'Matte — Heavy satin', value: 'matte' },
      ]} 
    />
  );
}`;case"glass-checkbox":return`import { useState } from 'react';
import { GlassCheckbox } from '@/components/glass-checkbox';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(${n.checkboxChecked});

  return (
    <GlassCheckbox 
      glass="${t}" 
      label="Enable liquid glow reflections on hover" 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  );
}`;case"glass-radio":return`import { useState } from 'react';
import { GlassRadio } from '@/components/glass-radio';

export default function RadioExample() {
  const [value, setValue] = useState('${n.radioValue}');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <GlassRadio 
        glass="${t}" 
        label="Frosted Glass" 
        name="radio-group" 
        checked={value === 'one'} 
        onChange={() => setValue('one')} 
      />
      <GlassRadio 
        glass="${t}" 
        label="Liquid Glass" 
        name="radio-group" 
        checked={value === 'two'} 
        onChange={() => setValue('two')} 
      />
    </div>
  );
}`;case"glass-toggle":return`import { useState } from 'react';
import { GlassToggle } from '@/components/glass-toggle';

export default function ToggleExample() {
  const [checked, setChecked] = useState(${n.toggleChecked});

  return (
    <GlassToggle 
      glass="${t}" 
      label="Enable experimental liquid mode" 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  );
}`;case"glass-slider":return`import { useState } from 'react';
import { GlassSlider } from '@/components/glass-slider';

export default function SliderExample() {
  const [value, setValue] = useState(${n.sliderValue});

  return (
    <GlassSlider 
      glass="${t}" 
      label={\`Blur Intensity: \${value}px\`} 
      min="0" 
      max="100" 
      value={value} 
      onChange={(e) => setValue(Number(e.target.value))} 
    />
  );
}`;case"glass-modal":return`import { useState } from 'react';
import { GlassModal } from '@/components/glass-modal';
import { GlassButton } from '@/components/glass-button';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton glass="${t}" onClick={() => setIsOpen(true)}>
        Launch Modal
      </GlassButton>
      
      <GlassModal 
        glass="${t}" 
        isOpen={isOpen} 
        title="System Notification" 
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <GlassButton glass="${t}" size="sm" onClick={() => setIsOpen(false)}>Close</GlassButton>
            <GlassButton glass="${t}" size="sm" variant="outline">Confirm</GlassButton>
          </>
        }
      >
        <p>This modal renders inside a backdrop blur overlay layer.</p>
      </GlassModal>
    </>
  );
}`;case"glass-tooltip":return`import { GlassTooltip } from '@/components/glass-tooltip';

export default function TooltipExample() {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <GlassTooltip glass="${t}" content="Top tooltip" position="top">
        <span style={{ cursor: 'help', textDecoration: 'underline dashed' }}>Hover top</span>
      </GlassTooltip>
      <GlassTooltip glass="${t}" content="Bottom tooltip" position="bottom">
        <span style={{ cursor: 'help', textDecoration: 'underline dashed' }}>Hover bottom</span>
      </GlassTooltip>
    </div>
  );
}`;case"glass-toast":return`import { useState } from 'react';
import { GlassToast } from '@/components/glass-toast';
import { GlassButton } from '@/components/glass-button';

export default function ToastExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton glass="${t}" onClick={() => setIsOpen(true)}>
        Show Toast
      </GlassButton>
      
      <GlassToast 
        glass="${t}" 
        isOpen={isOpen} 
        title="Component Added" 
        description="glass-button has been added to the registry." 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}`;case"glass-alert":return`import { GlassAlert } from '@/components/glass-alert';

export default function AlertExample() {
  return (
    <GlassAlert 
      glass="${t}" 
      variant="${n.alertVariant}" 
      title="${n.alertVariant.charAt(0).toUpperCase()+n.alertVariant.slice(1)} Alert"
      icon="${n.alertVariant==="info"?"ℹ️":n.alertVariant==="warning"?"⚠️":n.alertVariant==="error"?"❌":"✅"}"
    >
      Glass alerts support inline status signals with customizable severity.
    </GlassAlert>
  );
}`;case"glass-badge":return`import { GlassBadge } from '@/components/glass-badge';

export default function BadgeExample() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <GlassBadge glass="${t}" variant="${n.badgeVariant}">Active</GlassBadge>
      <GlassBadge glass="${t}" variant="${n.badgeVariant}">Stable</GlassBadge>
    </div>
  );
}`;case"glass-progress":return`import { GlassProgress } from '@/components/glass-progress';

export default function ProgressExample() {
  return (
    <GlassProgress glass="${t}" value={${n.progressValue}} />
  );
}`;case"glass-tabs":return`import { useState } from 'react';
import { GlassTabs } from '@/components/glass-tabs';

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('${n.activeTab}');

  return (
    <GlassTabs 
      glass="${t}"
      items={[
        { id: 'tab-1', label: 'Overview' }, 
        { id: 'tab-2', label: 'API Params' }, 
        { id: 'tab-3', label: 'Registry' }
      ]}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
    />
  );
}`;case"glass-breadcrumb":return`import { GlassBreadcrumb } from '@/components/glass-breadcrumb';

export default function BreadcrumbExample() {
  return (
    <GlassBreadcrumb glass="${t}">
      <a href="#">src</a>
      <a href="#">components</a>
      <span>glass-button</span>
    </GlassBreadcrumb>
  );
}`;case"glass-pagination":return`import { useState } from 'react';
import { GlassPagination } from '@/components/glass-pagination';

export default function PaginationExample() {
  const [page, setPage] = useState(${n.currentPage});

  return (
    <GlassPagination 
      glass="${t}" 
      currentPage={page} 
      totalPages={5} 
      onPageChange={setPage} 
    />
  );
}`;case"glass-dropdown-menu":return`import { useState } from 'react';
import { GlassDropdownMenu } from '@/components/glass-dropdown-menu';
import { GlassButton } from '@/components/glass-button';

export default function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassDropdownMenu 
      glass="${t}" 
      isOpen={isOpen}
      trigger={
        <GlassButton glass="${t}" onClick={() => setIsOpen(!isOpen)}>
          Open Menu
        </GlassButton>
      }
      items={[
        { label: 'Download Package', onClick: () => console.log('Downloading') },
        { label: 'Copy Config', disabled: true },
        { label: 'Reset State', onClick: () => console.log('Reset') },
      ]}
    />
  );
}`;case"glass-avatar":return`import { GlassAvatar } from '@/components/glass-avatar';

export default function AvatarExample() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <GlassAvatar 
        glass="${t}" 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" 
        fallback="JD" 
        size="lg" 
      />
      <GlassAvatar glass="${t}" fallback="UN" size="md" />
    </div>
  );
}`;case"glass-table":return`import { GlassTable } from '@/components/glass-table';
import { GlassBadge } from '@/components/glass-badge';

export default function TableExample() {
  return (
    <GlassTable glass="${t}" headers={['Component', 'Status', 'Category']}>
      <tr>
        <td>glass-button</td>
        <td><GlassBadge glass="${t}">Stable</GlassBadge></td>
        <td>Inputs</td>
      </tr>
      <tr>
        <td>glass-modal</td>
        <td><GlassBadge glass="${t}">Stable</GlassBadge></td>
        <td>Overlay</td>
      </tr>
    </GlassTable>
  );
}`;case"glass-accordion":return`import { useState } from 'react';
import { GlassAccordion } from '@/components/glass-accordion';

export default function AccordionExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassAccordion 
      glass="${t}" 
      title="Is glassmorphism responsive cross-device?" 
      isOpen={isOpen} 
      onToggle={() => setIsOpen(!isOpen)}
    >
      Yes — glass style variants rely on modern backdrop-filter and opacity channels.
    </GlassAccordion>
  );
}`;case"glass-calendar":return`import { GlassCalendar } from '@/components/glass-calendar';

export default function CalendarExample() {
  return (
    <GlassCalendar glass="${t}" />
  );
}`;default:return""}}const oi=[{id:"glass-card",name:"Card",category:"layout",icon:o.jsx(Rp,{size:14})},{id:"glass-panel",name:"Panel",category:"layout",icon:o.jsx(zp,{size:14})},{id:"glass-navbar",name:"Navbar",category:"layout",icon:o.jsx(Qp,{size:14})},{id:"glass-sidebar",name:"Sidebar",category:"layout",icon:o.jsx(Zp,{size:14})},{id:"glass-drawer",name:"Drawer",category:"layout",icon:o.jsx(em,{size:14})},{id:"glass-button",name:"Button",category:"inputs",icon:o.jsx(Up,{size:14})},{id:"glass-input",name:"Input",category:"inputs",icon:o.jsx(pm,{size:14})},{id:"glass-textarea",name:"Textarea",category:"inputs",icon:o.jsx(gm,{size:14})},{id:"glass-select",name:"Select",category:"inputs",icon:o.jsx(li,{size:14})},{id:"glass-checkbox",name:"Checkbox",category:"inputs",icon:o.jsx(sm,{size:14})},{id:"glass-radio",name:"Radio",category:"inputs",icon:o.jsx(_p,{size:14})},{id:"glass-toggle",name:"Toggle",category:"inputs",icon:o.jsx(vm,{size:14})},{id:"glass-slider",name:"Slider",category:"inputs",icon:o.jsx(nm,{size:14})},{id:"glass-modal",name:"Modal",category:"feedback",icon:o.jsx(qp,{size:14})},{id:"glass-tooltip",name:"Tooltip",category:"feedback",icon:o.jsx(Fp,{size:14})},{id:"glass-toast",name:"Toast",category:"feedback",icon:o.jsx(cp,{size:14})},{id:"glass-alert",name:"Alert",category:"feedback",icon:o.jsx(wp,{size:14})},{id:"glass-badge",name:"Badge",category:"feedback",icon:o.jsx(dm,{size:14})},{id:"glass-progress",name:"Progress",category:"feedback",icon:o.jsx(mp,{size:14})},{id:"glass-tabs",name:"Tabs",category:"navigation",icon:o.jsx(Yp,{size:14})},{id:"glass-breadcrumb",name:"Breadcrumb",category:"navigation",icon:o.jsx($p,{size:14})},{id:"glass-pagination",name:"Pagination",category:"navigation",icon:o.jsx(yp,{size:14})},{id:"glass-dropdown-menu",name:"Dropdown",category:"navigation",icon:o.jsx(li,{size:14})},{id:"glass-avatar",name:"Avatar",category:"display",icon:o.jsx(jp,{size:14})},{id:"glass-table",name:"Table",category:"display",icon:o.jsx(im,{size:14})},{id:"glass-accordion",name:"Accordion",category:"display",icon:o.jsx(Dp,{size:14})},{id:"glass-calendar",name:"Calendar",category:"display",icon:o.jsx(fp,{size:14})}],Hm=[{id:"layout",label:"Layout"},{id:"inputs",label:"Forms"},{id:"feedback",label:"Feedback"},{id:"navigation",label:"Navigation"},{id:"display",label:"Display"}];function Um(){const[e,t]=L.useState("glass-button"),[n,r]=L.useState("frosted"),[s,a]=L.useState("dark"),[l,i]=L.useState("solid"),[u,c]=L.useState("md"),[v,m]=L.useState(""),[p,b]=L.useState(""),[y,k]=L.useState(!0),[O,g]=L.useState("one"),[d,f]=L.useState(!0),[h,_]=L.useState(65),[C,j]=L.useState(!1),[z,F]=L.useState(!1),[E,be]=L.useState("info"),[Ge,Ct]=L.useState("default"),[wn,fr]=L.useState(45),[Ft,Nn]=L.useState("tab-1"),[N,T]=L.useState(2),[P,V]=L.useState(!1),[K,Bt]=L.useState(!1),[Qe,Vt]=L.useState(!1),[ze,Ht]=L.useState("right"),[ye,pr]=L.useState("cli"),[kd,Ul]=L.useState(null),wd=`../../../components/${e}/index.tsx`,Nd=`../../../components/${e}/styles.css`,_d=Am[wd]||"",Wl=Fm[Nd]||"",Sd=!!Wl,jd=(w,ke)=>{navigator.clipboard.writeText(w).then(()=>{Ul(ke),setTimeout(()=>{Ul(null)},2e3)})},Ql=()=>{switch(ye){case"cli":return`npx glasscn add ${e}`;case"tsx":return _d;case"css":return Wl;case"usage":return Vm(e,n,{buttonVariant:l,buttonSize:u,inputValue:v,inputError:p,checkboxChecked:y,radioValue:O,toggleChecked:d,sliderValue:h,alertVariant:E,badgeVariant:Ge,progressValue:wn,activeTab:Ft,currentPage:N,drawerPos:ze});default:return""}};L.useEffect(()=>{document.body.setAttribute("data-theme",s)},[s]);const Cd=()=>a(w=>w==="light"?"dark":"light"),Ke=oi.find(w=>w.id===e),zd=()=>{switch(e){case"glass-card":return o.jsx(hm,{glass:n,header:o.jsx("div",{children:"Glass Card Header"}),footer:o.jsxs(o.Fragment,{children:[o.jsx(oe,{glass:n,size:"sm",children:"Cancel"}),o.jsx(oe,{glass:n,size:"sm",variant:"outline",children:"Action"})]}),children:o.jsx("p",{style:{margin:0},children:"A customizable card component with glassmorphic backdrop-filter properties. The frosted blur, saturation, and border adapt to the selected glass style variant."})});case"glass-panel":return o.jsx(xm,{glass:n,title:"Dashboard Panel",description:"Explore glass panel styling variants",children:o.jsx("p",{style:{margin:0},children:"Glass panels serve as primary layout containers. Built with fluid borders, rounded shapes, and adaptive glass styles to match any design system."})});case"glass-navbar":return o.jsxs("div",{style:{width:"100%",minHeight:"150px",position:"relative"},children:[o.jsx(bm,{glass:n,brand:o.jsx("span",{style:{fontWeight:800,letterSpacing:"0.05em"},children:"GLASSIFY"}),links:o.jsxs(o.Fragment,{children:[o.jsx("a",{href:"#home",children:"Home"}),o.jsx("a",{href:"#docs",children:"Docs"}),o.jsx("a",{href:"#about",children:"About"})]}),actions:o.jsx(oe,{glass:n,size:"sm",children:"Get Started"})}),o.jsx("div",{style:{padding:"3rem 1.5rem 1rem",textAlign:"center",fontSize:"0.875rem",opacity:.5},children:"Sticky navbar with backdrop blur. Scroll context highlights the glass filter."})]});case"glass-sidebar":return o.jsxs("div",{style:{display:"flex",border:"1px solid var(--glass-border-frosted)",borderRadius:"12px",overflow:"hidden",height:"340px",width:"100%"},children:[o.jsx(ym,{glass:n,header:o.jsx("div",{style:{fontWeight:800,fontSize:"1rem"},children:"Glassify Portal"}),footer:o.jsx("span",{style:{fontSize:"0.75rem",opacity:.5},children:"v0.1.0-alpha"}),children:o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:["Dashboard","Analytics","Components","Settings"].map(w=>o.jsx("a",{href:"#",style:{color:"inherit",textDecoration:"none",padding:"0.5rem 0.75rem",borderRadius:"6px",background:"var(--glass-primary)",fontSize:"0.875rem"},children:w},w))})}),o.jsx("div",{style:{flex:1,padding:"2rem",fontSize:"0.875rem",opacity:.6,display:"flex",alignItems:"center"},children:"Sidebar with fluid glass border and adaptive layout sizing."})]});case"glass-drawer":return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem",alignItems:"center"},children:[o.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:["left","right","top","bottom"].map(w=>o.jsx(oe,{glass:n,size:"sm",variant:ze===w?"solid":"outline",onClick:()=>Ht(w),children:w},w))}),o.jsx(oe,{glass:n,onClick:()=>Vt(!0),children:"Open Drawer"}),o.jsxs(km,{glass:n,position:ze,isOpen:Qe,title:`${ze.toUpperCase()} DRAWER`,children:[o.jsx("p",{children:"Slide-in glass drawer panel component."}),o.jsx(oe,{glass:n,size:"sm",onClick:()=>Vt(!1),children:"Dismiss"})]})]});case"glass-button":return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[o.jsx(oe,{glass:n,variant:l,size:u,children:"Click Me"}),o.jsx(oe,{glass:n,variant:l,size:u,disabled:!0,children:"Disabled"})]}),o.jsxs("div",{className:"preview-prop-controls",children:[o.jsxs("div",{className:"preview-control-group",children:[o.jsx("label",{children:"Variant"}),o.jsx("div",{className:"preview-segmented-control mini",children:["solid","outline","ghost"].map(w=>o.jsx("button",{className:`preview-segmented-btn ${l===w?"preview-segmented-btn-active":""}`,onClick:()=>i(w),children:w.charAt(0).toUpperCase()+w.slice(1)},w))})]}),o.jsxs("div",{className:"preview-control-group",children:[o.jsx("label",{children:"Size"}),o.jsx("div",{className:"preview-segmented-control mini",children:["sm","md","lg"].map(w=>o.jsx("button",{className:`preview-segmented-btn ${u===w?"preview-segmented-btn-active":""}`,onClick:()=>c(w),children:w.toUpperCase()},w))})]})]})]});case"glass-input":return o.jsxs("div",{style:{width:"100%",maxWidth:"340px",display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsx(wm,{glass:n,label:"Email Address",placeholder:"you@glassify.dev",value:v,onChange:w=>m(w.target.value),error:p}),o.jsx(oe,{glass:n,size:"sm",variant:"outline",onClick:()=>b(p?"":"Please enter a valid email"),children:"Toggle Error State"})]});case"glass-textarea":return o.jsx("div",{style:{width:"100%",maxWidth:"420px"},children:o.jsx(Nm,{glass:n,label:"Project Notes",placeholder:"Type your notes here...",rows:4})});case"glass-select":return o.jsx("div",{style:{width:"100%",maxWidth:"320px"},children:o.jsx(_m,{glass:n,label:"Glass Style Variant",options:[{label:"Frosted — Classic blur",value:"frosted"},{label:"Liquid — Crystal clear",value:"liquid"},{label:"Matte — Heavy satin",value:"matte"}]})});case"glass-checkbox":return o.jsx(Sm,{glass:n,label:"Enable liquid glow reflections on hover",checked:y,onChange:w=>k(w.target.checked)});case"glass-radio":return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[o.jsx("span",{style:{fontSize:"0.875rem",fontWeight:600},children:"Choose glass style variant:"}),[["one","Frosted Glass"],["two","Liquid Glass"],["three","Matte Glass"]].map(([w,ke])=>o.jsx(jm,{glass:n,label:ke,name:"preview-radio",checked:O===w,onChange:()=>g(w)},w))]});case"glass-toggle":return o.jsx(Cm,{glass:n,label:"Enable experimental liquid mode",checked:d,onChange:w=>f(w.target.checked)});case"glass-slider":return o.jsx("div",{style:{width:"100%",maxWidth:"340px"},children:o.jsx(zm,{glass:n,label:`Blur Intensity: ${h}px`,min:"0",max:"100",value:h,onChange:w=>_(Number(w.target.value))})});case"glass-modal":return o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(oe,{glass:n,onClick:()=>j(!0),children:"Launch Modal"}),o.jsx(Em,{glass:n,isOpen:C,title:"System Notification",onClose:()=>j(!1),footer:o.jsxs(o.Fragment,{children:[o.jsx(oe,{glass:n,size:"sm",onClick:()=>j(!1),children:"Close"}),o.jsx(oe,{glass:n,size:"sm",variant:"outline",children:"Confirm"})]}),children:o.jsx("p",{style:{margin:0},children:"This modal renders inside a backdrop blur overlay layer. The glass effect refracts the background shapes visible behind the dialog."})})]});case"glass-tooltip":return o.jsx("div",{style:{display:"flex",gap:"3rem",justifyContent:"center"},children:["top","bottom"].map(w=>o.jsx(Tm,{glass:n,content:`${w.charAt(0).toUpperCase()+w.slice(1)} tooltip`,position:w,children:o.jsxs("span",{style:{cursor:"help",textDecoration:"underline dashed",opacity:.8},children:["Hover ",w]})},w))});case"glass-toast":return o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(oe,{glass:n,onClick:()=>F(!0),children:"Show Toast"}),o.jsx(Pm,{glass:n,isOpen:z,title:"Component Added",description:"glass-button has been added to the registry.",onClose:()=>F(!1)})]});case"glass-alert":return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem",width:"100%",maxWidth:"500px"},children:[o.jsx(Mm,{glass:n,variant:E,title:`${E.charAt(0).toUpperCase()+E.slice(1)} Alert`,icon:E==="info"?"ℹ️":E==="warning"?"⚠️":E==="error"?"❌":"✅",children:"Glass alerts support inline status signals with customizable severity."}),o.jsx("div",{className:"preview-prop-controls",children:o.jsxs("div",{className:"preview-control-group",children:[o.jsx("label",{children:"Severity"}),o.jsx("div",{className:"preview-segmented-control mini",children:["info","warning","error","success"].map(w=>o.jsx("button",{className:`preview-segmented-btn ${E===w?"preview-segmented-btn-active":""}`,onClick:()=>be(w),children:w.charAt(0).toUpperCase()+w.slice(1)},w))})]})})]});case"glass-badge":return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",justifyContent:"center"},children:[o.jsx(ot,{glass:n,variant:Ge,children:"Active"}),o.jsx(ot,{glass:n,variant:Ge,children:"Stable"}),o.jsx(ot,{glass:n,variant:Ge,children:"v0.1.0"})]}),o.jsx("div",{className:"preview-prop-controls",children:o.jsxs("div",{className:"preview-control-group",children:[o.jsx("label",{children:"Variant"}),o.jsx("div",{className:"preview-segmented-control mini",children:["default","secondary","outline"].map(w=>o.jsx("button",{className:`preview-segmented-btn ${Ge===w?"preview-segmented-btn-active":""}`,onClick:()=>Ct(w),children:w.charAt(0).toUpperCase()+w.slice(1)},w))})]})})]});case"glass-progress":return o.jsxs("div",{style:{width:"100%",maxWidth:"380px",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[o.jsx(Lm,{glass:n,value:wn}),o.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center"},children:[o.jsx(oe,{glass:n,size:"sm",onClick:()=>fr(w=>Math.max(0,w-15)),children:"−15%"}),o.jsx(oe,{glass:n,size:"sm",onClick:()=>fr(w=>Math.min(100,w+15)),children:"+15%"})]})]});case"glass-tabs":return o.jsx(Rm,{glass:n,items:[{id:"tab-1",label:"Overview"},{id:"tab-2",label:"API Params"},{id:"tab-3",label:"Registry"}],activeTab:Ft,onChangeTab:Nn});case"glass-breadcrumb":return o.jsxs(Gm,{glass:n,children:[o.jsx("a",{href:"#",children:"src"}),o.jsx("a",{href:"#",children:"components"}),o.jsx("span",{children:"glass-button"})]});case"glass-pagination":return o.jsx(qm,{glass:n,currentPage:N,totalPages:5,onPageChange:T});case"glass-dropdown-menu":return o.jsx("div",{style:{minHeight:"160px"},children:o.jsx(Om,{glass:n,isOpen:P,trigger:o.jsx(oe,{glass:n,onClick:()=>V(!P),children:"Open Menu"}),items:[{label:"Download Package",onClick:()=>alert("Downloading...")},{label:"Copy Config",disabled:!0},{label:"Reset State",onClick:()=>alert("Reset")}]})});case"glass-avatar":return o.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center"},children:[o.jsx(sa,{glass:n,src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",fallback:"JD",size:"lg"}),o.jsx(sa,{glass:n,fallback:"UN",size:"md"}),o.jsx(sa,{glass:n,fallback:"SM",size:"sm"})]});case"glass-table":return o.jsxs($m,{glass:n,headers:["Component","Status","Category"],children:[o.jsxs("tr",{children:[o.jsx("td",{children:"glass-button"}),o.jsx("td",{children:o.jsx(ot,{glass:n,children:"Stable"})}),o.jsx("td",{children:"Inputs"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"glass-modal"}),o.jsx("td",{children:o.jsx(ot,{glass:n,children:"Stable"})}),o.jsx("td",{children:"Overlay"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"glass-drawer"}),o.jsx("td",{children:o.jsx(ot,{glass:n,variant:"secondary",children:"Beta"})}),o.jsx("td",{children:"Layout"})]})]});case"glass-accordion":return o.jsx("div",{style:{width:"100%",maxWidth:"500px"},children:o.jsx(Im,{glass:n,title:"Is glassmorphism responsive cross-device?",isOpen:K,onToggle:()=>Bt(!K),children:"Yes — glass style variants rely on modern backdrop-filter, opacity channels, and fallback settings ensuring responsive rendering on mobile and desktop."})});case"glass-calendar":return o.jsx(Dm,{glass:n});default:return o.jsx("div",{children:"Select a component"})}};return o.jsxs("div",{className:"preview-layout",children:[o.jsxs("div",{className:"preview-blob-container",children:[o.jsx("div",{className:"silver-blob blob-1"}),o.jsx("div",{className:"silver-blob blob-2"}),o.jsx("div",{className:"silver-blob blob-3"}),o.jsx("div",{className:"silver-blob blob-4"}),o.jsx("div",{className:"silver-blob blob-5"})]}),o.jsx("div",{className:"preview-grid-bg",children:Array.from({length:600}).map((w,ke)=>o.jsx("div",{className:"preview-grid-node",children:o.jsx("span",{className:"preview-grid-element"})},ke))}),o.jsxs("aside",{className:"app-sidebar","data-glass":n,children:[o.jsxs("div",{className:"app-sidebar-logo",children:[o.jsx("div",{className:"app-logo-icon",children:o.jsx(Mp,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"app-logo-title",children:"Glassify"}),o.jsx("div",{className:"app-logo-sub",children:"Component Library"})]})]}),o.jsx("div",{className:"app-style-switcher",children:["frosted","liquid","matte"].map(w=>o.jsx("button",{className:`app-style-btn ${n===w?"active":""}`,onClick:()=>r(w),children:w},w))}),o.jsx("nav",{className:"app-sidebar-nav",children:Hm.map(w=>o.jsxs("div",{className:"app-nav-group",children:[o.jsx("div",{className:"app-nav-heading",children:w.label}),oi.filter(ke=>ke.category===w.id).map(ke=>o.jsxs("button",{className:`app-nav-item ${e===ke.id?"active":""}`,onClick:()=>t(ke.id),children:[o.jsx("span",{className:"app-nav-icon",children:ke.icon}),ke.name]},ke.id))]},w.id))}),o.jsxs("div",{className:"app-sidebar-footer",children:[o.jsx("span",{className:"app-version",children:"v0.1.0"}),o.jsx("button",{className:"app-theme-btn",onClick:Cd,"aria-label":"Toggle theme",children:s==="dark"?o.jsx(lm,{size:15}):o.jsx(Vp,{size:15})})]})]}),o.jsxs("main",{className:"app-main",children:[o.jsxs("header",{className:"app-topbar","data-glass":n,children:[o.jsxs("div",{className:"app-topbar-left",children:[o.jsx("span",{className:"app-topbar-icon",children:Ke==null?void 0:Ke.icon}),o.jsxs("div",{children:[o.jsx("h1",{className:"app-topbar-title",children:(Ke==null?void 0:Ke.name)||"Preview"}),o.jsx("span",{className:"app-topbar-sub",children:Ke==null?void 0:Ke.id})]})]}),o.jsxs("div",{className:"app-topbar-right",children:[o.jsx(ot,{glass:n,children:"Stable"}),o.jsx(ot,{glass:n,variant:"secondary",children:n})]})]}),o.jsxs("section",{className:"app-content split-layout",children:[o.jsxs("div",{className:"layout-pane-preview",children:[o.jsx("div",{className:"app-showcase","data-glass":n,children:zd()}),o.jsx("div",{className:"showcase-info-help",children:"Use the sidebar style switcher to toggle frosted, liquid, and matte glass presets."})]}),o.jsx("div",{className:"layout-pane-code",children:o.jsxs("div",{className:"code-viewer-shell","data-glass":n,children:[o.jsxs("div",{className:"code-subtabs",children:[o.jsx("button",{className:`code-subtab-btn ${ye==="cli"?"active":""}`,onClick:()=>pr("cli"),children:"CLI"}),o.jsx("button",{className:`code-subtab-btn ${ye==="tsx"?"active":""}`,onClick:()=>pr("tsx"),children:"index.tsx"}),Sd&&o.jsx("button",{className:`code-subtab-btn ${ye==="css"?"active":""}`,onClick:()=>pr("css"),children:"styles.css"}),o.jsx("button",{className:`code-subtab-btn ${ye==="usage"?"active":""}`,onClick:()=>pr("usage"),children:"Usage"})]}),o.jsxs("div",{className:"code-pane-container",children:[o.jsxs("div",{className:"code-pane-header",children:[o.jsxs("span",{className:"code-pane-filename",children:[ye==="cli"&&"Terminal",ye==="tsx"&&`${e}/index.tsx`,ye==="css"&&`${e}/styles.css`,ye==="usage"&&"ExampleUsage.tsx"]}),o.jsx("button",{className:"code-copy-btn",onClick:()=>jd(Ql(),ye),"aria-label":"Copy code",children:kd===ye?o.jsxs(o.Fragment,{children:[o.jsx(hp,{size:13,className:"copy-btn-icon"}),o.jsx("span",{children:"Copied!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(Tp,{size:13,className:"copy-btn-icon"}),o.jsx("span",{children:"Copy Code"})]})})]}),o.jsx("div",{className:"code-pane-body",children:o.jsx("pre",{children:o.jsx("code",{dangerouslySetInnerHTML:{__html:Bm(Ql(),ye==="css"?"css":ye==="cli"?"bash":"tsx")}})})})]})]})})]})]})]})}aa.createRoot(document.getElementById("root")).render(o.jsx(Vr.StrictMode,{children:o.jsx(Um,{})}));

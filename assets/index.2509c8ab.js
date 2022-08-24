function zd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Pd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Pd();function Od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Ad=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),jd=Symbol.for("react.memo"),Vd=Symbol.for("react.lazy"),ps=Symbol.iterator;function Ud(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Du=Object.assign,Fu={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Au}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ju(){}ju.prototype=Tn.prototype;function la(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Au}var aa=la.prototype=new ju;aa.constructor=la;Du(aa,Tn.prototype);aa.isPureReactComponent=!0;var ms=Array.isArray,Vu=Object.prototype.hasOwnProperty,sa={current:null},Uu={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Vu.call(t,r)&&!Uu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Nr,type:e,key:i,ref:l,props:o,_owner:sa.current}}function Bd(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nr}function Hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hs=/\/+/g;function Mi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hd(""+e.key):t.toString(36)}function eo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Nr:case Td:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Mi(l,0):r,ms(o)?(n="",e!=null&&(n=e.replace(hs,"$&/")+"/"),eo(o,t,n,"",function(c){return c})):o!=null&&(ua(o)&&(o=Bd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(hs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ms(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Mi(i,a);l+=eo(i,t,n,s,o)}else if(s=Ud(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Mi(i,a++),l+=eo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ir(e,t,n){if(e==null)return e;var r=[],o=0;return eo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},to={transition:null},Qd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:to,ReactCurrentOwner:sa};R.Children={map:Ir,forEach:function(e,t,n){Ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ir(e,function(){t++}),t},toArray:function(e){return Ir(e,function(t){return t})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Tn;R.Fragment=Md;R.Profiler=Rd;R.PureComponent=la;R.StrictMode=Ld;R.Suspense=Fd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Du({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=sa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Vu.call(t,s)&&!Uu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nr,type:e.type,key:o,ref:i,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:Ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};R.createElement=Bu;R.createFactory=function(e){var t=Bu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Dd,render:e}};R.isValidElement=ua;R.lazy=function(e){return{$$typeof:Vd,_payload:{_status:-1,_result:e},_init:Wd}};R.memo=function(e,t){return{$$typeof:jd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=to.transition;to.transition={};try{e()}finally{to.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.2.0";(function(e){e.exports=R})(L);const lr=Od(L.exports),vo=zd({__proto__:null,default:lr},[L.exports]);var al={},Hu={exports:{}},Le={},Wu={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,O){var T=N.length;N.push(O);e:for(;0<T;){var q=T-1>>>1,oe=N[q];if(0<o(oe,O))N[q]=O,N[T]=oe,T=q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],T=N.pop();if(T!==O){N[0]=T;e:for(var q=0,oe=N.length,Lr=oe>>>1;q<Lr;){var Vt=2*(q+1)-1,Ti=N[Vt],Ut=Vt+1,Rr=N[Ut];if(0>o(Ti,T))Ut<oe&&0>o(Rr,Ti)?(N[q]=Rr,N[Ut]=T,q=Ut):(N[q]=Ti,N[Vt]=T,q=Vt);else if(Ut<oe&&0>o(Rr,T))N[q]=Rr,N[Ut]=T,q=Ut;else break e}}return O}function o(N,O){var T=N.sortIndex-O.sortIndex;return T!==0?T:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],p=1,m=null,h=3,w=!1,g=!1,y=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=N)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function v(N){if(y=!1,d(N),!g)if(n(s)!==null)g=!0,Pi(k);else{var O=n(c);O!==null&&Oi(v,O.startTime-N)}}function k(N,O){g=!1,y&&(y=!1,f(P),P=-1),w=!0;var T=h;try{for(d(O),m=n(s);m!==null&&(!(m.expirationTime>O)||N&&!He());){var q=m.callback;if(typeof q=="function"){m.callback=null,h=m.priorityLevel;var oe=q(m.expirationTime<=O);O=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(s)&&r(s),d(O)}else r(s);m=n(s)}if(m!==null)var Lr=!0;else{var Vt=n(c);Vt!==null&&Oi(v,Vt.startTime-O),Lr=!1}return Lr}finally{m=null,h=T,w=!1}}var E=!1,$=null,P=-1,Z=5,I=-1;function He(){return!(e.unstable_now()-I<Z)}function An(){if($!==null){var N=e.unstable_now();I=N;var O=!0;try{O=$(!0,N)}finally{O?Dn():(E=!1,$=null)}}else E=!1}var Dn;if(typeof u=="function")Dn=function(){u(An)};else if(typeof MessageChannel<"u"){var ds=new MessageChannel,Nd=ds.port2;ds.port1.onmessage=An,Dn=function(){Nd.postMessage(null)}}else Dn=function(){z(An,0)};function Pi(N){$=N,E||(E=!0,Dn())}function Oi(N,O){P=z(function(){N(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Pi(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var T=h;h=O;try{return N()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=h;h=N;try{return O()}finally{h=T}},e.unstable_scheduleCallback=function(N,O,T){var q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?q+T:q):T=q,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=T+oe,N={id:p++,callback:O,priorityLevel:N,startTime:T,expirationTime:oe,sortIndex:-1},T>q?(N.sortIndex=T,t(c,N),n(s)===null&&N===n(c)&&(y?(f(P),P=-1):y=!0,Oi(v,T-q))):(N.sortIndex=oe,t(s,N),g||w||(g=!0,Pi(k))),N},e.unstable_shouldYield=He,e.unstable_wrapCallback=function(N){var O=h;return function(){var T=h;h=O;try{return N.apply(this,arguments)}finally{h=T}}}})(Qu);(function(e){e.exports=Qu})(Wu);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=L.exports,Me=Wu.exports;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yu=new Set,ar={};function en(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(ar[e]=t,e=0;e<t.length;e++)Yu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vs={},ys={};function Yd(e){return sl.call(ys,e)?!0:sl.call(vs,e)?!1:bd.test(e)?ys[e]=!0:(vs[e]=!0,!1)}function Xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,fa);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,fa);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,fa);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,o,r)&&(n=null),r||o===null?Yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),rn=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Gu=Symbol.for("react.offscreen"),gs=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Li;function Yn(e){if(Li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var Ri=!1;function Ii(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function Gd(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case on:return"Fragment";case rn:return"Portal";case ul:return"Profiler";case pa:return"StrictMode";case cl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ku:return(e.displayName||"Context")+".Consumer";case Xu:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function Zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qd(e){var t=Zu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=qd(e))}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ws(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ju(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function ml(e,t){Ju(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ss(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Xn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function ec(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ks(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var e0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(e0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,yn=null,gn=null;function $s(e){if(e=Or(e)){if(typeof Sl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Yo(t),Sl(e.stateNode,e.type,t))}}function ic(e){yn?gn?gn.push(e):gn=[e]:yn=e}function lc(){if(yn){var e=yn,t=gn;if(gn=yn=null,$s(e),t)for(e=0;e<t.length;e++)$s(t[e])}}function ac(e,t){return e(t)}function sc(){}var Ai=!1;function uc(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return ac(e,t,n)}finally{Ai=!1,(yn!==null||gn!==null)&&(sc(),lc())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var kl=!1;if(mt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){kl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{kl=!1}function t0(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var qn=!1,go=null,wo=!1,$l=null,n0={onError:function(e){qn=!0,go=e}};function r0(e,t,n,r,o,i,l,a,s){qn=!1,go=null,t0.apply(n0,arguments)}function o0(e,t,n,r,o,i,l,a,s){if(r0.apply(this,arguments),qn){if(qn){var c=go;qn=!1,go=null}else throw Error(x(198));wo||(wo=!0,$l=c)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cs(e){if(tn(e)!==e)throw Error(x(188))}function i0(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Cs(o),e;if(i===r)return Cs(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function fc(e){return e=i0(e),e!==null?dc(e):null}function dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dc(e);if(t!==null)return t;e=e.sibling}return null}var pc=Me.unstable_scheduleCallback,Es=Me.unstable_cancelCallback,l0=Me.unstable_shouldYield,a0=Me.unstable_requestPaint,J=Me.unstable_now,s0=Me.unstable_getCurrentPriorityLevel,ya=Me.unstable_ImmediatePriority,mc=Me.unstable_UserBlockingPriority,xo=Me.unstable_NormalPriority,u0=Me.unstable_LowPriority,hc=Me.unstable_IdlePriority,Ho=null,rt=null;function c0(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:p0,f0=Math.log,d0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(f0(e)/d0|0)|0}var jr=64,Vr=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Kn(a):(i&=l,i!==0&&(r=Kn(i)))}else l=n&~o,l!==0?r=Kn(l):i!==0&&(r=Kn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),a=1<<l,s=o[l];s===-1?((a&n)===0||(a&r)!==0)&&(o[l]=m0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=jr;return jr<<=1,(jr&4194240)===0&&(jr=64),e}function Di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function v0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var j=0;function yc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gc,wa,wc,xc,Sc,El=!1,Ur=[],_t=null,Nt=null,zt=null,cr=new Map,fr=new Map,kt=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function Vn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Or(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function g0(e,t,n,r,o){switch(t){case"focusin":return _t=Vn(_t,e,t,n,r,o),!0;case"dragenter":return Nt=Vn(Nt,e,t,n,r,o),!0;case"mouseover":return zt=Vn(zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return cr.set(i,Vn(cr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fr.set(i,Vn(fr.get(i)||null,e,t,n,r,o)),!0}return!1}function kc(e){var t=Wt(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=cc(n),t!==null){e.blockedOn=t,Sc(e.priority,function(){wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=Or(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ns(e,t,n){no(e)&&n.delete(t)}function w0(){El=!1,_t!==null&&no(_t)&&(_t=null),Nt!==null&&no(Nt)&&(Nt=null),zt!==null&&no(zt)&&(zt=null),cr.forEach(Ns),fr.forEach(Ns)}function Un(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,w0)))}function dr(e){function t(o){return Un(o,e)}if(0<Ur.length){Un(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Un(_t,e),Nt!==null&&Un(Nt,e),zt!==null&&Un(zt,e),cr.forEach(t),fr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)kc(n),n.blockedOn===null&&kt.shift()}var wn=gt.ReactCurrentBatchConfig,ko=!0;function x0(e,t,n,r){var o=j,i=wn.transition;wn.transition=null;try{j=1,xa(e,t,n,r)}finally{j=o,wn.transition=i}}function S0(e,t,n,r){var o=j,i=wn.transition;wn.transition=null;try{j=4,xa(e,t,n,r)}finally{j=o,wn.transition=i}}function xa(e,t,n,r){if(ko){var o=_l(e,t,n,r);if(o===null)Yi(e,t,r,$o,n),_s(e,r);else if(g0(o,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<y0.indexOf(e)){for(;o!==null;){var i=Or(o);if(i!==null&&gc(i),i=_l(e,t,n,r),i===null&&Yi(e,t,r,$o,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Yi(e,t,r,null,n)}}var $o=null;function _l(e,t,n,r){if($o=null,e=va(r),e=Wt(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s0()){case ya:return 1;case mc:return 4;case xo:case u0:return 16;case hc:return 536870912;default:return 16}default:return 16}}var Ct=null,Sa=null,ro=null;function Cc(){if(ro)return ro;var e,t=Sa,n=t.length,r,o="value"in Ct?Ct.value:Ct.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ro=o.slice(e,1<r?1-r:void 0)}function oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function zs(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:zs,this.isPropagationStopped=zs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Re(Mn),Pr=K({},Mn,{view:0,detail:0}),k0=Re(Pr),Fi,ji,Bn,Wo=K({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(Fi=e.screenX-Bn.screenX,ji=e.screenY-Bn.screenY):ji=Fi=0,Bn=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),Ps=Re(Wo),$0=K({},Wo,{dataTransfer:0}),C0=Re($0),E0=K({},Pr,{relatedTarget:0}),Vi=Re(E0),_0=K({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Re(_0),z0=K({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=Re(z0),O0=K({},Mn,{data:0}),Os=Re(O0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=L0[e])?!!t[e]:!1}function $a(){return R0}var I0=K({},Pr,{key:function(e){if(e.key){var t=T0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?M0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=Re(I0),D0=K({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=Re(D0),F0=K({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),j0=Re(F0),V0=K({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Re(V0),B0=K({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=Re(B0),W0=[9,13,27,32],Ca=mt&&"CompositionEvent"in window,Jn=null;mt&&"documentMode"in document&&(Jn=document.documentMode);var Q0=mt&&"TextEvent"in window&&!Jn,Ec=mt&&(!Ca||Jn&&8<Jn&&11>=Jn),Ms=String.fromCharCode(32),Ls=!1;function _c(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function b0(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Ls=!0,Ms);case"textInput":return e=t.data,e===Ms&&Ls?null:e;default:return null}}function Y0(e,t){if(ln)return e==="compositionend"||!Ca&&_c(e,t)?(e=Cc(),ro=Sa=Ct=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function zc(e,t,n,r){ic(r),t=Co(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,pr=null;function K0(e){jc(e,0)}function Qo(e){var t=un(e);if(qu(t))return e}function G0(e,t){if(e==="change")return t}var Pc=!1;if(mt){var Ui;if(mt){var Bi="oninput"in document;if(!Bi){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),Bi=typeof Is.oninput=="function"}Ui=Bi}else Ui=!1;Pc=Ui&&(!document.documentMode||9<document.documentMode)}function As(){er&&(er.detachEvent("onpropertychange",Oc),pr=er=null)}function Oc(e){if(e.propertyName==="value"&&Qo(pr)){var t=[];zc(t,pr,e,va(e)),uc(K0,t)}}function Z0(e,t,n){e==="focusin"?(As(),er=t,pr=n,er.attachEvent("onpropertychange",Oc)):e==="focusout"&&As()}function q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(pr)}function J0(e,t){if(e==="click")return Qo(t)}function ep(e,t){if(e==="input"||e==="change")return Qo(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:tp;function mr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!sl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=Ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ds(n)}}function Tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(){for(var e=window,t=yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yo(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=Mc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tc(n.ownerDocument.documentElement,n)){if(r!==null&&Ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fs(n,i);var l=Fs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=mt&&"documentMode"in document&&11>=document.documentMode,an=null,Nl=null,tr=null,zl=!1;function js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||an==null||an!==yo(r)||(r=an,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&mr(tr,r)||(tr=r,r=Co(Nl,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=an)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},Hi={},Lc={};mt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function bo(e){if(Hi[e])return Hi[e];if(!sn[e])return e;var t=sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return Hi[e]=t[n];return e}var Rc=bo("animationend"),Ic=bo("animationiteration"),Ac=bo("animationstart"),Dc=bo("transitionend"),Fc=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Fc.set(e,t),en(t,[e])}for(var Wi=0;Wi<Vs.length;Wi++){var Qi=Vs[Wi],op=Qi.toLowerCase(),ip=Qi[0].toUpperCase()+Qi.slice(1);Dt(op,"on"+ip)}Dt(Rc,"onAnimationEnd");Dt(Ic,"onAnimationIteration");Dt(Ac,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(Dc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function Us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,o0(r,t,void 0,e),e.currentTarget=null}function jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Us(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Us(o,a,c),i=s}}}if(wo)throw e=$l,wo=!1,$l=null,e}function W(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(Vc(t,e,2,!1),n.add(r))}function bi(e,t,n){var r=0;t&&(r|=4),Vc(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Wr]){e[Wr]=!0,Yu.forEach(function(n){n!=="selectionchange"&&(lp.has(n)||bi(n,!1,e),bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,bi("selectionchange",!1,t))}}function Vc(e,t,n,r){switch($c(t)){case 1:var o=x0;break;case 4:o=S0;break;default:o=xa}n=o.bind(null,t,n,e),o=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Yi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Wt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}uc(function(){var c=i,p=va(n),m=[];e:{var h=Fc.get(e);if(h!==void 0){var w=ka,g=e;switch(e){case"keypress":if(oo(n)===0)break e;case"keydown":case"keyup":w=A0;break;case"focusin":g="focus",w=Vi;break;case"focusout":g="blur",w=Vi;break;case"beforeblur":case"afterblur":w=Vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=j0;break;case Rc:case Ic:case Ac:w=N0;break;case Dc:w=U0;break;case"scroll":w=k0;break;case"wheel":w=H0;break;case"copy":case"cut":case"paste":w=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ts}var y=(t&4)!==0,z=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var u=c,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=ur(u,f),v!=null&&y.push(vr(u,v,d)))),z)break;u=u.return}0<y.length&&(h=new w(h,g,null,n,p),m.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==xl&&(g=n.relatedTarget||n.fromElement)&&(Wt(g)||g[ht]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=c,g=g?Wt(g):null,g!==null&&(z=tn(g),g!==z||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=c),w!==g)){if(y=Ps,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ts,v="onPointerLeave",f="onPointerEnter",u="pointer"),z=w==null?h:un(w),d=g==null?h:un(g),h=new y(v,u+"leave",w,n,p),h.target=z,h.relatedTarget=d,v=null,Wt(p)===c&&(y=new y(f,u+"enter",g,n,p),y.target=d,y.relatedTarget=z,v=y),z=v,w&&g)t:{for(y=w,f=g,u=0,d=y;d;d=nn(d))u++;for(d=0,v=f;v;v=nn(v))d++;for(;0<u-d;)y=nn(y),u--;for(;0<d-u;)f=nn(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=nn(y),f=nn(f)}y=null}else y=null;w!==null&&Bs(m,h,w,y,!1),g!==null&&z!==null&&Bs(m,z,g,y,!0)}}e:{if(h=c?un(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=G0;else if(Rs(h))if(Pc)k=ep;else{k=q0;var E=Z0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=J0);if(k&&(k=k(e,c))){zc(m,k,n,p);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&hl(h,"number",h.value)}switch(E=c?un(c):window,e){case"focusin":(Rs(E)||E.contentEditable==="true")&&(an=E,Nl=c,tr=null);break;case"focusout":tr=Nl=an=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,js(m,n,p);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":js(m,n,p)}var $;if(Ca)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ln?_c(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ec&&n.locale!=="ko"&&(ln||P!=="onCompositionStart"?P==="onCompositionEnd"&&ln&&($=Cc()):(Ct=p,Sa="value"in Ct?Ct.value:Ct.textContent,ln=!0)),E=Co(c,P),0<E.length&&(P=new Os(P,e,null,n,p),m.push({event:P,listeners:E}),$?P.data=$:($=Nc(n),$!==null&&(P.data=$)))),($=Q0?b0(e,n):Y0(e,n))&&(c=Co(c,"onBeforeInput"),0<c.length&&(p=new Os("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=$))}jc(m,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ur(e,n),i!=null&&r.unshift(vr(e,i,o)),i=ur(e,t),i!=null&&r.push(vr(e,i,o))),e=e.return}return r}function nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=ur(n,i),s!=null&&l.unshift(vr(n,s,a))):o||(s=ur(n,i),s!=null&&l.push(vr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ap=/\r\n?/g,sp=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(sp,"")}function Qr(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(x(425))}function Eo(){}var Pl=null,Ol=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(fp)}:Ml;function fp(e){setTimeout(function(){throw e})}function Xi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),nt="__reactFiber$"+Ln,yr="__reactProps$"+Ln,ht="__reactContainer$"+Ln,Ll="__reactEvents$"+Ln,dp="__reactListeners$"+Ln,pp="__reactHandles$"+Ln;function Wt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[nt])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function Or(e){return e=e[nt]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Yo(e){return e[yr]||null}var Rl=[],cn=-1;function Ft(e){return{current:e}}function Q(e){0>cn||(e.current=Rl[cn],Rl[cn]=null,cn--)}function H(e,t){cn++,Rl[cn]=e.current,e.current=t}var At={},he=Ft(At),Ce=Ft(!1),Kt=At;function Cn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function _o(){Q(Ce),Q(he)}function bs(e,t,n){if(he.current!==At)throw Error(x(168));H(he,t),H(Ce,n)}function Uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,Zd(e)||"Unknown",o));return K({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Kt=he.current,H(he,e),H(Ce,Ce.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Uc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(he),H(he,e)):Q(Ce),H(Ce,n)}var ct=null,Xo=!1,Ki=!1;function Bc(e){ct===null?ct=[e]:ct.push(e)}function mp(e){Xo=!0,Bc(e)}function jt(){if(!Ki&&ct!==null){Ki=!0;var e=0,t=j;try{var n=ct;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Xo=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),pc(ya,jt),o}finally{j=t,Ki=!1}}return null}var fn=[],dn=0,zo=null,Po=0,Ae=[],De=0,Gt=null,ft=1,dt="";function Bt(e,t){fn[dn++]=Po,fn[dn++]=zo,zo=e,Po=t}function Hc(e,t,n){Ae[De++]=ft,Ae[De++]=dt,Ae[De++]=Gt,Gt=e;var r=ft;e=dt;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var i=32-Xe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Xe(t)+o|n<<o|r,dt=i+e}else ft=1<<i|n<<o|r,dt=e}function _a(e){e.return!==null&&(Bt(e,1),Hc(e,1,0))}function Na(e){for(;e===zo;)zo=fn[--dn],fn[dn]=null,Po=fn[--dn],fn[dn]=null;for(;e===Gt;)Gt=Ae[--De],Ae[De]=null,dt=Ae[--De],Ae[De]=null,ft=Ae[--De],Ae[De]=null}var Oe=null,Pe=null,b=!1,Ye=null;function Wc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Pe=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Pe=null,!0):!1;default:return!1}}function Il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(b){var t=Pe;if(t){var n=t;if(!Xs(e,t)){if(Il(e))throw Error(x(418));t=Pt(n.nextSibling);var r=Oe;t&&Xs(e,t)?Wc(r,n):(e.flags=e.flags&-4097|2,b=!1,Oe=e)}}else{if(Il(e))throw Error(x(418));e.flags=e.flags&-4097|2,b=!1,Oe=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function br(e){if(e!==Oe)return!1;if(!b)return Ks(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=Pe)){if(Il(e))throw Qc(),Error(x(418));for(;t;)Wc(e,t),t=Pt(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Oe?Pt(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=Pe;e;)e=Pt(e.nextSibling)}function En(){Pe=Oe=null,b=!1}function za(e){Ye===null?Ye=[e]:Ye.push(e)}var hp=gt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oo=Ft(null),To=null,pn=null,Pa=null;function Oa(){Pa=pn=To=null}function Ta(e){var t=Oo.current;Q(Oo),e._currentValue=t}function Dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xn(e,t){To=e,Pa=pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&($e=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},pn===null){if(To===null)throw Error(x(308));pn=e,To.dependencies={lanes:0,firstContext:e}}else pn=pn.next=e;return t}var Qt=null;function Ma(e){Qt===null?Qt=[e]:Qt.push(e)}function bc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ma(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(A&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ma(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var o=e.updateQueue;St=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,p=c=s=null,a=i;do{var h=a.lane,w=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(h=t,w=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){m=g.call(w,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(w,m,h):g,h==null)break e;m=K({},m,h);break e;case 2:St=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,s=m):p=p.next=w,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=m}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Xc=new bu.Component().refs;function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(Ke(t,e,o,r),io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(Ke(t,e,o,r),io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Mt(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ot(e,o,r),t!==null&&(Ke(t,e,r,n),io(t,e,r))}};function qs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,i):!0}function Kc(e,t,n){var r=!1,o=At,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=Ee(t)?Kt:he.current,r=t.contextTypes,i=(r=r!=null)?Cn(e,o):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Xc,La(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=Ee(t)?Kt:he.current,o.context=Cn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ko.enqueueReplaceState(o,o.state,null),Mo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Xc&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Yr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eu(e){var t=e._init;return t(e._payload)}function Gc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Lt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,v){return u===null||u.tag!==6?(u=nl(d,f.mode,v),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,v){var k=d.type;return k===on?p(f,u,d.props.children,v,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&eu(k)===u.type)?(v=o(u,d.props),v.ref=Hn(f,u,d),v.return=f,v):(v=fo(d.type,d.key,d.props,null,f.mode,v),v.ref=Hn(f,u,d),v.return=f,v)}function c(f,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=rl(d,f.mode,v),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function p(f,u,d,v,k){return u===null||u.tag!==7?(u=Xt(d,f.mode,v,k),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=nl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ar:return d=fo(u.type,u.key,u.props,null,f.mode,d),d.ref=Hn(f,null,u),d.return=f,d;case rn:return u=rl(u,f.mode,d),u.return=f,u;case xt:var v=u._init;return m(f,v(u._payload),d)}if(Xn(u)||Fn(u))return u=Xt(u,f.mode,d,null),u.return=f,u;Yr(f,u)}return null}function h(f,u,d,v){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:a(f,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ar:return d.key===k?s(f,u,d,v):null;case rn:return d.key===k?c(f,u,d,v):null;case xt:return k=d._init,h(f,u,k(d._payload),v)}if(Xn(d)||Fn(d))return k!==null?null:p(f,u,d,v,null);Yr(f,d)}return null}function w(f,u,d,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(u,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ar:return f=f.get(v.key===null?d:v.key)||null,s(u,f,v,k);case rn:return f=f.get(v.key===null?d:v.key)||null,c(u,f,v,k);case xt:var E=v._init;return w(f,u,d,E(v._payload),k)}if(Xn(v)||Fn(v))return f=f.get(d)||null,p(u,f,v,k,null);Yr(u,v)}return null}function g(f,u,d,v){for(var k=null,E=null,$=u,P=u=0,Z=null;$!==null&&P<d.length;P++){$.index>P?(Z=$,$=null):Z=$.sibling;var I=h(f,$,d[P],v);if(I===null){$===null&&($=Z);break}e&&$&&I.alternate===null&&t(f,$),u=i(I,u,P),E===null?k=I:E.sibling=I,E=I,$=Z}if(P===d.length)return n(f,$),b&&Bt(f,P),k;if($===null){for(;P<d.length;P++)$=m(f,d[P],v),$!==null&&(u=i($,u,P),E===null?k=$:E.sibling=$,E=$);return b&&Bt(f,P),k}for($=r(f,$);P<d.length;P++)Z=w($,f,P,d[P],v),Z!==null&&(e&&Z.alternate!==null&&$.delete(Z.key===null?P:Z.key),u=i(Z,u,P),E===null?k=Z:E.sibling=Z,E=Z);return e&&$.forEach(function(He){return t(f,He)}),b&&Bt(f,P),k}function y(f,u,d,v){var k=Fn(d);if(typeof k!="function")throw Error(x(150));if(d=k.call(d),d==null)throw Error(x(151));for(var E=k=null,$=u,P=u=0,Z=null,I=d.next();$!==null&&!I.done;P++,I=d.next()){$.index>P?(Z=$,$=null):Z=$.sibling;var He=h(f,$,I.value,v);if(He===null){$===null&&($=Z);break}e&&$&&He.alternate===null&&t(f,$),u=i(He,u,P),E===null?k=He:E.sibling=He,E=He,$=Z}if(I.done)return n(f,$),b&&Bt(f,P),k;if($===null){for(;!I.done;P++,I=d.next())I=m(f,I.value,v),I!==null&&(u=i(I,u,P),E===null?k=I:E.sibling=I,E=I);return b&&Bt(f,P),k}for($=r(f,$);!I.done;P++,I=d.next())I=w($,f,P,I.value,v),I!==null&&(e&&I.alternate!==null&&$.delete(I.key===null?P:I.key),u=i(I,u,P),E===null?k=I:E.sibling=I,E=I);return e&&$.forEach(function(An){return t(f,An)}),b&&Bt(f,P),k}function z(f,u,d,v){if(typeof d=="object"&&d!==null&&d.type===on&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ar:e:{for(var k=d.key,E=u;E!==null;){if(E.key===k){if(k=d.type,k===on){if(E.tag===7){n(f,E.sibling),u=o(E,d.props.children),u.return=f,f=u;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&eu(k)===E.type){n(f,E.sibling),u=o(E,d.props),u.ref=Hn(f,E,d),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===on?(u=Xt(d.props.children,f.mode,v,d.key),u.return=f,f=u):(v=fo(d.type,d.key,d.props,null,f.mode,v),v.ref=Hn(f,u,d),v.return=f,f=v)}return l(f);case rn:e:{for(E=d.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=rl(d,f.mode,v),u.return=f,f=u}return l(f);case xt:return E=d._init,z(f,u,E(d._payload),v)}if(Xn(d))return g(f,u,d,v);if(Fn(d))return y(f,u,d,v);Yr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=nl(d,f.mode,v),u.return=f,f=u),l(f)):n(f,u)}return z}var _n=Gc(!0),Zc=Gc(!1),Tr={},ot=Ft(Tr),gr=Ft(Tr),wr=Ft(Tr);function bt(e){if(e===Tr)throw Error(x(174));return e}function Ra(e,t){switch(H(wr,t),H(gr,e),H(ot,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}Q(ot),H(ot,t)}function Nn(){Q(ot),Q(gr),Q(wr)}function qc(e){bt(wr.current);var t=bt(ot.current),n=yl(t,e.type);t!==n&&(H(gr,e),H(ot,n))}function Ia(e){gr.current===e&&(Q(ot),Q(gr))}var Y=Ft(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Aa(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var lo=gt.ReactCurrentDispatcher,Zi=gt.ReactCurrentBatchConfig,Zt=0,X=null,ne=null,ie=null,Ro=!1,nr=!1,xr=0,vp=0;function fe(){throw Error(x(321))}function Da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,o,i){if(Zt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?xp:Sp,e=n(r,o),nr){i=0;do{if(nr=!1,xr=0,25<=i)throw Error(x(301));i+=1,ie=ne=null,t.updateQueue=null,lo.current=kp,e=n(r,o)}while(nr)}if(lo.current=Io,t=ne!==null&&ne.next!==null,Zt=0,ie=ne=X=null,Ro=!1,t)throw Error(x(300));return e}function ja(){var e=xr!==0;return xr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(x(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Sr(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var p=c.lane;if((Zt&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,X.lanes|=p,qt|=p}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,Ge(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Ue(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Jc(){}function ef(e,t){var n=X,r=Ue(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Va(rf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,kr(9,nf.bind(null,n,r,o,t),void 0,null),le===null)throw Error(x(349));(Zt&30)!==0||tf(n,t,o)}return o}function tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nf(e,t,n,r){t.value=n,t.getSnapshot=r,of(t)&&lf(e)}function rf(e,t,n){return n(function(){of(t)&&lf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function lf(e){var t=vt(e,1);t!==null&&Ke(t,e,1,-1)}function tu(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,X,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function af(){return Ue().memoizedState}function ao(e,t,n,r){var o=Je();X.flags|=e,o.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var o=Ue();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&Da(r,l.deps)){o.memoizedState=kr(t,n,i,r);return}}X.flags|=e,o.memoizedState=kr(1|t,n,i,r)}function nu(e,t){return ao(8390656,8,e,t)}function Va(e,t){return Go(2048,8,e,t)}function sf(e,t){return Go(4,2,e,t)}function uf(e,t){return Go(4,4,e,t)}function cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ff(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,cf.bind(null,t,e),n)}function Ua(){}function df(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mf(e,t,n){return(Zt&21)===0?(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n):(Ge(n,t)||(n=vc(),X.lanes|=n,qt|=n,e.baseState=!0),t)}function yp(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{j=n,Zi.transition=r}}function hf(){return Ue().memoizedState}function gp(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vf(e))yf(t,n);else if(n=bc(e,t,n,r),n!==null){var o=ye();Ke(n,e,r,o),gf(n,t,r)}}function wp(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vf(e))yf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,l)){var s=t.interleaved;s===null?(o.next=o,Ma(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=bc(e,t,o,r),n!==null&&(o=ye(),Ke(n,e,r,o),gf(n,t,r))}}function vf(e){var t=e.alternate;return e===X||t!==null&&t===X}function yf(e,t){nr=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var Io={readContext:Ve,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},xp={readContext:Ve,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ao(4194308,4,cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:Ua,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=yp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=Je();if(b){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),le===null)throw Error(x(349));(Zt&30)!==0||tf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,nu(rf.bind(null,r,i,e),[e]),r.flags|=2048,kr(9,nf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(b){var n=dt,r=ft;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sp={readContext:Ve,useCallback:df,useContext:Ve,useEffect:Va,useImperativeHandle:ff,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:pf,useReducer:qi,useRef:af,useState:function(){return qi(Sr)},useDebugValue:Ua,useDeferredValue:function(e){var t=Ue();return mf(t,ne.memoizedState,e)},useTransition:function(){var e=qi(Sr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:ef,useId:hf,unstable_isNewReconciler:!1},kp={readContext:Ve,useCallback:df,useContext:Ve,useEffect:Va,useImperativeHandle:ff,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:pf,useReducer:Ji,useRef:af,useState:function(){return Ji(Sr)},useDebugValue:Ua,useDeferredValue:function(e){var t=Ue();return ne===null?t.memoizedState=e:mf(t,ne.memoizedState,e)},useTransition:function(){var e=Ji(Sr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:ef,useId:hf,unstable_isNewReconciler:!1};function zn(e,t){try{var n="",r=t;do n+=Gd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function el(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $p=typeof WeakMap=="function"?WeakMap:Map;function wf(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,Gl=r),Vl(e,t)},n}function xf(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Vl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vl(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $p;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dp.bind(null,e,t,n),t.then(e,e))}function ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function iu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Cp=gt.ReactCurrentOwner,$e=!1;function ve(e,t,n,r){t.child=e===null?Zc(t,null,n,r):_n(t,e.child,n,r)}function lu(e,t,n,r,o){n=n.render;var i=t.ref;return xn(t,o),r=Fa(e,t,n,r,i,o),n=ja(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(b&&n&&_a(t),t.flags|=1,ve(e,t,r,o),t.child)}function au(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Sf(e,t,i,r,o)):(e=fo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(l,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,yt(e,t,o)}return Ul(e,t,n,r,o)}function kf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(hn,ze),ze|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(hn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(hn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(hn,ze),ze|=r;return ve(e,t,o,n),t.child}function $f(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,n,r,o){var i=Ee(n)?Kt:he.current;return i=Cn(t,i),xn(t,o),n=Fa(e,t,n,r,i,o),r=ja(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(b&&r&&_a(t),t.flags|=1,ve(e,t,n,o),t.child)}function su(e,t,n,r,o){if(Ee(n)){var i=!0;No(t)}else i=!1;if(xn(t,o),t.stateNode===null)so(e,t),Kc(t,n,r),jl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Ee(n)?Kt:he.current,c=Cn(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Js(t,l,r,c),St=!1;var h=t.memoizedState;l.state=h,Mo(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ce.current||St?(typeof p=="function"&&(Fl(t,n,p,r),s=t.memoizedState),(a=St||qs(t,n,a,r,h,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),l.props=c,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Ee(n)?Kt:he.current,s=Cn(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Js(t,l,r,s),St=!1,h=t.memoizedState,l.state=h,Mo(t,r,l,o);var g=t.memoizedState;a!==m||h!==g||Ce.current||St?(typeof w=="function"&&(Fl(t,n,w,r),g=t.memoizedState),(c=St||qs(t,n,c,r,h,g,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,i,o)}function Bl(e,t,n,r,o,i){$f(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ys(t,n,!1),yt(e,t,i);r=t.stateNode,Cp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_n(t,e.child,null,i),t.child=_n(t,null,a,i)):ve(e,t,a,i),t.memoizedState=r.state,o&&Ys(t,n,!0),t.child}function Cf(e){var t=e.stateNode;t.pendingContext?bs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bs(e,t.context,!1),Ra(e,t.containerInfo)}function uu(e,t,n,r,o){return En(),za(o),t.flags|=256,ve(e,t,n,r),t.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ef(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Y,o&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Jo(l,r,0,null),e=Xt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(n),t.memoizedState=Hl,e):Ba(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ep(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Lt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Lt(a,i):(i=Xt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Wl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Hl,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xr(e,t,n,r){return r!==null&&za(r),_n(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ep(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=el(Error(x(422))),Xr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Jo({mode:"visible",children:r.children},o,0,null),i=Xt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&_n(t,e.child,null,l),t.child.memoizedState=Wl(l),t.memoizedState=Hl,i);if((t.mode&1)===0)return Xr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=el(i,r,void 0),Xr(e,t,l,r)}if(a=(l&e.childLanes)!==0,$e||a){if(r=le,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vt(e,o),Ke(r,e,o,-1))}return Xa(),r=el(Error(x(421))),Xr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=Pt(o.nextSibling),Oe=t,b=!0,Ye=null,e!==null&&(Ae[De++]=ft,Ae[De++]=dt,Ae[De++]=Gt,ft=e.id,dt=e.overflow,Gt=t),t=Ba(t,r.children),t.flags|=4096,t)}function cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dl(e.return,t,n)}function tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function _f(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,n,t);else if(e.tag===19)cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}tl(t,!0,n,null,i);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _p(e,t,n){switch(t.tag){case 3:Cf(t),En();break;case 5:qc(t);break;case 1:Ee(t.type)&&No(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Oo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ef(e,t,n):(H(Y,Y.current&1),e=yt(e,t,n),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return _f(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,kf(e,t,n)}return yt(e,t,n)}var Nf,Ql,zf,Pf;Nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};zf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bt(ot.current);var i=null;switch(n){case"input":o=pl(e,o),r=pl(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=vl(e,o),r=vl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}gl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ar.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ar.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Pf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wn(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(Na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&_o(),de(t),null;case 3:return r=t.stateNode,Nn(),Q(Ce),Q(he),Aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ye!==null&&(Jl(Ye),Ye=null))),Ql(e,t),de(t),null;case 5:Ia(t);var o=bt(wr.current);if(n=t.type,e!==null&&t.stateNode!=null)zf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=bt(ot.current),br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[yr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<Gn.length;o++)W(Gn[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ws(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Ss(r,i),W("invalid",r)}gl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),o=["children",""+a]):ar.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":Dr(r),xs(r,i,!0);break;case"textarea":Dr(r),ks(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[yr]=r,Nf(e,t,!1,!1),t.stateNode=e;e:{switch(l=wl(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<Gn.length;o++)W(Gn[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":ws(e,r),o=pl(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ss(e,r),o=vl(e,r),W("invalid",e);break;default:o=r}gl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?oc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&nc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&sr(e,s):typeof s=="number"&&sr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ar.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&da(e,i,s,l))}switch(n){case"input":Dr(e),xs(e,r,!1);break;case"textarea":Dr(e),ks(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Pf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=bt(wr.current),bt(ot.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return de(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Pe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Qc(),En(),t.flags|=98560,i=!1;else if(i=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[nt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ye!==null&&(Jl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?re===0&&(re=3):Xa())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Nn(),Ql(e,t),e===null&&hr(t.stateNode.containerInfo),de(t),null;case 10:return Ta(t.type._context),de(t),null;case 17:return Ee(t.type)&&_o(),de(t),null;case 19:if(Q(Y),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Wn(i,!1);else{if(re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,Wn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Pn&&(t.flags|=128,r=!0,Wn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!b)return de(t),null}else 2*J()-i.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Wn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Y.current,H(Y,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ze&1073741824)!==0&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function zp(e,t){switch(Na(t),t.tag){case 1:return Ee(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),Q(Ce),Q(he),Aa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Nn(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var Kr=!1,me=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,_=null;function mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){G(e,t,r)}}var fu=!1;function Op(e,t){if(Pl=ko,e=Mc(),Ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,p=0,m=e,h=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++c===o&&(a=l),h===i&&++p===r&&(s=l),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},ko=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,z=g.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Qe(t.type,y),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return g=fu,fu=!1,g}function rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bl(t,n,i)}o=o.next}while(o!==r)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Of(e){var t=e.alternate;t!==null&&(e.alternate=null,Of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[yr],delete t[Ll],delete t[dp],delete t[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tf(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}var se=null,be=!1;function wt(e,t,n){for(n=n.child;n!==null;)Mf(e,t,n),n=n.sibling}function Mf(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:me||mn(n,t);case 6:var r=se,o=be;se=null,wt(e,t,n),se=r,be=o,se!==null&&(be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(be?(e=se,n=n.stateNode,e.nodeType===8?Xi(e.parentNode,n):e.nodeType===1&&Xi(e,n),dr(e)):Xi(se,n.stateNode));break;case 4:r=se,o=be,se=n.stateNode.containerInfo,be=!0,wt(e,t,n),se=r,be=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&bl(n,t,l),o=o.next}while(o!==r)}wt(e,t,n);break;case 1:if(!me&&(mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,wt(e,t,n),me=r):wt(e,t,n);break;default:wt(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pp),t.forEach(function(r){var o=jp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,be=!1;break e;case 3:se=a.stateNode.containerInfo,be=!0;break e;case 4:se=a.stateNode.containerInfo,be=!0;break e}a=a.return}if(se===null)throw Error(x(160));Mf(i,l,o),se=null,be=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lf(t,e),t=t.sibling}function Lf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),qe(e),r&4){try{rr(3,e,e.return),Zo(3,e)}catch(y){G(e,e.return,y)}try{rr(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:We(t,e),qe(e),r&512&&n!==null&&mn(n,n.return);break;case 5:if(We(t,e),qe(e),r&512&&n!==null&&mn(n,n.return),e.flags&32){var o=e.stateNode;try{sr(o,"")}catch(y){G(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ju(o,i),wl(a,l);var c=wl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?oc(o,m):p==="dangerouslySetInnerHTML"?nc(o,m):p==="children"?sr(o,m):da(o,p,m,c)}switch(a){case"input":ml(o,i);break;case"textarea":ec(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?vn(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?vn(o,!!i.multiple,i.defaultValue,!0):vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[yr]=i}catch(y){G(e,e.return,y)}}break;case 6:if(We(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){G(e,e.return,y)}}break;case 3:if(We(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:We(t,e),qe(e);break;case 13:We(t,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qa=J())),r&4&&pu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||p,We(t,e),me=c):We(t,e),qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(_=e,p=e.child;p!==null;){for(m=_=p;_!==null;){switch(h=_,w=h.child,h.tag){case 0:case 11:case 14:case 15:rr(4,h,h.return);break;case 1:mn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:mn(h,h.return);break;case 22:if(h.memoizedState!==null){hu(m);continue}}w!==null?(w.return=h,_=w):hu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=rc("display",l))}catch(y){G(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){G(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(t,e),qe(e),r&4&&pu(e);break;case 21:break;default:We(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(sr(o,""),r.flags&=-33);var i=du(e);Kl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=du(e);Xl(e,a,l);break;default:throw Error(x(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,n){_=e,Rf(e)}function Rf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Kr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||me;a=Kr;var c=me;if(Kr=l,(me=s)&&!c)for(_=o;_!==null;)l=_,s=l.child,l.tag===22&&l.memoizedState!==null?vu(o):s!==null?(s.return=l,_=s):vu(o);for(;i!==null;)_=i,Rf(i),i=i.sibling;_=o,Kr=a,me=c}mu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,_=i):mu(e)}}function mu(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:me||Zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}me||t.flags&512&&Yl(t)}catch(h){G(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function hu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function vu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){G(t,o,s)}}var i=t.return;try{Yl(t)}catch(s){G(t,i,s)}break;case 5:var l=t.return;try{Yl(t)}catch(s){G(t,l,s)}}}catch(s){G(t,t.return,s)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var Mp=Math.ceil,Ao=gt.ReactCurrentDispatcher,Ha=gt.ReactCurrentOwner,je=gt.ReactCurrentBatchConfig,A=0,le=null,te=null,ue=0,ze=0,hn=Ft(0),re=0,$r=null,qt=0,qo=0,Wa=0,or=null,ke=null,Qa=0,Pn=1/0,ut=null,Do=!1,Gl=null,Tt=null,Gr=!1,Et=null,Fo=0,ir=0,Zl=null,uo=-1,co=0;function ye(){return(A&6)!==0?J():uo!==-1?uo:uo=J()}function Mt(e){return(e.mode&1)===0?1:(A&2)!==0&&ue!==0?ue&-ue:hp.transition!==null?(co===0&&(co=vc()),co):(e=j,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e)}function Ke(e,t,n,r){if(50<ir)throw ir=0,Zl=null,Error(x(185));zr(e,n,r),((A&2)===0||e!==le)&&(e===le&&((A&2)===0&&(qo|=n),re===4&&$t(e,ue)),_e(e,r),n===1&&A===0&&(t.mode&1)===0&&(Pn=J()+500,Xo&&jt()))}function _e(e,t){var n=e.callbackNode;h0(e,t);var r=So(e,e===le?ue:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?mp(yu.bind(null,e)):Bc(yu.bind(null,e)),cp(function(){(A&6)===0&&jt()}),n=null;else{switch(yc(r)){case 1:n=ya;break;case 4:n=mc;break;case 16:n=xo;break;case 536870912:n=hc;break;default:n=xo}n=Bf(n,If.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function If(e,t){if(uo=-1,co=0,(A&6)!==0)throw Error(x(327));var n=e.callbackNode;if(Sn()&&e.callbackNode!==n)return null;var r=So(e,e===le?ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jo(e,r);else{t=r;var o=A;A|=2;var i=Df();(le!==e||ue!==t)&&(ut=null,Pn=J()+500,Yt(e,t));do try{Ip();break}catch(a){Af(e,a)}while(1);Oa(),Ao.current=i,A=o,te!==null?t=0:(le=null,ue=0,t=re)}if(t!==0){if(t===2&&(o=Cl(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=$r,Yt(e,0),$t(e,r),_e(e,J()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Lp(o)&&(t=jo(e,r),t===2&&(i=Cl(e),i!==0&&(r=i,t=ql(e,i))),t===1))throw n=$r,Yt(e,0),$t(e,r),_e(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Ht(e,ke,ut);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Qa+500-J(),10<t)){if(So(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ml(Ht.bind(null,e,ke,ut),t);break}Ht(e,ke,ut);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Xe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mp(r/1960))-r,10<r){e.timeoutHandle=Ml(Ht.bind(null,e,ke,ut),r);break}Ht(e,ke,ut);break;case 5:Ht(e,ke,ut);break;default:throw Error(x(329))}}}return _e(e,J()),e.callbackNode===n?If.bind(null,e):null}function ql(e,t){var n=or;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=jo(e,t),e!==2&&(t=ke,ke=n,t!==null&&Jl(t)),e}function Jl(e){ke===null?ke=e:ke.push.apply(ke,e)}function Lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Wa,t&=~qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if((A&6)!==0)throw Error(x(327));Sn();var t=So(e,0);if((t&1)===0)return _e(e,J()),null;var n=jo(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=$r,Yt(e,0),$t(e,t),_e(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ke,ut),_e(e,J()),null}function ba(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Pn=J()+500,Xo&&jt())}}function Jt(e){Et!==null&&Et.tag===0&&(A&6)===0&&Sn();var t=A;A|=1;var n=je.transition,r=j;try{if(je.transition=null,j=1,e)return e()}finally{j=r,je.transition=n,A=t,(A&6)===0&&jt()}}function Ya(){ze=hn.current,Q(hn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,up(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_o();break;case 3:Nn(),Q(Ce),Q(he),Aa();break;case 5:Ia(r);break;case 4:Nn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Ta(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(le=e,te=e=Lt(e.current,null),ue=ze=t,re=0,$r=null,Wa=qo=qt=0,ke=or=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Qt=null}return e}function Af(e,t){do{var n=te;try{if(Oa(),lo.current=Io,Ro){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ro=!1}if(Zt=0,ie=ne=X=null,nr=!1,xr=0,Ha.current=null,n===null||n.return===null){re=1,$r=t,te=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=a,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=ou(l);if(w!==null){w.flags&=-257,iu(w,l,a,i,t),w.mode&1&&ru(i,c,t),t=w,s=c;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if((t&1)===0){ru(i,c,t),Xa();break e}s=Error(x(426))}}else if(b&&a.mode&1){var z=ou(l);if(z!==null){(z.flags&65536)===0&&(z.flags|=256),iu(z,l,a,i,t),za(zn(s,a));break e}}i=s=zn(s,a),re!==4&&(re=2),or===null?or=[i]:or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=wf(i,s,t);Gs(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Tt===null||!Tt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=xf(i,a,t);Gs(i,v);break e}}i=i.return}while(i!==null)}jf(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Df(){var e=Ao.current;return Ao.current=Io,e===null?Io:e}function Xa(){(re===0||re===3||re===2)&&(re=4),le===null||(qt&268435455)===0&&(qo&268435455)===0||$t(le,ue)}function jo(e,t){var n=A;A|=2;var r=Df();(le!==e||ue!==t)&&(ut=null,Yt(e,t));do try{Rp();break}catch(o){Af(e,o)}while(1);if(Oa(),A=n,Ao.current=r,te!==null)throw Error(x(261));return le=null,ue=0,re}function Rp(){for(;te!==null;)Ff(te)}function Ip(){for(;te!==null&&!l0();)Ff(te)}function Ff(e){var t=Uf(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?jf(e):te=t,Ha.current=null}function jf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Np(n,t,ze),n!==null){te=n;return}}else{if(n=zp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Ht(e,t,n){var r=j,o=je.transition;try{je.transition=null,j=1,Ap(e,t,n,r)}finally{je.transition=o,j=r}return null}function Ap(e,t,n,r){do Sn();while(Et!==null);if((A&6)!==0)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(v0(e,i),e===le&&(te=le=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Gr||(Gr=!0,Bf(xo,function(){return Sn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=je.transition,je.transition=null;var l=j;j=1;var a=A;A|=4,Ha.current=null,Op(e,n),Lf(n,e),np(Ol),ko=!!Pl,Ol=Pl=null,e.current=n,Tp(n),a0(),A=a,j=l,je.transition=i}else e.current=n;if(Gr&&(Gr=!1,Et=e,Fo=o),i=e.pendingLanes,i===0&&(Tt=null),c0(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Do)throw Do=!1,e=Gl,Gl=null,e;return(Fo&1)!==0&&e.tag!==0&&Sn(),i=e.pendingLanes,(i&1)!==0?e===Zl?ir++:(ir=0,Zl=e):ir=0,jt(),null}function Sn(){if(Et!==null){var e=yc(Fo),t=je.transition,n=j;try{if(je.transition=null,j=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,Fo=0,(A&6)!==0)throw Error(x(331));var o=A;for(A|=4,_=e.current;_!==null;){var i=_,l=i.child;if((_.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(_=c;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:rr(8,p,i)}var m=p.child;if(m!==null)m.return=p,_=m;else for(;_!==null;){p=_;var h=p.sibling,w=p.return;if(Of(p),p===c){_=null;break}if(h!==null){h.return=w,_=h;break}_=w}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var z=y.sibling;y.sibling=null,y=z}while(y!==null)}}_=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:rr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var u=e.current;for(_=u;_!==null;){l=_;var d=l.child;if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,_=d;else e:for(l=u;_!==null;){if(a=_,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Zo(9,a)}}catch(k){G(a,a.return,k)}if(a===l){_=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,_=v;break e}_=a.return}}if(A=o,jt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{j=n,je.transition=t}}return!1}function gu(e,t,n){t=zn(n,t),t=wf(e,t,1),e=Ot(e,t,1),t=ye(),e!==null&&(zr(e,1,t),_e(e,t))}function G(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=zn(n,e),e=xf(t,e,1),t=Ot(t,e,1),e=ye(),t!==null&&(zr(t,1,e),_e(t,e));break}}t=t.return}}function Dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>J()-Qa?Yt(e,0):Wa|=n),_e(e,t)}function Vf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Vr,Vr<<=1,(Vr&130023424)===0&&(Vr=4194304)));var n=ye();e=vt(e,t),e!==null&&(zr(e,t,n),_e(e,n))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vf(e,n)}function jp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Vf(e,n)}var Uf;Uf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)$e=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return $e=!1,_p(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,b&&(t.flags&1048576)!==0&&Hc(t,Po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var o=Cn(t,he.current);xn(t,n),o=Fa(null,t,r,e,o,n);var i=ja();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,No(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,La(t),o.updater=Ko,t.stateNode=o,o._reactInternals=t,jl(t,r,e,n),t=Bl(null,t,r,!0,i,n)):(t.tag=0,b&&i&&_a(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Up(r),e=Qe(r,e),o){case 0:t=Ul(null,t,r,e,n);break e;case 1:t=su(null,t,r,e,n);break e;case 11:t=lu(null,t,r,e,n);break e;case 14:t=au(null,t,r,Qe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),su(e,t,r,o,n);case 3:e:{if(Cf(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Yc(e,t),Mo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=zn(Error(x(423)),t),t=uu(e,t,r,n,o);break e}else if(r!==o){o=zn(Error(x(424)),t),t=uu(e,t,r,n,o);break e}else for(Pe=Pt(t.stateNode.containerInfo.firstChild),Oe=t,b=!0,Ye=null,n=Zc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===o){t=yt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return qc(t),e===null&&Al(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Tl(r,o)?l=null:i!==null&&Tl(r,i)&&(t.flags|=32),$f(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Al(t),null;case 13:return Ef(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),lu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,H(Oo,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!Ce.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=pt(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Dl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Dl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,xn(t,n),o=Ve(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),au(e,t,r,o,n);case 15:return Sf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),so(e,t),t.tag=1,Ee(r)?(e=!0,No(t)):e=!1,xn(t,n),Kc(t,r,o),jl(t,r,o,n),Bl(null,t,r,!0,e,n);case 19:return _f(e,t,n);case 22:return kf(e,t,n)}throw Error(x(156,t.tag))};function Bf(e,t){return pc(e,t)}function Vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new Vp(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Up(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ha)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case on:return Xt(n.children,o,i,t);case pa:l=8,o|=8;break;case ul:return e=Fe(12,n,t,o|2),e.elementType=ul,e.lanes=i,e;case cl:return e=Fe(13,n,t,o),e.elementType=cl,e.lanes=i,e;case fl:return e=Fe(19,n,t,o),e.elementType=fl,e.lanes=i,e;case Gu:return Jo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xu:l=10;break e;case Ku:l=9;break e;case ma:l=11;break e;case ha:l=14;break e;case xt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Xt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Gu,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Di(0),this.expirationTimes=Di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ga(e,t,n,r,o,i,l,a,s){return e=new Bp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(i),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hf(e){if(!e)return At;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Uc(e,n,t)}return t}function Wf(e,t,n,r,o,i,l,a,s){return e=Ga(n,r,!0,e,o,i,l,a,s),e.context=Hf(null),n=e.current,r=ye(),o=Mt(n),i=pt(r,o),i.callback=t!=null?t:null,Ot(n,i,o),e.current.lanes=o,zr(e,o,r),_e(e,r),e}function ei(e,t,n,r){var o=t.current,i=ye(),l=Mt(o);return n=Hf(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(o,t,l),e!==null&&(Ke(e,o,l,i),io(e,o,l)),l}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){wu(e,t),(e=e.alternate)&&wu(e,t)}function Wp(){return null}var Qf=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}ti.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));ei(e,t,null,null)};ti.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jt(function(){ei(null,e,null,null)}),t[ht]=null}};function ti(e){this._internalRoot=e}ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&kc(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xu(){}function Qp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Vo(l);i.call(c)}}var l=Wf(t,r,e,0,null,!1,!1,"",xu);return e._reactRootContainer=l,e[ht]=l.current,hr(e.nodeType===8?e.parentNode:e),Jt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Vo(s);a.call(c)}}var s=Ga(e,0,!1,null,null,!1,!1,"",xu);return e._reactRootContainer=s,e[ht]=s.current,hr(e.nodeType===8?e.parentNode:e),Jt(function(){ei(t,s,n,r)}),s}function ri(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Vo(l);a.call(s)}}ei(t,l,e,o)}else l=Qp(n,t,e,o,r);return Vo(l)}gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(ga(t,n|1),_e(t,J()),(A&6)===0&&(Pn=J()+500,jt()))}break;case 13:Jt(function(){var r=vt(e,1);if(r!==null){var o=ye();Ke(r,e,1,o)}}),Za(e,1)}};wa=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ye();Ke(t,e,134217728,n)}Za(e,134217728)}};wc=function(e){if(e.tag===13){var t=Mt(e),n=vt(e,t);if(n!==null){var r=ye();Ke(n,e,t,r)}Za(e,t)}};xc=function(){return j};Sc=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Sl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Yo(r);if(!o)throw Error(x(90));qu(r),ml(r,o)}}}break;case"textarea":ec(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}};ac=ba;sc=Jt;var bp={usingClientEntryPoint:!1,Events:[Or,un,Yo,ic,lc,ba]},Qn={findFiberByHostInstance:Wt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yp={bundleType:Qn.bundleType,version:Qn.version,rendererPackageName:Qn.rendererPackageName,rendererConfig:Qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fc(e),e===null?null:e.stateNode},findFiberByHostInstance:Qn.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Ho=Zr.inject(Yp),rt=Zr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(x(200));return Hp(e,t,null,n)};Le.createRoot=function(e,t){if(!Ja(e))throw Error(x(299));var n=!1,r="",o=Qf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ga(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,hr(e.nodeType===8?e.parentNode:e),new qa(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=fc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Jt(e)};Le.hydrate=function(e,t,n){if(!ni(t))throw Error(x(200));return ri(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Qf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wf(t,null,e,1,n!=null?n:null,o,!1,i,l),e[ht]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ti(t)};Le.render=function(e,t,n){if(!ni(t))throw Error(x(200));return ri(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!ni(e))throw Error(x(40));return e._reactRootContainer?(Jt(function(){ri(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Le.unstable_batchedUpdates=ba;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ni(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ri(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Le})(Hu);var Su=Hu.exports;al.createRoot=Su.createRoot,al.hydrateRoot=Su.hydrateRoot;const Xp="/deploy-testes/assets/bs-logo2.be3249e4.jpg",Kp="/deploy-testes/assets/adv.bb83201c.jpg";var oi={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp=L.exports,Zp=Symbol.for("react.element"),qp=Symbol.for("react.fragment"),Jp=Object.prototype.hasOwnProperty,e1=Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t1={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jp.call(t,r)&&!t1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Zp,type:e,key:i,ref:l,props:o,_owner:e1.current}}ii.Fragment=qp;ii.jsx=bf;ii.jsxs=bf;(function(e){e.exports=ii})(oi);const n1=oi.exports.Fragment,C=oi.exports.jsx,M=oi.exports.jsxs,ku=()=>{function e(t){t.preventDefault();let r=t.target.getAttribute("href"),o=document.querySelector(r).offsetTop;r==="#sobre"?window.scroll({top:o-40,behavior:"smooth"}):r==="#areasDeAtuacao"?window.scroll({top:o-110,behavior:"smooth"}):r==="#contatos"?window.scroll({top:o-60,behavior:"smooth"}):window.scroll({top:o,behavior:"smooth"})}return C("div",{className:"navbarContainer",children:M("ul",{children:[C("li",{onClick:e,children:C("a",{href:"#home",children:"In\xEDcio"})}),C("li",{onClick:e,children:C("a",{href:"#sobre",children:"Sobre"})}),C("li",{onClick:e,children:C("a",{href:"#contatos",children:"Contatos"})}),C("li",{onClick:e,children:C("a",{href:"#areasDeAtuacao",children:"\xC1reas de atua\xE7\xE3o"})})]})})};var Yf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$u=lr.createContext&&lr.createContext(Yf),Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Rt.apply(this,arguments)},r1=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Xf(e){return e&&e.map(function(t,n){return lr.createElement(t.tag,Rt({key:n},t.attr),Xf(t.child))})}function lt(e){return function(t){return C(o1,{...Rt({attr:Rt({},e.attr)},t),children:Xf(e.child)})}}function o1(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=r1(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),M("svg",{...Rt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Rt(Rt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[i&&C("title",{children:i}),e.children]})};return $u!==void 0?C($u.Consumer,{children:function(n){return t(n)}}):t(Yf)}function Cu(e){return lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function i1(e){return lt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function ol(e){return lt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(e)}function l1(e){return lt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function a1(e){return lt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function s1(e){return lt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}}]})(e)}function Eu(e){return lt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)}function u1(e){return lt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-.12a2 2 0 00-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z"}}]})(e)}function _u(e){return lt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"}},{tag:"path",attr:{d:"M18 14v4h4"}},{tag:"circle",attr:{cx:"18",cy:"18",r:"4"}},{tag:"path",attr:{d:"M15 3v4"}},{tag:"path",attr:{d:"M7 3v4"}},{tag:"path",attr:{d:"M3 11h16"}}]})(e)}const c1=()=>{const e=()=>{let n=document.querySelector(".headerContainer2");window.scrollY>80?n.classList.add("sobeHeader"):n.classList.remove("sobeHeader")};return window.addEventListener("scroll",e),M("div",{id:"home",className:"mainContentContainer",children:[C("div",{className:"bg-imageContainer",children:C("img",{id:"bg-image",src:Kp,alt:"Imagem de fundo"})}),M("header",{children:[M("div",{className:"headerContainer",children:[M("div",{className:"contatosHeader",children:[M("a",{href:"https://www.google.com/search?q=manoelito+de+ornellas+55+google+maps&sxsrf=ALiCzsbh5SxYYLjg9EX44YZKpV5_2DCMPQ%3A1660004230103&ei=hqfxYv7lBcj01sQPyby5kAo&ved=0ahUKEwj-wNfTvbj5AhVIupUCHUleDqIQ4dUDCA4&uact=5&oq=manoelito+de+ornellas+55+google+maps&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEdKBAhBGABKBAhGGABQrwxYrwxgwy9oAHAEeACAAQCIAQCSAQCYAQCgAQHIAQbAAQE&sclient=gws-wiz#",target:"_blank",children:[C(l1,{className:"mapIcon"}),"Praia de Belas - Porto Alegre"]}),M("a",{href:"tel:51993056432",target:"_blank",children:[C(a1,{className:"telIcon"})," 51 993056432"]})]}),M("div",{className:"midiaIcons",children:[M("a",{href:"https://wa.me/5551993056432",target:"_blank",children:[C("p",{children:"Agende sua consulta:"})," ",C(_u,{className:"svg-telegram"})]}),C("a",{href:"https://www.instagram.com/brendasilva.advogada/",target:"_blank",children:C(Cu,{className:"svg-instagram"})}),C("a",{href:"mailto:brendasilva.silva9@gmail.com",target:"_blank",children:C(Eu,{className:"svg-email"})})]})]}),M("div",{className:"headerContainer2",children:[C("img",{id:"logo",src:Xp,alt:"Logomarca"}),C(ku,{}),M("div",{className:"sidebar hide",children:[M("div",{onClick:()=>{document.querySelector(".menu").classList.toggle("showMenu")},className:"menuHamburguer",children:[C("div",{id:"barra",className:"barra1"}),C("div",{id:"barra",className:"barra2"}),C("div",{id:"barra",className:"barra3"})]}),M("div",{className:"menu",children:[C(ku,{}),M("div",{className:"menuIcons",children:[C(_u,{className:"svg-telegram"}),C("a",{href:"https://www.instagram.com/brendasilva.advogada/",target:"_blank",children:C(Cu,{className:"svg-instagram"})}),C("a",{href:"mailto:brendasilva.silva9@gmail.com",target:"_blank",children:C(Eu,{className:"svg-email"})})]})]})]})]})]}),M("section",{className:"containerMain",children:[C("h1",{className:"tituloMain",children:"BS ADVOCACIA"}),C("p",{className:"descricaoMain",children:"Somos um escrit\xF3rio de advocacia na busca dos direitos que interessam a coletividade, respeitando as particularidades de cada um dos nossos clientes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta accusamus dignissimos eveniet cumque praesentium voluptatibus quos recusandae laudantium saepe ea assumenda, esse vero minima ut deleniti nam dolor hic. Lorem ipsum dolor sit amet consectetur, adipitione in deserunt. Dolores, beatae? Id eveniet aliquid totam aspernatur."})]}),C("div",{className:"iconWhatsFixo",children:C("a",{href:"https://wa.me/5551993056432",target:"_blank",children:C(i1,{})})})]})};function f1(e){return lt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.784 14.309l-8.572-7.804 0.399-0.4c0.326-0.327 0.503-0.75 0.53-1.181 0.016-0.007 0.031-0.014 0.046-0.023l1.609-1.006c0.218-0.256 0.202-0.66-0.036-0.898l-2.799-2.806c-0.237-0.238-0.641-0.254-0.896-0.036l-1.004 1.614c-0.008 0.015-0.015 0.031-0.022 0.046-0.43 0.027-0.852 0.204-1.178 0.531l-1.522 1.527c-0.327 0.327-0.503 0.75-0.53 1.181-0.016 0.007-0.031 0.014-0.046 0.023l-1.609 1.006c-0.218 0.256-0.202 0.66 0.036 0.898l2.799 2.806c0.237 0.238 0.641 0.254 0.896 0.036l1.004-1.614c0.008-0.015 0.015-0.031 0.023-0.046 0.43-0.027 0.852-0.204 1.178-0.531l0.442-0.443 7.783 8.596c0.226 0.249 0.573 0.289 0.773 0.089l0.787-0.789c0.199-0.2 0.159-0.549-0.089-0.775z"}}]})(e)}function d1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function p1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var m1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(p1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=d1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",Uo="-moz-",D="-webkit-",Kf="comm",es="rule",ts="decl",h1="@import",Gf="@keyframes",v1=Math.abs,li=String.fromCharCode,y1=Object.assign;function g1(e,t){return(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3)}function Zf(e){return e.trim()}function w1(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ea(e,t){return e.indexOf(t)}function Se(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function et(e){return e.length}function ns(e){return e.length}function qr(e,t){return t.push(e),e}function x1(e,t){return e.map(t).join("")}var ai=1,On=1,qf=0,Ne=0,ee=0,Rn="";function si(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ai,column:On,length:l,return:""}}function bn(e,t){return y1(si("",null,null,"",null,null,0),e,{length:-e.length},t)}function S1(){return ee}function k1(){return ee=Ne>0?Se(Rn,--Ne):0,On--,ee===10&&(On=1,ai--),ee}function Te(){return ee=Ne<qf?Se(Rn,Ne++):0,On++,ee===10&&(On=1,ai++),ee}function it(){return Se(Rn,Ne)}function po(){return Ne}function Mr(e,t){return Cr(Rn,e,t)}function Er(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jf(e){return ai=On=1,qf=et(Rn=e),Ne=0,[]}function ed(e){return Rn="",e}function mo(e){return Zf(Mr(Ne-1,ta(e===91?e+2:e===40?e+1:e)))}function $1(e){for(;(ee=it())&&ee<33;)Te();return Er(e)>2||Er(ee)>3?"":" "}function C1(e,t){for(;--t&&Te()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Mr(e,po()+(t<6&&it()==32&&Te()==32))}function ta(e){for(;Te();)switch(ee){case e:return Ne;case 34:case 39:e!==34&&e!==39&&ta(ee);break;case 40:e===41&&ta(e);break;case 92:Te();break}return Ne}function E1(e,t){for(;Te()&&e+ee!==47+10;)if(e+ee===42+42&&it()===47)break;return"/*"+Mr(t,Ne-1)+"*"+li(e===47?e:Te())}function _1(e){for(;!Er(it());)Te();return Mr(e,Ne)}function N1(e){return ed(ho("",null,null,null,[""],e=Jf(e),0,[0],e))}function ho(e,t,n,r,o,i,l,a,s){for(var c=0,p=0,m=l,h=0,w=0,g=0,y=1,z=1,f=1,u=0,d="",v=o,k=i,E=r,$=d;z;)switch(g=u,u=Te()){case 40:if(g!=108&&$.charCodeAt(m-1)==58){ea($+=F(mo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:$+=mo(u);break;case 9:case 10:case 13:case 32:$+=$1(g);break;case 92:$+=C1(po()-1,7);continue;case 47:switch(it()){case 42:case 47:qr(z1(E1(Te(),po()),t,n),s);break;default:$+="/"}break;case 123*y:a[c++]=et($)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+p:w>0&&et($)-m&&qr(w>32?zu($+";",r,n,m-1):zu(F($," ","")+";",r,n,m-2),s);break;case 59:$+=";";default:if(qr(E=Nu($,t,n,c,p,o,a,d,v=[],k=[],m),i),u===123)if(p===0)ho($,t,E,E,v,i,m,a,k);else switch(h){case 100:case 109:case 115:ho(e,E,E,r&&qr(Nu(e,E,E,0,0,o,a,d,o,v=[],m),k),o,k,m,a,r?v:k);break;default:ho($,E,E,E,[""],k,0,a,k)}}c=p=w=0,y=f=1,d=$="",m=l;break;case 58:m=1+et($),w=g;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&k1()==125)continue}switch($+=li(u),u*y){case 38:f=p>0?1:($+="\f",-1);break;case 44:a[c++]=(et($)-1)*f,f=1;break;case 64:it()===45&&($+=mo(Te())),h=it(),p=m=et(d=$+=_1(po())),u++;break;case 45:g===45&&et($)==2&&(y=0)}}return i}function Nu(e,t,n,r,o,i,l,a,s,c,p){for(var m=o-1,h=o===0?i:[""],w=ns(h),g=0,y=0,z=0;g<r;++g)for(var f=0,u=Cr(e,m+1,m=v1(y=l[g])),d=e;f<w;++f)(d=Zf(y>0?h[f]+" "+u:F(u,/&\f/g,h[f])))&&(s[z++]=d);return si(e,t,n,o===0?es:a,s,c,p)}function z1(e,t,n){return si(e,t,n,Kf,li(S1()),Cr(e,2,-2),0)}function zu(e,t,n,r){return si(e,t,n,ts,Cr(e,0,r),Cr(e,r+1,-1),r)}function td(e,t){switch(g1(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Uo+e+pe+e+e;case 6828:case 4268:return D+e+pe+e+e;case 6165:return D+e+pe+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return D+e+pe+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+pe+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+pe+F(e,"shrink","negative")+e;case 5292:return D+e+pe+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+pe+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Uo+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ea(e,"stretch")?td(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Se(e,t+1)!==115)break;case 6444:switch(Se(e,et(e)-3-(~ea(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(Se(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(Se(e,t+11)){case 114:return D+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+pe+e+e}return e}function kn(e,t){for(var n="",r=ns(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function P1(e,t,n,r){switch(e.type){case h1:case ts:return e.return=e.return||e.value;case Kf:return"";case Gf:return e.return=e.value+"{"+kn(e.children,r)+"}";case es:e.value=e.props.join(",")}return et(n=kn(e.children,r))?e.return=e.value+"{"+n+"}":""}function O1(e){var t=ns(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function T1(e){return function(t){t.root||(t=t.return)&&e(t)}}function M1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ts:e.return=td(e.value,e.length);break;case Gf:return kn([bn(e,{value:F(e.value,"@","@"+D)})],r);case es:if(e.length)return x1(e.props,function(o){switch(w1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return kn([bn(e,{props:[F(o,/:(read-\w+)/,":"+Uo+"$1")]})],r);case"::placeholder":return kn([bn(e,{props:[F(o,/:(plac\w+)/,":"+D+"input-$1")]}),bn(e,{props:[F(o,/:(plac\w+)/,":"+Uo+"$1")]}),bn(e,{props:[F(o,/:(plac\w+)/,pe+"input-$1")]})],r)}return""})}}function L1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var R1=function(t,n,r){for(var o=0,i=0;o=i,i=it(),o===38&&i===12&&(n[r]=1),!Er(i);)Te();return Mr(t,Ne)},I1=function(t,n){var r=-1,o=44;do switch(Er(o)){case 0:o===38&&it()===12&&(n[r]=1),t[r]+=R1(Ne-1,n,r);break;case 2:t[r]+=mo(o);break;case 4:if(o===44){t[++r]=it()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=li(o)}while(o=Te());return t},A1=function(t,n){return ed(I1(Jf(t),n))},Pu=new WeakMap,D1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Pu.get(r))&&!o){Pu.set(t,!0);for(var i=[],l=A1(n,i),a=r.props,s=0,c=0;s<l.length;s++)for(var p=0;p<a.length;p++,c++)t.props[c]=i[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},F1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}},j1=[M1],V1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var z=y.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||j1,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var z=y.getAttribute("data-emotion").split(" "),f=1;f<z.length;f++)i[z[f]]=!0;a.push(y)});var s,c=[D1,F1];{var p,m=[P1,T1(function(y){p.insert(y)})],h=O1(c.concat(o,m)),w=function(z){return kn(N1(z),h)};s=function(z,f,u,d){p=u,w(z?z+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new m1({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},nd={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,rs=ae?Symbol.for("react.element"):60103,os=ae?Symbol.for("react.portal"):60106,ui=ae?Symbol.for("react.fragment"):60107,ci=ae?Symbol.for("react.strict_mode"):60108,fi=ae?Symbol.for("react.profiler"):60114,di=ae?Symbol.for("react.provider"):60109,pi=ae?Symbol.for("react.context"):60110,is=ae?Symbol.for("react.async_mode"):60111,mi=ae?Symbol.for("react.concurrent_mode"):60111,hi=ae?Symbol.for("react.forward_ref"):60112,vi=ae?Symbol.for("react.suspense"):60113,U1=ae?Symbol.for("react.suspense_list"):60120,yi=ae?Symbol.for("react.memo"):60115,gi=ae?Symbol.for("react.lazy"):60116,B1=ae?Symbol.for("react.block"):60121,H1=ae?Symbol.for("react.fundamental"):60117,W1=ae?Symbol.for("react.responder"):60118,Q1=ae?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rs:switch(e=e.type,e){case is:case mi:case ui:case fi:case ci:case vi:return e;default:switch(e=e&&e.$$typeof,e){case pi:case hi:case gi:case yi:case di:return e;default:return t}}case os:return t}}}function rd(e){return Ie(e)===mi}V.AsyncMode=is;V.ConcurrentMode=mi;V.ContextConsumer=pi;V.ContextProvider=di;V.Element=rs;V.ForwardRef=hi;V.Fragment=ui;V.Lazy=gi;V.Memo=yi;V.Portal=os;V.Profiler=fi;V.StrictMode=ci;V.Suspense=vi;V.isAsyncMode=function(e){return rd(e)||Ie(e)===is};V.isConcurrentMode=rd;V.isContextConsumer=function(e){return Ie(e)===pi};V.isContextProvider=function(e){return Ie(e)===di};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs};V.isForwardRef=function(e){return Ie(e)===hi};V.isFragment=function(e){return Ie(e)===ui};V.isLazy=function(e){return Ie(e)===gi};V.isMemo=function(e){return Ie(e)===yi};V.isPortal=function(e){return Ie(e)===os};V.isProfiler=function(e){return Ie(e)===fi};V.isStrictMode=function(e){return Ie(e)===ci};V.isSuspense=function(e){return Ie(e)===vi};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ui||e===mi||e===fi||e===ci||e===vi||e===U1||typeof e=="object"&&e!==null&&(e.$$typeof===gi||e.$$typeof===yi||e.$$typeof===di||e.$$typeof===pi||e.$$typeof===hi||e.$$typeof===H1||e.$$typeof===W1||e.$$typeof===Q1||e.$$typeof===B1)};V.typeOf=Ie;(function(e){e.exports=V})(nd);var od=nd.exports,b1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},id={};id[od.ForwardRef]=b1;id[od.Memo]=Y1;var X1=!0;function ld(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ls=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||X1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},ad=function(t,n,r){ls(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function K1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var G1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Z1=/[A-Z]|^ms/g,q1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sd=function(t){return t.charCodeAt(1)===45},Ou=function(t){return t!=null&&typeof t!="boolean"},il=L1(function(e){return sd(e)?e:e.replace(Z1,"-$&").toLowerCase()}),Tu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(q1,function(r,o,i){return tt={name:o,styles:i,next:tt},o})}return G1[t]!==1&&!sd(t)&&typeof n=="number"&&n!==0?n+"px":n};function _r(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return tt={name:n.name,styles:n.styles,next:tt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)tt={name:r.name,styles:r.styles,next:tt},r=r.next;var o=n.styles+";";return o}return J1(e,t,n)}case"function":{if(e!==void 0){var i=tt,l=n(e);return tt=i,_r(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function J1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=_r(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Ou(l)&&(r+=il(i)+":"+Tu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Ou(l[a])&&(r+=il(i)+":"+Tu(i,l[a])+";");else{var s=_r(e,t,l);switch(i){case"animation":case"animationName":{r+=il(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Mu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tt,as=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";tt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=_r(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=_r(r,n,t[a]),o&&(i+=l[a]);Mu.lastIndex=0;for(var s="",c;(c=Mu.exec(i))!==null;)s+="-"+c[1];var p=K1(i)+s;return{name:p,styles:i,next:tt}},ss={}.hasOwnProperty,ud=L.exports.createContext(typeof HTMLElement<"u"?V1({key:"css"}):null);ud.Provider;var cd=function(t){return L.exports.forwardRef(function(n,r){var o=L.exports.useContext(ud);return t(n,o,r)})},fd=L.exports.createContext({}),em=vo["useInsertionEffect"]?vo["useInsertionEffect"]:function(t){t()};function dd(e){em(e)}var na="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tm=function(t,n){var r={};for(var o in n)ss.call(n,o)&&(r[o]=n[o]);return r[na]=t,r},nm=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ls(n,r,o),dd(function(){return ad(n,r,o)}),null},rm=cd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[na],i=[r],l="";typeof e.className=="string"?l=ld(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=as(i,void 0,L.exports.useContext(fd));l+=t.key+"-"+a.name;var s={};for(var c in e)ss.call(e,c)&&c!=="css"&&c!==na&&(s[c]=e[c]);return s.ref=n,s.className=l,L.exports.createElement(L.exports.Fragment,null,L.exports.createElement(nm,{cache:t,serialized:a,isStringTag:typeof o=="string"}),L.exports.createElement(o,s))}),om=n1;function B(e,t,n){return ss.call(t,"css")?C(rm,tm(e,t),n):C(e,t,n)}vo["useInsertionEffect"]?vo["useInsertionEffect"]:L.exports.useLayoutEffect;function In(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return as(t)}var S=function(){var t=In.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},im=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function lm(e,t,n){var r=[],o=ld(e,r,n);return r.length<2?n:o+t(r)}var am=function(t){var n=t.cache,r=t.serializedArr;return dd(function(){for(var o=0;o<r.length;o++)ad(n,r[o],!1)}),null},ll=cd(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];var h=as(p,t.registered);return r.push(h),ls(t,h,!1),t.key+"-"+h.name},i=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];return lm(t.registered,o,im(p))},l={css:o,cx:i,theme:L.exports.useContext(fd)},a=e.children(l);return n=!0,L.exports.createElement(L.exports.Fragment,null,L.exports.createElement(am,{cache:t,serializedArr:r}),a)});function ra(){return ra=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ra.apply(this,arguments)}function sm(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,oa(e,t)}function oa(e,t){return oa=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},oa(e,t)}function um(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ia=new Map,Jr=new WeakMap,Lu=0,cm=void 0;function fm(e){return e?(Jr.has(e)||(Lu+=1,Jr.set(e,Lu.toString())),Jr.get(e)):"0"}function dm(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?fm(e.root):e[t])}).toString()}function pm(e){var t=dm(e),n=ia.get(t);if(!n){var r=new Map,o,i=new IntersectionObserver(function(l){l.forEach(function(a){var s,c=a.isIntersecting&&o.some(function(p){return a.intersectionRatio>=p});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(function(p){p(c,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ia.set(t,n)}return n}function pd(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=cm),typeof window.IntersectionObserver>"u"&&r!==void 0){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=pm(n),l=i.id,a=i.observer,s=i.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),ia.delete(l))}}var mm=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Ru(e){return typeof e.children!="function"}var Iu=function(e){sm(t,e);function t(r){var o;return o=e.call(this,r)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(i){o.node&&(o.unobserve(),!i&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=i||null,o.observeNode()},o.handleChange=function(i,l){i&&o.props.triggerOnce&&o.unobserve(),Ru(o.props)||o.setState({inView:i,entry:l}),o.props.onChange&&o.props.onChange(i,l)},o.state={inView:!!r.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,i=o.threshold,l=o.root,a=o.rootMargin,s=o.trackVisibility,c=o.delay,p=o.fallbackInView;this._unobserveCb=pd(this.node,this.handleChange,{threshold:i,root:l,rootMargin:a,trackVisibility:s,delay:c},p)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!Ru(this.props)){var o=this.state,i=o.inView,l=o.entry;return this.props.children({inView:i,entry:l,ref:this.handleNode})}var a=this.props,s=a.children,c=a.as,p=um(a,mm);return L.exports.createElement(c||"div",ra({ref:this.handleNode},p),s)},t}(L.exports.Component);function md(e){var t,n=e===void 0?{}:e,r=n.threshold,o=n.delay,i=n.trackVisibility,l=n.rootMargin,a=n.root,s=n.triggerOnce,c=n.skip,p=n.initialInView,m=n.fallbackInView,h=n.onChange,w=L.exports.useState(null),g=w[0],y=w[1],z=L.exports.useRef(),f=L.exports.useState({inView:!!p,entry:void 0}),u=f[0],d=f[1];z.current=h,L.exports.useEffect(function(){if(!(c||!g)){var E=pd(g,function($,P){d({inView:$,entry:P}),z.current&&z.current($,P),P.isIntersecting&&s&&E&&(E(),E=void 0)},{root:a,rootMargin:l,threshold:r,trackVisibility:i,delay:o},m);return function(){E&&E()}}},[Array.isArray(r)?r.toString():r,g,a,l,s,c,i,m,o]);var v=(t=u.entry)==null?void 0:t.target;L.exports.useEffect(function(){!g&&v&&!s&&!c&&d({inView:!!p,entry:void 0})},[g,v,s,c,p]);var k=[y,u.inView,u.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}var hd={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),cs=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),xi=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),ki=Symbol.for("react.provider"),$i=Symbol.for("react.context"),hm=Symbol.for("react.server_context"),Ci=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Ni=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),vm=Symbol.for("react.offscreen"),vd;vd=Symbol.for("react.module.reference");function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case us:switch(e=e.type,e){case wi:case Si:case xi:case Ei:case _i:return e;default:switch(e=e&&e.$$typeof,e){case hm:case $i:case Ci:case zi:case Ni:case ki:return e;default:return t}}case cs:return t}}}U.ContextConsumer=$i;U.ContextProvider=ki;U.Element=us;U.ForwardRef=Ci;U.Fragment=wi;U.Lazy=zi;U.Memo=Ni;U.Portal=cs;U.Profiler=Si;U.StrictMode=xi;U.Suspense=Ei;U.SuspenseList=_i;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Be(e)===$i};U.isContextProvider=function(e){return Be(e)===ki};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===us};U.isForwardRef=function(e){return Be(e)===Ci};U.isFragment=function(e){return Be(e)===wi};U.isLazy=function(e){return Be(e)===zi};U.isMemo=function(e){return Be(e)===Ni};U.isPortal=function(e){return Be(e)===cs};U.isProfiler=function(e){return Be(e)===Si};U.isStrictMode=function(e){return Be(e)===xi};U.isSuspense=function(e){return Be(e)===Ei};U.isSuspenseList=function(e){return Be(e)===_i};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wi||e===Si||e===xi||e===Ei||e===_i||e===vm||typeof e=="object"&&e!==null&&(e.$$typeof===zi||e.$$typeof===Ni||e.$$typeof===ki||e.$$typeof===$i||e.$$typeof===Ci||e.$$typeof===vd||e.getModuleId!==void 0)};U.typeOf=Be;(function(e){e.exports=U})(hd);function at(e,t){return Object.keys(t).forEach(function(n){n==="default"||n==="__esModule"||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}function Ze(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var st={},yd={};Ze(yd,"AttentionSeeker",()=>Gm);const ym=S`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,gm=S`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,wm=S`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,xm=S`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Sm=S`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,km=S`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,$m=S`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Cm=S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Em=S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,_m=S`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Nm=S`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,zm=S`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Pm=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Om={};Ze(Om,"Reveal",()=>xe);const Tm=S`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Mm=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lm=S`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rm=S`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Im=S`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fs=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Am=S`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dm=S`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fm=S`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jm=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vm=S`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Um=S`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bm=S`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Hm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=fs,iterationCount:o=1}){return In`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `}function Wm(e){return e==null}function Qm(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}const Bo=In`
  opacity: 0;
`,bm=In`
  display: inline-block;
  white-space: pre;
`,xe=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=fs,triggerOnce:a=!1,css:s,className:c,style:p,childClassName:m,childStyle:h,children:w,onVisibilityChange:g}=e,y=L.exports.useMemo(()=>Hm({keyframes:l,duration:o}),[o,l]);return Wm(w)?null:Qm(w)?B(Ym,{...e,animationStyles:y,children:String(w)}):hd.exports.isFragment(w)?B(Xm,{...e,animationStyles:y}):B(om,{children:L.exports.Children.map(w,(z,f)=>{if(!L.exports.isValidElement(z))return null;const u=[s,y],d=r+(t?f*o*n:0);switch(z.type){case"ol":case"ul":return B(ll,{children:({cx:v})=>B(z.type,{...z.props,className:v(c,z.props.className),style:{...p,...z.props.style},children:B(xe,{...e,children:z.props.children})})});case"li":return B(Iu,{threshold:i,triggerOnce:a,onChange:g,children:({inView:v,ref:k})=>B(ll,{children:({cx:E})=>B(z.type,{...z.props,ref:k,className:E(m,z.props.className),css:v?u:Bo,style:{...h,...z.props.style,animationDelay:d+"ms"}})})});default:return B(Iu,{threshold:i,triggerOnce:a,onChange:g,children:({inView:v,ref:k})=>B("div",{ref:k,className:c,css:v?u:Bo,style:{...p,animationDelay:d+"ms"},children:B(ll,{children:({cx:E})=>B(z.type,{...z.props,className:E(m,z.props.className),style:{...h,...z.props.style}})})})})}})})},Ym=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,css:s,className:c,style:p,children:m,onVisibilityChange:h}=e,{ref:w,inView:g}=md({triggerOnce:a,threshold:l,onChange:h});return n?B("div",{ref:w,className:c,css:[s,bm],style:p,children:m.split("").map((y,z)=>B("span",{css:g?t:Bo,style:{animationDelay:o+z*i*r+"ms"},children:y},z))}):B(xe,{...e,children:m})},Xm=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,css:o,className:i,style:l,children:a,onVisibilityChange:s}=e,{ref:c,inView:p}=md({triggerOnce:r,threshold:n,onChange:s});return B("div",{ref:c,className:i,css:p?[o,t]:Bo,style:l,children:a})};function Km(e){switch(e){case"flash":return[gm];case"headShake":return[wm,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[xm,{animationTimingFunction:"ease-in-out"}];case"jello":return[Sm,{transformOrigin:"center"}];case"pulse":return[km,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[$m];case"shake":return[Cm];case"shakeX":return[Em];case"shakeY":return[_m];case"swing":return[Nm,{transformOrigin:"top center"}];case"tada":return[zm];case"wobble":return[Pm];case"bounce":default:return[ym,{transformOrigin:"center bottom"}]}}const Gm=e=>{const{effect:t="bounce",...n}=e,[r,o]=L.exports.useMemo(()=>Km(t),[t]);return B(xe,{keyframes:r,css:o,...n})};var gd={};Ze(gd,"Bounce",()=>sh);const Zm=S`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,qm=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Jm=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eh=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,th=S`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,nh=S`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,rh=S`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,oh=S`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,ih=S`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,lh=S`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function ah(e,t){switch(t){case"down":return e?rh:qm;case"left":return e?oh:Jm;case"right":return e?ih:eh;case"up":return e?lh:th;default:return e?nh:Zm}}const sh=e=>{const{direction:t,reverse:n=!1,...r}=e,o=L.exports.useMemo(()=>ah(n,t),[t,n]);return B(xe,{keyframes:o,...r})};var wd={};Ze(wd,"Fade",()=>$h);const uh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ch=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,fh=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,dh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ph=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,mh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,hh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,vh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,yh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,gh=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,wh=S`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,xh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Sh=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function kh(e,t,n){switch(n){case"bottom-left":return t?ch:Mm;case"bottom-right":return t?fh:Lm;case"down":return e?t?ph:Im:t?dh:Rm;case"left":return e?t?hh:Am:t?mh:fs;case"right":return e?t?yh:Fm:t?vh:Dm;case"top-left":return t?gh:jm;case"top-right":return t?wh:Vm;case"up":return e?t?Sh:Bm:t?xh:Um;default:return t?uh:Tm}}const $h=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=L.exports.useMemo(()=>kh(t,r,n),[t,n,r]);return B(xe,{keyframes:i,...o})};var xd={};Ze(xd,"Flip",()=>Th);const Ch=S`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Eh=S`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,_h=S`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Nh=S`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,zh=S`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function Ph(e,t){switch(t){case"horizontal":return e?Nh:Eh;case"vertical":return e?zh:_h;default:return Ch}}const Oh=In`
  backface-visibility: visible;
`,Th=e=>{const{direction:t,reverse:n=!1,...r}=e,o=L.exports.useMemo(()=>Ph(n,t),[t,n]);return B(xe,{css:Oh,keyframes:o,...r})};var Sd={};Ze(Sd,"Hinge",()=>Dh);const Mh=S`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Lh=S`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Rh=S`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ih=S`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,Ah=In`
  transform-origin: top left;
`,Dh=e=>B(xe,{css:Ah,keyframes:Mh,...e});var kd={};Ze(kd,"JackInTheBox",()=>Fh);const Fh=e=>B(xe,{keyframes:Lh,...e});var $d={};Ze($d,"Roll",()=>Vh);function jh(e){return e?Ih:Rh}const Vh=e=>{const{reverse:t=!1,...n}=e,r=L.exports.useMemo(()=>jh(t),[t]);return B(xe,{keyframes:r,...n})};var Cd={};Ze(Cd,"Rotate",()=>qh);const Uh=S`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Bh=S`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Hh=S`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Wh=S`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Qh=S`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,bh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Yh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Xh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Kh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Gh=S`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function Zh(e,t){switch(t){case"bottom-left":return e?[Yh,{transformOrigin:"left bottom"}]:[Bh,{transformOrigin:"left bottom"}];case"bottom-right":return e?[Xh,{transformOrigin:"right bottom"}]:[Hh,{transformOrigin:"right bottom"}];case"top-left":return e?[Kh,{transformOrigin:"left bottom"}]:[Wh,{transformOrigin:"left bottom"}];case"top-right":return e?[Gh,{transformOrigin:"right bottom"}]:[Qh,{transformOrigin:"right bottom"}];default:return e?[bh,{transformOrigin:"center"}]:[Uh,{transformOrigin:"center"}]}}const qh=e=>{const{direction:t,reverse:n=!1,...r}=e,[o,i]=L.exports.useMemo(()=>Zh(n,t),[t,n]);return B(xe,{css:i,keyframes:o,...r})};var Ed={};Ze(Ed,"Slide",()=>sv);const Jh=S`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ev=S`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tv=S`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,nv=S`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,rv=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,ov=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,iv=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,lv=S`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function av(e,t){switch(t){case"down":return e?rv:Jh;case"right":return e?iv:tv;case"up":return e?lv:nv;case"left":default:return e?ov:ev}}const sv=e=>{const{direction:t,reverse:n=!1,...r}=e,o=L.exports.useMemo(()=>av(n,t),[t,n]);return B(xe,{keyframes:o,...r})};var _d={};Ze(_d,"Zoom",()=>xv);const uv=S`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,cv=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,fv=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,dv=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,pv=S`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,mv=S`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,hv=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,vv=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,yv=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,gv=S`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function wv(e,t){switch(t){case"down":return e?hv:cv;case"left":return e?vv:fv;case"right":return e?yv:dv;case"up":return e?gv:pv;default:return e?mv:uv}}const xv=e=>{const{direction:t,reverse:n=!1,...r}=e,o=L.exports.useMemo(()=>wv(n,t),[t,n]);return B(xe,{keyframes:o,...r})};at(st,yd);at(st,gd);at(st,wd);at(st,xd);at(st,Sd);at(st,kd);at(st,$d);at(st,Cd);at(st,Ed);at(st,_d);const Sv=()=>C("div",{children:M("section",{id:"areasDeAtuacao",className:"sectionAreasDeAtuacao",children:[M("div",{className:"cartao card-1",children:[M("div",{className:"tituloComIcones",children:[C(ol,{className:"icon"}),C("h2",{children:"Direito Trabalhista"}),C(s1,{className:"icon iconMala"})]}),C("p",{className:"descricao",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis, excepturi id vel amet repellendus reiciendis rem dolorum minima nemo. Repellendus aut inventore nihil dolore quas voluptatibus deleniti doloribus! Esse!"})]}),M("div",{className:"cartao card-2",children:[M("div",{className:"tituloComIcones",children:[C(ol,{className:"icon"}),C("h2",{children:"Direito Tribut\xE1rio"}),C(f1,{className:"icon"})]}),C("p",{className:"descricao",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis, excepturi id vel amet repellendus reiciendis rem dolorum minima nemo. Repellendus aut inventore nihil dolore quas voluptatibus deleniti doloribus! Esse!"})]}),M("div",{className:"cartao card-3",children:[M("div",{className:"tituloComIcones",children:[C(ol,{className:"icon"}),C("h2",{children:"Direito de Fam\xEDlia"}),C(u1,{className:"icon"})]}),C("p",{className:"descricao",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis, excepturi id vel amet repellendus reiciendis rem dolorum minima nemo. Repellendus aut inventore nihil dolore quas voluptatibus deleniti dddoloribus! Esse!"})]}),M("div",{className:"footerAreas",children:[C("h1",{className:"testeH2",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus . Quia?"}),C("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati placeat est facilis consequuntur delectus sit esse laboriosam voluptatum nesciunt velit. Dolore fugiat ullam cum animi, maxime nobis praesentium dolorum numquam.lorm Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit amet labore laudantium, cumque ab quibusdam qui eligendi, sint quod rem laborum consequuntur perspiciatis! Magnam, minima velit nulla voluptatum est ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, voluptates, distinctio repellendus nam dolore"})]})]})});const kv="/deploy-testes/assets/imgAdvBrenda.a2ff4f6a.jpg",$v=()=>M("div",{id:"sobre",className:"sobreContainer",children:[M("div",{className:"sobre",children:[C("h1",{children:"Sobre"}),C(xe,{triggerOnce:!0,children:C("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos omnis consectetur nostrum illum. Quos repudiandae cupiditate, voluptates esse quibusdam in aspernatur odit recusandae, blanditiis libero ut, voluptatum est amet!l Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas magni delectus, placeat, minus sunt provident quos cumque nesciunt nemo facilis odit natus saepe explicabo corrupti omnis culpa deleniti, consequuntur dicta."})})]}),C("img",{src:kv,alt:"Imagem advogada Brenda"})]});const Cv=()=>M("div",{id:"contatos",className:"containerContatos",children:[C("h1",{children:"Contato"}),C("div",{className:"esquerda"}),C("div",{className:"direita",children:M("form",{action:"https://formsubmit.co/brendasilva.silva9@gmail.com",method:"POST",target:"_blank",className:"campos",children:[M("div",{className:"nomeTelefoneEmail",children:[M("label",{className:"campo",children:["Nome",C("input",{name:"nome",type:"text",placeholder:"Digite seu nome",required:!0})]}),M("label",{className:"campo",children:["Telefone",C("input",{name:"telefone",type:"number",placeholder:"(00) 900112233",required:!0})]}),M("label",{className:"campo",children:["Email",C("input",{name:"email",type:"text",placeholder:"Digite seu email",required:!0})]})]}),M("div",{className:"descricaoEnviar",children:[M("label",{className:"campo",children:["Descri\xE7\xE3o",C("textarea",{name:"descricao",placeholder:"Minha d\xFAvida \xE9...",required:!0})]}),C("input",{className:"inputBtn",type:"submit",value:"Enviar"})]})]})})]});const Ev=()=>C("div",{className:"footerContainer",children:M("div",{className:"direitos",children:[C("p",{className:"copy",children:"\xA9 2022 BS ADVOCACIA. Todos os direitos reservados"}),M("p",{className:"dev",children:["Desenvolvido por ",M("strong",{children:[C("sup",{children:C("span",{className:"nome",children:"Alan"})})," ",C("span",{className:"sobrenome",children:"Moreira\u2122"})]})]})]})});function _v(){return C("div",{className:"App",children:M("div",{className:"appContainer",children:[C(c1,{}),C(Sv,{}),C(Cv,{}),C($v,{}),C(xe,{triggerOnce:!0,children:C(Ev,{})})]})})}al.createRoot(document.getElementById("root")).render(C(lr.StrictMode,{children:C(_v,{})}));

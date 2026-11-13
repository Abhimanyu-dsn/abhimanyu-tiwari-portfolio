(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function T_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dg={exports:{}},lc={},pg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),A_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),R_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),L_=Symbol.for("react.context"),N_=Symbol.for("react.forward_ref"),I_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),U_=Symbol.for("react.lazy"),qd=Symbol.iterator;function F_(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,vg={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=vg,this.updater=n||mg}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _g(){}_g.prototype=Ks.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=vg,this.updater=n||mg}var Rh=Ch.prototype=new _g;Rh.constructor=Ch;gg(Rh,Ks.prototype);Rh.isPureReactComponent=!0;var Kd=Array.isArray,xg=Object.prototype.hasOwnProperty,bh={current:null},yg={key:!0,ref:!0,__self:!0,__source:!0};function Sg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xg.call(e,i)&&!yg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:s,ref:o,props:r,_owner:bh.current}}function O_(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function k_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zd=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k_(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case A_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nc(o,0):i,Kd(r)?(n="",t!=null&&(n=t.replace(Zd,"$&/")+"/"),cl(r,e,n,"",function(c){return c})):r!=null&&(Ph(r)&&(r=O_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Zd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Kd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nc(s,a);o+=cl(s,e,n,l,r)}else if(l=F_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nc(s,a++),o+=cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},ul={transition:null},z_={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:ul,ReactCurrentOwner:bh};function Mg(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Ks;qe.Fragment=C_;qe.Profiler=b_;qe.PureComponent=Ch;qe.StrictMode=R_;qe.Suspense=I_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_;qe.act=Mg;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xg.call(e,l)&&!yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:L_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P_,_context:t},t.Consumer=t};qe.createElement=Sg;qe.createFactory=function(t){var e=Sg.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:N_,render:t}};qe.isValidElement=Ph;qe.lazy=function(t){return{$$typeof:U_,_payload:{_status:-1,_result:t},_init:B_}};qe.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};qe.unstable_act=Mg;qe.useCallback=function(t,e){return rn.current.useCallback(t,e)};qe.useContext=function(t){return rn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return rn.current.useEffect(t,e)};qe.useId=function(){return rn.current.useId()};qe.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return rn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};qe.useRef=function(t){return rn.current.useRef(t)};qe.useState=function(t){return rn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return rn.current.useTransition()};qe.version="18.3.1";pg.exports=qe;var ft=pg.exports;const H_=T_(ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=ft,V_=Symbol.for("react.element"),W_=Symbol.for("react.fragment"),X_=Object.prototype.hasOwnProperty,j_=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)X_.call(e,i)&&!Y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V_,type:t,key:s,ref:o,props:r,_owner:j_.current}}lc.Fragment=W_;lc.jsx=Eg;lc.jsxs=Eg;dg.exports=lc;var k=dg.exports,Gu={},wg={exports:{}},Cn={},Tg={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,J){var te=L.length;L.push(J);e:for(;0<te;){var ie=te-1>>>1,ce=L[ie];if(0<r(ce,J))L[ie]=J,L[te]=ce,te=ie;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var J=L[0],te=L.pop();if(te!==J){L[0]=te;e:for(var ie=0,ce=L.length,Ue=ce>>>1;ie<Ue;){var W=2*(ie+1)-1,oe=L[W],he=W+1,ue=L[he];if(0>r(oe,te))he<ce&&0>r(ue,oe)?(L[ie]=ue,L[he]=te,ie=he):(L[ie]=oe,L[W]=te,ie=W);else if(he<ce&&0>r(ue,te))L[ie]=ue,L[he]=te,ie=he;else break e}}return J}function r(L,J){var te=L.sortIndex-J.sortIndex;return te!==0?te:L.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=L)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function M(L){if(x=!1,v(L),!g)if(n(l)!==null)g=!0,H(b);else{var J=n(c);J!==null&&ee(M,J.startTime-L)}}function b(L,J){g=!1,x&&(x=!1,f(P),P=-1),p=!0;var te=h;try{for(v(J),d=n(l);d!==null&&(!(d.expirationTime>J)||L&&!w());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var ce=ie(d.expirationTime<=J);J=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&i(l),v(J)}else i(l);d=n(l)}if(d!==null)var Ue=!0;else{var W=n(c);W!==null&&ee(M,W.startTime-J),Ue=!1}return Ue}finally{d=null,h=te,p=!1}}var R=!1,C=null,P=-1,q=5,y=-1;function w(){return!(t.unstable_now()-y<q)}function X(){if(C!==null){var L=t.unstable_now();y=L;var J=!0;try{J=C(!0,L)}finally{J?O():(R=!1,C=null)}}else R=!1}var O;if(typeof _=="function")O=function(){_(X)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=X,O=function(){Z.postMessage(null)}}else O=function(){m(X,0)};function H(L){C=L,R||(R=!0,O())}function ee(L,J){P=m(function(){L(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var J=3;break;default:J=h}var te=h;h=J;try{return L()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var te=h;h=L;try{return J()}finally{h=te}},t.unstable_scheduleCallback=function(L,J,te){var ie=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ie+te:ie):te=ie,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=te+ce,L={id:u++,callback:J,priorityLevel:L,startTime:te,expirationTime:ce,sortIndex:-1},te>ie?(L.sortIndex=te,e(c,L),n(l)===null&&L===n(c)&&(x?(f(P),P=-1):x=!0,ee(M,te-ie))):(L.sortIndex=ce,e(l,L),g||p||(g=!0,H(b))),L},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(L){var J=h;return function(){var te=h;h=J;try{return L.apply(this,arguments)}finally{h=te}}}})(Ag);Tg.exports=Ag;var $_=Tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=ft,An=$_;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,Bo={};function Xr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Bo[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,K_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},Qd={};function Z_(t){return Vu.call(Qd,t)?!0:Vu.call(Jd,t)?!1:K_.test(t)?Qd[t]=!0:(Jd[t]=!0,!1)}function J_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q_(t,e,n,i){if(e===null||typeof e>"u"||J_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lh=/[\-:]([a-z])/g;function Nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lh,Nh);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lh,Nh);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lh,Nh);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ih(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q_(e,n,r,i)&&(n=null),i||r===null?Z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),Rg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),Pg=Symbol.for("react.offscreen"),ep=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Ic;function So(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Dc=!1;function Uc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function ex(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Wu:return"Profiler";case Dh:return"StrictMode";case Xu:return"Suspense";case ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bg:return(t.displayName||"Context")+".Consumer";case Rg:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function tx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nx(t){var e=Lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=nx(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ig(t,e){e=e.checked,e!=null&&Ih(t,"checked",e,!1)}function qu(t,e){Ig(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Mo(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function Dg(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ug(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ug(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,Fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ix=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){ix.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function Og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function kg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(t,e){if(e){if(rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nf=null,Cs=null,Rs=null;function sp(t){if(t=fa(t)){if(typeof nf!="function")throw Error(le(280));var e=t.stateNode;e&&(e=dc(e),nf(t.stateNode,t.type,e))}}function Bg(t){Cs?Rs?Rs.push(t):Rs=[t]:Cs=t}function zg(){if(Cs){var t=Cs,e=Rs;if(Rs=Cs=null,sp(t),e)for(t=0;t<e.length;t++)sp(e[t])}}function Hg(t,e){return t(e)}function Gg(){}var Fc=!1;function Vg(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return Hg(t,e,n)}finally{Fc=!1,(Cs!==null||Rs!==null)&&(Gg(),zg())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var rf=!1;if(Ci)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){rf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{rf=!1}function sx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ro=!1,Pl=null,Ll=!1,sf=null,ox={onError:function(t){Ro=!0,Pl=t}};function ax(t,e,n,i,r,s,o,a,l){Ro=!1,Pl=null,sx.apply(ox,arguments)}function lx(t,e,n,i,r,s,o,a,l){if(ax.apply(this,arguments),Ro){if(Ro){var c=Pl;Ro=!1,Pl=null}else throw Error(le(198));Ll||(Ll=!0,sf=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(jr(t)!==t)throw Error(le(188))}function cx(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return op(r),t;if(s===i)return op(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Xg(t){return t=cx(t),t!==null?jg(t):null}function jg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jg(t);if(e!==null)return e;t=t.sibling}return null}var Yg=An.unstable_scheduleCallback,ap=An.unstable_cancelCallback,ux=An.unstable_shouldYield,fx=An.unstable_requestPaint,Et=An.unstable_now,hx=An.unstable_getCurrentPriorityLevel,kh=An.unstable_ImmediatePriority,$g=An.unstable_UserBlockingPriority,Nl=An.unstable_NormalPriority,dx=An.unstable_LowPriority,qg=An.unstable_IdlePriority,cc=null,si=null;function px(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:vx,mx=Math.log,gx=Math.LN2;function vx(t){return t>>>=0,t===0?32:31-(mx(t)/gx|0)|0}var Ma=64,Ea=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function _x(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_x(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kg(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Zg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jg,zh,Qg,e0,t0,af=!1,wa=[],Ki=null,Zi=null,Ji=null,Go=new Map,Vo=new Map,Wi=[],Sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Mx(t,e,n,i,r){switch(e){case"focusin":return Ki=ao(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=ao(Zi,t,e,n,i,r),!0;case"mouseover":return Ji=ao(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,ao(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Vo.set(s,ao(Vo.get(s)||null,t,e,n,i,r)),!0}return!1}function n0(t){var e=Pr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wg(n),e!==null){t.blockedOn=e,t0(t.priority,function(){Qg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);tf=i,n.target.dispatchEvent(i),tf=null}else return e=fa(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function cp(t,e,n){fl(t)&&n.delete(e)}function Ex(){af=!1,Ki!==null&&fl(Ki)&&(Ki=null),Zi!==null&&fl(Zi)&&(Zi=null),Ji!==null&&fl(Ji)&&(Ji=null),Go.forEach(cp),Vo.forEach(cp)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,af||(af=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Ex)))}function Wo(t){function e(r){return lo(r,t)}if(0<wa.length){lo(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&lo(Ki,t),Zi!==null&&lo(Zi,t),Ji!==null&&lo(Ji,t),Go.forEach(e),Vo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&Wi.shift()}var bs=Ni.ReactCurrentBatchConfig,Dl=!0;function wx(t,e,n,i){var r=rt,s=bs.transition;bs.transition=null;try{rt=1,Hh(t,e,n,i)}finally{rt=r,bs.transition=s}}function Tx(t,e,n,i){var r=rt,s=bs.transition;bs.transition=null;try{rt=4,Hh(t,e,n,i)}finally{rt=r,bs.transition=s}}function Hh(t,e,n,i){if(Dl){var r=lf(t,e,n,i);if(r===null)Yc(t,e,i,Ul,n),lp(t,i);else if(Mx(r,t,e,n,i))i.stopPropagation();else if(lp(t,i),e&4&&-1<Sx.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&Jg(s),s=lf(t,e,n,i),s===null&&Yc(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yc(t,e,i,null,n)}}var Ul=null;function lf(t,e,n,i){if(Ul=null,t=Oh(i),t=Pr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function i0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hx()){case kh:return 1;case $g:return 4;case Nl:case dx:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Yi=null,Gh=null,hl=null;function r0(){if(hl)return hl;var t,e=Gh,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function up(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ta:up,this.isPropagationStopped=up,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=Rn(Zs),ua=_t({},Zs,{view:0,detail:0}),Ax=Rn(ua),kc,Bc,co,uc=_t({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(kc=t.screenX-co.screenX,Bc=t.screenY-co.screenY):Bc=kc=0,co=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),fp=Rn(uc),Cx=_t({},uc,{dataTransfer:0}),Rx=Rn(Cx),bx=_t({},ua,{relatedTarget:0}),zc=Rn(bx),Px=_t({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Rn(Px),Nx=_t({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ix=Rn(Nx),Dx=_t({},Zs,{data:0}),hp=Rn(Dx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ox[t])?!!e[t]:!1}function Wh(){return kx}var Bx=_t({},ua,{key:function(t){if(t.key){var e=Ux[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=Rn(Bx),Hx=_t({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=Rn(Hx),Gx=_t({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),Vx=Rn(Gx),Wx=_t({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xx=Rn(Wx),jx=_t({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Rn(jx),$x=[9,13,27,32],Xh=Ci&&"CompositionEvent"in window,bo=null;Ci&&"documentMode"in document&&(bo=document.documentMode);var qx=Ci&&"TextEvent"in window&&!bo,s0=Ci&&(!Xh||bo&&8<bo&&11>=bo),pp=" ",mp=!1;function o0(t,e){switch(t){case"keyup":return $x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Kx(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(mp=!0,pp);case"textInput":return t=e.data,t===pp&&mp?null:t;default:return null}}function Zx(t,e){if(ds)return t==="compositionend"||!Xh&&o0(t,e)?(t=r0(),hl=Gh=Yi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s0&&e.locale!=="ko"?null:e.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jx[t.type]:e==="textarea"}function l0(t,e,n,i){Bg(i),e=Fl(e,"onChange"),0<e.length&&(n=new Vh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Po=null,Xo=null;function Qx(t){x0(t,0)}function fc(t){var e=gs(t);if(Ng(e))return t}function ey(t,e){if(t==="change")return e}var c0=!1;if(Ci){var Hc;if(Ci){var Gc="oninput"in document;if(!Gc){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Gc=typeof vp.oninput=="function"}Hc=Gc}else Hc=!1;c0=Hc&&(!document.documentMode||9<document.documentMode)}function _p(){Po&&(Po.detachEvent("onpropertychange",u0),Xo=Po=null)}function u0(t){if(t.propertyName==="value"&&fc(Xo)){var e=[];l0(e,Xo,t,Oh(t)),Vg(Qx,e)}}function ty(t,e,n){t==="focusin"?(_p(),Po=e,Xo=n,Po.attachEvent("onpropertychange",u0)):t==="focusout"&&_p()}function ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Xo)}function iy(t,e){if(t==="click")return fc(e)}function ry(t,e){if(t==="input"||t==="change")return fc(e)}function sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:sy;function jo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yp(t,e){var n=xp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function f0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function h0(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oy(t){var e=h0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(i!==null&&jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=yp(n,s);var o=yp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ay=Ci&&"documentMode"in document&&11>=document.documentMode,ps=null,cf=null,Lo=null,uf=!1;function Sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uf||ps==null||ps!==bl(i)||(i=ps,"selectionStart"in i&&jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lo&&jo(Lo,i)||(Lo=i,i=Fl(cf,"onSelect"),0<i.length&&(e=new Vh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Vc={},d0={};Ci&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function hc(t){if(Vc[t])return Vc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in d0)return Vc[t]=e[n];return t}var p0=hc("animationend"),m0=hc("animationiteration"),g0=hc("animationstart"),v0=hc("transitionend"),_0=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){_0.set(t,e),Xr(e,[t])}for(var Wc=0;Wc<Mp.length;Wc++){var Xc=Mp[Wc],ly=Xc.toLowerCase(),cy=Xc[0].toUpperCase()+Xc.slice(1);hr(ly,"on"+cy)}hr(p0,"onAnimationEnd");hr(m0,"onAnimationIteration");hr(g0,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(v0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lx(i,e,void 0,t),t.currentTarget=null}function x0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ep(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ep(r,a,c),s=l}}}if(Ll)throw t=sf,Ll=!1,sf=null,t}function ut(t,e){var n=e[mf];n===void 0&&(n=e[mf]=new Set);var i=t+"__bubble";n.has(i)||(y0(e,t,2,!1),n.add(i))}function jc(t,e,n){var i=0;e&&(i|=4),y0(n,t,i,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Ca]){t[Ca]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(uy.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,jc("selectionchange",!1,e))}}function y0(t,e,n,i){switch(i0(e)){case 1:var r=wx;break;case 4:r=Tx;break;default:r=Hh}n=r.bind(null,e,n,t),r=void 0,!rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vg(function(){var c=s,u=Oh(n),d=[];e:{var h=_0.get(t);if(h!==void 0){var p=Vh,g=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":p=zx;break;case"focusin":g="focus",p=zc;break;case"focusout":g="blur",p=zc;break;case"beforeblur":case"afterblur":p=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Vx;break;case p0:case m0:case g0:p=Lx;break;case v0:p=Xx;break;case"scroll":p=Ax;break;case"wheel":p=Yx;break;case"copy":case"cut":case"paste":p=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dp}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,f!==null&&(M=Ho(_,f),M!=null&&x.push($o(_,M,v)))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==tf&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Ri]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Pr(g):null,g!==null&&(m=jr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=fp,M="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=dp,M="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:gs(p),v=g==null?h:gs(g),h=new x(M,_+"leave",p,n,u),h.target=m,h.relatedTarget=v,M=null,Pr(u)===c&&(x=new x(f,_+"enter",g,n,u),x.target=v,x.relatedTarget=m,M=x),m=M,p&&g)t:{for(x=p,f=g,_=0,v=x;v;v=$r(v))_++;for(v=0,M=f;M;M=$r(M))v++;for(;0<_-v;)x=$r(x),_--;for(;0<v-_;)f=$r(f),v--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=$r(x),f=$r(f)}x=null}else x=null;p!==null&&wp(d,h,p,x,!1),g!==null&&m!==null&&wp(d,m,g,x,!0)}}e:{if(h=c?gs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=ey;else if(gp(h))if(c0)b=ry;else{b=ny;var R=ty}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=iy);if(b&&(b=b(t,c))){l0(d,b,n,u);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Ku(h,"number",h.value)}switch(R=c?gs(c):window,t){case"focusin":(gp(R)||R.contentEditable==="true")&&(ps=R,cf=c,Lo=null);break;case"focusout":Lo=cf=ps=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Sp(d,n,u);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":Sp(d,n,u)}var C;if(Xh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ds?o0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(s0&&n.locale!=="ko"&&(ds||P!=="onCompositionStart"?P==="onCompositionEnd"&&ds&&(C=r0()):(Yi=u,Gh="value"in Yi?Yi.value:Yi.textContent,ds=!0)),R=Fl(c,P),0<R.length&&(P=new hp(P,t,null,n,u),d.push({event:P,listeners:R}),C?P.data=C:(C=a0(n),C!==null&&(P.data=C)))),(C=qx?Kx(t,n):Zx(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(u=new hp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}x0(d,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift($o(t,s,r)),s=Ho(t,e),s!=null&&i.push($o(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ho(n,s),l!=null&&o.unshift($o(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function Tp(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(hy,"")}function Ra(t,e,n){if(e=Tp(e),Tp(t)!==e&&n)throw Error(le(425))}function Ol(){}var ff=null,hf=null;function df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(my)}:pf;function my(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wo(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ri="__reactFiber$"+Js,qo="__reactProps$"+Js,Ri="__reactContainer$"+Js,mf="__reactEvents$"+Js,gy="__reactListeners$"+Js,vy="__reactHandles$"+Js;function Pr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[ri])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[ri]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function dc(t){return t[qo]||null}var gf=[],vs=-1;function dr(t){return{current:t}}function dt(t){0>vs||(t.current=gf[vs],gf[vs]=null,vs--)}function lt(t,e){vs++,gf[vs]=t.current,t.current=e}var cr={},Kt=dr(cr),fn=dr(!1),Fr=cr;function ks(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function kl(){dt(fn),dt(Kt)}function Rp(t,e,n){if(Kt.current!==cr)throw Error(le(168));lt(Kt,e),lt(fn,n)}function S0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,tx(t)||"Unknown",r));return _t({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Fr=Kt.current,lt(Kt,t),lt(fn,fn.current),!0}function bp(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=S0(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,dt(fn),dt(Kt),lt(Kt,t)):dt(fn),lt(fn,n)}var _i=null,pc=!1,qc=!1;function M0(t){_i===null?_i=[t]:_i.push(t)}function _y(t){pc=!0,M0(t)}function pr(){if(!qc&&_i!==null){qc=!0;var t=0,e=rt;try{var n=_i;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,pc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),Yg(kh,pr),r}finally{rt=e,qc=!1}}return null}var _s=[],xs=0,zl=null,Hl=0,Nn=[],In=0,Or=null,Mi=1,Ei="";function Er(t,e){_s[xs++]=Hl,_s[xs++]=zl,zl=t,Hl=e}function E0(t,e,n){Nn[In++]=Mi,Nn[In++]=Ei,Nn[In++]=Or,Or=t;var i=Mi;t=Ei;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-Zn(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function Yh(t){t.return!==null&&(Er(t,1),E0(t,1,0))}function $h(t){for(;t===zl;)zl=_s[--xs],_s[xs]=null,Hl=_s[--xs],_s[xs]=null;for(;t===Or;)Or=Nn[--In],Nn[In]=null,Ei=Nn[--In],Nn[In]=null,Mi=Nn[--In],Nn[In]=null}var Tn=null,wn=null,pt=!1,jn=null;function w0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(pt){var e=wn;if(e){var n=e;if(!Pp(t,e)){if(vf(t))throw Error(le(418));e=Qi(n.nextSibling);var i=Tn;e&&Pp(t,e)?w0(i,n):(t.flags=t.flags&-4097|2,pt=!1,Tn=t)}}else{if(vf(t))throw Error(le(418));t.flags=t.flags&-4097|2,pt=!1,Tn=t}}}function Lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function ba(t){if(t!==Tn)return!1;if(!pt)return Lp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!df(t.type,t.memoizedProps)),e&&(e=wn)){if(vf(t))throw T0(),Error(le(418));for(;e;)w0(t,e),e=Qi(e.nextSibling)}if(Lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?Qi(t.stateNode.nextSibling):null;return!0}function T0(){for(var t=wn;t;)t=Qi(t.nextSibling)}function Bs(){wn=Tn=null,pt=!1}function qh(t){jn===null?jn=[t]:jn.push(t)}var xy=Ni.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function A0(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=ir(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,M){return _===null||_.tag!==6?(_=nu(v,f.mode,M),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,M){var b=v.type;return b===hs?u(f,_,v.props.children,M,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&Np(b)===_.type)?(M=r(_,v.props),M.ref=uo(f,_,v),M.return=f,M):(M=yl(v.type,v.key,v.props,null,f.mode,M),M.ref=uo(f,_,v),M.return=f,M)}function c(f,_,v,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=iu(v,f.mode,M),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function u(f,_,v,M,b){return _===null||_.tag!==7?(_=Ur(v,f.mode,M,b),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nu(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xa:return v=yl(_.type,_.key,_.props,null,f.mode,v),v.ref=uo(f,null,_),v.return=f,v;case fs:return _=iu(_,f.mode,v),_.return=f,_;case Gi:var M=_._init;return d(f,M(_._payload),v)}if(Mo(_)||so(_))return _=Ur(_,f.mode,v,null),_.return=f,_;Pa(f,_)}return null}function h(f,_,v,M){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(f,_,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===b?l(f,_,v,M):null;case fs:return v.key===b?c(f,_,v,M):null;case Gi:return b=v._init,h(f,_,b(v._payload),M)}if(Mo(v)||so(v))return b!==null?null:u(f,_,v,M,null);Pa(f,v)}return null}function p(f,_,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(v)||null,a(_,f,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case xa:return f=f.get(M.key===null?v:M.key)||null,l(_,f,M,b);case fs:return f=f.get(M.key===null?v:M.key)||null,c(_,f,M,b);case Gi:var R=M._init;return p(f,_,v,R(M._payload),b)}if(Mo(M)||so(M))return f=f.get(v)||null,u(_,f,M,b,null);Pa(_,M)}return null}function g(f,_,v,M){for(var b=null,R=null,C=_,P=_=0,q=null;C!==null&&P<v.length;P++){C.index>P?(q=C,C=null):q=C.sibling;var y=h(f,C,v[P],M);if(y===null){C===null&&(C=q);break}t&&C&&y.alternate===null&&e(f,C),_=s(y,_,P),R===null?b=y:R.sibling=y,R=y,C=q}if(P===v.length)return n(f,C),pt&&Er(f,P),b;if(C===null){for(;P<v.length;P++)C=d(f,v[P],M),C!==null&&(_=s(C,_,P),R===null?b=C:R.sibling=C,R=C);return pt&&Er(f,P),b}for(C=i(f,C);P<v.length;P++)q=p(C,f,P,v[P],M),q!==null&&(t&&q.alternate!==null&&C.delete(q.key===null?P:q.key),_=s(q,_,P),R===null?b=q:R.sibling=q,R=q);return t&&C.forEach(function(w){return e(f,w)}),pt&&Er(f,P),b}function x(f,_,v,M){var b=so(v);if(typeof b!="function")throw Error(le(150));if(v=b.call(v),v==null)throw Error(le(151));for(var R=b=null,C=_,P=_=0,q=null,y=v.next();C!==null&&!y.done;P++,y=v.next()){C.index>P?(q=C,C=null):q=C.sibling;var w=h(f,C,y.value,M);if(w===null){C===null&&(C=q);break}t&&C&&w.alternate===null&&e(f,C),_=s(w,_,P),R===null?b=w:R.sibling=w,R=w,C=q}if(y.done)return n(f,C),pt&&Er(f,P),b;if(C===null){for(;!y.done;P++,y=v.next())y=d(f,y.value,M),y!==null&&(_=s(y,_,P),R===null?b=y:R.sibling=y,R=y);return pt&&Er(f,P),b}for(C=i(f,C);!y.done;P++,y=v.next())y=p(C,f,P,y.value,M),y!==null&&(t&&y.alternate!==null&&C.delete(y.key===null?P:y.key),_=s(y,_,P),R===null?b=y:R.sibling=y,R=y);return t&&C.forEach(function(X){return e(f,X)}),pt&&Er(f,P),b}function m(f,_,v,M){if(typeof v=="object"&&v!==null&&v.type===hs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var b=v.key,R=_;R!==null;){if(R.key===b){if(b=v.type,b===hs){if(R.tag===7){n(f,R.sibling),_=r(R,v.props.children),_.return=f,f=_;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&Np(b)===R.type){n(f,R.sibling),_=r(R,v.props),_.ref=uo(f,R,v),_.return=f,f=_;break e}n(f,R);break}else e(f,R);R=R.sibling}v.type===hs?(_=Ur(v.props.children,f.mode,M,v.key),_.return=f,f=_):(M=yl(v.type,v.key,v.props,null,f.mode,M),M.ref=uo(f,_,v),M.return=f,f=M)}return o(f);case fs:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=iu(v,f.mode,M),_.return=f,f=_}return o(f);case Gi:return R=v._init,m(f,_,R(v._payload),M)}if(Mo(v))return g(f,_,v,M);if(so(v))return x(f,_,v,M);Pa(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=nu(v,f.mode,M),_.return=f,f=_),o(f)):n(f,_)}return m}var zs=A0(!0),C0=A0(!1),Gl=dr(null),Vl=null,ys=null,Kh=null;function Zh(){Kh=ys=Vl=null}function Jh(t){var e=Gl.current;dt(Gl),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Vl=t,Kh=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Kh!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Vl===null)throw Error(le(308));ys=t,Vl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Lr=null;function Qh(t){Lr===null?Lr=[t]:Lr.push(t)}function R0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Qh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}function Ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=_t({},d,h);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=d}}function Dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var ha={},oi=dr(ha),Ko=dr(ha),Zo=dr(ha);function Nr(t){if(t===ha)throw Error(le(174));return t}function td(t,e){switch(lt(Zo,e),lt(Ko,t),lt(oi,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}dt(oi),lt(oi,e)}function Hs(){dt(oi),dt(Ko),dt(Zo)}function P0(t){Nr(Zo.current);var e=Nr(oi.current),n=Ju(e,t.type);e!==n&&(lt(Ko,t),lt(oi,n))}function nd(t){Ko.current===t&&(dt(oi),dt(Ko))}var mt=dr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function id(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var ml=Ni.ReactCurrentDispatcher,Zc=Ni.ReactCurrentBatchConfig,kr=0,vt=null,bt=null,Ut=null,jl=!1,No=!1,Jo=0,yy=0;function Vt(){throw Error(le(321))}function rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function sd(t,e,n,i,r,s){if(kr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?wy:Ty,t=n(i,r),No){s=0;do{if(No=!1,Jo=0,25<=s)throw Error(le(301));s+=1,Ut=bt=null,e.updateQueue=null,ml.current=Ay,t=n(i,r)}while(No)}if(ml.current=Yl,e=bt!==null&&bt.next!==null,kr=0,Ut=bt=vt=null,jl=!1,e)throw Error(le(300));return t}function od(){var t=Jo!==0;return Jo=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function kn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?vt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(le(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Qo(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=kn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,vt.lanes|=u,Br|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=kn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function L0(){}function N0(t,e){var n=vt,i=kn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,ad(U0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ea(9,D0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(le(349));kr&30||I0(n,e,r)}return r}function I0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D0(t,e,n,i){e.value=n,e.getSnapshot=i,F0(e)&&O0(t)}function U0(t,e,n){return n(function(){F0(e)&&O0(t)})}function F0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function O0(t){var e=bi(t,1);e!==null&&Jn(e,t,1,-1)}function Up(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ey.bind(null,vt,t),[e.memoizedState,t]}function ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function k0(){return kn().memoizedState}function gl(t,e,n,i){var r=ni();vt.flags|=t,r.memoizedState=ea(1|e,n,void 0,i===void 0?null:i)}function mc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&rd(i,o.deps)){r.memoizedState=ea(e,n,s,i);return}}vt.flags|=t,r.memoizedState=ea(1|e,n,s,i)}function Fp(t,e){return gl(8390656,8,t,e)}function ad(t,e){return mc(2048,8,t,e)}function B0(t,e){return mc(4,2,t,e)}function z0(t,e){return mc(4,4,t,e)}function H0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G0(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,H0.bind(null,e,t),n)}function ld(){}function V0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function W0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return kr&21?(Qn(n,e)||(n=Kg(),vt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Sy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{rt=n,Zc.transition=i}}function j0(){return kn().memoizedState}function My(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))$0(e,n);else if(n=R0(t,e,n,i),n!==null){var r=Qt();Jn(n,t,i,r),q0(n,e,i)}}function Ey(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))$0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Qh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=R0(t,e,r,i),n!==null&&(r=Qt(),Jn(n,t,i,r),q0(n,e,i))}}function Y0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function $0(t,e){No=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}var Yl={readContext:On,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},wy={readContext:On,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,H0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=My.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Up,useDebugValue:ld,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Up(!1),e=t[0];return t=Sy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ni();if(pt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Ft===null)throw Error(le(349));kr&30||I0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Fp(U0.bind(null,i,s,t),[t]),i.flags|=2048,ea(9,D0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ft.identifierPrefix;if(pt){var n=Ei,i=Mi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ty={readContext:On,useCallback:V0,useContext:On,useEffect:ad,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:z0,useMemo:W0,useReducer:Jc,useRef:k0,useState:function(){return Jc(Qo)},useDebugValue:ld,useDeferredValue:function(t){var e=kn();return X0(e,bt.memoizedState,t)},useTransition:function(){var t=Jc(Qo)[0],e=kn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:N0,useId:j0,unstable_isNewReconciler:!1},Ay={readContext:On,useCallback:V0,useContext:On,useEffect:ad,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:z0,useMemo:W0,useReducer:Qc,useRef:k0,useState:function(){return Qc(Qo)},useDebugValue:ld,useDeferredValue:function(t){var e=kn();return bt===null?e.memoizedState=t:X0(e,bt.memoizedState,t)},useTransition:function(){var t=Qc(Qo)[0],e=kn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:N0,useId:j0,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=nr(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Jn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=nr(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Jn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=nr(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Jn(e,t,i,n),pl(e,t,i))}};function Op(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,i)||!jo(r,s):!0}function K0(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=hn(e)?Fr:Kt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function Sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ed(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=hn(e)?Fr:Kt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=ex(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function Z0(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Nf=i),Mf(t,e)},n}function J0(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mf(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Hy.bind(null,t,e,n),e.then(t,t))}function zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Ry=Ni.ReactCurrentOwner,un=!1;function Jt(t,e,n,i){e.child=t===null?C0(e,null,n,i):zs(e,t.child,n,i)}function Gp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=sd(t,e,n,i,s,r),n=od(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(pt&&n&&Yh(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Q0(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function Q0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(jo(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Ef(t,e,n,i,r)}function ev(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ms,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ms,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ms,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ms,Sn),Sn|=i;return Jt(t,e,r,n),e.child}function tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,i,r){var s=hn(n)?Fr:Kt.current;return s=ks(e,s),Ps(e,r),n=sd(t,e,n,i,s,r),i=od(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(pt&&i&&Yh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Wp(t,e,n,i,r){if(hn(n)){var s=!0;Bl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)vl(t,e),K0(e,n,i),Sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=hn(n)?Fr:Kt.current,c=ks(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&kp(e,o,i,c),Vi=!1;var h=e.memoizedState;o.state=h,Wl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||fn.current||Vi?(typeof u=="function"&&(yf(e,n,u,i),l=e.memoizedState),(a=Vi||Op(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,b0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=hn(n)?Fr:Kt.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&kp(e,o,i,l),Vi=!1,h=e.memoizedState,o.state=h,Wl(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||fn.current||Vi?(typeof p=="function"&&(yf(e,n,p,i),g=e.memoizedState),(c=Vi||Op(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return wf(t,e,n,i,s,r)}function wf(t,e,n,i,r,s){tv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&bp(e,n,!1),Pi(t,e,s);i=e.stateNode,Ry.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&bp(e,n,!0),e.child}function nv(t){var e=t.stateNode;e.pendingContext?Rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rp(t,e.context,!1),td(t,e.containerInfo)}function Xp(t,e,n,i,r){return Bs(),qh(r),e.flags|=256,Jt(t,e,n,i),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function Af(t){return{baseLanes:t,cachePool:null,transitions:null}}function iv(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(mt,r&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Af(n),e.memoizedState=Tf,t):cd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return by(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Af(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cd(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,i){return i!==null&&qh(i),zs(e,t.child,null,n),t=cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function by(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(le(422))),La(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Af(o),e.memoizedState=Tf,s);if(!(e.mode&1))return La(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=eu(s,i,void 0),La(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Jn(i,t,r,-1))}return md(),i=eu(Error(le(421))),La(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Gy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=Qi(r.nextSibling),Tn=e,pt=!0,jn=null,t!==null&&(Nn[In++]=Mi,Nn[In++]=Ei,Nn[In++]=Or,Mi=t.id,Ei=t.overflow,Or=e),e=cd(e,i.children),e.flags|=4096,e)}function jp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function rv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jp(t,n,e);else if(t.tag===19)jp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Py(t,e,n){switch(e.tag){case 3:nv(e),Bs();break;case 5:P0(e);break;case 1:hn(e.type)&&Bl(e);break;case 4:td(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?iv(t,e,n):(lt(mt,mt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return rv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,ev(t,e,n)}return Pi(t,e,n)}var sv,Cf,ov,av;sv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cf=function(){};ov=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(oi.current);var s=null;switch(n){case"input":r=$u(t,r),i=$u(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Zu(t,r),i=Zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}Qu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};av=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ly(t,e,n){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return hn(e.type)&&kl(),Wt(e),null;case 3:return i=e.stateNode,Hs(),dt(fn),dt(Kt),id(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Uf(jn),jn=null))),Cf(t,e),Wt(e),null;case 5:nd(e);var r=Nr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)ov(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Wt(e),null}if(t=Nr(oi.current),ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[qo]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)ut(wo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":tp(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":ip(i,s),ut("invalid",i)}Qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":ya(i),np(i,s,!0);break;case"textarea":ya(i),rp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ug(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[qo]=i,sv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ef(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)ut(wo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":tp(t,i),r=$u(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",t);break;case"textarea":ip(t,i),r=Zu(t,i),ut("invalid",t);break;default:r=i}Qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zo(t,l):typeof l=="number"&&zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Ih(t,s,l,o))}switch(n){case"input":ya(t),np(t,i,!1);break;case"textarea":ya(t),rp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)av(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Nr(Zo.current),Nr(oi.current),ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Wt(e),null;case 13:if(dt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&wn!==null&&e.mode&1&&!(e.flags&128))T0(),Bs(),e.flags|=98560,s=!1;else if(s=ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[ri]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else jn!==null&&(Uf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):md())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Hs(),Cf(t,e),t===null&&Yo(e.stateNode.containerInfo),Wt(e),null;case 10:return Jh(e.type._context),Wt(e),null;case 17:return hn(e.type)&&kl(),Wt(e),null;case 19:if(dt(mt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Vs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Wt(e),null}else 2*Et()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=mt.current,lt(mt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function Ny(t,e){switch($h(e),e.tag){case 1:return hn(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),dt(fn),dt(Kt),id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(dt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(mt),null;case 4:return Hs(),null;case 10:return Jh(e.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var Na=!1,$t=!1,Iy=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Rf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Yp=!1;function Dy(t,e){if(ff=Dl,t=h0(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hf={focusedElem:t,selectionRange:n},Dl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Wn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return g=Yp,Yp=!1,g}function Io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rf(e,n,s)}r=r.next}while(r!==i)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lv(t){var e=t.alternate;e!==null&&(t.alternate=null,lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[qo],delete e[mf],delete e[gy],delete e[vy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cv(t){return t.tag===5||t.tag===3||t.tag===4}function $p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var kt=null,Xn=!1;function Di(t,e,n){for(n=n.child;n!==null;)uv(t,e,n),n=n.sibling}function uv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:$t||Ss(n,e);case 6:var i=kt,r=Xn;kt=null,Di(t,e,n),kt=i,Xn=r,kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Wo(t)):$c(kt,n.stateNode));break;case 4:i=kt,r=Xn,kt=n.stateNode.containerInfo,Xn=!0,Di(t,e,n),kt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rf(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!$t&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Di(t,e,n),$t=i):Di(t,e,n);break;default:Di(t,e,n)}}function qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Iy),e.forEach(function(i){var r=Vy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Xn=!1;break e;case 3:kt=a.stateNode.containerInfo,Xn=!0;break e;case 4:kt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(kt===null)throw Error(le(160));uv(s,o,r),kt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,t),e=e.sibling}function fv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ti(t),i&4){try{Io(3,t,t.return),vc(3,t)}catch(x){yt(t,t.return,x)}try{Io(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:zn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(zn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{zo(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ig(r,s),ef(a,o);var c=ef(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?kg(r,d):u==="dangerouslySetInnerHTML"?Fg(r,d):u==="children"?zo(r,d):Ih(r,u,d,c)}switch(a){case"input":qu(r,s);break;case"textarea":Dg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[qo]=s}catch(x){yt(t,t.return,x)}}break;case 6:if(zn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){yt(t,t.return,x)}}break;case 3:if(zn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:zn(e,t),ti(t);break;case 13:zn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hd=Et())),i&4&&qp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,zn(e,t),$t=c):zn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ae=t,u=t.child;u!==null;){for(d=Ae=u;Ae!==null;){switch(h=Ae,p=h.child,h.tag){case 0:case 11:case 14:case 15:Io(4,h,h.return);break;case 1:Ss(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:Ss(h,h.return);break;case 22:if(h.memoizedState!==null){Zp(d);continue}}p!==null?(p.return=h,Ae=p):Zp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(x){yt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){yt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),ti(t),i&4&&qp(t);break;case 21:break;default:zn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cv(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(zo(r,""),i.flags&=-33);var s=$p(t);Lf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$p(t);Pf(t,a,o);break;default:throw Error(le(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uy(t,e,n){Ae=t,hv(t)}function hv(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Na;var c=$t;if(Na=o,($t=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?Jp(r):l!==null?(l.return=o,Ae=l):Jp(r);for(;s!==null;)Ae=s,hv(s),s=s.sibling;Ae=r,Na=a,$t=c}Kp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Kp(t)}}function Kp(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}$t||e.flags&512&&bf(e)}catch(h){yt(e,e.return,h)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Zp(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Jp(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{bf(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{bf(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var Fy=Math.ceil,$l=Ni.ReactCurrentDispatcher,ud=Ni.ReactCurrentOwner,Fn=Ni.ReactCurrentBatchConfig,Je=0,Ft=null,Rt=null,zt=0,Sn=0,Ms=dr(0),Pt=0,ta=null,Br=0,_c=0,fd=0,Do=null,cn=null,hd=0,Vs=1/0,vi=null,ql=!1,Nf=null,tr=null,Ia=!1,$i=null,Kl=0,Uo=0,If=null,_l=-1,xl=0;function Qt(){return Je&6?Et():_l!==-1?_l:_l=Et()}function nr(t){return t.mode&1?Je&2&&zt!==0?zt&-zt:xy.transition!==null?(xl===0&&(xl=Kg()),xl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:i0(t.type)),t):1}function Jn(t,e,n,i){if(50<Uo)throw Uo=0,If=null,Error(le(185));ca(t,n,i),(!(Je&2)||t!==Ft)&&(t===Ft&&(!(Je&2)&&(_c|=n),Pt===4&&Xi(t,zt)),dn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Vs=Et()+500,pc&&pr()))}function dn(t,e){var n=t.callbackNode;xx(t,e);var i=Il(t,t===Ft?zt:0);if(i===0)n!==null&&ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ap(n),e===1)t.tag===0?_y(Qp.bind(null,t)):M0(Qp.bind(null,t)),py(function(){!(Je&6)&&pr()}),n=null;else{switch(Zg(i)){case 1:n=kh;break;case 4:n=$g;break;case 16:n=Nl;break;case 536870912:n=qg;break;default:n=Nl}n=yv(n,dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dv(t,e){if(_l=-1,xl=0,Je&6)throw Error(le(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=Il(t,t===Ft?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=Je;Je|=2;var s=mv();(Ft!==t||zt!==e)&&(vi=null,Vs=Et()+500,Dr(t,e));do try{By();break}catch(a){pv(t,a)}while(!0);Zh(),$l.current=s,Je=r,Rt!==null?e=0:(Ft=null,zt=0,e=Pt)}if(e!==0){if(e===2&&(r=of(t),r!==0&&(i=r,e=Df(t,r))),e===1)throw n=ta,Dr(t,0),Xi(t,i),dn(t,Et()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Oy(r)&&(e=Zl(t,i),e===2&&(s=of(t),s!==0&&(i=s,e=Df(t,s))),e===1))throw n=ta,Dr(t,0),Xi(t,i),dn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:wr(t,cn,vi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=hd+500-Et(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pf(wr.bind(null,t,cn,vi),e);break}wr(t,cn,vi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fy(i/1960))-i,10<i){t.timeoutHandle=pf(wr.bind(null,t,cn,vi),i);break}wr(t,cn,vi);break;case 5:wr(t,cn,vi);break;default:throw Error(le(329))}}}return dn(t,Et()),t.callbackNode===n?dv.bind(null,t):null}function Df(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=cn,cn=n,e!==null&&Uf(e)),t}function Uf(t){cn===null?cn=t:cn.push.apply(cn,t)}function Oy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~fd,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Qp(t){if(Je&6)throw Error(le(327));Ls();var e=Il(t,0);if(!(e&1))return dn(t,Et()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=of(t);i!==0&&(e=i,n=Df(t,i))}if(n===1)throw n=ta,Dr(t,0),Xi(t,e),dn(t,Et()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,cn,vi),dn(t,Et()),null}function dd(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Vs=Et()+500,pc&&pr())}}function zr(t){$i!==null&&$i.tag===0&&!(Je&6)&&Ls();var e=Je;Je|=1;var n=Fn.transition,i=rt;try{if(Fn.transition=null,rt=1,t)return t()}finally{rt=i,Fn.transition=n,Je=e,!(Je&6)&&pr()}}function pd(){Sn=Ms.current,dt(Ms)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dy(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Hs(),dt(fn),dt(Kt),id();break;case 5:nd(i);break;case 4:Hs();break;case 13:dt(mt);break;case 19:dt(mt);break;case 10:Jh(i.type._context);break;case 22:case 23:pd()}n=n.return}if(Ft=t,Rt=t=ir(t.current,null),zt=Sn=e,Pt=0,ta=null,fd=_c=Br=0,cn=Do=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Lr=null}return t}function pv(t,e){do{var n=Rt;try{if(Zh(),ml.current=Yl,jl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(kr=0,Ut=bt=vt=null,No=!1,Jo=0,ud.current=null,n===null||n.return===null){Pt=1,ta=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=zp(o);if(p!==null){p.flags&=-257,Hp(p,o,a,s,e),p.mode&1&&Bp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Bp(s,c,e),md();break e}l=Error(le(426))}}else if(pt&&a.mode&1){var m=zp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Hp(m,o,a,s,e),qh(Gs(l,a));break e}}s=l=Gs(l,a),Pt!==4&&(Pt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Z0(s,l,e);Ip(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tr===null||!tr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=J0(s,a,e);Ip(s,M);break e}}s=s.return}while(s!==null)}vv(n)}catch(b){e=b,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function mv(){var t=$l.current;return $l.current=Yl,t===null?Yl:t}function md(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Br&268435455)&&!(_c&268435455)||Xi(Ft,zt)}function Zl(t,e){var n=Je;Je|=2;var i=mv();(Ft!==t||zt!==e)&&(vi=null,Dr(t,e));do try{ky();break}catch(r){pv(t,r)}while(!0);if(Zh(),Je=n,$l.current=i,Rt!==null)throw Error(le(261));return Ft=null,zt=0,Pt}function ky(){for(;Rt!==null;)gv(Rt)}function By(){for(;Rt!==null&&!ux();)gv(Rt)}function gv(t){var e=xv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?vv(t):Rt=e,ud.current=null}function vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ny(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Rt=null;return}}else if(n=Ly(n,e,Sn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Pt===0&&(Pt=5)}function wr(t,e,n){var i=rt,r=Fn.transition;try{Fn.transition=null,rt=1,zy(t,e,n,i)}finally{Fn.transition=r,rt=i}return null}function zy(t,e,n,i){do Ls();while($i!==null);if(Je&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yx(t,s),t===Ft&&(Rt=Ft=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,yv(Nl,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=rt;rt=1;var a=Je;Je|=4,ud.current=null,Dy(t,n),fv(n,t),oy(hf),Dl=!!ff,hf=ff=null,t.current=n,Uy(n),fx(),Je=a,rt=o,Fn.transition=s}else t.current=n;if(Ia&&(Ia=!1,$i=t,Kl=r),s=t.pendingLanes,s===0&&(tr=null),px(n.stateNode),dn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Nf,Nf=null,t;return Kl&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===If?Uo++:(Uo=0,If=t):Uo=0,pr(),null}function Ls(){if($i!==null){var t=Zg(Kl),e=Fn.transition,n=rt;try{if(Fn.transition=null,rt=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,Kl=0,Je&6)throw Error(le(331));var r=Je;for(Je|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:Io(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ae=d;else for(;Ae!==null;){u=Ae;var h=u.sibling,p=u.return;if(lv(u),u===c){Ae=null;break}if(h!==null){h.return=p,Ae=h;break}Ae=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ae=f;break e}Ae=s.return}}var _=t.current;for(Ae=_;Ae!==null;){o=Ae;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ae=v;else e:for(o=_;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(b){yt(a,a.return,b)}if(a===o){Ae=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ae=M;break e}Ae=a.return}}if(Je=r,pr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(cc,t)}catch{}i=!0}return i}finally{rt=n,Fn.transition=e}}return!1}function em(t,e,n){e=Gs(n,e),e=Z0(t,e,1),t=er(t,e,1),e=Qt(),t!==null&&(ca(t,1,e),dn(t,e))}function yt(t,e,n){if(t.tag===3)em(t,t,n);else for(;e!==null;){if(e.tag===3){em(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Gs(n,t),t=J0(e,t,1),e=er(e,t,1),t=Qt(),e!==null&&(ca(e,1,t),dn(e,t));break}}e=e.return}}function Hy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(zt&n)===n&&(Pt===4||Pt===3&&(zt&130023424)===zt&&500>Et()-hd?Dr(t,0):fd|=n),dn(t,e)}function _v(t,e){e===0&&(t.mode&1?(e=Ea,Ea<<=1,!(Ea&130023424)&&(Ea=4194304)):e=1);var n=Qt();t=bi(t,e),t!==null&&(ca(t,e,n),dn(t,n))}function Gy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_v(t,n)}function Vy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),_v(t,n)}var xv;xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Py(t,e,n);un=!!(t.flags&131072)}else un=!1,pt&&e.flags&1048576&&E0(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=ks(e,Kt.current);Ps(e,n),r=sd(null,e,i,t,r,n);var s=od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ed(e),r.updater=gc,e.stateNode=r,r._reactInternals=e,Sf(e,i,t,n),e=wf(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Yh(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Xy(i),t=Wn(i,t),r){case 0:e=Ef(null,e,i,t,n);break e;case 1:e=Wp(null,e,i,t,n);break e;case 11:e=Gp(null,e,i,t,n);break e;case 14:e=Vp(null,e,i,Wn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Ef(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Wp(t,e,i,r,n);case 3:e:{if(nv(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,b0(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(le(423)),e),e=Xp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(le(424)),e),e=Xp(t,e,i,n,r);break e}else for(wn=Qi(e.stateNode.containerInfo.firstChild),Tn=e,pt=!0,jn=null,n=C0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Pi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return P0(e),t===null&&_f(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,df(i,r)?o=null:s!==null&&df(i,s)&&(e.flags|=32),tv(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return iv(t,e,n);case 4:return td(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Gp(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Gl,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!fn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=On(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Vp(t,e,i,r,n);case 15:return Q0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),vl(t,e),e.tag=1,hn(i)?(t=!0,Bl(e)):t=!1,Ps(e,n),K0(e,i,r),Sf(e,i,r,n),wf(null,e,i,!0,t,n);case 19:return rv(t,e,n);case 22:return ev(t,e,n)}throw Error(le(156,e.tag))};function yv(t,e){return Yg(t,e)}function Wy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new Wy(t,e,n,i)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xy(t){if(typeof t=="function")return gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===Fh)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ur(n.children,r,s,e);case Dh:o=8,r|=8;break;case Wu:return t=Dn(12,n,e,r|2),t.elementType=Wu,t.lanes=s,t;case Xu:return t=Dn(13,n,e,r),t.elementType=Xu,t.lanes=s,t;case ju:return t=Dn(19,n,e,r),t.elementType=ju,t.lanes=s,t;case Pg:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rg:o=10;break e;case bg:o=9;break e;case Uh:o=11;break e;case Fh:o=14;break e;case Gi:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=Pg,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,i,r,s,o,a,l){return t=new jy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),t}function Yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Sv(t){if(!t)return cr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(hn(n))return S0(t,n,e)}return e}function Mv(t,e,n,i,r,s,o,a,l){return t=vd(n,i,!0,t,r,s,o,a,l),t.context=Sv(null),n=t.current,i=Qt(),r=nr(n),s=Ai(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ca(t,r,i),dn(t,i),t}function yc(t,e,n,i){var r=e.current,s=Qt(),o=nr(r);return n=Sv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Jn(t,r,o,s),pl(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _d(t,e){tm(t,e),(t=t.alternate)&&tm(t,e)}function $y(){return null}var Ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function xd(t){this._internalRoot=t}Sc.prototype.render=xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));yc(t,e,null,null)};Sc.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){yc(null,t,null,null)}),e[Ri]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=e0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&n0(t)}};function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nm(){}function qy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=Mv(e,i,t,0,null,!1,!1,"",nm);return t._reactRootContainer=o,t[Ri]=o.current,Yo(t.nodeType===8?t.parentNode:t),zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=vd(t,0,!1,null,null,!1,!1,"",nm);return t._reactRootContainer=l,t[Ri]=l.current,Yo(t.nodeType===8?t.parentNode:t),zr(function(){yc(e,l,n,i)}),l}function Ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}yc(e,o,t,r)}else o=qy(n,e,t,r,i);return Jl(o)}Jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Bh(e,n|1),dn(e,Et()),!(Je&6)&&(Vs=Et()+500,pr()))}break;case 13:zr(function(){var i=bi(t,1);if(i!==null){var r=Qt();Jn(i,t,1,r)}}),_d(t,1)}};zh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Qt();Jn(e,t,134217728,n)}_d(t,134217728)}};Qg=function(t){if(t.tag===13){var e=nr(t),n=bi(t,e);if(n!==null){var i=Qt();Jn(n,t,e,i)}_d(t,e)}};e0=function(){return rt};t0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};nf=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dc(i);if(!r)throw Error(le(90));Ng(i),qu(i,r)}}}break;case"textarea":Dg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};Hg=dd;Gg=zr;var Ky={usingClientEntryPoint:!1,Events:[fa,gs,dc,Bg,zg,dd]},ho={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zy={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xg(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{cc=Da.inject(Zy),si=Da}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(e))throw Error(le(200));return Yy(t,e,null,n)};Cn.createRoot=function(t,e){if(!yd(t))throw Error(le(299));var n=!1,i="",r=Ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,Yo(t.nodeType===8?t.parentNode:t),new xd(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Xg(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return zr(t)};Cn.hydrate=function(t,e,n){if(!Mc(e))throw Error(le(200));return Ec(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!yd(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ev;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mv(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sc(e)};Cn.render=function(t,e,n){if(!Mc(e))throw Error(le(200));return Ec(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(le(40));return t._reactRootContainer?(zr(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Cn.unstable_batchedUpdates=dd;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Mc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Ec(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wv)}catch(t){console.error(t)}}wv(),wg.exports=Cn;var Jy=wg.exports,im=Jy;Gu.createRoot=im.createRoot,Gu.hydrateRoot=im.hydrateRoot;const Fo={name:"Abhimanyu Tiwari",title:"Product Designer"},Ua={email:"mailto:bangaloredesigner2020@gmail.com",linkedin:"https://www.linkedin.com/in/abhimanyu-tiwari-a745b4139/",website:"https://medium.com/@bangaloredesigner2020",resume:"/assets/resume/abhimanyu-tiwari-resume.pdf"},Ar=[{id:"company-01",name:"Peak42",initials:"P42",logo:"logos/peak42.png",tint:"#ECE6DA",ink:"#1D1A16",role:"UX / UI Designer · Full-time",location:"Bengaluru, Karnataka, India · On-site",duration:"Aug 2023 — Present",summary:"I design customised website templates for new clients, making sure each design matches their brand identity and business goals — from understanding requirements, colour preferences and functional needs to turning them into visually compelling, user-friendly layouts.",responsibilities:["Understand each client’s requirements, preferred colour schemes and functional needs","Translate them into visually compelling, user-friendly website layouts","Design across touchpoints — banners, icons, logos and full UI templates tailored to each client","Work closely with developers and project managers for a smooth handoff and pixel-perfect implementation"],products:["Custom client website templates","Banners, icons & logos"],tools:["Adobe Photoshop","Figma"],contributions:["Clean, modern designs that reflect each client’s vision while keeping usability and consistency","Templates built from scratch or adapted from existing elements, depending on the client"]},{id:"company-02",name:"EsportsXO",initials:"XO",logo:"logos/esportsxo.png",tint:"#2B2A28",ink:"#F1ECE3",role:"UX / UI Designer · Full-time",location:"Bengaluru, Karnataka, India · On-site",duration:"May 2022 — May 2023",summary:"I redesigned the BattleXO web and mobile app — a platform where users join gaming tournaments and compete to win — improving the user experience and visual design to make the interface more modern, engaging and intuitive for gamers.",responsibilities:["Revamped the homepage and dashboard for clearer navigation","Designed tournament flows that make it easy to join and track progress","Created a consistent visual style with bold, gaming-inspired aesthetics","Enhanced the mobile experience for smooth access across devices"],products:["BattleXO web app","BattleXO mobile app"],tools:["Adobe Illustrator","Figma"],contributions:["A redesign aimed at a more user-friendly, competitive and community-driven platform","Elevated the brand’s look and feel in line with gamers’ needs"]},{id:"company-03",name:"Elmeasure",initials:"E",logo:"logos/elmeasure.png",tint:"#23443A",ink:"#EEF1E8",role:"UX / UI Designer · Full-time",location:"Bengaluru, Karnataka, India",duration:"Feb 2022 — May 2022",summary:"I developed a web platform for Elmeasure that makes it easy to monitor and manage household power consumption, with detailed insights into how much electricity individual appliances use.",responsibilities:["Designed the web platform for monitoring and managing household power consumption","Appliance-level insights into electricity usage","Scales from single families to larger communities and housing societies","Integrates with electricity meters so users can track, analyse and optimise usage"],products:["Household energy-monitoring web platform"],tools:["UI design","UX research"],contributions:["Encourages smarter consumption and cost savings"]},{id:"company-04",name:"Kastech Software Solutions Group",initials:"K",logo:"logos/kastech.png",tint:"#2C3A66",ink:"#EEF0F7",role:"User Experience Designer · Full-time",location:"Hyderabad, Telangana, India",duration:"Apr 2021 — Jan 2022",summary:"At Kastech I worked on Aqupad, a real-estate website that helps individuals and businesses discover properties tailored to their needs.",responsibilities:["Designed the Aqupad real-estate website","Advanced filtering so users can narrow down properties by specific requirements"],products:["Aqupad"],tools:["Adobe XD","User research"],contributions:["A faster, more efficient property search"]}],Es=[{id:"project-01",name:"CHOMP",initials:"CH",font:"'Fredoka', 'Geist', sans-serif",paper:"#FFE3CC",ink:"#B8300A",category:"AI food app · UX/UI case study",year:"2025",serial:"AT CHOMP01",description:"Chomp is your AI-powered food bestie — a smart, sassy and ridiculously helpful app that takes the stress out of cooking.",context:"People waste time staring into fridges, struggle with meal decisions and abandon boring cooking apps. Food tech lacks personalisation and personality.",role:"Smart AI app case study — competitor research, branding, wireframes and UI, designed in Figma.",process:["Competitor analysis — SWOT for Yummly and Tasty","Gap found: little gamification or community, weak personalisation and no real fridge scanning","Hand-sketched wireframes: home, scan results and step-by-step recipe","Design system — Fredoka + Rebond Grotesque, tomato red, peach, white and black, core components","Brand identity — the Chomp mascot and logo"],decisions:["Scan your fridge → get recipe ideas → grab missing ingredients in one tap","Chatty AI with a flair for fun that turns food discovery into a game-like adventure","Adapts to your tastes, moods and routines — a speedy snack, something healthy or a kitchen quest","Connects with grocery apps to make shopping easy and nudge healthier picks"],screens:[{src:"projects/chomp/main-page.png",alt:"Main page UI"},{src:"projects/chomp/prototype-flow.png",alt:"Prototype flow"},{src:"projects/chomp/wireframes.png",alt:"Wireframes"},{src:"projects/chomp/style-guide.png",alt:"Style guide — type, colour and components"}],finalImg:"projects/chomp/final.png",final:"Meet Chomp, your AI-powered foodie bestie: from fridge scan to dinner plan — 10-minute recipes, ingredient orders and a sprinkle of sass.",outcome:"",learnings:""},{id:"project-02",name:"ZEPTO",initials:"Z",font:"'Geist', sans-serif",paper:"#EDE2F8",ink:"#3D0F6E",category:"AI e-commerce search",year:"Concept",serial:"AT ZEPTO02",description:"A product design exploration to make Zepto search smarter, more contextual and more useful — helping people find what they need faster and anticipate what they’ll need next.",context:"Search struggles when intent is broad or unclear. 60–70% of grocery-app sessions start with search, users complain about accuracy and personalisation, broad queries cause decision fatigue over variant, size and brand, and baskets rarely grow beyond the one item people came for.",role:"UI/UX Designer — concept exploration (Search + AI), from early wireframes to hi-fi UI.",process:["Search patterns: 52% very broad (“Aashirwad atta”), 34% narrow (“amul 500ml milk”), 14% broad (“rice”)","Framed the opportunity: how might we make Zepto search feel effortlessly smart, personalised and context-aware?","Explored 7 concepts — predictive reorder, bulk order, intent expander, visual, voice, recipe-first and mood-based search","Chose three directions and wireframed how AI suggestions could appear without interrupting shopping","Mapped edge cases early — wrong predictions, prediction drift, out-of-stock items, shared household accounts"],decisions:["Predictive Reorder — predicts when essentials run out and offers a one-tap, multi-item reorder with variant swaps; never re-suggests one-off buys or items already in the cart","Smart Packs — ready-to-add bundles from habits, seasons and household needs; customisable, with substitutions and a “don’t recommend again” option","Mood + time-based suggestions — a “Late Night Bites” rail and playful notifications, with easy dismissal and profile-aware logic for shared accounts"],screens:[{src:"projects/zepto/predictive-reorder.png",alt:"Predictive reorder — train AI, running-low prompt, multi-item reorder, variants"},{src:"projects/zepto/smart-packs.png",alt:"Smart Packs — discovery, add to cart, customisation, substitutions"},{src:"projects/zepto/mood-based.png",alt:"Mood-based — Late Night Bites rail & notifications"}],finalImg:"projects/zepto/final.png",final:"One-tap multi-item reorder with variant swaps, curated Smart Packs people can customise and substitute on the fly, and context-aware discovery tied to time and mood.",outcome:"Expected, not measured — more timely repeat purchases and cross-sells from Predictive Reorder, bigger baskets and bulk buys from Smart Packs, and more impulse add-ons from mood-based discovery.",learnings:"Design AI around real grocery behaviour: search is a habit loop shaped by household context, timing and how broad the intent is. Mapping edge cases early made it clearer what the AI should suggest — and when it should stay quiet."},{id:"project-03",name:"FLYTBASE",initials:"FB",font:"inherit",paper:"#1D2127",ink:"#FFA25C",category:"Emergency ops · Drones",year:"Concept",serial:"AT FLYT03",description:"Redesigning emergency response so operators can make critical decisions within about 90 seconds — across a desktop emergency operations centre and a mobile field view.",context:"3:47 AM, a fire alert: operators must confirm it, judge severity, locate the fire and decide whether to dispatch. In one researched scenario a traditional coordinated response took about 48 minutes. The goal: cut detection-to-response to about 90 seconds without cognitive overload, false confidence or loss of human control — FlytBase drones stream live video, thermal data and detections, but AI is not treated as infallible.",role:"UI/UX Designer — design exploration across research, product audit, personas, ideation and UI, for desktop EOC and mobile field use.",process:["Double Diamond — secondary and industry research, product audit and competitor analysis (no primary operator interviews)","Mapped response across 10 domains into 8 shared challenges — uncertainty, escalation risk, evacuation routing, inter-department coordination","Studied 4 incidents where interfaces worsened outcomes — HMNZS Manawanui, the 2018 Hawaii false missile alert, London Ambulance CAD (1992), Therac-25","Audited the existing dashboard: weak hierarchy, poor alert sorting, interaction friction, no stress sensitivity, navigation effort, small touch targets","Three personas — Rahul (EOC director, decides in ~90 s), Priya (coordinates 7–10 incidents), Aniket (field commander, acts)","10 design principles and a 10-step fire-emergency flow"],decisions:["Severity, location, live-feed access and one clear recommendation surface first","AI explains what it sees, why, and how confident it is","Live visual and thermal feed within reach of every alert; fire, drones, teams, risks and routes on one map","Dispatch panel with crew status and acknowledgement tracking","Override and pause controls always visible — human control stays in view","Alerts stack by severity; one system tailored into strategic, coordination and tactical views, plus a simplified mobile field view"],screens:[{src:"projects/flytbase/dashboard.png",alt:"Main dashboard overview"},{src:"projects/flytbase/thermal-alert.png",alt:"Thermal signature detected — critical alert"},{src:"projects/flytbase/ai-dispatch.png",alt:"AI suggests next steps and dispatch recommendation"},{src:"projects/flytbase/drone-feed.png",alt:"Drone airborne — live forest-fire feed"},{src:"projects/flytbase/coordinates-map.png",alt:"Coordinates received — map and situational awareness"}],finalImg:"projects/flytbase/final.png",final:"Main dashboard with live drone feed and incident map — each screen tied to a problem, a decision and its rationale.",outcome:"Not yet tested — success metrics defined: operational timings, error rates, SUS and task success.",learnings:"AI raises the stakes for UX. More information doesn’t mean better decisions, stress changes how people use interfaces, and different roles need different depth. Automation needs clear boundaries with human control visible — design for the decision, not the dashboard."},{id:"project-04",name:"BATTLEXO",initials:"XO",font:"inherit",paper:"#FFD23F",ink:"#16130B",category:"Gaming website & app",year:"2022–23",serial:"AT BXO04",description:"Redesigning a gaming platform into a connected player ecosystem — website and mobile app.",context:"BattleXO centred on gameplay, so players had few reasons to keep exploring after a match or to come back between matches.",role:"Product / UI Designer — website and mobile app redesign at EsportsXO.",process:["Built one connected ecosystem around a Play → Engage → Earn → Return loop","Five initiatives: full website + mobile redesign, Byte, XO Coins, XO Pro, and XO Wallet with Leaderboard","Focus areas: gamification, engagement, loyalty and monetisation"],decisions:["Website + mobile redesign — clearer hierarchy, consistent navigation and a gaming-first interface surfacing matches, tournaments, rewards and progression","Byte — short-form gaming content after a match to keep players watching, discovering and playing again","XO Coins — rewards for winning, spendable in the XO Shop, linking competition to repeat play","XO Pro — membership for competitive players: 2% XO Shop discount, badge, Scrim & Rivalry Zone access, partnered LAN events, giveaways and premium tournaments","XO Wallet + Leaderboard — rewards, balance and transactions in one place; performance visible across the platform"],screens:[{src:"projects/battlexo/xo-shop.png",alt:"XO Shop — in-app products"},{src:"projects/battlexo/xo-shop-details.png",alt:"XO Shop product details"},{src:"projects/battlexo/xo-pro.png",alt:"XO Pro — upgrade and membership benefits"},{src:"projects/battlexo/leaderboard.png",alt:"Global leaderboard"}],finalImg:"projects/battlexo/final.png",final:"The connected loop: play, win, earn XO Coins, track them in the Wallet, compete on the Leaderboard, spend in the XO Shop, engage with Byte, upgrade to XO Pro — and play again.",outcome:"Goals, not measured — more ways to engage, more reasons to return, more value from gameplay, stronger retention and loyalty, and new monetisation opportunities.",learnings:""}],Cr=[{id:"current",name:"Current",kind:"Browser game",text:"A canyon canoe race. Ride the current, stay off the rocks and clear every gate.",url:"https://canoe-race.vercel.app/",image:"ai/current.jpg",focusX:.5,color:"#1F7A72",tilt:-3},{id:"pixelpeek",name:"PixelPeek",kind:"Chrome extension",text:"See any website the way a designer does: read styles, copy to Figma, pull the design system.",url:"https://pixelpeek-sandy.vercel.app/",image:"ai/pixelpeek.jpg",focusX:0,color:"#2C5FD8",tilt:2}],Qy=[{id:"work",label:"Work experience",sub:"4 companies · the cards"},{id:"projects",label:"Projects",sub:"4 case studies · the notes"},{id:"ai",label:"Experiments with AI",sub:"2 live builds · the tickets"}],Tv={mail:["M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z","M3.5 6.5l8.5 6.5 8.5-6.5"],linkedin:["M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z","M8 10.5V17","M8 7.3v.1","M12 17v-6.5","M12 13.5a2.5 2.5 0 0 1 5 0V17"],x:["M5 4l14 16","M19 4L5 20"],web:["M21 12a9 9 0 1 1-18 0a9 9 0 1 1 18 0z","M3 12h18","M12 3c2.6 2.8 3.8 5.8 3.8 9s-1.2 6.2-3.8 9c-2.6-2.8-3.8-5.8-3.8-9S9.4 5.8 12 3z"],doc:["M7 3h7l5 5v13H7z","M14 3v5h5","M10 13h6","M10 17h6"],back:["M19 12H5","M11 6l-6 6 6 6"]};function eS({name:t}){return k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:Tv[t].map(e=>k.jsx("path",{d:e},e))})}const Ff=()=>k.jsx(eS,{name:"back"}),Av=t=>e=>{e.key==="Escape"&&(e.stopPropagation(),t())};function tS({logo:t,initials:e,large:n=!1}){return k.jsx("span",{className:n?"logo logo-lg":"logo",children:t?k.jsx("img",{src:t,alt:""}):e})}function Cv({onBack:t,backRef:e}){return k.jsxs("button",{className:"backbtn",type:"button",onClick:t,ref:e,children:[k.jsx(Ff,{}),"Back",k.jsx("span",{className:"bk-long",children:" to wallet"})]})}function nS({c:t,num:e,leaving:n,onBack:i,backRef:r}){return k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"scrim"+(n?" leaving":""),type:"button",tabIndex:-1,"aria-label":"Put the card back",onClick:i}),k.jsx("div",{className:"held-wrap",children:k.jsxs("div",{className:"held card-sheet"+(n?" leaving":""),role:"dialog","aria-modal":"true","aria-labelledby":"sheet-title",onKeyDown:Av(i),style:{backgroundColor:t.tint,color:t.ink},children:[k.jsxs("div",{className:"sheet-head",children:[k.jsx(tS,{logo:t.logo,initials:t.initials,large:!0}),k.jsxs("div",{className:"head-txt",children:[k.jsxs("p",{className:"eyebrow",children:["Card ",e," / 04 · Experience"]}),k.jsx("h2",{className:"h2",id:"sheet-title",children:t.name})]}),k.jsx(Cv,{onBack:i,backRef:r})]}),k.jsxs("div",{className:"body",children:[k.jsxs("div",{className:"meta",children:[k.jsxs("div",{children:[k.jsx("p",{className:"lbl",children:"Location"}),k.jsx("p",{className:"mv",children:t.location})]}),k.jsxs("div",{children:[k.jsx("p",{className:"lbl",children:"Role"}),k.jsx("p",{className:"mv",children:t.role})]}),k.jsxs("div",{children:[k.jsx("p",{className:"lbl",children:"Duration"}),k.jsx("p",{className:"mv",children:t.duration})]})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"What I worked on"}),k.jsx("p",{className:"p lead",children:t.summary})]}),k.jsxs("div",{className:"cols",children:[k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Responsibilities"}),k.jsx("ul",{className:"list",children:t.responsibilities.map(s=>k.jsx("li",{children:s},s))})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Key contributions"}),k.jsx("ul",{className:"list",children:t.contributions.map(s=>k.jsx("li",{children:s},s))})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Products & projects"}),k.jsx("div",{className:"chips",children:t.products.map(s=>k.jsx("span",{className:"chip",children:s},s))})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Tools & skills"}),k.jsx("div",{className:"chips",children:t.tools.map(s=>k.jsx("span",{className:"chip",children:s},s))})]})]}),t.outcome?k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Outcomes & impact"}),k.jsx("p",{className:"p",children:t.outcome})]}):null]})]})})]})}function iS(t){const e=[];let n=0;for(const i of t){if(i===" "){e.push({c:" ",s:12});continue}e.push({c:i,s:/[0-9]/.test(i)?12+n++*1.6:14})}return e}function rS({p:t,num:e,leaving:n,onBack:i,backRef:r}){return k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"scrim"+(n?" leaving":""),type:"button",tabIndex:-1,"aria-label":"Put the note back",onClick:i}),k.jsx("div",{className:"held-wrap",children:k.jsx("div",{className:"held note-sheet"+(n?" leaving":""),role:"dialog","aria-modal":"true","aria-labelledby":"note-title",onKeyDown:Av(i),style:{backgroundColor:t.paper,color:t.ink},children:k.jsxs("div",{className:"ns-main",children:[k.jsx("div",{className:"ns-band","aria-hidden":"true",children:k.jsxs("span",{className:"ns-vtext",children:["Abhimanyu Tiwari · Project Note · ",e]})}),k.jsx("div",{className:"ns-thread","aria-hidden":"true"}),k.jsxs("div",{className:"sheet-head ns-head",style:{backgroundColor:t.paper},children:[k.jsx("div",{className:"ns-wm","aria-hidden":"true"}),k.jsxs("div",{className:"head-txt",children:[k.jsx("p",{className:"serialbig","aria-label":"Serial "+t.serial,children:iS(t.serial).map((s,o)=>k.jsx("span",{style:{fontSize:s.s+"px"},children:s.c},o))}),k.jsxs("p",{className:"eyebrow",children:["Note ",e," / 04 · Project"]}),k.jsx("h2",{className:"h2",id:"note-title",style:{fontFamily:t.font},children:t.name}),k.jsxs("p",{className:"sub",children:[t.category," · ",t.year]})]}),k.jsx("div",{className:"ns-seal","aria-hidden":"true",children:t.initials}),k.jsxs("div",{className:"ns-r",children:[k.jsxs("span",{className:"bleed","aria-hidden":"true",children:[k.jsx("i",{}),k.jsx("i",{}),k.jsx("i",{}),k.jsx("i",{}),k.jsx("i",{})]}),k.jsx("span",{className:"ns-den","aria-hidden":"true",children:e}),k.jsx(Cv,{onBack:i,backRef:r})]})]}),k.jsx("div",{className:"band"}),k.jsxs("div",{className:"body",children:[k.jsxs("section",{className:"sec",style:{borderTop:0},children:[k.jsx("h3",{className:"lbl",children:"In short"}),k.jsx("p",{className:"p lead",children:t.description})]}),k.jsxs("div",{className:"cols",children:[k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Problem & context"}),k.jsx("p",{className:"p",children:t.context})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"My role"}),k.jsx("p",{className:"p",children:t.role})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Research & process"}),k.jsx("ul",{className:"list",children:t.process.map(s=>k.jsx("li",{children:s},s))})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Key design decisions"}),k.jsx("ol",{className:"olist",children:t.decisions.map(s=>k.jsx("li",{children:s},s))})]})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"UX / UI screens"}),k.jsx("div",{className:"shots two",children:t.screens.map((s,o)=>typeof s=="string"?k.jsx("figure",{className:"shot",children:s},o):k.jsxs("figure",{className:"shot has-img",children:[k.jsx("img",{src:s.src,alt:s.alt,loading:"lazy"}),k.jsx("figcaption",{children:s.alt})]},o))})]}),k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Final design"}),t.finalImg?k.jsx("figure",{className:"shot wide has-img",children:k.jsx("img",{src:t.finalImg,alt:"Final design — "+t.name,loading:"lazy"})}):k.jsx("figure",{className:"shot wide",children:"[Final design — hero image]"}),k.jsx("p",{className:"cap",children:t.final})]}),t.outcome?k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Outcomes"}),k.jsx("p",{className:"p",children:t.outcome})]}):null,t.learnings?k.jsxs("section",{className:"sec",children:[k.jsx("h3",{className:"lbl",children:"Learnings"}),k.jsx("p",{className:"p",children:t.learnings})]}):null]})]})})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="169",sS=0,rm=1,oS=2,Rv=1,bv=2,gi=3,ur=0,en=1,Yn=2,rr=0,Ns=1,sm=2,om=3,am=4,aS=5,Rr=100,lS=101,cS=102,uS=103,fS=104,hS=200,dS=201,pS=202,mS=203,Of=204,kf=205,gS=206,vS=207,_S=208,xS=209,yS=210,SS=211,MS=212,ES=213,wS=214,Bf=0,zf=1,Hf=2,Ws=3,Gf=4,Vf=5,Wf=6,Xf=7,Pv=0,TS=1,AS=2,sr=0,CS=1,RS=2,bS=3,PS=4,LS=5,NS=6,Lv=7,Nv=300,Xs=301,js=302,jf=303,Yf=304,wc=306,Ql=1e3,Ir=1001,$f=1002,Un=1003,IS=1004,Fa=1005,$n=1006,ru=1007,qi=1008,Li=1009,Iv=1010,Dv=1011,na=1012,Md=1013,Hr=1014,wi=1015,da=1016,Ed=1017,wd=1018,Ys=1020,Uv=35902,Fv=1021,Ov=1022,Kn=1023,kv=1024,Bv=1025,Is=1026,$s=1027,zv=1028,Td=1029,Hv=1030,Ad=1031,Cd=1033,Sl=33776,Ml=33777,El=33778,wl=33779,qf=35840,Kf=35841,Zf=35842,Jf=35843,Qf=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,oh=37812,ah=37813,lh=37814,ch=37815,uh=37816,fh=37817,hh=37818,dh=37819,ph=37820,mh=37821,Tl=36492,gh=36494,vh=36495,Gv=36283,_h=36284,xh=36285,yh=36286,DS=3200,US=3201,Vv=0,FS=1,Si="",Mn="srgb",mr="srgb-linear",Rd="display-p3",Tc="display-p3-linear",ec="linear",ht="srgb",tc="rec709",nc="p3",qr=7680,lm=519,OS=512,kS=513,BS=514,Wv=515,zS=516,HS=517,GS=518,VS=519,cm=35044,um="300 es",Ti=2e3,ic=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,Sh=180/Math.PI;function eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function WS(t,e){return(t%e+e)%e}function ou(t,e,n){return(1-n)*t+n*e}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],_=r[1],v=r[4],M=r[7],b=r[2],R=r[5],C=r[8];return s[0]=o*x+a*_+l*b,s[3]=o*m+a*v+l*R,s[6]=o*f+a*M+l*C,s[1]=c*x+u*_+d*b,s[4]=c*m+u*v+d*R,s[7]=c*f+u*M+d*C,s[2]=h*x+p*_+g*b,s[5]=h*m+p*v+g*R,s[8]=h*f+p*M+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new je;function Xv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XS(){const t=rc("canvas");return t.style.display="block",t}const fm={};function Al(t){t in fm||(fm[t]=!0,console.warn(t))}function jS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function YS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $S(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hm=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[mr]:{transfer:ec,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Mn]:{transfer:ht,primaries:tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tc]:{transfer:ec,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(dm),fromReference:t=>t.applyMatrix3(hm)},[Rd]:{transfer:ht,primaries:nc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(dm),fromReference:t=>t.applyMatrix3(hm).convertLinearToSRGB()}},qS=new Set([mr,Tc]),nt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mo[e].toReference,r=mo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===Si?ec:mo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(mo[e].luminanceCoefficients)}};function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class KS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=rc("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class jv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JS=0;class tn extends Qs{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Ir,r=Ir,s=$n,o=qi,a=Kn,l=Li,c=tn.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=eo(),this.name="",this.source=new jv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Nv;tn.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,b=(f+1)/2,R=(u+h)/4,C=(d+x)/4,P=(g+m)/4;return v>M&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends QS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yv extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,f*_);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const M=a*_;if(l=l*m+h*M,c=c*m+p*M,u=u*m+g*M,d=d*m+x*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*h,e[n+1]=l*g+u*h+c*d-a*p,e[n+2]=c*g+u*p+a*h-l*d,e[n+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new I,pm=new Vr;class pa{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),ka.subVectors(this.max,go),Zr.subVectors(e.a,go),Jr.subVectors(e.b,go),Qr.subVectors(e.c,go),Ui.subVectors(Jr,Zr),Fi.subVectors(Qr,Jr),vr.subVectors(Zr,Qr);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-vr.z,vr.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,vr.z,0,-vr.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-vr.y,vr.x,0];return!fu(n,Zr,Jr,Qr,ka)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,Zr,Jr,Qr,ka))?!1:(Ba.crossVectors(Ui,Fi),n=[Ba.x,Ba.y,Ba.z],fu(n,Zr,Jr,Qr,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new I,new I,new I,new I,new I,new I,new I,new I],Hn=new I,Oa=new pa,Zr=new I,Jr=new I,Qr=new I,Ui=new I,Fi=new I,vr=new I,go=new I,ka=new I,Ba=new I,_r=new I;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_r.fromArray(t,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=n.dot(_r),u=i.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tM=new pa,vo=new I,hu=new I;class bd{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(hu)),this.expandByPoint(vo.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new I,du=new I,za=new I,Oi=new I,pu=new I,Ha=new I,mu=new I;class nM{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){du.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(du);const s=e.distanceTo(n)*.5,o=-this.direction.dot(za),a=Oi.dot(this.direction),l=-Oi.dot(za),c=Oi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(du).addScaledVector(za,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),Ha.subVectors(i,e),mu.crossVectors(pu,Ha);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(Oi,Ha));if(l<0)return null;const c=a*this.direction.dot(pu.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,g,x,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iM,e,rM)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ki.crossVectors(i,_n),ki.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ki.crossVectors(i,_n)),ki.normalize(),Ga.crossVectors(_n,ki),r[0]=ki.x,r[4]=Ga.x,r[8]=_n.x,r[1]=ki.y,r[5]=Ga.y,r[9]=_n.y,r[2]=ki.z,r[6]=Ga.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],_=i[3],v=i[7],M=i[11],b=i[15],R=r[0],C=r[4],P=r[8],q=r[12],y=r[1],w=r[5],X=r[9],O=r[13],j=r[2],Z=r[6],H=r[10],ee=r[14],L=r[3],J=r[7],te=r[11],ie=r[15];return s[0]=o*R+a*y+l*j+c*L,s[4]=o*C+a*w+l*Z+c*J,s[8]=o*P+a*X+l*H+c*te,s[12]=o*q+a*O+l*ee+c*ie,s[1]=u*R+d*y+h*j+p*L,s[5]=u*C+d*w+h*Z+p*J,s[9]=u*P+d*X+h*H+p*te,s[13]=u*q+d*O+h*ee+p*ie,s[2]=g*R+x*y+m*j+f*L,s[6]=g*C+x*w+m*Z+f*J,s[10]=g*P+x*X+m*H+f*te,s[14]=g*q+x*O+m*ee+f*ie,s[3]=_*R+v*y+M*j+b*L,s[7]=_*C+v*w+M*Z+b*J,s[11]=_*P+v*X+M*H+b*te,s[15]=_*q+v*O+M*ee+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=d*m*c-x*h*c+x*l*p-a*m*p-d*l*f+a*h*f,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,M=u*x*c-g*d*c+g*a*p-o*x*p-u*a*f+o*d*f,b=g*d*l-u*x*l-g*a*h+o*x*h+u*a*m-o*d*m,R=n*_+i*v+r*M+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*C,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*f+n*h*f)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*C,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*C,e[8]=M*C,e[9]=(g*d*s-u*x*s-g*i*p+n*x*p+u*i*f-n*d*f)*C,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*f+n*a*f)*C,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*C,e[12]=b*C,e[13]=(u*x*r-g*d*r+g*i*h-n*x*h-u*i*m+n*d*m)*C,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,x=o*u,m=o*d,f=a*d,_=l*c,v=l*u,M=l*d,b=i.x,R=i.y,C=i.z;return r[0]=(1-(x+f))*b,r[1]=(p+M)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+f))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(g+v)*C,r[9]=(m-_)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),a=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Ti)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ic)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,x;if(a===Ti)g=(o+s)*d,x=-2*d;else if(a===ic)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new I,Gn=new ot,iM=new I(0,0,0),rM=new I(1,1,1),ki=new I,Ga=new I,_n=new I,mm=new ot,gm=new Vr;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class $v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const vm=new I,ts=new Vr,di=new ot,Va=new I,_o=new I,oM=new I,aM=new Vr,_m=new I(1,0,0),xm=new I(0,1,0),ym=new I(0,0,1),Sm={type:"added"},lM={type:"removed"},ns={type:"childadded",child:null},gu={type:"childremoved",child:null};class Ht extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new I,n=new ei,i=new Vr,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new je}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(_o,Va,this.up):di.lookAt(Va,_o,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(di),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sm),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lM),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,aM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new I(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new I,pi=new I,vu=new I,mi=new I,is=new I,rs=new I,Mm=new I,_u=new I,xu=new I,yu=new I,Su=new st,Mu=new st,Eu=new st;class qn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),pi.subVectors(i,n),vu.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(pi),l=Vn.dot(vu),c=pi.dot(pi),u=pi.dot(vu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Su,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Eu,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),pi.subVectors(e,n),Vn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),_u.subVectors(e,i);const l=is.dot(_u),c=rs.dot(_u);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const u=is.dot(xu),d=rs.dot(xu);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(is,o);yu.subVectors(e,s);const p=is.dot(yu),g=rs.dot(yu);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(rs,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Mm.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(Mm,a);const f=1/(m+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=WS(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wu(o,s,e+1/3),this.g=wu(o,s,e),this.b=wu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return nt.fromWorkingColorSpace(jt.copy(this),e),Math.round(Bt(jt.r*255,0,255))*65536+Math.round(Bt(jt.g*255,0,255))*256+Math.round(Bt(jt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Mn){nt.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Wa);const i=ou(Bi.h,Wa.h,n),r=ou(Bi.s,Wa.s,n),s=ou(Bi.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new $e;$e.NAMES=qv;let cM=0;class to extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Ns,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=kf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Of&&(i.blendSrc=this.blendSrc),this.blendDst!==kf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Us extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,Xa=new ge;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cm,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}}class Kv extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zv extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nn extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uM=0;const Pn=new ot,Tu=new Ht,ss=new I,xn=new pa,xo=new pa,Dt=new I;class li extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xv(e)?Zv:Kv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(xn.min,xo.min),xn.expandByPoint(Dt),Dt.addVectors(xn.max,xo.max),xn.expandByPoint(Dt)):(xn.expandByPoint(xo.min),xn.expandByPoint(xo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Dt.add(ss)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const c=new I,u=new I,d=new I,h=new ge,p=new ge,g=new ge,x=new I,m=new I;function f(P,q,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,q),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),a[P].add(x),a[q].add(x),a[y].add(x),l[P].add(m),l[q].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,q=_.length;P<q;++P){const y=_[P],w=y.start,X=y.count;for(let O=w,j=w+X;O<j;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new I,M=new I,b=new I,R=new I;function C(P){b.fromBufferAttribute(r,P),R.copy(b);const q=a[P];v.copy(q),v.sub(b.multiplyScalar(b.dot(q))).normalize(),M.crossVectors(R,q);const w=M.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,q=_.length;P<q;++P){const y=_[P],w=y.start,X=y.count;for(let O=w,j=w+X;O<j;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new ai(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Em=new ot,xr=new nM,ja=new bd,wm=new I,Ya=new I,$a=new I,qa=new I,Au=new I,Ka=new I,Tm=new I,Za=new I;class Xe extends Ht{constructor(e=new li,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Au.fromBufferAttribute(d,e),o?Ka.addScaledVector(Au,u):Ka.addScaledVector(Au.sub(n),u))}n.add(Ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(ja.containsPoint(xr.origin)===!1&&(xr.intersectSphere(ja,wm)===null||xr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Em.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Em),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=v;M<b;M+=3){const R=a.getX(M),C=a.getX(M+1),P=a.getX(M+2);r=Ja(this,f,e,i,c,u,d,R,C,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=Ja(this,o,e,i,c,u,d,_,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=v;M<b;M+=3){const R=M,C=M+1,P=M+2;r=Ja(this,f,e,i,c,u,d,R,C,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=m,v=m+1,M=m+2;r=Ja(this,o,e,i,c,u,d,_,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function fM(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;Za.copy(a),Za.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Za);return c<n.near||c>n.far?null:{distance:c,point:Za.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ya),t.getVertexPosition(l,$a),t.getVertexPosition(c,qa);const u=fM(t,e,n,i,Ya,$a,qa,Tm);if(u){const d=new I;qn.getBarycoord(Tm,Ya,$a,qa,d),r&&(u.uv=qn.getInterpolatedAttribute(r,a,l,c,d,new ge)),s&&(u.uv1=qn.getInterpolatedAttribute(s,a,l,c,d,new ge)),o&&(u.normal=qn.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};qn.getNormal(Ya,$a,qa,h.normal),u.face=h,u.barycoord=d}return u}class no extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function g(x,m,f,_,v,M,b,R,C,P,q){const y=M/C,w=b/P,X=M/2,O=b/2,j=R/2,Z=C+1,H=P+1;let ee=0,L=0;const J=new I;for(let te=0;te<H;te++){const ie=te*w-O;for(let ce=0;ce<Z;ce++){const Ue=ce*y-X;J[x]=Ue*_,J[m]=ie*v,J[f]=j,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[f]=R>0?1:-1,u.push(J.x,J.y,J.z),d.push(ce/C),d.push(1-te/P),ee+=1}}for(let te=0;te<P;te++)for(let ie=0;ie<C;ie++){const ce=h+ie+Z*te,Ue=h+ie+Z*(te+1),W=h+(ie+1)+Z*(te+1),oe=h+(ie+1)+Z*te;l.push(ce,Ue,oe),l.push(Ue,W,oe),L+=6}a.addGroup(p,L,q),p+=L,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function hM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const dM={clone:qs,merge:Zt};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qv extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new I,Am=new ge,Cm=new ge;class En extends Qv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Am,Cm),n.subVectors(Cm,Am)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(su*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,as=1;class gM extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(os,as,e,n);r.layers=this.layers,this.add(r);const s=new En(os,as,e,n);s.layers=this.layers,this.add(s);const o=new En(os,as,e,n);o.layers=this.layers,this.add(o);const a=new En(os,as,e,n);a.layers=this.layers,this.add(a);const l=new En(os,as,e,n);l.layers=this.layers,this.add(l);const c=new En(os,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class e_ extends tn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new e_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new fr({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:rr});s.uniforms.tEquirect.value=n;const o=new Xe(r,s),a=n.minFilter;return n.minFilter===qi&&(n.minFilter=$n),new gM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cu=new I,_M=new I,xM=new je;class xi{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(_M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xM.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new bd,Qa=new I;class Pd{constructor(e=new xi,n=new xi,i=new xi,r=new xi,s=new xi,o=new xi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],_=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-f).normalize(),i[1].setComponents(l+s,h+c,m+p,M+f).normalize(),i[2].setComponents(l+o,h+u,m+g,M+_).normalize(),i[3].setComponents(l-o,h-u,m-g,M-_).normalize(),i[4].setComponents(l-a,h-d,m-x,M-v).normalize(),n===Ti)i[5].setComponents(l+a,h+d,m+x,M+v).normalize();else if(n===ic)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function yM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Yt extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*h-o;for(let v=0;v<c;v++){const M=v*d-s;g.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,M=_+c*(f+1),b=_+1+c*(f+1),R=_+1+c*f;p.push(v,M,R),p.push(M,b,R)}this.setIndex(p),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.widthSegments,e.heightSegments)}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,P1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:wM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:CM,aomap_pars_fragment:RM,batching_pars_vertex:bM,batching_vertex:PM,begin_vertex:LM,beginnormal_vertex:NM,bsdfs:IM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:BM,color_fragment:zM,color_pars_fragment:HM,color_pars_vertex:GM,color_vertex:VM,common:WM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:jM,displacementmap_pars_vertex:YM,displacementmap_vertex:$M,emissivemap_fragment:qM,emissivemap_pars_fragment:KM,colorspace_fragment:ZM,colorspace_pars_fragment:JM,envmap_fragment:QM,envmap_common_pars_fragment:e1,envmap_pars_fragment:t1,envmap_pars_vertex:n1,envmap_physical_pars_fragment:d1,envmap_vertex:i1,fog_vertex:r1,fog_pars_vertex:s1,fog_fragment:o1,fog_pars_fragment:a1,gradientmap_pars_fragment:l1,lightmap_pars_fragment:c1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:f1,lights_pars_begin:h1,lights_toon_fragment:p1,lights_toon_pars_fragment:m1,lights_phong_fragment:g1,lights_phong_pars_fragment:v1,lights_physical_fragment:_1,lights_physical_pars_fragment:x1,lights_fragment_begin:y1,lights_fragment_maps:S1,lights_fragment_end:M1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:w1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:A1,map_fragment:C1,map_pars_fragment:R1,map_particle_fragment:b1,map_particle_pars_fragment:P1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:N1,morphinstance_vertex:I1,morphcolor_vertex:D1,morphnormal_vertex:U1,morphtarget_pars_vertex:F1,morphtarget_vertex:O1,normal_fragment_begin:k1,normal_fragment_maps:B1,normal_pars_fragment:z1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:j1,iridescence_pars_fragment:Y1,opaque_fragment:$1,packing:q1,premultiplied_alpha_fragment:K1,project_vertex:Z1,dithering_fragment:J1,dithering_pars_fragment:Q1,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:aE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:xE,background_vert:yE,background_frag:SE,backgroundCube_vert:ME,backgroundCube_frag:EE,cube_vert:wE,cube_frag:TE,depth_vert:AE,depth_frag:CE,distanceRGBA_vert:RE,distanceRGBA_frag:bE,equirect_vert:PE,equirect_frag:LE,linedashed_vert:NE,linedashed_frag:IE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:FE,meshlambert_frag:OE,meshmatcap_vert:kE,meshmatcap_frag:BE,meshnormal_vert:zE,meshnormal_frag:HE,meshphong_vert:GE,meshphong_frag:VE,meshphysical_vert:WE,meshphysical_frag:XE,meshtoon_vert:jE,meshtoon_frag:YE,points_vert:$E,points_frag:qE,shadow_vert:KE,shadow_frag:ZE,sprite_vert:JE,sprite_frag:QE},ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ii={basic:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Zt([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Zt([ve.lights,ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ii.physical={uniforms:Zt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const el={r:0,b:0,g:0},Sr=new ei,ew=new ot;function tw(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const M=g(_);M===null?f(a,l):M&&M.isColor&&(f(M,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===wc)?(u===void 0&&(u=new Xe(new no(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:qs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ew.makeRotationFromEuler(Sr)),u.material.toneMapped=nt.getTransfer(M.colorSpace)!==ht,(d!==M||h!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Xe(new Yt(2,2),new fr({name:"BackgroundMaterial",uniforms:qs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(el,Jv(t)),i.buffers.color.setClear(el.r,el.g,el.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function nw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,w,X,O,j){let Z=!1;const H=d(O,X,w);s!==H&&(s=H,c(s.object)),Z=p(y,O,X,j),Z&&g(y,O,X,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(y,w,X,O),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,w,X){const O=X.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Z=j[w.id];Z===void 0&&(Z={},j[w.id]=Z);let H=Z[O];return H===void 0&&(H=h(l()),Z[O]=H),H}function h(y){const w=[],X=[],O=[];for(let j=0;j<n;j++)w[j]=0,X[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:X,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,w,X,O){const j=s.attributes,Z=w.attributes;let H=0;const ee=X.getAttributes();for(const L in ee)if(ee[L].location>=0){const te=j[L];let ie=Z[L];if(ie===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(y,w,X,O){const j={},Z=w.attributes;let H=0;const ee=X.getAttributes();for(const L in ee)if(ee[L].location>=0){let te=Z[L];te===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),j[L]=ie,H++}s.attributes=j,s.attributesNum=H,s.index=O}function x(){const y=s.newAttributes;for(let w=0,X=y.length;w<X;w++)y[w]=0}function m(y){f(y,0)}function f(y,w){const X=s.newAttributes,O=s.enabledAttributes,j=s.attributeDivisors;X[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),j[y]!==w&&(t.vertexAttribDivisor(y,w),j[y]=w)}function _(){const y=s.newAttributes,w=s.enabledAttributes;for(let X=0,O=w.length;X<O;X++)w[X]!==y[X]&&(t.disableVertexAttribArray(X),w[X]=0)}function v(y,w,X,O,j,Z,H){H===!0?t.vertexAttribIPointer(y,w,X,j,Z):t.vertexAttribPointer(y,w,X,O,j,Z)}function M(y,w,X,O){x();const j=O.attributes,Z=X.getAttributes(),H=w.defaultAttributeValues;for(const ee in Z){const L=Z[ee];if(L.location>=0){let J=j[ee];if(J===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const te=J.normalized,ie=J.itemSize,ce=e.get(J);if(ce===void 0)continue;const Ue=ce.buffer,W=ce.type,oe=ce.bytesPerElement,he=W===t.INT||W===t.UNSIGNED_INT||J.gpuType===Md;if(J.isInterleavedBufferAttribute){const ue=J.data,Ne=ue.stride,Re=J.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<L.locationSize;Fe++)f(L.location+Fe,ue.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<L.locationSize;Fe++)m(L.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Fe=0;Fe<L.locationSize;Fe++)v(L.location+Fe,ie/L.locationSize,W,te,Ne*oe,(Re+ie/L.locationSize*Fe)*oe,he)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)f(L.location+ue,J.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<L.locationSize;ue++)m(L.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let ue=0;ue<L.locationSize;ue++)v(L.location+ue,ie/L.locationSize,W,te,ie*oe,ie/L.locationSize*ue*oe,he)}}else if(H!==void 0){const te=H[ee];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(L.location,te);break;case 3:t.vertexAttrib3fv(L.location,te);break;case 4:t.vertexAttrib4fv(L.location,te);break;default:t.vertexAttrib1fv(L.location,te)}}}}_()}function b(){P();for(const y in i){const w=i[y];for(const X in w){const O=w[X];for(const j in O)u(O[j].object),delete O[j];delete w[X]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const X in w){const O=w[X];for(const j in O)u(O[j].object),delete O[j];delete w[X]}delete i[y.id]}function C(y){for(const w in i){const X=i[w];if(X[y.id]===void 0)continue;const O=X[y.id];for(const j in O)u(O[j].object),delete O[j];delete X[y.id]}}function P(){q(),o=!0,s!==r&&(s=r,c(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:q,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function iw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<h.length;x++)n.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wi&&!P)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:b,maxSamples:R}}function sw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let M=f.clippingState||null;l.value=M,M=u(g,h,v,p);for(let b=0;b!==v;++b)M[b]=n[b];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,M=p;v!==x;++v,M+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ow(t){let e=new WeakMap;function n(o,a){return a===jf?o.mapping=Xs:a===Yf&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jf||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class n_ extends Qv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Rm=[.125,.215,.35,.446,.526,.582],br=20,Ru=new n_,bm=new $e;let bu=null,Pu=0,Lu=0,Nu=!1;const Tr=(1+Math.sqrt(5))/2,ls=1/Tr,Pm=[new I(-Tr,ls,0),new I(Tr,ls,0),new I(-ls,0,Tr),new I(ls,0,Tr),new I(0,Tr,-ls),new I(0,Tr,ls),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Pu,Lu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:da,format:Kn,colorSpace:mr,depthBuffer:!1},r=Lm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aw(s)),this._blurMaterial=lw(s,e,n)}return r}_compileMaterial(e){const n=new Xe(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(bm),u.toneMapping=sr,u.autoClear=!1;const p=new Us({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Xe(new no,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(bm),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;tl(r,_*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pm[(r-s-1)%Pm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xe(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const f=[];let _=0;for(let C=0;C<br;++C){const P=C/x,q=Math.exp(-P*P/2);f.push(q),C===0?_+=q:C<m&&(_+=2*q)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const M=this._sizeLods[r],b=3*M*(r>v-ws?r-v+ws:0),R=4*(this._cubeSize-M);tl(n,b,R,3*M,2*M),l.setRenderTarget(n),l.render(d,Ru)}}function aw(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=Rm[o-t+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,P=R>2?0:-1,q=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(q,x*g*R),v.set(h,m*g*R);const y=[R,R,R,R,R,R];M.set(y,f*g*R)}const b=new li;b.setAttribute("position",new ai(_,x)),b.setAttribute("uv",new ai(v,m)),b.setAttribute("faceIndex",new ai(M,f)),e.push(b),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lm(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lw(t,e,n){const i=new Float32Array(br),r=new I(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Nm(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Im(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===jf||l===Yf,u=l===Xs||l===js;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Mh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Mh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function uw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Al("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,M=_.length;v<M;v+=3){const b=_[v+0],R=_[v+1],C=_[v+2];h.push(b,R,R,C,C,b)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const b=v+0,R=v+1,C=v+2;h.push(b,R,R,C,C,b)}}else return;const m=new(Xv(h)?Zv:Kv)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pw(t,e,n){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let b=a.attributes.position.count*M,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*R*4*d),P=new Yv(C,b,R,d);P.type=wi,P.needsUpdate=!0;const q=M*4;for(let w=0;w<d;w++){const X=f[w],O=_[w],j=v[w],Z=b*R*4*w;for(let H=0;H<X.count;H++){const ee=H*q;g===!0&&(r.fromBufferAttribute(X,H),C[Z+ee+0]=r.x,C[Z+ee+1]=r.y,C[Z+ee+2]=r.z,C[Z+ee+3]=0),x===!0&&(r.fromBufferAttribute(O,H),C[Z+ee+4]=r.x,C[Z+ee+5]=r.y,C[Z+ee+6]=r.z,C[Z+ee+7]=0),m===!0&&(r.fromBufferAttribute(j,H),C[Z+ee+8]=r.x,C[Z+ee+9]=r.y,C[Z+ee+10]=r.z,C[Z+ee+11]=j.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new ge(b,R)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function mw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class i_ extends tn{constructor(e,n,i,r,s,o,a,l,c,u=Is){if(u!==Is&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Is&&(i=Hr),i===void 0&&u===$s&&(i=Ys),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const r_=new tn,Dm=new i_(1,1),s_=new Yv,o_=new eM,a_=new e_,Um=[],Fm=[],Om=new Float32Array(16),km=new Float32Array(9),Bm=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Um[r];if(s===void 0&&(s=new Float32Array(r),Um[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),It(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;km.set(i),t.uniformMatrix3fv(this.addr,!1,km),It(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Om.set(i),t.uniformMatrix4fv(this.addr,!1,Om),It(n,i)}}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function Cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Dm.compareFunction=Wv,s=Dm):s=r_,n.setTexture2D(e||s,r)}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||o_,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||a_,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||s_,r)}function Uw(t){switch(t){case 5126:return gw;case 35664:return vw;case 35665:return _w;case 35666:return xw;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return ww;case 35668:case 35672:return Tw;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return bw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Fw(t,e){t.uniform1fv(this.addr,e)}function Ow(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function kw(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function Bw(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function zw(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Hw(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gw(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Vw(t,e){t.uniform1iv(this.addr,e)}function Ww(t,e){t.uniform2iv(this.addr,e)}function Xw(t,e){t.uniform3iv(this.addr,e)}function jw(t,e){t.uniform4iv(this.addr,e)}function Yw(t,e){t.uniform1uiv(this.addr,e)}function $w(t,e){t.uniform2uiv(this.addr,e)}function qw(t,e){t.uniform3uiv(this.addr,e)}function Kw(t,e){t.uniform4uiv(this.addr,e)}function Zw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||r_,s[o])}function Jw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||o_,s[o])}function Qw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a_,s[o])}function eT(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||s_,s[o])}function tT(t){switch(t){case 5126:return Fw;case 35664:return Ow;case 35665:return kw;case 35666:return Bw;case 35674:return zw;case 35675:return Hw;case 35676:return Gw;case 5124:case 35670:return Vw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return jw;case 5125:return Yw;case 36294:return $w;case 36295:return qw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eT}}class nT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Uw(n.type)}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tT(n.type)}}class rT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function zm(t,e){t.seq.push(e),t.map[e.id]=e}function sT(t,e,n){const i=t.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),o=Iu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zm(n,c===void 0?new nT(a,t,e):new iT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new rT(a),zm(n,d)),n=d}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);sT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let aT=0;function lT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function cT(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===nc&&n===tc?i="LinearDisplayP3ToLinearSRGB":e===tc&&n===nc&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case Tc:return[i,"LinearTransferOETF"];case Mn:case Rd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lT(t.getShaderSource(e),o)}else return r}function uT(t,e){const n=cT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fT(t,e){let n;switch(e){case CS:n="Linear";break;case RS:n="Reinhard";break;case bS:n="Cineon";break;case PS:n="ACESFilmic";break;case NS:n="AgX";break;case Lv:n="Neutral";break;case LS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nl=new I;function hT(){nt.getLuminanceCoefficients(nl);const t=nl.x.toFixed(4),e=nl.y.toFixed(4),n=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function pT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function To(t){return t!==""}function Vm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(t){return t.replace(gT,_T)}const vT=new Map;function _T(t,e){let n=We[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(n)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(xT,yT)}function yT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ST(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ET(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function wT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Pv:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case AS:e="ENVMAP_BLENDING_ADD";break}return e}function TT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ST(n),c=MT(n),u=ET(n),d=wT(n),h=TT(n),p=dT(n),g=pT(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(To).join(`
`),f.length>0&&(f+=`
`)):(m=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),f=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?We.tonemapping_pars_fragment:"",n.toneMapping!==sr?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,uT("linearToOutputTexel",n.outputColorSpace),hT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(To).join(`
`)),o=Eh(o),o=Vm(o,n),o=Wm(o,n),a=Eh(a),a=Vm(a,n),a=Wm(a,n),o=Xm(o),a=Xm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+m+o,M=_+f+a,b=Hm(r,r.VERTEX_SHADER,v),R=Hm(r,r.FRAGMENT_SHADER,M);r.attachShader(x,b),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(w){if(t.debug.checkShaderErrors){const X=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,R);else{const ee=Gm(r,b,"vertex"),L=Gm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+ee+`
`+L)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(O===""||j==="")&&(H=!1);H&&(w.diagnostics={runnable:Z,programLog:X,vertexShader:{log:O,prefix:m},fragmentShader:{log:j,prefix:f}})}r.deleteShader(b),r.deleteShader(R),P=new Cl(r,x),q=mT(r,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let q;this.getAttributes=function(){return q===void 0&&C(this),q};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,oT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=R,this}let CT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bT(e),n.set(e,i)),i}}class bT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function PT(t,e,n,i,r,s,o){const a=new $v,l=new RT,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,w,X,O,j){const Z=O.fog,H=j.geometry,ee=y.isMeshStandardMaterial?O.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||ee),J=L&&L.mapping===wc?L.image.height:null,te=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=ie!==void 0?ie.length:0;let Ue=0;H.morphAttributes.position!==void 0&&(Ue=1),H.morphAttributes.normal!==void 0&&(Ue=2),H.morphAttributes.color!==void 0&&(Ue=3);let W,oe,he,ue;if(te){const an=ii[te];W=an.vertexShader,oe=an.fragmentShader}else W=y.vertexShader,oe=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Ne=t.getRenderTarget(),Re=j.isInstancedMesh===!0,Fe=j.isBatchedMesh===!0,ke=!!y.map,Q=!!y.matcap,E=!!L,B=!!y.aoMap,ne=!!y.lightMap,se=!!y.bumpMap,pe=!!y.normalMap,Le=!!y.displacementMap,re=!!y.emissiveMap,T=!!y.metalnessMap,S=!!y.roughnessMap,N=y.anisotropy>0,z=y.clearcoat>0,K=y.dispersion>0,Y=y.iridescence>0,ye=y.sheen>0,me=y.transmission>0,_e=N&&!!y.anisotropyMap,Ve=z&&!!y.clearcoatMap,fe=z&&!!y.clearcoatNormalMap,Te=z&&!!y.clearcoatRoughnessMap,ze=Y&&!!y.iridescenceMap,He=Y&&!!y.iridescenceThicknessMap,Ce=ye&&!!y.sheenColorMap,Ke=ye&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,at=!!y.specularColorMap,D=!!y.specularIntensityMap,Ee=me&&!!y.transmissionMap,$=me&&!!y.thicknessMap,ae=!!y.gradientMap,Se=!!y.alphaMap,we=y.alphaTest>0,Ze=!!y.alphaHash,Tt=!!y.extensions;let on=sr;y.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(on=t.toneMapping);const Qe={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:oe,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&j._colorsTexture!==null,instancing:Re,instancingColor:Re&&j.instanceColor!==null,instancingMorph:Re&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:mr,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:Q,envMap:E,envMapMode:E&&L.mapping,envMapCubeUVHeight:J,aoMap:B,lightMap:ne,bumpMap:se,normalMap:pe,displacementMap:p&&Le,emissiveMap:re,normalMapObjectSpace:pe&&y.normalMapType===FS,normalMapTangentSpace:pe&&y.normalMapType===Vv,metalnessMap:T,roughnessMap:S,anisotropy:N,anisotropyMap:_e,clearcoat:z,clearcoatMap:Ve,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:K,iridescence:Y,iridescenceMap:ze,iridescenceThicknessMap:He,sheen:ye,sheenColorMap:Ce,sheenRoughnessMap:Ke,specularMap:Ge,specularColorMap:at,specularIntensityMap:D,transmission:me,transmissionMap:Ee,thicknessMap:$,gradientMap:ae,opaque:y.transparent===!1&&y.blending===Ns&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:we,alphaHash:Ze,combine:y.combine,mapUv:ke&&m(y.map.channel),aoMapUv:B&&m(y.aoMap.channel),lightMapUv:ne&&m(y.lightMap.channel),bumpMapUv:se&&m(y.bumpMap.channel),normalMapUv:pe&&m(y.normalMap.channel),displacementMapUv:Le&&m(y.displacementMap.channel),emissiveMapUv:re&&m(y.emissiveMap.channel),metalnessMapUv:T&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:_e&&m(y.anisotropyMap.channel),clearcoatMapUv:Ve&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&m(y.sheenRoughnessMap.channel),specularMapUv:Ge&&m(y.specularMap.channel),specularColorMapUv:at&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:Ee&&m(y.transmissionMap.channel),thicknessMapUv:$&&m(y.thicknessMap.channel),alphaMapUv:Se&&m(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(ke||Se),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:on,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yn,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Tt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&y.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const X in y.defines)w.push(X),w.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(v(w,y),M(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function b(y){const w=x[y.type];let X;if(w){const O=ii[w];X=dM.clone(O.uniforms)}else X=y.uniforms;return X}function R(y,w){let X;for(let O=0,j=u.length;O<j;O++){const Z=u[O];if(Z.cacheKey===w){X=Z,++X.usedTimes;break}}return X===void 0&&(X=new AT(t,w,y,s),u.push(X)),X}function C(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function q(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:b,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:q}}function LT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function NT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $m(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||NT),i.length>1&&i.sort(h||Ym),r.length>1&&r.sort(h||Ym)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function IT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new $m,t.set(i,[o])):r>=s.length?(o=new $m,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new $e};break;case"SpotLight":n={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let FT=0;function OT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kT(t){const e=new DT,n=UT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ot,o=new ot;function a(c){let u=0,d=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,v=0,M=0,b=0,R=0,C=0;c.sort(OT);for(let q=0,y=c.length;q<y;q++){const w=c[q],X=w.color,O=w.intensity,j=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=X.r*O,d+=X.g*O,h+=X.b*O;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],O);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ee=w.shadow,L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=w.shadow.matrix,_++}i.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(X).multiplyScalar(O),H.distance=j,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[x]=H;const ee=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,ee.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[x]=ee.matrix,w.castShadow){const L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=Z,M++}x++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(X).multiplyScalar(O),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const ee=w.shadow,L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(O),H.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==b||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=b,P.numLightProbes=C,i.version=FT++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function qm(t){const e=new kT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qm(t),e.set(r,[a])):s>=o.length?(a=new qm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class zT extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HT extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WT(t,e,n){let i=new Pd;const r=new ge,s=new ge,o=new st,a=new zT({depthPacking:US}),l=new HT,c={},u=n.maxTextureSize,d={[ur]:en,[en]:ur,[Yn]:Yn},h=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:GT,fragmentShader:VT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let f=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const q=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),X=t.state;X.setBlending(rr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const O=f!==gi&&this.type===gi,j=f===gi&&this.type!==gi;for(let Z=0,H=R.length;Z<H;Z++){const ee=R[Z],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const J=L.getFrameExtents();if(r.multiply(J),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,L.mapSize.y=s.y)),L.map===null||O===!0||j===!0){const ie=this.type!==gi?{minFilter:Un,magFilter:Un}:{};L.map!==null&&L.map.dispose(),L.map=new Gr(r.x,r.y,ie),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const te=L.getViewportCount();for(let ie=0;ie<te;ie++){const ce=L.getViewport(ie);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),X.viewport(o),L.updateMatrices(ee,ie),i=L.getFrustum(),M(C,P,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===gi&&_(L,P),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(q,y,w)};function _(R,C){const P=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,P,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,P,p,x,null)}function v(R,C,P,q){let y=null;const w=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=y.uuid,O=C.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let Z=j[O];Z===void 0&&(Z=y.clone(),j[O]=Z,C.addEventListener("dispose",b)),y=Z}if(y.visible=C.visible,y.wireframe=C.wireframe,q===gi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=t.properties.get(y);X.light=P}return y}function M(R,C,P,q,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===gi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=e.update(R),j=R.material;if(Array.isArray(j)){const Z=O.groups;for(let H=0,ee=Z.length;H<ee;H++){const L=Z[H],J=j[L.materialIndex];if(J&&J.visible){const te=v(R,J,q,y);R.onBeforeShadow(t,R,C,P,O,te,L),t.renderBufferDirect(P,null,O,te,R,L),R.onAfterShadow(t,R,C,P,O,te,L)}}}else if(j.visible){const Z=v(R,j,q,y);R.onBeforeShadow(t,R,C,P,O,Z,null),t.renderBufferDirect(P,null,O,Z,R,null),R.onAfterShadow(t,R,C,P,O,Z,null)}}const X=R.children;for(let O=0,j=X.length;O<j;O++)M(X[O],C,P,q,y)}function b(R){R.target.removeEventListener("dispose",b);for(const P in c){const q=c[P],y=R.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}const XT={[Bf]:zf,[Hf]:Wf,[Gf]:Xf,[Ws]:Vf,[zf]:Bf,[Wf]:Hf,[Xf]:Gf,[Vf]:Ws};function jT(t){function e(){let D=!1;const Ee=new st;let $=null;const ae=new st(0,0,0,0);return{setMask:function(Se){$!==Se&&!D&&(t.colorMask(Se,Se,Se,Se),$=Se)},setLocked:function(Se){D=Se},setClear:function(Se,we,Ze,Tt,on){on===!0&&(Se*=Tt,we*=Tt,Ze*=Tt),Ee.set(Se,we,Ze,Tt),ae.equals(Ee)===!1&&(t.clearColor(Se,we,Ze,Tt),ae.copy(Ee))},reset:function(){D=!1,$=null,ae.set(-1,0,0,0)}}}function n(){let D=!1,Ee=!1,$=null,ae=null,Se=null;return{setReversed:function(we){Ee=we},setTest:function(we){we?he(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(we){$!==we&&!D&&(t.depthMask(we),$=we)},setFunc:function(we){if(Ee&&(we=XT[we]),ae!==we){switch(we){case Bf:t.depthFunc(t.NEVER);break;case zf:t.depthFunc(t.ALWAYS);break;case Hf:t.depthFunc(t.LESS);break;case Ws:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Vf:t.depthFunc(t.GEQUAL);break;case Wf:t.depthFunc(t.GREATER);break;case Xf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=we}},setLocked:function(we){D=we},setClear:function(we){Se!==we&&(t.clearDepth(we),Se=we)},reset:function(){D=!1,$=null,ae=null,Se=null}}}function i(){let D=!1,Ee=null,$=null,ae=null,Se=null,we=null,Ze=null,Tt=null,on=null;return{setTest:function(Qe){D||(Qe?he(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Qe){Ee!==Qe&&!D&&(t.stencilMask(Qe),Ee=Qe)},setFunc:function(Qe,an,ui){($!==Qe||ae!==an||Se!==ui)&&(t.stencilFunc(Qe,an,ui),$=Qe,ae=an,Se=ui)},setOp:function(Qe,an,ui){(we!==Qe||Ze!==an||Tt!==ui)&&(t.stencilOp(Qe,an,ui),we=Qe,Ze=an,Tt=ui)},setLocked:function(Qe){D=Qe},setClear:function(Qe){on!==Qe&&(t.clearStencil(Qe),on=Qe)},reset:function(){D=!1,Ee=null,$=null,ae=null,Se=null,we=null,Ze=null,Tt=null,on=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,g=!1,x=null,m=null,f=null,_=null,v=null,M=null,b=null,R=new $e(0,0,0),C=0,P=!1,q=null,y=null,w=null,X=null,O=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=H>=2);let L=null,J={};const te=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ce=new st().fromArray(te),Ue=new st().fromArray(ie);function W(D,Ee,$,ae){const Se=new Uint8Array(4),we=t.createTexture();t.bindTexture(D,we),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<$;Ze++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(Ee+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return we}const oe={};oe[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Ws),ne(!1),se(rm),he(t.CULL_FACE),E(rr);function he(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ue(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ne(D,Ee){return u[D]!==Ee?(t.bindFramebuffer(D,Ee),u[D]=Ee,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Ee),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Re(D,Ee){let $=h,ae=!1;if(D){$=d.get(Ee),$===void 0&&($=[],d.set(Ee,$));const Se=D.textures;if($.length!==Se.length||$[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ze=Se.length;we<Ze;we++)$[we]=t.COLOR_ATTACHMENT0+we;$.length=Se.length,ae=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ae=!0);ae&&t.drawBuffers($)}function Fe(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const ke={[Rr]:t.FUNC_ADD,[lS]:t.FUNC_SUBTRACT,[cS]:t.FUNC_REVERSE_SUBTRACT};ke[uS]=t.MIN,ke[fS]=t.MAX;const Q={[hS]:t.ZERO,[dS]:t.ONE,[pS]:t.SRC_COLOR,[Of]:t.SRC_ALPHA,[yS]:t.SRC_ALPHA_SATURATE,[_S]:t.DST_COLOR,[gS]:t.DST_ALPHA,[mS]:t.ONE_MINUS_SRC_COLOR,[kf]:t.ONE_MINUS_SRC_ALPHA,[xS]:t.ONE_MINUS_DST_COLOR,[vS]:t.ONE_MINUS_DST_ALPHA,[SS]:t.CONSTANT_COLOR,[MS]:t.ONE_MINUS_CONSTANT_COLOR,[ES]:t.CONSTANT_ALPHA,[wS]:t.ONE_MINUS_CONSTANT_ALPHA};function E(D,Ee,$,ae,Se,we,Ze,Tt,on,Qe){if(D===rr){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(he(t.BLEND),g=!0),D!==aS){if(D!==x||Qe!==P){if((m!==Rr||v!==Rr)&&(t.blendEquation(t.FUNC_ADD),m=Rr,v=Rr),Qe)switch(D){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.ONE,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,_=null,M=null,b=null,R.set(0,0,0),C=0,x=D,P=Qe}return}Se=Se||Ee,we=we||$,Ze=Ze||ae,(Ee!==m||Se!==v)&&(t.blendEquationSeparate(ke[Ee],ke[Se]),m=Ee,v=Se),($!==f||ae!==_||we!==M||Ze!==b)&&(t.blendFuncSeparate(Q[$],Q[ae],Q[we],Q[Ze]),f=$,_=ae,M=we,b=Ze),(Tt.equals(R)===!1||on!==C)&&(t.blendColor(Tt.r,Tt.g,Tt.b,on),R.copy(Tt),C=on),x=D,P=!1}function B(D,Ee){D.side===Yn?ue(t.CULL_FACE):he(t.CULL_FACE);let $=D.side===en;Ee&&($=!$),ne($),D.blending===Ns&&D.transparent===!1?E(rr):E(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ae=D.stencilWrite;o.setTest(ae),ae&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){q!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),q=D)}function se(D){D!==sS?(he(t.CULL_FACE),D!==y&&(D===rm?t.cullFace(t.BACK):D===oS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),y=D}function pe(D){D!==w&&(Z&&t.lineWidth(D),w=D)}function Le(D,Ee,$){D?(he(t.POLYGON_OFFSET_FILL),(X!==Ee||O!==$)&&(t.polygonOffset(Ee,$),X=Ee,O=$)):ue(t.POLYGON_OFFSET_FILL)}function re(D){D?he(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function T(D){D===void 0&&(D=t.TEXTURE0+j-1),L!==D&&(t.activeTexture(D),L=D)}function S(D,Ee,$){$===void 0&&(L===null?$=t.TEXTURE0+j-1:$=L);let ae=J[$];ae===void 0&&(ae={type:void 0,texture:void 0},J[$]=ae),(ae.type!==D||ae.texture!==Ee)&&(L!==$&&(t.activeTexture($),L=$),t.bindTexture(D,Ee||oe[D]),ae.type=D,ae.texture=Ee)}function N(){const D=J[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(D){ce.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function Ce(D){Ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ue.copy(D))}function Ke(D,Ee){let $=l.get(Ee);$===void 0&&($=new WeakMap,l.set(Ee,$));let ae=$.get(D);ae===void 0&&(ae=t.getUniformBlockIndex(Ee,D.name),$.set(D,ae))}function Ge(D,Ee){const ae=l.get(Ee).get(D);a.get(Ee)!==ae&&(t.uniformBlockBinding(Ee,ae,D.__bindingPointIndex),a.set(Ee,ae))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,J={},u={},d=new WeakMap,h=[],p=null,g=!1,x=null,m=null,f=null,_=null,v=null,M=null,b=null,R=new $e(0,0,0),C=0,P=!1,q=null,y=null,w=null,X=null,O=null,ce.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:ue,bindFramebuffer:Ne,drawBuffers:Re,useProgram:Fe,setBlending:E,setMaterial:B,setFlipSided:ne,setCullFace:se,setLineWidth:pe,setPolygonOffset:Le,setScissorTest:re,activeTexture:T,bindTexture:S,unbindTexture:N,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:Te,texImage3D:ze,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:Ve,texStorage3D:fe,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:He,viewport:Ce,reset:at}}function Km(t,e,n,i){const r=YT(i);switch(n){case Fv:return t*e;case kv:return t*e;case Bv:return t*e*2;case zv:return t*e/r.components*r.byteLength;case Td:return t*e/r.components*r.byteLength;case Hv:return t*e*2/r.components*r.byteLength;case Ad:return t*e*2/r.components*r.byteLength;case Ov:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case Cd:return t*e*4/r.components*r.byteLength;case Sl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case El:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Jf:return Math.max(t,16)*Math.max(e,8)/4;case qf:case Zf:return Math.max(t,8)*Math.max(e,8)/2;case Qf:case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tl:case gh:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gv:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xh:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YT(t){switch(t){case Li:case Iv:return{byteLength:1,components:1};case na:case Dv:case da:return{byteLength:2,components:1};case Ed:case wd:return{byteLength:2,components:4};case Hr:case Md:case wi:return{byteLength:4,components:1};case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function $T(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return p?new OffscreenCanvas(T,S):rc("canvas")}function x(T,S,N){let z=1;const K=re(T);if((K.width>N||K.height>N)&&(z=N/Math.max(K.width,K.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(z*K.width),ye=Math.floor(z*K.height);d===void 0&&(d=g(Y,ye));const me=S?g(Y,ye):d;return me.width=Y,me.height=ye,me.getContext("2d").drawImage(T,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+ye+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Un&&T.minFilter!==$n}function f(T){t.generateMipmap(T)}function _(T,S,N,z,K=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=S;if(S===t.RED&&(N===t.FLOAT&&(Y=t.R32F),N===t.HALF_FLOAT&&(Y=t.R16F),N===t.UNSIGNED_BYTE&&(Y=t.R8)),S===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.R8UI),N===t.UNSIGNED_SHORT&&(Y=t.R16UI),N===t.UNSIGNED_INT&&(Y=t.R32UI),N===t.BYTE&&(Y=t.R8I),N===t.SHORT&&(Y=t.R16I),N===t.INT&&(Y=t.R32I)),S===t.RG&&(N===t.FLOAT&&(Y=t.RG32F),N===t.HALF_FLOAT&&(Y=t.RG16F),N===t.UNSIGNED_BYTE&&(Y=t.RG8)),S===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RG8UI),N===t.UNSIGNED_SHORT&&(Y=t.RG16UI),N===t.UNSIGNED_INT&&(Y=t.RG32UI),N===t.BYTE&&(Y=t.RG8I),N===t.SHORT&&(Y=t.RG16I),N===t.INT&&(Y=t.RG32I)),S===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),N===t.UNSIGNED_INT&&(Y=t.RGB32UI),N===t.BYTE&&(Y=t.RGB8I),N===t.SHORT&&(Y=t.RGB16I),N===t.INT&&(Y=t.RGB32I)),S===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),N===t.UNSIGNED_INT&&(Y=t.RGBA32UI),N===t.BYTE&&(Y=t.RGBA8I),N===t.SHORT&&(Y=t.RGBA16I),N===t.INT&&(Y=t.RGBA32I)),S===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),S===t.RGBA){const ye=K?ec:nt.getTransfer(z);N===t.FLOAT&&(Y=t.RGBA32F),N===t.HALF_FLOAT&&(Y=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Y=ye===ht?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,S){let N;return T?S===null||S===Hr||S===Ys?N=t.DEPTH24_STENCIL8:S===wi?N=t.DEPTH32F_STENCIL8:S===na&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hr||S===Ys?N=t.DEPTH_COMPONENT24:S===wi?N=t.DEPTH_COMPONENT32F:S===na&&(N=t.DEPTH_COMPONENT16),N}function M(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Un&&T.minFilter!==$n?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function b(T){const S=T.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&u.delete(S)}function R(T){const S=T.target;S.removeEventListener("dispose",R),q(S)}function C(T){const S=i.get(T);if(S.__webglInit===void 0)return;const N=T.source,z=h.get(N);if(z){const K=z[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(T),Object.keys(z).length===0&&h.delete(N)}i.remove(T)}function P(T){const S=i.get(T);t.deleteTexture(S.__webglTexture);const N=T.source,z=h.get(N);delete z[S.__cacheKey],o.memory.textures--}function q(T){const S=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(S.__webglFramebuffer[z]))for(let K=0;K<S.__webglFramebuffer[z].length;K++)t.deleteFramebuffer(S.__webglFramebuffer[z][K]);else t.deleteFramebuffer(S.__webglFramebuffer[z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[z])}else{if(Array.isArray(S.__webglFramebuffer))for(let z=0;z<S.__webglFramebuffer.length;z++)t.deleteFramebuffer(S.__webglFramebuffer[z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let z=0;z<S.__webglColorRenderbuffer.length;z++)S.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=T.textures;for(let z=0,K=N.length;z<K;z++){const Y=i.get(N[z]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(N[z])}i.remove(T)}let y=0;function w(){y=0}function X(){const T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){const N=i.get(T);if(T.isVideoTexture&&pe(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(N,T,S);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+S)}function Z(T,S){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Ue(N,T,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+S)}function H(T,S){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Ue(N,T,S);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+S)}function ee(T,S){const N=i.get(T);if(T.version>0&&N.__version!==T.version){W(N,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+S)}const L={[Ql]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[$f]:t.MIRRORED_REPEAT},J={[Un]:t.NEAREST,[IS]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[ru]:t.LINEAR_MIPMAP_NEAREST,[qi]:t.LINEAR_MIPMAP_LINEAR},te={[OS]:t.NEVER,[VS]:t.ALWAYS,[kS]:t.LESS,[Wv]:t.LEQUAL,[BS]:t.EQUAL,[GS]:t.GEQUAL,[zS]:t.GREATER,[HS]:t.NOTEQUAL};function ie(T,S){if(S.type===wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===$n||S.magFilter===ru||S.magFilter===Fa||S.magFilter===qi||S.minFilter===$n||S.minFilter===ru||S.minFilter===Fa||S.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,L[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,L[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,L[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,J[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==Fa&&S.minFilter!==qi||S.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ce(T,S){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",b));const z=S.source;let K=h.get(z);K===void 0&&(K={},h.set(z,K));const Y=O(S);if(Y!==T.__cacheKey){K[Y]===void 0&&(K[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[Y].usedTimes++;const ye=K[T.__cacheKey];ye!==void 0&&(K[T.__cacheKey].usedTimes--,ye.usedTimes===0&&P(S)),T.__cacheKey=Y,T.__webglTexture=K[Y].texture}return N}function Ue(T,S,N){let z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(z=t.TEXTURE_3D);const K=ce(T,S),Y=S.source;n.bindTexture(z,T.__webglTexture,t.TEXTURE0+N);const ye=i.get(Y);if(Y.version!==ye.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const me=nt.getPrimaries(nt.workingColorSpace),_e=S.colorSpace===Si?null:nt.getPrimaries(S.colorSpace),Ve=S.colorSpace===Si||me===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=x(S.image,!1,r.maxTextureSize);fe=Le(S,fe);const Te=s.convert(S.format,S.colorSpace),ze=s.convert(S.type);let He=_(S.internalFormat,Te,ze,S.colorSpace,S.isVideoTexture);ie(z,S);let Ce;const Ke=S.mipmaps,Ge=S.isVideoTexture!==!0,at=ye.__version===void 0||K===!0,D=Y.dataReady,Ee=M(S,fe);if(S.isDepthTexture)He=v(S.format===$s,S.type),at&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,He,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,He,fe.width,fe.height,0,Te,ze,null));else if(S.isDataTexture)if(Ke.length>0){Ge&&at&&n.texStorage2D(t.TEXTURE_2D,Ee,He,Ke[0].width,Ke[0].height);for(let $=0,ae=Ke.length;$<ae;$++)Ce=Ke[$],Ge?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Te,ze,Ce.data):n.texImage2D(t.TEXTURE_2D,$,He,Ce.width,Ce.height,0,Te,ze,Ce.data);S.generateMipmaps=!1}else Ge?(at&&n.texStorage2D(t.TEXTURE_2D,Ee,He,fe.width,fe.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,ze,fe.data)):n.texImage2D(t.TEXTURE_2D,0,He,fe.width,fe.height,0,Te,ze,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,He,Ke[0].width,Ke[0].height,fe.depth);for(let $=0,ae=Ke.length;$<ae;$++)if(Ce=Ke[$],S.format!==Kn)if(Te!==null)if(Ge){if(D)if(S.layerUpdates.size>0){const Se=Km(Ce.width,Ce.height,S.format,S.type);for(const we of S.layerUpdates){const Ze=Ce.data.subarray(we*Se/Ce.data.BYTES_PER_ELEMENT,(we+1)*Se/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,we,Ce.width,Ce.height,1,Te,Ze,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,fe.depth,Te,Ce.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,He,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,fe.depth,Te,ze,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,He,Ce.width,Ce.height,fe.depth,0,Te,ze,Ce.data)}else{Ge&&at&&n.texStorage2D(t.TEXTURE_2D,Ee,He,Ke[0].width,Ke[0].height);for(let $=0,ae=Ke.length;$<ae;$++)Ce=Ke[$],S.format!==Kn?Te!==null?Ge?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Te,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,$,He,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Te,ze,Ce.data):n.texImage2D(t.TEXTURE_2D,$,He,Ce.width,Ce.height,0,Te,ze,Ce.data)}else if(S.isDataArrayTexture)if(Ge){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,He,fe.width,fe.height,fe.depth),D)if(S.layerUpdates.size>0){const $=Km(fe.width,fe.height,S.format,S.type);for(const ae of S.layerUpdates){const Se=fe.data.subarray(ae*$/fe.data.BYTES_PER_ELEMENT,(ae+1)*$/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,Te,ze,Se)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,ze,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,He,fe.width,fe.height,fe.depth,0,Te,ze,fe.data);else if(S.isData3DTexture)Ge?(at&&n.texStorage3D(t.TEXTURE_3D,Ee,He,fe.width,fe.height,fe.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,ze,fe.data)):n.texImage3D(t.TEXTURE_3D,0,He,fe.width,fe.height,fe.depth,0,Te,ze,fe.data);else if(S.isFramebufferTexture){if(at)if(Ge)n.texStorage2D(t.TEXTURE_2D,Ee,He,fe.width,fe.height);else{let $=fe.width,ae=fe.height;for(let Se=0;Se<Ee;Se++)n.texImage2D(t.TEXTURE_2D,Se,He,$,ae,0,Te,ze,null),$>>=1,ae>>=1}}else if(Ke.length>0){if(Ge&&at){const $=re(Ke[0]);n.texStorage2D(t.TEXTURE_2D,Ee,He,$.width,$.height)}for(let $=0,ae=Ke.length;$<ae;$++)Ce=Ke[$],Ge?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Te,ze,Ce):n.texImage2D(t.TEXTURE_2D,$,He,Te,ze,Ce);S.generateMipmaps=!1}else if(Ge){if(at){const $=re(fe);n.texStorage2D(t.TEXTURE_2D,Ee,He,$.width,$.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,ze,fe)}else n.texImage2D(t.TEXTURE_2D,0,He,Te,ze,fe);m(S)&&f(z),ye.__version=Y.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function W(T,S,N){if(S.image.length!==6)return;const z=ce(T,S),K=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+N);const Y=i.get(K);if(K.version!==Y.__version||z===!0){n.activeTexture(t.TEXTURE0+N);const ye=nt.getPrimaries(nt.workingColorSpace),me=S.colorSpace===Si?null:nt.getPrimaries(S.colorSpace),_e=S.colorSpace===Si||ye===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let ae=0;ae<6;ae++)!Ve&&!fe?Te[ae]=x(S.image[ae],!0,r.maxCubemapSize):Te[ae]=fe?S.image[ae].image:S.image[ae],Te[ae]=Le(S,Te[ae]);const ze=Te[0],He=s.convert(S.format,S.colorSpace),Ce=s.convert(S.type),Ke=_(S.internalFormat,He,Ce,S.colorSpace),Ge=S.isVideoTexture!==!0,at=Y.__version===void 0||z===!0,D=K.dataReady;let Ee=M(S,ze);ie(t.TEXTURE_CUBE_MAP,S);let $;if(Ve){Ge&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,Ke,ze.width,ze.height);for(let ae=0;ae<6;ae++){$=Te[ae].mipmaps;for(let Se=0;Se<$.length;Se++){const we=$[Se];S.format!==Kn?He!==null?Ge?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,we.width,we.height,He,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,Ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,we.width,we.height,He,Ce,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,Ke,we.width,we.height,0,He,Ce,we.data)}}}else{if($=S.mipmaps,Ge&&at){$.length>0&&Ee++;const ae=re(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Te[ae].width,Te[ae].height,He,Ce,Te[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Te[ae].width,Te[ae].height,0,He,Ce,Te[ae].data);for(let Se=0;Se<$.length;Se++){const Ze=$[Se].image[ae].image;Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,Ze.width,Ze.height,He,Ce,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,Ke,Ze.width,Ze.height,0,He,Ce,Ze.data)}}else{Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,He,Ce,Te[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,He,Ce,Te[ae]);for(let Se=0;Se<$.length;Se++){const we=$[Se];Ge?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,He,Ce,we.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,Ke,He,Ce,we.image[ae])}}}m(S)&&f(t.TEXTURE_CUBE_MAP),Y.__version=K.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function oe(T,S,N,z,K,Y){const ye=s.convert(N.format,N.colorSpace),me=s.convert(N.type),_e=_(N.internalFormat,ye,me,N.colorSpace);if(!i.get(S).__hasExternalTextures){const fe=Math.max(1,S.width>>Y),Te=Math.max(1,S.height>>Y);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,Y,_e,fe,Te,S.depth,0,ye,me,null):n.texImage2D(K,Y,_e,fe,Te,0,ye,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),se(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,K,i.get(N).__webglTexture,0,ne(S)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,K,i.get(N).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(T,S,N){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){const z=S.depthTexture,K=z&&z.isDepthTexture?z.type:null,Y=v(S.stencilBuffer,K),ye=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=ne(S);se(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,Y,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,Y,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Y,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,T)}else{const z=S.textures;for(let K=0;K<z.length;K++){const Y=z[K],ye=s.convert(Y.format,Y.colorSpace),me=s.convert(Y.type),_e=_(Y.internalFormat,ye,me,Y.colorSpace),Ve=ne(S);N&&se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,_e,S.width,S.height):se(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const z=i.get(S.depthTexture).__webglTexture,K=ne(S);if(S.depthTexture.format===Is)se(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,z,0);else if(S.depthTexture.format===$s)se(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const S=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const z=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),z){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,z.removeEventListener("dispose",K)};z.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=z}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,T)}else if(N){S.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[z]),S.__webglDepthbuffer[z]===void 0)S.__webglDepthbuffer[z]=t.createRenderbuffer(),he(S.__webglDepthbuffer[z],T,!1);else{const K=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),he(S.__webglDepthbuffer,T,!1);else{const z=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,z,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(T,S,N){const z=i.get(T);S!==void 0&&oe(z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Ne(T)}function Fe(T){const S=T.texture,N=i.get(T),z=i.get(S);T.addEventListener("dispose",R);const K=T.textures,Y=T.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=S.version,o.memory.textures++),Y){N.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[me]=[];for(let _e=0;_e<S.mipmaps.length;_e++)N.__webglFramebuffer[me][_e]=t.createFramebuffer()}else N.__webglFramebuffer[me]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)N.__webglFramebuffer[me]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ye)for(let me=0,_e=K.length;me<_e;me++){const Ve=i.get(K[me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&se(T)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let me=0;me<K.length;me++){const _e=K[me];N.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[me]);const Ve=s.convert(_e.format,_e.colorSpace),fe=s.convert(_e.type),Te=_(_e.internalFormat,Ve,fe,_e.colorSpace,T.isXRRenderTarget===!0),ze=ne(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Te,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,N.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),he(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),ie(t.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)oe(N.__webglFramebuffer[me][_e],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else oe(N.__webglFramebuffer[me],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(S)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let me=0,_e=K.length;me<_e;me++){const Ve=K[me],fe=i.get(Ve);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),ie(t.TEXTURE_2D,Ve),oe(N.__webglFramebuffer,T,Ve,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),m(Ve)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,z.__webglTexture),ie(me,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)oe(N.__webglFramebuffer[_e],T,S,t.COLOR_ATTACHMENT0,me,_e);else oe(N.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,me,0);m(S)&&f(me),n.unbindTexture()}T.depthBuffer&&Ne(T)}function ke(T){const S=T.textures;for(let N=0,z=S.length;N<z;N++){const K=S[N];if(m(K)){const Y=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(K).__webglTexture;n.bindTexture(Y,ye),f(Y),n.unbindTexture()}}}const Q=[],E=[];function B(T){if(T.samples>0){if(se(T)===!1){const S=T.textures,N=T.width,z=T.height;let K=t.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(T),me=S.length>1;if(me)for(let _e=0;_e<S.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);const Ve=i.get(S[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,N,z,0,0,N,z,K,t.NEAREST),l===!0&&(Q.length=0,E.length=0,Q.push(t.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(Y),E.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,E)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<S.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);const Ve=i.get(S[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ne(T){return Math.min(r.maxSamples,T.samples)}function se(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(T){const S=o.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function Le(T,S){const N=T.colorSpace,z=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==mr&&N!==Si&&(nt.getTransfer(N)===ht?(z!==Kn||K!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=w,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Re,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=se}function qT(t,e){function n(i,r=Si){let s;const o=nt.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===Ed)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Uv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Iv)return t.BYTE;if(i===Dv)return t.SHORT;if(i===na)return t.UNSIGNED_SHORT;if(i===Md)return t.INT;if(i===Hr)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===da)return t.HALF_FLOAT;if(i===Fv)return t.ALPHA;if(i===Ov)return t.RGB;if(i===Kn)return t.RGBA;if(i===kv)return t.LUMINANCE;if(i===Bv)return t.LUMINANCE_ALPHA;if(i===Is)return t.DEPTH_COMPONENT;if(i===$s)return t.DEPTH_STENCIL;if(i===zv)return t.RED;if(i===Td)return t.RED_INTEGER;if(i===Hv)return t.RG;if(i===Ad)return t.RG_INTEGER;if(i===Cd)return t.RGBA_INTEGER;if(i===Sl||i===Ml||i===El||i===wl)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qf||i===Kf||i===Zf||i===Jf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qf||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qf||i===eh)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===th)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===hh||i===dh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===gh||i===vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tl)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gv||i===_h||i===xh||i===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class KT extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ct extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZT={type:"move"};class Du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fr({vertexShader:JT,fragmentShader:QT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new Yt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t2 extends Qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const x=new e2,m=n.getContextAttributes();let f=null,_=null;const v=[],M=[],b=new ge;let R=null;const C=new En;C.layers.enable(1),C.viewport=new st;const P=new En;P.layers.enable(2),P.viewport=new st;const q=[C,P],y=new KT;y.layers.enable(1),y.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=v[W];return oe===void 0&&(oe=new Du,v[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=v[W];return oe===void 0&&(oe=new Du,v[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=v[W];return oe===void 0&&(oe=new Du,v[W]=oe),oe.getHandSpace()};function O(W){const oe=M.indexOf(W.inputSource);if(oe===-1)return;const he=v[oe];he!==void 0&&(he.update(W.inputSource,W.frame,c||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<v.length;W++){const oe=M[W];oe!==null&&(M[W]=null,v[W].disconnect(oe))}w=null,X=null,x.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Gr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,he=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?$s:Is,he=m.stencil?Ys:Hr);const Ne={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Gr(h.textureWidth,h.textureHeight,{format:Kn,type:Li,depthTexture:new i_(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(W){for(let oe=0;oe<W.removed.length;oe++){const he=W.removed[oe],ue=M.indexOf(he);ue>=0&&(M[ue]=null,v[ue].disconnect(he))}for(let oe=0;oe<W.added.length;oe++){const he=W.added[oe];let ue=M.indexOf(he);if(ue===-1){for(let Re=0;Re<v.length;Re++)if(Re>=M.length){M.push(he),ue=Re;break}else if(M[Re]===null){M[Re]=he,ue=Re;break}if(ue===-1)break}const Ne=v[ue];Ne&&Ne.connect(he)}}const H=new I,ee=new I;function L(W,oe,he){H.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const ue=H.distanceTo(ee),Ne=oe.projectionMatrix.elements,Re=he.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),ke=Ne[14]/(Ne[10]+1),Q=(Ne[9]+1)/Ne[5],E=(Ne[9]-1)/Ne[5],B=(Ne[8]-1)/Ne[0],ne=(Re[8]+1)/Re[0],se=Fe*B,pe=Fe*ne,Le=ue/(-B+ne),re=Le*-B;if(oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(re),W.translateZ(Le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ne[10]===-1)W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const T=Fe+Le,S=ke+Le,N=se-re,z=pe+(ue-re),K=Q*ke/S*T,Y=E*ke/S*T;W.projectionMatrix.makePerspective(N,z,K,Y,T,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function J(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let oe=W.near,he=W.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(he=x.depthFar)),y.near=P.near=C.near=oe,y.far=P.far=C.far=he,(w!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,X=y.far);const ue=W.parent,Ne=y.cameras;J(y,ue);for(let Re=0;Re<Ne.length;Re++)J(Ne[Re],ue);Ne.length===2?L(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),te(W,y,ue)};function te(W,oe,he){he===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ie=null;function ce(W,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Re=0;Re<he.length;Re++){const Fe=he[Re];let ke=null;if(p!==null)ke=p.getViewport(Fe);else{const E=d.getViewSubImage(h,Fe);ke=E.viewport,Re===0&&(e.setRenderTargetTextures(_,E.colorTexture,h.ignoreDepthValues?void 0:E.depthStencilTexture),e.setRenderTarget(_))}let Q=q[Re];Q===void 0&&(Q=new En,Q.layers.enable(Re),Q.viewport=new st,q[Re]=Q),Q.matrix.fromArray(Fe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Fe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ke.x,ke.y,ke.width,ke.height),Re===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(Q)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Re=d.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,r.renderState)}}for(let he=0;he<v.length;he++){const ue=M[he],Ne=v[he];ue!==null&&Ne!==void 0&&Ne.update(ue,oe,c||o)}ie&&ie(W,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ue=new t_;Ue.setAnimationLoop(ce),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const Mr=new ei,n2=new ot;function i2(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Jv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,Mr.copy(M),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(Mr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function r2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function c(_,v){let M=r[_.id];M===void 0&&(g(_),M=u(_),r[_.id]=M,_.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(_,b);const R=e.render.frame;s[_.id]!==R&&(h(_),s[_.id]=R)}function u(_){const v=d();_.__bindingPointIndex=v;const M=t.createBuffer(),b=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],M=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,C=M.length;R<C;R++){const P=Array.isArray(M[R])?M[R]:[M[R]];for(let q=0,y=P.length;q<y;q++){const w=P[q];if(p(w,R,q,b)===!0){const X=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let Z=0;Z<O.length;Z++){const H=O[Z],ee=x(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,X+j,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,M,b){const R=_.value,C=v+"_"+M;if(b[C]===void 0)return typeof R=="number"||typeof R=="boolean"?b[C]=R:b[C]=R.clone(),!0;{const P=b[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return b[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(_){const v=_.uniforms;let M=0;const b=16;for(let C=0,P=v.length;C<P;C++){const q=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,w=q.length;y<w;y++){const X=q[y],O=Array.isArray(X.value)?X.value:[X.value];for(let j=0,Z=O.length;j<Z;j++){const H=O[j],ee=x(H),L=M%b,J=L%ee.boundary,te=L+J;M+=J,te!==0&&b-te<ee.storage&&(M+=b-te),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=ee.storage}}}const R=M%b;return R>0&&(M+=b-R),_.__size=M,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class s2{constructor(e={}){const{canvas:n=XS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=sr,this.toneMappingExposure=1;const v=this;let M=!1,b=0,R=0,C=null,P=-1,q=null;const y=new st,w=new st;let X=null;const O=new $e(0);let j=0,Z=n.width,H=n.height,ee=1,L=null,J=null;const te=new st(0,0,Z,H),ie=new st(0,0,Z,H);let ce=!1;const Ue=new Pd;let W=!1,oe=!1;const he=new ot,ue=new ot,Ne=new I,Re=new st,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Q(){return C===null?ee:1}let E=i;function B(A,U){return n.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sd}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",we,!1),E===null){const U="webgl2";if(E=B(U,A),E===null)throw B(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,se,pe,Le,re,T,S,N,z,K,Y,ye,me,_e,Ve,fe,Te,ze,He,Ce,Ke,Ge,at,D;function Ee(){ne=new uw(E),ne.init(),Ge=new qT(E,ne),se=new rw(E,ne,e,Ge),pe=new jT(E),se.reverseDepthBuffer&&pe.buffers.depth.setReversed(!0),Le=new dw(E),re=new LT,T=new $T(E,ne,pe,re,se,Ge,Le),S=new ow(v),N=new cw(v),z=new yM(E),at=new nw(E,z),K=new fw(E,z,Le,at),Y=new mw(E,K,z,Le),He=new pw(E,se,T),fe=new sw(re),ye=new PT(v,S,N,ne,se,at,fe),me=new i2(v,re),_e=new IT,Ve=new BT(ne),ze=new tw(v,S,N,pe,Y,h,l),Te=new WT(v,Y,se),D=new r2(E,Le,se,pe),Ce=new iw(E,ne,Le),Ke=new hw(E,ne,Le),Le.programs=ye.programs,v.capabilities=se,v.extensions=ne,v.properties=re,v.renderLists=_e,v.shadowMap=Te,v.state=pe,v.info=Le}Ee();const $=new t2(v,E);this.xr=$,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(Z,H,!1))},this.getSize=function(A){return A.set(Z,H)},this.setSize=function(A,U,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,H=U,n.width=Math.floor(A*ee),n.height=Math.floor(U*ee),G===!0&&(n.style.width=A+"px",n.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Z*ee,H*ee).floor()},this.setDrawingBufferSize=function(A,U,G){Z=A,H=U,ee=G,n.width=Math.floor(A*G),n.height=Math.floor(U*G),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,U,G,V){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,U,G,V),pe.viewport(y.copy(te).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,U,G,V){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,U,G,V),pe.scissor(w.copy(ie).multiplyScalar(ee).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){pe.setScissorTest(ce=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,U=!0,G=!0){let V=0;if(A){let F=!1;if(C!==null){const de=C.texture.format;F=de===Cd||de===Ad||de===Td}if(F){const de=C.texture.type,Me=de===Li||de===Hr||de===na||de===Ys||de===Ed||de===wd,be=ze.getClearColor(),Pe=ze.getClearAlpha(),Oe=be.r,Be=be.g,Ie=be.b;Me?(p[0]=Oe,p[1]=Be,p[2]=Ie,p[3]=Pe,E.clearBufferuiv(E.COLOR,0,p)):(g[0]=Oe,g[1]=Be,g[2]=Ie,g[3]=Pe,E.clearBufferiv(E.COLOR,0,g))}else V|=E.COLOR_BUFFER_BIT}U&&(V|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",we,!1),_e.dispose(),Ve.dispose(),re.dispose(),S.dispose(),N.dispose(),Y.dispose(),at.dispose(),D.dispose(),ye.dispose(),$.dispose(),$.removeEventListener("sessionstart",Hd),$.removeEventListener("sessionend",Gd),gr.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Le.autoReset,U=Te.enabled,G=Te.autoUpdate,V=Te.needsUpdate,F=Te.type;Ee(),Le.autoReset=A,Te.enabled=U,Te.autoUpdate=G,Te.needsUpdate=V,Te.type=F}function we(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){const U=A.target;U.removeEventListener("dispose",Ze),Tt(U)}function Tt(A){on(A),re.remove(A)}function on(A){const U=re.get(A).programs;U!==void 0&&(U.forEach(function(G){ye.releaseProgram(G)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,G,V,F,de){U===null&&(U=Fe);const Me=F.isMesh&&F.matrixWorld.determinant()<0,be=S_(A,U,G,V,F);pe.setMaterial(V,Me);let Pe=G.index,Oe=1;if(V.wireframe===!0){if(Pe=K.getWireframeAttribute(G),Pe===void 0)return;Oe=2}const Be=G.drawRange,Ie=G.attributes.position;let it=Be.start*Oe,ct=(Be.start+Be.count)*Oe;de!==null&&(it=Math.max(it,de.start*Oe),ct=Math.min(ct,(de.start+de.count)*Oe)),Pe!==null?(it=Math.max(it,0),ct=Math.min(ct,Pe.count)):Ie!=null&&(it=Math.max(it,0),ct=Math.min(ct,Ie.count));const xt=ct-it;if(xt<0||xt===1/0)return;at.setup(F,V,be,G,Pe);let gn,et=Ce;if(Pe!==null&&(gn=z.get(Pe),et=Ke,et.setIndex(gn)),F.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*Q()),et.setMode(E.LINES)):et.setMode(E.TRIANGLES);else if(F.isLine){let De=V.linewidth;De===void 0&&(De=1),pe.setLineWidth(De*Q()),F.isLineSegments?et.setMode(E.LINES):F.isLineLoop?et.setMode(E.LINE_LOOP):et.setMode(E.LINE_STRIP)}else F.isPoints?et.setMode(E.POINTS):F.isSprite&&et.setMode(E.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,Ot=F._multiDrawCounts,tt=F._multiDrawCount,Bn=Pe?z.get(Pe).bytesPerElement:1,Yr=re.get(V).currentProgram.getUniforms();for(let vn=0;vn<tt;vn++)Yr.setValue(E,"_gl_DrawID",vn),et.render(De[vn]/Bn,Ot[vn])}else if(F.isInstancedMesh)et.renderInstances(it,xt,F.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ot=Math.min(G.instanceCount,De);et.renderInstances(it,xt,Ot)}else et.render(it,xt)};function Qe(A,U,G){A.transparent===!0&&A.side===Yn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,va(A,U,G),A.side=ur,A.needsUpdate=!0,va(A,U,G),A.side=Yn):va(A,U,G)}this.compile=function(A,U,G=null){G===null&&(G=A),m=Ve.get(G),m.init(U),_.push(m),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==G&&A.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const V=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const de=F.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const be=de[Me];Qe(be,G,F),V.add(be)}else Qe(de,G,F),V.add(de)}),_.pop(),m=null,V},this.compileAsync=function(A,U,G=null){const V=this.compile(A,U,G);return new Promise(F=>{function de(){if(V.forEach(function(Me){re.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){F(A);return}setTimeout(de,10)}ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let an=null;function ui(A){an&&an(A)}function Hd(){gr.stop()}function Gd(){gr.start()}const gr=new t_;gr.setAnimationLoop(ui),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){an=A,$.setAnimationLoop(A),A===null?gr.stop():gr.start()},$.addEventListener("sessionstart",Hd),$.addEventListener("sessionend",Gd),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,C),m=Ve.get(A,_.length),m.init(U),_.push(m),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(ue),oe=this.localClippingEnabled,W=fe.init(this.clippingPlanes,oe),x=_e.get(A,f.length),x.init(),f.push(x),$.enabled===!0&&$.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Rc(de,U,-1/0,v.sortObjects)}Rc(A,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,J),ke=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ke&&ze.addToRenderList(x,A),this.info.render.frame++,W===!0&&fe.beginShadows();const G=m.state.shadowsArray;Te.render(G,A,U),W===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,F=x.transmissive;if(m.setupLights(),U.isArrayCamera){const de=U.cameras;if(F.length>0)for(let Me=0,be=de.length;Me<be;Me++){const Pe=de[Me];Wd(V,F,A,Pe)}ke&&ze.render(A);for(let Me=0,be=de.length;Me<be;Me++){const Pe=de[Me];Vd(x,A,Pe,Pe.viewport)}}else F.length>0&&Wd(V,F,A,U),ke&&ze.render(A),Vd(x,A,U);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,U),at.resetDefaultState(),P=-1,q=null,_.pop(),_.length>0?(m=_[_.length-1],W===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Rc(A,U,G,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){V&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Me=Y.update(A),be=A.material;be.visible&&x.push(A,Me,be,G,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const Me=Y.update(A),be=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Re.copy(Me.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(be)){const Pe=Me.groups;for(let Oe=0,Be=Pe.length;Oe<Be;Oe++){const Ie=Pe[Oe],it=be[Ie.materialIndex];it&&it.visible&&x.push(A,Me,it,G,Re.z,Ie)}}else be.visible&&x.push(A,Me,be,G,Re.z,null)}}const de=A.children;for(let Me=0,be=de.length;Me<be;Me++)Rc(de[Me],U,G,V)}function Vd(A,U,G,V){const F=A.opaque,de=A.transmissive,Me=A.transparent;m.setupLightsView(G),W===!0&&fe.setGlobalState(v.clippingPlanes,G),V&&pe.viewport(y.copy(V)),F.length>0&&ga(F,U,G),de.length>0&&ga(de,U,G),Me.length>0&&ga(Me,U,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Wd(A,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Gr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?da:Li,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=m.state.transmissionRenderTarget[V.id],Me=V.viewport||y;de.setSize(Me.z,Me.w);const be=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(O),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ze.render(G);const Pe=v.toneMapping;v.toneMapping=sr;const Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&fe.setGlobalState(v.clippingPlanes,V),ga(A,G,V),T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ie=0,it=U.length;Ie<it;Ie++){const ct=U[Ie],xt=ct.object,gn=ct.geometry,et=ct.material,De=ct.group;if(et.side===Yn&&xt.layers.test(V.layers)){const Ot=et.side;et.side=en,et.needsUpdate=!0,Xd(xt,G,V,gn,et,De),et.side=Ot,et.needsUpdate=!0,Be=!0}}Be===!0&&(T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de))}v.setRenderTarget(be),v.setClearColor(O,j),Oe!==void 0&&(V.viewport=Oe),v.toneMapping=Pe}function ga(A,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,de=A.length;F<de;F++){const Me=A[F],be=Me.object,Pe=Me.geometry,Oe=V===null?Me.material:V,Be=Me.group;be.layers.test(G.layers)&&Xd(be,U,G,Pe,Oe,Be)}}function Xd(A,U,G,V,F,de){A.onBeforeRender(v,U,G,V,F,de),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(v,U,G,V,A,de),F.transparent===!0&&F.side===Yn&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,v.renderBufferDirect(G,U,V,F,A,de),F.side=ur,F.needsUpdate=!0,v.renderBufferDirect(G,U,V,F,A,de),F.side=Yn):v.renderBufferDirect(G,U,V,F,A,de),A.onAfterRender(v,U,G,V,F,de)}function va(A,U,G){U.isScene!==!0&&(U=Fe);const V=re.get(A),F=m.state.lights,de=m.state.shadowsArray,Me=F.state.version,be=ye.getParameters(A,F.state,de,U,G),Pe=ye.getProgramCacheKey(be);let Oe=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?N:S).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Ze),Oe=new Map,V.programs=Oe);let Be=Oe.get(Pe);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===Me)return Yd(A,be),Be}else be.uniforms=ye.getUniforms(A),A.onBeforeCompile(be,v),Be=ye.acquireProgram(be,Pe),Oe.set(Pe,Be),V.uniforms=be.uniforms;const Ie=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=fe.uniform),Yd(A,be),V.needsLights=E_(A),V.lightsStateVersion=Me,V.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function jd(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Yd(A,U){const G=re.get(A);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function S_(A,U,G,V,F){U.isScene!==!0&&(U=Fe),T.resetTextureUnits();const de=U.fog,Me=V.isMeshStandardMaterial?U.environment:null,be=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mr,Pe=(V.isMeshStandardMaterial?N:S).get(V.envMap||Me),Oe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let xt=sr;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=v.toneMapping);const gn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=gn!==void 0?gn.length:0,De=re.get(V),Ot=m.state.lights;if(W===!0&&(oe===!0||A!==q)){const bn=A===q&&V.id===P;fe.setState(V,A,bn)}let tt=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ot.state.version||De.outputColorSpace!==be||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==Pe||V.fog===!0&&De.fog!==de||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==fe.numPlanes||De.numIntersection!==fe.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Be||De.morphTargets!==Ie||De.morphNormals!==it||De.morphColors!==ct||De.toneMapping!==xt||De.morphTargetsCount!==et)&&(tt=!0):(tt=!0,De.__version=V.version);let Bn=De.currentProgram;tt===!0&&(Bn=va(V,U,F));let Yr=!1,vn=!1,bc=!1;const St=Bn.getUniforms(),Ii=De.uniforms;if(pe.useProgram(Bn.program)&&(Yr=!0,vn=!0,bc=!0),V.id!==P&&(P=V.id,vn=!0),Yr||q!==A){se.reverseDepthBuffer?(he.copy(A.projectionMatrix),YS(he),$S(he),St.setValue(E,"projectionMatrix",he)):St.setValue(E,"projectionMatrix",A.projectionMatrix),St.setValue(E,"viewMatrix",A.matrixWorldInverse);const bn=St.map.cameraPosition;bn!==void 0&&bn.setValue(E,Ne.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&St.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,vn=!0,bc=!0)}if(F.isSkinnedMesh){St.setOptional(E,F,"bindMatrix"),St.setOptional(E,F,"bindMatrixInverse");const bn=F.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),St.setValue(E,"boneTexture",bn.boneTexture,T))}F.isBatchedMesh&&(St.setOptional(E,F,"batchingTexture"),St.setValue(E,"batchingTexture",F._matricesTexture,T),St.setOptional(E,F,"batchingIdTexture"),St.setValue(E,"batchingIdTexture",F._indirectTexture,T),St.setOptional(E,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(E,"batchingColorTexture",F._colorsTexture,T));const Pc=G.morphAttributes;if((Pc.position!==void 0||Pc.normal!==void 0||Pc.color!==void 0)&&He.update(F,G,Bn),(vn||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,St.setValue(E,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ii.envMap.value=Pe,Ii.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Ii.envMapIntensity.value=U.environmentIntensity),vn&&(St.setValue(E,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&M_(Ii,bc),de&&V.fog===!0&&me.refreshFogUniforms(Ii,de),me.refreshMaterialUniforms(Ii,V,ee,H,m.state.transmissionRenderTarget[A.id]),Cl.upload(E,jd(De),Ii,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cl.upload(E,jd(De),Ii,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(E,"center",F.center),St.setValue(E,"modelViewMatrix",F.modelViewMatrix),St.setValue(E,"normalMatrix",F.normalMatrix),St.setValue(E,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bn=V.uniformsGroups;for(let Lc=0,w_=bn.length;Lc<w_;Lc++){const $d=bn[Lc];D.update($d,Bn),D.bind($d,Bn)}}return Bn}function M_(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function E_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,U,G){re.get(A.texture).__webglTexture=U,re.get(A.depthTexture).__webglTexture=G;const V=re.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const G=re.get(A);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,G=0){C=A,b=U,R=G;let V=!0,F=null,de=!1,Me=!1;if(A){const Pe=re.get(A);if(Pe.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(E.FRAMEBUFFER,null),V=!1;else if(Pe.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Pe.__hasExternalTextures)T.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&re.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Be=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?F=Be[U][G]:F=Be[U],de=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?F=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[G]:F=Be,y.copy(A.viewport),w.copy(A.scissor),X=A.scissorTest}else y.copy(te).multiplyScalar(ee).floor(),w.copy(ie).multiplyScalar(ee).floor(),X=ce;if(pe.bindFramebuffer(E.FRAMEBUFFER,F)&&V&&pe.drawBuffers(A,F),pe.viewport(y),pe.scissor(w),pe.setScissorTest(X),de){const Pe=re.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,G)}else if(Me){const Pe=re.get(A.texture),Oe=U||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Pe.__webglTexture,G||0,Oe)}P=-1},this.readRenderTargetPixels=function(A,U,G,V,F,de,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){pe.bindFramebuffer(E.FRAMEBUFFER,be);try{const Pe=A.texture,Oe=Pe.format,Be=Pe.type;if(!se.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&G>=0&&G<=A.height-F&&E.readPixels(U,G,V,F,Ge.convert(Oe),Ge.convert(Be),de)}finally{const Pe=C!==null?re.get(C).__webglFramebuffer:null;pe.bindFramebuffer(E.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,U,G,V,F,de,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){const Pe=A.texture,Oe=Pe.format,Be=Pe.type;if(!se.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-V&&G>=0&&G<=A.height-F){pe.bindFramebuffer(E.FRAMEBUFFER,be);const Ie=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ie),E.bufferData(E.PIXEL_PACK_BUFFER,de.byteLength,E.STREAM_READ),E.readPixels(U,G,V,F,Ge.convert(Oe),Ge.convert(Be),0);const it=C!==null?re.get(C).__webglFramebuffer:null;pe.bindFramebuffer(E.FRAMEBUFFER,it);const ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await jS(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ie),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,de),E.deleteBuffer(Ie),E.deleteSync(ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,G=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(A.image.width*V),de=Math.floor(A.image.height*V),Me=U!==null?U.x:0,be=U!==null?U.y:0;T.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,G,0,0,Me,be,F,de),pe.unbindTexture()},this.copyTextureToTexture=function(A,U,G=null,V=null,F=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let de,Me,be,Pe,Oe,Be;G!==null?(de=G.max.x-G.min.x,Me=G.max.y-G.min.y,be=G.min.x,Pe=G.min.y):(de=A.image.width,Me=A.image.height,be=0,Pe=0),V!==null?(Oe=V.x,Be=V.y):(Oe=0,Be=0);const Ie=Ge.convert(U.format),it=Ge.convert(U.type);T.setTexture2D(U,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=E.getParameter(E.UNPACK_ROW_LENGTH),xt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),gn=E.getParameter(E.UNPACK_SKIP_PIXELS),et=E.getParameter(E.UNPACK_SKIP_ROWS),De=E.getParameter(E.UNPACK_SKIP_IMAGES),Ot=A.isCompressedTexture?A.mipmaps[F]:A.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ot.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ot.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,be),E.pixelStorei(E.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,F,Oe,Be,de,Me,Ie,it,Ot.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,F,Oe,Be,Ot.width,Ot.height,Ie,Ot.data):E.texSubImage2D(E.TEXTURE_2D,F,Oe,Be,de,Me,Ie,it,Ot),E.pixelStorei(E.UNPACK_ROW_LENGTH,ct),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,gn),E.pixelStorei(E.UNPACK_SKIP_ROWS,et),E.pixelStorei(E.UNPACK_SKIP_IMAGES,De),F===0&&U.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,U,G=null,V=null,F=0){A.isTexture!==!0&&(Al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,A=arguments[2],U=arguments[3],F=arguments[4]||0);let de,Me,be,Pe,Oe,Be,Ie,it,ct;const xt=A.isCompressedTexture?A.mipmaps[F]:A.image;G!==null?(de=G.max.x-G.min.x,Me=G.max.y-G.min.y,be=G.max.z-G.min.z,Pe=G.min.x,Oe=G.min.y,Be=G.min.z):(de=xt.width,Me=xt.height,be=xt.depth,Pe=0,Oe=0,Be=0),V!==null?(Ie=V.x,it=V.y,ct=V.z):(Ie=0,it=0,ct=0);const gn=Ge.convert(U.format),et=Ge.convert(U.type);let De;if(U.isData3DTexture)T.setTexture3D(U,0),De=E.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)T.setTexture2DArray(U,0),De=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const Ot=E.getParameter(E.UNPACK_ROW_LENGTH),tt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(E.UNPACK_SKIP_PIXELS),Yr=E.getParameter(E.UNPACK_SKIP_ROWS),vn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,xt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Pe),E.pixelStorei(E.UNPACK_SKIP_ROWS,Oe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Be),A.isDataTexture||A.isData3DTexture?E.texSubImage3D(De,F,Ie,it,ct,de,Me,be,gn,et,xt.data):U.isCompressedArrayTexture?E.compressedTexSubImage3D(De,F,Ie,it,ct,de,Me,be,gn,xt.data):E.texSubImage3D(De,F,Ie,it,ct,de,Me,be,gn,et,xt),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ot),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,tt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Yr),E.pixelStorei(E.UNPACK_SKIP_IMAGES,vn),F===0&&U.generateMipmaps&&E.generateMipmap(De),pe.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){b=0,R=0,C=null,pe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Rd?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Tc?"display-p3":"srgb"}}class l_ extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Nd extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ge:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new ot;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Id extends ci{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ge){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class o2 extends Id{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const il=new I,Uu=new Dd,Fu=new Dd,Ou=new Dd;class a2 extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(il.subVectors(r[0],r[1]).add(r[0]),c=il);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(il.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=il),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Uu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),Fu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),Ou.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Uu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Fu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ou.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Uu.calc(l),Fu.calc(l),Ou.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function l2(t,e){const n=1-t;return n*n*e}function c2(t,e){return 2*(1-t)*t*e}function u2(t,e){return t*t*e}function Oo(t,e,n,i){return l2(t,e)+c2(t,n)+u2(t,i)}function f2(t,e){const n=1-t;return n*n*n*e}function h2(t,e){const n=1-t;return 3*n*n*t*e}function d2(t,e){return 3*(1-t)*t*t*e}function p2(t,e){return t*t*t*e}function ko(t,e,n,i,r){return f2(t,e)+h2(t,n)+d2(t,i)+p2(t,r)}class c_ extends ci{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,r.x,s.x,o.x,a.x),ko(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m2 extends ci{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ko(e,r.x,s.x,o.x,a.x),ko(e,r.y,s.y,o.y,a.y),ko(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class u_ extends ci{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g2 extends ci{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f_ extends ci{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Oo(e,r.x,s.x,o.x),Oo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v2 extends ci{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Oo(e,r.x,s.x,o.x),Oo(e,r.y,s.y,o.y),Oo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h_ extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Zm(a,l.x,c.x,u.x,d.x),Zm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var wh=Object.freeze({__proto__:null,ArcCurve:o2,CatmullRomCurve3:a2,CubicBezierCurve:c_,CubicBezierCurve3:m2,EllipseCurve:Id,LineCurve:u_,LineCurve3:g2,QuadraticBezierCurve:f_,QuadraticBezierCurve3:v2,SplineCurve:h_});class _2 extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new wh[r.type]().fromJSON(r))}return this}}class Jm extends _2{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new u_(this.currentPoint.clone(),new ge(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new f_(this.currentPoint.clone(),new ge(e,n),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new c_(this.currentPoint.clone(),new ge(e,n),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new h_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Id(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ud extends Jm{constructor(e){super(e),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Jm().fromJSON(r))}return this}}const x2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=d_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,p;if(i&&(s=w2(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)d=t[g],h=t[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ia(s,o,n,a,l,p,0),o}};function d_(t,e,n,i,r){let s,o;if(r===U2(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Qm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Qm(s,t[s],t[s+1],o);return o&&Cc(o,o.next)&&(sa(o),o=o.next),o}function Wr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Cc(n,n.next)||gt(n.prev,n,n.next)===0)){if(sa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ia(t,e,n,i,r,s,o){if(!t)return;!o&&s&&b2(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?S2(t,i,r,s):y2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),sa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=M2(Wr(t),e,n),ia(t,e,n,i,r,s,2)):o===2&&E2(t,e,n,i,r,s):ia(Wr(t),e,n,i,r,s,1);break}}}function y2(t){const e=t.prev,n=t,i=t.next;if(gt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Ts(r,a,s,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function S2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,x=a>l?a>c?a:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=Th(p,g,e,n,i),_=Th(x,m,e,n,i);let v=t.prevZ,M=t.nextZ;for(;v&&v.z>=f&&M&&M.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ts(a,u,l,d,c,h,v.x,v.y)&&gt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Ts(a,u,l,d,c,h,M.x,M.y)&&gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ts(a,u,l,d,c,h,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Ts(a,u,l,d,c,h,M.x,M.y)&&gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function M2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Cc(r,s)&&p_(r,i,i.next,s)&&ra(r,s)&&ra(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),sa(i),sa(i.next),i=t=s),i=i.next}while(i!==t);return Wr(i)}function E2(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N2(o,a)){let l=m_(o,a);o=Wr(o,o.next),l=Wr(l,l.next),ia(o,e,n,i,r,s,0),ia(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function w2(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=d_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(L2(c));for(r.sort(T2),s=0;s<r.length;s++)n=A2(r[s],n);return n}function T2(t,e){return t.x-e.x}function A2(t,e){const n=C2(t,e);if(!n)return e;const i=m_(n,t);return Wr(i,i.next),Wr(n,n.next)}function C2(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ts(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),ra(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&R2(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function R2(t,e){return gt(t.prev,t,e.prev)<0&&gt(e.next,t,t.next)<0}function b2(t,e,n,i){let r=t;do r.z===0&&(r.z=Th(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,P2(r)}function P2(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Th(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function L2(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ts(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function N2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!I2(t,e)&&(ra(t,e)&&ra(e,t)&&D2(t,e)&&(gt(t.prev,t,e.prev)||gt(t,e.prev,e))||Cc(t,e)&&gt(t.prev,t,t.next)>0&&gt(e.prev,e,e.next)>0)}function gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Cc(t,e){return t.x===e.x&&t.y===e.y}function p_(t,e,n,i){const r=sl(gt(t,e,n)),s=sl(gt(t,e,i)),o=sl(gt(n,i,t)),a=sl(gt(n,i,e));return!!(r!==s&&o!==a||r===0&&rl(t,n,e)||s===0&&rl(t,i,e)||o===0&&rl(n,t,i)||a===0&&rl(n,e,i))}function rl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function sl(t){return t>0?1:t<0?-1:0}function I2(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&p_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ra(t,e){return gt(t.prev,t,t.next)<0?gt(t,e,t.next)>=0&&gt(t,t.prev,e)>=0:gt(t,e,t.prev)<0||gt(t,t.next,e)<0}function D2(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function m_(t,e){const n=new Ah(t.i,t.x,t.y),i=new Ah(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Qm(t,e,n,i){const r=new Ah(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function sa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ah(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U2(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class or{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return or.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];eg(e),tg(i,e);let o=e.length;n.forEach(eg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,tg(i,n[l]);const a=x2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function eg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function tg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Fd extends li{constructor(e=new Ud([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new nn(r,3)),this.setAttribute("uv",new nn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:F2;let v,M=!1,b,R,C,P;f&&(v=f.getSpacedPoints(u),M=!0,h=!1,b=f.computeFrenetFrames(u,!1),R=new I,C=new I,P=new I),h||(m=0,p=0,g=0,x=0);const q=a.extractPoints(c);let y=q.shape;const w=q.holes;if(!or.isClockWise(y)){y=y.reverse();for(let Q=0,E=w.length;Q<E;Q++){const B=w[Q];or.isClockWise(B)&&(w[Q]=B.reverse())}}const O=or.triangulateShape(y,w),j=y;for(let Q=0,E=w.length;Q<E;Q++){const B=w[Q];y=y.concat(B)}function Z(Q,E,B){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(E,B)}const H=y.length,ee=O.length;function L(Q,E,B){let ne,se,pe;const Le=Q.x-E.x,re=Q.y-E.y,T=B.x-Q.x,S=B.y-Q.y,N=Le*Le+re*re,z=Le*S-re*T;if(Math.abs(z)>Number.EPSILON){const K=Math.sqrt(N),Y=Math.sqrt(T*T+S*S),ye=E.x-re/K,me=E.y+Le/K,_e=B.x-S/Y,Ve=B.y+T/Y,fe=((_e-ye)*S-(Ve-me)*T)/(Le*S-re*T);ne=ye+Le*fe-Q.x,se=me+re*fe-Q.y;const Te=ne*ne+se*se;if(Te<=2)return new ge(ne,se);pe=Math.sqrt(Te/2)}else{let K=!1;Le>Number.EPSILON?T>Number.EPSILON&&(K=!0):Le<-Number.EPSILON?T<-Number.EPSILON&&(K=!0):Math.sign(re)===Math.sign(S)&&(K=!0),K?(ne=-re,se=Le,pe=Math.sqrt(N)):(ne=Le,se=re,pe=Math.sqrt(N/2))}return new ge(ne/pe,se/pe)}const J=[];for(let Q=0,E=j.length,B=E-1,ne=Q+1;Q<E;Q++,B++,ne++)B===E&&(B=0),ne===E&&(ne=0),J[Q]=L(j[Q],j[B],j[ne]);const te=[];let ie,ce=J.concat();for(let Q=0,E=w.length;Q<E;Q++){const B=w[Q];ie=[];for(let ne=0,se=B.length,pe=se-1,Le=ne+1;ne<se;ne++,pe++,Le++)pe===se&&(pe=0),Le===se&&(Le=0),ie[ne]=L(B[ne],B[pe],B[Le]);te.push(ie),ce=ce.concat(ie)}for(let Q=0;Q<m;Q++){const E=Q/m,B=p*Math.cos(E*Math.PI/2),ne=g*Math.sin(E*Math.PI/2)+x;for(let se=0,pe=j.length;se<pe;se++){const Le=Z(j[se],J[se],ne);ue(Le.x,Le.y,-B)}for(let se=0,pe=w.length;se<pe;se++){const Le=w[se];ie=te[se];for(let re=0,T=Le.length;re<T;re++){const S=Z(Le[re],ie[re],ne);ue(S.x,S.y,-B)}}}const Ue=g+x;for(let Q=0;Q<H;Q++){const E=h?Z(y[Q],ce[Q],Ue):y[Q];M?(C.copy(b.normals[0]).multiplyScalar(E.x),R.copy(b.binormals[0]).multiplyScalar(E.y),P.copy(v[0]).add(C).add(R),ue(P.x,P.y,P.z)):ue(E.x,E.y,0)}for(let Q=1;Q<=u;Q++)for(let E=0;E<H;E++){const B=h?Z(y[E],ce[E],Ue):y[E];M?(C.copy(b.normals[Q]).multiplyScalar(B.x),R.copy(b.binormals[Q]).multiplyScalar(B.y),P.copy(v[Q]).add(C).add(R),ue(P.x,P.y,P.z)):ue(B.x,B.y,d/u*Q)}for(let Q=m-1;Q>=0;Q--){const E=Q/m,B=p*Math.cos(E*Math.PI/2),ne=g*Math.sin(E*Math.PI/2)+x;for(let se=0,pe=j.length;se<pe;se++){const Le=Z(j[se],J[se],ne);ue(Le.x,Le.y,d+B)}for(let se=0,pe=w.length;se<pe;se++){const Le=w[se];ie=te[se];for(let re=0,T=Le.length;re<T;re++){const S=Z(Le[re],ie[re],ne);M?ue(S.x,S.y+v[u-1].y,v[u-1].x+B):ue(S.x,S.y,d+B)}}}W(),oe();function W(){const Q=r.length/3;if(h){let E=0,B=H*E;for(let ne=0;ne<ee;ne++){const se=O[ne];Ne(se[2]+B,se[1]+B,se[0]+B)}E=u+m*2,B=H*E;for(let ne=0;ne<ee;ne++){const se=O[ne];Ne(se[0]+B,se[1]+B,se[2]+B)}}else{for(let E=0;E<ee;E++){const B=O[E];Ne(B[2],B[1],B[0])}for(let E=0;E<ee;E++){const B=O[E];Ne(B[0]+H*u,B[1]+H*u,B[2]+H*u)}}i.addGroup(Q,r.length/3-Q,0)}function oe(){const Q=r.length/3;let E=0;he(j,E),E+=j.length;for(let B=0,ne=w.length;B<ne;B++){const se=w[B];he(se,E),E+=se.length}i.addGroup(Q,r.length/3-Q,1)}function he(Q,E){let B=Q.length;for(;--B>=0;){const ne=B;let se=B-1;se<0&&(se=Q.length-1);for(let pe=0,Le=u+m*2;pe<Le;pe++){const re=H*pe,T=H*(pe+1),S=E+ne+re,N=E+se+re,z=E+se+T,K=E+ne+T;Re(S,N,z,K)}}}function ue(Q,E,B){l.push(Q),l.push(E),l.push(B)}function Ne(Q,E,B){Fe(Q),Fe(E),Fe(B);const ne=r.length/3,se=_.generateTopUV(i,r,ne-3,ne-2,ne-1);ke(se[0]),ke(se[1]),ke(se[2])}function Re(Q,E,B,ne){Fe(Q),Fe(E),Fe(ne),Fe(E),Fe(B),Fe(ne);const se=r.length/3,pe=_.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);ke(pe[0]),ke(pe[1]),ke(pe[3]),ke(pe[1]),ke(pe[2]),ke(pe[3])}function Fe(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function ke(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return O2(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wh[r.type]().fromJSON(r)),new Fd(i,e.options)}}const F2={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(h,1-g),new ge(x,1-f)]:[new ge(a,1-l),new ge(u,1-d),new ge(p,1-g),new ge(m,1-f)]}};function O2(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Od extends li{constructor(e=new Ud([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new nn(r,3)),this.setAttribute("normal",new nn(s,3)),this.setAttribute("uv",new nn(o,2));function c(u){const d=r.length/3,h=u.extractPoints(n);let p=h.shape;const g=h.holes;or.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const _=g[m];or.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=or.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,f=x.length;m<f;m++){const _=x[m],v=_[0]+d,M=_[1]+d,b=_[2]+d;i.push(v,M,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return k2(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Od(i,e.curveSegments)}}function k2(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class kd extends li{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,h=new I,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let M=0;f===0&&o===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const R=b/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(R+M,1-v),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const v=u[f][_+1],M=u[f][_],b=u[f+1][_],R=u[f+1][_+1];(f!==0||o>0)&&p.push(v,M,R),(f!==i-1||l<Math.PI)&&p.push(M,b,R)}this.setIndex(p),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class B2 extends to{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class yi extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ng extends yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bd extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class z2 extends Bd{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ku=new ot,ig=new I,rg=new I;class g_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ig.setFromMatrixPosition(e.matrixWorld),n.position.copy(ig),rg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rg),n.updateMatrixWorld(),ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sg=new ot,yo=new I,Bu=new I;class H2 extends g_{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),Bu.copy(i.position),Bu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Bu),i.updateMatrixWorld(),r.makeTranslation(-yo.x,-yo.y,-yo.z),sg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sg)}}class G2 extends Bd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new H2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class V2 extends g_{constructor(){super(new n_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W2 extends Bd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new V2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);class X2 extends l_{constructor(){super();const e=new no;e.deleteAttribute("uv");const n=new yi({side:en}),i=new yi,r=new G2(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Xe(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Xe(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Xe(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Xe(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Xe(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new Xe(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new Xe(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new Xe(e,cs(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new Xe(e,cs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Xe(e,cs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new Xe(e,cs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new Xe(e,cs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Xe(e,cs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function cs(t){const e=new Us;return e.color.setScalar(t),e}function yn(t,e,n,i){const r=3*t,s=3*(n-t)-r,o=1-r-s,a=3*e,l=3*(i-e)-a,c=1-a-l,u=p=>((o*p+s)*p+r)*p,d=p=>((c*p+l)*p+a)*p,h=p=>(3*o*p+2*s)*p+r;return p=>{if(p<=0)return 0;if(p>=1)return 1;let g=p;for(let f=0;f<8;f++){const _=u(g)-p;if(Math.abs(_)<1e-6)break;const v=h(g);if(Math.abs(v)<1e-6)break;g-=_/v}let x=0,m=1;for(let f=0;f<20&&Math.abs(u(g)-p)>1e-6;f++)u(g)<p?x=g:m=g,g=(x+m)/2;return d(g)}}const Ye={open:yn(.45,.05,.25,1),close:yn(.5,0,.25,1),lift:yn(.25,.8,.3,1),spring:yn(.3,1.45,.5,1),out:yn(.3,.9,.4,1),reseat:yn(.3,1.3,.5,1),noteUp:yn(.25,1.12,.4,1),noteDown:yn(.5,0,.8,.3),flapOpen:yn(.25,1.25,.4,1),flapClose:yn(.3,1.15,.4,1),stamp:yn(.3,1.35,.45,1),arrive:yn(.22,.9,.3,1),push:yn(.2,.8,.2,1),linear:t=>t};class Mt{constructor(e=0){this.from=0,this.to_=0,this.t0=0,this.dur=0,this.ease=Ye.linear,this.active=!1,this.v=e}to(e,n,i,r,s=0){if(n<=1e-4&&s<=0){this.set(e);return}this.from=this.v,this.to_=e,this.t0=r+s,this.dur=Math.max(n,1e-4),this.ease=i,this.active=!0}set(e){this.v=e,this.active=!1}get target(){return this.active?this.to_:this.v}get busy(){return this.active}update(e){if(!this.active)return;const n=(e-this.t0)/this.dur;if(!(n<0)){if(n>=1){this.v=this.to_,this.active=!1;return}this.v=this.from+(this.to_-this.from)*this.ease(n)}}}function j2(t,e){return n=>{if(n<=t[0].at)return t[0].v.slice();for(let i=0;i<t.length-1;i++){const r=t[i],s=t[i+1];if(n<=s.at){const o=e((n-r.at)/(s.at-r.at));return r.v.map((a,l)=>a+(s.v[l]-a)*o)}}return t[t.length-1].v.slice()}}const ol=(t,e=0,n=1)=>Math.max(e,Math.min(n,t)),Ln=Math.PI/180,xe=.01;function og(t){const e=t<=760,n=5,i=16,r=10,s=6,o=i-n;if(!e){const d=369.59999999999997,h=160;return{portrait:e,pw:440,ph:d,shell:46,peek:h,rim:n,ro:i,rf:r,rs:s,ri:o,t0:26,step:62,cardInset:22,cardPadX:16,cardPadY:12,rowH:34,logo:30,nameSize:14,durSize:11.5,coinFrac:.5,coverPad:[34,34],coverName:26,notes:{x:-440+2*440*.06,w:2*440*.86,top:[40,40,40,40],h:h+60,rot:[8.4,5.8,3.2,.6],pivot:"right",hidden:h+40,compact:!1},stamp:{w:110,h:140,gap:22,below:40,name:11},T:.06,P:.035}}const a=Math.max(200,Math.min(390,t-28)),l=a*.7,c=118;return{portrait:e,pw:a,ph:l,shell:50,peek:c,rim:n,ro:i,rf:r,rs:s,ri:o,t0:14,step:46,cardInset:16,cardPadX:12,cardPadY:6,rowH:30,logo:30,nameSize:13.5,durSize:10.5,coinFrac:.44,coverPad:[24,22],coverName:22,notes:{x:-a/2+a*.04,w:a*.92,top:[c,c-28,c-56,c-84],h:c+60,rot:[-.5,.35,-.25,.45],pivot:"center",hidden:c+40,compact:!0},stamp:{w:92,h:0,gap:16,below:30,name:10},T:.06,P:.035}}function ag(t){const e=t.stamp.w;return{w:e,h:t.stamp.h||e*112/88}}function v_(t,e,n,i,r){const[s,o,a,l]=r,c=new Ud;return c.moveTo(t+l,e),c.lineTo(n-a,e),c.quadraticCurveTo(n,e,n,e+a),c.lineTo(n,i-o),c.quadraticCurveTo(n,i,n-o,i),c.lineTo(t+s,i),c.quadraticCurveTo(t,i,t,i-s),c.lineTo(t,e+l),c.quadraticCurveTo(t,e,t+l,e),c}function Y2(t,e,n,i,r){t.computeVertexNormals();const s=t.attributes.position,o=t.attributes.normal,a=t.attributes.uv;for(let l=0;l<s.count;l++)(o.getZ(l)>.9||o.getZ(l)<-.9)&&a.setXY(l,(s.getX(l)-e)/(i-e),(s.getY(l)-n)/(r-n));a.needsUpdate=!0}function al(t,e,n,i,r,s,o=.012){const a=v_(t+o,e+o,n-o,i-o,r.map(c=>Math.max(.001,c-o))),l=new Fd(a,{depth:s-2*o,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:3,curveSegments:10});return l.translate(0,0,-s+o),Y2(l,t,e,n,i),l}function $2(t,e,n,i,r){const s=new Od(v_(t,e,n,i,r),10),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++)a.setXY(l,(o.getX(l)-t)/(n-t),(o.getY(l)-e)/(i-e));return s}const ji={l1:"#373330",l2:"#252321",l3:"#181716",foil:"#E9E2D6",i1:"#DB7A40",i2:"#C8642C",i3:"#A9501F",ip:"#D06C34",iedge:"#7A3612",ithread:"rgba(255,236,214,.72)",black:{i1:"#373330",i2:"#2A2725",i3:"#1E1C1B",ip:"#312E2B",iedge:"#0A0909",ithread:"rgba(233,226,214,.4)"}},ro=t=>t==="black"?{...ji,...ji.black}:ji;let Ao=2;function q2(t){Ao=t}let zd=8;function K2(t){zd=t}function pn(t,e){const n=document.createElement("canvas");n.width=Math.ceil(t*Ao),n.height=Math.ceil(e*Ao);const i=n.getContext("2d");return i.scale(Ao,Ao),{c:n,ctx:i}}function mn(t,e=!0){const n=new Nd(t);return e&&(n.colorSpace=Mn),n.anisotropy=zd,n.generateMipmaps=!0,n.minFilter=qi,n}function qt(t,e){const n=parseInt(t.slice(1),16);return`rgba(${n>>16&255},${n>>8&255},${n&255},${e})`}function Lt(t,e,n,i,r,s){const[o,a,l,c]=typeof s=="number"?[s,s,s,s]:s;t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-a,n),t.arcTo(e+i,n,e+i,n+a,a),t.lineTo(e+i,n+r-l),t.arcTo(e+i,n+r,e+i-l,n+r,l),t.lineTo(e+c,n+r),t.arcTo(e,n+r,e,n+r-c,c),t.lineTo(e,n+o),t.arcTo(e,n,e+o,n,o),t.closePath()}function ma(t,e,n,i,r){const s=(i-90)*Math.PI/180,o=e/2,a=n/2,l=Math.abs(e*Math.cos(s))/2+Math.abs(n*Math.sin(s))/2,c=t.createLinearGradient(o-Math.cos(s)*l,a-Math.sin(s)*l,o+Math.cos(s)*l,a+Math.sin(s)*l);return r.forEach(([u,d])=>c.addColorStop(u,d)),c}function sc(t,e,n,i,r,s,o,a,l){t.save(),t.translate(e*s,n*o),t.scale(1,n*r/(e*i));const c=t.createRadialGradient(0,0,0,0,0,e*i);c.addColorStop(0,a),c.addColorStop(l,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(-e*2,-n*4,e*4,n*8),t.restore()}function wt(t,e,n,i,r,s="left"){const o=[...e].map(u=>t.measureText(u).width+r),a=o.reduce((u,d)=>u+d,0)-r;let l=s==="left"?n:s==="right"?n-a:n-a/2;const c=t.textAlign;return t.textAlign="left",[...e].forEach((u,d)=>{t.fillText(u,l,i),l+=o[d]}),t.textAlign=c,a}function ar(t,e,n){if(t.measureText(e).width<=n)return e;let i=e;for(;i.length>1&&t.measureText(i+"…").width>n;)i=i.slice(0,-1);return i.trimEnd()+"…"}function __(t,e,n,i,r,s,o=1.6){t.save(),t.translate(n-r/2,i-r/2),t.scale(r/24,r/24),t.strokeStyle=s,t.lineWidth=o,t.lineCap="round",t.lineJoin="round",Tv[e].forEach(a=>t.stroke(new Path2D(a))),t.restore()}function Fs(t,e,n,i,r,s,o,a=1.6,l=[5,4]){t.save(),Lt(t,e,n,i,r,s),t.setLineDash(l),t.lineWidth=a,t.strokeStyle=o,t.stroke(),t.restore()}function x_(t,e,n,i,r,s){const o=i,a=Math.max(2,Math.round(i*n/e)),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d"),u=c.createImageData(o,a);let d=s*9301+49297;const h=()=>(d=(d*9301+49297)%233280,d/233280);for(let p=0;p<o*a;p++){const g=h()>.5?255:0;u.data.set([g,g,g,Math.round(h()*255*r)],p*4)}c.putImageData(u,0,0),t.save(),t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.globalCompositeOperation="soft-light",t.drawImage(l,0,0,e,n),t.restore()}const oc=["mail","linkedin","web","doc"];function Z2(t=512,e=4){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,t,t);let r=e*7919;const s=()=>(r=r*16807%2147483647,(r-1)/2147483646);for(let p=0;p<t*t/22;p++){const g=s()*t,x=s()*t,m=1.6+s()*3.6,f=.25+s()*.35;for(const _ of[-t,0,t])for(const v of[-t,0,t]){const M=g+_,b=x+v;if(M<-m||b<-m||M>t+m||b>t+m)continue;const R=i.createRadialGradient(M,b,0,M,b,m);R.addColorStop(0,`rgba(255,255,255,${f})`),R.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=R,i.fillRect(M-m,b-m,m*2,m*2)}}const o=i.getImageData(0,0,t,t).data,a=document.createElement("canvas");a.width=a.height=t;const l=a.getContext("2d"),c=l.createImageData(t,t),u=(p,g)=>o[((g+t)%t*t+(p+t)%t)*4]/255,d=2.2;for(let p=0;p<t;p++)for(let g=0;g<t;g++){const x=u(g+1,p-1)+2*u(g+1,p)+u(g+1,p+1)-(u(g-1,p-1)+2*u(g-1,p)+u(g-1,p+1)),m=u(g-1,p+1)+2*u(g,p+1)+u(g+1,p+1)-(u(g-1,p-1)+2*u(g,p-1)+u(g+1,p-1));let f=-x*d,_=m*d,v=1;const M=Math.hypot(f,_,v);f/=M,_/=M,v/=M;const b=(p*t+g)*4;c.data[b]=(f*.5+.5)*255,c.data[b+1]=(_*.5+.5)*255,c.data[b+2]=(v*.5+.5)*255,c.data[b+3]=255}l.putImageData(c,0,0);const h=new Nd(a);return h.wrapS=h.wrapT=Ql,h.colorSpace=Si,h.anisotropy=zd,h}function J2(t,e,n){const i=t.pw,r=t.ph+t.shell-(t.portrait?0:t.rim),{c:s,ctx:o}=pn(i,r);Lt(o,0,0,i,r,t.ri),o.save(),o.clip(),o.fillStyle=ma(o,i,r,168,[[0,ji.l1],[.52,ji.l2],[1,ji.l3]]),o.fillRect(0,0,i,r),x_(o,i,r,14,.22,33),sc(o,i,r,1.3,.95,.28,.14,"rgba(255,238,214,.085)",.58),o.save(),o.translate(i*.55,r*.55),o.scale(1,r/i);const a=o.createRadialGradient(0,0,0,0,0,i*1.2);a.addColorStop(.52,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,.34)"),o.fillStyle=a,o.fillRect(-i*2,-i*2,i*4,i*4),o.restore();const l=t.portrait?o.createLinearGradient(0,0,0,26):o.createLinearGradient(0,0,26,0);l.addColorStop(0,"rgba(0,0,0,.22)"),l.addColorStop(5/26,"rgba(255,236,214,.05)"),l.addColorStop(11/26,"rgba(0,0,0,.05)"),l.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=l,o.fillRect(0,0,i,r),o.restore();const c=Math.max(2,t.ri-8);Fs(o,9,9,i-18,r-18,c,"rgba(0,0,0,.6)",2.6,[1.2,5.4]),Fs(o,9,9.4,i-18,r-18,c,"rgba(214,204,188,.62)",1.5,[4.2,2.4]),Fs(o,8.7,9,i-18,r-18,c,"rgba(255,248,236,.28)",.6,[2.2,4.4]);const[u,d]=t.coverPad;return o.fillStyle="rgba(0,0,0,.35)",o.font=`500 ${t.coverName}px Geist`,o.textBaseline="top",wt(o,e,d,u-1,-.01*t.coverName),o.fillStyle=ji.foil,wt(o,e,d,u,-.01*t.coverName),o.font='500 11px "Geist Mono"',wt(o,n.toUpperCase(),d,u+t.coverName*1.15+9,.18*11),ac(t,i,r).forEach(({cx:h,cy:p},g)=>__(o,oc[g],h,p,18,ji.foil)),mn(s)}function ac(t,e,n){const i=t.portrait?10:16,r=t.portrait?8:12;return oc.map((s,o)=>({cx:e-i-22-(oc.length-1-o)*44,cy:n-r-22,size:44}))}function lg(t,e,n,i){const r=ro(e),s=t.pw,o=t.ph,{c:a,ctx:l}=pn(s,o);l.fillStyle=ma(l,s,o,170,[[0,r.i1],[.5,r.i2],[1,r.i3]]),l.fillRect(0,0,s,o),x_(l,s,o,10,.3,7),sc(l,s,o,.7,.6,.7,.08,"rgba(255,220,180,.16)",.7),sc(l,s,o,.9,.7,.2,1,"rgba(60,20,0,.18)",.7),l.strokeStyle="rgba(20,6,0,.45)",l.lineWidth=2,l.strokeRect(0,0,s,o);const c=l.createLinearGradient(0,o-16,0,o);c.addColorStop(0,"rgba(40,10,0,0)"),c.addColorStop(1,"rgba(40,10,0,.3)"),l.fillStyle=c,l.fillRect(0,o-16,s,16);const u={left:[0,0,30,0],right:[s,0,s-30,0],top:[0,0,0,24],bottom:[0,o,0,o-24]}[n],d=l.createLinearGradient(u[0],u[1],u[2],u[3]);return d.addColorStop(0,"rgba(40,12,0,.42)"),d.addColorStop(1,"rgba(40,12,0,0)"),l.fillStyle=d,l.fillRect(0,0,s,o),Fs(l,9,9,s-18,o-18,Math.max(2,t.ri-8),r.ithread),i&&ac(t,s,o).forEach(({cx:h,cy:p},g)=>{l.save(),l.shadowColor="rgba(60,20,0,.45)",l.shadowBlur=1.5,l.shadowOffsetY=1,__(l,oc[g],h,p,18,"#FFFFFF"),l.restore()}),mn(a)}function cg(t,e,n,i,r=[!0,!0]){const s=ro(e),o=t.ro-t.rim,{c:a,ctx:l}=pn(n,i);Lt(l,0,0,n,i,[r[0]?o:0,r[1]?o:0,0,0]),l.clip();const c=l.createLinearGradient(0,0,0,i);c.addColorStop(0,s.i1),c.addColorStop(.3,s.i2),c.addColorStop(.7,s.i3),c.addColorStop(1,"#5c2c12"),l.fillStyle=c,l.fillRect(0,0,n,i),l.fillStyle="rgba(255,235,210,.28)",l.fillRect(0,0,n,2);const u=Math.max(2,o-7);return Fs(l,r[0]?9:-20,7,n-(r[0]?9:-20)-(r[1]?9:-20),i+20,[r[0]?u:0,r[1]?u:0,0,0],s.ithread),mn(a)}const Rl=10;function Q2(t,e,n){const i=ro(t),r=Rl,{c:s,ctx:o}=pn(e,n+r),a=o.createLinearGradient(0,r,0,0);a.addColorStop(0,"rgba(40,10,0,.45)"),a.addColorStop(1,"rgba(40,10,0,0)"),o.fillStyle=a,o.fillRect(0,0,e,r),o.save(),Lt(o,0,r,e,n,[0,0,6,6]),o.clip();const l=o.createLinearGradient(0,r,0,r+n);return l.addColorStop(0,i.ip),l.addColorStop(Math.min(1,70/n),i.i2),l.addColorStop(1,i.i2),o.fillStyle=l,o.fillRect(0,r,e,n),o.fillStyle=i.iedge,o.fillRect(0,r,e,2),o.fillStyle="rgba(255,230,200,.28)",o.fillRect(0,r+2,e,1),o.restore(),o.save(),o.setLineDash([5,4]),o.lineWidth=1.4,o.strokeStyle=i.ithread,o.beginPath(),o.moveTo(14,r+7),o.lineTo(e-14,r+7),o.stroke(),o.restore(),mn(s)}function eA(t,e,n,i,r){const{c:s,ctx:o}=pn(i,r);Lt(o,0,0,i,r,12),o.save(),o.clip(),o.fillStyle=e.tint,o.fillRect(0,0,i,r),o.fillStyle=ma(o,i,r,118,[[0,"rgba(255,255,255,.2)"],[.38,"rgba(255,255,255,0)"]]),o.fillRect(0,0,i,r);const a=o.createLinearGradient(0,r,0,r*.6);a.addColorStop(0,"rgba(0,0,0,.08)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,i,r),o.restore(),Lt(o,.5,.5,i-1,r-1,11.5),o.strokeStyle="rgba(0,0,0,.12)",o.lineWidth=1,o.stroke(),o.fillStyle="rgba(255,255,255,.28)",o.fillRect(12,.5,i-24,1);const l=t.cardPadY+t.rowH/2,c=t.cardPadX,u=t.logo;if(o.save(),Lt(o,c,l-u/2,u,u,7),o.clip(),n){o.fillStyle="#fff",o.fillRect(c,l-u/2,u,u);const p=2,g=Math.min((u-p*2)/n.width,(u-p*2)/n.height),x=n.width*g,m=n.height*g;o.drawImage(n,c+(u-x)/2,l-m/2,x,m)}else o.fillStyle=qt(e.ink,.16),o.fillRect(c,l-u/2,u,u),o.fillStyle=e.ink,o.font='500 10px "Geist Mono"',o.textAlign="center",o.textBaseline="middle",o.fillText(e.initials,c+u/2,l);o.restore(),o.fillStyle=e.ink,o.textBaseline="middle",o.font=`500 ${t.durSize}px "Geist Mono"`;const d=wt(o,e.duration,i-t.cardPadX,l,.02*t.durSize,"right");o.font=`600 ${t.nameSize}px Geist`,o.textAlign="left";const h=c+u+12;return o.fillText(ar(o,e.name,i-t.cardPadX-d-12-h),h,l),mn(s)}function tA(t,e,n,i){const{c:r,ctx:s}=pn(n,i);Lt(s,0,0,n,i,16),s.save(),s.clip(),s.fillStyle=t.tint,s.fillRect(0,0,n,i),s.fillStyle=ma(s,n,i,118,[[0,"rgba(255,255,255,.22)"],[.4,"rgba(255,255,255,0)"]]),s.fillRect(0,0,n,i),s.restore(),Lt(s,.5,.5,n-1,i-1,15.5),s.strokeStyle="rgba(0,0,0,.14)",s.lineWidth=1,s.stroke();const o=22,a=42;if(s.save(),Lt(s,o,o,a,a,9),s.clip(),e){s.fillStyle="#fff",s.fillRect(o,o,a,a);const m=Math.min((a-6)/e.width,(a-6)/e.height),f=e.width*m,_=e.height*m;s.drawImage(e,o+(a-f)/2,o+(a-_)/2,f,_)}else s.fillStyle=qt(t.ink,.16),s.fillRect(o,o,a,a),s.fillStyle=t.ink,s.font='500 12px "Geist Mono"',s.textAlign="center",s.textBaseline="middle",s.fillText(t.initials,o+a/2,o+a/2);s.restore();const l=o+a+14,c=n-l-o;s.fillStyle=t.ink,s.textAlign="left",s.textBaseline="alphabetic",s.font="600 19px Geist",s.fillText(ar(s,t.name,c),l,o+18),s.globalAlpha=.78,s.font="400 12.5px Geist",s.fillText(ar(s,t.role,c),l,o+37),s.globalAlpha=1;const u=t.summary.split(new RegExp("(?<=[.!?])\\s"))[0];s.font="400 13.5px Geist";const d=u.split(" "),h=[];let p="";d.forEach(m=>{const f=p?p+" "+m:m;s.measureText(f).width>n-2*o&&p?(h.push(p),p=m):p=f}),p&&h.push(p);const g=4,x=h.slice(0,g);return h.length>g&&(x[g-1]=ar(s,x[g-1]+"…",n-2*o)),s.globalAlpha=.9,x.forEach((m,f)=>s.fillText(m,o,o+a+30+f*19)),s.globalAlpha=1,s.fillStyle=qt(t.ink,.18),s.fillRect(o,i-o-22,n-2*o,1),s.fillStyle=t.ink,s.font='500 11px "Geist Mono"',s.textBaseline="middle",wt(s,t.duration.toUpperCase(),o,i-o-6,.6),wt(s,"VIEW DETAILS →",n-o,i-o-6,.6,"right"),mn(r)}function nA(t,e,n,i,r){const{c:s,ctx:o}=pn(i,r),a=e.ink,l=t.notes.compact;Lt(o,0,0,i,r,3),o.save(),o.clip(),o.fillStyle=e.paper,o.fillRect(0,0,i,r),o.lineWidth=1;const c=(g,x,m,f)=>{o.strokeStyle=qt(a,f);for(let _=m;_<Math.hypot(i,r)*1.6;_+=m+1)o.beginPath(),o.arc(g,x,_,0,Math.PI*2),o.stroke()};c(i*.72,r*1.7,6,.08),c(i*.18,-r*.6,9,.06),o.strokeStyle=qt(a,.04);for(let g=-r;g<i+r;g+=5)o.beginPath(),o.moveTo(g,0),o.lineTo(g+r*Math.tan(25*Math.PI/180),r),o.stroke();const u=o.createLinearGradient(0,0,0,r/2);u.addColorStop(0,"rgba(255,255,255,.35)"),u.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=u,o.fillRect(0,0,i,r);const d=l?30:40;if(o.fillStyle=qt(a,.15),o.fillRect(0,0,d,r),o.fillStyle=qt(a,.24),o.fillRect(d-1,0,1,r),o.fillStyle=a,o.textBaseline="top",o.font=`700 ${l?11:13}px Geist`,wt(o,n,d/2,l?8:7,-.02*13,"center"),o.save(),o.setLineDash([9,5]),o.strokeStyle="rgba(105,112,120,.7)",o.lineWidth=5,o.beginPath(),o.moveTo(i*.58+2.5,0),o.lineTo(i*.58+2.5,r),o.stroke(),o.restore(),!l){o.save();const g=i-i*.15-37;o.translate(g,56),o.scale(1,96/74);const m=o.createRadialGradient(0,0,0,0,0,37);m.addColorStop(0,"rgba(255,255,255,.65)"),m.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=m,o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle=a,o.font='500 10px "Geist Mono"',wt(o,e.serial,i-52,7,.8,"right")}o.fillStyle=qt(a,.7);for(let g=0;g<4;g++)o.fillRect(i-14-1.5-(3-g)*5.5,6,1.5,12);let h=l?38:50;const p=(l?7:6)+8;if(o.strokeStyle=a,o.lineWidth=1,o.beginPath(),o.arc(h+7.5,p,7,0,Math.PI*2),o.stroke(),o.fillStyle=a,o.font='500 6.5px "Geist Mono"',o.textAlign="center",o.textBaseline="middle",o.fillText(e.initials,h+7.5,p+.3),o.textAlign="left",h+=24,o.font=`700 11.5px ${e.font==="inherit"?"Geist":e.font}`,h+=wt(o,e.name,h,p,.08*11.5)+9,!l){o.globalAlpha=.85,o.font='400 10px "Geist Mono"';const g=i*.46-(h-50);let x=`${e.category} · ${e.year}`.toUpperCase();for(;x.length>2&&o.measureText(x).width+x.length*.6>g;)x=x.slice(0,-2)+"…";wt(o,x,h,p,.6),o.globalAlpha=1}return o.restore(),Lt(o,.5,.5,i-1,r-1,3),o.strokeStyle=qt(a,.2),o.lineWidth=1,o.stroke(),o.fillStyle="rgba(255,255,255,.6)",o.fillRect(3,1,i-6,1),mn(s)}const oa={w:560,h:258};function iA(t,e){const{w:n,h:i}=oa,r=t.ink,{c:s,ctx:o}=pn(n,i);Lt(o,0,0,n,i,6),o.save(),o.clip(),o.fillStyle=t.paper,o.fillRect(0,0,n,i),o.lineWidth=1;const a=(f,_,v,M)=>{o.strokeStyle=qt(r,M);for(let b=v;b<Math.hypot(n,i)*1.6;b+=v+1)o.beginPath(),o.arc(f,_,b,0,Math.PI*2),o.stroke()};a(n*.78,i*1.5,6,.07),a(n*.2,-i*.7,9,.05);const l=o.createLinearGradient(0,0,0,i/2);l.addColorStop(0,"rgba(255,255,255,.35)"),l.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=l,o.fillRect(0,0,n,i);const c=54;o.fillStyle=qt(r,.15),o.fillRect(0,0,c,i),o.fillStyle=qt(r,.26),o.fillRect(c-1,0,1,i),o.fillStyle=r,o.textBaseline="top",o.font="700 22px Geist",wt(o,e,c/2,16,-.4,"center"),o.save(),o.translate(c/2,i-18),o.rotate(-Math.PI/2),o.font='600 9px "Geist Mono"',o.textBaseline="middle",wt(o,"PROJECT NOTE",0,0,2.2),o.restore(),o.save(),o.setLineDash([10,6]),o.strokeStyle=qt(r,.28),o.lineWidth=5,o.beginPath(),o.moveTo(n*.8,0),o.lineTo(n*.8,i),o.stroke(),o.restore();const u=o.createRadialGradient(n*.9,i*.42,0,n*.9,i*.42,52);u.addColorStop(0,"rgba(255,255,255,.55)"),u.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=u,o.fillRect(n*.8,0,n*.2,i);const d=c+24;o.strokeStyle=r,o.lineWidth=1.2,o.beginPath(),o.arc(d+13,34,13,0,Math.PI*2),o.stroke(),o.fillStyle=r,o.font='600 9px "Geist Mono"',o.textAlign="center",o.textBaseline="middle",o.fillText(t.initials,d+13,34.5),o.textAlign="left",o.font='500 10.5px "Geist Mono"',wt(o,t.serial,n-20,34,1,"right"),o.textBaseline="alphabetic",o.font=`700 40px ${t.font==="inherit"?"Geist":t.font}`,wt(o,t.name,d,104,.6),o.globalAlpha=.8,o.font='500 11px "Geist Mono"',wt(o,ar(o,`${t.category} · ${t.year}`.toUpperCase(),n*.8-d-30),d,128,.8),o.globalAlpha=1,o.font="400 13.5px Geist";const h=n*.8-d-18,p=t.description.split(new RegExp("(?<=[.!?])\\s"))[0].split(" "),g=[];let x="";p.forEach(f=>{const _=x?x+" "+f:f;o.measureText(_).width>h&&x?(g.push(x),x=f):x=_}),x&&g.push(x);const m=g.slice(0,3);g.length>3&&(m[2]=ar(o,m[2]+"…",h)),o.globalAlpha=.9,m.forEach((f,_)=>o.fillText(f,d,158+_*19)),o.globalAlpha=1,o.fillStyle=qt(r,.2),o.fillRect(d,i-36,n-d-20,1),o.fillStyle=r,o.font='600 10.5px "Geist Mono"',o.textBaseline="middle",wt(o,"VIEW CASE STUDY →",n-20,i-19,.8,"right");for(let f=0;f<4;f++)o.fillRect(d+f*5.5,i-25,1.5,12);return o.restore(),Lt(o,.5,.5,n-1,i-1,6),o.strokeStyle=qt(r,.22),o.lineWidth=1,o.stroke(),mn(s)}function rA(t,e,n){const i=ro(t),{c:r,ctx:s}=pn(e,n);Lt(s,0,0,e,n,[3,3,18,18]),s.clip();const o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,"#5a2a10"),o.addColorStop(.55,i.i3),o.addColorStop(1,i.i2),s.fillStyle=o,s.fillRect(0,0,e,n);const a=s.createLinearGradient(0,0,0,24);return a.addColorStop(0,"rgba(30,8,0,.6)"),a.addColorStop(1,"rgba(30,8,0,0)"),s.fillStyle=a,s.fillRect(0,0,e,24),mn(r)}function sA(t,e){const n=ro(t),i=16,{c:r,ctx:s}=pn(e,i),o=s.createLinearGradient(0,i,0,0);return o.addColorStop(0,"rgba(30,8,0,.45)"),o.addColorStop(1,"rgba(30,8,0,0)"),s.fillStyle=o,s.fillRect(0,0,e,i-2),s.fillStyle=n.iedge,s.fillRect(0,i-2,e,2),mn(r)}function oA(t,e,n){const i=ro(t),{c:r,ctx:s}=pn(e,n);return Lt(s,0,0,e,n,[3,3,18,18]),s.save(),s.clip(),s.fillStyle=ma(s,e,n,175,[[0,i.ip],[1,i.i2]]),s.fillRect(0,0,e,n),sc(s,e,n,.7,.8,.7,0,"rgba(255,225,190,.16)",.7),s.fillStyle="rgba(255,230,200,.25)",s.fillRect(0,0,e,1),s.fillStyle=i.iedge,s.fillRect(0,n-2,e,2),s.restore(),Fs(s,9,9,e-18,n-18,[8,8,14,14],i.ithread),mn(r)}function y_(t,e,n,i,r,s,o=.5){const a=Math.max(r/e.width,s/e.height),l=r/a,c=s/a;t.drawImage(e,(e.width-l)*o,(e.height-c)/2,l,c,n,i,r,s)}function aA(t,e,n,i,r){const{c:s,ctx:o}=pn(n,i);o.fillStyle="#FBF6EA",o.fillRect(0,0,n,i),o.globalCompositeOperation="destination-out";for(let c=0;c<=n+8;c+=8)for(let u=0;u<=i+8;u+=8)c>6&&c<n-6&&u>6&&u<i-6||(o.beginPath(),o.arc(c,u,2.8,0,Math.PI*2),o.fill());o.globalCompositeOperation="source-over",o.fillStyle=t.color,o.fillRect(6,6,n-12,i-12);const a=r*2.6,l=i-12-a;return e&&y_(o,e,6,6,n-12,l,t.focusX),o.fillStyle="#FBF6EA",o.textBaseline="middle",o.font=`700 ${r+1}px Geist`,wt(o,ar(o,t.name,n-24),n/2,i-6-a/2,0,"center"),mn(s)}const aa={w:640,h:340};function lA(t,e,n){const{w:i,h:r}=aa,s="#1D1A16",o=360,{c:a,ctx:l}=pn(i,r);Lt(l,0,0,i,r,16),l.fillStyle="#FBF6EA",l.fill(),l.save(),Lt(l,12,12,o-24,r-24,8),l.clip(),l.fillStyle=t.color,l.fillRect(0,0,o,r),e&&y_(l,e,12,12,o-24,r-24,t.focusX),l.restore(),l.strokeStyle=qt(s,.3),l.lineWidth=1.5,l.setLineDash([3,7]),l.beginPath(),l.moveTo(o,22),l.lineTo(o,r-22),l.stroke(),l.setLineDash([]),l.globalCompositeOperation="destination-out",[0,r].forEach(p=>{l.beginPath(),l.arc(o,p,15,0,Math.PI*2),l.fill()}),l.globalCompositeOperation="source-over";const c=o+26,u=i-c-24;l.textBaseline="alphabetic",l.fillStyle=t.color,l.font='600 11px "Geist Mono"',wt(l,ar(l,`AI EXPERIMENT ${n}`,u),c,50,1.4),l.fillStyle=s,l.font="700 36px Geist",wt(l,t.name,c,96,-.6),l.font='500 11px "Geist Mono"',l.globalAlpha=.7,wt(l,t.kind.toUpperCase(),c,120,.8),l.globalAlpha=1,l.font="400 15px Geist";const d=[];let h="";return t.text.split(" ").forEach(p=>{const g=h?h+" "+p:p;l.measureText(g).width>u&&h?(d.push(h),h=p):h=g}),h&&d.push(h),l.globalAlpha=.85,d.slice(0,5).forEach((p,g)=>l.fillText(p,c,154+g*22)),l.globalAlpha=1,l.fillStyle=t.color,l.font='600 12px "Geist Mono"',l.textBaseline="middle",wt(l,"OPEN IT ↗",c,r-32,1),mn(a)}function cA(t,e,n,i){const r=n*2.5,s=.5,o=document.createElement("canvas");o.width=Math.ceil((t+r*2)*s),o.height=Math.ceil((e+r*2)*s);const a=o.getContext("2d");a.scale(s,s);const l=1e4;a.shadowColor=i,a.shadowBlur=n*s*2,a.shadowOffsetX=l*s,a.fillStyle="#000",Lt(a,r-l,r,t,e,16),a.fill();const c=new Nd(o);return c.colorSpace=Mn,{tex:c,pad:r}}function uA(t,e){const{c:n,ctx:i}=pn(t,e),r=i.createLinearGradient(0,e,0,0);return r.addColorStop(0,"rgba(20,6,0,.6)"),r.addColorStop(6/e,"rgba(20,6,0,.28)"),r.addColorStop(1,"rgba(20,6,0,0)"),i.fillStyle=r,i.fillRect(0,0,t,e),mn(n)}async function fA(){const t=["500 26px Geist","600 14px Geist","700 26px Geist",'500 11px "Geist Mono"','400 10px "Geist Mono"','600 9px "Geist Mono"',"700 12px Fredoka"];try{await Promise.all(t.map(e=>document.fonts.load(e))),await document.fonts.ready}catch{}}function ug(t){return new Promise(e=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>e(null),n.src=t})}const Hi=(t,e,n=0)=>new I(t,e,n),zu=.62,hA=oa.h/oa.w,dA=aa.h/aa.w;class pA{constructor(e,n){this.scene=new l_,this.camera=new En(20,1,.1,200),this.root=new Ct,this.tilt=new Ct,this.frame=new Ct,this.leafPivot=new Ct,this.built=[],this.disposables=[],this.logos=[],this.aiImages=[],this.paused=!1,this.t0=0,this.started=!1,this.cOpen=0,this.leaf=new Mt(Math.PI),this.openS=new Mt(0),this.lift=new Mt(0),this.push=new Mt(0),this.flap=new Mt(0),this.stamps=[],this.notesRise=[],this.flip=new Mt(0),this.dock=new Mt(0),this.spreads=[],this.noteSpreads=[],this.aiSpreads=[],this.cards=[],this.notes=[],this.aiItems=[],this.flapPivot=new Ct,this.stampRest=[],this.coinClipLocal=new xi,this.coinClip=new xi,this.baseGroup=new Ct,this.notesGroup=new Ct,this.state={open:!1,settled:!1,sel:null,reseat:null,coin:!1,entered:!1,docked:!1,spread:null,peek:null},this.hover=null,this.hotEls=new Map,this.hots=new Map,this.underEl=null,this.viewW=1,this.viewH=1,this.rebuildTimer=0,this.blank=!1,this.interior=n.interior,this.reduced=n.reducedMotion,this.onReady=n.onReady??(()=>{}),this.renderer=new s2({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Mn,this.renderer.toneMapping=Lv,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bv,this.renderer.localClippingEnabled=!0,K2(this.renderer.capabilities.getMaxAnisotropy()),q2(Math.min(3,Math.max(2,(window.devicePixelRatio||1)*1.5)));const i=new Mh(this.renderer);this.scene.environment=i.fromScene(new X2,.04).texture,this.scene.environmentIntensity=.5,i.dispose();const r=new W2(16774118,1.4);r.position.set(-3.2,5.5,9),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:30}),r.shadow.bias=-4e-4,r.shadow.normalBias=.02,r.shadow.radius=6,this.scene.add(r,new z2(16777215,14077892,.45)),this.scene.add(this.root),this.root.add(this.tilt),this.tilt.add(this.frame);const s=new Xe(new Yt(40,40),new B2({color:1969920,opacity:.16}));s.position.z=-.07,s.receiveShadow=!0,this.tilt.add(s),Cr.forEach(()=>this.stamps.push(new Mt(0))),Es.forEach(()=>this.notesRise.push(new Mt(0)))}async init(){await fA(),this.logos=await Promise.all(Ar.map(e=>e.logo?ug(e.logo):Promise.resolve(null))),this.aiImages=await Promise.all(Cr.map(e=>ug(e.image))),this.pebble=Z2(),this.resize(),this.build(),this.applyState(!0),this.t0=1/0,this.started=!0,this.renderer.setAnimationLoop(()=>this.frameTick()),this.onReady()}setState(e){const n=this.state;this.state=e,this.started&&this.applyState(!1,n)}setHover(e){this.hover=e,this.started&&this.applyHover()}bindHotspot(e,n){n?this.hotEls.set(e,n):this.hotEls.delete(e),this.wireHotspots()}bindUnder(e){this.underEl=e}setPaused(e){this.paused=e}dispose(){window.clearTimeout(this.rebuildTimer),this.renderer.setAnimationLoop(null),this.clearBuilt(),this.renderer.dispose()}resize(){const e=window.innerWidth,n=window.innerHeight;this.viewW=e,this.viewH=n,this.renderer.setSize(e,n,!1),this.camera.aspect=e/n;const i=og(e),r=!this.L||i.portrait!==this.L.portrait||i.pw!==this.L.pw;!this.started||!this.L?this.L=i:r&&(window.clearTimeout(this.rebuildTimer),this.rebuildTimer=window.setTimeout(()=>{this.L=og(window.innerWidth),this.build(),this.applyState(!0),this.fitCamera()},150)),this.fitCamera()}fitCamera(){const e=this.L,n=this.viewW,i=this.viewH,r=e.portrait?Math.min(390,n-28)/(e.pw*xe):Math.min(440,n*.42)/(e.pw*xe),s=e.portrait?76:88,o=e.portrait?72:96,a=(e.portrait?2*e.ph+e.peek:e.ph+e.peek)*xe,l=Math.max(i/r,a*i/Math.max(120,i-s-o)),c=l/2/Math.tan(this.camera.fov*Ln/2),u=l/i,d=(o-s)/2*u*-1;this.camera.position.set(0,d,c),this.camera.lookAt(0,d,0),this.camera.near=Math.max(.1,c-20),this.camera.far=c+40,this.camera.updateProjectionMatrix()}clearBuilt(){this.built.forEach(e=>{var n;return(n=e.parent)==null?void 0:n.remove(e)}),this.disposables.forEach(e=>e.dispose()),this.built=[],this.disposables=[],this.cards=[],this.notes=[],this.aiItems=[],this.stampRest=[],this.spreads=[],this.noteSpreads=[],this.aiSpreads=[],this.hots.clear()}track(e){return this.disposables.push(e),e}add(e,n){return e.add(n),(e===this.frame||e===this.leafPivot)&&this.built.push(n),n}leatherMat(e,n,i,r=.45,s=.6,o=.2){const a=this.track(this.pebble.clone());return a.repeat.set(i[0],i[1]),a.needsUpdate=!0,e&&this.track(e),this.track(new ng({map:e??null,color:e?16777215:n,roughness:s,normalMap:a,normalScale:new ge(r,r),sheen:o,sheenRoughness:.55,sheenColor:new $e(e?"#ffe2c6":"#7a6656")}))}build(){this.clearBuilt();const e=this.L,n=e.pw*xe,i=e.ph*xe,r=e.shell*xe,s=e.rim*xe,o=e.ro*xe,a=e.rf*xe,l=e.rs*xe,c=e.T,u=e.P,d=.075;this.cOpen=e.peek*xe/2;const h=e.portrait,p="#211F1E",g=(re,T)=>this.leatherMat(null,p,[re/1.2,T/1.2],.22,.66,.08),x=this.track(new yi({color:"#8a3f17",roughness:.7})),m=h?{x0:-n/2,y0:-i,x1:n/2,y1:0}:{x0:0,y0:-i/2,x1:n,y1:i/2},f=h?{x0:-n/2,y0:0,x1:n/2,y1:i}:{x0:-n,y0:-i/2,x1:0,y1:i/2},_=h?i:i/2;this.baseGroup=new Ct,this.add(this.frame,this.baseGroup);const v=h?{x0:m.x0-s,y0:m.y0-s,x1:m.x1+s,y1:0,r:[a,a,o,o]}:{x0:0,y0:m.y0-s,x1:n+s,y1:m.y1+r,r:[a,o,o,a]},M=new Xe(this.track(al(v.x0,v.y0,v.x1,v.y1,v.r,c)),g(v.x1-v.x0,v.y1-v.y0));M.castShadow=!0,M.receiveShadow=!0,this.baseGroup.add(M);const b=lg(e,this.interior,h?"top":"left",!0),R=new Xe(this.track(al(m.x0,m.y0,m.x1,m.y1,[l,l,e.ri*xe,l],u,.004)),[this.leatherMat(b,"#fff",[3.6,3],.2),x]);if(R.position.z=u,R.receiveShadow=!0,this.baseGroup.add(R),!h){const re=new Xe(this.track(new Yt(n,r-s)),this.leatherMat(cg(e,this.interior,e.pw,e.shell-e.rim,[!1,!0]),"#fff",[3.6,.4],.2));re.position.set(n/2,i/2+(r-s)/2,.002),re.receiveShadow=!0,this.baseGroup.add(re)}const C=(re,T,S=0)=>Hi(m.x0+re*xe,m.y1-T*xe,S),P=e.pw-6,q=e.ph*e.coinFrac,y=C(3+P/2,3+q/2,u+.001),w=new Xe(this.track(new Yt(P*xe,q*xe)),this.track(new yi({map:this.track(rA(this.interior,P,q)),roughness:.8})));w.position.copy(y),w.receiveShadow=!0,this.baseGroup.add(w);const X=m.y1-(3+q)*xe;this.coinClipLocal.set(Hi(0,1,0),-X);const O=ag(e),j=Cr.length*O.w+(Cr.length-1)*e.stamp.gap;Cr.forEach((re,T)=>{const S=this.track(new yi({map:this.track(aA(re,this.aiImages[T],O.w,O.h,e.stamp.name)),roughness:.75,alphaTest:.5,clippingPlanes:[this.coinClip]})),N=new Xe(this.track(new Yt(O.w*xe,O.h*xe)),S),z=3+P/2-j/2+O.w/2+T*(O.w+e.stamp.gap),K=3+q+e.stamp.below-O.h/2,Y=C(z,K,u+.003),ye=new Ct;ye.position.copy(Y),ye.rotation.z=-re.tilt*Ln,ye.add(N),N.castShadow=!0,this.stampRest.push(Y.y),this.baseGroup.add(ye),this.aiItems.push({mesh:N,mat:S,y:new Mt(0),op:new Mt(1),dim:new Mt(1),h:O.h*xe,slider:ye}),this.aiSpreads.push({v:new Mt(this.state.spread==="ai"?1:0),map:S.map,face:this.track(lA(re,this.aiImages[T],"0"+(T+1))),wPx:O.w,hPx:O.h,rest:new I})});const Z=new Xe(this.track(new Yt(P*xe,16*xe)),this.track(new Us({map:this.track(sA(this.interior,P)),transparent:!0,depthWrite:!1})));Z.position.copy(C(3+P/2,3+q-8,u+.0045)),this.baseGroup.add(Z),this.flapPivot=new Ct,this.flapPivot.position.copy(C(3+P/2,3,u+.006));const H=new Xe(this.track($2(-P*xe/2,-q*xe,P*xe/2,0,[3*xe,3*xe,18*xe,18*xe])),this.leatherMat(oA(this.interior,P,q),"#fff",[3.4,1.6],.2,.58));H.material.side=Yn,H.castShadow=!0,H.receiveShadow=!0;const ee=new Xe(this.track(new kd(.12,24,12)),this.track(new yi({color:"#d8d1c5",metalness:.9,roughness:.28})));ee.scale.set(1,1,.38),ee.position.set(0,-q*xe+.22+.12,.012),ee.castShadow=!0,this.flapPivot.add(H,ee),this.baseGroup.add(this.flapPivot),this.notesGroup=new Ct,this.add(this.frame,this.notesGroup);const L=e.notes;Es.forEach((re,T)=>{const S=L.w*xe,N=L.h*xe,z=L.x*xe,K=_+L.top[T]*xe,Y=K-N,ye=new Ct;ye.position.set(L.pivot==="right"?z+S:z+S/2,Y,.012+T*.004),ye.rotation.z=-L.rot[T]*Ln;const me=new Ct;ye.add(me);const _e=this.track(new yi({map:this.track(nA(e,re,"0"+(T+1),L.w,L.h)),roughness:.82,transparent:!0,side:Yn})),Ve=new Xe(this.track(new Yt(S,N)),_e);Ve.position.set(L.pivot==="right"?-S/2:0,N/2,0),Ve.castShadow=!0,Ve.receiveShadow=!0,me.add(Ve),this.notesGroup.add(ye),this.notes.push({mesh:Ve,mat:_e,y:new Mt(0),op:new Mt(1),dim:new Mt(1),h:N,slider:me}),this.noteSpreads.push({v:new Mt(this.state.spread==="projects"?1:0),map:_e.map,face:this.track(iA(re,"0"+(T+1))),wPx:L.w,hPx:L.h,rest:Ve.position.clone()})});const J=h?n:2*n,te=new Xe(this.track(new Yt(J,.22)),this.track(new Us({map:this.track(uA(J/xe,22)),transparent:!0,depthWrite:!1})));te.position.set(0,_+.11,.03),this.notesGroup.add(te),this.leafPivot=new Ct,this.leafPivot.position.set(0,0,d),this.add(this.frame,this.leafPivot);const ie=new Ct;ie.position.z=-d,this.leafPivot.add(ie);const ce=h?{x0:f.x0-s,y0:0,x1:f.x1+s,y1:i+r,r:[o,o,a,a]}:{x0:-n-s,y0:f.y0-s,x1:0,y1:f.y1+r,r:[o,a,a,o]},Ue=new Xe(this.track(al(ce.x0,ce.y0,ce.x1,ce.y1,ce.r,c)),g(ce.x1-ce.x0,ce.y1-ce.y0));Ue.castShadow=!0,Ue.receiveShadow=!0,ie.add(Ue);const W=new Xe(this.track(al(f.x0,f.y0,f.x1,f.y1,[l,l,l,e.ri*xe],u,.004)),[this.leatherMat(lg(e,this.interior,h?"bottom":"right",!1),"#fff",[3.6,3],.2),x]);W.position.z=u,W.receiveShadow=!0,ie.add(W);const oe=n,he=r-s,ue=new Xe(this.track(new Yt(oe,he)),this.leatherMat(cg(e,this.interior,e.pw,e.shell-e.rim,h?[!0,!0]:[!0,!1]),"#fff",[3.6,.4],.2));ue.position.set((f.x0+f.x1)/2,_+he/2,.002),ue.receiveShadow=!0,ie.add(ue);const Ne=(re,T,S=0)=>Hi(f.x0+re*xe,f.y1-T*xe,S),Re=e.pw-2*e.cardInset;Ar.forEach((re,T)=>{const S=e.t0+e.step*T,N=e.ph-S-4,z=this.track(new ng({map:this.track(eA(e,re,this.logos[T],Re,N)),roughness:.38,clearcoat:.35,clearcoatRoughness:.3,transparent:!0})),K=new Xe(this.track(new Yt(Re*xe,N*xe)),z),Y=new Ct;Y.position.copy(Ne(e.cardInset+Re/2,S+N/2,u+.002+T*.006)),Y.add(K),K.castShadow=!0,K.receiveShadow=!0,ie.add(Y),this.cards.push({mesh:K,mat:z,y:new Mt(0),op:new Mt(1),dim:new Mt(1),h:(e.ph-26)*xe,slider:Y}),this.spreads.push({v:new Mt(this.state.spread==="work"?1:0),map:z.map,face:this.track(tA(re,this.logos[T],Re,Re*zu)),wPx:Re,hPx:N,rest:null});const ye=e.t0+e.step*(T+1)-4,me=e.ph-ye,_e=new Xe(this.track(new Yt(e.pw*xe,(me+Rl)*xe)),this.track(new yi({map:this.track(Q2(this.interior,e.pw,me)),roughness:.62,transparent:!0})));_e.position.copy(Ne(e.pw/2,ye-Rl+(me+Rl)/2,u+.004+T*.006)),_e.receiveShadow=!0,ie.add(_e)});const Fe=e.pw,ke=e.ph+e.shell-(h?0:e.rim),Q=new Xe(this.track(new Yt(Fe*xe,ke*xe)),this.leatherMat(J2(e,Fo.name,Fo.title),"#fff",[3.6,3.4],.24,.7,.08));Q.material.alphaTest=.5,h?(Q.rotation.x=Math.PI,Q.position.set(0,(i+r)/2,-c-.002)):(Q.rotation.y=Math.PI,Q.position.set(-n/2,-i/2+ke*xe/2,-c-.002)),Q.receiveShadow=!0,ie.add(Q);const E=(re,T,S,N)=>{const{tex:z,pad:K}=cA((S-re)/xe,(N-T)/xe,22,"rgba(30,15,0,.5)");this.track(z);const Y=new Xe(this.track(new Yt(S-re+2*K*xe,N-T+2*K*xe)),this.track(new Us({map:z,transparent:!0,depthWrite:!1,opacity:.55})));return Y.position.set((re+S)/2,(T+N)/2-.16,-c-.004),Y.renderOrder=-1,Y};this.add(this.frame,E(v.x0,v.y0,v.x1,v.y1)),this.leafBlob=E(ce.x0,ce.y0,ce.x1,ce.y1),this.add(this.frame,this.leafBlob);const B=(re,T,S,N,z)=>[Hi(re,N,z),Hi(S,N,z),Hi(S,T,z),Hi(re,T,z)],ne=(re,T,S,N,z)=>this.hots.set(re,{el:null,obj:T,pts:S,w:N,h:z}),se=Fe*xe/2,pe=ke*xe/2;ne("cover",Q,B(-se,-pe,se,pe,0),Fe,ke),ac(e,Fe,ke).forEach(({cx:re,cy:T,size:S},N)=>{const z=re*xe-se,K=pe-T*xe,Y=S*xe/2;ne("cover-icon-"+N,Q,B(z-Y,K-Y,z+Y,K+Y,0),S,S)}),this.cards.forEach((re,T)=>{const S=re.mesh.geometry,N=S.parameters.width,z=S.parameters.height;ne("card-"+T,re.mesh,B(-N/2,z/2-e.step*xe,N/2,z/2,0),Re,e.step)}),this.cards.forEach((re,T)=>{const S=re.mesh.geometry,N=S.parameters.width,z=S.parameters.height;ne("spread-card-"+T,re.mesh,B(-N/2,-z/2,N/2,z/2,0),Re,Re*zu)});const Le=h?28:30;this.notes.forEach((re,T)=>{const S=re.mesh.geometry,N=S.parameters.width,z=S.parameters.height;ne("note-"+T,re.mesh,B(-N/2,z/2-Le*xe,N/2,z/2,0),L.w,Le),ne("spread-note-"+T,re.mesh,B(-N/2,-z/2,N/2,z/2,0),oa.w,oa.h)}),ne("flap",H,B(-P*xe/2,-q*xe,P*xe/2,0,0),P,q),this.aiItems.forEach((re,T)=>{const S=O.w*xe/2,N=O.h*xe/2;ne("stamp-"+T,re.mesh,B(-S,-N,S,N,0),O.w,O.h),ne("spread-ai-"+T,re.mesh,B(-S,-N,S,N,0),aa.w,aa.h)}),ac(e,e.pw,e.ph).forEach(({cx:re,cy:T,size:S},N)=>{const z=C(re,T,u+.001),K=S*xe/2;ne("icon-"+N,this.baseGroup,B(z.x-K,z.y-K,z.x+K,z.y+K,z.z),S,S)}),this.wireHotspots()}wireHotspots(){this.hots.forEach((e,n)=>{e.el=this.hotEls.get(n)??null,e.el&&(e.el.style.width=e.w+"px",e.el.style.height=e.h+"px")})}dur(e){return this.reduced?.01:e}applyState(e,n){const i=this.state,r=performance.now()/1e3,s=c=>e?0:this.dur(c);i.entered&&!(n!=null&&n.entered)?(this.t0=e?-1/0:r,this.flip.set(0),!e&&!this.reduced&&this.flip.to(Math.PI*2,1.35,Ye.open,r,.15)):i.entered||(this.t0=1/0,this.flip.set(0)),(!n||n.docked!==i.docked)&&this.dock.to(i.docked?1:0,s(.9),Ye.open,r),(!n||n.spread!==i.spread)&&[["work",this.spreads],["projects",this.noteSpreads],["ai",this.aiSpreads]].forEach(([c,u])=>u.forEach((d,h)=>{i.spread===c?d.v.to(1,s(1),Ye.out,r,e||this.reduced?0:.25+.09*h):d.v.target!==0&&d.v.to(0,s(.7),Ye.close,r,e||this.reduced?0:.05*(3-h))})),(!n||n.open!==i.open)&&(i.open?(this.leaf.to(0,s(.9),Ye.open,r),this.openS.to(1,s(.9),Ye.open,r),this.lift.to(0,s(.2),Ye.lift,r),this.notesRise.forEach((c,u)=>c.to(1,s(.45),Ye.noteUp,r,e||this.reduced?0:.82+.04*u))):(this.leaf.to(Math.PI,s(.9),Ye.close,r),this.openS.to(0,s(.9),Ye.close,r),this.notesRise.forEach(c=>c.to(0,s(.24),Ye.noteDown,r))));const a=i.open&&i.coin;(!n||a!==(n.open&&n.coin))&&(a?(this.flap.to(-74,s(.7),Ye.flapOpen,r),this.stamps.forEach((c,u)=>c.to(1,s(.55),Ye.stamp,r,e||this.reduced?0:.18+.06*u))):(this.flap.to(0,s(.6),Ye.flapClose,r),this.stamps.forEach(c=>c.to(0,s(.55),Ye.stamp,r)))),this.push.to(i.sel||i.spread?1:0,s(.8),Ye.push,r);const l=(c,u,d,h,p)=>u.forEach((g,x)=>{const m=!!i.sel&&i.sel.kind===c&&i.sel.i===x,f=!!(n!=null&&n.sel)&&n.sel.kind===c&&n.sel.i===x,_=!!i.reseat&&i.reseat.kind===c&&i.reseat.i===x&&!(n!=null&&n.reseat&&n.reseat.kind===c&&n.reseat.i===x);m?(g.y.to(d,s(.5),Ye.out,r),g.op.to(0,s(c==="card"?.25:.3),Ye.linear,r,e?0:c==="card"?.18:.2),g.dim.to(1,s(.4),Ye.linear,r)):i.sel?(g.y.to(h,s(.5),Ye.spring,r),g.dim.to(p,s(.4),Ye.linear,r),g.op.to(1,s(.2),Ye.linear,r)):_||f&&!i.sel?(g.y.set(c==="card"?.6*g.h:1),g.op.set(0),g.y.to(0,s(c==="card"?.7:.75),Ye.reseat,r),g.op.to(1,s(.35),Ye.linear,r),g.dim.to(1,s(.4),Ye.linear,r)):(g.y.to(this.hoverOffset(c,x),s(.5),Ye.spring,r),g.dim.to(1,s(.4),Ye.linear,r),g.op.to(1,s(.2),Ye.linear,r))});l("card",this.cards,.75*((this.L.ph-26)*xe),-.05,.85),l("note",this.notes,1.2,-.06,.92),i.open||this.cards.forEach(c=>{c.y.to(0,s(.3),Ye.spring,r)}),this.applyHover()}hoverOffset(e,n){const i=this.state;return!i.open||i.sel||i.spread?0:this.hover===`${e}-${n}`?e==="card"?.1:.16:i.peek==="work"&&e==="card"?.1:i.peek==="projects"&&e==="note"?.16:0}applyHover(){var r;const e=this.state,n=performance.now()/1e3,i=!e.open&&((r=this.hover)!=null&&r.startsWith("cover"))?(this.L.portrait?16:20)*Ln:0;if(Math.abs(this.lift.target-i)>1e-6&&this.lift.to(i,this.dur(.45),Ye.lift,n),e.open&&!e.sel){const s=a=>e.peek&&!this.reduced?.05*a:0;this.cards.forEach((a,l)=>{const c=this.hoverOffset("card",l);Math.abs(a.y.target-c)>1e-6&&a.y.to(c,this.dur(.5),Ye.spring,n,s(l))}),this.notes.forEach((a,l)=>{const c=this.hoverOffset("note",l);Math.abs(a.y.target-c)>1e-6&&a.y.to(c,this.dur(.45),Ye.noteUp,n,s(l))});const o=e.coin?-74:e.peek==="ai"?-26:this.hover==="flap"?-8:0;if(Math.abs(this.flap.target-o)>1e-6&&this.flap.to(o,this.dur(e.coin?.7:.6),e.coin||e.peek==="ai"?Ye.flapOpen:Ye.flapClose,n),!e.coin){const a=e.peek==="ai"?.35:0;this.stamps.forEach((l,c)=>{Math.abs(l.target-a)>1e-6&&l.to(a,this.dur(.55),Ye.stamp,n,a?.12+.06*c:0)})}}}entranceAt(e){return j2([{at:0,v:[.85*this.viewH,48,-26,-16,.9]},{at:.52,v:[-26,20,16,5,1.02]},{at:.74,v:[6,12,-6,-1.5,1]},{at:.88,v:[-2,14.5,2,.4,1]},{at:1,v:[0,14,0,0,1]}],Ye.arrive)(e)}frameTick(){if(this.paused)return;if(!this.state.entered){this.blank||(this.renderer.clear(),this.blank=!0);return}this.blank=!1;const e=performance.now()/1e3;[this.leaf,this.openS,this.lift,this.push,this.flap,this.flip,this.dock,...this.stamps,...this.notesRise,...[...this.spreads,...this.noteSpreads,...this.aiSpreads].map(v=>v.v)].forEach(v=>v.update(e)),[...this.cards,...this.notes].forEach(v=>{v.y.update(e),v.op.update(e),v.dim.update(e)});const i=this.L,r=this.openS.v,s=i.pw*xe,o=2*this.camera.position.z*Math.tan(this.camera.fov*Ln/2)/this.viewH,a=this.reduced?1:ol((e-this.t0-.15)/1.6),l=this.entranceAt(a);this.root.visible=this.state.entered,this.root.position.y=-l[0]*o,this.root.rotation.set(-(l[1]-14)*Ln,l[2]*Ln+this.flip.v,-l[3]*Ln);const c=this.dock.v,u=this.viewW,d=this.viewH;let h=1;if(i.portrait){const v=(i.ph+i.shell)*1.15,M=2*i.ph+i.peek+i.shell;h=1+c*(Math.min(.62,.4*d/v)+(Math.min(.5,.42*d/M)-Math.min(.62,.4*d/v))*r-1),this.root.position.x=0,this.root.position.y+=c*.22*d*o}else{const v=Math.min(.84,.36*u/(i.pw+40)),M=Math.min(.8,.46*u/(2*i.pw+40));h=1+c*(v+(M-v)*r-1),this.root.position.x=-c*.23*u*o}this.root.scale.setScalar(l[4]*h),this.tilt.rotation.x=-14*Ln*(1-r),this.tilt.position.z=-.5*this.push.v;const p=i.portrait?0:-s/2,g=i.portrait?(i.ph+i.peek+i.shell)*xe/2:(i.peek-i.shell)*xe/2;this.frame.position.set(p*(1-r),g*(1-r)-this.cOpen,0);const x=this.leaf.v-this.lift.v;i.portrait?this.leafPivot.rotation.set(x,0,0):this.leafPivot.rotation.set(0,x,0),this.leafBlob&&(this.leafBlob.material.opacity=.55*ol((Math.PI-this.leaf.v)/Math.PI)),this.cards.forEach(v=>{v.mesh.position.y=v.y.v,v.mat.opacity=v.op.v,v.mat.color.setScalar(v.dim.v),v.mesh.visible=v.op.v>.01});const m=i.notes;let f=!1;this.notes.forEach((v,M)=>{const b=this.notesRise[M].v;v.slider.position.y=-(1-b)*m.hidden*xe+v.y.v,v.mat.opacity=v.op.v*(this.state.open||b>.02?1:0),v.mat.color.setScalar(v.dim.v),v.mesh.visible=b>.001&&v.op.v>.01,f=f||v.mesh.visible}),this.notesGroup.visible=f,this.flapPivot.rotation.x=this.flap.v*Ln;const _=ag(i);this.aiItems.forEach((v,M)=>{v.slider.position.y=this.stampRest[M]-(1-this.stamps[M].v)*.7*_.h*xe,v.mesh.visible=this.stamps[M].v>.001||this.flap.v<-1||this.aiSpreads[M].v.v>0}),this.root.updateMatrixWorld(!0),this.coinClip.copy(this.coinClipLocal).applyMatrix4(this.baseGroup.matrixWorld),this.spreadOut(this.cards,this.spreads,"work"),this.spreadOut(this.notes,this.noteSpreads,"projects"),this.spreadOut(this.aiItems,this.aiSpreads,"ai"),this.renderer.render(this.scene,this.camera),this.updateHotspots()}spreadOut(e,n,i){const r=this.L,s=this.camera,o=this.viewW,a=this.viewH,l=i==="ai"?2.2:1.2,c=2*(s.position.z-l)*Math.tan(s.fov*Ln/2)/a,u=i==="work",d=u?zu:i==="ai"?dA:hA,h=u?r.portrait?2:4:r.portrait?1:2,p=r.portrait?u?12:10:u?22:24,g=Math.ceil(e.length/h);let x=u?r.portrait?Math.min(220,(o-32-p)/2):Math.min(290,(o-96-3*p)/4):r.portrait?Math.min(o-32,(a-190-(g-1)*p)/g/d):Math.min(i==="ai"?520:540,(o-120-p)/2);x=Math.min(x,(a-200-(g-1)*p)/g/d);const m=x*d,f=a*.5+(r.portrait?0:10)-(g*m+(g-1)*p)/2,_=new ot,v=new ot,M=new ot,b=new I,R=new Vr,C=new I,P=new I,q=new Vr,y=new I;e.forEach((w,X)=>{var Ne;const O=n[X],j=O.v.v,Z=w.mesh,H=O.rest?O.rest.clone():new I(0,w.y.v,0);if(i==="ai"&&j>5e-4==(((Ne=w.mat.clippingPlanes)==null?void 0:Ne.length)===1)&&(w.mat.clippingPlanes=j>5e-4?[]:[this.coinClip]),j<=5e-4){Z.position.copy(H),Z.quaternion.identity(),Z.scale.set(1,1,1),w.mat.map!==O.map&&(w.mat.map=O.map),Z.castShadow=!0;return}const ee=ol(j/.3),L=ol((j-.3)/.7),J=u?.75*O.hPx*xe:.55*O.hPx*xe;_.copy(w.slider.matrixWorld).multiply(new ot().makeTranslation(H.x,H.y+ee*J,H.z)),_.decompose(b,R,C);const te=X%h,ie=Math.floor(X/h),ce=Math.min(h,e.length-ie*h),Ue=ce*x+(ce-1)*p,W=o/2-Ue/2+x/2+te*(x+p),oe=f+m/2+ie*(m+p);P.set((W-o/2)*c+s.position.x,s.position.y-(oe-a/2)*c,l+X*.002),q.setFromEuler(new ei(0,0,(X%2?1:-1)*(u?1.2:.8)*Ln));const he=x*c/(O.wPx*xe);y.set(he,he*O.wPx*d/O.hPx,he),b.lerp(P,L),R.slerp(q,L),C.lerp(y,L),v.compose(b,R,C),M.copy(w.slider.matrixWorld).invert(),v.premultiply(M).decompose(Z.position,Z.quaternion,Z.scale),Z.castShadow=j<.3;const ue=j>.55?O.face:O.map;w.mat.map!==ue&&(w.mat.map=ue),Z.updateMatrixWorld(!0)})}project(e){const n=e.clone().project(this.camera);return{x:(n.x+1)/2*this.viewW,y:(1-n.y)/2*this.viewH,ok:n.z<1&&n.z>-1}}updateHotspots(){if(this.hots.forEach(e=>{if(!e.el||e.el.hidden)return;const n=e.pts.map(i=>this.project(e.obj.localToWorld(i.clone())));if(n.some(i=>!i.ok)){e.el.style.visibility="hidden";return}e.el.style.visibility="",e.el.style.transform=mA(e.w,e.h,n)}),this.underEl){const e=this.L,n=e.portrait?-e.ph*xe-.1:-e.ph*xe/2-.1,i=this.project(this.frame.localToWorld(Hi(-this.frame.position.x,n,0)));this.underEl.style.transform=`translate(-50%, 0) translate(${i.x}px, ${i.y+22}px)`}}}function mA(t,e,n){const[i,r,s,o]=n,a=i.x-r.x+s.x-o.x,l=i.y-r.y+s.y-o.y;let c,u,d,h,p,g,x,m;if(Math.abs(a)<1e-9&&Math.abs(l)<1e-9)c=r.x-i.x,u=o.x-i.x,d=i.x,h=r.y-i.y,p=o.y-i.y,g=i.y,x=0,m=0;else{const _=r.x-s.x,v=o.x-s.x,M=r.y-s.y,b=o.y-s.y,R=_*b-v*M||1e-9;x=(a*b-v*l)/R,m=(_*l-a*M)/R,c=r.x-i.x+x*r.x,u=o.x-i.x+m*o.x,d=i.x,h=r.y-i.y+x*r.y,p=o.y-i.y+m*o.y,g=i.y}return`matrix3d(${[c/t,h/t,0,x/t,u/e,p/e,0,m/e,0,0,1,0,d,g,0,1].map(_=>+_.toFixed(6)).join(",")})`}const gA={open:!1,settled:!1,sel:null,leaving:!1,reseat:null,coin:!1,phase:"intro",entered:!1,docked:!1,spread:!1,peek:null,section:null},ll=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},Hu=t=>"0"+(t+1),fg=[{href:Ua.email,label:"Email",ext:!1},{href:Ua.linkedin,label:"LinkedIn",ext:!0},{href:Ua.website,label:"Medium blog",ext:!0},{href:Ua.resume,label:"Resume",ext:!0}],us={open:1900,pop:2900,unpop:3900,close:4400,dock:5400,menu:6200},vA=t=>t.spread?t.section:null,hg=(t,e)=>(t==="projects"?"spread-note-":t==="ai"?"spread-ai-":"spread-card-")+e;function _A({interior:t="tan",startAt:e=.5}){const[n,i]=ft.useState(gA),[r,s]=ft.useState(!1),[o,a]=ft.useState(!1),[l,c]=ft.useState(!1),[u,d]=ft.useState(()=>window.innerHeight),h=ft.useRef(n);h.current=n;const p=ft.useCallback(E=>i(B=>({...B,...E})),[]),g=ft.useRef([]),x=(E,B)=>{g.current.push(window.setTimeout(E,B))},m=E=>ll()?Math.min(E,60):E,f=ft.useRef(null),_=ft.useRef(null),v=ft.useRef(null),M=ft.useRef({}),b=ft.useRef(null),R=ft.useRef(null),C=ft.useRef(0),P=ft.useRef(null),q=E=>{P.current=E};ft.useEffect(()=>{var B;const E=(B=P.current)==null?void 0:B.call(P);E&&!E.hidden&&!E.closest("[inert]")&&(E.focus({preventScroll:!0}),P.current=null)}),ft.useEffect(()=>{let E;try{E=new pA(_.current,{interior:t,reducedMotion:ll(),onReady:()=>s(!0)})}catch{a(!0),s(!0);return}v.current=E,new URLSearchParams(location.search).has("debug")&&(window.__wallet=E),Object.entries(M.current).forEach(([ne,se])=>E.bindHotspot(ne,se)),E.bindUnder(document.getElementById("ws-under")),E.init();const B=()=>{d(window.innerHeight),E.resize()};return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B),g.current.forEach(clearTimeout),E.dispose(),v.current=null}},[t]),ft.useEffect(()=>{var E;(E=v.current)==null||E.setState({open:n.open,settled:n.settled,sel:n.sel,reseat:n.reseat,coin:n.coin,entered:n.entered,docked:n.docked,spread:vA(n),peek:n.peek})},[n.open,n.settled,n.sel,n.reseat,n.coin,n.entered,n.docked,n.spread,n.section,n.peek]),ft.useEffect(()=>{const E=f.current;if(!E)return;const B=new IntersectionObserver(([ne])=>{var se;(se=v.current)==null||se.setPaused(!ne.isIntersecting),c(ne.intersectionRatio>=e)},{threshold:[0,e]});return B.observe(E),()=>B.disconnect()},[e]),ft.useEffect(()=>{!r||!l||h.current.entered||(p({entered:!0,phase:"entering"}),x(()=>p({open:!0}),m(us.open)),x(()=>p({peek:"work"}),m(us.pop)),x(()=>p({peek:null}),m(us.unpop)),x(()=>p({open:!1}),m(us.close)),x(()=>p({docked:!0}),m(us.dock)),x(()=>p({phase:"docked"}),m(us.menu)))},[r,l]);const y=E=>B=>{var ne;M.current[E]=B,(ne=v.current)==null||ne.bindHotspot(E,B)},w=E=>({onPointerEnter:()=>{var B;return(B=v.current)==null?void 0:B.setHover(E)},onPointerLeave:()=>{var B;return(B=v.current)==null?void 0:B.setHover(null)},onFocus:B=>{var ne;B.currentTarget.matches(":focus-visible")&&((ne=v.current)==null||ne.setHover(E))},onBlur:()=>{var B;return(B=v.current)==null?void 0:B.setHover(null)}}),X=()=>{var E;return(E=f.current)==null?void 0:E.scrollIntoView({behavior:ll()?"auto":"smooth",block:"start"})},O=E=>{h.current.phase==="docked"&&(window.clearTimeout(C.current),p({peek:E,open:!0}))},j=()=>{h.current.phase==="docked"&&(window.clearTimeout(C.current),C.current=window.setTimeout(()=>p({peek:null,open:!1,coin:!1}),250))},Z=E=>{var ne;if(h.current.phase!=="docked")return;window.clearTimeout(C.current),(ne=v.current)==null||ne.setHover(null),X(),p({phase:"focus",section:E,peek:null,docked:!1,open:!0,settled:!1,coin:E==="ai"});const B=E==="work"?900:1300;x(()=>p({spread:!0}),m(B)),x(()=>{q(()=>M.current[hg(E,0)]),p({settled:!0})},m(B+1500))},H=()=>{const E=h.current;if(E.phase!=="focus"||E.sel)return;g.current.forEach(clearTimeout),g.current=[];const B=E.spread;p({spread:!1,settled:!1,coin:!1,peek:null,reseat:null});const ne=B?m(800):0;x(()=>p({open:!1}),ne),x(()=>p({docked:!0,section:null}),ne+m(700)),x(()=>{q(()=>{var se;return(se=R.current)==null?void 0:se.querySelector("button")}),p({phase:"docked"})},ne+m(1500))},ee=()=>{var B;const E=h.current;E.open&&E.phase==="focus"||E.phase!=="docked"&&E.phase!=="focus"||(window.clearTimeout(C.current),(B=v.current)==null||B.setHover(null),X(),p({open:!0,settled:!1,phase:"focus",docked:!1,peek:null,section:null}),x(()=>{q(()=>M.current["card-0"]),p({settled:!0})},m(1500)))},L=(E,B)=>{var se;const ne=h.current;!ne.open||ne.sel||ne.phase!=="focus"||((se=v.current)==null||se.setHover(null),p({sel:{kind:E,i:B},leaving:!1,reseat:null}),x(()=>{var pe;return(pe=b.current)==null?void 0:pe.focus({preventScroll:!0})},80))},J=()=>{const E=h.current;if(!E.sel||E.leaving)return;const B=E.sel;p({leaving:!0}),x(()=>{var se;p({sel:null,leaving:!1,reseat:B});const ne=h.current.spread?hg(h.current.section,B.i):B.kind+"-"+B.i;(se=M.current[ne])==null||se.focus({preventScroll:!0}),x(()=>p({reseat:null}),800)},ll()?180:600)},te=()=>p({coin:!h.current.coin});ft.useEffect(()=>{const E=B=>{B.key==="Escape"&&h.current.phase==="focus"&&!h.current.sel&&H()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]);const{open:ie,sel:ce,phase:Ue,spread:W}=n,oe=Ue==="focus",he=oe&&ie&&!ce&&!W?0:-1,ue=oe&&W&&n.settled&&!ce?0:-1,Ne=(ce==null?void 0:ce.kind)==="card",Re=(ce==null?void 0:ce.kind)==="note",Fe=["w-root","int-"+t,"ph-"+Ue,ie?"is-open":"",n.settled?"is-settled":"",ce?"has-sel":"",ie&&n.coin?"coin-open":"",W?"is-spread":"",r?"is-ready":""].join(" "),ke=Ue==="docked"?"Wallet ready. Choose a section.":Ne?Ar[ce.i].name+" card taken out.":Re?Es[ce.i].name+" note taken out.":W&&n.settled?n.section==="projects"?"Projects: 4 project notes.":n.section==="ai"?"Experiments with AI: 2 tickets.":"Work experience: 4 company cards.":oe&&ie?"Wallet open. 4 company cards and 4 project notes.":"";let Q=null;return Ne&&(Q=k.jsx(nS,{c:Ar[ce.i],num:Hu(ce.i),leaving:n.leaving,onBack:J,backRef:b})),Re&&(Q=k.jsx(rS,{p:Es[ce.i],num:Hu(ce.i),leaving:n.leaving,onBack:J,backRef:b})),k.jsxs("section",{ref:f,className:Fe,style:{height:u},"aria-label":`${Fo.name}'s work, presented as a 3D wallet`,children:[k.jsx("div",{className:"ws-bar",children:ce?k.jsxs("button",{className:"pill",type:"button",onClick:J,children:[k.jsx(Ff,{}),"Back"]}):oe?k.jsxs("button",{className:"pill",type:"button",onClick:H,children:[k.jsx(Ff,{}),"All sections"]}):null}),k.jsxs("div",{className:"stage",children:[k.jsx("canvas",{ref:_,className:"webgl","aria-hidden":"true"}),k.jsxs("div",{className:"hotspots",children:[k.jsx("button",{ref:y("cover"),className:"hs hs-cover",type:"button",hidden:ie||!n.entered,tabIndex:Ue==="docked"||oe?0:-1,"aria-label":`Open portfolio — ${Fo.name}, ${Fo.title}`,onClick:ee,...w("cover")}),fg.map((E,B)=>k.jsx("a",{ref:y("cover-icon-"+B),className:"hs hs-icon",href:E.href,hidden:ie||!n.entered,tabIndex:Ue==="docked"||oe?0:-1,"aria-label":E.label,...E.ext?{target:"_blank",rel:"noopener"}:{},...w("cover-icon-"+B)},"ci"+B)),Ar.map((E,B)=>k.jsx("button",{ref:y("card-"+B),className:"hs hs-card",type:"button",hidden:!ie||W,tabIndex:he,"aria-label":`${E.name}, ${E.role}, ${E.location}, ${E.duration}. Take the card out.`,onClick:()=>L("card",B),...w("card-"+B)},E.id)),Ar.map((E,B)=>k.jsx("button",{ref:y("spread-card-"+B),className:"hs hs-spread",type:"button",hidden:!W||n.section!=="work"||!n.settled,tabIndex:ue,"aria-label":`${E.name}, ${E.role}, ${E.duration}. View details.`,onClick:()=>L("card",B)},"sp"+E.id)),Es.map((E,B)=>k.jsx("button",{ref:y("note-"+B),className:"hs hs-note",type:"button",hidden:!ie||W,tabIndex:he,"aria-label":`${E.name}, ${E.category}, ${E.year}. Take the note out.`,onClick:()=>L("note",B),...w("note-"+B)},E.id)),Es.map((E,B)=>k.jsx("button",{ref:y("spread-note-"+B),className:"hs hs-spread",type:"button",hidden:!W||n.section!=="projects"||!n.settled,tabIndex:ue,"aria-label":`${E.name}, ${E.category}, ${E.year}. Read the case study.`,onClick:()=>L("note",B)},"sp"+E.id)),k.jsx("button",{ref:y("flap"),className:"hs hs-flap",type:"button",hidden:!ie||W,tabIndex:he,"aria-label":n.coin?"Close the coin pocket":"Open the coin pocket — AI projects","aria-expanded":n.coin,onClick:te,...w("flap")}),Cr.map((E,B)=>k.jsx("a",{ref:y("stamp-"+B),className:"hs",href:E.url,target:"_blank",rel:"noopener",hidden:!ie||!n.coin||W,tabIndex:he,"aria-label":`${E.name}, ${E.kind}. Opens in a new tab.`},E.id)),Cr.map((E,B)=>k.jsx("a",{ref:y("spread-ai-"+B),className:"hs hs-spread",href:E.url,target:"_blank",rel:"noopener",hidden:!W||n.section!=="ai"||!n.settled,tabIndex:ue,"aria-label":`${E.name}, ${E.kind}. ${E.text} Opens in a new tab.`},"sp"+E.id)),fg.map((E,B)=>k.jsx("a",{ref:y("icon-"+B),className:"hs hs-icon",href:E.href,hidden:!ie||W,tabIndex:he,"aria-label":E.label,...E.ext?{target:"_blank",rel:"noopener"}:{},...w("icon-"+B)},"ii"+B))]}),k.jsxs("div",{className:"under",id:"ws-under",children:[k.jsx("p",{className:"hint",children:"Tap the wallet to open"}),k.jsxs("p",{className:"legend","aria-hidden":"true",children:[k.jsxs("span",{className:"lg",children:[k.jsx("span",{className:"sw-card"}),"Cards — where I’ve worked"]}),k.jsxs("span",{className:"lg",children:[k.jsx("span",{className:"sw-note"}),"Notes — what I’ve built"]})]})]}),k.jsxs("nav",{className:"menu","aria-label":"Wallet sections",ref:R,onPointerLeave:j,...Ue==="docked"?{}:{inert:""},children:[k.jsx("p",{className:"menu-k",children:"What would you like to see?"}),Qy.map((E,B)=>k.jsxs("button",{type:"button",className:"menu-b"+(n.peek===E.id?" is-peek":""),style:{"--i":B},onPointerEnter:()=>O(E.id),onFocus:()=>O(E.id),onBlur:j,onClick:()=>Z(E.id),children:[k.jsx("span",{className:"menu-n",children:Hu(B)}),k.jsxs("span",{className:"menu-t",children:[E.label,k.jsx("span",{className:"menu-s",children:E.sub})]}),k.jsx("span",{className:"menu-a","aria-hidden":"true",children:"→"})]},E.id)),k.jsx("p",{className:"menu-tip",children:"Or tap the wallet to explore it yourself."})]}),W&&n.settled&&!ce?k.jsx("p",{className:"spread-k",children:n.section==="projects"?"Projects · tap a note for the full case study":n.section==="ai"?"Experiments with AI · tap a ticket to open it":"Work experience · tap a card for the full story"}):null,o?k.jsxs("div",{className:"nogl",children:[k.jsx("p",{children:"This part of the portfolio is a 3D wallet and needs WebGL."}),k.jsx("p",{children:Ar.map(E=>E.name).join(" · ")})]}):null]}),k.jsx("p",{className:"sr","aria-live":"polite",children:ke}),Q]})}Gu.createRoot(document.getElementById("wallet-section")).render(k.jsx(H_.StrictMode,{children:k.jsx(_A,{interior:"tan"})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fy={exports:{}},du={},jy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),QE=Symbol.for("react.portal"),YE=Symbol.for("react.fragment"),XE=Symbol.for("react.strict_mode"),JE=Symbol.for("react.profiler"),ZE=Symbol.for("react.provider"),eT=Symbol.for("react.context"),tT=Symbol.for("react.forward_ref"),nT=Symbol.for("react.suspense"),rT=Symbol.for("react.memo"),iT=Symbol.for("react.lazy"),om=Symbol.iterator;function sT(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var By={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zy=Object.assign,$y={};function gs(t,e,n){this.props=t,this.context=e,this.refs=$y,this.updater=n||By}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hy(){}Hy.prototype=gs.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=$y,this.updater=n||By}var Ed=wd.prototype=new Hy;Ed.constructor=wd;zy(Ed,gs.prototype);Ed.isPureReactComponent=!0;var am=Array.isArray,Wy=Object.prototype.hasOwnProperty,Td={current:null},qy={key:!0,ref:!0,__self:!0,__source:!0};function Ky(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wy.call(e,r)&&!qy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:Td.current}}function oT(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function aT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aT(""+t.key):e.toString(36)}function rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case QE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dc(o,0):r,am(i)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),rl(i,e,n,"",function(h){return h})):i!=null&&(Id(i)&&(i=oT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",am(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+dc(s,l);o+=rl(s,e,n,u,i)}else if(u=sT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+dc(s,l++),o+=rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},il={transition:null},uT={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:il,ReactCurrentOwner:Td};function Gy(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=gs;re.Fragment=YE;re.Profiler=JE;re.PureComponent=wd;re.StrictMode=XE;re.Suspense=nT;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT;re.act=Gy;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Td.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Wy.call(e,u)&&!qy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:eT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZE,_context:t},t.Consumer=t};re.createElement=Ky;re.createFactory=function(t){var e=Ky.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:tT,render:t}};re.isValidElement=Id;re.lazy=function(t){return{$$typeof:iT,_payload:{_status:-1,_result:t},_init:lT}};re.memo=function(t,e){return{$$typeof:rT,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};re.unstable_act=Gy;re.useCallback=function(t,e){return Tt.current.useCallback(t,e)};re.useContext=function(t){return Tt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Tt.current.useEffect(t,e)};re.useId=function(){return Tt.current.useId()};re.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Tt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};re.useRef=function(t){return Tt.current.useRef(t)};re.useState=function(t){return Tt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Tt.current.useTransition()};re.version="18.3.1";jy.exports=re;var Ue=jy.exports;const B=vd(Ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=Ue,hT=Symbol.for("react.element"),dT=Symbol.for("react.fragment"),fT=Object.prototype.hasOwnProperty,pT=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mT={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fT.call(e,r)&&!mT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hT,type:t,key:s,ref:o,props:i,_owner:pT.current}}du.Fragment=dT;du.jsx=Qy;du.jsxs=Qy;Fy.exports=du;var z=Fy.exports,Yy={exports:{}},jt={},Xy={exports:{}},Jy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,W){var J=V.length;V.push(W);e:for(;0<J;){var Q=J-1>>>1,K=V[Q];if(0<i(K,W))V[Q]=W,V[J]=K,J=Q;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var W=V[0],J=V.pop();if(J!==W){V[0]=J;e:for(var Q=0,K=V.length,Z=K>>>1;Q<Z;){var be=2*(Q+1)-1,qe=V[be],ce=be+1,Dt=V[ce];if(0>i(qe,J))ce<K&&0>i(Dt,qe)?(V[Q]=Dt,V[ce]=J,Q=ce):(V[Q]=qe,V[be]=J,Q=be);else if(ce<K&&0>i(Dt,J))V[Q]=Dt,V[ce]=J,Q=ce;else break e}}return W}function i(V,W){var J=V.sortIndex-W.sortIndex;return J!==0?J:V.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,y=null,p=3,R=!1,P=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=V)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function N(V){if(x=!1,E(V),!P)if(n(u)!==null)P=!0,pt(b);else{var W=n(h);W!==null&&mt(N,W.startTime-V)}}function b(V,W){P=!1,x&&(x=!1,S(g),g=-1),R=!0;var J=p;try{for(E(W),y=n(u);y!==null&&(!(y.expirationTime>W)||V&&!A());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,p=y.priorityLevel;var K=Q(y.expirationTime<=W);W=t.unstable_now(),typeof K=="function"?y.callback=K:y===n(u)&&r(u),E(W)}else r(u);y=n(u)}if(y!==null)var Z=!0;else{var be=n(h);be!==null&&mt(N,be.startTime-W),Z=!1}return Z}finally{y=null,p=J,R=!1}}var U=!1,w=null,g=-1,v=5,I=-1;function A(){return!(t.unstable_now()-I<v)}function k(){if(w!==null){var V=t.unstable_now();I=V;var W=!0;try{W=w(!0,V)}finally{W?T():(U=!1,w=null)}}else U=!1}var T;if(typeof _=="function")T=function(){_(k)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,St=nt.port2;nt.port1.onmessage=k,T=function(){St.postMessage(null)}}else T=function(){O(k,0)};function pt(V){w=V,U||(U=!0,T())}function mt(V,W){g=O(function(){V(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,pt(b))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var J=p;p=W;try{return V()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,W){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var J=p;p=V;try{return W()}finally{p=J}},t.unstable_scheduleCallback=function(V,W,J){var Q=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Q+J:Q):J=Q,V){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=J+K,V={id:f++,callback:W,priorityLevel:V,startTime:J,expirationTime:K,sortIndex:-1},J>Q?(V.sortIndex=J,e(h,V),n(u)===null&&V===n(h)&&(x?(S(g),g=-1):x=!0,mt(N,J-Q))):(V.sortIndex=K,e(u,V),P||R||(P=!0,pt(b))),V},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(V){var W=p;return function(){var J=p;p=W;try{return V.apply(this,arguments)}finally{p=J}}}})(Jy);Xy.exports=Jy;var gT=Xy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yT=Ue,Ft=gT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zy=new Set,Eo={};function _i(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Zy.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,_T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,um={},cm={};function vT(t){return Zc.call(cm,t)?!0:Zc.call(um,t)?!1:_T.test(t)?cm[t]=!0:(um[t]=!0,!1)}function wT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ET(t,e,n,r){if(e===null||typeof e>"u"||wT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,Rd);et[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,Rd);et[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,Rd);et[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ET(e,n,i,r)&&(n=null),r||i===null?vT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=yT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),e_=Symbol.for("react.provider"),t_=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),n_=Symbol.for("react.offscreen"),hm=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,fc;function Qs(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var pc=!1;function mc(t,e){if(!t||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function TT(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=mc(t.type,!1),t;case 11:return t=mc(t.type.render,!1),t;case 1:return t=mc(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case bi:return"Portal";case eh:return"Profiler";case kd:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case t_:return(t.displayName||"Context")+".Consumer";case e_:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cd:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function IT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ST(t){var e=r_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=ST(t))}function i_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=r_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s_(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function sh(t,e){s_(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ys(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function o_(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,l_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RT=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){RT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function u_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function c_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=u_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AT=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(AT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Ki=null,Gi=null;function gm(t){if(t=Xo(t)){if(typeof dh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=yu(e),dh(t.stateNode,t.type,e))}}function h_(t){Ki?Gi?Gi.push(t):Gi=[t]:Ki=t}function d_(){if(Ki){var t=Ki,e=Gi;if(Gi=Ki=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function f_(t,e){return t(e)}function p_(){}var gc=!1;function m_(t,e,n){if(gc)return t(e,n);gc=!0;try{return f_(t,e,n)}finally{gc=!1,(Ki!==null||Gi!==null)&&(p_(),d_())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var fh=!1;if(jn)try{var js={};Object.defineProperty(js,"passive",{get:function(){fh=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{fh=!1}function kT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var so=!1,Al=null,kl=!1,ph=null,PT={onError:function(t){so=!0,Al=t}};function CT(t,e,n,r,i,s,o,l,u){so=!1,Al=null,kT.apply(PT,arguments)}function NT(t,e,n,r,i,s,o,l,u){if(CT.apply(this,arguments),so){if(so){var h=Al;so=!1,Al=null}else throw Error(F(198));kl||(kl=!0,ph=h)}}function vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(vi(t)!==t)throw Error(F(188))}function xT(t){var e=t.alternate;if(!e){if(e=vi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ym(i),t;if(s===r)return ym(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function y_(t){return t=xT(t),t!==null?__(t):null}function __(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=__(t);if(e!==null)return e;t=t.sibling}return null}var v_=Ft.unstable_scheduleCallback,_m=Ft.unstable_cancelCallback,DT=Ft.unstable_shouldYield,OT=Ft.unstable_requestPaint,Oe=Ft.unstable_now,bT=Ft.unstable_getCurrentPriorityLevel,xd=Ft.unstable_ImmediatePriority,w_=Ft.unstable_UserBlockingPriority,Pl=Ft.unstable_NormalPriority,VT=Ft.unstable_LowPriority,E_=Ft.unstable_IdlePriority,fu=null,gn=null;function LT(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:FT,MT=Math.log,UT=Math.LN2;function FT(t){return t>>>=0,t===0?32:31-(MT(t)/UT|0)|0}var Oa=64,ba=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xs(l):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function jT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=jT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T_(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function zT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function I_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var S_,Od,R_,A_,k_,gh=!1,Va=[],pr=null,mr=null,gr=null,So=new Map,Ro=new Map,sr=[],$T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xo(e),e!==null&&Od(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HT(t,e,n,r,i){switch(e){case"focusin":return pr=Bs(pr,t,e,n,r,i),!0;case"dragenter":return mr=Bs(mr,t,e,n,r,i),!0;case"mouseover":return gr=Bs(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return So.set(s,Bs(So.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,Bs(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function P_(t){var e=Yr(t.target);if(e!==null){var n=vi(e);if(n!==null){if(e=n.tag,e===13){if(e=g_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){R_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hh=r,n.target.dispatchEvent(r),hh=null}else return e=Xo(n),e!==null&&Od(e),t.blockedOn=n,!1;e.shift()}return!0}function wm(t,e,n){sl(t)&&n.delete(e)}function WT(){gh=!1,pr!==null&&sl(pr)&&(pr=null),mr!==null&&sl(mr)&&(mr=null),gr!==null&&sl(gr)&&(gr=null),So.forEach(wm),Ro.forEach(wm)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,WT)))}function Ao(t){function e(i){return zs(i,t)}if(0<Va.length){zs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&zs(pr,t),mr!==null&&zs(mr,t),gr!==null&&zs(gr,t),So.forEach(e),Ro.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&sr.shift()}var Qi=Gn.ReactCurrentBatchConfig,Nl=!0;function qT(t,e,n,r){var i=de,s=Qi.transition;Qi.transition=null;try{de=1,bd(t,e,n,r)}finally{de=i,Qi.transition=s}}function KT(t,e,n,r){var i=de,s=Qi.transition;Qi.transition=null;try{de=4,bd(t,e,n,r)}finally{de=i,Qi.transition=s}}function bd(t,e,n,r){if(Nl){var i=yh(t,e,n,r);if(i===null)kc(t,e,r,xl,n),vm(t,r);else if(HT(i,t,e,n,r))r.stopPropagation();else if(vm(t,r),e&4&&-1<$T.indexOf(t)){for(;i!==null;){var s=Xo(i);if(s!==null&&S_(s),s=yh(t,e,n,r),s===null&&kc(t,e,r,xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var xl=null;function yh(t,e,n,r){if(xl=null,t=Nd(r),t=Yr(t),t!==null)if(e=vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=g_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function C_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bT()){case xd:return 1;case w_:return 4;case Pl:case VT:return 16;case E_:return 536870912;default:return 16}default:return 16}}var hr=null,Vd=null,ol=null;function N_(){if(ol)return ol;var t,e=Vd,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ol=i.slice(t,1<r?1-r:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Em(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Em,this.isPropagationStopped=Em,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=Bt(ys),Yo=Se({},ys,{view:0,detail:0}),GT=Bt(Yo),_c,vc,$s,pu=Se({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(_c=t.screenX-$s.screenX,vc=t.screenY-$s.screenY):vc=_c=0,$s=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Tm=Bt(pu),QT=Se({},pu,{dataTransfer:0}),YT=Bt(QT),XT=Se({},Yo,{relatedTarget:0}),wc=Bt(XT),JT=Se({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),ZT=Bt(JT),eI=Se({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tI=Bt(eI),nI=Se({},ys,{data:0}),Im=Bt(nI),rI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sI[t])?!!e[t]:!1}function Md(){return oI}var aI=Se({},Yo,{key:function(t){if(t.key){var e=rI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lI=Bt(aI),uI=Se({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Bt(uI),cI=Se({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),hI=Bt(cI),dI=Se({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),fI=Bt(dI),pI=Se({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mI=Bt(pI),gI=[9,13,27,32],Ud=jn&&"CompositionEvent"in window,oo=null;jn&&"documentMode"in document&&(oo=document.documentMode);var yI=jn&&"TextEvent"in window&&!oo,x_=jn&&(!Ud||oo&&8<oo&&11>=oo),Rm=" ",Am=!1;function D_(t,e){switch(t){case"keyup":return gI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function _I(t,e){switch(t){case"compositionend":return O_(e);case"keypress":return e.which!==32?null:(Am=!0,Rm);case"textInput":return t=e.data,t===Rm&&Am?null:t;default:return null}}function vI(t,e){if(Li)return t==="compositionend"||!Ud&&D_(t,e)?(t=N_(),ol=Vd=hr=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x_&&e.locale!=="ko"?null:e.data;default:return null}}var wI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wI[t.type]:e==="textarea"}function b_(t,e,n,r){h_(r),e=Dl(e,"onChange"),0<e.length&&(n=new Ld("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ao=null,ko=null;function EI(t){W_(t,0)}function mu(t){var e=Fi(t);if(i_(e))return t}function TI(t,e){if(t==="change")return e}var V_=!1;if(jn){var Ec;if(jn){var Tc="oninput"in document;if(!Tc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Tc=typeof Pm.oninput=="function"}Ec=Tc}else Ec=!1;V_=Ec&&(!document.documentMode||9<document.documentMode)}function Cm(){ao&&(ao.detachEvent("onpropertychange",L_),ko=ao=null)}function L_(t){if(t.propertyName==="value"&&mu(ko)){var e=[];b_(e,ko,t,Nd(t)),m_(EI,e)}}function II(t,e,n){t==="focusin"?(Cm(),ao=e,ko=n,ao.attachEvent("onpropertychange",L_)):t==="focusout"&&Cm()}function SI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(ko)}function RI(t,e){if(t==="click")return mu(e)}function AI(t,e){if(t==="input"||t==="change")return mu(e)}function kI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:kI;function Po(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function M_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U_(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PI(t){var e=U_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M_(n.ownerDocument.documentElement,n)){if(r!==null&&Fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xm(n,s);var o=xm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CI=jn&&"documentMode"in document&&11>=document.documentMode,Mi=null,_h=null,lo=null,vh=!1;function Dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vh||Mi==null||Mi!==Rl(r)||(r=Mi,"selectionStart"in r&&Fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Po(lo,r)||(lo=r,r=Dl(_h,"onSelect"),0<r.length&&(e=new Ld("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mi)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Ic={},F_={};jn&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function gu(t){if(Ic[t])return Ic[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F_)return Ic[t]=e[n];return t}var j_=gu("animationend"),B_=gu("animationiteration"),z_=gu("animationstart"),$_=gu("transitionend"),H_=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){H_.set(t,e),_i(e,[t])}for(var Sc=0;Sc<Om.length;Sc++){var Rc=Om[Sc],NI=Rc.toLowerCase(),xI=Rc[0].toUpperCase()+Rc.slice(1);Dr(NI,"on"+xI)}Dr(j_,"onAnimationEnd");Dr(B_,"onAnimationIteration");Dr(z_,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr($_,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NT(r,e,void 0,t),t.currentTarget=null}function W_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;bm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;bm(i,l,h),s=u}}}if(kl)throw t=ph,kl=!1,ph=null,t}function _e(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var r=t+"__bubble";n.has(r)||(q_(e,t,2,!1),n.add(r))}function Ac(t,e,n){var r=0;e&&(r|=4),q_(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Ua]){t[Ua]=!0,Zy.forEach(function(n){n!=="selectionchange"&&(DI.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Ac("selectionchange",!1,e))}}function q_(t,e,n,r){switch(C_(e)){case 1:var i=qT;break;case 4:i=KT;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Yr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}m_(function(){var h=s,f=Nd(n),y=[];e:{var p=H_.get(t);if(p!==void 0){var R=Ld,P=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":R=lI;break;case"focusin":P="focus",R=wc;break;case"focusout":P="blur",R=wc;break;case"beforeblur":case"afterblur":R=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=YT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=hI;break;case j_:case B_:case z_:R=ZT;break;case $_:R=fI;break;case"scroll":R=GT;break;case"wheel":R=mI;break;case"copy":case"cut":case"paste":R=tI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Sm}var x=(e&4)!==0,O=!x&&t==="scroll",S=x?p!==null?p+"Capture":null:p;x=[];for(var _=h,E;_!==null;){E=_;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,S!==null&&(N=Io(_,S),N!=null&&x.push(No(_,N,E)))),O)break;_=_.return}0<x.length&&(p=new R(p,P,null,n,f),y.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",p&&n!==hh&&(P=n.relatedTarget||n.fromElement)&&(Yr(P)||P[Bn]))break e;if((R||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,R?(P=n.relatedTarget||n.toElement,R=h,P=P?Yr(P):null,P!==null&&(O=vi(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(R=null,P=h),R!==P)){if(x=Tm,N="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Sm,N="onPointerLeave",S="onPointerEnter",_="pointer"),O=R==null?p:Fi(R),E=P==null?p:Fi(P),p=new x(N,_+"leave",R,n,f),p.target=O,p.relatedTarget=E,N=null,Yr(f)===h&&(x=new x(S,_+"enter",P,n,f),x.target=E,x.relatedTarget=O,N=x),O=N,R&&P)t:{for(x=R,S=P,_=0,E=x;E;E=Ni(E))_++;for(E=0,N=S;N;N=Ni(N))E++;for(;0<_-E;)x=Ni(x),_--;for(;0<E-_;)S=Ni(S),E--;for(;_--;){if(x===S||S!==null&&x===S.alternate)break t;x=Ni(x),S=Ni(S)}x=null}else x=null;R!==null&&Vm(y,p,R,x,!1),P!==null&&O!==null&&Vm(y,O,P,x,!0)}}e:{if(p=h?Fi(h):window,R=p.nodeName&&p.nodeName.toLowerCase(),R==="select"||R==="input"&&p.type==="file")var b=TI;else if(km(p))if(V_)b=AI;else{b=SI;var U=II}else(R=p.nodeName)&&R.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=RI);if(b&&(b=b(t,h))){b_(y,b,n,f);break e}U&&U(t,p,h),t==="focusout"&&(U=p._wrapperState)&&U.controlled&&p.type==="number"&&oh(p,"number",p.value)}switch(U=h?Fi(h):window,t){case"focusin":(km(U)||U.contentEditable==="true")&&(Mi=U,_h=h,lo=null);break;case"focusout":lo=_h=Mi=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,Dm(y,n,f);break;case"selectionchange":if(CI)break;case"keydown":case"keyup":Dm(y,n,f)}var w;if(Ud)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Li?D_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(x_&&n.locale!=="ko"&&(Li||g!=="onCompositionStart"?g==="onCompositionEnd"&&Li&&(w=N_()):(hr=f,Vd="value"in hr?hr.value:hr.textContent,Li=!0)),U=Dl(h,g),0<U.length&&(g=new Im(g,t,null,n,f),y.push({event:g,listeners:U}),w?g.data=w:(w=O_(n),w!==null&&(g.data=w)))),(w=yI?_I(t,n):vI(t,n))&&(h=Dl(h,"onBeforeInput"),0<h.length&&(f=new Im("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:h}),f.data=w))}W_(y,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Io(t,n),s!=null&&r.unshift(No(t,s,i)),s=Io(t,e),s!=null&&r.push(No(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Io(n,s),u!=null&&o.unshift(No(n,u,l))):i||(u=Io(n,s),u!=null&&o.push(No(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OI=/\r\n?/g,bI=/\u0000|\uFFFD/g;function Lm(t){return(typeof t=="string"?t:""+t).replace(OI,`
`).replace(bI,"")}function Fa(t,e,n){if(e=Lm(e),Lm(t)!==e&&n)throw Error(F(425))}function Ol(){}var wh=null,Eh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,VI=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,LI=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(t){return Mm.resolve(null).then(t).catch(MI)}:Ih;function MI(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _s=Math.random().toString(36).slice(2),pn="__reactFiber$"+_s,xo="__reactProps$"+_s,Bn="__reactContainer$"+_s,Sh="__reactEvents$"+_s,UI="__reactListeners$"+_s,FI="__reactHandles$"+_s;function Yr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[pn])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[pn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function yu(t){return t[xo]||null}var Rh=[],ji=-1;function Or(t){return{current:t}}function ve(t){0>ji||(t.current=Rh[ji],Rh[ji]=null,ji--)}function ge(t,e){ji++,Rh[ji]=t.current,t.current=e}var kr={},dt=Or(kr),Ct=Or(!1),si=kr;function rs(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function bl(){ve(Ct),ve(dt)}function Fm(t,e,n){if(dt.current!==kr)throw Error(F(168));ge(dt,e),ge(Ct,n)}function K_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,IT(t)||"Unknown",i));return Se({},n,r)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,si=dt.current,ge(dt,t),ge(Ct,Ct.current),!0}function jm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=K_(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,ve(Ct),ve(dt),ge(dt,t)):ve(Ct),ge(Ct,n)}var xn=null,_u=!1,Cc=!1;function G_(t){xn===null?xn=[t]:xn.push(t)}function jI(t){_u=!0,G_(t)}function br(){if(!Cc&&xn!==null){Cc=!0;var t=0,e=de;try{var n=xn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,_u=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),v_(xd,br),i}finally{de=e,Cc=!1}}return null}var Bi=[],zi=0,Ll=null,Ml=0,$t=[],Ht=0,oi=null,On=1,bn="";function Kr(t,e){Bi[zi++]=Ml,Bi[zi++]=Ll,Ll=t,Ml=e}function Q_(t,e,n){$t[Ht++]=On,$t[Ht++]=bn,$t[Ht++]=oi,oi=t;var r=On;t=bn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-rn(e)+i|n<<i|r,bn=s+t}else On=1<<s|n<<i|r,bn=t}function jd(t){t.return!==null&&(Kr(t,1),Q_(t,1,0))}function Bd(t){for(;t===Ll;)Ll=Bi[--zi],Bi[zi]=null,Ml=Bi[--zi],Bi[zi]=null;for(;t===oi;)oi=$t[--Ht],$t[Ht]=null,bn=$t[--Ht],$t[Ht]=null,On=$t[--Ht],$t[Ht]=null}var Ut=null,Lt=null,we=!1,tn=null;function Y_(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:On,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Lt=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(we){var e=Lt;if(e){var n=e;if(!Bm(t,e)){if(Ah(t))throw Error(F(418));e=yr(n.nextSibling);var r=Ut;e&&Bm(t,e)?Y_(r,n):(t.flags=t.flags&-4097|2,we=!1,Ut=t)}}else{if(Ah(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,Ut=t}}}function zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function ja(t){if(t!==Ut)return!1;if(!we)return zm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=Lt)){if(Ah(t))throw X_(),Error(F(418));for(;e;)Y_(t,e),e=yr(e.nextSibling)}if(zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ut?yr(t.stateNode.nextSibling):null;return!0}function X_(){for(var t=Lt;t;)t=yr(t.nextSibling)}function is(){Lt=Ut=null,we=!1}function zd(t){tn===null?tn=[t]:tn.push(t)}var BI=Gn.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function J_(t){function e(S,_){if(t){var E=S.deletions;E===null?(S.deletions=[_],S.flags|=16):E.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=Er(S,_),S.index=0,S.sibling=null,S}function s(S,_,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<_?(S.flags|=2,_):E):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,_,E,N){return _===null||_.tag!==6?(_=Lc(E,S.mode,N),_.return=S,_):(_=i(_,E),_.return=S,_)}function u(S,_,E,N){var b=E.type;return b===Vi?f(S,_,E.props.children,N,E.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rr&&$m(b)===_.type)?(N=i(_,E.props),N.ref=Hs(S,_,E),N.return=S,N):(N=pl(E.type,E.key,E.props,null,S.mode,N),N.ref=Hs(S,_,E),N.return=S,N)}function h(S,_,E,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Mc(E,S.mode,N),_.return=S,_):(_=i(_,E.children||[]),_.return=S,_)}function f(S,_,E,N,b){return _===null||_.tag!==7?(_=ni(E,S.mode,N,b),_.return=S,_):(_=i(_,E),_.return=S,_)}function y(S,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Lc(""+_,S.mode,E),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return E=pl(_.type,_.key,_.props,null,S.mode,E),E.ref=Hs(S,null,_),E.return=S,E;case bi:return _=Mc(_,S.mode,E),_.return=S,_;case rr:var N=_._init;return y(S,N(_._payload),E)}if(Ys(_)||Fs(_))return _=ni(_,S.mode,E,null),_.return=S,_;Ba(S,_)}return null}function p(S,_,E,N){var b=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:l(S,_,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Na:return E.key===b?u(S,_,E,N):null;case bi:return E.key===b?h(S,_,E,N):null;case rr:return b=E._init,p(S,_,b(E._payload),N)}if(Ys(E)||Fs(E))return b!==null?null:f(S,_,E,N,null);Ba(S,E)}return null}function R(S,_,E,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(E)||null,l(_,S,""+N,b);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Na:return S=S.get(N.key===null?E:N.key)||null,u(_,S,N,b);case bi:return S=S.get(N.key===null?E:N.key)||null,h(_,S,N,b);case rr:var U=N._init;return R(S,_,E,U(N._payload),b)}if(Ys(N)||Fs(N))return S=S.get(E)||null,f(_,S,N,b,null);Ba(_,N)}return null}function P(S,_,E,N){for(var b=null,U=null,w=_,g=_=0,v=null;w!==null&&g<E.length;g++){w.index>g?(v=w,w=null):v=w.sibling;var I=p(S,w,E[g],N);if(I===null){w===null&&(w=v);break}t&&w&&I.alternate===null&&e(S,w),_=s(I,_,g),U===null?b=I:U.sibling=I,U=I,w=v}if(g===E.length)return n(S,w),we&&Kr(S,g),b;if(w===null){for(;g<E.length;g++)w=y(S,E[g],N),w!==null&&(_=s(w,_,g),U===null?b=w:U.sibling=w,U=w);return we&&Kr(S,g),b}for(w=r(S,w);g<E.length;g++)v=R(w,S,g,E[g],N),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?g:v.key),_=s(v,_,g),U===null?b=v:U.sibling=v,U=v);return t&&w.forEach(function(A){return e(S,A)}),we&&Kr(S,g),b}function x(S,_,E,N){var b=Fs(E);if(typeof b!="function")throw Error(F(150));if(E=b.call(E),E==null)throw Error(F(151));for(var U=b=null,w=_,g=_=0,v=null,I=E.next();w!==null&&!I.done;g++,I=E.next()){w.index>g?(v=w,w=null):v=w.sibling;var A=p(S,w,I.value,N);if(A===null){w===null&&(w=v);break}t&&w&&A.alternate===null&&e(S,w),_=s(A,_,g),U===null?b=A:U.sibling=A,U=A,w=v}if(I.done)return n(S,w),we&&Kr(S,g),b;if(w===null){for(;!I.done;g++,I=E.next())I=y(S,I.value,N),I!==null&&(_=s(I,_,g),U===null?b=I:U.sibling=I,U=I);return we&&Kr(S,g),b}for(w=r(S,w);!I.done;g++,I=E.next())I=R(w,S,g,I.value,N),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?g:I.key),_=s(I,_,g),U===null?b=I:U.sibling=I,U=I);return t&&w.forEach(function(k){return e(S,k)}),we&&Kr(S,g),b}function O(S,_,E,N){if(typeof E=="object"&&E!==null&&E.type===Vi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Na:e:{for(var b=E.key,U=_;U!==null;){if(U.key===b){if(b=E.type,b===Vi){if(U.tag===7){n(S,U.sibling),_=i(U,E.props.children),_.return=S,S=_;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rr&&$m(b)===U.type){n(S,U.sibling),_=i(U,E.props),_.ref=Hs(S,U,E),_.return=S,S=_;break e}n(S,U);break}else e(S,U);U=U.sibling}E.type===Vi?(_=ni(E.props.children,S.mode,N,E.key),_.return=S,S=_):(N=pl(E.type,E.key,E.props,null,S.mode,N),N.ref=Hs(S,_,E),N.return=S,S=N)}return o(S);case bi:e:{for(U=E.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(S,_.sibling),_=i(_,E.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=Mc(E,S.mode,N),_.return=S,S=_}return o(S);case rr:return U=E._init,O(S,_,U(E._payload),N)}if(Ys(E))return P(S,_,E,N);if(Fs(E))return x(S,_,E,N);Ba(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,E),_.return=S,S=_):(n(S,_),_=Lc(E,S.mode,N),_.return=S,S=_),o(S)):n(S,_)}return O}var ss=J_(!0),Z_=J_(!1),Ul=Or(null),Fl=null,$i=null,$d=null;function Hd(){$d=$i=Fl=null}function Wd(t){var e=Ul.current;ve(Ul),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){Fl=t,$d=$i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if($d!==t)if(t={context:t,memoizedValue:e,next:null},$i===null){if(Fl===null)throw Error(F(308));$i=t,Fl.dependencies={lanes:0,firstContext:t}}else $i=$i.next=t;return e}var Xr=null;function qd(t){Xr===null?Xr=[t]:Xr.push(t)}function ev(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dd(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;o=0,f=h=u=null,l=s;do{var p=l.lane,R=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(p=e,R=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){y=P.call(R,y,p);break e}y=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,p=typeof P=="function"?P.call(R,y,p):P,p==null)break e;y=Se({},y,p);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else R={eventTime:R,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=y):f=f.next=R,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(u=y),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=y}}function Wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Jo={},yn=Or(Jo),Do=Or(Jo),Oo=Or(Jo);function Jr(t){if(t===Jo)throw Error(F(174));return t}function Gd(t,e){switch(ge(Oo,e),ge(Do,t),ge(yn,Jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}ve(yn),ge(yn,e)}function os(){ve(yn),ve(Do),ve(Oo)}function nv(t){Jr(Oo.current);var e=Jr(yn.current),n=lh(e,t.type);e!==n&&(ge(Do,t),ge(yn,n))}function Qd(t){Do.current===t&&(ve(yn),ve(Do))}var Te=Or(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Yd(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var ul=Gn.ReactCurrentDispatcher,xc=Gn.ReactCurrentBatchConfig,ai=0,Ie=null,Fe=null,He=null,zl=!1,uo=!1,bo=0,zI=0;function ot(){throw Error(F(321))}function Xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Jd(t,e,n,r,i,s){if(ai=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?qI:KI,t=n(r,i),uo){s=0;do{if(uo=!1,bo=0,25<=s)throw Error(F(301));s+=1,He=Fe=null,e.updateQueue=null,ul.current=GI,t=n(r,i)}while(uo)}if(ul.current=$l,e=Fe!==null&&Fe.next!==null,ai=0,He=Fe=Ie=null,zl=!1,e)throw Error(F(300));return t}function Zd(){var t=bo!==0;return bo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ie.memoizedState=He=t:He=He.next=t,He}function Qt(){if(Fe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?Ie.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(F(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Ie.memoizedState=He=t:He=He.next=t}return He}function Vo(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((ai&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Ie.lanes|=f,li|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rv(){}function iv(t,e){var n=Ie,r=Qt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,ef(av.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Lo(9,ov.bind(null,n,r,i,e),void 0,null),We===null)throw Error(F(349));ai&30||sv(n,e,i)}return i}function sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ov(t,e,n,r){e.value=n,e.getSnapshot=r,lv(e)&&uv(t)}function av(t,e,n){return n(function(){lv(e)&&uv(t)})}function lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function uv(t){var e=zn(t,1);e!==null&&sn(e,t,1,-1)}function qm(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=WI.bind(null,Ie,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cv(){return Qt().memoizedState}function cl(t,e,n,r){var i=fn();Ie.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Xd(r,o.deps)){i.memoizedState=Lo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function Km(t,e){return cl(8390656,8,t,e)}function ef(t,e){return vu(2048,8,t,e)}function hv(t,e){return vu(4,2,t,e)}function dv(t,e){return vu(4,4,t,e)}function fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pv(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,fv.bind(null,e,t),n)}function tf(){}function mv(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gv(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yv(t,e,n){return ai&21?(ln(n,e)||(n=T_(),Ie.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function $I(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=xc.transition;xc.transition={};try{t(!1),e()}finally{de=n,xc.transition=r}}function _v(){return Qt().memoizedState}function HI(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vv(t))wv(e,n);else if(n=ev(t,e,n,r),n!==null){var i=Et();sn(n,t,r,i),Ev(n,e,r)}}function WI(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(t))wv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(i.next=i,qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ev(t,e,i,r),n!==null&&(i=Et(),sn(n,t,r,i),Ev(n,e,r))}}function vv(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function wv(t,e){uo=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ev(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dd(t,n)}}var $l={readContext:Gt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},qI={readContext:Gt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HI.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:qm,useDebugValue:tf,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=qm(!1),e=t[0];return t=$I.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=fn();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),We===null)throw Error(F(349));ai&30||sv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Km(av.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,ov.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=We.identifierPrefix;if(we){var n=bn,r=On;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KI={readContext:Gt,useCallback:mv,useContext:Gt,useEffect:ef,useImperativeHandle:pv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:gv,useReducer:Dc,useRef:cv,useState:function(){return Dc(Vo)},useDebugValue:tf,useDeferredValue:function(t){var e=Qt();return yv(e,Fe.memoizedState,t)},useTransition:function(){var t=Dc(Vo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:iv,useId:_v,unstable_isNewReconciler:!1},GI={readContext:Gt,useCallback:mv,useContext:Gt,useEffect:ef,useImperativeHandle:pv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:gv,useReducer:Oc,useRef:cv,useState:function(){return Oc(Vo)},useDebugValue:tf,useDeferredValue:function(t){var e=Qt();return Fe===null?e.memoizedState=t:yv(e,Fe.memoizedState,t)},useTransition:function(){var t=Oc(Vo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:iv,useId:_v,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=wr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(sn(e,t,i,r),ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=wr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(sn(e,t,i,r),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=wr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(sn(e,t,r,n),ll(e,t,r))}};function Gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,r)||!Po(i,s):!0}function Tv(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Nt(e)?si:dt.current,r=e.contextTypes,s=(r=r!=null)?rs(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Nt(e)?si:dt.current,i.context=rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wu.enqueueReplaceState(i,i.state,null),jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e){try{var n="",r=e;do n+=TT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QI=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wl||(Wl=!0,Bh=r),xh(t,e)},n}function Sv(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=u1.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var YI=Gn.ReactCurrentOwner,Pt=!1;function vt(t,e,n,r){e.child=t===null?Z_(e,null,n,r):ss(e,t.child,n,r)}function Zm(t,e,n,r,i){n=n.render;var s=e.ref;return Yi(e,i),r=Jd(t,e,n,r,s,i),n=Zd(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(we&&n&&jd(e),e.flags|=1,vt(t,e,r,i),e.child)}function eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rv(t,e,s,r,i)):(t=pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function Rv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Po(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,$n(t,e,i)}return Dh(t,e,n,r,i)}function Av(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Wi,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Wi,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Wi,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Wi,Vt),Vt|=r;return vt(t,e,i,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dh(t,e,n,r,i){var s=Nt(n)?si:dt.current;return s=rs(e,s),Yi(e,i),n=Jd(t,e,n,r,s,i),r=Zd(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(we&&r&&jd(e),e.flags|=1,vt(t,e,n,i),e.child)}function tg(t,e,n,r,i){if(Nt(n)){var s=!0;Vl(e)}else s=!1;if(Yi(e,i),e.stateNode===null)hl(t,e),Tv(e,n,r),Nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Gt(h):(h=Nt(n)?si:dt.current,h=rs(e,h));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Qm(e,o,r,h),ir=!1;var p=e.memoizedState;o.state=p,jl(e,r,o,i),u=e.memoizedState,l!==r||p!==u||Ct.current||ir?(typeof f=="function"&&(Ch(e,n,f,r),u=e.memoizedState),(l=ir||Gm(e,n,l,r,p,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Zt(e.type,l),o.props=h,y=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=Nt(n)?si:dt.current,u=rs(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||p!==u)&&Qm(e,o,r,u),ir=!1,p=e.memoizedState,o.state=p,jl(e,r,o,i);var P=e.memoizedState;l!==y||p!==P||Ct.current||ir?(typeof R=="function"&&(Ch(e,n,R,r),P=e.memoizedState),(h=ir||Gm(e,n,h,r,p,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Oh(t,e,n,r,s,i)}function Oh(t,e,n,r,i,s){kv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jm(e,n,!1),$n(t,e,s);r=e.stateNode,YI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&jm(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?Fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(t,e.context,!1),Gd(t,e.containerInfo)}function ng(t,e,n,r,i){return is(),zd(i),e.flags|=256,vt(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cv(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Te,i&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Iu(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vh(n),e.memoizedState=bh,t):nf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return XI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Er(l,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nf(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&zd(r),ss(e,t.child,null,n),t=nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bc(Error(F(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Iu({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=Vh(o),e.memoizedState=bh,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=bc(s,r,void 0),za(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),sn(r,t,i,-1))}return uf(),r=bc(Error(F(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=c1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=yr(i.nextSibling),Ut=e,we=!0,tn=null,t!==null&&($t[Ht++]=On,$t[Ht++]=bn,$t[Ht++]=oi,On=t.id,bn=t.overflow,oi=e),e=nf(e,r.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Vc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JI(t,e,n){switch(e.tag){case 3:Pv(e),is();break;case 5:nv(e);break;case 1:Nt(e.type)&&Vl(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?Cv(t,e,n):(ge(Te,Te.current&1),t=$n(t,e,n),t!==null?t.sibling:null);ge(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,Av(t,e,n)}return $n(t,e,n)}var xv,Lh,Dv,Ov;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};Dv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(yn.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=ah(t,i),r=ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ol)}uh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Eo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ws(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZI(t,e,n){var r=e.pendingProps;switch(Bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Nt(e.type)&&bl(),at(e),null;case 3:return r=e.stateNode,os(),ve(Ct),ve(dt),Yd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Hh(tn),tn=null))),Lh(t,e),at(e),null;case 5:Qd(e);var i=Jr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)Dv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return at(e),null}if(t=Jr(yn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[xo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)_e(Js[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":dm(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":pm(r,s),_e("invalid",r)}uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",""+l]):Eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":xa(r),fm(r,s,!0);break;case"textarea":xa(r),mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[xo]=r,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)_e(Js[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":dm(t,r),i=ih(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),_e("invalid",t);break;case"textarea":pm(t,r),i=ah(t,r),_e("invalid",t);break;default:i=r}uh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?c_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&l_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&To(t,u):typeof u=="number"&&To(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Ad(t,s,u,o))}switch(n){case"input":xa(t),fm(t,r,!1);break;case"textarea":xa(t),mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Jr(Oo.current),Jr(yn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return at(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Lt!==null&&e.mode&1&&!(e.flags&128))X_(),is(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[pn]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else tn!==null&&(Hh(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Be===0&&(Be=3):uf())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return os(),Lh(t,e),t===null&&Co(e.stateNode.containerInfo),at(e),null;case 10:return Wd(e.type._context),at(e),null;case 17:return Nt(e.type)&&bl(),at(e),null;case 19:if(ve(Te),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ws(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bl(t),o!==null){for(e.flags|=128,Ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>ls&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return at(e),null}else 2*Oe()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Te.current,ge(Te,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function e1(t,e){switch(Bd(e),e.tag){case 1:return Nt(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),ve(Ct),ve(dt),Yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return os(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var $a=!1,ct=!1,t1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var ig=!1;function n1(t,e){if(wh=Nl,t=U_(),Fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,y=t,p=null;t:for(;;){for(var R;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==s||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(R=y.firstChild)!==null;)p=y,y=R;for(;;){if(y===t)break t;if(p===n&&++h===i&&(l=o),p===s&&++f===r&&(u=o),(R=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},Nl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,O=P.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?x:Zt(e.type,x),O);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(N){Pe(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=ig,ig=!1,P}function co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[xo],delete e[Sh],delete e[UI],delete e[FI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}var Qe=null,en=!1;function tr(t,e,n){for(n=n.child;n!==null;)Lv(t,e,n),n=n.sibling}function Lv(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:ct||Hi(n,e);case 6:var r=Qe,i=en;Qe=null,tr(t,e,n),Qe=r,en=i,Qe!==null&&(en?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(en?(t=Qe,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Ao(t)):Pc(Qe,n.stateNode));break;case 4:r=Qe,i=en,Qe=n.stateNode.containerInfo,en=!0,tr(t,e,n),Qe=r,en=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!ct&&(Hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,tr(t,e,n),ct=r):tr(t,e,n);break;default:tr(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new t1),e.forEach(function(r){var i=h1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,en=!1;break e;case 3:Qe=l.stateNode.containerInfo,en=!0;break e;case 4:Qe=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(Qe===null)throw Error(F(160));Lv(s,o,i),Qe=null,en=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Pe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mv(e,t),e=e.sibling}function Mv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),dn(t),r&4){try{co(3,t,t.return),Eu(3,t)}catch(x){Pe(t,t.return,x)}try{co(5,t,t.return)}catch(x){Pe(t,t.return,x)}}break;case 1:Jt(e,t),dn(t),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(Jt(e,t),dn(t),r&512&&n!==null&&Hi(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(x){Pe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&s_(i,s),ch(l,o);var h=ch(l,s);for(o=0;o<u.length;o+=2){var f=u[o],y=u[o+1];f==="style"?c_(i,y):f==="dangerouslySetInnerHTML"?l_(i,y):f==="children"?To(i,y):Ad(i,f,y,h)}switch(l){case"input":sh(i,s);break;case"textarea":o_(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?qi(i,!!s.multiple,R,!1):p!==!!s.multiple&&(s.defaultValue!=null?qi(i,!!s.multiple,s.defaultValue,!0):qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[xo]=s}catch(x){Pe(t,t.return,x)}}break;case 6:if(Jt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Pe(t,t.return,x)}}break;case 3:if(Jt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(x){Pe(t,t.return,x)}break;case 4:Jt(e,t),dn(t);break;case 13:Jt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(of=Oe())),r&4&&og(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(h=ct)||f,Jt(e,t),ct=h):Jt(e,t),dn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(y=$=f;$!==null;){switch(p=$,R=p.child,p.tag){case 0:case 11:case 14:case 15:co(4,p,p.return);break;case 1:Hi(p,p.return);var P=p.stateNode;if(typeof P.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Pe(r,n,x)}}break;case 5:Hi(p,p.return);break;case 22:if(p.memoizedState!==null){lg(y);continue}}R!==null?(R.return=p,$=R):lg(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{i=y.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=u_("display",o))}catch(x){Pe(t,t.return,x)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(x){Pe(t,t.return,x)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Jt(e,t),dn(t),r&4&&og(t);break;case 21:break;default:Jt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=sg(t);jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sg(t);Fh(t,l,o);break;default:throw Error(F(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function r1(t,e,n){$=t,Uv(t)}function Uv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ct;l=$a;var h=ct;if($a=o,(ct=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?ug(i):u!==null?(u.return=o,$=u):ug(i);for(;s!==null;)$=s,Uv(s),s=s.sibling;$=i,$a=l,ct=h}ag(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ag(t)}}function ag(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&Ao(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ct||e.flags&512&&Uh(e)}catch(p){Pe(e,e.return,p)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function lg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function ug(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Uh(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Uh(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var i1=Math.ceil,Hl=Gn.ReactCurrentDispatcher,rf=Gn.ReactCurrentOwner,qt=Gn.ReactCurrentBatchConfig,ae=0,We=null,Me=null,Je=0,Vt=0,Wi=Or(0),Be=0,Mo=null,li=0,Tu=0,sf=0,ho=null,At=null,of=0,ls=1/0,Nn=null,Wl=!1,Bh=null,vr=null,Ha=!1,dr=null,ql=0,fo=0,zh=null,dl=-1,fl=0;function Et(){return ae&6?Oe():dl!==-1?dl:dl=Oe()}function wr(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:BI.transition!==null?(fl===0&&(fl=T_()),fl):(t=de,t!==0||(t=window.event,t=t===void 0?16:C_(t.type)),t):1}function sn(t,e,n,r){if(50<fo)throw fo=0,zh=null,Error(F(185));Qo(t,n,r),(!(ae&2)||t!==We)&&(t===We&&(!(ae&2)&&(Tu|=n),Be===4&&or(t,Je)),xt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ls=Oe()+500,_u&&br()))}function xt(t,e){var n=t.callbackNode;BT(t,e);var r=Cl(t,t===We?Je:0);if(r===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?jI(cg.bind(null,t)):G_(cg.bind(null,t)),LI(function(){!(ae&6)&&br()}),n=null;else{switch(I_(r)){case 1:n=xd;break;case 4:n=w_;break;case 16:n=Pl;break;case 536870912:n=E_;break;default:n=Pl}n=qv(n,Fv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fv(t,e){if(dl=-1,fl=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Cl(t,t===We?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kl(t,r);else{e=r;var i=ae;ae|=2;var s=Bv();(We!==t||Je!==e)&&(Nn=null,ls=Oe()+500,ti(t,e));do try{a1();break}catch(l){jv(t,l)}while(!0);Hd(),Hl.current=s,ae=i,Me!==null?e=0:(We=null,Je=0,e=Be)}if(e!==0){if(e===2&&(i=mh(t),i!==0&&(r=i,e=$h(t,i))),e===1)throw n=Mo,ti(t,0),or(t,r),xt(t,Oe()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!s1(i)&&(e=Kl(t,r),e===2&&(s=mh(t),s!==0&&(r=s,e=$h(t,s))),e===1))throw n=Mo,ti(t,0),or(t,r),xt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Gr(t,At,Nn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=of+500-Oe(),10<e)){if(Cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ih(Gr.bind(null,t,At,Nn),e);break}Gr(t,At,Nn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i1(r/1960))-r,10<r){t.timeoutHandle=Ih(Gr.bind(null,t,At,Nn),r);break}Gr(t,At,Nn);break;case 5:Gr(t,At,Nn);break;default:throw Error(F(329))}}}return xt(t,Oe()),t.callbackNode===n?Fv.bind(null,t):null}function $h(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=At,At=n,e!==null&&Hh(e)),t}function Hh(t){At===null?At=t:At.push.apply(At,t)}function s1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~sf,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function cg(t){if(ae&6)throw Error(F(327));Xi();var e=Cl(t,0);if(!(e&1))return xt(t,Oe()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var r=mh(t);r!==0&&(e=r,n=$h(t,r))}if(n===1)throw n=Mo,ti(t,0),or(t,e),xt(t,Oe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,At,Nn),xt(t,Oe()),null}function af(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ls=Oe()+500,_u&&br())}}function ui(t){dr!==null&&dr.tag===0&&!(ae&6)&&Xi();var e=ae;ae|=1;var n=qt.transition,r=de;try{if(qt.transition=null,de=1,t)return t()}finally{de=r,qt.transition=n,ae=e,!(ae&6)&&br()}}function lf(){Vt=Wi.current,ve(Wi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VI(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:os(),ve(Ct),ve(dt),Yd();break;case 5:Qd(r);break;case 4:os();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:Wd(r.type._context);break;case 22:case 23:lf()}n=n.return}if(We=t,Me=t=Er(t.current,null),Je=Vt=e,Be=0,Mo=null,sf=Tu=li=0,At=ho=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xr=null}return t}function jv(t,e){do{var n=Me;try{if(Hd(),ul.current=$l,zl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(ai=0,He=Fe=Ie=null,uo=!1,bo=0,rf.current=null,n===null||n.return===null){Be=1,Mo=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Xm(o);if(R!==null){R.flags&=-257,Jm(R,o,l,s,e),R.mode&1&&Ym(s,h,e),e=R,u=h;var P=e.updateQueue;if(P===null){var x=new Set;x.add(u),e.updateQueue=x}else P.add(u);break e}else{if(!(e&1)){Ym(s,h,e),uf();break e}u=Error(F(426))}}else if(we&&l.mode&1){var O=Xm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Jm(O,o,l,s,e),zd(as(u,l));break e}}s=u=as(u,l),Be!==4&&(Be=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Iv(s,u,e);Hm(s,S);break e;case 1:l=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(vr===null||!vr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=Sv(s,l,e);Hm(s,N);break e}}s=s.return}while(s!==null)}$v(n)}catch(b){e=b,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Bv(){var t=Hl.current;return Hl.current=$l,t===null?$l:t}function uf(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||!(li&268435455)&&!(Tu&268435455)||or(We,Je)}function Kl(t,e){var n=ae;ae|=2;var r=Bv();(We!==t||Je!==e)&&(Nn=null,ti(t,e));do try{o1();break}catch(i){jv(t,i)}while(!0);if(Hd(),ae=n,Hl.current=r,Me!==null)throw Error(F(261));return We=null,Je=0,Be}function o1(){for(;Me!==null;)zv(Me)}function a1(){for(;Me!==null&&!DT();)zv(Me)}function zv(t){var e=Wv(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?$v(t):Me=e,rf.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=e1(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}else if(n=ZI(n,e,Vt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function Gr(t,e,n){var r=de,i=qt.transition;try{qt.transition=null,de=1,l1(t,e,n,r)}finally{qt.transition=i,de=r}return null}function l1(t,e,n,r){do Xi();while(dr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zT(t,s),t===We&&(Me=We=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,qv(Pl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=de;de=1;var l=ae;ae|=4,rf.current=null,n1(t,n),Mv(n,t),PI(Eh),Nl=!!wh,Eh=wh=null,t.current=n,r1(n),OT(),ae=l,de=o,qt.transition=s}else t.current=n;if(Ha&&(Ha=!1,dr=t,ql=i),s=t.pendingLanes,s===0&&(vr=null),LT(n.stateNode),xt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,t=Bh,Bh=null,t;return ql&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===zh?fo++:(fo=0,zh=t):fo=0,br(),null}function Xi(){if(dr!==null){var t=I_(ql),e=qt.transition,n=de;try{if(qt.transition=null,de=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,ql=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:co(8,f,s)}var y=f.child;if(y!==null)y.return=f,$=y;else for(;$!==null;){f=$;var p=f.sibling,R=f.return;if(bv(f),f===h){$=null;break}if(p!==null){p.return=R,$=p;break}$=R}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,$=E;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Eu(9,l)}}catch(b){Pe(l,l.return,b)}if(l===o){$=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,$=N;break e}$=l.return}}if(ae=i,br(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(fu,t)}catch{}r=!0}return r}finally{de=n,qt.transition=e}}return!1}function hg(t,e,n){e=as(n,e),e=Iv(t,e,1),t=_r(t,e,1),e=Et(),t!==null&&(Qo(t,1,e),xt(t,e))}function Pe(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=as(n,t),t=Sv(e,t,1),e=_r(e,t,1),t=Et(),e!==null&&(Qo(e,1,t),xt(e,t));break}}e=e.return}}function u1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Oe()-of?ti(t,0):sf|=n),xt(t,e)}function Hv(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=Et();t=zn(t,e),t!==null&&(Qo(t,e,n),xt(t,n))}function c1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hv(t,n)}function h1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Hv(t,n)}var Wv;Wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,JI(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,we&&e.flags&1048576&&Q_(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=rs(e,dt.current);Yi(e,n),i=Jd(null,e,r,t,i,n);var s=Zd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Vl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kd(e),i.updater=wu,e.stateNode=i,i._reactInternals=e,Nh(e,r,t,n),e=Oh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&jd(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=f1(r),t=Zt(r,t),i){case 0:e=Dh(null,e,r,t,n);break e;case 1:e=tg(null,e,r,t,n);break e;case 11:e=Zm(null,e,r,t,n);break e;case 14:e=eg(null,e,r,Zt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Dh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),tg(t,e,r,i,n);case 3:e:{if(Pv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tv(t,e),jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=as(Error(F(423)),e),e=ng(t,e,r,n,i);break e}else if(r!==i){i=as(Error(F(424)),e),e=ng(t,e,r,n,i);break e}else for(Lt=yr(e.stateNode.containerInfo.firstChild),Ut=e,we=!0,tn=null,n=Z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=$n(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return nv(e),t===null&&kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Th(r,i)?o=null:s!==null&&Th(r,s)&&(e.flags|=32),kv(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return Cv(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Zm(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Ul,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Ct.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yi(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),eg(t,e,r,i,n);case 15:return Rv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),hl(t,e),e.tag=1,Nt(r)?(t=!0,Vl(e)):t=!1,Yi(e,n),Tv(e,r,i),Nh(e,r,i,n),Oh(null,e,r,!0,t,n);case 19:return Nv(t,e,n);case 22:return Av(t,e,n)}throw Error(F(156,e.tag))};function qv(t,e){return v_(t,e)}function d1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new d1(t,e,n,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f1(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Cd)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return ni(n.children,i,s,e);case kd:o=8,i|=8;break;case eh:return t=Wt(12,n,e,i|2),t.elementType=eh,t.lanes=s,t;case th:return t=Wt(13,n,e,i),t.elementType=th,t.lanes=s,t;case nh:return t=Wt(19,n,e,i),t.elementType=nh,t.lanes=s,t;case n_:return Iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case e_:o=10;break e;case t_:o=9;break e;case Pd:o=11;break e;case Cd:o=14;break e;case rr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Iu(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=n_,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function p1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hf(t,e,n,r,i,s,o,l,u){return t=new p1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function m1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Kv(t){if(!t)return kr;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Nt(n))return K_(t,n,e)}return e}function Gv(t,e,n,r,i,s,o,l,u){return t=hf(n,r,!0,t,i,s,o,l,u),t.context=Kv(null),n=t.current,r=Et(),i=wr(n),s=Un(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,Qo(t,i,r),xt(t,r),t}function Su(t,e,n,r){var i=e.current,s=Et(),o=wr(i);return n=Kv(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(sn(t,i,o,s),ll(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function df(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function g1(){return null}var Qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ff(t){this._internalRoot=t}Ru.prototype.render=ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Su(t,e,null,null)};Ru.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){Su(null,t,null,null)}),e[Bn]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=A_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&P_(t)}};function pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fg(){}function y1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Gl(o);s.call(h)}}var o=Gv(e,r,t,0,null,!1,!1,"",fg);return t._reactRootContainer=o,t[Bn]=o.current,Co(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Gl(u);l.call(h)}}var u=hf(t,0,!1,null,null,!1,!1,"",fg);return t._reactRootContainer=u,t[Bn]=u.current,Co(t.nodeType===8?t.parentNode:t),ui(function(){Su(e,u,n,r)}),u}function ku(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Gl(o);l.call(u)}}Su(e,o,t,i)}else o=y1(n,e,t,i,r);return Gl(o)}S_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(Dd(e,n|1),xt(e,Oe()),!(ae&6)&&(ls=Oe()+500,br()))}break;case 13:ui(function(){var r=zn(t,1);if(r!==null){var i=Et();sn(r,t,1,i)}}),df(t,1)}};Od=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=Et();sn(e,t,134217728,n)}df(t,134217728)}};R_=function(t){if(t.tag===13){var e=wr(t),n=zn(t,e);if(n!==null){var r=Et();sn(n,t,e,r)}df(t,e)}};A_=function(){return de};k_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yu(r);if(!i)throw Error(F(90));i_(r),sh(r,i)}}}break;case"textarea":o_(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};f_=af;p_=ui;var _1={usingClientEntryPoint:!1,Events:[Xo,Fi,yu,h_,d_,af]},qs={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v1={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=y_(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{fu=Wa.inject(v1),gn=Wa}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(e))throw Error(F(200));return m1(t,e,null,n)};jt.createRoot=function(t,e){if(!pf(t))throw Error(F(299));var n=!1,r="",i=Qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hf(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,Co(t.nodeType===8?t.parentNode:t),new ff(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=y_(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return ui(t)};jt.hydrate=function(t,e,n){if(!Au(e))throw Error(F(200));return ku(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!pf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Qv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Gv(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ru(e)};jt.render=function(t,e,n){if(!Au(e))throw Error(F(200));return ku(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!Au(t))throw Error(F(40));return t._reactRootContainer?(ui(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};jt.unstable_batchedUpdates=af;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Au(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ku(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(t){console.error(t)}}Yv(),Yy.exports=jt;var Xv=Yy.exports;const w1=vd(Xv);var Jv,pg=Xv;Jv=pg.createRoot,pg.hydrateRoot;var Zv={exports:{}},E1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T1=E1,I1=T1;function e0(){}function t0(){}t0.resetWarningCache=e0;var S1=function(){function t(r,i,s,o,l,u){if(u!==I1){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:t0,resetWarningCache:e0};return n.PropTypes=n,n};Zv.exports=S1();var R1=Zv.exports;const Uo=vd(R1),mf=Ue.createContext(),A1={};function n0({children:t}){const[e,n]=Ue.useState(new URL(window.location.href));return Ue.useLayoutEffect(()=>{function r(i){n(new URL(window.location.href)),console.log(i)}return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[]),z.jsx(z.Fragment,{children:z.jsx(mf.Provider,{value:{routerState:A1,currentUrl:e,SetcurrentUrl:n},children:t})})}n0.propTypes={children:Uo.any.isRequired};function po({children:t,to:e}){const{SetcurrentUrl:n}=Ue.useContext(mf);function r(){window.history.pushState(null,null,e),n(new URL(window.location.origin+e))}return z.jsx("a",{onClick:r,children:t})}po.propTypes={children:Uo.any.isRequired,to:Uo.any.isRequired};function k1(){return z.jsxs(z.Fragment,{children:[z.jsx(po,{to:"/home",children:"Home"}),z.jsx(po,{to:"/blog",children:"Blog"}),z.jsx(po,{to:"/about",children:"About"})]})}function ml({children:t,path:e}){const{currentUrl:n}=Ue.useContext(mf);return n.pathname==e?z.jsx(z.Fragment,{children:t}):null}ml.propTypes={children:Uo.any.isRequired,path:Uo.any.isRequired};var P1=t=>{switch(t){case"success":return x1;case"info":return O1;case"warning":return D1;case"error":return b1;default:return null}},C1=Array(12).fill(0),N1=({visible:t})=>B.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},B.createElement("div",{className:"sonner-spinner"},C1.map((e,n)=>B.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),x1=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),D1=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),O1=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),b1=B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},B.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),V1=()=>{let[t,e]=B.useState(document.hidden);return B.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},Wh=1,L1=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...r}=t,i=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:Wh++,s=this.toasts.find(l=>l.id===i),o=t.dismissible===void 0?!0:t.dismissible;return s?this.toasts=this.toasts.map(l=>l.id===i?(this.publish({...l,...t,id:i,title:n}),{...l,...t,id:i,dismissible:o,title:n}):l):this.addToast({title:n,...r,dismissible:o,id:i}),i},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let r=t instanceof Promise?t:t(),i=n!==void 0;return r.then(async s=>{if(U1(s)&&!s.ok){i=!1;let o=typeof e.error=="function"?await e.error(`HTTP error! status: ${s.status}`):e.error,l=typeof e.description=="function"?await e.description(`HTTP error! status: ${s.status}`):e.description;this.create({id:n,type:"error",message:o,description:l})}else if(e.success!==void 0){i=!1;let o=typeof e.success=="function"?await e.success(s):e.success,l=typeof e.description=="function"?await e.description(s):e.description;this.create({id:n,type:"success",message:o,description:l})}}).catch(async s=>{if(e.error!==void 0){i=!1;let o=typeof e.error=="function"?await e.error(s):e.error,l=typeof e.description=="function"?await e.description(s):e.description;this.create({id:n,type:"error",message:o,description:l})}}).finally(()=>{var s;i&&(this.dismiss(n),n=void 0),(s=e.finally)==null||s.call(e)}),n},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||Wh++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},bt=new L1,M1=(t,e)=>{let n=(e==null?void 0:e.id)||Wh++;return bt.addToast({title:t,...e,id:n}),n},U1=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",F1=M1,j1=()=>bt.toasts,qa=Object.assign(F1,{success:bt.success,info:bt.info,warning:bt.warning,error:bt.error,custom:bt.custom,message:bt.message,promise:bt.promise,dismiss:bt.dismiss,loading:bt.loading},{getHistory:j1});function B1(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}B1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ka(t){return t.label!==void 0}var z1=3,$1="32px",H1=4e3,W1=356,q1=14,K1=20,G1=200;function Q1(...t){return t.filter(Boolean).join(" ")}var Y1=t=>{var e,n,r,i,s,o,l,u,h,f;let{invert:y,toast:p,unstyled:R,interacting:P,setHeights:x,visibleToasts:O,heights:S,index:_,toasts:E,expanded:N,removeToast:b,defaultRichColors:U,closeButton:w,style:g,cancelButtonStyle:v,actionButtonStyle:I,className:A="",descriptionClassName:k="",duration:T,position:nt,gap:St,loadingIcon:pt,expandByDefault:mt,classNames:V,icons:W,closeButtonAriaLabel:J="Close toast",pauseWhenPageIsHidden:Q,cn:K}=t,[Z,be]=B.useState(!1),[qe,ce]=B.useState(!1),[Dt,Fr]=B.useState(!1),[jr,un]=B.useState(!1),[Ii,Br]=B.useState(0),[Is,Si]=B.useState(0),Ri=B.useRef(null),Rn=B.useRef(null),Qu=_===0,Yu=_+1<=O,gt=p.type,cn=p.dismissible!==!1,da=p.className||"",Xu=p.descriptionClassName||"",Qn=B.useMemo(()=>S.findIndex(ee=>ee.toastId===p.id)||0,[S,p.id]),Ss=B.useMemo(()=>{var ee;return(ee=p.closeButton)!=null?ee:w},[p.closeButton,w]),Rs=B.useMemo(()=>p.duration||T||H1,[p.duration,T]),Ve=B.useRef(0),Ae=B.useRef(0),zr=B.useRef(0),An=B.useRef(null),[As,Ju]=nt.split("-"),Yn=B.useMemo(()=>S.reduce((ee,pe,he)=>he>=Qn?ee:ee+pe.height,0),[S,Qn]),ks=V1(),fa=p.invert||y,$r=gt==="loading";Ae.current=B.useMemo(()=>Qn*St+Yn,[Qn,Yn]),B.useEffect(()=>{be(!0)},[]),B.useLayoutEffect(()=>{if(!Z)return;let ee=Rn.current,pe=ee.style.height;ee.style.height="auto";let he=ee.getBoundingClientRect().height;ee.style.height=pe,Si(he),x(rt=>rt.find(Rt=>Rt.toastId===p.id)?rt.map(Rt=>Rt.toastId===p.id?{...Rt,height:he}:Rt):[{toastId:p.id,height:he,position:p.position},...rt])},[Z,p.title,p.description,x,p.id]);let hn=B.useCallback(()=>{ce(!0),Br(Ae.current),x(ee=>ee.filter(pe=>pe.toastId!==p.id)),setTimeout(()=>{b(p)},G1)},[p,b,x,Ae]);B.useEffect(()=>{if(p.promise&&gt==="loading"||p.duration===1/0||p.type==="loading")return;let ee,pe=Rs;return N||P||Q&&ks?(()=>{if(zr.current<Ve.current){let he=new Date().getTime()-Ve.current;pe=pe-he}zr.current=new Date().getTime()})():pe!==1/0&&(Ve.current=new Date().getTime(),ee=setTimeout(()=>{var he;(he=p.onAutoClose)==null||he.call(p,p),hn()},pe)),()=>clearTimeout(ee)},[N,P,mt,p,Rs,hn,p.promise,gt,Q,ks]),B.useEffect(()=>{let ee=Rn.current;if(ee){let pe=ee.getBoundingClientRect().height;return Si(pe),x(he=>[{toastId:p.id,height:pe,position:p.position},...he]),()=>x(he=>he.filter(rt=>rt.toastId!==p.id))}},[x,p.id]),B.useEffect(()=>{p.delete&&hn()},[hn,p.delete]);function Zu(){return W!=null&&W.loading?B.createElement("div",{className:"sonner-loader","data-visible":gt==="loading"},W.loading):pt?B.createElement("div",{className:"sonner-loader","data-visible":gt==="loading"},pt):B.createElement(N1,{visible:gt==="loading"})}return B.createElement("li",{"aria-live":p.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:Rn,className:K(A,da,V==null?void 0:V.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,V==null?void 0:V.default,V==null?void 0:V[gt],(n=p==null?void 0:p.classNames)==null?void 0:n[gt]),"data-sonner-toast":"","data-rich-colors":(r=p.richColors)!=null?r:U,"data-styled":!(p.jsx||p.unstyled||R),"data-mounted":Z,"data-promise":!!p.promise,"data-removed":qe,"data-visible":Yu,"data-y-position":As,"data-x-position":Ju,"data-index":_,"data-front":Qu,"data-swiping":Dt,"data-dismissible":cn,"data-type":gt,"data-invert":fa,"data-swipe-out":jr,"data-expanded":!!(N||mt&&Z),style:{"--index":_,"--toasts-before":_,"--z-index":E.length-_,"--offset":`${qe?Ii:Ae.current}px`,"--initial-height":mt?"auto":`${Is}px`,...g,...p.style},onPointerDown:ee=>{$r||!cn||(Ri.current=new Date,Br(Ae.current),ee.target.setPointerCapture(ee.pointerId),ee.target.tagName!=="BUTTON"&&(Fr(!0),An.current={x:ee.clientX,y:ee.clientY}))},onPointerUp:()=>{var ee,pe,he,rt;if(jr||!cn)return;An.current=null;let Rt=Number(((ee=Rn.current)==null?void 0:ee.style.getPropertyValue("--swipe-amount").replace("px",""))||0),Xn=new Date().getTime()-((pe=Ri.current)==null?void 0:pe.getTime()),kn=Math.abs(Rt)/Xn;if(Math.abs(Rt)>=K1||kn>.11){Br(Ae.current),(he=p.onDismiss)==null||he.call(p,p),hn(),un(!0);return}(rt=Rn.current)==null||rt.style.setProperty("--swipe-amount","0px"),Fr(!1)},onPointerMove:ee=>{var pe;if(!An.current||!cn)return;let he=ee.clientY-An.current.y,rt=ee.clientX-An.current.x,Rt=(As==="top"?Math.min:Math.max)(0,he),Xn=ee.pointerType==="touch"?10:2;Math.abs(Rt)>Xn?(pe=Rn.current)==null||pe.style.setProperty("--swipe-amount",`${he}px`):Math.abs(rt)>Xn&&(An.current=null)}},Ss&&!p.jsx?B.createElement("button",{"aria-label":J,"data-disabled":$r,"data-close-button":!0,onClick:$r||!cn?()=>{}:()=>{var ee;hn(),(ee=p.onDismiss)==null||ee.call(p,p)},className:K(V==null?void 0:V.closeButton,(i=p==null?void 0:p.classNames)==null?void 0:i.closeButton)},B.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),B.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,p.jsx||B.isValidElement(p.title)?p.jsx||p.title:B.createElement(B.Fragment,null,gt||p.icon||p.promise?B.createElement("div",{"data-icon":"",className:K(V==null?void 0:V.icon,(s=p==null?void 0:p.classNames)==null?void 0:s.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Zu():null,p.type!=="loading"?p.icon||(W==null?void 0:W[gt])||P1(gt):null):null,B.createElement("div",{"data-content":"",className:K(V==null?void 0:V.content,(o=p==null?void 0:p.classNames)==null?void 0:o.content)},B.createElement("div",{"data-title":"",className:K(V==null?void 0:V.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},p.title),p.description?B.createElement("div",{"data-description":"",className:K(k,Xu,V==null?void 0:V.description,(u=p==null?void 0:p.classNames)==null?void 0:u.description)},p.description):null),B.isValidElement(p.cancel)?p.cancel:p.cancel&&Ka(p.cancel)?B.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||v,onClick:ee=>{var pe,he;Ka(p.cancel)&&cn&&((he=(pe=p.cancel).onClick)==null||he.call(pe,ee),hn())},className:K(V==null?void 0:V.cancelButton,(h=p==null?void 0:p.classNames)==null?void 0:h.cancelButton)},p.cancel.label):null,B.isValidElement(p.action)?p.action:p.action&&Ka(p.action)?B.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||I,onClick:ee=>{var pe,he;Ka(p.action)&&(ee.defaultPrevented||((he=(pe=p.action).onClick)==null||he.call(pe,ee),hn()))},className:K(V==null?void 0:V.actionButton,(f=p==null?void 0:p.classNames)==null?void 0:f.actionButton)},p.action.label):null))};function mg(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var X1=t=>{let{invert:e,position:n="bottom-right",hotkey:r=["altKey","KeyT"],expand:i,closeButton:s,className:o,offset:l,theme:u="light",richColors:h,duration:f,style:y,visibleToasts:p=z1,toastOptions:R,dir:P=mg(),gap:x=q1,loadingIcon:O,icons:S,containerAriaLabel:_="Notifications",pauseWhenPageIsHidden:E,cn:N=Q1}=t,[b,U]=B.useState([]),w=B.useMemo(()=>Array.from(new Set([n].concat(b.filter(Q=>Q.position).map(Q=>Q.position)))),[b,n]),[g,v]=B.useState([]),[I,A]=B.useState(!1),[k,T]=B.useState(!1),[nt,St]=B.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),pt=B.useRef(null),mt=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),V=B.useRef(null),W=B.useRef(!1),J=B.useCallback(Q=>{var K;(K=b.find(Z=>Z.id===Q.id))!=null&&K.delete||bt.dismiss(Q.id),U(Z=>Z.filter(({id:be})=>be!==Q.id))},[b]);return B.useEffect(()=>bt.subscribe(Q=>{if(Q.dismiss){U(K=>K.map(Z=>Z.id===Q.id?{...Z,delete:!0}:Z));return}setTimeout(()=>{w1.flushSync(()=>{U(K=>{let Z=K.findIndex(be=>be.id===Q.id);return Z!==-1?[...K.slice(0,Z),{...K[Z],...Q},...K.slice(Z+1)]:[Q,...K]})})})}),[]),B.useEffect(()=>{if(u!=="system"){St(u);return}u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?St("dark"):St("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:Q})=>{St(Q?"dark":"light")})},[u]),B.useEffect(()=>{b.length<=1&&A(!1)},[b]),B.useEffect(()=>{let Q=K=>{var Z,be;r.every(qe=>K[qe]||K.code===qe)&&(A(!0),(Z=pt.current)==null||Z.focus()),K.code==="Escape"&&(document.activeElement===pt.current||(be=pt.current)!=null&&be.contains(document.activeElement))&&A(!1)};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[r]),B.useEffect(()=>{if(pt.current)return()=>{V.current&&(V.current.focus({preventScroll:!0}),V.current=null,W.current=!1)}},[pt.current]),b.length?B.createElement("section",{"aria-label":`${_} ${mt}`,tabIndex:-1},w.map((Q,K)=>{var Z;let[be,qe]=Q.split("-");return B.createElement("ol",{key:Q,dir:P==="auto"?mg():P,tabIndex:-1,ref:pt,className:o,"data-sonner-toaster":!0,"data-theme":nt,"data-y-position":be,"data-x-position":qe,style:{"--front-toast-height":`${((Z=g[0])==null?void 0:Z.height)||0}px`,"--offset":typeof l=="number"?`${l}px`:l||$1,"--width":`${W1}px`,"--gap":`${x}px`,...y},onBlur:ce=>{W.current&&!ce.currentTarget.contains(ce.relatedTarget)&&(W.current=!1,V.current&&(V.current.focus({preventScroll:!0}),V.current=null))},onFocus:ce=>{ce.target instanceof HTMLElement&&ce.target.dataset.dismissible==="false"||W.current||(W.current=!0,V.current=ce.relatedTarget)},onMouseEnter:()=>A(!0),onMouseMove:()=>A(!0),onMouseLeave:()=>{k||A(!1)},onPointerDown:ce=>{ce.target instanceof HTMLElement&&ce.target.dataset.dismissible==="false"||T(!0)},onPointerUp:()=>T(!1)},b.filter(ce=>!ce.position&&K===0||ce.position===Q).map((ce,Dt)=>{var Fr,jr;return B.createElement(Y1,{key:ce.id,icons:S,index:Dt,toast:ce,defaultRichColors:h,duration:(Fr=R==null?void 0:R.duration)!=null?Fr:f,className:R==null?void 0:R.className,descriptionClassName:R==null?void 0:R.descriptionClassName,invert:e,visibleToasts:p,closeButton:(jr=R==null?void 0:R.closeButton)!=null?jr:s,interacting:k,position:Q,style:R==null?void 0:R.style,unstyled:R==null?void 0:R.unstyled,classNames:R==null?void 0:R.classNames,cancelButtonStyle:R==null?void 0:R.cancelButtonStyle,actionButtonStyle:R==null?void 0:R.actionButtonStyle,removeToast:J,toasts:b.filter(un=>un.position==ce.position),heights:g.filter(un=>un.position==ce.position),setHeights:v,expandByDefault:i,gap:x,loadingIcon:O,expanded:I,pauseWhenPageIsHidden:E,cn:N})}))})):null},gg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},i0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(p=64)),r.push(n[f],n[y],n[p],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new Z1;const p=s<<2|l>>4;if(r.push(p),h!==64){const R=l<<4&240|h>>2;if(r.push(R),y!==64){const P=h<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eS=function(t){const e=r0(t);return i0.encodeByteArray(e,!0)},Ql=function(t){return eS(t).replace(/\./g,"")},s0=function(t){try{return i0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=()=>tS().__FIREBASE_DEFAULTS__,rS=()=>{if(typeof process>"u"||typeof gg>"u")return;const t=gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&s0(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return nS()||rS()||iS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},o0=t=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},a0=t=>{const e=o0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l0=()=>{var t;return(t=Pu())===null||t===void 0?void 0:t.config},u0=t=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function aS(){var t;const e=(t=Pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hS(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dS(){return!aS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fS(){try{return typeof indexedDB=="object"}catch{return!1}}function pS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mS,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,l,r)}}function gS(t,e){return t.replace(yS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yS=/\{\$([^}]+)}/g;function _S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yg(s)&&yg(o)){if(!Yl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vS(t,e){const n=new wS(t,e);return n.subscribe.bind(n)}class wS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ES(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ES(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SS(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IS(t){return t===Qr?void 0:t}function SS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const AS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},kS=se.INFO,PS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},CS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gf{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=CS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const NS=(t,e)=>e.some(n=>t instanceof n);let _g,vg;function xS(){return _g||(_g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DS(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h0=new WeakMap,qh=new WeakMap,d0=new WeakMap,Fc=new WeakMap,yf=new WeakMap;function OS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&h0.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function bS(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VS(t){Kh=t(Kh)}function LS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return d0.set(r,e.sort?e.sort():[e]),Tr(r)}:DS().includes(t)?function(...e){return t.apply(jc(this),e),Tr(h0.get(this))}:function(...e){return Tr(t.apply(jc(this),e))}}function MS(t){return typeof t=="function"?LS(t):(t instanceof IDBTransaction&&bS(t),NS(t,xS())?new Proxy(t,Kh):t)}function Tr(t){if(t instanceof IDBRequest)return OS(t);if(Fc.has(t))return Fc.get(t);const e=MS(t);return e!==t&&(Fc.set(t,e),yf.set(e,t)),e}const jc=t=>yf.get(t);function US(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const FS=["get","getKey","getAll","getAllKeys","count"],jS=["put","add","delete","clear"],Bc=new Map;function wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Bc.set(e,s),s}VS(t=>({...t,get:(e,n,r)=>wg(e,n)||t.get(e,n,r),has:(e,n)=>!!wg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",Eg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new gf("@firebase/app"),$S="@firebase/app-compat",HS="@firebase/analytics-compat",WS="@firebase/analytics",qS="@firebase/app-check-compat",KS="@firebase/app-check",GS="@firebase/auth",QS="@firebase/auth-compat",YS="@firebase/database",XS="@firebase/data-connect",JS="@firebase/database-compat",ZS="@firebase/functions",eR="@firebase/functions-compat",tR="@firebase/installations",nR="@firebase/installations-compat",rR="@firebase/messaging",iR="@firebase/messaging-compat",sR="@firebase/performance",oR="@firebase/performance-compat",aR="@firebase/remote-config",lR="@firebase/remote-config-compat",uR="@firebase/storage",cR="@firebase/storage-compat",hR="@firebase/firestore",dR="@firebase/vertexai-preview",fR="@firebase/firestore-compat",pR="firebase",mR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="[DEFAULT]",gR={[Gh]:"fire-core",[$S]:"fire-core-compat",[WS]:"fire-analytics",[HS]:"fire-analytics-compat",[KS]:"fire-app-check",[qS]:"fire-app-check-compat",[GS]:"fire-auth",[QS]:"fire-auth-compat",[YS]:"fire-rtdb",[XS]:"fire-data-connect",[JS]:"fire-rtdb-compat",[ZS]:"fire-fn",[eR]:"fire-fn-compat",[tR]:"fire-iid",[nR]:"fire-iid-compat",[rR]:"fire-fcm",[iR]:"fire-fcm-compat",[sR]:"fire-perf",[oR]:"fire-perf-compat",[aR]:"fire-rc",[lR]:"fire-rc-compat",[uR]:"fire-gcs",[cR]:"fire-gcs-compat",[hR]:"fire-fst",[fR]:"fire-fst-compat",[dR]:"fire-vertex","fire-js":"fire-js",[pR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map,yR=new Map,Yh=new Map;function Tg(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(Yh.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;Yh.set(e,t);for(const n of Xl.values())Tg(n,t);for(const n of yR.values())Tg(n,t);return!0}function Cu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Zo("app","Firebase",_R);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=mR;function f0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=l0()),!n)throw Ir.create("no-options");const s=Xl.get(i);if(s){if(Yl(n,s.options)&&Yl(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new RS(i);for(const u of Yh.values())o.addComponent(u);const l=new vR(n,r,o);return Xl.set(i,l),l}function _f(t=Qh){const e=Xl.get(t);if(!e&&t===Qh&&l0())return f0();if(!e)throw Ir.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=gR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(l.join(" "));return}ci(new Pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firebase-heartbeat-database",ER=1,Fo="firebase-heartbeat-store";let zc=null;function p0(){return zc||(zc=US(wR,ER,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),zc}async function TR(t){try{const n=(await p0()).transaction(Fo),r=await n.objectStore(Fo).get(m0(t));return await n.done,r}catch(e){if(e instanceof Sn)Hn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Ig(t,e){try{const r=(await p0()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,m0(t)),await r.done}catch(n){if(n instanceof Sn)Hn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function m0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=1024,SR=30*24*60*60*1e3;class RR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=SR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sg(),{heartbeatsToSend:r,unsentEntries:i}=AR(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Hn.warn(n),""}}}function Sg(){return new Date().toISOString().substring(0,10)}function AR(t,e=IR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fS()?pS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ig(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rg(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){ci(new Pr("platform-logger",e=>new BS(e),"PRIVATE")),ci(new Pr("heartbeat",e=>new RR(e),"PRIVATE")),_n(Gh,Eg,t),_n(Gh,Eg,"esm2017"),_n("fire-js","")}PR("");var CR="firebase",NR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(CR,NR,"app");function vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xR=g0,y0=new Zo("auth","Firebase",g0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new gf("@firebase/auth");function DR(t,...e){Jl.logLevel<=se.WARN&&Jl.warn(`Auth (${wi}): ${t}`,...e)}function gl(t,...e){Jl.logLevel<=se.ERROR&&Jl.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Ef(t,...e)}function on(t,...e){return Ef(t,...e)}function wf(t,e,n){const r=Object.assign(Object.assign({},xR()),{[e]:n});return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return wf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),wf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y0.create(t,...e)}function Y(t,e,...n){if(!t)throw Ef(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gl(e),new Error(e)}function Wn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bR(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bR()||uS()||"connection"in navigator)?navigator.onLine:!0}function LR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=oS()||cS()}get(){return VR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=new ta(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,r,i={}){return v0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return lS()||(h.referrerPolicy="no-referrer"),_0.fetch()(w0(t,t.config.apiHost,n,l),h)})}async function v0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MR),e);try{const i=new jR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wf(t,f,h);Yt(t,f)}}catch(i){if(i instanceof Sn)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function na(t,e,n,r,i={}){const s=await Lr(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function w0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tf(t.config,i):`${t.config.apiScheme}://${i}`}function FR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),UR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function kg(t){return t!==void 0&&t.enterprise!==void 0}class BR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zR(t,e){return Lr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function E0(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HR(t,e=!1){const n=Ce(t),r=await n.getIdToken(e),i=If(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo($c(i.auth_time)),issuedAtTime:mo($c(i.iat)),expirationTime:mo($c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function If(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=s0(n);return i?JSON.parse(i):(gl("Failed to decode base64 JWT payload"),null)}catch(i){return gl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pg(t){const e=If(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&WR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await jo(t,E0(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?T0(s.providerUserInfo):[],l=GR(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Jh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function KR(t){const e=Ce(t);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function T0(t){return t.map(e=>{var{providerId:n}=e,r=vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){const n=await v0(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=w0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YR(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Pg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ji;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HR(this,e)}reload(){return KR(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await jo(this,$R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:N,isAnonymous:b,providerData:U,stsTokenManager:w}=n;Y(E&&w,e,"internal-error");const g=Ji.fromJSON(this.name,w);Y(typeof E=="string",e,"internal-error"),nr(y,e.name),nr(p,e.name),Y(typeof N=="boolean",e,"internal-error"),Y(typeof b=="boolean",e,"internal-error"),nr(R,e.name),nr(P,e.name),nr(x,e.name),nr(O,e.name),nr(S,e.name),nr(_,e.name);const v=new Ln({uid:E,auth:e,email:p,emailVerified:N,displayName:y,isAnonymous:b,photoURL:P,phoneNumber:R,tenantId:x,stsTokenManager:g,createdAt:S,lastLoginAt:_});return U&&Array.isArray(U)&&(v.providerData=U.map(I=>Object.assign({},I))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?T0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ji;l.updateFromIdToken(r);const u=new Ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Map;function Mn(t){Wn(t instanceof Function,"Expected a class definition");let e=Cg.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I0.type="NONE";const Ng=I0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yl(this.userKey,i.apiKey,s),this.fullPersistenceKey=yl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(Mn(Ng),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Mn(Ng);const o=yl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const y=Ln._fromJSON(e,f);h!==s&&(l=y),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C0(e))return"Blackberry";if(N0(e))return"Webos";if(R0(e))return"Safari";if((e.includes("chrome/")||A0(e))&&!e.includes("edge/"))return"Chrome";if(P0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S0(t=ft()){return/firefox\//i.test(t)}function R0(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A0(t=ft()){return/crios\//i.test(t)}function k0(t=ft()){return/iemobile/i.test(t)}function P0(t=ft()){return/android/i.test(t)}function C0(t=ft()){return/blackberry/i.test(t)}function N0(t=ft()){return/webos/i.test(t)}function Sf(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XR(t=ft()){var e;return Sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JR(){return hS()&&document.documentMode===10}function x0(t=ft()){return Sf(t)||P0(t)||N0(t)||C0(t)||/windows phone/i.test(t)||k0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e=[]){let n;switch(t){case"Browser":n=xg(ft());break;case"Worker":n=`${xg(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=6;class nA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new ZR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E0(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Fn(this));const n=e?Ce(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eA(this),n=new nA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(t){return Ce(t)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=vS(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iA(t){Nu=t}function O0(t){return Nu.loadJS(t)}function sA(){return Nu.recaptchaEnterpriseScript}function oA(){return Nu.gapiScript}function aA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lA="recaptcha-enterprise",uA="NO_RECAPTCHA";class cA{constructor(e){this.type=lA,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{zR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new BR(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;kg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(uA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&kg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sA();u.length!==0&&(u+=l),O0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Og(t,e,n,r=!1){const i=new cA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Og(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Og(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e){const n=Cu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yl(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function dA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fA(t,e,n){const r=Mr(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=b0(e),{host:o,port:l}=pA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mA()}function b0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pA(t){const e=b0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bg(o)}}}function bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function gA(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function vA(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Rf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,n,"signInWithPassword",yA);case"emailLink":return _A(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,r,"signUpPassword",gA);case"emailLink":return vA(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="http://localhost";class hi extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:wA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TA(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class Af{constructor(e){var n,r,i,s,o,l;const u=Zs(eo(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=EA((i=u.mode)!==null&&i!==void 0?i:null);Y(h&&f&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TA(e);try{return new Af(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return Bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Af.parseLink(n);return Y(r,"argument-error"),Bo._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ra{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ra{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ra{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return na(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=Vg(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vg(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new eu(e,n,r,i)}}function V0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eu._fromErrorAndOperation(t,s,e,r):s})}async function SA(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const s=await jo(t,V0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=If(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t,e,n=!1){if(nn(t.app))return Promise.reject(Fn(t));const r="signIn",i=await V0(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AA(t,e){return L0(Mr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t){const e=Mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kA(t,e,n){if(nn(t.app))return Promise.reject(Fn(t));const r=Mr(t),o=await Zh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&M0(t),u}),l=await di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function PA(t,e,n){return nn(t.app)?Promise.reject(Fn(t)):AA(Ce(t),vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&M0(t),r})}function CA(t,e,n,r){return Ce(t).onIdTokenChanged(e,n,r)}function NA(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function U0(t,e,n,r){return Ce(t).onAuthStateChanged(e,n,r)}function xA(t){return Ce(t).signOut()}const tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tu,"1"),this.storage.removeItem(tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1e3,OA=10;class j0 extends F0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=x0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}j0.type="LOCAL";const bA=j0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends F0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B0.type="SESSION";const z0=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await VA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Pf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(y){const p=y;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function MA(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function UA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jA(){return $0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebaseLocalStorageDb",BA=1,nu="firebaseLocalStorage",W0="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([nu],e?"readwrite":"readonly").objectStore(nu)}function zA(){const t=indexedDB.deleteDatabase(H0);return new ia(t).toPromise()}function ed(){const t=indexedDB.open(H0,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nu,{keyPath:W0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nu)?e(r):(r.close(),await zA(),e(await ed()))})})}async function Lg(t,e,n){const r=Du(t,!0).put({[W0]:e,value:n});return new ia(r).toPromise()}async function $A(t,e){const n=Du(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function Mg(t,e){const n=Du(t,!0).delete(e);return new ia(n).toPromise()}const HA=800,WA=3;class q0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(jA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await Lg(e,tu,"1"),await Mg(e,tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$A(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q0.type="LOCAL";const qA=q0;new ta(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e){return e?Mn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends Rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KA(t){return L0(t.auth,new Cf(t),t.bypassAuthState)}function GA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),RA(n,new Cf(t),t.bypassAuthState)}async function QA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),SA(n,new Cf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KA;case"linkViaPopup":case"linkViaRedirect":return QA;case"reauthViaPopup":case"reauthViaRedirect":return GA;default:Yt(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new ta(2e3,1e4);async function XA(t,e,n){if(nn(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=Mr(t);OR(t,e,kf);const i=K0(r,n);return new Zr(r,"signInViaPopup",e,i).executeNotNull()}class Zr extends G0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YA.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="pendingRedirect",_l=new Map;class ZA extends G0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await ek(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ek(t,e){const n=rk(e),r=nk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tk(t,e){_l.set(t._key(),e)}function nk(t){return Mn(t._redirectPersistence)}function rk(t){return yl(JA,t.config.apiKey,t.name)}async function ik(t,e,n=!1){if(nn(t.app))return Promise.reject(Fn(t));const r=Mr(t),i=K0(r,e),o=await new ZA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=10*60*1e3;class ok{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ak(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Q0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(e))}saveEventToCache(e){this.cachedEventUids.add(Ug(e)),this.lastProcessedEventTime=Date.now()}}function Ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Q0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ak(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ck=/^https?/;async function hk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lk(t);for(const n of e)try{if(dk(n))return}catch{}Yt(t,"unauthorized-domain")}function dk(t){const e=Xh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ck.test(n))return!1;if(uk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=new ta(3e4,6e4);function Fg(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pk(t){return new Promise((e,n)=>{var r,i,s;function o(){Fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fg(),n(on(t,"network-request-failed"))},timeout:fk.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const l=aA("iframefcb");return vn()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},O0(`${oA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw vl=null,e})}let vl=null;function mk(t){return vl=vl||pk(t),vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new ta(5e3,15e3),yk="__/auth/iframe",_k="emulator/auth/iframe",vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ek(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tf(e,_k):`https://${t.config.authDomain}/${yk}`,r={apiKey:e.apiKey,appName:t.name,v:wi},i=wk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ea(r).slice(1)}`}async function Tk(t){const e=await mk(t),n=vn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Ek(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=vn().setTimeout(()=>{s(o)},gk.get());function u(){vn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sk=500,Rk=600,Ak="_blank",kk="http://localhost";class jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pk(t,e,n,r=Sk,i=Rk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ik),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ft().toLowerCase();n&&(l=A0(h)?Ak:n),S0(h)&&(e=e||kk,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[R,P])=>`${p}${R}=${P},`,"");if(XR(h)&&l!=="_self")return Ck(e||"",l),new jg(null);const y=window.open(e||"",l,f);Y(y,t,"popup-blocked");try{y.focus()}catch{}return new jg(y)}function Ck(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="__/auth/handler",xk="emulator/auth/handler",Dk=encodeURIComponent("fac");async function Bg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wi,eventId:i};if(e instanceof kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_S(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof ra){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Dk}=${encodeURIComponent(u)}`:"";return`${Ok(t)}?${ea(l).slice(1)}${h}`}function Ok({config:t}){return t.emulator?Tf(t,xk):`https://${t.authDomain}/${Nk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="webStorageSupport";class bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z0,this._completeRedirectFn=ik,this._overrideRedirectResult=tk}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bg(e,n,r,Xh(),i);return Pk(e,o,Pf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bg(e,n,r,Xh(),i);return MA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tk(e),r=new ok(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x0()||R0()||Sf()}}const Vk=bk;var zg="@firebase/auth",$g="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Uk(t){ci(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D0(t)},h=new rA(r,i,s,u);return dA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ci(new Pr("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new Lk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(zg,$g,Mk(t)),_n(zg,$g,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=5*60,jk=u0("authIdTokenMaxAge")||Fk;let Hg=null;const Bk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jk)return;const i=n==null?void 0:n.token;Hg!==i&&(Hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zk(t=_f()){const e=Cu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hA(t,{popupRedirectResolver:Vk,persistence:[qA,bA,z0]}),r=u0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Bk(s.toString());NA(n,o,()=>o(n.currentUser)),CA(n,l=>o(l))}}const i=o0("auth");return i&&fA(n,`http://${i}`),n}function $k(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$k().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Uk("Browser");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ri,Y0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,A,k){for(var T=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)T[nt-2]=arguments[nt];return g.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var I=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)I[A]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],A=w.g[2];var k=w.g[3],T=g+(k^v&(A^k))+I[0]+3614090360&4294967295;g=v+(T<<7&4294967295|T>>>25),T=k+(A^g&(v^A))+I[1]+3905402710&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(v^k&(g^v))+I[2]+606105819&4294967295,A=k+(T<<17&4294967295|T>>>15),T=v+(g^A&(k^g))+I[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(k^v&(A^k))+I[4]+4118548399&4294967295,g=v+(T<<7&4294967295|T>>>25),T=k+(A^g&(v^A))+I[5]+1200080426&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(v^k&(g^v))+I[6]+2821735955&4294967295,A=k+(T<<17&4294967295|T>>>15),T=v+(g^A&(k^g))+I[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(k^v&(A^k))+I[8]+1770035416&4294967295,g=v+(T<<7&4294967295|T>>>25),T=k+(A^g&(v^A))+I[9]+2336552879&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(v^k&(g^v))+I[10]+4294925233&4294967295,A=k+(T<<17&4294967295|T>>>15),T=v+(g^A&(k^g))+I[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(k^v&(A^k))+I[12]+1804603682&4294967295,g=v+(T<<7&4294967295|T>>>25),T=k+(A^g&(v^A))+I[13]+4254626195&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(v^k&(g^v))+I[14]+2792965006&4294967295,A=k+(T<<17&4294967295|T>>>15),T=v+(g^A&(k^g))+I[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(A^k&(v^A))+I[1]+4129170786&4294967295,g=v+(T<<5&4294967295|T>>>27),T=k+(v^A&(g^v))+I[6]+3225465664&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(k^g))+I[11]+643717713&4294967295,A=k+(T<<14&4294967295|T>>>18),T=v+(k^g&(A^k))+I[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(v^A))+I[5]+3593408605&4294967295,g=v+(T<<5&4294967295|T>>>27),T=k+(v^A&(g^v))+I[10]+38016083&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(k^g))+I[15]+3634488961&4294967295,A=k+(T<<14&4294967295|T>>>18),T=v+(k^g&(A^k))+I[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(v^A))+I[9]+568446438&4294967295,g=v+(T<<5&4294967295|T>>>27),T=k+(v^A&(g^v))+I[14]+3275163606&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(k^g))+I[3]+4107603335&4294967295,A=k+(T<<14&4294967295|T>>>18),T=v+(k^g&(A^k))+I[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(v^A))+I[13]+2850285829&4294967295,g=v+(T<<5&4294967295|T>>>27),T=k+(v^A&(g^v))+I[2]+4243563512&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(k^g))+I[7]+1735328473&4294967295,A=k+(T<<14&4294967295|T>>>18),T=v+(k^g&(A^k))+I[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(v^A^k)+I[5]+4294588738&4294967295,g=v+(T<<4&4294967295|T>>>28),T=k+(g^v^A)+I[8]+2272392833&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^v)+I[11]+1839030562&4294967295,A=k+(T<<16&4294967295|T>>>16),T=v+(A^k^g)+I[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(v^A^k)+I[1]+2763975236&4294967295,g=v+(T<<4&4294967295|T>>>28),T=k+(g^v^A)+I[4]+1272893353&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^v)+I[7]+4139469664&4294967295,A=k+(T<<16&4294967295|T>>>16),T=v+(A^k^g)+I[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(v^A^k)+I[13]+681279174&4294967295,g=v+(T<<4&4294967295|T>>>28),T=k+(g^v^A)+I[0]+3936430074&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^v)+I[3]+3572445317&4294967295,A=k+(T<<16&4294967295|T>>>16),T=v+(A^k^g)+I[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(v^A^k)+I[9]+3654602809&4294967295,g=v+(T<<4&4294967295|T>>>28),T=k+(g^v^A)+I[12]+3873151461&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^v)+I[15]+530742520&4294967295,A=k+(T<<16&4294967295|T>>>16),T=v+(A^k^g)+I[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(A^(v|~k))+I[0]+4096336452&4294967295,g=v+(T<<6&4294967295|T>>>26),T=k+(v^(g|~A))+I[7]+1126891415&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~v))+I[14]+2878612391&4294967295,A=k+(T<<15&4294967295|T>>>17),T=v+(k^(A|~g))+I[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=g+(A^(v|~k))+I[12]+1700485571&4294967295,g=v+(T<<6&4294967295|T>>>26),T=k+(v^(g|~A))+I[3]+2399980690&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~v))+I[10]+4293915773&4294967295,A=k+(T<<15&4294967295|T>>>17),T=v+(k^(A|~g))+I[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=g+(A^(v|~k))+I[8]+1873313359&4294967295,g=v+(T<<6&4294967295|T>>>26),T=k+(v^(g|~A))+I[15]+4264355552&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~v))+I[6]+2734768916&4294967295,A=k+(T<<15&4294967295|T>>>17),T=v+(k^(A|~g))+I[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=g+(A^(v|~k))+I[4]+4149444226&4294967295,g=v+(T<<6&4294967295|T>>>26),T=k+(v^(g|~A))+I[11]+3174756917&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~v))+I[2]+718787259&4294967295,A=k+(T<<15&4294967295|T>>>17),T=v+(k^(A|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,I=this.B,A=this.h,k=0;k<g;){if(A==0)for(;k<=v;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<g;)if(I[A++]=w.charCodeAt(k++),A==this.blockSize){i(this,I),A=0;break}}else for(;k<g;)if(I[A++]=w[k++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var I=0;32>I;I+=8)w[v++]=this.g[g]>>>I&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],I=!0,A=w.length-1;0<=A;A--){var k=w[A]|0;I&&k==g||(v[A]=k,I=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return O(h(-w));for(var g=[],v=1,I=0;w>=v;I++)g[I]=w/v|0,v*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return O(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),I=y,A=0;A<w.length;A+=8){var k=Math.min(8,w.length-A),T=parseInt(w.substring(A,A+k),g);8>k?(k=h(Math.pow(g,k)),I=I.j(k).add(h(T))):(I=I.j(v),I=I.add(h(T)))}return I}var y=u(0),p=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-O(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(x(this))return"-"+O(this).toString(w);for(var g=h(Math.pow(w,6)),v=this,I="";;){var A=N(v,g).g;v=S(v,A.j(g));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,P(v))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=S(this,w),x(w)?-1:P(w)?0:1};function O(w){for(var g=w.g.length,v=[],I=0;I<g;I++)v[I]=~w.g[I];return new o(v,~w.h).add(p)}t.abs=function(){return x(this)?O(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],I=0,A=0;A<=g;A++){var k=I+(this.i(A)&65535)+(w.i(A)&65535),T=(k>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=T>>>16,k&=65535,T&=65535,v[A]=T<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function S(w,g){return w.add(O(g))}t.j=function(w){if(P(this)||P(w))return y;if(x(this))return x(w)?O(this).j(O(w)):O(O(this).j(w));if(x(w))return O(this.j(O(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],I=0;I<2*g;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var k=this.i(I)>>>16,T=this.i(I)&65535,nt=w.i(A)>>>16,St=w.i(A)&65535;v[2*I+2*A]+=T*St,_(v,2*I+2*A),v[2*I+2*A+1]+=k*St,_(v,2*I+2*A+1),v[2*I+2*A+1]+=T*nt,_(v,2*I+2*A+1),v[2*I+2*A+2]+=k*nt,_(v,2*I+2*A+2)}for(I=0;I<g;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=g;I<2*g;I++)v[I]=0;return new o(v,0)};function _(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function E(w,g){this.g=w,this.h=g}function N(w,g){if(P(g))throw Error("division by zero");if(P(w))return new E(y,y);if(x(w))return g=N(O(w),g),new E(O(g.g),O(g.h));if(x(g))return g=N(w,O(g)),new E(O(g.g),g.h);if(30<w.g.length){if(x(w)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var v=p,I=g;0>=I.l(w);)v=b(v),I=b(I);var A=U(v,1),k=U(I,1);for(I=U(I,2),v=U(v,2);!P(I);){var T=k.add(I);0>=T.l(w)&&(A=A.add(v),k=T),I=U(I,1),v=U(v,1)}return g=S(w,A.j(g)),new E(A,g)}for(A=y;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=h(v),T=k.j(g);x(T)||0<T.l(w);)v-=I,k=h(v),T=k.j(g);P(k)&&(k=p),A=A.add(k),w=S(w,T)}return new E(A,w)}t.A=function(w){return N(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],I=0;I<g;I++)v[I]=this.i(I)&w.i(I);return new o(v,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],I=0;I<g;I++)v[I]=this.i(I)|w.i(I);return new o(v,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],I=0;I<g;I++)v[I]=this.i(I)^w.i(I);return new o(v,this.h^w.h)};function b(w){for(var g=w.g.length+1,v=[],I=0;I<g;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(v,w.h)}function U(w,g){var v=g>>5;g%=32;for(var I=w.g.length-v,A=[],k=0;k<I;k++)A[k]=0<g?w.i(k+v)>>>g|w.i(k+v+1)<<32-g:w.i(k+v);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ri=o}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X0,to,J0,wl,td,Z0,ew,tw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function y(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function p(a,c,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,p.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,D){for(var j=Array(arguments.length-2),me=2;me<arguments.length;me++)j[me-2]=arguments[me];return c.prototype[C].apply(m,j)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const C=a.length||0,D=m.length||0;a.length=C+D;for(let j=0;j<D;j++)a[C+j]=m[j]}else a.push(m)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var b=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function U(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class nt{constructor(){this.h=this.g=null}add(c,d){const m=St.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var St=new S(()=>new pt,a=>a.reset());class pt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,V=!1,W=new nt,J=()=>{const a=l.Promise.resolve(void 0);mt=()=>{a.then(Q)}};var Q=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=St;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}V=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var be=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function qe(a,c){if(Z.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{N(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ce[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&qe.aa.h.call(this)}}P(qe,Z);var ce={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),Fr=0;function jr(a,c,d,m,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=C,this.key=++Fr,this.da=this.fa=!1}function un(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ii(a){this.src=a,this.g={},this.h=0}Ii.prototype.add=function(a,c,d,m,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var j=Is(a,c,m,C);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new jr(c,this.src,D,!!m,C),c.fa=d,a.push(c)),c};function Br(a,c){var d=c.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,c,void 0),D;(D=0<=C)&&Array.prototype.splice.call(m,C,1),D&&(un(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Is(a,c,d,m){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return C}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),Ri={};function Rn(a,c,d,m,C){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Rn(a,c[D],d,m,C);return null}return d=Rs(d),a&&a[Dt]?a.K(c,d,h(m)?!!m.capture:!!m,C):Qu(a,c,d,!1,m,C)}function Qu(a,c,d,m,C,D){if(!c)throw Error("Invalid event type");var j=h(C)?!!C.capture:!!C,me=Qn(a);if(me||(a[Si]=me=new Ii(a)),d=me.add(c,d,m,j,D),d.proxy)return d;if(m=Yu(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)be||(C=j),C===void 0&&(C=!1),a.addEventListener(c.toString(),m,C);else if(a.attachEvent)a.attachEvent(da(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Yu(){function a(d){return c.call(a.src,a.listener,d)}const c=Xu;return a}function gt(a,c,d,m,C){if(Array.isArray(c))for(var D=0;D<c.length;D++)gt(a,c[D],d,m,C);else m=h(m)?!!m.capture:!!m,d=Rs(d),a&&a[Dt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Is(D,d,m,C),-1<d&&(un(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Qn(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Is(c,d,m,C)),(d=-1<a?c[a]:null)&&cn(d))}function cn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Dt])Br(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(da(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Qn(c))?(Br(d,a),d.h==0&&(d.src=null,c[Si]=null)):un(a)}}}function da(a){return a in Ri?Ri[a]:Ri[a]="on"+a}function Xu(a,c){if(a.da)a=!0;else{c=new qe(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&cn(a),a=d.call(m,c)}return a}function Qn(a){return a=a[Si],a instanceof Ii?a:null}var Ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rs(a){return typeof a=="function"?a:(a[Ss]||(a[Ss]=function(c){return a.handleEvent(c)}),a[Ss])}function Ve(){K.call(this),this.i=new Ii(this),this.M=this,this.F=null}P(Ve,K),Ve.prototype[Dt]=!0,Ve.prototype.removeEventListener=function(a,c,d,m){gt(this,a,c,d,m)};function Ae(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Z(c,a);else if(c instanceof Z)c.target=c.target||a;else{var C=c;c=new Z(m,a),I(c,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var j=c.g=d[D];C=zr(j,m,!0,c)&&C}if(j=c.g=a,C=zr(j,m,!0,c)&&C,C=zr(j,m,!1,c)&&C,d)for(D=0;D<d.length;D++)j=c.g=d[D],C=zr(j,m,!1,c)&&C}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)un(d[m]);delete a.g[c],a.h--}}this.F=null},Ve.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Ve.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function zr(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,D=0;D<c.length;++D){var j=c[D];if(j&&!j.da&&j.capture==d){var me=j.listener,Ke=j.ha||j.src;j.fa&&Br(a.i,j),C=me.call(Ke,m)!==!1&&C}}return C&&!m.defaultPrevented}function An(a,c,d){if(typeof a=="function")d&&(a=p(a,d));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function As(a){a.g=An(()=>{a.g=null,a.i&&(a.i=!1,As(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ju extends K{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:As(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(a){K.call(this),this.h=a,this.g={}}P(Yn,K);var ks=[];function fa(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&cn(c)},a),a.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),fa(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=l.JSON.stringify,hn=l.JSON.parse,Zu=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ee(){}ee.prototype.h=null;function pe(a){return a.h||(a.h=a.i())}function he(){}var rt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rt(){Z.call(this,"d")}P(Rt,Z);function Xn(){Z.call(this,"c")}P(Xn,Z);var kn={},yp=null;function pa(){return yp=yp||new Ve}kn.La="serverreachability";function _p(a){Z.call(this,kn.La,a)}P(_p,Z);function Ps(a){const c=pa();Ae(c,new _p(c))}kn.STAT_EVENT="statevent";function vp(a,c){Z.call(this,kn.STAT_EVENT,a),this.stat=c}P(vp,Z);function yt(a){const c=pa();Ae(c,new vp(c,a))}kn.Ma="timingevent";function wp(a,c){Z.call(this,kn.Ma,a),this.size=c}P(wp,Z);function Cs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ns(){this.g=!0}Ns.prototype.xa=function(){this.g=!1};function AE(a,c,d,m,C,D){a.info(function(){if(a.g)if(D)for(var j="",me=D.split("&"),Ke=0;Ke<me.length;Ke++){var le=me[Ke].split("=");if(1<le.length){var it=le[0];le=le[1];var st=it.split("_");j=2<=st.length&&st[1]=="type"?j+(it+"="+le+"&"):j+(it+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+c+`
`+d+`
`+j})}function kE(a,c,d,m,C,D,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+c+`
`+d+`
`+D+" "+j})}function Ai(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+CE(a,d)+(m?" "+m:"")})}function PE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ns.prototype.info=function(){};function CE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return $r(d)}catch{return c}}var ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ep={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ec;function ga(){}P(ga,ee),ga.prototype.g=function(){return new XMLHttpRequest},ga.prototype.i=function(){return{}},ec=new ga;function Jn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tp}function Tp(){this.i=null,this.g="",this.h=!1}var Ip={},tc={};function nc(a,c,d){a.L=1,a.v=wa(Pn(c)),a.m=d,a.P=!0,Sp(a,null)}function Sp(a,c){a.F=Date.now(),ya(a),a.A=Pn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Up(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Tp,a.g=nm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Ju(p(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(ks[0]=C.toString()),C=ks);for(var D=0;D<C.length;D++){var j=Rn(d,C[D],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ps(),AE(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Cn(a)==3?c.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const st=Cn(this.g);var c=this.g.Ba();const Ci=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Wp(this.g)))){this.J||st!=4||c==7||(c==8||0>=Ci?Ps(3):Ps(2)),rc(this);var d=this.g.Z();this.X=d;t:if(Rp(this)){var m=Wp(this.g);a="";var C=m.length,D=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hr(this),xs(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(D&&c==C-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,kE(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ke=this.g;if((me=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(me)){var le=me;break t}}le=null}if(d=le)Ai(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ic(this,d);else{this.o=!1,this.s=3,yt(12),Hr(this),xs(this);break e}}if(this.P){d=!0;let Xt;for(;!this.J&&this.C<j.length;)if(Xt=NE(this,j),Xt==tc){st==4&&(this.s=4,yt(14),d=!1),Ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Ip){this.s=4,yt(15),Ai(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Ai(this.i,this.l,Xt,null),ic(this,Xt);if(Rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||j.length!=0||this.h.h||(this.s=1,yt(16),d=!1),this.o=this.o&&d,!d)Ai(this.i,this.l,j,"[Invalid Chunked Response]"),Hr(this),xs(this);else if(0<j.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),cc(it),it.M=!0,yt(11))}}else Ai(this.i,this.l,j,null),ic(this,j);st==4&&Hr(this),this.o&&!this.J&&(st==4?Jp(this.j,this):(this.o=!1,ya(this)))}else KE(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Hr(this),xs(this)}}}catch{}finally{}};function Rp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function NE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?tc:(d=Number(c.substring(d,m)),isNaN(d)?Ip:(m+=1,m+d>c.length?tc:(c=c.slice(m,m+d),a.C=m+d,c)))}Jn.prototype.cancel=function(){this.J=!0,Hr(this)};function ya(a){a.S=Date.now()+a.I,Ap(a,a.I)}function Ap(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Cs(p(a.ba,a),c)}function rc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(PE(this.i,this.A),this.L!=2&&(Ps(),yt(17)),Hr(this),this.s=2,xs(this)):Ap(this,this.S-a)};function xs(a){a.j.G==0||a.J||Jp(a.j,a)}function Hr(a){rc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,fa(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ic(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||sc(d.h,a))){if(!a.K&&sc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Aa(d),Sa(d);else break e;uc(d),yt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Cs(p(d.Za,d),6e3));if(1>=Cp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else qr(d,11)}else if((a.K||d.g==a)&&Aa(d),!_(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let le=C[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const it=le[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const st=le[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Ci=le[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(m=1.5*Ci,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Xt=a.g;if(Xt){const Pa=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var D=m.h;D.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(oc(D,D.h),D.h=null))}if(m.D){const hc=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;hc&&(m.ya=hc,ye(m.I,m.D,hc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=tm(m,m.J?m.ia:null,m.W),j.K){Np(m.h,j);var me=j,Ke=m.L;Ke&&(me.I=Ke),me.B&&(rc(me),ya(me)),m.g=j}else Yp(m);0<d.i.length&&Ra(d)}else le[0]!="stop"&&le[0]!="close"||qr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?qr(d,7):lc(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}Ps(4)}catch{}}var xE=class{constructor(a,c){this.g=a,this.map=c}};function kp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cp(a){return a.h?1:a.g?a.g.size:0}function sc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function oc(a,c){a.g?a.g.add(c):a.h=c}function Np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}kp.prototype.cancel=function(){if(this.i=xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function DE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function OE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function Dp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=OE(a),m=DE(a),C=m.length,D=0;D<C;D++)c.call(void 0,m[D],d&&d[D],a)}var Op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var D=a[d].substring(0,m);C=a[d].substring(m+1)}else D=a[d];c(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Wr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wr){this.h=a.h,_a(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var c=a.i,d=new bs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),bp(this,d),this.m=a.m}else a&&(c=String(a).match(Op))?(this.h=!1,_a(this,c[1]||"",!0),this.o=Ds(c[2]||""),this.g=Ds(c[3]||"",!0),va(this,c[4]),this.l=Ds(c[5]||"",!0),bp(this,c[6]||"",!0),this.m=Ds(c[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}Wr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Os(c,Vp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Os(c,Vp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?ME:LE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,FE)),a.join("")};function Pn(a){return new Wr(a)}function _a(a,c,d){a.j=d?Ds(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function bp(a,c,d){c instanceof bs?(a.i=c,jE(a.i,a.h)):(d||(c=Os(c,UE)),a.i=new bs(c,a.h))}function ye(a,c,d){a.i.set(c,d)}function wa(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ds(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,VE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function VE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vp=/[#\/\?@]/g,LE=/[#\?:]/g,ME=/[#\?]/g,UE=/[#\?@]/g,FE=/#/g;function bs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&bE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=bs.prototype,t.add=function(a,c){Zn(this),this.i=null,a=ki(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Lp(a,c){Zn(a),c=ki(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Mp(a,c){return Zn(a),c=ki(a,c),a.g.has(c)}t.forEach=function(a,c){Zn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(c,C,m,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const C=a[m];for(let D=0;D<C.length;D++)d.push(c[m])}return d},t.V=function(a){Zn(this);let c=[];if(typeof a=="string")Mp(this,a)&&(c=c.concat(this.g.get(ki(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Zn(this),this.i=null,a=ki(this,a),Mp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Up(a,c,d){Lp(a,c),0<d.length&&(a.i=null,a.g.set(ki(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const D=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var C=D;j[m]!==""&&(C+="="+encodeURIComponent(String(j[m]))),a.push(C)}}return this.i=a.join("&")};function ki(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function jE(a,c){c&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Lp(this,m),Up(this,C,d))},a)),a.j=c}function BE(a,c){const d=new Ns;if(l.Image){const m=new Image;m.onload=R(er,d,"TestLoadImage: loaded",!0,c,m),m.onerror=R(er,d,"TestLoadImage: error",!1,c,m),m.onabort=R(er,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=R(er,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function zE(a,c){const d=new Ns,m=new AbortController,C=setTimeout(()=>{m.abort(),er(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(C),D.ok?er(d,"TestPingServer: ok",!0,c):er(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),er(d,"TestPingServer: error",!1,c)})}function er(a,c,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function $E(){this.g=new Zu}function HE(a,c,d){const m=d||"";try{Dp(a,function(C,D){let j=C;h(C)&&(j=$r(C)),c.push(m+D+"="+encodeURIComponent(j))})}catch(C){throw c.push(m+"type="+encodeURIComponent("_badmap")),C}}function Ea(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ea,ee),Ea.prototype.g=function(){return new Ta(this.l,this.j)},Ea.prototype.i=function(a){return function(){return a}}({});function Ta(a,c){Ve.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ta,Ve),t=Ta.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Vs(this):Ls(this),this.readyState==3&&Fp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},t.Qa=function(a){this.g&&(this.response=a,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jp(a){let c="";return U(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function ac(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=jp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,c,d))}function ke(a){Ve.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ke,Ve);var WE=/^https?$/i,qE=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ec.g(),this.v=this.o?pe(this.o):pe(ec),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Bp(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qE,c,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Bp(this,D)}};function Bp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,zp(a),Ia(a)}function zp(a){a.A||(a.A=!0,Ae(a,"complete"),Ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ae(this,"complete"),Ae(this,"abort"),Ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ia(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$p(this):this.bb())},t.bb=function(){$p(this)};function $p(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)An(a.Ea,0,a);else if(Ae(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=j===0){var C=String(a.D).match(Op)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!WE.test(C?C.toLowerCase():"")}d=m}if(d)Ae(a,"complete"),Ae(a,"success");else{a.m=6;try{var D=2<Cn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",zp(a)}}finally{Ia(a)}}}}function Ia(a,c){if(a.g){Hp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ae(a,"ready");try{d.onreadystatechange=m}catch{}}}function Hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),hn(c)}};function Wp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KE(a){const c={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=A(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[C]||[];c[C]=D,D.push(d)}w(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function qp(a){this.Aa=0,this.i=[],this.j=new Ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,a),this.cb=Ms("retryDelaySeedMs",1e4,a),this.Wa=Ms("forwardChannelMaxRetries",2,a),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kp(a&&a.concurrentRequestLimit),this.Da=new $E,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){yt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=tm(this,null,this.W),Ra(this)};function lc(a){if(Kp(a),a.G==3){var c=a.U++,d=Pn(a.I);if(ye(d,"SID",a.K),ye(d,"RID",c),ye(d,"TYPE","terminate"),Us(a,d),c=new Jn(a,a.j,c),c.L=2,c.v=wa(Pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=nm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ya(c)}em(a)}function Sa(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function Kp(a){Sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ra(a){if(!Pp(a.h)&&!a.s){a.s=!0;var c=a.Ga;mt||J(),V||(mt(),V=!0),W.add(c,a),a.B=0}}function GE(a,c){return Cp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Cs(p(a.Ga,a,c),Zp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Qp(this,C,c),d=Pn(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),Us(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(jp(D)))+"&"+c:this.m&&ac(d,this.m,D)),oc(this.h,C),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",c),ye(d,"SID","null"),C.T=!0,nc(C,d,null)):nc(C,d,c),this.G=2}}else this.G==3&&(a?Gp(this,a):this.i.length==0||Pp(this.h)||Gp(this))};function Gp(a,c){var d;c?d=c.l:d=a.U++;const m=Pn(a.I);ye(m,"SID",a.K),ye(m,"RID",d),ye(m,"AID",a.T),Us(a,m),a.m&&a.o&&ac(m,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Qp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),oc(a.h,d),nc(d,m,c)}function Us(a,c){a.H&&U(a.H,function(d,m){ye(c,m,d)}),a.l&&Dp({},function(d,m){ye(c,m,d)})}function Qp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?p(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const j=["count="+d];D==-1?0<d?(D=C[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let me=!0;for(let Ke=0;Ke<d;Ke++){let le=C[Ke].g;const it=C[Ke].map;if(le-=D,0>le)D=Math.max(0,C[Ke].g-100),me=!1;else try{HE(it,j,"req"+le+"_")}catch{m&&m(it)}}if(me){m=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;mt||J(),V||(mt(),V=!0),W.add(c,a),a.v=0}}function uc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Cs(p(a.Fa,a),Zp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Cs(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Sa(this),Xp(this))};function cc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xp(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Pn(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),Us(a,c),a.m&&a.o&&ac(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=wa(Pn(c)),d.m=null,d.P=!0,Sp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),uc(this),yt(19))};function Aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jp(a,c){var d=null;if(a.g==c){Aa(a),cc(a),a.g=null;var m=2}else if(sc(a.h,c))d=c.D,Np(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;m=pa(),Ae(m,new wp(m,d)),Ra(a)}else Yp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(m==1&&GE(a,c)||m==2&&uc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function Zp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function qr(a,c){if(a.j.info("Error code "+c),c==2){var d=p(a.fb,a),m=a.Xa;const C=!m;m=new Wr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_a(m,"https"),wa(m),C?BE(m.toString(),d):zE(m.toString(),d)}else yt(2);a.G=0,a.l&&a.l.sa(c),em(a),Kp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function em(a){if(a.G=0,a.ka=[],a.l){const c=xp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function tm(a,c,d){var m=d instanceof Wr?Pn(d):new Wr(d);if(m.g!="")c&&(m.g=c+"."+m.g),va(m,m.s);else{var C=l.location;m=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var D=new Wr(null);m&&_a(D,m),c&&(D.g=c),C&&va(D,C),d&&(D.l=d),m=D}return d=a.D,c=a.ya,d&&c&&ye(m,d,c),ye(m,"VER",a.la),Us(a,m),m}function nm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new Ea({eb:d})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rm(){}t=rm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ka(){}ka.prototype.g=function(a,c){return new Ot(a,c)};function Ot(a,c){Ve.call(this),this.g=new qp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Pi(this)}P(Ot,Ve),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){lc(this.g)},Ot.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=$r(a),a=d);c.i.push(new xE(c.Ya++,a)),c.G==3&&Ra(c)},Ot.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,Ot.aa.N.call(this)};function im(a){Rt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(im,Rt);function sm(){Xn.call(this),this.status=1}P(sm,Xn);function Pi(a){this.g=a}P(Pi,rm),Pi.prototype.ua=function(){Ae(this.g,"a")},Pi.prototype.ta=function(a){Ae(this.g,new im(a))},Pi.prototype.sa=function(a){Ae(this.g,new sm)},Pi.prototype.ra=function(){Ae(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,tw=function(){return new ka},ew=function(){return pa()},Z0=kn,td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ma.NO_ERROR=0,ma.TIMEOUT=8,ma.HTTP_ERROR=6,wl=ma,Ep.COMPLETE="complete",J0=Ep,he.EventType=rt,rt.OPEN="a",rt.CLOSE="b",rt.ERROR="c",rt.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,to=he,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,X0=ke}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});const qg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new gf("@firebase/firestore");function Ks(){return fi.logLevel}function H(t,...e){if(fi.logLevel<=se.DEBUG){const n=e.map(Nf);fi.debug(`Firestore (${ws}): ${t}`,...n)}}function qn(t,...e){if(fi.logLevel<=se.ERROR){const n=e.map(Nf);fi.error(`Firestore (${ws}): ${t}`,...n)}}function us(t,...e){if(fi.logLevel<=se.WARN){const n=e.map(Nf);fi.warn(`Firestore (${ws}): ${t}`,...n)}}function Nf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function fe(t,e){t||X()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Wk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qk{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new nw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ut(e)}}class Kk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Kk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new Qk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Xk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new ze(0,0))}static max(){return new te(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends zo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Jk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends zo{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Jk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function Zk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Cr(i,G.empty(),e)}function eP(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(te.min(),G.empty(),-1)}static max(){return new Cr(te.max(),G.empty(),-1)}}function tP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==nP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function iP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xf.oe=-1;function Ou(t){return t==null}function ru(t){return t===0&&1/t==-1/0}function sP(t){return typeof t=="number"&&Number.isInteger(t)&&!ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gg(this.data.getIterator())}getIteratorFrom(e){return new Gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sw("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const oP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=oP.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pi(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Of(t){const e=t.mapValue.fields.__previous_value__;return Df(e)?Of(e):e}function $o(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Df(t)?4:uP(t)?9007199254740991:lP(t)?10:11:X()}function Tn(t,e){if(t===e)return!0;const n=mi(t);if(n!==mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $o(t).isEqual($o(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nr(i.timestampValue),l=Nr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return pi(i.bytesValue).isEqual(pi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?ru(o)===ru(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Kg(o)!==Kg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Tn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Wo(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=mi(t),r=mi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Qg(t.timestampValue,e.timestampValue);case 4:return Qg($o(t),$o(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=pi(s),u=pi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(De(s.latitude),De(o.latitude));return l!==0?l:ue(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const y=s.fields||{},p=o.fields||{},R=(l=y.value)===null||l===void 0?void 0:l.arrayValue,P=(u=p.value)===null||u===void 0?void 0:u.arrayValue,x=ue(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Yg(R,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Xa.mapValue&&o===Xa.mapValue)return 0;if(s===Xa.mapValue)return 1;if(o===Xa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const p=ue(u[y],f[y]);if(p!==0)return p;const R=hs(l[u[y]],h[f[y]]);if(R!==0)return R}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Qg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Nr(t),r=Nr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Yg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=hs(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function ds(t){return nd(t)}function nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=nd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${nd(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function rd(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function Xg(t){return!!t&&"nullValue"in t}function Jg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function lP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(go(this.value))}}function ow(t){const e=[];return Ei(t.fields,(n,r)=>{const i=new Xe([n]);if(El(r)){const s=ow(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,te.min(),te.min(),te.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,te.min(),te.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,te.min(),te.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.position=e,this.inclusive=n}}function Zg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ey(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n="asc"){this.field=e,this.dir=n}}function cP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{}class je extends aw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dP(e,n,r):n==="array-contains"?new mP(e,r):n==="in"?new gP(e,r):n==="not-in"?new yP(e,r):n==="array-contains-any"?new _P(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fP(e,r):new pP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&mi(this.value)===mi(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends aw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new In(e,n)}matches(e){return lw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lw(t){return t.op==="and"}function uw(t){return hP(t)&&lw(t)}function hP(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function id(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(uw(t))return t.filters.map(e=>id(e)).join(",");{const e=t.filters.map(n=>id(n)).join(",");return`${t.op}(${e})`}}function cw(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Tn(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&cw(o,i.filters[l]),!0):!1}(t,e):void X()}function hw(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(hw).join(" ,")+"}"}(t):"Filter"}class dP extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class fP extends je{constructor(e,n){super(e,"in",n),this.keys=dw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pP extends je{constructor(e,n){super(e,"not-in",n),this.keys=dw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class mP extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&Wo(n.arrayValue,this.value)}}class gP extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class yP extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wo(this.value.arrayValue,n)}}class _P extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ty(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vP(t,e,n,r,i,s,o)}function Vf(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ou(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ue=n}return e.ue}function Lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ey(t.startAt,e.startAt)&&ey(t.endAt,e.endAt)}function sd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wP(t,e,n,r,i,s,o,l){return new bu(t,e,n,r,i,s,o,l)}function fw(t){return new bu(t)}function ny(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EP(t){return t.collectionGroup!==null}function yo(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new su(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new su(Xe.keyField(),r))}return e.ce}function wn(t){const e=ne(t);return e.le||(e.le=TP(e,yo(t))),e.le}function TP(t,e){if(t.limitType==="F")return ty(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new su(i.field,s)});const n=t.endAt?new iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new iu(t.startAt.position,t.startAt.inclusive):null;return ty(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function od(t,e,n){return new bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vu(t,e){return Lf(wn(t),wn(e))&&t.limitType===e.limitType}function pw(t){return`${Vf(wn(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hw(i)).join(", ")}]`),Ou(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ds(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Lu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Zg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const h=Zg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,yo(r),i))}(t,e)}function IP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mw(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=SP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SP(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?hs(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Re(G.comparator);function Kn(){return RP}const gw=new Re(G.comparator);function no(...t){let e=gw;for(const n of t)e=e.insert(n.key,n);return e}function yw(t){let e=gw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return _o()}function _w(){return _o()}function _o(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const AP=new Re(G.comparator),kP=new Ze(G.comparator);function ie(...t){let e=kP;for(const n of t)e=e.add(n);return e}const PP=new Ze(ue);function CP(){return PP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ru(e)?"-0":e}}function vw(t){return{integerValue:""+t}}function NP(t,e){return sP(e)?vw(e):Mf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this._=void 0}}function xP(t,e,n){return t instanceof ou?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Df(s)&&(s=Of(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qo?Ew(t,e):t instanceof Ko?Tw(t,e):function(i,s){const o=ww(i,s),l=ry(o)+ry(i.Pe);return rd(o)&&rd(i.Pe)?vw(l):Mf(i.serializer,l)}(t,e)}function DP(t,e,n){return t instanceof qo?Ew(t,e):t instanceof Ko?Tw(t,e):n}function ww(t,e){return t instanceof au?function(r){return rd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ou extends Mu{}class qo extends Mu{constructor(e){super(),this.elements=e}}function Ew(t,e){const n=Iw(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends Mu{constructor(e){super(),this.elements=e}}function Tw(t,e){let n=Iw(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class au extends Mu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ry(t){return De(t.integerValue||t.doubleValue)}function Iw(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qo&&i instanceof qo||r instanceof Ko&&i instanceof Ko?cs(r.elements,i.elements,Tn):r instanceof au&&i instanceof au?Tn(r.Pe,i.Pe):r instanceof ou&&i instanceof ou}(t.transform,e.transform)}class bP{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uu{}function Sw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uf(t.key,an.none()):new aa(t.key,t.data,an.none());{const n=t.data,r=kt.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Mt(i.toArray()),an.none())}}function VP(t,e,n){t instanceof aa?function(i,s,o){const l=i.value.clone(),u=sy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,o){if(!Tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=sy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Rw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof aa?function(s,o,l,u){if(!Tl(s.precondition,o))return l;const h=s.value.clone(),f=oy(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,o,l,u){if(!Tl(s.precondition,o))return l;const h=oy(s.fieldTransforms,u,o),f=o.data;return f.setAll(Rw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,o,l){return Tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ww(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&cs(r,i,(s,o)=>OP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends Uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Rw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sy(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,DP(o,l,n[i]))}return r}function oy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xP(s,o,e))}return r}class Uf extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MP extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_w();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Sw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>iy(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>iy(n,r))}}class Ff{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return AP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ff(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,oe;function BP(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Aw(t){if(t===void 0)return qn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(oe=Le||(Le={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new ri([4294967295,4294967295],0);function ay(t){const e=zP().encode(t),n=new Y0;return n.update(e),new Uint8Array(n.digest())}function ly(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ri([n,r],0),new ri([i,s],0)]}class jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ri.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ri.fromNumber(r)));return i.compare($P)===1&&(i=new ri([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ay(e),[r,i]=ly(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new jf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ay(e),[r,i]=ly(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fu(te.min(),i,new Re(ue),Kn(),ie())}}class la{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new la(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class kw{constructor(e,n){this.targetId=e,this.me=n}}class Pw{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uy{constructor(){this.fe=0,this.ge=hy(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new la(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=hy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class HP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=cy(),this.Qe=new Re(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(sd(s))if(r===0){const o=new G(s.path);this.Ue(n,o,ht.newNoDocument(o,te.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=pi(r).toUint8Array()}catch(u){if(u instanceof sw)return us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new jf(o,i,s)}catch(u){return us(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&sd(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Fu(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=cy(),this.Qe=new Re(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new uy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new uy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function cy(){return new Re(G.comparator)}function hy(){return new Re(G.comparator)}const WP={asc:"ASCENDING",desc:"DESCENDING"},qP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KP={and:"AND",or:"OR"};class GP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ad(t,e){return t.useProto3Json||Ou(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QP(t,e){return lu(t,e.toTimestamp())}function En(t){return fe(!!t),te.fromTimestamp(function(n){const r=Nr(n);return new ze(r.seconds,r.nanos)}(t))}function Bf(t,e){return ld(t,e).canonicalString()}function ld(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Nw(t){const e=Ee.fromString(t);return fe(Vw(e)),e}function ud(t,e){return Bf(t.databaseId,e.path)}function Wc(t,e){const n=Nw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Dw(n))}function xw(t,e){return Bf(t.databaseId,e)}function YP(t){const e=Nw(t);return e.length===4?Ee.emptyPath():Dw(e)}function cd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dw(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dy(t,e,n){return{name:ud(t,e),fields:n.value.mapValue.fields}}function XP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:Aw(h.code);return new q(f,h.message||"")}(o);n=new Pw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wc(t,r.document.name),s=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):te.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Il(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wc(t,r.document),s=r.readTime?En(r.readTime):te.min(),o=ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Il([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wc(t,r.document),s=r.removedTargetIds||[];n=new Il([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new jP(i,s),l=r.targetId;n=new kw(l,o)}}return n}function JP(t,e){let n;if(e instanceof aa)n={update:dy(t,e.key,e.value)};else if(e instanceof Uf)n={delete:ud(t,e.key)};else if(e instanceof Ur)n={update:dy(t,e.key,e.data),updateMask:aC(e.fieldMask)};else{if(!(e instanceof MP))return X();n={verify:ud(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ou)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof au)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:QP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function ZP(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?En(i.updateTime):En(s);return o.isEqual(te.min())&&(o=En(s)),new bP(o,i.transformResults||[])}(n,e))):[]}function eC(t,e){return{documents:[xw(t,e.path)]}}function tC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xw(t,i);const s=function(h){if(h.length!==0)return bw(In.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:Di(p.field),direction:iC(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ad(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function nC(t){let e=YP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(y){const p=Ow(y);return p instanceof In&&uw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(p=>function(P){return new su(Oi(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(y){let p;return p=typeof y=="object"?y.value:y,Ou(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(y){const p=!!y.before,R=y.values||[];return new iu(R,p)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const p=!y.before,R=y.values||[];return new iu(R,p)}(n.endAt)),wP(e,i,o,s,l,"F",u,h)}function rC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ow(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oi(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oi(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return je.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>Ow(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function iC(t){return WP[t]}function sC(t){return qP[t]}function oC(t){return KP[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Oi(t){return Xe.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof je?function(n){if(n.op==="=="){if(Jg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NAN"}};if(Xg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NAN"}};if(Xg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(n.field),op:sC(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>bw(i));return r.length===1?r[0]:{compositeFilter:{op:oC(n.op),filters:r}}}(t):X()}function aC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.ct=e}}function uC(t){const e=nC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.un=new hC}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class hC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new fs(0)}static kn(){return new fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vo(r.mutation,i,Mt.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=_o(),l=function(){return _o()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ur)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),vo(f.mutation,h,f.mutation.getFieldMask(),ze.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var y;return l.set(h,new fC(f,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=_o();let i=new Re((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Mt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=_w();f.forEach(p=>{if(!s.has(p)){const R=Sw(n.get(p),r.get(p));R!==null&&y.set(p,R),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(ei());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:yw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(y,p){return new bu(p,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((y,p)=>{o=o.insert(y,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))});let l=no();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&vo(f.mutation,h,Mt.empty(),ze.now()),Lu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:En(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:uC(i.bundledQuery),readTime:En(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.overlays=new Re(G.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=ei(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FP(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.Tr=new Ze($e.Er),this.dr=new Ze($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Ee([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Ee([])),r=new $e(n,e),i=new $e(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze($e.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ue);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new $e(new G(s),0);let l=new Ze(ue);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.Mr=e,this.docs=function(){return new Re(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||tP(eP(f),r)<=0||(i.has(f.key)||Lu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wC(this)}getSize(e){return L.resolve(this.size)}}class wC extends dC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.persistence=e,this.Nr=new Es(n=>Vf(n),Lf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zf,this.targetCount=0,this.kr=fs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new xf(0),this.Kr=!1,this.Kr=!0,this.$r=new yC,this.referenceDelegate=e(this),this.Ur=new EC(this),this.indexManager=new cC,this.remoteDocumentCache=function(i){return new vC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new lC(n),this.Gr=new mC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _C(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new IC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class IC extends rP{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Jr=new zf,this.Yr=null}static Zr(e){return new $f(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dS()?8:iP(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new SC;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ks()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ks()<=se.DEBUG&&H("QueryEngine","Query:",xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ks()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):L.resolve())}Yi(e,n){if(ny(n))return L.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=od(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,od(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return ny(n)||i.isEqual(te.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Ks()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xi(n)),this.rs(e,o,n,Zk(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(mw(e));return n.forEach((i,s)=>{Lu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ks()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",xi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Cr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(ue),this._s=new Es(s=>Vf(s),Lf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kC(t,e,n,r){return new AC(t,e,n,r)}async function Lw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function PC(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,p=y.keys();let R=L.resolve();return p.forEach(P=>{R=R.next(()=>f.getEntry(u,P)).next(x=>{const O=h.docVersions.get(P);fe(O!==null),x.version.compareTo(O)<0&&(y.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Mw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function CC(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const p=i.get(y);if(!p)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,y)));let R=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?R=R.withResumeToken(tt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(y,R),function(x,O,S){return x.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,R,f)&&l.push(n.Ur.updateTargetData(s,R))});let u=Kn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(NC(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(te.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(y=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function NC(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function xC(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DC(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function hd(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function fy(t,e,n){const r=ne(t);let i=te.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const y=ne(u),p=y._s.get(f);return p!==void 0?L.resolve(y.os.get(p)):y.Ur.getTargetData(h,f)}(r,o,wn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ie())).next(l=>(OC(r,IP(e),l),{documents:l,Ts:s})))}function OC(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class py{constructor(){this.activeTargetIds=CP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bC{constructor(){this.so=new py,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new py,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=null;function qc(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class UC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=qc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw us("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=LC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qc();return new Promise((o,l)=>{const u=new X0;u.setWithCredentials(!0),u.listenOnce(J0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wl.NO_ERROR:const f=u.getResponseJson();H(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case wl.TIMEOUT:H(lt,`RPC '${e}' ${s} timed out`),l(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const y=u.getStatus();if(H(lt,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const R=p==null?void 0:p.error;if(R&&R.status&&R.message){const P=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(R.status);l(new q(P,R.message))}else l(new q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(lt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=qc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tw(),l=ew(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(lt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=o.createWebChannel(f,u);let p=!1,R=!1;const P=new MC({Io:O=>{R?H(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(p||(H(lt,`Opening RPC '${e}' stream ${i} transport.`),y.open(),p=!0),H(lt,`RPC '${e}' stream ${i} sending:`,O),y.send(O))},To:()=>y.close()}),x=(O,S,_)=>{O.listen(S,E=>{try{_(E)}catch(N){setTimeout(()=>{throw N},0)}})};return x(y,to.EventType.OPEN,()=>{R||(H(lt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),x(y,to.EventType.CLOSE,()=>{R||(R=!0,H(lt,`RPC '${e}' stream ${i} transport closed`),P.So())}),x(y,to.EventType.ERROR,O=>{R||(R=!0,us(lt,`RPC '${e}' stream ${i} transport errored:`,O),P.So(new q(M.UNAVAILABLE,"The operation could not be completed")))}),x(y,to.EventType.MESSAGE,O=>{var S;if(!R){const _=O.data[0];fe(!!_);const E=_,N=E.error||((S=E[0])===null||S===void 0?void 0:S.error);if(N){H(lt,`RPC '${e}' stream ${i} received error:`,N);const b=N.status;let U=function(v){const I=Le[v];if(I!==void 0)return Aw(I)}(b),w=N.message;U===void 0&&(U=M.INTERNAL,w="Unknown error status: "+b+" with message "+N.message),R=!0,P.So(new q(U,w)),y.close()}else H(lt,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),x(l,Z0.STAT_EVENT,O=>{O.stat===td.PROXY?H(lt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===td.NOPROXY&&H(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){return new GP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Uw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FC extends Fw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=XP(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?En(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=cd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=sd(u)?{documents:eC(s,u)}:{query:tC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Cw(s,o.resumeToken);const h=ad(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=lu(s,o.snapshotVersion.toTimestamp());const h=ad(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=rC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=cd(this.serializer),n.removeTarget=e,this.a_(n)}}class jC extends Fw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ZP(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=cd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ld(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ld(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class zC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.L_.add(4),await ua(h),h.q_.set("Unknown"),h.L_.delete(4),await Bu(h)}(this))})}),this.q_=new zC(r,i)}}async function Bu(t){if(Ti(t))for(const e of t.B_)await e(!0)}async function ua(t){for(const e of t.B_)await e(!1)}function jw(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Gf(n)?Kf(n):Ts(n).r_()&&qf(n,e))}function Wf(t,e){const n=ne(t),r=Ts(n);n.N_.delete(e),r.r_()&&Bw(n,e),n.N_.size===0&&(r.r_()?r.o_():Ti(n)&&n.q_.set("Unknown"))}function qf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ts(t).A_(e)}function Bw(t,e){t.Q_.xe(e),Ts(t).R_(e)}function Kf(t){t.Q_=new HP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.q_.v_()}function Gf(t){return Ti(t)&&!Ts(t).n_()&&t.N_.size>0}function Ti(t){return ne(t).L_.size===0}function zw(t){t.Q_=void 0}async function HC(t){t.q_.set("Online")}async function WC(t){t.N_.forEach((e,n)=>{qf(t,e)})}async function qC(t,e){zw(t),Gf(t)?(t.q_.M_(e),Kf(t)):t.q_.set("Unknown")}async function KC(t,e,n){if(t.q_.set("Online"),e instanceof Pw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uu(t,r)}else if(e instanceof Il?t.Q_.Ke(e):e instanceof kw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Mw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Bw(s,u);const y=new fr(f.target,u,h,f.sequenceNumber);qf(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await uu(t,r)}}async function uu(t,e,n){if(!oa(e))throw e;t.L_.add(1),await ua(t),t.q_.set("Offline"),n||(n=()=>Mw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Bu(t)})}function $w(t,e){return e().catch(n=>uu(t,n,e))}async function zu(t){const e=ne(t),n=xr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;GC(e);)try{const i=await xC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,QC(e,i)}catch(i){await uu(e,i)}Hw(e)&&Ww(e)}function GC(t){return Ti(t)&&t.O_.length<10}function QC(t,e){t.O_.push(e);const n=xr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Hw(t){return Ti(t)&&!xr(t).n_()&&t.O_.length>0}function Ww(t){xr(t).start()}async function YC(t){xr(t).p_()}async function XC(t){const e=xr(t);for(const n of t.O_)e.m_(n.mutations)}async function JC(t,e,n){const r=t.O_.shift(),i=Ff.from(r,e,n);await $w(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zu(t)}async function ZC(t,e){e&&xr(t).V_&&await async function(r,i){if(function(o){return BP(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();xr(r).s_(),await $w(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zu(r)}}(t,e),Hw(t)&&Ww(t)}async function gy(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.L_.add(3),await ua(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Bu(n)}async function eN(t,e){const n=ne(t);e?(n.L_.delete(2),await Bu(n)):e||(n.L_.add(2),await ua(n),n.q_.set("Unknown"))}function Ts(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new FC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:HC.bind(null,t),Ro:WC.bind(null,t),mo:qC.bind(null,t),d_:KC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Gf(t)?Kf(t):t.q_.set("Unknown")):(await t.K_.stop(),zw(t))})),t.K_}function xr(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new jC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:YC.bind(null,t),mo:ZC.bind(null,t),f_:XC.bind(null,t),g_:JC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await zu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Qf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yf(t,e){if(qn("AsyncQueue",`${e}: ${t}`),oa(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.W_=new Re(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,ts.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class nN{constructor(){this.queries=_y(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=_y(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function _y(){return new Es(t=>pw(t),Vu)}async function rN(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new tN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Yf(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Xf(n)}async function iN(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sN(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Xf(n)}function oN(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Xf(t){t.Y_.forEach(e=>{e.next()})}var dd,vy;(vy=dd||(dd={})).ea="default",vy.Cache="cache";class aN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.key=e}}class Kw{constructor(e){this.key=e}}class lN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=mw(e),this.Ra=new ts(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new yy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const p=i.get(f),R=Lu(this.query,y)?y:null,P=!!p&&this.mutatedKeys.has(p.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let O=!1;p&&R?p.data.isEqual(R.data)?P!==x&&(r.track({type:3,doc:R}),O=!0):this.ga(p,R)||(r.track({type:2,doc:R}),O=!0,(u&&this.Aa(R,u)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!p&&R?(r.track({type:0,doc:R}),O=!0):p&&!R&&(r.track({type:1,doc:p}),O=!0,(u||h)&&(l=!0)),O&&(R?(o=o.add(R),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,y)=>function(R,P){const x=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return x(R)-x(P)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new ps(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Kw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new qw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ps.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cN{constructor(e){this.key=e,this.va=!1}}class hN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Es(l=>pw(l),Vu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(G.comparator),this.Na=new Map,this.La=new zf,this.Ba={},this.ka=new Map,this.qa=fs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dN(t,e,n=!0){const r=Zw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Gw(r,e,n,!0),i}async function fN(t,e){const n=Zw(t);await Gw(n,e,!0,!1)}async function Gw(t,e,n,r){const i=await DC(t.localStore,wn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await pN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&jw(t.remoteStore,i),l}async function pN(t,e,n,r,i){t.Ka=(y,p,R)=>async function(x,O,S,_){let E=O.view.ma(S);E.ns&&(E=await fy(x.localStore,O.query,!1).then(({documents:w})=>O.view.ma(w,E)));const N=_&&_.targetChanges.get(O.targetId),b=_&&_.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(E,x.isPrimaryClient,N,b);return Ey(x,O.targetId,U.wa),U.snapshot}(t,y,p,R);const s=await fy(t.localStore,e,!0),o=new lN(e,s.Ts),l=o.ma(s.documents),u=la.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Ey(t,n,h.wa);const f=new uN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function mN(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Vu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Wf(r.remoteStore,i.targetId),fd(r,i.targetId)}).catch(sa)):(fd(r,i.targetId),await hd(r.localStore,i.targetId,!0))}async function gN(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wf(n.remoteStore,r.targetId))}async function yN(t,e,n){const r=SN(t);try{const i=await function(o,l){const u=ne(o),h=ze.now(),f=l.reduce((R,P)=>R.add(P.key),ie());let y,p;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=Kn(),x=ie();return u.cs.getEntries(R,f).next(O=>{P=O,P.forEach((S,_)=>{_.isValidDocument()||(x=x.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(O=>{y=O;const S=[];for(const _ of l){const E=LP(_,y.get(_.key).overlayedDocument);E!=null&&S.push(new Ur(_.key,E,ow(E.value.mapValue),an.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,S,l)}).next(O=>{p=O;const S=O.applyToLocalDocumentSet(y,x);return u.documentOverlayCache.saveOverlays(R,O.batchId,S)})}).then(()=>({batchId:p.batchId,changes:yw(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Re(ue)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ca(r,i.changes),await zu(r.remoteStore)}catch(i){const s=Yf(i,"Failed to persist write");n.reject(s)}}async function Qw(t,e){const n=ne(t);try{const r=await CC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await ca(n,r,e)}catch(r){await sa(r)}}function wy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const p of y.j_)p.Z_(l)&&(h=!0)}),h&&Xf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _N(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(G.comparator);o=o.insert(s,ht.newNoDocument(s,te.min()));const l=ie().add(s),u=new Fu(te.min(),new Map,new Re(ue),o,l);await Qw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Jf(r)}else await hd(r.localStore,e,!1).then(()=>fd(r,e,n)).catch(sa)}async function vN(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await PC(n.localStore,e);Xw(n,r,null),Yw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ca(n,i)}catch(i){await sa(i)}}async function wN(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(fe(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Xw(r,e,n),Yw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ca(r,i)}catch(i){await sa(i)}}function Yw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Xw(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function fd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Jw(t,r)})}function Jw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Wf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jf(t))}function Ey(t,e,n){for(const r of n)r instanceof qw?(t.La.addReference(r.key,e),EN(t,r)):r instanceof Kw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Jw(t,r.key)):X()}function EN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jf(t))}function Jf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new cN(n)),t.Oa=t.Oa.insert(n,r),jw(t.remoteStore,new fr(wn(fw(n.path)),r,"TargetPurposeLimboResolution",xf.oe))}}async function ca(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){i.push(h);const y=Hf.Wi(u.targetId,h);s.push(y)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>L.forEach(h,p=>L.forEach(p.$i,R=>f.persistence.referenceDelegate.addReference(y,p.targetId,R)).next(()=>L.forEach(p.Ui,R=>f.persistence.referenceDelegate.removeReference(y,p.targetId,R)))))}catch(y){if(!oa(y))throw y;H("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const p=y.targetId;if(!y.fromCache){const R=f.os.get(p),P=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(p,x)}}}(r.localStore,s))}async function TN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Lw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ca(n,r.hs)}}function IN(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Zw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_N.bind(null,e),e.Ca.d_=sN.bind(null,e.eventManager),e.Ca.$a=oN.bind(null,e.eventManager),e}function SN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wN.bind(null,e),e}class cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ju(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return kC(this.persistence,new RC,e.initialUser,this.serializer)}Ga(e){return new TC($f.Zr,this.serializer)}Wa(e){return new bC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cu.provider={build:()=>new cu};class pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TN.bind(null,this.syncEngine),await eN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nN}()}createDatastore(e){const n=ju(e.databaseInfo.databaseId),r=function(s){return new UC(s)}(e.databaseInfo);return function(s,o,l,u){return new BC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new $C(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wy(this.syncEngine,n,0),function(){return my.D()?new my:new VC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const y=new hN(i,s,o,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ua(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pd.provider={build:()=>new pd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=rw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ty(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gy(e.remoteStore,i)),t._onlineComponents=e}async function kN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;us("Error using user provided cache. Falling back to memory cache: "+n),await Gc(t,new cu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new cu);return t._offlineComponents}async function eE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Ty(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Ty(t,new pd))),t._onlineComponents}function PN(t){return eE(t).then(e=>e.syncEngine)}async function CN(t){const e=await eE(t),n=e.eventManager;return n.onListen=dN.bind(null,e.syncEngine),n.onUnlisten=mN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gN.bind(null,e.syncEngine),n}function NN(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new RN({next:p=>{f.Za(),o.enqueueAndForget(()=>iN(s,y)),p.fromCache&&u.source==="server"?h.reject(new q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),y=new aN(l,f,{includeMetadataChanges:!0,_a:!0});return rN(s,y)}(await CN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xN(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sy(t){if(!G.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ry(t){if(G.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function gi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zf(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $u{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hk;switch(r.type){case"firstParty":return new Gk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Iy.delete(n),r.terminate())}(this),Promise.resolve()}}function DN(t,e,n,r={}){var i;const s=(t=gi(t,$u))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=c0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(h)}t._authCredentials=new Wk(new nw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hu(this.firestore,e,this._query)}}class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Rr extends Hu{constructor(e,n,r){super(e,n,fw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new G(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function ON(t,e,...n){if(t=Ce(t),nE("collection","path",e),t instanceof $u){const r=Ee.fromString(e,...n);return Ry(r),new Rr(t,null,r)}{if(!(t instanceof Kt||t instanceof Rr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Ry(r),new Rr(t.firestore,null,r)}}function md(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=rw.newId()),nE("doc","path",e),t instanceof $u){const r=Ee.fromString(e,...n);return Sy(r),new Kt(t,null,new G(r))}{if(!(t instanceof Kt||t instanceof Rr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Sy(r),new Kt(t.firestore,t instanceof Rr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Uw(this,"async_queue_retry"),this.Vu=()=>{const r=Kc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!oa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Qf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ha extends $u{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ky,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ky(e),this._firestoreClient=void 0,await e}}}function bN(t,e){const n=typeof t=="object"?t:_f(),r=typeof t=="string"?t:"(default)",i=Cu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=a0("firestore");s&&DN(i,...s)}return i}function rE(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||VN(t),t._firestoreClient}function VN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new aP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,tE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new AN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(tt.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=/^__.*__$/;class MN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}class iE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return hu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(sE(this.Cu)&&LN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class UN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ju(e)}Qu(e,n,r,i=!1){return new rp({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oE(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new UN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FN(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ip("Data must be an object, but it was:",o,r);const l=aE(r,o);let u,h;if(s.merge)u=new Mt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const p=gd(e,y,n);if(!o.contains(p))throw new q(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uE(f,p)||f.push(p)}u=new Mt(f),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new MN(new kt(l),u,h)}class qu extends ep{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qu}}function jN(t,e,n,r){const i=t.Qu(1,e,n);ip("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();Ei(r,(u,h)=>{const f=sp(e,u,n);h=Ce(h);const y=i.Nu(f);if(h instanceof qu)s.push(f);else{const p=Ku(h,y);p!=null&&(s.push(f),o.set(f,p))}});const l=new Mt(s);return new iE(o,l,i.fieldTransforms)}function BN(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[gd(e,r,n)],u=[i];if(s.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(gd(e,s[p])),u.push(s[p+1]);const h=[],f=kt.empty();for(let p=l.length-1;p>=0;--p)if(!uE(h,l[p])){const R=l[p];let P=u[p];P=Ce(P);const x=o.Nu(R);if(P instanceof qu)h.push(R);else{const O=Ku(P,x);O!=null&&(h.push(R),f.set(R,O))}}const y=new Mt(h);return new iE(f,y,o.fieldTransforms)}function Ku(t,e){if(lE(t=Ce(t)))return ip("Unsupported field value:",e,t),aE(t,e);if(t instanceof ep)return function(r,i){if(!sE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ku(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:lu(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(i.serializer,s)}}if(r instanceof tp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ms)return{bytesValue:Cw(i.serializer,r._byteString)};if(r instanceof Kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof np)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Zf(r)}`)}(t,e)}function aE(t,e){const n={};return iw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ei(t,(r,i)=>{const s=Ku(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof tp||t instanceof ms||t instanceof Kt||t instanceof ep||t instanceof np)}function ip(t,e,n){if(!lE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function gd(t,e,n){if((e=Ce(e))instanceof Wu)return e._internalPath;if(typeof e=="string")return sp(t,e);throw hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const zN=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(zN)>=0)throw hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wu(...e.split("."))._internalPath}catch{throw hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function uE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $N(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $N extends cE{data(){return super.data()}}function hE(t,e){return typeof e=="string"?sp(t,e):e instanceof Wu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WN{convertValue(e,n="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ei(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new np(s)}convertGeoPoint(e){return new tp(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Of(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($o(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);fe(Vw(r));const i=new Ho(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KN extends cE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sl extends KN{data(e={}){return super.data(e)}}class GN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Za(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new Za(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Sl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Za(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Sl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Za(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:QN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class YN extends WN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function XN(t){t=gi(t,Hu);const e=gi(t.firestore,ha),n=rE(e),r=new YN(e);return HN(t._query),NN(n,t._query).then(i=>new GN(e,r,t,i))}function JN(t,e,n,...r){t=gi(t,Kt);const i=gi(t.firestore,ha),s=oE(i);let o;return o=typeof(e=Ce(e))=="string"||e instanceof Wu?BN(s,"updateDoc",t._key,e,n,r):jN(s,"updateDoc",t._key,e),op(i,[o.toMutation(t._key,an.exists(!0))])}function ZN(t){return op(gi(t.firestore,ha),[new Uf(t._key,an.none())])}function ex(t,e){const n=gi(t.firestore,ha),r=md(t),i=qN(t.converter,e);return op(n,[FN(oE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function op(t,e){return function(r,i){const s=new Sr;return r.asyncQueue.enqueueAndForget(async()=>yN(await PN(r),i,s)),s.promise}(rE(t),e)}(function(e,n=!0){(function(i){ws=i})(wi),ci(new Pr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ha(new qk(r.getProvider("auth-internal")),new Yk(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_n(qg,"4.7.3",e),_n(qg,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebasestorage.googleapis.com",fE="storageBucket",tx=2*60*1e3,nx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Sn{constructor(e,n,r=0){super(Qc(e),`Firebase Storage: ${n} (${Qc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function Qc(t){return"storage/"+t}function ap(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Ne.UNKNOWN,t)}function rx(t){return new xe(Ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ix(t){return new xe(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ne.UNAUTHENTICATED,t)}function ox(){return new xe(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ax(t){return new xe(Ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function lx(){return new xe(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ux(){return new xe(Ne.CANCELED,"User canceled the upload/download.")}function cx(t){return new xe(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function hx(t){return new xe(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dx(){return new xe(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fE+"' property when initializing the app?")}function fx(){return new xe(Ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function px(){return new xe(Ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mx(t){return new xe(Ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yd(t){return new xe(Ne.INVALID_ARGUMENT,t)}function pE(){return new xe(Ne.APP_DELETED,"The Firebase app was deleted.")}function gx(t){return new xe(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wo(t,e){return new xe(Ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Gs(t){throw new xe(Ne.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(r.path==="")return r;throw hx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",R=new RegExp(`^https?://${y}/${f}/b/${i}/o${p}`,"i"),P={bucket:1,path:3},x=n===dE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",S=new RegExp(`^https?://${x}/${i}/${O}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:R,indices:P,postModify:h},{regex:S,indices:{bucket:1,path:2},postModify:h}];for(let N=0;N<E.length;N++){const b=E[N],U=b.regex.exec(e);if(U){const w=U[b.indices.bucket];let g=U[b.indices.path];g||(g=""),r=new wt(w,g),b.postModify(r);break}}if(r==null)throw cx(e);return r}}class yx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function y(O){i=setTimeout(()=>{i=null,t(R,u())},O)}function p(){s&&clearTimeout(s)}function R(O,...S){if(h){p();return}if(O){p(),f.call(null,O,...S);return}if(u()||o){p(),f.call(null,O,...S);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,y(E)}let P=!1;function x(O){P||(P=!0,p(),!h&&(i!==null?(O||(l=2),clearTimeout(i),y(0)):O||(l=1)))}return y(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function vx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){return t!==void 0}function Ex(t){return typeof t=="object"&&!Array.isArray(t)}function lp(t){return typeof t=="string"||t instanceof String}function Py(t){return up()&&t instanceof Blob}function up(){return typeof Blob<"u"}function _d(t,e,n,r){if(r<e)throw yd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function mE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ii||(ii={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,r,i,s,o,l,u,h,f,y,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=y,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new el(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ii.NO_ERROR,u=s.getStatus();if(!l||Tx(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===ii.ABORT;r(!1,new el(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new el(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());wx(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=ap();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?pE():ux();o(u)}else{const u=lx();o(u)}};this.canceled_?n(!1,new el(!1,null,!0)):this.backoffId_=_x(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class el{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Sx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Rx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ax(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Px(t,e,n,r,i,s,o=!0){const l=mE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return Ax(h,e),Sx(h,n),Rx(h,s),kx(h,r),new Ix(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nx(...t){const e=Cx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(up())return new Blob(t);throw new xe(Ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){if(typeof atob>"u")throw mx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yc{constructor(e,n){this.data=e,this.contentType=n||null}}function Ox(t,e){switch(t){case mn.RAW:return new Yc(gE(e));case mn.BASE64:case mn.BASE64URL:return new Yc(yE(t,e));case mn.DATA_URL:return new Yc(Vx(e),Lx(e))}throw ap()}function gE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bx(t){let e;try{e=decodeURIComponent(t)}catch{throw wo(mn.DATA_URL,"Malformed data URL.")}return gE(e)}function yE(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Dx(e)}catch(i){throw i.message.includes("polyfill")?i:wo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class _E{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wo(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Mx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Vx(t){const e=new _E(t);return e.base64?yE(mn.BASE64,e.rest):bx(e.rest)}function Lx(t){return new _E(t).contentType}function Mx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){let r=0,i="";Py(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Py(this.data_)){const r=this.data_,i=xx(r,e,n);return i===null?null:new cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cr(r,!0)}}static getBlob(...e){if(up()){const n=e.map(r=>r instanceof cr?r.data_:r);return new cr(Nx.apply(null,n))}else{const n=e.map(o=>lp(o)?Ox(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new cr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){let e;try{e=JSON.parse(t)}catch{return null}return Ex(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function vE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e){return e}class _t{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jx}}let tl=null;function Bx(t){return!lp(t)||t.length<2?t:vE(t)}function wE(){if(tl)return tl;const t=[];t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));function e(s,o){return Bx(o)}const n=new _t("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new _t("size");return i.xform=r,t.push(i),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),tl=t,tl}function zx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function $x(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return zx(r,t),r}function EE(t,e,n){const r=cp(e);return r===null?null:$x(t,r,n)}function Hx(t,e,n,r){const i=cp(e);if(i===null||!lp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,y=t.fullPath,p="/b/"+o(f)+"/o/"+o(y),R=Gu(p,n,r),P=mE({alt:"media",token:h});return R+P})[0]}function Wx(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="prefixes",Ny="items";function qx(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Cy])for(const i of n[Cy]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new wt(e,s));r.prefixes.push(o)}if(n[Ny])for(const i of n[Ny]){const s=t._makeStorageReference(new wt(e,i.name));r.items.push(s)}return r}function Kx(t,e,n){const r=cp(n);return r===null?null:qx(t,e,r)}class hp{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){if(!t)throw ap()}function Gx(t,e){function n(r,i){const s=EE(t,i,e);return dp(s!==null),s}return n}function Qx(t,e){function n(r,i){const s=Kx(t,e,i);return dp(s!==null),s}return n}function Yx(t,e){function n(r,i){const s=EE(t,i,e);return dp(s!==null),Hx(s,i,t.host,t._protocol)}return n}function fp(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ox():i=sx():n.getStatus()===402?i=ix(t.bucket):n.getStatus()===403?i=ax(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Xx(t){const e=fp(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=rx(t.path)),s.serverResponse=i.serverResponse,s}return n}function Jx(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),l=Gu(o,t.host,t._protocol),u="GET",h=t.maxOperationRetryTime,f=new hp(l,u,Qx(t,e.bucket),h);return f.urlParams=s,f.errorHandler=fp(e),f}function Zx(t,e,n){const r=e.fullServerUrl(),i=Gu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new hp(i,s,Yx(t,n),o);return l.errorHandler=Xx(e),l}function e2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function t2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=e2(null,e)),r}function n2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=t2(e,r,i),f=Wx(h,n),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,p=`\r
--`+u+"--",R=cr.getBlob(y,r,p);if(R===null)throw fx();const P={name:h.fullPath},x=Gu(s,t.host,t._protocol),O="POST",S=t.maxUploadRetryTime,_=new hp(x,O,Gx(t,n),S);return _.urlParams=P,_.headers=o,_.body=R.uploadData(),_.errorHandler=fp(e),_}class r2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class i2 extends r2{initXhr(){this.xhr_.responseType="text"}}function pp(){return new i2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yi(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vE(this._location.path)}get storage(){return this._service}get parent(){const e=Ux(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new yi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gx(e)}}function s2(t,e,n){t._throwIfRoot("uploadBytes");const r=n2(t.storage,t._location,wE(),new cr(e,!0),n);return t.storage.makeRequestWithTokens(r,pp).then(i=>({metadata:i,ref:t}))}function o2(t){const e={prefixes:[],items:[]};return TE(t,e).then(()=>e)}async function TE(t,e,n){const i=await a2(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await TE(t,e,i.nextPageToken)}function a2(t,e){e!=null&&typeof e.maxResults=="number"&&_d("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Jx(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,pp)}function l2(t){t._throwIfRoot("getDownloadURL");const e=Zx(t.storage,t._location,wE());return t.storage.makeRequestWithTokens(e,pp).then(n=>{if(n===null)throw px();return n})}function u2(t,e){const n=Fx(t._location.path,e),r=new wt(t._location.bucket,n);return new yi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){return/^[A-Za-z]+:\/\//.test(t)}function h2(t,e){return new yi(t,e)}function IE(t,e){if(t instanceof mp){const n=t;if(n._bucket==null)throw dx();const r=new yi(n,n._bucket);return e!=null?IE(r,e):r}else return e!==void 0?u2(t,e):t}function d2(t,e){if(e&&c2(e)){if(t instanceof mp)return h2(t,e);throw yd("To use ref(service, url), the first argument must be a Storage instance.")}else return IE(t,e)}function xy(t,e){const n=e==null?void 0:e[fE];return n==null?null:wt.makeFromBucketSpec(n,t)}function f2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:c0(i,t.app.options.projectId))}class mp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tx,this._maxUploadRetryTime=nx,this._requests=new Set,i!=null?this._bucket=wt.makeFromBucketSpec(i,this._host):this._bucket=xy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=xy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_d("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_d("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new yx(pE());{const o=Px(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Dy="@firebase/storage",Oy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="storage";function p2(t,e,n){return t=Ce(t),s2(t,e,n)}function m2(t){return t=Ce(t),o2(t)}function by(t){return t=Ce(t),l2(t)}function Vy(t,e){return t=Ce(t),d2(t,e)}function g2(t=_f(),e){t=Ce(t);const r=Cu(t,SE).getImmediate({identifier:e}),i=a0("storage");return i&&y2(r,...i),r}function y2(t,e,n,r={}){f2(t,e,n,r)}function _2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new mp(n,r,i,e,wi)}function v2(){ci(new Pr(SE,_2,"PUBLIC").setMultipleInstances(!0)),_n(Dy,Oy,""),_n(Dy,Oy,"esm2017")}v2();const w2={apiKey:"AIzaSyA0WcERYf6cJ0xepac2ZZGcUCPDWp_GDxc",authDomain:"firbasemademedoit.firebaseapp.com",projectId:"firbasemademedoit",storageBucket:"firbasemademedoit.appspot.com",messagingSenderId:"244972862635",appId:"1:244972862635:web:63a3e9e10ea3e418384bee",measurementId:"G-9DB8294LDB"},gp=f0(w2),zt=zk(gp),E2=new Dn,Xc=bN(gp),Ly=g2(gp);var Ge=[];for(var Jc=0;Jc<256;++Jc)Ge.push((Jc+256).toString(16).slice(1));function T2(t,e=0){return(Ge[t[e+0]]+Ge[t[e+1]]+Ge[t[e+2]]+Ge[t[e+3]]+"-"+Ge[t[e+4]]+Ge[t[e+5]]+"-"+Ge[t[e+6]]+Ge[t[e+7]]+"-"+Ge[t[e+8]]+Ge[t[e+9]]+"-"+Ge[t[e+10]]+Ge[t[e+11]]+Ge[t[e+12]]+Ge[t[e+13]]+Ge[t[e+14]]+Ge[t[e+15]]).toLowerCase()}var nl,I2=new Uint8Array(16);function S2(){if(!nl&&(nl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!nl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nl(I2)}var R2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const My={randomUUID:R2};function Uy(t,e,n){if(My.randomUUID&&!e&&!t)return My.randomUUID();t=t||{};var r=t.random||(t.rng||S2)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,T2(r)}const RE={movieName:"",release_year:1901,IsOscar:!1};function A2(t,e){switch(e.type){case"CHANGE":return{...t,[e.value.name]:e.value.userInput};case"RESET":return{initialFormDetails:RE};default:throw new Error("Hello😂")}}function k2(){const[t,e]=Ue.useState([]),[n,r]=Ue.useReducer(A2,RE),i=ON(Xc,"Movies"),[s,o]=Ue.useState(""),[l,u]=Ue.useState(),[h,f]=Ue.useState(""),[y,p]=Ue.useState([]);Ue.useEffect(()=>{U0(zt,E=>{E?(u(E.uid),qa.success("Login Succesful")):qa.info("LogOut Succesful")})},[]);const R=async E=>{const N=md(Xc,"Movies",E);await JN(N,{movieName:s}),qa.success("Movie Updated"),o("")},P=Vy(Ly,"projectFiles/"),x=async()=>{if(!h)return;const E=Vy(Ly,`projectFiles/${h.name+Uy()} `);try{await p2(E,h).then(N=>{by(N.ref).then(b=>{p(U=>[...U,b]),qa.success("ImageUploaded")})}),f("")}catch(N){console.log(N)}};Ue.useEffect(()=>{try{m2(P).then(E=>{E.items.forEach(N=>{by(N).then(b=>{p(U=>[...U,b])})})})}catch(E){console.table(E)}},[]);async function O(E){E.preventDefault();try{await ex(i,{movieName:n.movieName,release_year:n.release_year,IsOscar:n.IsOscar,userId:l})}catch(N){console.log(N)}r({type:"RESET"})}function S(E){r({type:"CHANGE",value:{name:E.target.name,userInput:E.target.value}})}Ue.useEffect(()=>{(async()=>{try{const b=(await XN(i)).docs.map(U=>({...U.data(),id:U.id}));e(b)}catch(N){console.log(N)}})()},[]);const _=async E=>{try{const N=md(Xc,"Movies",E);await ZN(N)}catch(N){console.log(N)}};return z.jsxs("div",{children:[z.jsx(X1,{richColors:!0}),z.jsxs("form",{onSubmit:O,onChange:S,style:{display:"flex",gap:"0.4rem",flexDirection:"column",maxWidth:"15rem"},children:[z.jsx("label",{htmlFor:"movieame",children:"Movie Title"}),z.jsx("input",{id:"movieame",type:"text",name:"movieName"}),z.jsx("label",{htmlFor:"releae_year",children:"Release Year"}),z.jsx("input",{id:"releae_year",type:"number",name:"release_year"}),z.jsx("label",{htmlFor:"IsOscar",children:"Oscar Awarded"}),z.jsxs("select",{name:"IsOscar",id:"IsOscar",children:[z.jsx("option",{value:!1,children:"False"}),z.jsx("option",{value:!0,children:"True"})]}),z.jsx("button",{type:"submit",children:"Submit"})]}),z.jsx("div",{children:t.map(E=>z.jsxs("div",{children:[z.jsx("h1",{style:{color:E.IsOscar?"green":"red"},children:E.movieName}),z.jsx("h3",{children:E.release_year}),z.jsx("button",{onClick:()=>_(E.id),children:"Delete Movie"}),z.jsx("label",{htmlFor:"upDateMovie",children:"Update Movie Title"}),z.jsx("input",{type:"text",id:"upDateMovie",onChange:N=>{o(N.target.value)},value:s}),z.jsx("button",{onClick:()=>R(E.id),children:"Update"})]},E.id))}),z.jsxs("div",{children:[z.jsx("br",{}),z.jsx("br",{}),z.jsx("input",{id:"file",type:"file",onChange:E=>{f(E.target.files[0])}}),z.jsx("button",{onClick:x,children:"Submit File"})]}),z.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"50vw"},children:y.map(E=>z.jsx("div",{children:z.jsx("img",{style:{width:"300px",margin:"10px"},src:E})},E+Uy()))})]})}function P2(){var u,h;const[t,e]=Ue.useState(""),[n,r]=Ue.useState("");U0(zt,f=>{f&&f.uid});async function i(){try{await PA(zt,t,n)}catch(f){console.log(f.code)}}async function s(){try{await kA(zt,t,n)}catch(f){console.log(f.code)}}async function o(){try{await XA(zt,E2)}catch(f){console.log(f.code)}}async function l(){try{await xA(zt)}catch(f){console.log(f.code)}}return z.jsxs("div",{children:[((u=zt==null?void 0:zt.currentUser)==null?void 0:u.photoURL)&&z.jsx("img",{src:(h=zt==null?void 0:zt.currentUser)==null?void 0:h.photoURL,alt:""}),z.jsxs("form",{onSubmit:f=>{f.preventDefault(),e(""),r("")},children:[z.jsx("label",{htmlFor:"email",children:"Email"}),z.jsx("input",{value:t,name:"email",id:"email",placeholder:"Email",type:"email",autoComplete:"on",onChange:f=>e(f.target.value)}),z.jsx("label",{htmlFor:"password",children:"Password"}),z.jsx("input",{id:"password",value:n,placeholder:"Password",type:"password",onChange:f=>r(f.target.value)})," ",z.jsx("button",{type:"submit",onClick:s,children:"Sign Up"})," ",z.jsx("button",{type:"submit",onClick:i,children:"Sign In"}),z.jsx("button",{onClick:o,children:"Sign In WIth Google"}),z.jsx("button",{onClick:l,children:"LogOut"})]})]})}function C2(){return z.jsxs(z.Fragment,{children:[z.jsx(P2,{}),z.jsxs(n0,{children:[z.jsxs(po,{to:"/",children:[" ",z.jsx("h1",{children:"App"})," "]}),z.jsx("h2",{children:"Hello"}),z.jsx(k1,{}),z.jsx(ml,{path:"/home",children:z.jsx("h3",{children:"Route 1"})}),z.jsxs(ml,{path:"/blog",children:[z.jsx("h3",{children:"Route 2"}),z.jsx(k2,{})]}),z.jsx(ml,{path:"/about",children:z.jsx("h3",{children:"Route 3"})})]})]})}Jv(document.getElementById("root")).render(z.jsx(z.Fragment,{children:z.jsx(C2,{})}));

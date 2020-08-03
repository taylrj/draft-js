/*! For license information please see 870486c5.ee3c2374.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),c=(n(181),n(180)),l={id:"advanced-topics-block-styling",title:"Block Styling"},a={id:"advanced-topics-block-styling",title:"Block Styling",description:"Within Editor, some block types are given default CSS styles to limit the amount",source:"@site/../docs/Advanced-Topics-Block-Styling.md",permalink:"/docs/advanced-topics-block-styling",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Block-Styling.md",lastUpdatedBy:"Tim Gates",lastUpdatedAt:1588289435,sidebar:"docs",previous:{title:"Managing Focus",permalink:"/docs/advanced-topics-managing-focus"},next:{title:"Custom Block Rendering",permalink:"/docs/advanced-topics-custom-block-render-map"}},u=[{value:"DraftStyleDefault.css",id:"draftstyledefaultcss",children:[]},{value:"blockStyleFn",id:"blockstylefn",children:[]}],i={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Within ",Object(c.b)("inlineCode",{parentName:"p"},"Editor"),", some block types are given default CSS styles to limit the amount\nof basic configuration required to get engineers up and running with custom\neditors."),Object(c.b)("p",null,"By defining a ",Object(c.b)("inlineCode",{parentName:"p"},"blockStyleFn")," prop function for an ",Object(c.b)("inlineCode",{parentName:"p"},"Editor"),", it is possible\nto specify classes that should be applied to blocks at render time."),Object(c.b)("h2",{id:"draftstyledefaultcss"},"DraftStyleDefault.css"),Object(c.b)("p",null,"The Draft library includes default block CSS styles within\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/component/utils/DraftStyleDefault.css"}),"DraftStyleDefault.css"),". ",Object(c.b)("em",{parentName:"p"},"(Note that the annotations on the CSS class names are\nartifacts of Facebook's internal CSS module management system.)")),Object(c.b)("p",null,"These CSS rules are largely devoted to providing default styles for list items,\nwithout which callers would be responsible for managing their own default list\nstyles."),Object(c.b)("h2",{id:"blockstylefn"},"blockStyleFn"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"blockStyleFn")," prop on ",Object(c.b)("inlineCode",{parentName:"p"},"Editor")," allows you to define CSS classes to\nstyle blocks at render time. For instance, you may wish to style ",Object(c.b)("inlineCode",{parentName:"p"},"'blockquote'"),"\ntype blocks with fancy italic text."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function myBlockStyleFn(contentBlock) {\n  const type = contentBlock.getType();\n  if (type === 'blockquote') {\n    return 'superFancyBlockquote';\n  }\n}\n\n// Then...\nimport {Editor} from 'draft-js';\nclass EditorWithFancyBlockquotes extends React.Component {\n  render() {\n    return <Editor ... blockStyleFn={myBlockStyleFn} />;\n  }\n}\n")),Object(c.b)("p",null,"Then, in your own CSS:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".superFancyBlockquote {\n  color: #999;\n  font-family: 'Hoefler Text', Georgia, serif;\n  font-style: italic;\n  text-align: center;\n}\n")))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=s(n),y=r,d=f["".concat(l,".").concat(y)]||f[y]||p[y]||c;return n?o.a.createElement(d,a(a({ref:t},i),{},{components:n})):o.a.createElement(d,a({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var i=2;i<c;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function j(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=S.prototype=new j;k.constructor=S,r(k,O.prototype),k.isPureReactComponent=!0;var w={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},l=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:e,key:l,ref:a,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var _=/\/+/g,T=[];function $(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var u=!1;if(null===t)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case c:case l:u=!0}}if(u)return r(o,t,""===n?"."+D(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var s=n+D(a=t[i],i);u+=e(a,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),i=0;!(a=t.next()).done;)u+=e(a=a.value,s=n+D(a,i++),r,o);else if("object"===a)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(_,"$&/")+"/"),N(e,B,t=$(t,c,r,o)),R(t)}var A={current:null};function M(){var e=A.current;if(null===e)throw Error(h(321));return e}var U={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,F,t=$(null,null,t,n)),R(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=O,t.Fragment=a,t.Profiler=i,t.PureComponent=S,t.StrictMode=u,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),l=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=w.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)C.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:c,type:e.type,key:l,ref:a,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return M().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,n){return M().useReducer(e,t,n)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.13.1"},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,u=l(e),i=1;i<arguments.length;i++){for(var s in n=Object(arguments[i]))o.call(n,s)&&(u[s]=n[s]);if(r){a=r(n);for(var f=0;f<a.length;f++)c.call(n,a[f])&&(u[a[f]]=n[a[f]])}}return u}}}]);
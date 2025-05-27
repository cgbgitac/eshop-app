"use strict";exports.id=258,exports.ids=[258],exports.modules={9410:(e,t,r)=>{r.d(t,{default:()=>o.a});var i=r(7412),o=r.n(i)},1900:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(9694),o=r(7824),n=r(5344),a=o._(r(3729)),s=i._(r(1202)),l=i._(r(1758)),d=r(3855),u=r(3053),c=r(4187);r(837);let p=r(6150),f=i._(r(4931)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,o,n){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=a.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let y=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:s,width:l,decoding:d,className:u,style:c,fetchPriority:p,placeholder:f,loading:m,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:_,onLoad:j,onError:S,...C}=e;return(0,n.jsx)("img",{...C,...h(p),loading:m,width:l,height:s,decoding:d,"data-nimg":b?"fill":"1",className:u,style:c,sizes:o,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,f,v,x,w,y))},[r,f,v,x,w,S,y,t]),onLoad:e=>{g(e.currentTarget,f,v,x,w,y)},onError:e=>{_(!0),"empty"!==f&&w(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(p.RouterContext),i=(0,a.useContext)(c.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=m||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:l}=e,g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[v,x]=(0,a.useState)(!1),[w,_]=(0,a.useState)(!1),{props:j,meta:S}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:v,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:_,ref:t}),S.priority?(0,n.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,r)=>{e.exports=r(6372).vendored.contexts.AmpContext},2158:(e,t,r)=>{e.exports=r(6372).vendored.contexts.HeadManagerContext},4187:(e,t,r)=>{e.exports=r(6372).vendored.contexts.ImageConfigContext},3126:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3855:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(837);let i=r(6358),o=r(3053);function n(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,d,{src:u,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:x,onLoad:w,onLoadingComplete:_,placeholder:j="empty",blurDataURL:S,fetchPriority:C,layout:P,objectFit:O,objectPosition:z,lazyBoundary:I,lazyRoot:M,...k}=e,{imgConf:A,showAltText:E,blurComplete:R,defaultLoader:D}=t,$=A||o.imageConfigDefault;if("allSizes"in $)s=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t);s={...$,allSizes:e,deviceSizes:t}}let N=k.loader||D;delete k.loader,delete k.srcSet;let F="__next_img_default"in N;if(F){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let L="",U=a(y),T=a(b);if("object"==typeof(r=u)&&(n(r)||void 0!==r.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,L=e.src,!v){if(U||T){if(U&&!T){let t=U/e.width;T=Math.round(e.height*t)}else if(!U&&T){let t=T/e.height;U=Math.round(e.width*t)}}else U=e.width,T=e.height}}let G=!f&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:L)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,G=!1),s.unoptimized&&(p=!0),F&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(p=!0),f&&(C="high");let B=a(h),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:z}:{},E?{}:{color:"transparent"},x),H=R||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:T,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:W.objectFit})+'")':'url("'+j+'")',V=H?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},q=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),u=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,i)=>s({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:s({config:t,src:r,quality:n,width:l[u]})}}({config:s,src:u,unoptimized:p,width:U,quality:B,sizes:c,loader:N});return{props:{...k,loading:G?"lazy":m,fetchPriority:C,width:U,height:T,decoding:"async",className:g,style:{...W,...V},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:p,priority:f,placeholder:j,fill:v}}}},1758:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return g}});let i=r(9694),o=r(7824),n=r(5344),a=o._(r(3729)),s=i._(r(7984)),l=r(7637),d=r(2158),u=r(3126);function c(e){void 0===e&&(e=!1);let t=[(0,n.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(837);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return o=>{let n=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?n=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?n=!1:r.add(t);else{let e=o.props[t],r=i[t]||new Set;("name"!==t||!a)&&r.has(e)?n=!1:(r.add(e),i[t]=r)}}}}return n}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),i=(0,a.useContext)(d.HeadManagerContext);return(0,n.jsx)(s.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6358:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:a}=e,s=i?40*i:t,l=o?40*o:r,d=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3053:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7412:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return l}});let i=r(9694),o=r(3855),n=r(1900),a=i._(r(4931)),s=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=n.Image},4931:(e,t)=>{function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},7984:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let i=r(3729),o=()=>{},n=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function s(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),n(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},4669:(e,t,r)=>{r.d(t,{Am:()=>k});var i,o=r(3729);let n={data:""},a=e=>e||n,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,u=(e,t)=>{let r="",i="",o="";for(let n in e){let a=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+a+";":i+="f"==n[1]?u(a,n):n+"{"+u(a,"k"==n[1]?"":t)+"}":"object"==typeof a?i+=u(a,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=a&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(n,a):n+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+i},c={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e},f=(e,t,r,i,o)=>{let n=p(e),a=c[n]||(c[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!c[a]){let t=n!==e?e:(e=>{let t,r,i=[{}];for(;t=s.exec(e.replace(l,""));)t[4]?i.shift():t[3]?(r=t[3].replace(d," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(d," ").trim();return i[0]})(e);c[a]=u(o?{["@keyframes "+a]:t}:t,r?"":"."+a)}let f=r&&c.g?c.g:null;return r&&(c.g=c[a]),((e,t,r,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[a],t,i,f),a},m=(e,t,r)=>e.reduce((e,i,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+i+(null==n?"":n)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?m(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,a(t.target),t.g,t.o,t.k)}g.bind({g:1});let h,y,b,v=g.bind({k:1});function x(e,t){let r=this||{};return function(){let i=arguments;function o(n,a){let s=Object.assign({},n),l=s.className||o.className;r.p=Object.assign({theme:y&&y()},s),r.o=/ *go\d+/.test(l),s.className=g.apply(r,i)+(l?" "+l:""),t&&(s.ref=a);let d=e;return e[0]&&(d=s.as||e,delete s.as),b&&d[0]&&b(s),h(d,s)}return t?t(o):o}}var w=e=>"function"==typeof e,_=(e,t)=>w(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),S=((()=>{let e;return()=>e})(),(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return S(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}}),C=[],P={toasts:[],pausedAt:void 0},O=e=>{P=S(P,e),C.forEach(e=>{e(P)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),M=e=>(t,r)=>{let i=I(t,e,r);return O({type:2,toast:i}),i.id},k=(e,t)=>M("blank")(e,t);k.error=M("error"),k.success=M("success"),k.loading=M("loading"),k.custom=M("custom"),k.dismiss=e=>{O({type:3,toastId:e})},k.remove=e=>O({type:4,toastId:e}),k.promise=(e,t,r)=>{let i=k.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?_(t.success,e):void 0;return o?k.success(o,{id:i,...r,...null==r?void 0:r.success}):k.dismiss(i),e}).catch(e=>{let o=t.error?_(t.error,e):void 0;o?k.error(o,{id:i,...r,...null==r?void 0:r.error}):k.dismiss(i)}),e};var A=new Map,E=1e3,R=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,N=(x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),F=(x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${N} 1s linear infinite;
`,v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),L=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=(x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${L} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,x("div")`
  position: absolute;
`,x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,i=o.createElement,u.p=void 0,h=i,y=void 0,b=void 0,g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}};
(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[15],{1015:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(9439),o=t(1126),i=t(2791),a=t(6788),u=t(4420),l=t(9655),c="ContactForm_inputForm__xcc-6",s="ContactForm_inputLabel__DtvXl",f="ContactForm_inputField__wsNEl",d=t(6043),m=t(1258),v=t(3329),p=function(){var e=(0,o.a)().contacts||[],n=(0,u.I0)(),t=(0,i.useState)(""),p=(0,r.Z)(t,2),h=p[0],x=p[1],g=(0,i.useState)(""),S=(0,r.Z)(g,2),_=S[0],b=S[1],Z=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?x(r):"number"===t&&b(r)},C=m.Z[500];return(0,v.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),e.some((function(e){return e.name.toLowerCase()===h.toLowerCase()})))l.Am.warn("".concat(h," is already in contacts."),{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});else{var r={name:h,number:_};n((0,a.uK)(r)),x(""),b("")}},className:c,children:[(0,v.jsxs)("label",{className:s,children:["Name:",(0,v.jsx)("input",{type:"text",name:"name",value:h,onChange:Z,required:!0,className:f})]}),(0,v.jsxs)("label",{className:s,children:["Number:",(0,v.jsx)("input",{type:"tel",name:"number",value:_,onChange:Z,required:!0,className:f})]}),(0,v.jsx)(d.Z,{type:"submit",sx:{color:C},children:"Add Contact"})]})},h="ContactListItem_listItem__upGA2",x="ContactListItem_contactItemBlock__XWUFJ",g="ContactListItem_callLink__VNaaB",S=t(9332),_=t(7247),b=function(e){var n=e.id,t=e.name,r=e.number,o=(0,u.I0)(),i=m.Z[500];return(0,v.jsxs)("li",{className:h,children:[(0,v.jsxs)("div",{className:x,children:[" ",(0,v.jsx)(S.Z,{sx:{fontSize:40,color:i}}),t,":"," ",(0,v.jsx)("a",{href:"tel:".concat(r),className:g,children:r})," "]}),(0,v.jsx)(d.Z,{variant:"filled",onClick:function(){o((0,a.GK)(n))},size:"small",sx:{color:i},startIcon:(0,v.jsx)(_.Z,{}),children:"Delete"})]})},Z=t(5100),C="ContactList_contactList__UFVCg",j=(0,t(3553).P1)([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().trim().includes(t)||r.trim().includes(t)}))})),w=function(){var e=(0,u.I0)();(0,i.useEffect)((function(){e((0,a.yF)())}),[e]);var n=(0,o.a)(),t=(0,u.v9)(j);return(0,v.jsxs)("ul",{className:C,children:[n.isLoading&&(0,v.jsx)(Z.Z,{}),t.map((function(e){var n=e.id,t=e.name,r=e.number,o=e.phone;return(0,v.jsx)(b,{id:n,name:t,number:r||o},n)}))]})},y=t(7299),N="Filter_filterForm__+l+6Q",z="Filter_filterLabel__+pnW-",I="Filter_inputField__GiGjH",F=function(){var e=(0,u.I0)(),n=(0,o.a)().filter;return(0,v.jsx)("div",{className:N,children:(0,v.jsxs)("label",{className:z,children:["Find contacts by name or number:",(0,v.jsx)("input",{type:"text",value:n,onChange:function(n){e((0,y.K)(n.target.value.toLowerCase().trim()))},placeholder:"Search...",className:I})]})})},k=function(){return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{style:{paddingLeft:"20px",paddingTop:"20px"},children:"Phonebook"}),(0,v.jsx)(p,{}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{style:{paddingLeft:"20px"},children:"Contacts"}),(0,v.jsx)(F,{}),(0,v.jsx)(w,{})]})]})}},9332:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");n.Z=a},7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(7404)},7404:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return Z},debounce:function(){return C},deprecatedPropType:function(){return j},isMuiElement:function(){return w},ownerDocument:function(){return N},ownerWindow:function(){return z},requirePropFactory:function(){return I},setRef:function(){return F},unstable_ClassNameGenerator:function(){return D},unstable_useEnhancedEffect:function(){return k},unstable_useId:function(){return M},unsupportedProp:function(){return B},useControlled:function(){return E},useEventCallback:function(){return P.Z},useForkRef:function(){return R.Z},useIsFocusVisible:function(){return T.Z}});var r=t(5902),o=t(4036);var i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},a=t(7462),u=t(2791),l=t.t(u,2),c=t(3366),s=t(3733),f=t(4419),d=t(8688),m=t(7288),v=t(5878),p=t(1217);function h(e){return(0,p.Z)("MuiSvgIcon",e)}(0,v.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var x=t(3329),g=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],S=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,o.Z)(t.color))],n["fontSize".concat((0,o.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,a,u,l,c,s,f,d,m,v=e.theme,p=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:p.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(n=v.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=v.transitions)||null==(r=r.duration)?void 0:r.shorter}),fontSize:{inherit:"inherit",small:(null==(o=v.typography)||null==(i=o.pxToRem)?void 0:i.call(o,20))||"1.25rem",medium:(null==(a=v.typography)||null==(u=a.pxToRem)?void 0:u.call(a,24))||"1.5rem",large:(null==(l=v.typography)||null==(c=l.pxToRem)?void 0:c.call(l,35))||"2.1875rem"}[p.fontSize],color:null!=(s=null==(f=(v.vars||v).palette)||null==(f=f[p.color])?void 0:f.main)?s:{action:null==(d=(v.vars||v).palette)||null==(d=d.action)?void 0:d.active,disabled:null==(m=(v.vars||v).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[p.color]}})),_=u.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiSvgIcon"}),r=t.children,i=t.className,l=t.color,m=void 0===l?"inherit":l,v=t.component,p=void 0===v?"svg":v,_=t.fontSize,b=void 0===_?"medium":_,Z=t.htmlColor,C=t.inheritViewBox,j=void 0!==C&&C,w=t.titleAccess,y=t.viewBox,N=void 0===y?"0 0 24 24":y,z=(0,c.Z)(t,g),I=u.isValidElement(r)&&"svg"===r.type,F=(0,a.Z)({},t,{color:m,component:p,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:j,viewBox:N,hasSvgAsChild:I}),k={};j||(k.viewBox=N);var L=function(e){var n=e.color,t=e.fontSize,r=e.classes,i={root:["root","inherit"!==n&&"color".concat((0,o.Z)(n)),"fontSize".concat((0,o.Z)(t))]};return(0,f.Z)(i,h,r)}(F);return(0,x.jsxs)(S,(0,a.Z)({as:p,className:(0,s.Z)(L.root,i),focusable:"false",color:Z,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:n},k,z,I&&r.props,{ownerState:F,children:[I?r.props.children:r,w?(0,x.jsx)("title",{children:w}):null]}))}));_.muiName="SvgIcon";var b=_;function Z(e,n){function t(t,r){return(0,x.jsx)(b,(0,a.Z)({"data-testid":"".concat(n,"Icon"),ref:r},t,{children:e}))}return t.muiName=b.muiName,u.memo(u.forwardRef(t))}var C=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r};var j=function(e,n){return function(){return null}};var w=function(e,n){var t,r;return u.isValidElement(e)&&-1!==n.indexOf(null!=(t=e.type.muiName)?t:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function y(e){return e&&e.ownerDocument||document}var N=y;var z=function(e){return y(e).defaultView||window};var I=function(e,n){return function(){return null}},F=t(2971).Z,k=t(2876).Z,L=t(9439),V=0;var A=l["useId".toString()];var M=function(e){if(void 0!==A){var n=A();return null!=e?e:n}return function(e){var n=u.useState(e),t=(0,L.Z)(n,2),r=t[0],o=t[1],i=e||r;return u.useEffect((function(){null==r&&o("mui-".concat(V+=1))}),[r]),i}(e)};var B=function(e,n,t,r,o){return null};var E=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,u.useRef(void 0!==n).current),o=u.useState(t),i=(0,L.Z)(o,2),a=i[0],l=i[1];return[r?n:a,u.useCallback((function(e){r||l(e)}),[])]},P=t(7992),R=t(8047),T=t(3031),D={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=15.68b5cdb1.chunk.js.map
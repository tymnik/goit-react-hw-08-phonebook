"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[15],{15:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(791),r=n(420),s=n(439),c=n(788),i="ContactForm_inputForm__xcc-6",l="ContactForm_inputLabel__DtvXl",o="ContactForm_inputField__wsNEl",u="ContactForm_addBtn__u7Uv1",m=n(329),d=function(){var e=(0,r.v9)((function(e){return e})).contacts.items,t=(0,r.I0)(),n=(0,a.useState)(""),d=(0,s.Z)(n,2),_=d[0],f=d[1],h=(0,a.useState)(""),x=(0,s.Z)(h,2),p=x[0],v=x[1],j=function(e){var t=e.target,n=t.name,a=t.value;"name"===n?f(a):"number"===n&&v(a)};return(0,m.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),e.some((function(e){return e.name.toLowerCase()===_.toLowerCase()})))alert("".concat(_," is already in contacts."));else{var a={name:_,number:p};t((0,c.uK)(a)),f(""),v("")}},className:i,children:[(0,m.jsxs)("label",{className:l,children:["Name:",(0,m.jsx)("input",{type:"text",name:"name",value:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:j,required:!0,className:o})]}),(0,m.jsxs)("label",{className:l,children:["Number:",(0,m.jsx)("input",{type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:j,required:!0,className:o})]}),(0,m.jsx)("button",{type:"submit",className:u,children:"Add Contact"})]})},_="ContactListItem_listItem__upGA2",f="ContactListItem_contactItemBlock__XWUFJ",h="ContactListItem_callLink__VNaaB",x="ContactListItem_delBtn__Mczr7",p=function(e){var t=e.id,n=e.name,a=e.number,s=(0,r.I0)();return(0,m.jsxs)("li",{className:_,children:[(0,m.jsxs)("div",{className:f,children:[n,":"," ",(0,m.jsx)("a",{href:"tel:".concat(a),className:h,children:a})," "]}),(0,m.jsx)("button",{className:x,onClick:function(){s((0,c.GK)(t))},children:"Delete"})]})},v="ContactList_contactList__UFVCg",j=(0,n(553).P1)([function(e){return e.contacts.items},function(e){return e.contacts.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),C=function(){var e=(0,r.v9)(j);return(0,m.jsx)("ul",{className:v,children:e.map((function(e){var t=e.id,n=e.name,a=e.number,r=e.phone;return(0,m.jsx)(p,{id:t,name:n,number:a||r},t)}))})},b=n(299),N="Filter_filterForm__+l+6Q",F="Filter_filterLabel__+pnW-",L="Filter_inputField__GiGjH",I=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e})).filter;return(0,m.jsx)("div",{className:N,children:(0,m.jsxs)("label",{className:F,children:["Find contacts by name or number:",(0,m.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,b.K)(t.target.value.toLowerCase().trim()))},placeholder:"Search...",className:L})]})})},g=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e})),n=t.auth,s=t.contacts.items.length>=1;return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),n.isLoggedIn&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Phonebook"}),(0,m.jsx)(d,{}),s&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(I,{}),(0,m.jsx)(C,{})]})]})}}}]);
//# sourceMappingURL=15.1cf25f95.chunk.js.map
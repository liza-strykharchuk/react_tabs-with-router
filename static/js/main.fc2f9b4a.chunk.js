(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(4),i=(c(14),c(15),c(16),c(2)),j=c(1),b=function(){return Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home page"})})})},l=function(){return Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})})},r=c(6),d=c.n(r),o=function(e){var t=e.isActive;return d()("navbar-item",{"is-active":t})},h=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:o,children:"Home"}),Object(j.jsx)(n.c,{to:"/tabs",className:o,children:"Tabs"})]})})})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){var e=Object(i.h)().tabId,t=x.find((function(t){return t.id===e}));return Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:x.map((function(t){return Object(j.jsx)("li",{"data-cy":"Tab",className:d()(null,{"is-active":t.id===e}),children:Object(j.jsx)(n.b,{to:"../".concat(t.id),children:"".concat(t.title)})},t.id)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"})]})})},m=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/",element:Object(j.jsx)(b,{})}),Object(j.jsxs)(i.b,{path:"tabs",children:[Object(j.jsx)(i.b,{index:!0,element:Object(j.jsx)(O,{})}),Object(j.jsx)(i.b,{path:":tabId",element:Object(j.jsx)(O,{})})]}),Object(j.jsx)(i.b,{path:"*",element:Object(j.jsx)(l,{})}),Object(j.jsx)(i.b,{path:"/home",element:Object(j.jsx)(i.a,{to:"/"})})]})]})};a.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fc2f9b4a.chunk.js.map
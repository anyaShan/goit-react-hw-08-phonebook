"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[193],{9522:function(n,e,t){t.d(e,{t:function(){return c}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  padding: 0 24px;\n"]))),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},2193:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r=t(2791),i=t(1405),o=t(4719),a="NOT_FOUND";var c=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?c:r,o=t.maxSize,u=void 0===o?1:o,l=t.resultEqualityCheck,p=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),s=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(p):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return a}return{get:r,put:function(e,i){r(e)===a&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,p);function d(){var e=s.get(arguments);if(e===a){if(e=n.apply(null,arguments),l){var t=s.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return d.clearCache=function(){return s.clear()},d}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function p(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var p=c,s=p.memoizeOptions,d=void 0===s?t:s,x=Array.isArray(d)?d:[d],f=l(r),g=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(x)),h=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return o=g.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:g,dependencies:f,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return i}var s,d,x,f,g,h,b,m,v,y,j,w=p(u),Z=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},z=function(n){return n.contacts.error},P=function(n){return n.filter.value},C=w([Z,P],(function(n,e){return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e)}))})),A=t(9522),F=t(168),_=t(6444),q=_.ZP.div(s||(s=(0,F.Z)(["\n  width: 100%;\n  padding: 25px 0;\n\n  display: flex;\n  /* flex-wrap: wrap; */\n  /* flex-direction: column; */\n  justify-content: center;\n  /* align-items: center; */\n  gap: 25px;\n\n  font-size: 40;\n  color: #010101;\n"]))),E=_.ZP.section(d||(d=(0,F.Z)(["\n  width: 400px;\n  flex-grow: 1;\n  padding: 25px;\n  background-color: rgb(243, 240, 240);\n  border-radius: 5px;\n\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;\n"]))),N=_.ZP.h1(x||(x=(0,F.Z)(["\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 600;\n"]))),R=t(184),S=function(n){var e=n.title,t=n.children;return(0,R.jsxs)(E,{children:[(0,R.jsx)(N,{children:e}),(0,R.jsx)("div",{children:t})]})},I=_.ZP.aside(f||(f=(0,F.Z)(["\n  /* width: 400px; */\n  flex-basis: 400px;\n  padding: 25px;\n  /* background-color: rgb(243, 240, 240);\n  border-radius: 5px;\n\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px; */\n"]))),O=_.ZP.h1(g||(g=(0,F.Z)(["\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 600;\n"]))),L=function(n){var e=n.title,t=n.children;return(0,R.jsxs)(I,{children:[(0,R.jsx)(O,{children:e}),(0,R.jsx)("div",{children:t})]})},B=t(5705),D=t(5984),J=t(4802),K=t(7103),M=(0,_.ZP)(B.l0)(h||(h=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 30px;\n  }\n\n  label {\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 1.2;\n    letter-spacing: 0.06em;\n  }\n\n  button {\n    width: 150px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 3px 15px;\n    text-align: center;\n    border: 0;\n    border-radius: 5px;\n    cursor: pointer;\n\n    background-color: rgb(241, 188, 90);\n    color: inherit;\n    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n      rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 1.9;\n    letter-spacing: 0.06em;\n\n    &:hover {\n      background-color: rgb(52, 162, 212);\n    }\n  }\n"]))),G=(0,_.ZP)(B.gN)(b||(b=(0,F.Z)(["\n  flex-grow: 1;\n  padding: 10px;\n  border: 1px solid rgb(241, 188, 90);\n  border-radius: 4px;\n  background-color: white;\n\n  &::placeholder {\n    color: rgba(52, 162, 212, 0.5);\n\n    font-size: 16px;\n    line-height: 1.25px;\n  }\n\n  :focus {\n    outline: 1px solid rgb(52, 162, 212);\n    border: 1px solid transparent;\n  }\n"]))),T=K.Ry().shape({name:K.Z_().required(),number:K.Rx().required()}),U=function(){var n=(0,J.I0)(),e=(0,J.v9)(Z),t=(0,D.x0)(),r=(0,D.x0)();return(0,R.jsx)(B.J9,{initialValues:{name:"",number:""},validationSchema:T,onSubmit:function(t,r){var i=r.resetForm,a=t.name,c=t.number;if(e.some((function(n){return n.name===a})))return alert("".concat(a," is already in contacts."));n((0,o.uK)({name:a,number:c})),i()},children:(0,R.jsxs)(M,{children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("label",{htmlFor:t,children:"Name"}),(0,R.jsx)(G,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Rosie Simpson",id:t}),(0,R.jsx)(B.Bc,{component:"span",name:"name"}),(0,R.jsx)("label",{htmlFor:r,children:"Number"}),(0,R.jsx)(G,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"459-12-56",id:r}),(0,R.jsx)(B.Bc,{component:"span",name:"number"})]}),(0,R.jsx)("button",{type:"submit",disabled:!1,children:"Add contact"})]})})},V=t(6895),$=_.ZP.div(m||(m=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 15px;\n\n  label {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 1.2;\n    letter-spacing: 0.06em;\n  }\n\n  input {\n    flex-grow: 1;\n    padding: 5px;\n    border: 1px solid grey;\n    border-radius: 4px;\n    background-color: white;\n\n    :focus {\n      outline: 1px solid rgb(241, 188, 90);\n      border: 1px solid transparent;\n    }\n  }\n"]))),H=function(){var n=(0,i.I0)(),e=(0,i.v9)(P);return(0,R.jsxs)($,{children:[(0,R.jsx)("label",{children:"Fined contacts by name:"}),(0,R.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value.toLowerCase();n((0,V.M)(t))}})]})},Q=_.ZP.div(v||(v=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n\n  background-color: rgb(197, 194, 194);\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.9;\n  letter-spacing: 0.06em;\n"]))),W=_.ZP.button(y||(y=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 3px 15px;\n  text-align: center;\n  border: 0;\n  border-radius: 5px;\n  cursor: pointer;\n\n  background-color: rgb(241, 188, 90);\n  color: white;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.9;\n  letter-spacing: 0.06em;\n\n  &:hover {\n    background-color: rgb(52, 162, 212);\n  }\n"]))),X=function(n){var e=n.contact,t=(0,J.I0)();return(0,R.jsxs)(Q,{children:[(0,R.jsxs)("p",{children:[e.name,": ",e.number]}),(0,R.jsx)(W,{type:"button",onClick:function(){return t((0,o.GK)(e.id))},children:"Delete"})]})},Y=_.ZP.ul(j||(j=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),nn=function(){var n=(0,J.v9)(C);return(0,R.jsx)(Y,{children:n.map((function(n){return(0,R.jsx)("li",{children:(0,R.jsx)(X,{contact:n})},n.id)}))})},en=t(8033);function tn(){var n=(0,i.I0)(),e=(0,i.v9)(k),t=(0,i.v9)(z);return(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(A.t,{children:e&&!t?(0,R.jsx)(en.a,{}):(0,R.jsxs)(q,{children:[(0,R.jsx)(L,{title:"Phonebook",children:(0,R.jsx)(U,{})}),(0,R.jsxs)(S,{title:"Contacts",children:[(0,R.jsx)(H,{}),(0,R.jsx)(nn,{})]})]})})})}}}]);
//# sourceMappingURL=193.b968e3d6.chunk.js.map
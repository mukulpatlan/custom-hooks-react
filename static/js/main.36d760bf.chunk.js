(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={section:"Section_section__3QN43"}},function(e,t,n){e.exports={task:"TaskItem_task__1rhm-"}},function(e,t,n){e.exports={container:"Tasks_container__2nBq5"}},function(e,t,n){e.exports={form:"TaskForm_form__31W-N"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),a=(n(15),n(3)),s=n(1),o=n.n(s),i=n(7),u=n.n(i),d=n(0),j=function(e){return Object(d.jsx)("section",{className:u.a.section,children:e.children})},f=n(8),l=n.n(f),b=function(e){return Object(d.jsx)("li",{className:l.a.task,children:e.children})},h=n(9),p=n.n(h),x=function(e){var t=Object(d.jsx)("h2",{children:"No tasks found. Start adding some!"});e.items.length>0&&(t=Object(d.jsx)("ul",{children:e.items.map((function(e){return Object(d.jsx)(b,{children:e.text},e.id)}))}));var n=t;return e.error&&(n=Object(d.jsx)("button",{onClick:e.onFetch,children:"Try again"})),e.loading&&(n="Loading tasks..."),Object(d.jsx)(j,{children:Object(d.jsx)("div",{className:p.a.container,children:n})})},m=n(2),O=n.n(m),k=n(4),v=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(null),o=Object(a.a)(c,2),i=o[0],u=o[1],d=Object(s.useCallback)(function(){var e=Object(k.a)(O.a.mark((function e(t,n){var c,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),u(null),e.prev=2,c={method:t.method},"POST"===t.method&&(c.body=JSON.stringify(t.body),c.headers=t.headers),e.next=8,fetch(t.url,c);case 8:if((a=e.sent).ok){e.next=11;break}throw new Error("Request failed!");case 11:return e.next=13,a.json();case 13:s=e.sent,n(s),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),u(e.t0.message||"Something went wrong!");case 20:r(!1);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{isLoading:n,error:i,sendReq:d}},g=n(10),T=n.n(g),_=function(e){var t=Object(s.useRef)();return Object(d.jsxs)("form",{className:T.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value;r.trim().length>0&&e.onEnterTask(r)},children:[Object(d.jsx)("input",{type:"text",ref:t}),Object(d.jsx)("button",{children:e.loading?"Sending...":"Add Task"})]})},S=function(e){var t=v(),n=t.isLoading,r=t.error,c=t.sendReq,a=function(t,n){var r={id:n.name,text:t};e.onAddTask(r)},s=function(){var e=Object(k.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({url:"https://react-guide-9f34b.firebaseio.com//tasks.json",method:"POST",headers:{"Content-Type":"application/json"},body:{text:t}},a.bind(null,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(j,{children:[Object(d.jsx)(_,{onEnterTask:s,loading:n}),r&&Object(d.jsx)("p",{children:r})]})};var w=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],c=v(),i=c.isLoading,u=c.error,j=c.sendReq;return Object(s.useEffect)((function(){j({url:"https://react-guide-9f34b.firebaseio.com/tasks.json",method:"GET"},(function(e){var t=[];for(var n in e)t.push({id:n,text:e[n].text});r(t)}))}),[j]),Object(d.jsxs)(o.a.Fragment,{children:[Object(d.jsx)(S,{onAddTask:function(e){r((function(t){return t.concat(e)}))}}),Object(d.jsx)(x,{items:n,loading:i,error:u,onFetch:j})]})};c.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.36d760bf.chunk.js.map
(this["webpackJsonpreminderapp-redux"]=this["webpackJsonpreminderapp-redux"]||[]).push([[0],{102:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(9),o=n.n(a),c=n(35),i=n(36),s=n(44),d=n(41),l="ADD_REMINDER",m="REMOVE_REMINDER",u="CLEAR_REMINDER",b=n(21),p=n(37),j=n.n(p),h=n(38),f=n.n(h),v=(n(55),n.p+"static/media/logo.e56cbf37.png"),x=n(4),O=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={text:"",date:new Date},e.render_Reminders=function(){var t=e.props.reminders;return Object(x.jsx)("div",{className:"ul",children:t.map((function(t){return Object(x.jsxs)("li",{className:"list-group-item mt-2 mb-2 p-2  li ",children:[Object(x.jsxs)("div",{children:[t.text," "]}),Object(x.jsxs)("div",{children:[j()(new Date(t.date)).fromNow()," "]}),Object(x.jsx)("div",{className:"remove btn btn-danger icon rounded",onClick:function(){return e.props.remove_Reminder(t.id)},children:"X"})]},t.id)}))})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props),Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("img",{src:v}),Object(x.jsx)("div",{className:"reminder-title",children:Object(x.jsx)("h2",{children:"What Should You Do ?"})}),Object(x.jsx)("input",{onChange:function(t){return e.setState({text:t.target.value})},type:"text",value:this.state.text,placeholder:"Enter What You Think",className:"form-control input "}),Object(x.jsx)(f.a,{className:"form-control input",value:this.state.date,selected:this.state.date,onChange:function(t){return e.setState({date:t})},showTimeSelect:!0,placeholder:"Enter Date",timeFormat:"HH:mm",timeIntervals:60,timeCaption:"Time",dateFormat:"MMMM d, yyyy h:mm aa"}),Object(x.jsx)("button",{onClick:function(){e.props.add_Reminder(e.state.text,e.state.date),e.setState({text:"",date:""})},className:"btn btn-primary btn-block ",children:"Add Reminder"}),this.render_Reminders(),Object(x.jsx)("button",{onClick:function(){return e.props.clear_Reminder()},className:"btn btn-danger btn-block mb-2 ",children:"Clear Reminders"})]})}}]),n}(r.Component),g=Object(b.b)((function(e){return{reminders:e}}),{add_Reminder:function(e,t){var n={type:l,text:e,date:t};return console.log("add",n),n},remove_Reminder:function(e){var t={type:m,id:e};return console.log("remove",t),t},clear_Reminder:function(){var e={type:u};return console.log("Clear",e),e}})(O),R=n(43),k=n(42),y=n(16),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=[];return e=Object(y.read_cookie)("reminders"),t.type===l?(n=[].concat(Object(k.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(y.bake_cookie)("reminders",n),console.log(" from reducers",n),n):t.type===m?(n=e.filter((function(e){return e.id!==t.id})),Object(y.bake_cookie)("reminders",n),console.log(" from reducers",n),n):t.type===u?(n=[],Object(y.bake_cookie)("reminders",n),console.log(" from reducers",n),n):e},N=(n(101),n(102),Object(R.a)(_));o.a.render(Object(x.jsx)(b.a,{store:N,children:Object(x.jsx)(g,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.c96d0181.chunk.js.map
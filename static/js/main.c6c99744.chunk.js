(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),s=n.n(i),l=(n(12),n.p,n(13),n(4)),r=n(5),h=n(7),j=n(6),b=n(0),u=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFirstnameChange=function(e){a.setState({firstname:e.target.value})},a.handleLastnameChange=function(e){a.setState({lastname:e.target.value})},a.handleemailChange=function(e){a.setState({email:e.target.value})},a.handletopicChange=function(e){a.setState({topic:e.target.value})},a.handleSubmit=function(e){alert("".concat(a.state.firstname," ").concat(a.state.lastname," ").concat(a.state.email," ").concat(a.state.topic)),e.preventDefault()},a.state={username:"",feedback:"",topic:"react"},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("h1",{children:"REGISTRATION"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Firstname"}),Object(b.jsx)("input",{type:"text",value:this.state.firstname,onChange:this.handleFirstnameChange})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Lastname"}),Object(b.jsx)("input",{type:"text",value:this.state.lastname,onChange:this.handleLastnameChange})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("lable",{children:"Email"}),Object(b.jsx)("input",{type:"email",value:this.state.email,onChange:this.handleemailChange})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("lable",{children:"Subject"}),Object(b.jsxs)("select",{value:this.state.topic,onChange:this.handletopicChange,children:[Object(b.jsx)("option",{value:"react",children:"React"}),Object(b.jsx)("option",{value:"angular",children:"Angular"}),Object(b.jsx)("option",{value:"machinelearning",children:"Machinelearning"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(a.Component);var o=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.c6c99744.chunk.js.map
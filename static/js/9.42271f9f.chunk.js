(this.webpackJsonpdemo4=this.webpackJsonpdemo4||[]).push([[9],{1507:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(110),c=t(24),o=t.n(c),i=t(31),s=t(1138),u=t(1247),m=t(1158),d=t.n(m),p=t(10),b=t(1139),g=t(1092);function E(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var f=Object(s.a)((function(e){return{paper:{position:"absolute",width:"90%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"}}}));function v(e){var a=e.status,t=(e.id,e.question),n=e.supervising_date,l=e.topic,c=e.answer,o=(e.lecturer_id,r.a.useState(E)),s=Object(i.a)(o,1)[0],u=r.a.useState(!1),m=Object(i.a)(u,2),d=m[0],v=m[1],h=r.a.useState(!0),w=Object(i.a)(h,2),k=w[0],C=w[1],j=f(),O=function(e){C("answer"!==e),v(!0)};a="answered"===a?r.a.createElement("span",{className:"btn btn-bold btn-sm btn-font-sm  btn-label-success"},"Terjawab"):"pending"===a?r.a.createElement("span",{className:"btn btn-bold btn-sm btn-font-sm  btn-label-warning"},"Menunggu"):r.a.createElement("span",{className:"btn btn-bold btn-sm btn-font-sm  btn-label-danger"},"Batal");var y=k?t:c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"kt-portlet--border-bottom-brand"},r.a.createElement(p.b,{fluid:!0},r.a.createElement("div",{className:"kt-widget26"},r.a.createElement("div",{className:"kt-widget26__content text-center"},r.a.createElement("span",{className:"kt-widget26__number"},l),r.a.createElement("span",null,a),r.a.createElement("span",null,n)),r.a.createElement("div",{className:"kt-widget26__item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(b.a,{onClick:function(){return O("question")}},"Lihat Pertanyaan"),r.a.createElement(b.a,{onClick:function(){return O("answer")}},"Lihat Jawaban"))))))),r.a.createElement(g.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:d,onClose:function(){v(!1)}},r.a.createElement("div",{style:s,className:j.paper},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:y}}))))}var h=t(21),w=t(55),k=t.n(w),C="http://localhost:5000/student/supervising";var j=Object(s.a)((function(e){return{fab:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},paper:{position:"absolute",width:"90%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"}}}));function O(){var e=j(),a=Object(n.useState)([]),t=Object(i.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){var e;o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.get(C));case 1:case"end":return e.stop()}})));case 2:e=a.sent,c(e.data.data);case 4:case"end":return a.stop()}}))}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(h.Link,{to:"/supervising/form"},r.a.createElement(u.a,{color:"primary","aria-label":"Add",className:e.fab},r.a.createElement(d.a,null))))),r.a.createElement("div",{className:"row"},l.map((function(e){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},r.a.createElement(v,e))}))))))}var y=t(1385),N=t(1176),x=t(1249),S=t(264),_=t(18),q=t(1386),L=Object(s.a)((function(e){return{fab:{margin:e.spacing(1)},paper:{width:"100%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"}}}));function F(){var e=L(),a=Object(_.e)((function(e){return e.auth.user.dosen_wali})),t=Object(n.useState)(!1),l=Object(i.a)(t,2),c=l[0],s=(l[1],Object(n.useState)("")),u=Object(i.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),g=b[0],E=b[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),h=v[0],w=v[1],j=Object(n.useState)(),O=Object(i.a)(j,2),F=O[0],G=O[1],I=Object(n.useState)(!1),T=Object(i.a)(I,2),V=T[0],B=T[1],D=function(e){(e.preventDefault(),0!=V)?function(e){var a;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("topic",e.topic),a.append("supervising_date",e.supervising_date),a.append("question",e.question),a.append("answer",e.answer),t.abrupt("return",k.a.post(C,a));case 6:case"end":return t.stop()}}))}({topic:h,question:g,answer:m,supervising_date:F}).then((function(e){window.location.href="http://localhost:3000/supervising"})):console.log("sss")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:e.paper},r.a.createElement(y.a,{noValidate:!0,validated:c,onSubmit:function(e){return D(e)}},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:N.a,md:"4",controlId:"validationCustom01"},r.a.createElement(y.a.Label,null,"Topic"),r.a.createElement(y.a.Control,{required:!0,type:"text",placeholder:"Topik Bimbingan",onChange:function(e){w(e.target.value)}}),r.a.createElement(y.a.Control.Feedback,null,"Looks good!")),r.a.createElement(y.a.Group,{as:N.a,md:"4",controlId:"validationCustomUsername"},r.a.createElement(y.a.Label,null,"Tanggal"),r.a.createElement(x.a,null,r.a.createElement(y.a.Control,{type:"date",placeholder:"Tanggal Bimbingan","aria-describedby":"inputGroupPrepend",onChange:function(e){G(e.target.value)},required:!0}),r.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Please choose a date."))),r.a.createElement(y.a.Group,{as:N.a,md:"4",controlId:"validationCustom02"},r.a.createElement(y.a.Label,null,"Dosen Wali"),r.a.createElement(y.a.Control,{required:!0,type:"text",placeholder:"Last name",disabled:!0,defaultValue:a}),r.a.createElement(y.a.Control.Feedback,null,"Looks good!"))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:N.a,md:"6",controlId:"validationCustom03"},r.a.createElement(y.a.Label,null,"Question"),r.a.createElement(q.a,{initialValue:g,apiKey:"tba26vbdl9s38g1qsgqzuwhn4n313wr38fm43xacypr39i78",init:{max_height:30,menubar:!1,plugins:["advlist autolink lists link image","charmap print preview anchor help","searchreplace visualblocks code","insertdatetime media table paste wordcount"],toolbar:"undo redo | formatselect | bold italic | \n                            alignleft aligncenter alignright | \n                            bullist numlist outdent indent | help"},onChange:function(e){E(e.target.getContent())}})),r.a.createElement(y.a.Group,{as:N.a,md:"6",controlId:"validationCustom03"},r.a.createElement(y.a.Label,null,"Answer"),r.a.createElement(q.a,{initialValue:m,apiKey:"tba26vbdl9s38g1qsgqzuwhn4n313wr38fm43xacypr39i78",init:{height:5,menubar:!1,plugins:["advlist autolink lists link image","charmap print preview anchor help","searchreplace visualblocks code","insertdatetime media table paste wordcount"],toolbar:"undo redo | formatselect | bold italic | \n                            alignleft aligncenter alignright | \n                            bullist numlist outdent indent | help"},onChange:function(e){d(e.target.getContent())}}))),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Check,{required:!0,onChange:function(e){return B(e.target.value)},label:"Form ini tidak bisa diedit. Centang untuk melanjutkan.",feedback:"You must agree before submitting."})),r.a.createElement(S.a,{type:"submit"},"Submit form"))))))}function G(){return r.a.createElement(l.g,null,r.a.createElement(l.c,{exact:!0,from:"/supervising",to:"/supervising/history"}),r.a.createElement(l.d,{path:"/supervising/history",component:O}),r.a.createElement(l.d,{path:"/supervising/form",component:F}))}t.d(a,"default",(function(){return G}))}}]);
//# sourceMappingURL=9.42271f9f.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(9),s=n.n(a),c=n(6),i=n(12),o=n(31),l=n.n(o),u=n.p+"static/media/logo.e4a3598f.svg",j=n(8),d=n(17),b=n(3),O="SET_IS_MOBILE",f="SET_SCROLL_TO",h="toAboutBlock",p="toContactBlock",v="toTrainersBlock",m="toServicesBlock",x="toNewsBlock",g={isMobile:null,scrollTo:""},_=function(e){return{type:O,isMobile:e}},S=function(e){return{type:f,scrollTo:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{isMobile:t.isMobile});case f:return Object(b.a)(Object(b.a)({},e),{},{scrollTo:t.scrollTo});default:return e}},T=n(27),I=n.n(T),y=n(1),E=Object(c.b)((function(e){return{isMobile:e.navbar.isMobile,isTrainersLoading:e.trainers.loading,isPostsLoading:e.posts.loading,isServicesLoading:e.services.loading}}),(function(e){return{setScrollTo:function(t){return e(function(e){return function(t){t(S(e)),setTimeout((function(){t(S(null))}),500)}}(t))}}}))((function(e){var t=e.isMobile,n=e.setScrollTo,a=e.isTrainersLoading,s=e.isPostsLoading,c=e.isServicesLoading,i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(r.useState)(""),O=Object(j.a)(b,2),f=O[0],g=O[1],_=Object(r.useRef)(null),S=Object(r.useRef)(null),N=function(){return u(!l)};Object(r.useEffect)((function(){t?l?(_.current.style.display="block",S.current.style.display="flex"):(_.current.style.display="none",S.current.style.display="none"):(_.current.style.display="none",S.current.style.display="flex",u(!1))}),[l,t]);var T=function(e){setTimeout((function(){g(e)}),100),u(!1)};return Object(r.useEffect)((function(){a||s||c||n(f)}),[f,a,s,c]),Object(y.jsxs)("div",{className:I.a.Navbar,children:[Object(y.jsxs)("div",{ref:S,className:I.a.Tabs,children:[Object(y.jsx)(d.b,{onClick:function(){return T(h)},to:"/",children:"About us"}),Object(y.jsx)(d.b,{onClick:function(){return T(p)},to:"/",children:"Contact"}),Object(y.jsx)(d.b,{onClick:function(){return T(v)},to:"/",children:"Trainers"}),Object(y.jsx)(d.b,{onClick:function(){return T(m)},to:"/",children:"Services"}),Object(y.jsx)(d.b,{onClick:function(){return T(x)},to:"/",children:"News"}),Object(y.jsx)(d.b,{onClick:function(){return u(!1)},to:"/profile",children:"Account"})]}),Object(y.jsx)("div",{ref:_,onClick:N,className:I.a.Layout}),Object(y.jsx)("div",{className:I.a.Burger,children:Object(y.jsx)("i",{onClick:N,className:"material-icons",style:{fontSize:"30px"},children:l?"close":"dehaze"})})]})})),P=function(e){return Object(y.jsx)("div",{className:l.a.Header,children:Object(y.jsxs)("div",{className:l.a.HeaderInner,children:[Object(y.jsx)("div",{className:l.a.Logo,children:Object(y.jsx)(i.a,{src:u})}),Object(y.jsx)(E,{})]})})},w=n(5),A=n(32),C=n.n(A),R=n(25),k=n.n(R),M=n.p+"static/media/twitter_icon.00edc5ca.svg",H=n.p+"static/media/insta_icon.9982c8da.svg",D=n.p+"static/media/face_icon.9e1acef7.svg",L=n.p+"static/media/linkedin_icon.cfa9ada5.svg",B=function(e){var t=new Date(e),n=new Date(t.getTime()-6e4*t.getTimezoneOffset()).toString().split(" ");return"".concat(n[2]," ").concat(n[1],", ").concat(n[3])},U=function(e){var t=e.post,n=(t.category,t.title),r=t.image,a=t.content,s=t.published,c=B(s);return Object(y.jsxs)("div",{className:k.a.Post,children:[Object(y.jsxs)("div",{className:k.a.Data,children:[Object(y.jsx)("h3",{children:n}),Object(y.jsx)("h5",{children:c}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:a}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{className:k.a.Image,children:Object(y.jsx)("img",{src:r,alt:""})}),Object(y.jsx)("div",{className:k.a.Buttons,children:Object(y.jsxs)("div",{className:k.a.ButtonsInner,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(i.a,{src:M}),Object(y.jsx)(i.a,{src:H}),Object(y.jsx)(i.a,{src:D}),Object(y.jsx)(i.a,{src:L})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("i",{className:"material-icons",style:{fontSize:"33px"},children:"comment"}),Object(y.jsx)("i",{className:"material-icons",style:{fontSize:"33px"},children:"favorite_border"})]})]})})]})},F=n(20),J=n(58),z="https://sport-club-dev.herokuapp.com/api",q=n.n(J).a.create({baseUrl:z,responseType:"json",headers:{"Content-Type":"application/json"}}),W="SET_POSTS_SUCCESS",G="SET_POSTS_FAILURE",V="SET_POSTS_STARTED",Y={posts:[],loading:!1,error:null},Q=function(e){return{type:W,posts:e}},X=function(){return{type:V}},K=function(e){return{type:G,payload:{error:e}}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case W:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,posts:Object(F.a)(t.posts)});case G:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},$=function(e){var t=document.querySelector("#".concat(en));t.scrollTo({top:e-t.getBoundingClientRect().top,behavior:"smooth",block:"center"})},ee=Object(c.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.posts.loading,posts:e.posts.posts}}),(function(e){return{setPosts:function(){e((function(e){e(X()),q.get("".concat(z,"/posts/")).then((function(t){var n=t.data;e(Q(n))})).catch((function(t){e(K(t.message))}))}))}}}))((function(e){var t=e.scrollTo,n=e.setPosts,a=e.loading,s=e.posts,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){t===x&&$(c.current.offsetTop)}),[t]),Object(r.useEffect)((function(){n()}),[]),Object(y.jsxs)("div",{ref:c,className:C.a.Blog,children:[Object(y.jsxs)("div",{className:C.a.Header,children:[Object(y.jsx)("h2",{children:"Our Blog"}),Object(y.jsx)("p",{children:"Welcome to our blog. Here we will post news and updates"})]}),Object(y.jsx)("div",{className:C.a.Cards,children:a?Object(y.jsx)("div",{}):s.map((function(e){return Object(y.jsx)(U,{post:e},e.id)}))})]})})),te=n(28),ne=n.n(te),re=n.p+"static/media/intro.7e7cb310.png",ae=function(){return Object(y.jsx)("div",{className:ne.a.Intro,children:Object(y.jsxs)("div",{className:ne.a.IntroInner,children:[Object(y.jsx)("div",{className:ne.a.Image,children:Object(y.jsx)("img",{src:re,alt:""})}),Object(y.jsxs)("div",{className:ne.a.Text,children:[Object(y.jsx)("p",{children:'"We had a great collaboration. Really easy to work with and greate style."'}),Object(y.jsx)("p",{children:"Larry Sheet, CEO of Hasta la Vista"})]})]})})},se=n(14),ce=n(24),ie=n.n(ce),oe=(n(98),function(){return Object(y.jsx)("div",{className:"spinner",children:Object(y.jsxs)("div",{className:"spinner__inner",children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{})]})})}),le=Object(c.b)((function(e){return{scrollTo:e.navbar.scrollTo}}))((function(e){var t=e.scrollTo,n=Object(r.useState)({name:"",email:"",question:""}),a=Object(j.a)(n,2),s=a[0],c=a[1],o=Object(r.useState)(!1),l=Object(j.a)(o,2),u=l[0],d=l[1],O=Object(r.useState)(!1),f=Object(j.a)(O,2),v=f[0],m=f[1],x=Object(r.useRef)(null),g=Object(r.useRef)(null);Object(r.useEffect)((function(){t===h?$(x.current.offsetTop):t===p&&$(g.current.offsetTop)}),[t]);var _=function(e){return c(Object(b.a)(Object(b.a)({},s),{},Object(se.a)({},e.target.name,e.target.value)))};return Object(y.jsxs)("div",{className:ie.a.MoreInfo,children:[u&&Object(y.jsx)(oe,{}),Object(y.jsx)("div",{ref:x,className:ie.a.Info,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"BEST GYM ON MARS"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra placerat purus, quis mattis ligula mattis et. Curabitur hendrerit lectus eget est finibus, ac malesuada sapien porttitor. Aliquam scelerisque suscipit tristique. Vivamus a augue dignissim, porttitor augue eu, facilisis dui. Ipsum placerat lacus"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"Gustavslung 99"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"167-51 BROMMA"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"Tel: +48 589 654 123"}),Object(y.jsx)("br",{}),Object(y.jsx)("span",{children:"info@bgom.com"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:ie.a.Icons,children:[Object(y.jsx)(i.a,{src:M}),Object(y.jsx)(i.a,{src:H}),Object(y.jsx)(i.a,{src:D}),Object(y.jsx)(i.a,{src:L})]})]})}),Object(y.jsx)("div",{ref:g,className:ie.a.Question,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Have a question?"}),Object(y.jsxs)("div",{className:ie.a.Inputs,children:[Object(y.jsx)("input",{name:"name",onChange:function(e){return _(e)},value:s.name,placeholder:"Your name"}),Object(y.jsx)("input",{name:"email",onChange:function(e){return _(e)},value:s.email,placeholder:"Your mail"}),Object(y.jsx)("input",{name:"question",onChange:function(e){return _(e)},value:s.question,placeholder:"Your question"})]}),v&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{style:{color:"green",fontSize:"small"},children:"We will contact you soon!"}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{onClick:function(){d(!0),setTimeout((function(){d(!1),c({name:"",email:"",question:""}),m(!0)}),500)},className:ie.a.Submit,children:Object(y.jsx)("span",{children:"Send"})})]})})]})})),ue=n(33),je=n.n(ue),de=n(29),be=n.n(de),Oe=function(e){var t=e.pass,n=e.buyPass,r=t.name,a=t.title,s=t.image,c=(t.descripion,t.pricePerMonth),i=t.visitsCount;return Object(y.jsxs)("div",{className:be.a.Service,children:[Object(y.jsx)("div",{className:be.a.Image,children:Object(y.jsx)("img",{src:s,alt:""})}),Object(y.jsxs)("div",{className:be.a.Data,children:[Object(y.jsx)("h4",{children:r}),Object(y.jsx)("h5",{children:a}),Object(y.jsx)("br",{}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Price per month: "})," ",c]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("strong",{children:"Visits count: "})," ",i]}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{className:be.a.Button,onClick:function(){return n(r)},children:"BUY"})]})},fe="SET_SUBSCRIPTION_SUCCESS",he="SET_SUBSCRIPTION_FAILURE",pe="SET_SUBSCRIPTION_STARTED",ve={subscription:null,loading:!1,error:null},me=function(e){return{type:fe,subscription:e}},xe=function(){return{type:pe}},ge=function(e){return{type:he,error:e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case fe:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,subscription:t.subscription});case he:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},Se="SET_PASSES_SUCCESS",Ne="SET_PASSES_FAILURE",Te="SET_PASSES_STARTED",Ie="SET_BUYING_STARTED",ye="SET_BUYING_SUCCESS",Ee="SET_REDIRECT_TO",Pe={passes:[],loading:!1,isBuying:!1,error:null,redirectTo:null},we=function(e){return{type:Se,passes:e}},Ae=function(e){return{type:Ee,redirectTo:e}},Ce=function(){return{type:Te}},Re=function(){return{type:Ie}},ke=function(){return{type:ye}},Me=function(e){return{type:Ne,payload:{error:e}}},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case Ie:return Object(b.a)(Object(b.a)({},e),{},{isBuying:!0});case ye:return Object(b.a)(Object(b.a)({},e),{},{isBuying:!1});case Se:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,passes:Object(F.a)(t.passes)});case Ne:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});case Ee:return Object(b.a)(Object(b.a)({},e),{},{redirectTo:t.redirectTo});default:return e}},De=Object(c.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.services.loading,isBuying:e.services.isBuying,passes:e.services.passes,redirectTo:e.services.redirectTo}}),(function(e){return{setPassesHandler:function(){e((function(e){e(Ce()),q.get("".concat(z,"/passes/")).then((function(t){var n=t.data;e(we(n))})).catch((function(t){e(Me(t.message))}))}))},buyPassHandler:function(t){e(function(e){return function(t){var n;t(Re()),q.post("".concat(z,"/users/me/subscription/"),JSON.stringify({card:e}),{headers:{Authorization:"Bearer ".concat(null===(n=JSON.parse(localStorage.getItem("token")))||void 0===n?void 0:n.token)}}).then((function(){q.get("".concat(z,"/users/me/subscription/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(e){var n=e.data;t(me(n)),t(ke()),t(Ae("/profile/subscriptions")),setTimeout((function(){t(Ae(null))}),100)}))})).catch((function(e){t(Me(e.message)),t(ke()),t(Ae("/profile/subscriptions")),setTimeout((function(){t(Ae(null))}),100)}))}}(t))}}}))((function(e){var t=Object(w.f)(),n=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.scrollTo===m&&$(n.current.offsetTop)}),[e.scrollTo]),Object(r.useEffect)((function(){e.setPassesHandler()}),[]),Object(r.useEffect)((function(){e.redirectTo&&t.push(e.redirectTo)}),[e.redirectTo]),Object(y.jsxs)("div",{ref:n,className:je.a.Services,children:[e.showHeader&&Object(y.jsxs)("div",{className:je.a.Header,children:[Object(y.jsx)("h2",{children:"Services"}),Object(y.jsx)("p",{children:"Meet our Services of happy creatives. We love what we do and we would love to work with you."})]}),Object(y.jsx)("div",{className:je.a.Cards,children:e.loading?Object(y.jsx)("div",{}):Object(y.jsxs)(y.Fragment,{children:[e.isBuying&&Object(y.jsx)(oe,{}),e.passes.map((function(t){return Object(y.jsx)(Oe,{pass:t,buyPass:e.buyPassHandler},t.id)}))]})})]})})),Le=n(34),Be=n.n(Le);var Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return new Promise((function(n,r){if("string"===typeof e)c(e).then((function(e){return n(e)}));else{e.length||n(e);for(var a=function(t){c(e[t].picture).then((function(r){e[t].params=r,t+1===e.length&&n(e)}))},s=0;s<e.length;++s)a(s)}function c(e){var n=document.createElement("img");return n.src=e,new Promise((function(e){n.onload=function(){e(n.width>=n.height?{height:"".concat(t,"%"),minWidth:"".concat(t,"%"),width:"none",minHeight:"none"}:{height:"none",minWidth:"none",width:"".concat(t,"%"),minHeight:"".concat(t,"%")})}}))}}))},Fe=n(35),Je=n.n(Fe),ze=function(e){var t=e.trainer,n=t.firstName,a=t.lastName,s=t.rank,c=t.avatar,i=Object(r.useState)(null),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(r.useEffect)((function(){Ue(c).then((function(e){return u(e)}))}),[]),Object(y.jsxs)("div",{className:Je.a.Trainer,children:[Object(y.jsx)("div",{className:Je.a.Image,children:Object(y.jsx)("img",{style:l,src:c,alt:""})}),Object(y.jsxs)("div",{className:Je.a.Data,children:[Object(y.jsxs)("h5",{children:[n," ",a]}),Object(y.jsx)("h6",{children:s})]})]})},qe="SET_TRAINERS_SUCCESS",We="SET_TRAINERS_FAILURE",Ge="SET_TRAINERS_STARTED",Ve={trainers:[],loading:!1,error:null},Ye=function(e){return{type:qe,trainers:e}},Qe=function(){return{type:Ge}},Xe=function(e){return{type:We,payload:{error:e}}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ge:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case qe:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,trainers:Object(F.a)(t.trainers)});case We:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},Ze=Object(c.b)((function(e){return{scrollTo:e.navbar.scrollTo,loading:e.trainers.loading,trainers:e.trainers.trainers}}),(function(e){return{setTrainers:function(){return e((function(e){e(Qe()),q.get("".concat(z,"/trainers/")).then((function(t){var n=t.data;e(Ye(n))})).catch((function(t){e(Xe(t.message))}))}))}}}))((function(e){var t=e.scrollTo,n=e.loading,a=e.trainers,s=e.setTrainers,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){t===v&&$(c.current.offsetTop)}),[t]),Object(r.useEffect)((function(){s()}),[]),Object(y.jsxs)("div",{ref:c,className:Be.a.Team,children:[Object(y.jsxs)("div",{className:Be.a.Header,children:[Object(y.jsx)("h2",{children:"Team"}),Object(y.jsx)("p",{children:"Meet our team of happy creatives. We love what we do and we would love to work with you."})]}),Object(y.jsx)("div",{className:Be.a.Trainers,children:n?Object(y.jsx)("div",{}):a.map((function(e){return Object(y.jsx)(ze,{trainer:e},e.id)}))})]})})),$e=n(43),et=n.n($e),tt=Object(c.b)((function(e){return{isTrainersLoading:e.trainers.loading,isPostsLoading:e.posts.loading,isServicesLoading:e.services.loading}}))((function(e){var t=e.isTrainersLoading,n=e.isPostsLoading,r=e.isServicesLoading;return Object(y.jsx)("div",{className:et.a.HomePage,children:Object(y.jsxs)("div",{className:et.a.HomePageInner,children:[(t||n||r)&&Object(y.jsx)(oe,{}),Object(y.jsx)(le,{}),Object(y.jsx)(ae,{}),Object(y.jsx)(Ze,{}),Object(y.jsx)(De,{showHeader:!0}),Object(y.jsx)(ee,{})]})})})),nt=n(59),rt=n.n(nt),at="LOGIN_SUCCESS",st="LOGIN_FAILURE",ct="LOGIN_STARTED",it={token:null,refresh:null,loading:!1,error:null},ot=function(e,t){return{type:at,token:e,refresh:t}},lt=function(){return{type:ct}},ut=function(e){return{type:st,error:e}},jt=function(){return{type:"LOGOUT"}},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case at:return localStorage.setItem("token",JSON.stringify({token:t.token,refresh:t.refresh})),Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,token:t.token,refresh:t.refresh});case st:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});case"LOGOUT":return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{token:null,refresh:null});default:return e}},bt=n(36),Ot=n.n(bt),ft=function(e){var t=new Date(Date.parse(e)-6e4*new Date(e).getTimezoneOffset()),n=t.toDateString().split(" ");return"".concat(n[2]," ").concat(n[1],", ").concat(n[3]," ").concat(t.toTimeString().replace(/gmt.*$/i,""))},ht=Object(c.b)((function(e){return{subscription:e.subscriptions.subscription,loading:e.subscriptions.loading,error:e.subscriptions.error}}),(function(e){return{setSubscriptionHandler:function(){e((function(e){e(xe()),q.get("".concat(z,"/users/me/subscription/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;e(me(n))})).catch((function(t){e(ge(t))}))}))}}}))((function(e){var t=e.setSubscriptionHandler,n=e.error,a=e.loading,s=e.subscription;return Object(r.useEffect)((function(){t()}),[]),Object(y.jsx)("div",{className:Ot.a.Subscriptions,children:a?Object(y.jsx)(oe,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h3",{children:"Your subscription"}),Object(y.jsx)("div",{className:Ot.a.Main,children:s?Object(y.jsxs)("div",{className:Ot.a.Subscription,children:[Object(y.jsx)("h3",{children:s.card}),Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsx)("strong",{children:"Count of visites: "}),s.visits_count]}),Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsx)("strong",{children:"Purchase date: "}),ft(s.purchased)]}),Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsx)("strong",{children:"Will be expired: "}),ft(s.expires)]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{style:{textAlign:"center"},children:null===n||void 0===n?void 0:n.response.data.detail}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{children:"Our offer:"}),Object(y.jsx)(De,{showHeader:!1})]})})]})})})),pt="SET_RESERVATIONS_SUCCESS",vt="SET_RESERVATIONS_FAILURE",mt="SET_RESERVATIONS_STARTED",xt={reservations:[],loading:!1,error:null},gt=function(e){e(St()),q.get("".concat(z,"/users/me/reservations/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;e(_t(n))})).catch((function(t){var n;e(Nt(null===t||void 0===t||null===(n=t.response)||void 0===n?void 0:n.data))}))},_t=function(e){return{type:pt,reservations:e}},St=function(){return{type:mt}},Nt=function(e){return{type:vt,error:e}},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case mt:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case pt:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,reservations:t.reservations});case vt:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},It=n(19),yt=n.n(It),Et=n(130),Pt=6e4*new Date(Date.now()).getTimezoneOffset(),wt=function(e){try{return new Date(e).toISOString()}catch(t){return new Date(Date.now()+864e5).toISOString()}},At=function(e){return new Date(Date.parse(new Date(e))-Pt).toISOString()},Ct=function(e){var t=new Date(e),n=t.toDateString().split(" ");return"".concat(n[2]," ").concat(n[1],", ").concat(n[3]," ").concat(t.toTimeString().replace(/gmt.*$/i,""))},Rt=Object(c.b)((function(e){return{reservations:e.reservations.reservations,loading:e.reservations.loading,error:e.reservations.error}}),(function(e){return{setReservationsHandler:function(){e((function(e){gt(e)}))},orderReservationHandler:function(t){e(function(e){return function(t){t(St()),q.post("".concat(z,"/users/me/reservations/"),JSON.stringify({reservedStart:e[0],reservedEnd:e[1]}),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(){gt(t)})).catch((function(e){t(Nt(e.response.data))}))}}(t))}}}))((function(e){var t=e.setReservationsHandler,n=e.error,a=e.loading,s=e.reservations,c=e.orderReservationHandler,i=Object(r.useState)(At(Date.now()+864e5).replace(/\:..\..*$/,"")),o=Object(j.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(At(Date.now()+9006e4).replace(/\:..\..*$/,"")),b=Object(j.a)(d,2),O=b[0],f=b[1],h=Object(r.useState)([]),p=Object(j.a)(h,2),v=p[0],m=p[1];return Object(r.useEffect)((function(){t()}),[]),Object(r.useEffect)((function(){m([wt(l),wt(O)])}),[l,O]),Object(y.jsx)("div",{className:yt.a.Reservations,children:a?Object(y.jsx)(oe,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h3",{children:"Your reservations"}),n&&Object(y.jsx)("div",{className:yt.a.Error,children:n.detail||n.subscription||n.reservedRange}),Object(y.jsxs)("div",{className:yt.a.Content,children:[Object(y.jsxs)("div",{className:yt.a.CreateReservation,children:[Object(y.jsxs)("form",{className:yt.a.container,noValidate:!0,children:[n&&Object(y.jsx)("div",{className:yt.a.Error,children:n.reservedStart}),Object(y.jsx)(Et.a,{id:"datetime-local",label:"Reservation start",type:"datetime-local",defaultValue:l,className:yt.a.textField,onChange:function(e){return u(e.target.value)},InputLabelProps:{shrink:!0}})]}),Object(y.jsxs)("form",{className:yt.a.container,noValidate:!0,children:[n&&Object(y.jsx)("div",{className:yt.a.Error,children:n.reservedEnd}),Object(y.jsx)(Et.a,{id:"datetime-local",label:"Reservation end",type:"datetime-local",defaultValue:O,className:yt.a.textField,onChange:function(e){return f(e.target.value)},InputLabelProps:{shrink:!0}})]}),Object(y.jsx)("div",{className:yt.a.Submit,onClick:function(){return c(v)},children:"Order"})]}),Object(y.jsx)("div",{className:yt.a.ReservationsTable,children:0!==s.length&&Object(y.jsxs)("table",{children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Status"}),Object(y.jsx)("th",{children:"Trainer"}),Object(y.jsx)("th",{children:"Start"}),Object(y.jsx)("th",{children:"End"}),Object(y.jsx)("th",{children:"Last update"})]})}),Object(y.jsx)("tbody",{children:s.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.status}),Object(y.jsx)("td",{children:e.trainer}),Object(y.jsx)("td",{children:Ct(e.reservedStart)}),Object(y.jsx)("td",{children:Ct(e.reservedEnd)}),Object(y.jsx)("td",{children:Ct(e.updated)})]},e.id)}))})]})})]})]})})})),kt="SET_PROFILE_DATA_SUCCESS",Mt="SET_PROFILE_DATA_FAILURE",Ht="SET_PROFILE_DATA_STARTED",Dt={profileData:{},loading:!1,error:null},Lt=function(e){return{type:kt,profileData:e}},Bt=function(){return{type:Ht}},Ut=function(e){return{type:Mt,error:e}},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ht:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case kt:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:null,profileData:t.profileData});case Mt:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.error});default:return e}},Jt=n(13),zt=n.n(Jt),qt="subscriptions",Wt="reservations",Gt=function(){var e=Object(w.g)().topicId;return e===qt?Object(y.jsx)(ht,{}):e===Wt?Object(y.jsx)(Rt,{}):Object(y.jsx)("div",{})},Vt=Object(c.b)((function(e){return{pData:e.myProfile.profileData,loading:e.myProfile.loading,error:e.myProfile.error}}),(function(e){return{logoutHandler:function(){e((function(e){e(jt())}))},setProfileDataHandler:function(){e((function(e){e(Bt()),q.get("".concat(z,"/users/me/"),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;Ue(n.avatar,80).then((function(t){n.imageParams=t,e(Lt(n))}))})).catch((function(t){if(401===t.response.status){var n=JSON.parse(localStorage.getItem("token")).refresh;q.post("".concat(z,"/users/login/refresh/"),{refresh:n}).then((function(t){var r=t.data;e(ot(r.access,n))})).catch((function(t){e(jt())}))}else e(Ut(t))}))}))},postProfileDataHandler:function(t){e(function(e){var t=e.email,n=e.firstName,r=e.lastName,a=e.phone;return function(e){e(Bt()),q.put("".concat(z,"/users/me/"),JSON.stringify({email:t,firstName:n,lastName:r,phone:a}),{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("token")).token)}}).then((function(t){var n=t.data;Ue(n.avatar,80).then((function(t){n.imageParams=t,e(Lt(n))}))})).catch((function(t){e(Ut(t.response.data))}))}}(t))}}}))((function(e){var t=e.logoutHandler,n=e.setProfileDataHandler,a=e.postProfileDataHandler,s=e.loading,c=e.pData,i=e.error,o=Object(r.useState)({}),l=Object(j.a)(o,2),u=l[0],O=l[1],f=Object(w.f)(),h=f.location.pathname,p=Object(w.h)(),v=p.path,m=p.url;Object(r.useEffect)((function(){n()}),[]),Object(r.useEffect)((function(){c&&O({email:c.email,firstName:c.firstName,lastName:c.lastName,phone:c.phone})}),[c]);var x=function(e){return O(Object(b.a)(Object(b.a)({},u),{},Object(se.a)({},e.target.name,e.target.value)))};return Object(y.jsxs)("div",{className:zt.a.ProfileAccount,children:[Object(y.jsx)("div",{className:zt.a.Navbar,children:Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{children:Object(y.jsx)(d.b,{className:h===m?zt.a.Active:void 0,to:m,children:"My\xa0profile"})})," /\xa0",Object(y.jsx)("span",{children:Object(y.jsx)(d.b,{className:h==="".concat(m,"/").concat(qt)?zt.a.Active:void 0,to:"".concat(m,"/").concat(qt),children:"Subscriptions"})})," /\xa0",Object(y.jsx)("span",{children:Object(y.jsx)(d.b,{className:h==="".concat(m,"/").concat(Wt)?zt.a.Active:void 0,to:"".concat(m,"/").concat(Wt),children:"Reservations"})})," /\xa0",Object(y.jsx)("span",{onClick:function(){t(),f.push("/profile")},children:"Log\xa0out"})]})}),Object(y.jsx)("div",{className:zt.a.Main,children:Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{exact:!0,path:v,children:s?Object(y.jsx)(oe,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:zt.a.Avatar,children:Object(y.jsx)("div",{className:zt.a.AvatarInner,children:Object(y.jsx)("img",{style:c.imageParams,src:c.avatar,alt:""})})}),Object(y.jsx)("div",{className:zt.a.Menu,children:Object(y.jsx)("div",{className:zt.a.MenuInner,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{children:"First name"}),i&&Object(y.jsx)("div",{className:zt.a.ErrorMessage,children:i.firstName}),Object(y.jsx)("input",{onChange:function(e){return x(e)},name:"firstName",value:u.firstName}),Object(y.jsx)("span",{children:"Last name"}),i&&Object(y.jsx)("div",{className:zt.a.ErrorMessage,children:i.lastName}),Object(y.jsx)("input",{onChange:function(e){return x(e)},name:"lastName",value:u.lastName}),Object(y.jsx)("span",{children:"Email"}),i&&Object(y.jsx)("div",{className:zt.a.ErrorMessage,children:i.email}),Object(y.jsx)("input",{onChange:function(e){return x(e)},name:"email",value:u.email}),Object(y.jsx)("span",{children:"Phone"}),i&&Object(y.jsx)("div",{className:zt.a.ErrorMessage,children:i.phone}),Object(y.jsx)("input",{onChange:function(e){return x(e)},name:"phone",value:u.phone}),Object(y.jsx)("div",{onClick:function(){return a(u)},className:zt.a.SaveData,children:Object(y.jsx)("span",{children:"Save"})})]})})})]})}),Object(y.jsx)(w.a,{path:"".concat(v,"/:topicId"),component:Gt})]})})]})})),Yt=n(15),Qt=n.n(Yt),Xt=Object(c.b)((function(e){return{loading:e.auth.loading,error:e.auth.error}}),(function(e){return{loginHandler:function(t){e(function(e){return function(t){t(lt()),q.post("".concat(z,"/users/login/"),JSON.stringify({email:e.email,password:e.password})).then((function(e){var n=e.data;t(ot(n.access,n.refresh))})).catch((function(e){return t(ut(e))}))}}(t))},registerHandler:function(t){e(function(e){return function(t){t(lt()),q.post("".concat(z,"/users/register/"),JSON.stringify({email:e.email,firstName:e.firstName,lastName:e.lastName,phone:e.phone,password:e.password,password2:e.password2})).then((function(){q.post("".concat(z,"/users/login/"),JSON.stringify({email:e.email,password:e.password})).then((function(e){var n=e.data;t(ot(n.access,n.refresh))})).catch((function(e){return t(ut(e))}))})).catch((function(e){return t(ut(e))}))}}(t))}}}))((function(e){var t=e.loginHandler,n=e.registerHandler,a=e.loading,s=e.error,c=Object(r.useState)(!0),o=Object(j.a)(c,2),l=o[0],u=o[1],d=Object(r.useState)({email:"",firstName:"",password:"",password2:"",lastName:"",phone:""}),O=Object(j.a)(d,2),f=O[0],h=O[1],p=function(e){return h(Object(b.a)(Object(b.a)({},f),{},Object(se.a)({},e.target.name,e.target.value)))};return Object(y.jsxs)("div",{className:Qt.a.ProfileAuth,children:[a&&Object(y.jsx)(oe,{}),Object(y.jsxs)("h1",{children:["Sign ",l?"in":"up"]}),s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.detail}),Object(y.jsxs)("div",{className:Qt.a.Inputs,children:[!l&&Object(y.jsxs)(y.Fragment,{children:[s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.firstName}),Object(y.jsx)("input",{onChange:p,name:"firstName",placeholder:"First name"}),s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.lastName}),Object(y.jsx)("input",{onChange:p,name:"lastName",placeholder:"Last name"}),s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.phone}),Object(y.jsx)("input",{onChange:p,name:"phone",placeholder:"Phone number"})]}),s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.email}),Object(y.jsx)("input",{onChange:p,name:"email",placeholder:"Email"}),s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.password}),Object(y.jsx)("input",{onChange:p,name:"password",type:"password",placeholder:"Password"}),s&&Object(y.jsx)("div",{className:Qt.a.ErrorMessage,children:s.response.data.password2}),!l&&Object(y.jsx)("input",{onChange:p,type:"password",name:"password2",placeholder:"Repeat password"})]}),Object(y.jsx)("div",{onClick:function(){return l?t(f):n(f)},className:Qt.a.Submit,children:"Submit"}),Object(y.jsxs)("div",{children:["Don't have an account? ",Object(y.jsxs)("span",{className:Qt.a.SignUpLink,onClick:function(){return u(!l)},children:["Sign ",l?"up":"in"]})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:Qt.a.MoreInfo,children:[Object(y.jsx)("span",{children:"Gustavslung 99"}),Object(y.jsx)("span",{children:"167-51 BROMMA"}),Object(y.jsx)("span",{children:"Tel: +48 589 654 123"}),Object(y.jsx)("span",{children:"info@bgom.com"}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:Qt.a.Icons,children:[Object(y.jsx)(i.a,{src:M}),Object(y.jsx)(i.a,{src:H}),Object(y.jsx)(i.a,{src:D}),Object(y.jsx)(i.a,{src:L})]})]})]})})),Kt=Object(c.b)((function(e){return{token:e.auth.token}}))((function(e){var t=e.token;return Object(y.jsx)("div",{className:rt.a.ProfilePage,children:t?Object(y.jsx)(Vt,{}):Object(y.jsx)(Xt,{})})})),Zt=n(60),$t=n.n(Zt),en="BlockWithScroll",tn=function(){var e=Object(r.useRef)(null);return Object(y.jsx)("div",{ref:e,className:$t.a.Content,id:en,children:Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{exact:!0,path:"/",component:tt}),Object(y.jsx)(w.a,{path:"/profile",component:Kt})]})})};n(100);var nn=Object(c.b)((function(e){return{isMobile:e.navbar.isMobile}}),(function(e){return{setIsMobile:function(t,n){e(function(e,t){return function(n){!1===e?t<=500&&n(_(!0)):!0===e?t>500&&n(_(!1)):n(_(t<=500))}}(t,n))},login:function(t,n){e(ot(t,n))}}}))((function(e){var t=JSON.parse(localStorage.getItem("token"));return t&&t.token&&t.refresh&&e.login(t.token,t.refresh),Object(r.useEffect)((function(){e.setIsMobile(e.isMobile,window.innerWidth),window.addEventListener("resize",(function(){return e.setIsMobile(e.isMobile,window.innerWidth)}))}),[]),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(P,{}),Object(y.jsx)(tn,{})]})})),rn=n(37),an=n(61),sn=Object(rn.b)({auth:dt,navbar:N,posts:Z,services:He,trainers:Ke,myProfile:Ft,subscriptions:_e,reservations:Tt}),cn=Object(rn.c)((function(e,t){if("LOGOUT"===t.type){var n=e;e={navbar:n.navbar,posts:n.posts,services:n.services,trainers:n.trainers}}return sn(e,t)}),Object(rn.a)(an.a)),on=(n(101),.01*window.innerHeight);document.documentElement.style.setProperty("--vh","".concat(on,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),s.a.render(Object(y.jsx)(c.a,{store:cn,children:Object(y.jsx)(d.a,{children:Object(y.jsx)(nn,{})})}),document.getElementById("root"))},13:function(e,t,n){e.exports={ProfileAccount:"ProfileAccount_ProfileAccount__1Fvow",Navbar:"ProfileAccount_Navbar__15ilB",Active:"ProfileAccount_Active__XUkGw",Main:"ProfileAccount_Main__1oShz",Avatar:"ProfileAccount_Avatar__3lyDr",Menu:"ProfileAccount_Menu__OAXTk",AvatarInner:"ProfileAccount_AvatarInner__2frLB",MenuInner:"ProfileAccount_MenuInner__5ZRws",SaveData:"ProfileAccount_SaveData__MlRy3",ErrorMessage:"ProfileAccount_ErrorMessage__3fJDf"}},15:function(e,t,n){e.exports={ProfileAuth:"ProfileAuth_ProfileAuth__2se0j",Inputs:"ProfileAuth_Inputs__kqwh6",Submit:"ProfileAuth_Submit__2n8CS",MoreInfo:"ProfileAuth_MoreInfo__1KfgS",Icons:"ProfileAuth_Icons__2fPx_",SignUpLink:"ProfileAuth_SignUpLink__3PHiJ",ErrorMessage:"ProfileAuth_ErrorMessage__2tPVF"}},19:function(e,t,n){e.exports={Reservations:"Reservations_Reservations__1Ql7Z",CreateReservation:"Reservations_CreateReservation__2j6qJ",Content:"Reservations_Content__1FOIR",ReservationsTable:"Reservations_ReservationsTable__12X9y",Submit:"Reservations_Submit__2tX80",Error:"Reservations_Error__3dTOt"}},24:function(e,t,n){e.exports={MoreInfo:"MoreInfo_MoreInfo__358P0",Info:"MoreInfo_Info__Ed8FY",Question:"MoreInfo_Question__1pb6N",Inputs:"MoreInfo_Inputs__32TmR",Submit:"MoreInfo_Submit__16P4e",Icons:"MoreInfo_Icons__1lmL5"}},25:function(e,t,n){e.exports={Post:"Post_Post__2t009",Data:"Post_Data__7r4AL",Image:"Post_Image__3I_v1",Buttons:"Post_Buttons__2Q9De",ButtonsInner:"Post_ButtonsInner__2f4pa"}},27:function(e,t,n){e.exports={Navbar:"Navbar_Navbar___kUbe",Tabs:"Navbar_Tabs__2qntK",Burger:"Navbar_Burger__Dtwv-",Layout:"Navbar_Layout__1HgXw"}},28:function(e,t,n){e.exports={Intro:"Intro_Intro__2vWWr",IntroInner:"Intro_IntroInner__zL9uS",Image:"Intro_Image__2T4aV",Text:"Intro_Text__2Lwi7"}},29:function(e,t,n){e.exports={Service:"Service_Service__37eW1",Image:"Service_Image__22E3H",Button:"Service_Button__inDSH"}},31:function(e,t,n){e.exports={Header:"Header_Header__1tkCI",HeaderInner:"Header_HeaderInner__1FhZh",Logo:"Header_Logo__1Tbom"}},32:function(e,t,n){e.exports={Blog:"Blog_Blog__2jXWN",Header:"Blog_Header__RzH7c",Cards:"Blog_Cards__23adM"}},33:function(e,t,n){e.exports={Services:"Services_Services__26yJL",Header:"Services_Header__1iwen",Cards:"Services_Cards__2yEKQ"}},34:function(e,t,n){e.exports={Team:"Team_Team__2rb9F",Header:"Team_Header__3thJc",Trainers:"Team_Trainers__3_4cL"}},35:function(e,t,n){e.exports={Trainer:"Trainer_Trainer__309eo",Image:"Trainer_Image__3M9Ba",Data:"Trainer_Data__3ZzrN"}},36:function(e,t,n){e.exports={Subscriptions:"Subscriptions_Subscriptions__3uyw-",Main:"Subscriptions_Main__2I-4x",Subscription:"Subscriptions_Subscription__2KI1x"}},43:function(e,t,n){e.exports={HomePage:"HomePage_HomePage__1sCBq",HomePageInner:"HomePage_HomePageInner__1AMyt"}},59:function(e,t,n){e.exports={ProfilePage:"ProfilePage_ProfilePage__3mNrw"}},60:function(e,t,n){e.exports={Content:"Content_Content__diwnT"}},98:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.fd3cb1f4.chunk.js.map
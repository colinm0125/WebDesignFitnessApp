import{e as m,f as l,u as v,_ as g,c as d,a as e,g as h,h as u,v as p,b as w,w as y,t as b,i as _,r as k,o as c,d as S}from"./index-BZKew6L3.js";const V=m({setup(){const o=v(),s=l(""),i=l(""),a=l("");return{username:s,password:i,errorMessage:a,login:async()=>{try{const t=await fetch("http://localhost:3000/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.value,password:i.value})});if(t.ok){const n=await t.json();localStorage.setItem("loggedInUser",JSON.stringify(n)),o.push("/dashboard")}else{const n=await t.json();a.value=n.error||"Invalid username or password"}}catch(t){a.value="Error connecting to the server",console.error(t)}}}}}),N={class:"hero is-fullheight-with-navbar"},C={class:"hero-body"},M={class:"container"},U={class:"columns is-centered"},D={class:"column is-one-third"},E={class:"box"},I={class:"field"},T={class:"control has-icons-left"},$={class:"field"},j={class:"control has-icons-left"},B={class:"field"},L={class:"control"},O={key:0,class:"help is-danger has-text-centered"};function q(o,s,i,a,f,t){const n=k("router-link");return c(),d("section",N,[e("div",C,[e("div",M,[e("div",U,[e("div",D,[e("div",E,[s[10]||(s[10]=e("h1",{class:"title has-text-centered"},"Login",-1)),e("form",{onSubmit:s[2]||(s[2]=h((...r)=>o.login&&o.login(...r),["prevent"]))},[e("div",I,[s[4]||(s[4]=e("label",{class:"label",for:"username"},"Username",-1)),e("div",T,[u(e("input",{class:"input",type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=r=>o.username=r),placeholder:"Enter your username",required:""},null,512),[[p,o.username]]),s[3]||(s[3]=e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-user"})],-1))])]),e("div",$,[s[6]||(s[6]=e("label",{class:"label",for:"password"},"Password",-1)),e("div",j,[u(e("input",{class:"input",type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=r=>o.password=r),placeholder:"Enter your password",required:""},null,512),[[p,o.password]]),s[5]||(s[5]=e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-lock"})],-1))])]),s[9]||(s[9]=e("div",{class:"field"},[e("div",{class:"control"},[e("button",{class:"button is-primary is-fullwidth"},"Login")])],-1)),e("div",B,[e("div",L,[s[8]||(s[8]=e("p",null,"Don't have an account?",-1)),w(n,{to:"/signup"},{default:y(()=>s[7]||(s[7]=[S("Sign Up")])),_:1})])]),o.errorMessage?(c(),d("p",O,b(o.errorMessage),1)):_("",!0)],32)])])])])])])}const J=g(V,[["render",q],["__scopeId","data-v-4c71d77a"]]);export{J as default};

import{e as f,j as m,f as c,u as w,_ as v,c as d,a as e,g,h as n,v as t,t as y,i as U,o as p}from"./index-BZKew6L3.js";const b=f({setup(){const o=m({name:"",username:"",password:"",confirmPassword:""}),s=c(""),i=w();return{user:o,errorMessage:s,signUp:async()=>{if(o.password!==o.confirmPassword){s.value="Passwords do not match";return}try{const r=await fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o.name,username:o.username,password:o.password,role:"user"})});if(!r.ok)throw new Error("Failed to sign up. Please try again.");const l=await r.json();localStorage.setItem("loggedInUser",JSON.stringify(l)),i.push("/")}catch(r){s.value=r.message}}}}}),h={class:"section"},P={class:"container"},S={class:"columns is-centered"},C={class:"column is-one-third"},V={class:"box"},k={class:"field"},M={class:"control has-icons-left"},N={class:"field"},q={class:"control has-icons-left"},$={class:"field"},j={class:"control has-icons-left"},B={class:"field"},E={class:"control has-icons-left"},I={key:0,class:"help is-danger"};function O(o,s,i,u,r,l){return p(),d("section",h,[e("div",P,[e("div",S,[e("div",C,[e("div",V,[s[14]||(s[14]=e("h1",{class:"title has-text-centered"},"Sign Up",-1)),e("form",{onSubmit:s[4]||(s[4]=g((...a)=>o.signUp&&o.signUp(...a),["prevent"]))},[e("div",k,[s[6]||(s[6]=e("label",{class:"label",for:"name"},"Name",-1)),e("div",M,[n(e("input",{class:"input",type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=a=>o.user.name=a),placeholder:"Enter your name",required:""},null,512),[[t,o.user.name]]),s[5]||(s[5]=e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-user"})],-1))])]),e("div",N,[s[8]||(s[8]=e("label",{class:"label",for:"username"},"Username",-1)),e("div",q,[n(e("input",{class:"input",type:"text",id:"username","onUpdate:modelValue":s[1]||(s[1]=a=>o.user.username=a),placeholder:"Create username",required:""},null,512),[[t,o.user.username]]),s[7]||(s[7]=e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-user"})],-1))])]),e("div",$,[s[10]||(s[10]=e("label",{class:"label",for:"password"},"Password",-1)),e("div",j,[n(e("input",{class:"input",type:"password",id:"password","onUpdate:modelValue":s[2]||(s[2]=a=>o.user.password=a),placeholder:"Choose a password",required:""},null,512),[[t,o.user.password]]),s[9]||(s[9]=e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-lock"})],-1))])]),e("div",B,[s[12]||(s[12]=e("label",{class:"label",for:"confirmPassword"},"Confirm Password",-1)),e("div",E,[n(e("input",{class:"input",type:"password",id:"confirmPassword","onUpdate:modelValue":s[3]||(s[3]=a=>o.user.confirmPassword=a),placeholder:"Confirm your password",required:""},null,512),[[t,o.user.confirmPassword]]),s[11]||(s[11]=e("span",{class:"icon is-small is-left"},[e("i",{class:"fas fa-lock"})],-1))])]),s[13]||(s[13]=e("div",{class:"field"},[e("div",{class:"control"},[e("button",{class:"button is-primary is-fullwidth"},"Sign Up")])],-1)),o.errorMessage?(p(),d("p",I,y(o.errorMessage),1)):U("",!0)],32)])])])])])}const D=v(b,[["render",O],["__scopeId","data-v-3e9a8406"]]);export{D as default};

import{f as U,j as E,l as C,m as x,_ as T,c as v,a as s,F as S,k as V,n as y,g,h as d,v as m,p as M,o as p,t as k,d as q}from"./index-DeI22Jek.js";const N={setup(){const i=U([]),e=E({username:"",password:"",name:"",role:"user"}),t=E({id:0,username:"",password:"",name:"",role:"user"}),o=U(!1),c=U(!1),a=async()=>{try{const l=await fetch("http://localhost:3000/users");if(!l.ok)throw new Error("Failed to fetch users");i.value=await l.json()}catch(l){console.error("Error fetching users:",l),alert(`Error fetching users: ${l.message}`)}},r=async()=>{if(i.value.some(l=>l.username===e.username)){alert("This username is already taken.");return}try{const l={...e};if(!(await fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error("Failed to add user");await a(),f()}catch(l){console.error("Error adding user:",l),alert(`Error adding user: ${l.message}`)}},b=async l=>{try{if(!(await fetch(`http://localhost:3000/users/${l}`,{method:"DELETE"})).ok)throw new Error("Failed to delete user");await a()}catch(n){console.error("Error removing user:",n),alert(`Error removing user: ${n.message}`)}},u=()=>{e.username="",e.password="",e.name="",e.role="user",o.value=!0,x(()=>{var l;return(l=document.querySelector("#addUserModal input"))==null?void 0:l.focus()})},f=()=>o.value=!1,A=l=>{Object.assign(t,l),c.value=!0},w=()=>c.value=!1,h=async()=>{try{if(!t.name||!t.role){alert("Name and role are required.");return}const l={name:t.name,role:t.role};if(console.log("Payload being sent to backend:",l),!(await fetch(`http://localhost:3000/users/${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).ok)throw new Error(`Failed to update user with ID ${t.id}`);await a(),w(),alert("User updated successfully!")}catch(l){console.error("Error saving user edit:",l),alert(`Error saving user edit: ${l.message}`)}};return C(a),{users:i,newUser:e,editedUser:t,isAddUserModalOpen:o,isEditUserModalOpen:c,addUser:r,removeUser:b,openAddUserModal:u,closeAddUserModal:f,openEditUserModal:A,closeEditUserModal:w,saveUserEdit:h}}},O={class:"admin-section"},F={class:"container"},j={class:"box"},D=["onClick"],_=["onClick"],P={class:"modal-card"},B={class:"modal-card-head"},J={class:"modal-card-body"},L={class:"field"},R={class:"control"},z={class:"field"},I={class:"control"},G={class:"field"},H={class:"control"},K={class:"field"},Q={class:"control"},W={class:"select"},X={class:"modal-card"},Y={class:"modal-card-head"},Z={class:"modal-card-body"},$={class:"field"},ee={class:"control"},se={class:"field"},oe={class:"control"},re={class:"select"};function le(i,e,t,o,c,a){return p(),v("section",O,[s("div",F,[e[26]||(e[26]=s("h1",{class:"title"},"User Management",-1)),s("button",{class:"button is-primary mb-5",onClick:e[0]||(e[0]=(...r)=>o.openAddUserModal&&o.openAddUserModal(...r))},"Add User"),s("div",j,[e[13]||(e[13]=s("h2",{class:"subtitle"},"Current Users",-1)),s("ul",null,[(p(!0),v(S,null,V(o.users,(r,b)=>(p(),v("li",{key:r.id,class:"user-item"},[s("p",null,[s("strong",null,k(r.name),1),q(" - "+k(r.role)+" ",1),s("button",{class:"button is-info is-small ml-3",onClick:u=>o.openEditUserModal(r)},"Edit",8,D),s("button",{class:"button is-danger is-small ml-3",onClick:u=>o.removeUser(r.id)},"Delete",8,_)])]))),128))])]),s("div",{class:y(["modal",{"is-active":o.isAddUserModalOpen}])},[s("div",{class:"modal-background",onClick:e[1]||(e[1]=(...r)=>o.closeAddUserModal&&o.closeAddUserModal(...r))}),s("div",P,[s("header",B,[e[14]||(e[14]=s("p",{class:"modal-card-title"},"Add New User",-1)),s("button",{class:"delete","aria-label":"close",onClick:e[2]||(e[2]=(...r)=>o.closeAddUserModal&&o.closeAddUserModal(...r))})]),s("section",J,[s("form",{onSubmit:e[7]||(e[7]=g((...r)=>o.addUser&&o.addUser(...r),["prevent"]))},[s("div",L,[e[15]||(e[15]=s("label",{class:"label"},"Name",-1)),s("div",R,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[3]||(e[3]=r=>o.newUser.name=r),placeholder:"Enter name",required:""},null,512),[[m,o.newUser.name]])])]),s("div",z,[e[16]||(e[16]=s("label",{class:"label"},"Username",-1)),s("div",I,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=r=>o.newUser.username=r),placeholder:"Enter username",required:""},null,512),[[m,o.newUser.username]])])]),s("div",G,[e[17]||(e[17]=s("label",{class:"label"},"Password",-1)),s("div",H,[d(s("input",{class:"input",type:"password","onUpdate:modelValue":e[5]||(e[5]=r=>o.newUser.password=r),placeholder:"Enter password",required:""},null,512),[[m,o.newUser.password]])])]),s("div",K,[e[19]||(e[19]=s("label",{class:"label"},"Role",-1)),s("div",Q,[s("div",W,[d(s("select",{"onUpdate:modelValue":e[6]||(e[6]=r=>o.newUser.role=r),required:""},e[18]||(e[18]=[s("option",{value:"user"},"User",-1),s("option",{value:"admin"},"Admin",-1)]),512),[[M,o.newUser.role]])])])]),e[20]||(e[20]=s("button",{class:"button is-success",type:"submit"},"Add User",-1))],32)])])],2),s("div",{class:y(["modal",{"is-active":o.isEditUserModalOpen}])},[s("div",{class:"modal-background",onClick:e[8]||(e[8]=(...r)=>o.closeEditUserModal&&o.closeEditUserModal(...r))}),s("div",X,[s("header",Y,[e[21]||(e[21]=s("p",{class:"modal-card-title"},"Edit User",-1)),s("button",{class:"delete","aria-label":"close",onClick:e[9]||(e[9]=(...r)=>o.closeEditUserModal&&o.closeEditUserModal(...r))})]),s("section",Z,[s("form",{onSubmit:e[12]||(e[12]=g((...r)=>o.saveUserEdit&&o.saveUserEdit(...r),["prevent"]))},[s("div",$,[e[22]||(e[22]=s("label",{class:"label"},"Name",-1)),s("div",ee,[d(s("input",{class:"input",type:"text","onUpdate:modelValue":e[10]||(e[10]=r=>o.editedUser.name=r),required:""},null,512),[[m,o.editedUser.name]])])]),s("div",se,[e[24]||(e[24]=s("label",{class:"label"},"Role",-1)),s("div",oe,[s("div",re,[d(s("select",{"onUpdate:modelValue":e[11]||(e[11]=r=>o.editedUser.role=r),required:""},e[23]||(e[23]=[s("option",{value:"user"},"User",-1),s("option",{value:"admin"},"Admin",-1)]),512),[[M,o.editedUser.role]])])])]),e[25]||(e[25]=s("button",{class:"button is-success",type:"submit"},"Save Changes",-1))],32)])])],2)])])}const de=T(N,[["render",le]]);export{de as default};

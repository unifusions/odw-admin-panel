import{W as d,j as s}from"./app-B9O4dLDB.js";import{I as m}from"./InputError-Cpt_ZxEg.js";import{T as c}from"./TextInput-DKqy-vCu.js";import{G as h}from"./GuestLayout-CsaLtZ_j.js";function f({status:t}){const{data:i,setData:a,post:l,processing:x,errors:r}=d({email:""}),n=e=>{e.preventDefault(),l(route("password.email"))},o=encodeURIComponent(`
    <svg width="1920" height="400" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1920" height="400" fill="#D9DEEA" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="400">
        <rect width="1920" height="400" fill="#D9DEEA" />
    </mask>
    <g mask="url(#mask0)">
        <path d="M1059.48 308.024C1152.75 57.0319 927.003 -103.239 802.47 -152.001L1805.22 -495.637L2095.53 351.501L1321.23 616.846C1195.12 618.485 966.213 559.015 1059.48 308.024Z" fill="#C0CBDD" />
        <path d="M1333.22 220.032C1468.66 -144.445 1140.84 -377.182 960 -447.991L2416.14 -947L2837.71 283.168L1713.32 668.487C1530.19 670.868 1197.78 584.509 1333.22 220.032Z" fill="#8192B0" />
    </g>
</svg>

`);return s.jsxs(h,{children:["Test",s.jsx("div",{className:"position-fixed top-0 end-0 start-0 bg-img-start",style:{height:"32rem",backgroundImage:`url("data:image/svg+xml,${o}")`},children:s.jsx("div",{className:"shape shape-bottom zi-1",children:s.jsx("svg",{preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1921 273",children:s.jsx("polygon",{fill:"#fff",points:"0,273 1921,273 1921,0 "})})})}),s.jsxs("div",{class:"container py-5 py-sm-7",children:[s.jsx("a",{class:"d-flex justify-content-center mb-5",href:"./index.html",children:s.jsx("img",{class:"zi-2",src:"/images/odw-logo.png",alt:"Image Description",style:{width:"8rem"}})}),s.jsx("div",{class:"mx-auto",style:{maxWidth:"30rem"},children:s.jsx("div",{class:"card card-lg mb-5",children:s.jsx("div",{class:"card-body",children:s.jsxs("form",{onSubmit:n,children:[s.jsx("div",{class:"text-center",children:s.jsxs("div",{class:"mb-5",children:[s.jsx("h1",{class:"display-5",children:"Forgot password?"}),s.jsx("p",{children:"Enter the email address you used when you joined and we'll send you instructions to reset your password."})]})}),t&&s.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),s.jsxs("div",{class:"mb-4",children:[s.jsx("label",{class:"form-label",for:"resetPasswordSrEmail",tabindex:"0",children:"Your email"}),s.jsx(c,{id:"email",type:"email",name:"email",value:i.email,className:"mt-1 block w-full",isFocused:!0,onChange:e=>a("email",e.target.value)}),s.jsx(m,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{class:"d-grid gap-2",children:[s.jsx("button",{type:"submit",class:"btn btn-primary btn-lg",children:"Submit"}),s.jsx("div",{class:"text-center",children:s.jsxs("a",{class:"btn btn-link",href:route("login"),children:[s.jsx("i",{class:"bi-chevron-left"})," Back to Sign in"]})})]})]})})})})]})]})}export{f as default};

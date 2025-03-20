import{r as p,W as b,j as e}from"./app-mM7tJIyr.js";import{I as n}from"./InputError-tUoqtY8g.js";import{I as a}from"./InputLabel-DwNz_jrY.js";import{T as o}from"./TextInput-T96HsST-.js";function w({clinic:i}){const m=p.useRef(null),{data:r,setData:l,post:t,processing:j,errors:c,reset:d}=b({full_name:"",email:"",phone:"",password:"",password_confirmation:"",branch_id:"",role:""}),h=()=>{const s=bootstrap.Modal.getInstance(m.current);d(),s.toggle()},x=s=>{s.preventDefault(),t(route("clinics.users.store",i),{onFinish:h,onError:u=>{console.log(u)}})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-grid mb-3",children:e.jsxs("button",{className:"btn  btn-outline-primary  btn-dashed-outline","data-bs-toggle":"modal","data-bs-target":"#addClinicModal",children:[e.jsx("i",{class:"bi-plus"})," Add User"]})}),e.jsx("div",{id:"addClinicModal",className:"modal fade modal-lg",ref:m,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",id:"exampleModalCenterTitle",children:"Add Clinic"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("form",{action:"",onSubmit:x,noValidate:!0,children:[e.jsxs("div",{className:"row mb-4",children:[e.jsx(a,{htmlFor:"full_name",className:"form-label col-sm-3 col-form-label",value:"Full Name"}),e.jsx("div",{class:"col-sm-9",children:e.jsx(o,{type:"text",id:"full_name",name:"full_name",className:"form-control",placeholder:"Full Name",onChange:s=>l("full_name",s.target.value)})})]}),e.jsxs("div",{className:"row mb-4",children:[e.jsx(a,{htmlFor:"email",className:"form-label col-sm-3 col-form-label",value:"Email"}),e.jsx("div",{className:"col-sm-9",children:e.jsx(o,{type:"email",id:"email",name:"email",className:"form-control",placeholder:"email@domain.com",onChange:s=>l("email",s.target.value)})})]}),e.jsxs("div",{className:"row mb-4",children:[e.jsx(a,{htmlFor:"email",className:"form-label col-sm-3 col-form-label",value:"Phone"}),e.jsxs("div",{className:"col-sm-9",children:[e.jsx(o,{type:"text",id:"phone",name:"phone",className:"form-control",placeholder:"+x(xxx)xxx-xx-xx",onChange:s=>l("phone",s.target.value)}),e.jsx(n,{message:c.phone,className:"mt-2"})]})]}),e.jsxs("div",{class:"row mb-4",children:[e.jsx(a,{className:"form-label col-sm-3 col-form-label",htmlFor:"password",value:"Password"}),e.jsxs("div",{className:"col-sm-9",children:[e.jsx(o,{id:"password",type:"password",name:"password",value:r.password,className:"form-control form-control-lg",placeholder:"8+ characters required",onChange:s=>l("password",s.target.value),required:!0}),e.jsx(n,{message:c.password,className:"invalid-feedback"})]})]}),e.jsxs("div",{class:"row mb-4",children:[e.jsx(a,{htmlFor:"password_confirmation",value:"Confirm Password",className:"form-label col-sm-3 col-form-label"}),e.jsxs("div",{class:"col-sm-9",children:[e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"form-control form-control-lg mb-3",placeholder:"8+ characters required",onChange:s=>l("password_confirmation",s.target.value),required:!0}),e.jsx(n,{message:c.password_confirmation,className:"invalid-feedback"}),e.jsx("h5",{children:"Password requirements:"}),e.jsx("p",{class:"fs-6 mb-2",children:"Ensure that these requirements are met:"}),e.jsxs("ul",{class:"fs-6",children:[e.jsx("li",{children:"Minimum 8 characters long - the more, the better"}),e.jsx("li",{children:"At least one lowercase character"}),e.jsx("li",{children:"At least one uppercase character"}),e.jsx("li",{children:"At least one number, symbol, or whitespace character"})]})]})]}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("label",{htmlFor:"clinic_branch",className:"col-sm-3 col-form-label form-label",children:"Branch "}),e.jsx("div",{className:"col-sm-9",children:e.jsxs("select",{name:"",id:"clinic_branch",className:"form-select",onChange:s=>l("branch_id",s.target.value),value:r.branch_id,children:[e.jsx("option",{value:"",children:"Select Clinic Branch"}),i.branches.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})]}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("label",{for:"phoneLabel",className:"col-sm-3 col-form-label form-label",children:"Role "}),e.jsx("div",{className:"col-sm-9",children:e.jsxs("select",{name:"",id:"",className:"form-select",onChange:s=>l("role",s.target.value),value:r.role,children:[e.jsx("option",{value:"",children:"Select User Role"}),e.jsx("option",{value:"clinic_admin",children:"Clinic Admin"}),e.jsx("option",{value:"clinic_user",children:"Clinic User"})]})})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("button",{type:"button",className:"btn btn-white me-3","data-bs-dismiss":"modal",children:"Close"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save Clinic"})]})]})})]})})})]})}export{w as default};

import{j as s}from"./app-mM7tJIyr.js";function c({branches:a}){return s.jsx(s.Fragment,{children:a.map((e,l)=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"card mb-3",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"d-flex mb-3 align-items-start",children:[s.jsxs("div",{className:"me-2",children:[s.jsxs("h3",{class:"mb-0 me-3",children:[e.name," "]}),l===0&&s.jsx("span",{class:"badge bg-info",children:"Main Branch"})]}),s.jsx("div",{className:"ms-auto",children:s.jsxs("div",{className:"dropdown",children:[s.jsx("button",{type:"button",className:"btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle",id:"kanbanProjectsGridDropdown1","data-bs-toggle":"dropdown","aria-expanded":"false",children:s.jsx("i",{className:"bi-three-dots-vertical"})}),s.jsxs("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"kanbanProjectsGridDropdown1",children:[s.jsxs("a",{className:"dropdown-item",href:"#",draggable:"false",children:[s.jsx("i",{className:"bi-pencil dropdown-item-icon"})," Rename project"]}),s.jsxs("a",{className:"dropdown-item",href:"#",draggable:"false",children:[s.jsx("i",{className:"bi-star dropdown-item-icon"})," Add to favorites"]}),s.jsxs("a",{className:"dropdown-item",href:"#",draggable:"false",children:[s.jsx("i",{className:"bi-archive dropdown-item-icon"})," Archive project"]}),s.jsx("div",{className:"dropdown-divider"}),s.jsxs("a",{className:"dropdown-item text-danger",href:"#",draggable:"false",children:[s.jsx("i",{className:"bi-trash dropdown-item-icon text-danger"}),"Remove"]})]})]})})]}),s.jsxs("div",{className:"row mb-3 border-bottom border-secondary-subtle",children:[s.jsx("div",{className:"col-md-3",children:s.jsxs("p",{className:"d-block text-body",children:[e.address_line_1,s.jsx("br",{}),e.address_line_2,s.jsx("br",{}),e.zipcode.city.name," - ",e.zipcode.zip_code,s.jsx("br",{}),e.zipcode.city.state.name]})}),s.jsx("div",{className:"col-md-3",children:s.jsx("ul",{className:"list-group list-group-flush list-group-no-gutters",children:s.jsxs("li",{className:"list-group-item",children:[s.jsx("h5",{children:" Working Hours"}),s.jsxs("ul",{className:"list-unstyled list-py-2 text-body",children:[s.jsxs("li",{children:[s.jsx("i",{className:"bi-at me-2"})," ",e.email]}),s.jsxs("li",{children:[s.jsx("i",{className:"bi-phone me-2"}),e.phone]})]})]})})}),s.jsx("div",{className:"col-md-3",children:s.jsx("ul",{className:"list-group list-group-flush list-group-no-gutters",children:s.jsxs("li",{className:"list-group-item",children:[s.jsx("h5",{children:" Contact"}),s.jsxs("ul",{className:"list-unstyled list-py-2 text-body",children:[s.jsxs("li",{children:[s.jsx("i",{className:"bi-at me-2"})," ",e.email]}),s.jsxs("li",{children:[s.jsx("i",{className:"bi-phone me-2"}),e.phone]})]})]})})}),s.jsx("div",{className:"col-md-3",children:e.dentalservices.map(d=>s.jsx("span",{class:"badge bg-soft-dark text-dark me-2 mb-2",children:d.dentalservice.name}))})]}),s.jsxs("div",{className:"row mb-3",children:[s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"d-block h4 mb-1",children:e.dentists.length}),s.jsx("span",{className:"d-block fs-6",children:"Dentists"})]})}),s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"d-block h4 mb-1",children:"0"}),s.jsx("span",{className:"d-block fs-6",children:"Specialists"})]})}),s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"d-block h4 mb-1",children:e.dentalservices.length}),s.jsx("span",{className:"d-block fs-6",children:"Services"})]})})]})]})})}))})}export{c as default};

import{r as o,j as e}from"./app-rKIe7vKN.js";import{u as b}from"./index-CdOuyzMX.js";import{B as m}from"./button-BSUTEGjt.js";import{c as u}from"./createLucideIcon-Ch-CKtN6.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],f=u("trash",j),w=({onFileSelect:a,existingImage:r=null,deleteFile:x})=>{const[c,s]=o.useState(r);o.useEffect(()=>{r&&s(r)},[r]);const n=o.useCallback(h=>{const t=h[0];t&&(s(URL.createObjectURL(t)),a(t))},[a]),{getRootProps:i,getInputProps:d,isDragActive:l}=b({onDrop:n}),p=()=>{s(null)};return e.jsx(e.Fragment,{children:c?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:c,className:"h-30 w-30 object-cover rounded mb-3 shadow-sm"}),e.jsx(m,{variant:"ghost",type:"button",onClick:p,children:e.jsx(f,{height:5})})]}):e.jsx("div",{...i(),className:`
        p-10 border-4 rounded-lg text-center cursor-pointer transition-colors
        ${l?"border-blue-500 bg-blue-100":"border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"}
      `,children:e.jsxs("label",{class:"profile-cover-uploader-label btn btn-sm btn-white",for:"profileCoverUplaoder",children:[e.jsx("i",{class:"bi-camera-fill"}),e.jsx("input",{...d()}),l?e.jsx("p",{className:"text-blue-600",children:"Drop the files here ..."}):e.jsx("p",{className:"text-gray-500",children:"Drag 'n' drop some files here, or click to select files"})]})})})};export{w as I,f as T};

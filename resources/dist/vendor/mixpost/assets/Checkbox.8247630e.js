import{i as d,j as u,v as n,u as l,o as i,c as p,k as f}from"./app.cba077cd.js";const h=["value"],m={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(o,{emit:t}){const a=o,e=d({get(){return a.checked},set(r){t("update:checked",r)}});return(r,s)=>u((i(),p("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>f(e)?e.value=c:null),class:"rounded-md w-5 h-5 border-gray-200 text-indigo-600 shadow-sm cursor-pointer focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:border-gray-100 disabled:cursor-not-allowed"},null,8,h)),[[n,l(e)]])}};export{m as _};
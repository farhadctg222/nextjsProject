"use strict";(()=>{var e={};e.id=569,e.ids=[569],e.modules={8013:e=>{e.exports=require("mongodb")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6678:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>v,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d});var o={};r.r(o),r.d(o,{GET:()=>p});var a=r(9303),n=r(8716),s=r(3131),i=r(9414),c=r(7070);let p=async e=>{let t=await (0,i.Qm)(),r=await t.collection("book"),o=await r.find({}).toArray();return c.NextResponse.json(o)},u=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/book/route",pathname:"/api/book",filename:"route",bundlePath:"app/api/book/route"},resolvedPagePath:"F:\\nextjs\\nextjs\\src\\app\\api\\book\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:h}=u,m="/api/book/route";function v(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}},9414:(e,t,r)=>{let o;r.d(t,{Bz:()=>p,P9:()=>c,Qm:()=>s,Xn:()=>u,mr:()=>i});let{MongoClient:a,ServerApiVersion:n}=r(8013),s=async()=>{if(o)return o;try{return o=new a("mongodb+srv://NextJs:oNoimHa0fK7HivY7@cluster0.cgsbnjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{serverApi:{version:n.v1,strict:!0,deprecationErrors:!0}}).db("NextJs")}catch(e){console.log(e)}},i=async()=>{let e=await fetch("http://localhost:3000/api/coments",{cache:"no-store"});return await e.json()},c=async()=>{let e=await fetch("http://localhost:3000/api/book",{cache:"no-store"});return await e.json()},p=async()=>{let e=await fetch("http://localhost:3000/api/team",{cache:"no-store"});return await e.json()},u=async()=>{let e=await fetch("http://localhost:3000/api/service",{cache:"no-store"});return await e.json()}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948,972],()=>r(6678));module.exports=o})();
import{c as fa,r as l,j as e,C as $,m as H,s as N,k as U,l as J,S as Be,I as ie,F as ja,B as f,p as ba,ae as Ge,L as ee,ah as je,ag as be,a3 as Ve,U as Le,n as va,b3 as Na,b4 as ve,D as Q,a as Z,b as oe,d as ne,$ as G,a0 as ue,e as ge}from"./index-DOteXm7Z.js";import{R as wa}from"./ReportViewer-DdoUbH84.js";import{T as Ue,c as Da,a as W,b as fe}from"./tabs-CIwIn28-.js";import{a as S}from"./api-CodGKqrf.js";import{S as L}from"./skeleton-D5uPUtLs.js";import{S as Sa}from"./ScrollableTabs-Hv0DfXgL.js";import{S as we,a as De,b as Se,c as Ce,d as C}from"./select-sM52x-b3.js";import{C as $e}from"./date-picker-ilZ0xVG5.js";import{T as Je,a as We,b as ce,c as w,d as Ye,e as D}from"./table-BOCT0tVP.js";import{F as qe}from"./filter-DLQx28gi.js";import{P as Xe}from"./plus-R83g4OcX.js";import{C as Ke}from"./chevron-left-BgP2qenS.js";import{D as Ne}from"./download-BlQEAgZJ.js";import{s as He,a as Oe}from"./popover-Dy46VZ7M.js";import"./alert-BoVgKQRr.js";import"./index-xEyzeBI-.js";import"./getDaysInMonth-ihoAQ2KX.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=fa("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),Pa=()=>{const[t,r]=l.useState("payroll_summary"),[i,p]=l.useState([]);l.useEffect(()=>{(async()=>{try{const g=((await S.list("payroll",{sort:"StartDate DESC",pageSize:100})).data||[]).map(v=>({label:`${v.Reason} (${v.StartDate} - ${v.EndDate})`,value:String(v.PayrollID)}));p(g)}catch(u){console.error("Failed to fetch payrolls for reports",u)}})()},[]);const P=[{key:"start_date",label:"Start Date",type:"date",defaultValue:new Date(new Date().getFullYear(),0,1).toISOString().split("T")[0]},{key:"end_date",label:"End Date",type:"date",defaultValue:new Date().toISOString().split("T")[0]}],h=[{key:"payroll_id",label:"Select Payroll",type:"select",options:i}],d={payroll_summary:{type:"payroll_summary",title:"Payroll Summary Report",description:"Overview of payroll periods within a date range.",columns:[{key:"PayrollID",label:"ID"},{key:"Description",label:"Description"},{key:"StartDate",label:"Start Date",format:c=>c?new Date(c).toLocaleDateString():"-"},{key:"EndDate",label:"End Date",format:c=>c?new Date(c).toLocaleDateString():"-"},{key:"TotalDays",label:"Days"},{key:"Status",label:"Status"},{key:"CreatedDate",label:"Created On",format:c=>c?new Date(c).toLocaleDateString():"-"}],filters:P},payroll_salary_sheet:{type:"payroll_salary_sheet",title:"Payroll Salary Sheet",description:"Detailed salary sheet for a specific payroll period.",columns:[{key:"EmployeeID",label:"ID"},{key:"EmployeeName",label:"Name"},{key:"NationalID",label:"National ID"},{key:"TotalHoursWorked",label:"Hours"},{key:"OvertimeHours",label:"Overtime"},{key:"AbsentHours",label:"Absent"},{key:"Currency",label:"Currency"},{key:"GrossSalary",label:"Gross",format:c=>Number(c).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"NetSalary",label:"Net Pay",format:c=>Number(c).toLocaleString(void 0,{minimumFractionDigits:2})}],filters:h},payroll_components_breakdown:{type:"payroll_components_breakdown",title:"Payroll Components Breakdown",description:"Detailed list of additions and deductions per employee for a specific payroll.",columns:[{key:"EmployeeName",label:"Name"},{key:"ComponentName",label:"Component"},{key:"ComponentType",label:"Type",format:c=>e.jsx("span",{className:c==="Addition"?"text-green-600":"text-red-600",children:c})},{key:"Amount",label:"Amount",format:c=>Number(c).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"Currency",label:"Curr"},{key:"Notes",label:"Notes"}],filters:h}}[t];return e.jsxs("div",{className:"space-y-6",children:[e.jsx($,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(H,{className:"p-4",children:e.jsx(Ue,{value:t,onValueChange:r,className:"w-full",children:e.jsxs(Da,{className:"grid w-full grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border border-[#124562]/20 p-1 rounded-lg",children:[e.jsx(W,{value:"payroll_summary",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Payroll Summary"}),e.jsx(W,{value:"payroll_salary_sheet",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Salary Sheet"}),e.jsx(W,{value:"payroll_components_breakdown",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Components Breakdown"})]})})})}),e.jsx("div",{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 rounded-xl hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30 p-6",children:e.jsx(wa,{reportType:d.type,title:d.title,description:d.description,columns:d.columns,filterFields:d.filters,disableAutoFetch:!0})})]})},V={listPayrolls:async(t={})=>{const r=typeof t.page=="number"?t.page:0;return await S.list("payroll",{page:r,pageSize:t.pageSize||10,sort:"DESC",...t.filters||{}})},listEmployeeSalaries:async(t={})=>{const r=await S.list("employeesalary",{page:t.page||0,pageSize:t.pageSize||10,sort:"ASC",field:"EmployeeID",...t.payrollId&&{exact_filters:JSON.stringify({Payroll:t.payrollId})},...t.employeeName&&{EmployeeName:{$like:`%${t.employeeName}%`}},...t.department&&{Department:t.department},...t.status&&{Status:t.status}});if(r.data&&r.data.length>0){const i=await Promise.all(r.data.map(async p=>{try{const h=(await S.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:p.SalaryID}),sort:"ASC"})).data.reduce((b,d)=>(d.IsAdd?b.additions+=d.Amount||0:b.deductions+=d.Amount||0,b),{additions:0,deductions:0});return{...p,TotalEarnings:h.additions,TotalDeductions:h.deductions}}catch(P){return console.error("Error fetching salary components:",P),p}}));return{...r,data:i}}return r},getSalaryDetails:async t=>{const r=await S.get("employeesalary",t),i=await S.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:t}),sort:"ASC",pageSize:1e3});return{...r,components:i.data||[]}},createPayroll:async t=>await S.create("payroll",{...t,Status:"Pending",CreatedBy:1}),deletePayroll:async t=>(await S.list("employeesalary",{exact_filters:JSON.stringify({PayrollID:t}),sort:"ASC",pageSize:1e3}),await S.delete("payroll",t)),approvePayroll:async(t,r)=>await S.update("payroll",t,{Status:"Approved",ApprovedBy:r,ApprovalDate:N(new Date,"yyyy-MM-dd HH:mm:ss")}),exportPayroll:async(t,r="pdf")=>await S.get(`payroll/export/${t}`,{format:r}),getPayrollSummary:async t=>{try{return await S.get("payroll/summary",{payrollId:t})}catch(r){throw console.error("Error fetching payroll summary:",r),r}},updatePayrollStatus:async(t,r)=>await S.update("payroll",t,r),getEmployeeDeductionTypes:async t=>{try{return(await S.list("contractpaytype",{filters:JSON.stringify({EmployeeID:t}),sort:"ASC"})).data||[]}catch(r){return console.error("Error fetching deduction types:",r),[]}}};function ka({payrolls:t,loading:r,payrollSearch:i,setPayrollSearch:p,payrollStatusFilter:P,setPayrollStatusFilter:h,payrollPage:b,setPayrollPage:d,payrollPageSize:c,payrollTotal:u,handleSelectPayroll:g,handleDeletePayroll:v,setApprovingPayroll:T,setApprovalComments:M,setShowApproveDialog:F,setShowNewPayrollDialog:k,formatDate:m,getStatusBadge:o}){return e.jsxs($,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsx(J,{className:"text-[#30c0da]",children:"Payroll Periods"}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Be,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(ie,{placeholder:"Search payrolls...",className:"pl-10 w-full",value:i,onChange:n=>{p(n.target.value),d(1)}})]}),e.jsxs(we,{value:P,onValueChange:n=>{h(n),d(1)},children:[e.jsxs(De,{className:"w-[180px]",children:[e.jsx(qe,{className:"w-4 h-4 mr-2"}),e.jsx(Se,{placeholder:"Filter by status"})]}),e.jsxs(Ce,{children:[e.jsx(C,{value:"all",children:"All Statuses"}),e.jsx(C,{value:"Draft",children:"Draft"}),e.jsx(C,{value:"Pending",children:"Pending"}),e.jsx(C,{value:"Approved",children:"Approved"}),e.jsx(C,{value:"Rejected",children:"Rejected"}),e.jsx(C,{value:"Processing",children:"Processing"})]})]})]})]})}),e.jsx(H,{children:r.payroll?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):t.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(ja,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll periods"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by creating a new payroll period."}),e.jsx("div",{className:"mt-6",children:e.jsxs(f,{onClick:()=>k(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(Xe,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Je,{children:[e.jsx(We,{children:e.jsxs(ce,{children:[e.jsx(w,{children:"ID"}),e.jsx(w,{children:"Period"}),e.jsx(w,{children:"Days"}),e.jsx(w,{children:"Reason"}),e.jsx(w,{children:"Status"}),e.jsx(w,{children:"Created"}),e.jsx(w,{className:"text-right",children:"Actions"})]})}),e.jsx(Ye,{children:t.map(n=>e.jsxs(ce,{children:[e.jsxs(D,{className:"font-medium",children:["#",n.PayrollID]}),e.jsx(D,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(ba,{className:"w-4 h-4 mr-2 text-gray-500"}),m(new Date(n.StartDate))," - ",m(new Date(n.EndDate))]})}),e.jsx(D,{children:n.TotalDays}),e.jsx(D,{className:"max-w-xs truncate",children:n.Reason}),e.jsx(D,{children:o(n.Status)}),e.jsx(D,{children:m(new Date(n.CreatedDate))}),e.jsx(D,{children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>g(n),children:[e.jsx(Ge,{className:"w-4 h-4 mr-1"})," View"]}),(n.Status==="Draft"||n.Status==="Pending")&&e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>v(n),disabled:r.action,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[r.action?e.jsx(ee,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(je,{className:"w-4 h-4 mr-1"}),"Delete"]}),(n.Status==="Pending"||n.Status==="Processing")&&e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>{T(n),M(""),F(!0)},disabled:r.action,className:"text-green-600 hover:text-green-700 hover:bg-green-50",children:[r.action?e.jsx(ee,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(be,{className:"w-4 h-4 mr-1"}),"Approve"]})]})})]},n.PayrollID))})]}),u>c&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(b-1)*c+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(b*c,u)})," ","of ",e.jsx("span",{className:"font-medium",children:u})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>d(n=>Math.max(1,n-1)),disabled:b===1||r.payroll,children:[e.jsx(Ke,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>d(n=>n+1),disabled:b*c>=u||r.payroll,children:["Next ",e.jsx(Ve,{className:"w-4 h-4 ml-1"})]})]})]})]})})]})}function Ea({selectedPayroll:t,salaries:r,loading:i,salarySearch:p,setSalarySearch:P,salaryStatusFilter:h,setSalaryStatusFilter:b,salaryPage:d,setSalaryPage:c,salaryPageSize:u,salaryTotal:g,selectedSalary:v,fetchSalaryDetails:T,setShowExportDialog:M,formatDate:F,formatCurrency:k,getStatusBadge:m}){return t?e.jsxs($,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx(J,{className:"text-[#30c0da]",children:"Employee Salaries"}),e.jsxs(va,{children:[t.Reason," • ",F(t.StartDate)," - ",F(t.EndDate)]})]}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Be,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(ie,{placeholder:"Search employees...",className:"pl-10 w-full",value:p,onChange:o=>{P(o.target.value),c(1)}})]}),e.jsxs(we,{value:h,onValueChange:o=>{b(o),c(1)},children:[e.jsxs(De,{className:"w-[180px]",children:[e.jsx(qe,{className:"w-4 h-4 mr-2"}),e.jsx(Se,{placeholder:"Filter by status"})]}),e.jsxs(Ce,{children:[e.jsx(C,{value:"all",children:"All Statuses"}),e.jsx(C,{value:"Draft",children:"Draft"}),e.jsx(C,{value:"Pending",children:"Pending"}),e.jsx(C,{value:"Approved",children:"Approved"}),e.jsx(C,{value:"Paid",children:"Paid"}),e.jsx(C,{value:"Rejected",children:"Rejected"})]})]}),e.jsxs(f,{variant:"outline",onClick:()=>M(!0),disabled:i.action,children:[e.jsx(Ne,{className:"w-4 h-4 mr-2"}),"Export"]})]})]})}),e.jsx(H,{children:i.salaries?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):r.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(Le,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No employee salaries"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"No salaries found for the selected payroll period."})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Je,{children:[e.jsx(We,{children:e.jsxs(ce,{children:[e.jsx(w,{children:"Employee"}),e.jsx(w,{children:"Department"}),e.jsx(w,{children:"Position"}),e.jsx(w,{className:"text-right",children:"Gross Salary"}),e.jsx(w,{className:"text-right",children:"Additions"}),e.jsx(w,{className:"text-right",children:"Deductions"}),e.jsx(w,{className:"text-right",children:"Net Salary"}),e.jsx(w,{children:"Status"}),e.jsx(w,{className:"text-right",children:"Actions"})]})}),e.jsx(Ye,{children:r.map(o=>{const n=o.GrossSalary||0,Y=o.TotalDeductions||0,_=o.NetSalary||n-Y;return e.jsxs(ce,{children:[e.jsx(D,{className:"font-medium",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-2",children:(o.employees_FirstName||o.EmployeeName||"").charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{children:o.employees_FirstName&&o.employees_LastName?`${o.employees_FirstName} ${o.employees_LastName}`:o.EmployeeName}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",o.EmployeeID]})]})]})}),e.jsx(D,{children:o.employees_Department||o.Department}),e.jsx(D,{children:o.job_JobName||o.Position}),e.jsx(D,{className:"text-right",children:k(n,o.Currency)}),e.jsx(D,{className:"text-right text-green-600",children:k(o.TotalEarnings||0,o.Currency)}),e.jsxs(D,{className:"text-right text-red-600",children:["-",k(Y,o.Currency)]}),e.jsx(D,{className:"text-right font-medium",children:k(_,o.Currency)}),e.jsx(D,{children:m(o.Status)}),e.jsx(D,{children:e.jsx("div",{className:"flex justify-end",children:e.jsxs(f,{variant:"ghost",size:"sm",onClick:()=>T(o),disabled:i.details,children:[e.jsx(Ge,{className:"w-4 h-4 mr-1"}),i.details&&(v==null?void 0:v.SalaryID)===o.SalaryID?"Loading...":"View"]})})})]},o.SalaryID)})})]}),g>u&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(d-1)*u+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(d*u,g)})," ","of ",e.jsx("span",{className:"font-medium",children:g})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>c(o=>Math.max(1,o-1)),disabled:d===1||i.salaries,children:[e.jsx(Ke,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(f,{variant:"outline",size:"sm",onClick:()=>c(o=>o+1),disabled:d*u>=g||i.salaries,children:["Next ",e.jsx(Ve,{className:"w-4 h-4 ml-1"})]})]})]})]})})]}):e.jsx($,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(H,{className:"pt-6",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx(Le,{className:"mx-auto h-12 w-12 text-[#30c0da]"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll selected"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Select a payroll period to view employee salaries."})]})})})}function Aa({employeeName:t,employeeId:r,department:i,position:p,salaryMonth:P,salaryDate:h,basicSalary:b,earnings:d,deductions:c,currency:u,companyName:g="Brilliant Medical Center",companyArabic:v="عيادة برلنت لطب الأسنان",onClose:T}){const M=l.useRef(null),[F,k]=l.useState(null),[m,o]=l.useState(null),[n,Y]=l.useState(new Set);l.useEffect(()=>{(async()=>{try{const x=await ve.getImage("company_logo");x!=null&&x.image_data&&k(x.image_data);const A=await ve.getCurrency("global_currency");A!=null&&A.currency&&o(A.currency)}catch(x){console.error("Error fetching company config:",x)}})()},[]);const _=d.reduce((y,x)=>y+(x.amount||0),0),q=c.filter((y,x)=>!n.has(x)).reduce((y,x)=>y+(x.amount||0),0),de=_-q,R=m||u,B=y=>{Y(x=>{const A=new Set(x);return A.has(y)?A.delete(y):A.add(y),A})},me=()=>{window.print()};return e.jsxs("div",{className:"payslip-wrapper",children:[e.jsx("style",{children:`
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        @media print {
          html {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 0;
            scrollbar-width: none;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
          }
          
          body {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 0;
            overflow: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
          }
          
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          .print-controls {
            display: none !important;
          }
          
          /* Hide Radix UI Dialog close button when printing */
          @media print {
            [data-radix-dialog-close] {
              display: none !important;
            }
          }
          
          .payslip-wrapper {
            width: 210mm;
            height: 297mm;
            padding: 0;
            margin: 0;
            display: block;
            background: white;
            overflow: hidden;
          }
          
          .payslip-container {
            width: 210mm;
            height: 297mm;
            padding: 12mm;
            margin: 0;
            box-shadow: none;
            border-radius: 0;
            box-sizing: border-box;
            overflow: hidden;
            display: block;
            font-family: 'Georgia', serif;
            color: #2c3e50;
          }
          
          .logo-section {
            margin-bottom: 6px;
            padding-bottom: 6px;
            border-bottom: 2px solid #d4af37;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .logo {
            font-size: 28px;
            flex-shrink: 0;
          }
          
          .company-header {
            text-align: center;
            flex: 1;
          }
          
          .company-name {
            font-size: 16px;
            font-weight: 600;
            margin: 0;
            line-height: 1;
          }
          
          .company-arabic {
            font-size: 11px;
            color: #666;
            margin: 2px 0 0 0;
            line-height: 1;
            direction: rtl;
          }
          
          .section-divider {
            border-bottom: 2px solid #d4af37;
            margin: 6px 0;
            height: 0;
          }
          
          .hidden-deduction {
            display: none !important;
          }
          
          .info-row {
            display: flex;
            justify-content: space-between;
            padding: 2px 0;
            border-bottom: 1px solid #eee;
            font-size: 10px;
            line-height: 1.2;
          }
          
          .info-label {
            font-weight: 600;
          }
          
          .info-value {
            color: #555;
          }
          
          .salary-table {
            width: 100%;
            margin: 4px 0;
            border-collapse: collapse;
            font-size: 9.5px;
            line-height: 1.2;
          }
          
          .salary-table td {
            padding: 2px 3px;
            border-bottom: 1px solid #eee;
          }
          
          .table-label {
            font-weight: 600;
            width: 70%;
          }
          
          .table-amount {
            text-align: right;
            font-weight: 600;
            width: 30%;
          }
          
          .total-row {
            background: #f8f6f2;
            border-top: 1px solid #d4af37;
            border-bottom: 1px solid #d4af37;
            font-weight: 600;
          }
          
          .net-salary {
            background: #e8f5e9;
            font-weight: 600;
          }
          
          .annotation-section {
            margin-top: 6px;
            padding: 4px 0;
            border-top: 2px solid #d4af37;
            border-bottom: 2px solid #d4af37;
            min-height: 30px;
            overflow: hidden;
          }
          
          .annotation-label {
            font-weight: 600;
            font-size: 10px;
            margin-bottom: 2px;
          }
          
          .footer {
            text-align: center;
            color: #999;
            font-size: 8px;
            margin-top: 6px;
            line-height: 1;
          }
        }
        
        .payslip-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background: #f5f5f5;
        }
        
        .payslip-container {
          background: white;
          width: 210mm;
          padding: 20mm;
          font-family: 'Georgia', serif;
          color: #2c3e50;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          box-sizing: border-box;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          border-bottom: 2px solid #d4af37;
          padding-bottom: 16px;
        }
        
        .logo {
          font-size: 48px;
          color: #b8956a;
          flex-shrink: 0;
        }
        
        .company-header {
          text-align: center;
          flex: 1;
        }
        
        .company-name {
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        
        .company-arabic {
          font-size: 18px;
          direction: rtl;
          color: #666;
          margin-bottom: 0;
        }
        
        .section-divider {
          border-bottom: 3px solid #d4af37;
          margin: 16px 0;
          height: 0;
        }
        
        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }
        
        .info-label {
          font-weight: 600;
          color: #2c3e50;
        }
        
        .info-value {
          color: #555;
        }
        
        .salary-table {
          width: 100%;
          margin: 12px 0;
          border-collapse: collapse;
          font-size: 14px;
        }
        
        .salary-table td {
          padding: 8px;
          border-bottom: 1px solid #eee;
        }
        
        .table-label {
          font-weight: 600;
          width: 70%;
        }
        
        .table-amount {
          text-align: right;
          font-weight: 600;
          width: 30%;
        }
        
        .total-row {
          background: #f8f6f2;
          border-top: 2px solid #d4af37;
          border-bottom: 2px solid #d4af37;
          font-weight: 700;
        }
        
        .net-salary {
          background: #e8f5e9;
          font-weight: 700;
          font-size: 14px;
        }
        
        .annotation-section {
          margin-top: 20px;
          min-height: 80px;
          border-top: 2px solid #d4af37;
          border-bottom: 2px solid #d4af37;
          padding: 12px 0;
        }
        
        .annotation-label {
          font-weight: 600;
          margin-bottom: 4px;
          font-size: 14px;
        }
        
        .footer {
          text-align: center;
          color: #999;
          font-size: 12px;
          margin-top: 16px;
        }
        
        .print-controls {
          display: flex;
          gap: 12px;
          justify-content: space-between;
          width: 100%;
          max-width: 210mm;
          margin-bottom: 20px;
        }
      `}),e.jsxs("div",{className:"print-controls",children:[T&&e.jsx("button",{onClick:T,className:"px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300 hover:bg-gray-100",children:"Close"}),e.jsxs("button",{onClick:me,className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors ml-auto",children:[e.jsx(Ca,{size:20}),"Print Payslip"]})]}),e.jsxs("div",{ref:M,className:"payslip-container",children:[e.jsxs("div",{className:"logo-section",children:[F?e.jsx("img",{src:F,alt:"Company Logo",className:"company-logo",style:{width:"100px",height:"90px",objectFit:"contain"}}):e.jsx("div",{className:"logo",children:"◆"}),e.jsxs("div",{className:"company-header flex-1",children:[e.jsx("div",{className:"company-name",children:g}),e.jsx("div",{className:"company-arabic",children:v})]})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee's name:"}),e.jsx("span",{className:"info-value",children:t})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee ID:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Department:"}),e.jsx("span",{className:"info-value",children:i})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Position:"}),e.jsx("span",{className:"info-value",children:p})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Salary for month:"}),e.jsx("span",{className:"info-value",children:P})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Date:"}),e.jsx("span",{className:"info-value",children:h})]}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:"Basic Salary"}),e.jsxs("td",{className:"table-amount",children:[R," ",b.toFixed(2)]})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[d.map((y,x)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:y.label}),e.jsx("td",{className:"table-amount",children:y.amount>0?`${R} ${y.amount.toFixed(2)}`:""})]},x)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Gross Salary"}),e.jsxs("td",{className:"table-amount",children:[R," ",_.toFixed(2)]})]})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[c.map((y,x)=>e.jsxs("tr",{className:n.has(x)?"hidden-deduction":"",children:[e.jsx("td",{className:"table-label",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:y.label}),e.jsx("button",{onClick:()=>B(x),className:"ml-2 p-1 rounded hover:bg-gray-200 transition-colors print:hidden",title:n.has(x)?"Show deduction":"Hide deduction",children:e.jsx(Na,{className:"h-3 w-3 text-gray-500"})})]})}),e.jsx("td",{className:"table-amount",children:y.amount>0?`${R} ${y.amount.toFixed(2)}`:""})]},x)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Total Deduction:"}),e.jsxs("td",{className:"table-amount",children:[R," ",q.toFixed(3)]})]}),e.jsxs("tr",{className:"net-salary",children:[e.jsx("td",{className:"table-label",children:"Net Salary:"}),e.jsxs("td",{className:"table-amount",children:[R," ",de.toFixed(2)]})]})]})}),e.jsx("div",{className:"annotation-section",children:e.jsx("div",{className:"annotation-label",children:"Annotation"})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-info",style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"20px"},children:[e.jsx("p",{style:{margin:"4px 0"},children:"Building 2358, Road 2830, Block 428, Al Seef-Bahrain"}),e.jsx("p",{style:{margin:"4px 0"},children:"مبنى 2358، طريق 2830، مجمع 428، السيف  مملكة البحرين"}),e.jsx("p",{style:{margin:"4px 0"},children:"16161613 Calls and WhatsApp"})]}),e.jsx("div",{className:"footer",children:e.jsxs("p",{style:{margin:0},children:["© ",new Date().getFullYear()," ",g]})})]})]})}const Ka=()=>{var _e,Re,ze;const[t,r]=l.useState("payroll"),[i,p]=l.useState({payroll:!1,salaries:!1,details:!1,action:!1}),[P,h]=l.useState(null),[b,d]=l.useState(null),[c,u]=l.useState(!1),[g,v]=l.useState(null),[T,M]=l.useState(""),[F,k]=l.useState([]),[m,o]=l.useState(null),[n,Y]=l.useState(null),[_,Pe]=l.useState(1),[q]=l.useState(10),[de,R]=l.useState(0),[B,me]=l.useState(""),[y,x]=l.useState("all"),[A,Qe]=l.useState([]),[O,Ze]=l.useState(null),[E,ea]=l.useState([]),[he,ke]=l.useState(1),[Ee]=l.useState(10),[aa,sa]=l.useState(0),[ae,Ae]=l.useState(""),[se,Te]=l.useState("all"),[ta,X]=l.useState(!1),[la,Me]=l.useState(!1),[ra,pe]=l.useState(!1),[oa,K]=l.useState(!1);l.useState(!0);const[Ta,na]=l.useState([]),[Ma,ia]=l.useState([]),[Fa,ca]=l.useState(null),[I,te]=l.useState({StartDate:N(He(new Date),"yyyy-MM-dd"),EndDate:N(Oe(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${N(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}),[le,da]=l.useState("pdf"),Fe=async()=>{p(a=>({...a,payroll:!0})),h(null);try{const s={page:Math.max(0,_-1),pageSize:q,sort:"CreatedDate",order:"desc"};B&&(s.search=B),y!=="all"&&(s.status=y);const j=await V.listPayrolls(s);k(j.data),R(j.total)}catch(a){console.error("Error fetching payrolls:",a),h(a.message||"Failed to fetch payrolls")}finally{p(a=>({...a,payroll:!1}))}},ma=async()=>{if(m){p(a=>({...a,salaries:!0})),h(null);try{const a={page:he-1,pageSize:Ee,payrollId:m.PayrollID,field:"EmployeeName",sort:"ASC"};ae&&(a.search=ae),se!=="all"&&(a.status=se);const s=await V.listEmployeeSalaries(a);Qe(s.data),sa(s.total)}catch(a){console.error("Error fetching employee salaries:",a),h(a.message||"Failed to fetch employee salaries")}finally{p(a=>({...a,salaries:!1}))}}},ha=async a=>{Ze(a),p(s=>({...s,details:!0})),h(null),ia([]);try{const s=await V.getSalaryDetails(a.SalaryID);console.log("Salary details response:",s),console.log("Salary components:",s.components),ea(s.components);const j=s.components.filter(re=>!re.IsAdd),ye=[...new Map(j.map(re=>[re.ComponentID,re])).values()];na(ye),pe(!0)}catch(s){console.error("Error fetching salary details:",s),h(s.message||"Failed to fetch salary details")}finally{p(s=>({...s,details:!1}))}},pa=async()=>{if(!I.StartDate||!I.EndDate||!I.Reason){h("Please fill in all required fields");return}p(a=>({...a,action:!0})),h(null);try{const a={...I,Status:"Pending",CreatedBy:1,CreatedDate:N(new Date,"yyyy-MM-dd HH:mm:ss")};await V.createPayroll(a),await Fe(),X(!1),d("Payroll period created successfully"),te({StartDate:N(He(new Date),"yyyy-MM-dd"),EndDate:N(Oe(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${N(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()})}catch(a){console.error("Error creating payroll:",a),h(a.message||"Failed to create payroll period")}finally{p(a=>({...a,action:!1}))}},xa=async a=>{if(window.confirm(`Are you sure you want to delete payroll for ${z(a.StartDate)} - ${z(a.EndDate)}? This will also delete all associated salary records.`)){p(s=>({...s,action:!0})),h(null);try{await V.deletePayroll(a.PayrollID),k(s=>s.filter(j=>j.PayrollID!==a.PayrollID)),(m==null?void 0:m.PayrollID)===a.PayrollID&&(o(null),r("payroll")),d("Payroll deleted successfully"),setTimeout(()=>d(null),5e3)}catch(s){console.error("Error deleting payroll:",s),h(s.message||"Failed to delete payroll")}finally{p(s=>({...s,action:!1}))}}},ya=async()=>{if(g){p(a=>({...a,action:!0})),h(null);try{await S.update("payroll",g.PayrollID,{Status:"Approved",ApprovedBy:1,ApprovalDate:N(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:T||null}),k(a=>a.map(s=>s.PayrollID===g.PayrollID?{...s,Status:"Approved",ApprovedBy:1,ApprovalDate:N(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:T}:s)),u(!1),v(null),M(""),d("Payroll approved successfully"),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error approving payroll:",a),h(a.message||"Failed to approve payroll")}finally{p(a=>({...a,action:!1}))}}},ua=async()=>{if(m){p(a=>({...a,action:!0})),h(null);try{await V.exportPayroll(m.PayrollID,le),K(!1),d(`Payroll exported successfully as ${le.toUpperCase()}`),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error exporting payroll:",a),h(a.message||"Failed to export payroll")}finally{p(a=>({...a,action:!1}))}}},ga=a=>{o(a),ke(1),Ae(""),Te("all"),r("salaries")},xe=(a,s="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:s||"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(a||0),z=a=>{if(!a)return"N/A";try{const s=typeof a=="string"?new Date(a):a;return isNaN(s.getTime())?"Invalid Date":s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}},Ie=a=>{const j={Draft:{variant:"bg-gray-100 text-gray-800",label:"Draft"},Pending:{variant:"bg-yellow-100 text-yellow-800",label:"Pending"},Approved:{variant:"bg-green-100 text-green-800",label:"Approved"},Rejected:{variant:"bg-red-100 text-red-800",label:"Rejected"},Processing:{variant:"bg-blue-100 text-blue-800",label:"Processing"},Paid:{variant:"bg-purple-100 text-purple-800",label:"Paid"}}[a]||{variant:"bg-gray-100 text-gray-800",label:a};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${j.variant}`,children:j.label})};return l.useEffect(()=>{Fe()},[_,B,y]),l.useEffect(()=>{(async()=>{try{const s=await ve.getCurrency("global_currency");s!=null&&s.currency&&ca(s.currency)}catch(s){console.error("Error fetching global currency:",s)}})()},[]),l.useEffect(()=>{m&&ma()},[m,he,ae,se]),i.payroll&&F.length===0?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(L,{className:"h-8 w-48"}),e.jsx(L,{className:"h-4 w-64"})]}),e.jsx(L,{className:"h-10 w-32"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsx(L,{className:"h-32 w-full"}),e.jsx(L,{className:"h-32 w-full"}),e.jsx(L,{className:"h-32 w-full"})]}),e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx(L,{className:"h-10 w-full md:w-1/3"}),e.jsx("div",{className:"space-y-2",children:Array(5).fill(0).map((a,s)=>e.jsx(L,{className:"h-20 w-full"},s))})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Payroll Management"}),e.jsx("p",{className:"text-gray-600",children:"Manage employee salaries and payroll processing"})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs(f,{onClick:()=>X(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(Xe,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}),b&&e.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:b}),e.jsx("button",{onClick:()=>d(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(je,{className:"w-4 h-4"})})]}),P&&e.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:P}),e.jsx("button",{onClick:()=>h(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(je,{className:"w-4 h-4"})})]}),e.jsxs(Ue,{value:t,onValueChange:r,className:"w-full",children:[e.jsxs(Sa,{className:"md:grid md:grid-cols-3 max-w-fit mb-5",children:[e.jsx(W,{value:"payroll",children:"Payroll Periods"}),e.jsxs(W,{value:"salaries",disabled:!m,children:["Employee Salaries",m&&` (${m.Reason})`]}),e.jsx(W,{value:"reports",children:"Reports"})]}),e.jsx(fe,{value:"payroll",className:"space-y-6",children:e.jsx(ka,{payrolls:F,loading:i,payrollSearch:B,setPayrollSearch:me,payrollStatusFilter:y,setPayrollStatusFilter:x,payrollPage:_,setPayrollPage:Pe,payrollPageSize:q,payrollTotal:de,handleSelectPayroll:ga,handleDeletePayroll:xa,setApprovingPayroll:v,setApprovalComments:M,setShowApproveDialog:u,setShowNewPayrollDialog:X,formatDate:z,getStatusBadge:Ie})}),e.jsx(fe,{value:"salaries",className:"space-y-6",children:e.jsx(Ea,{selectedPayroll:m,salaries:A,loading:i,salarySearch:ae,setSalarySearch:Ae,salaryStatusFilter:se,setSalaryStatusFilter:Te,salaryPage:he,setSalaryPage:ke,salaryPageSize:Ee,salaryTotal:aa,selectedSalary:O,fetchSalaryDetails:ha,setShowExportDialog:K,formatDate:z,formatCurrency:xe,getStatusBadge:Ie})}),e.jsx(fe,{value:"reports",className:"space-y-6",children:e.jsx(Pa,{})})]}),e.jsx(Q,{open:ta,onOpenChange:X,children:e.jsxs(Z,{className:"sm:max-w-[500px]",children:[e.jsx(oe,{children:e.jsx(ne,{children:"Create New Payroll Period"})}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx(G,{htmlFor:"startDate",children:"Start Date"}),e.jsx($e,{date:I.StartDate?new Date(I.StartDate):void 0,onChange:a=>{if(!a)return;const s=N(a,"yyyy-MM-dd"),j=new Date(a);j.setMonth(j.getMonth()+1),j.setDate(0),te(ye=>({...ye,StartDate:s,EndDate:N(j,"yyyy-MM-dd"),TotalDays:Math.ceil((j.getTime()-a.getTime())/(1e3*60*60*24))+1,Reason:`Payroll for ${N(a,"MMMM yyyy")}`}))}})]}),e.jsxs("div",{children:[e.jsx(G,{htmlFor:"endDate",children:"End Date"}),e.jsx($e,{date:I.EndDate?new Date(I.EndDate):void 0,onChange:a=>{if(!a)return;const s=N(a,"yyyy-MM-dd");te(j=>({...j,EndDate:s,TotalDays:Math.ceil((a.getTime()-new Date(j.StartDate||"").getTime())/(1e3*60*60*24))+1}))}})]}),e.jsxs("div",{children:[e.jsx(G,{htmlFor:"reason",children:"Reason / Description"}),e.jsx(ie,{id:"reason",value:I.Reason,onChange:a=>te(s=>({...s,Reason:a.target.value})),placeholder:"e.g., Monthly Payroll - January 2024"})]}),e.jsxs("div",{children:[e.jsx(G,{children:"Total Days"}),e.jsx(ie,{value:I.TotalDays||"",readOnly:!0,disabled:!0})]})]})}),e.jsxs(ue,{children:[e.jsx(f,{variant:"outline",onClick:()=>X(!1),disabled:i.action,children:"Cancel"}),e.jsx(f,{onClick:pa,disabled:i.action,children:i.action?e.jsxs(e.Fragment,{children:[e.jsx(ee,{className:"w-4 h-4 mr-2 animate-spin"}),"Creating..."]}):"Create Payroll"})]})]})}),e.jsx(Q,{open:la,onOpenChange:Me,children:e.jsxs(Z,{className:"sm:max-w-2xl",children:[e.jsxs(oe,{children:[e.jsx(ne,{children:"Payroll Summary"}),m&&e.jsxs(ge,{children:[m.Reason," • ",z(m.StartDate)," - ",z(m.EndDate)]})]}),i.action?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):n?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs($,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"pb-2 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(J,{className:"text-lg text-[#30c0da]",children:"Total Employees"})}),e.jsx(H,{children:e.jsx("div",{className:"text-3xl font-bold text-[#30c0da]",children:n.totalEmployees})})]}),e.jsxs($,{className:"bg-gradient-to-br from-green-50 to-transparent border-green-200 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 hover:border-green-300",children:[e.jsx(U,{className:"pb-2 bg-gradient-to-r from-green-100 via-green-50 to-transparent border-b border-green-200",children:e.jsx(J,{className:"text-lg text-green-600",children:"Total Gross"})}),e.jsx(H,{children:e.jsx("div",{className:"text-3xl font-bold text-green-600",children:xe(n.totalGross,n.currency)})})]}),e.jsxs($,{className:"bg-gradient-to-br from-blue-50 to-transparent border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:border-blue-300",children:[e.jsx(U,{className:"pb-2 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent border-b border-blue-200",children:e.jsx(J,{className:"text-lg text-blue-600",children:"Total Net"})}),e.jsx(H,{children:e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:xe(n.totalNet,n.currency)})})]})]}),e.jsxs($,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(J,{className:"text-[#30c0da]",children:"Status Breakdown"})}),e.jsx(H,{children:e.jsx("div",{className:"space-y-2",children:Object.entries(n.statusCounts||{}).map(([a,s])=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:a}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-16 text-right",children:s}),e.jsx("div",{className:"ml-2 w-32 bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${s/n.totalEmployees*100}%`}})})]})]},a))})})]}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(f,{variant:"outline",onClick:()=>K(!0),children:[e.jsx(Ne,{className:"w-4 h-4 mr-2"}),"Export Report"]}),e.jsx(f,{onClick:()=>{Me(!1),r("salaries")},children:"View Salaries"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No summary data available"})]})}),e.jsx(Q,{open:oa,onOpenChange:K,children:e.jsxs(Z,{className:"sm:max-w-md",children:[e.jsxs(oe,{children:[e.jsx(ne,{children:"Export Payroll Data"}),m&&e.jsxs(ge,{children:["Export data for ",m.Reason]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(G,{children:"Format"}),e.jsxs(we,{value:le,onValueChange:a=>da(a),children:[e.jsx(De,{className:"w-full",children:e.jsx(Se,{placeholder:"Select format"})}),e.jsxs(Ce,{children:[e.jsx(C,{value:"pdf",children:"PDF Document"}),e.jsx(C,{value:"excel",children:"Excel Spreadsheet"}),e.jsx(C,{value:"csv",children:"CSV File"})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"The export will include all employee salary details for the selected payroll period."})]}),e.jsxs(ue,{className:"sm:justify-between",children:[e.jsx(f,{variant:"outline",onClick:()=>K(!1),disabled:i.action,children:"Cancel"}),e.jsx(f,{onClick:ua,disabled:i.action,children:i.action?e.jsxs(e.Fragment,{children:[e.jsx(ee,{className:"w-4 h-4 mr-2 animate-spin"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ne,{className:"w-4 h-4 mr-2"}),"Export ",le.toUpperCase()]})})]})]})}),e.jsx(Q,{open:ra,onOpenChange:pe,children:e.jsx(Z,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:i.details?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):O&&m&&E.length>0?e.jsx(Aa,{employeeName:`${E[0].employees_FirstName||""} ${E[0].employees_LastName||""}`.trim()||O.EmployeeName,employeeId:String(E[0].employees_EmployeeID||O.EmployeeID),department:E[0].employees_Department||O.Department,position:E[0].job_JobName||O.Position,salaryMonth:N(m.StartDate,"MMMM yyyy"),salaryDate:N(m.EndDate,"dd-MM-yyyy"),basicSalary:((_e=E.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("basic")}))==null?void 0:_e.Amount)||((Re=E.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("main salary")}))==null?void 0:Re.Amount)||((ze=E.filter(a=>a.IsAdd)[0])==null?void 0:ze.Amount)||0,earnings:E.filter(a=>{var s;return a.IsAdd&&!((s=a.contractpaytype_ContractPayTypeName)!=null&&s.toLowerCase().includes("basic"))}).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),deductions:E.filter(a=>!a.IsAdd).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),currency:E[0].Currency||O.Currency||"BHD",onClose:()=>pe(!1)}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No salary details available"})})}),e.jsx(Q,{open:c,onOpenChange:u,children:e.jsxs(Z,{className:"sm:max-w-md",children:[e.jsxs(oe,{children:[e.jsx(ne,{children:"Approve Payroll"}),g&&e.jsxs(ge,{children:["Approve payroll for ",z(g.StartDate)," - ",z(g.EndDate),e.jsx("br",{}),e.jsx("strong",{children:"Reason:"})," ",g.Reason]})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{children:[e.jsx(G,{htmlFor:"approvalComments",children:"Approval Comments (Optional)"}),e.jsx("textarea",{id:"approvalComments",value:T,onChange:a=>M(a.target.value),placeholder:"Add any comments or notes about this approval...",className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none",rows:4})]}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(be,{className:"h-5 w-5 text-blue-400"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Payroll Approval"}),e.jsx("div",{className:"mt-2 text-sm text-blue-700",children:e.jsx("p",{children:'This will approve the payroll and update the status to "Approved". The approval details will be recorded in the system.'})})]})]})})]}),e.jsxs(ue,{className:"sm:justify-between",children:[e.jsx(f,{variant:"outline",onClick:()=>{u(!1),v(null),M("")},disabled:i.action,children:"Cancel"}),e.jsx(f,{onClick:ya,disabled:i.action,className:"bg-green-600 hover:bg-green-700 text-white",children:i.action?e.jsxs(e.Fragment,{children:[e.jsx(ee,{className:"w-4 h-4 mr-2 animate-spin"}),"Approving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Approve Payroll"]})})]})]})})]})};export{Ka as default};

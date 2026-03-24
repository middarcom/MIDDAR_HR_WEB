import{c as Aa,r as l,j as e,C as W,m as U,s as A,k as q,l as X,S as Ze,I,F as ka,B as g,p as Ea,ae as ea,L as se,ah as Ae,ag as ke,a3 as aa,U as qe,n as sa,b5 as Ma,aD as fe,D as Z,a as ee,b as ce,d as me,$ as T,a0 as ge,e as be}from"./index-L4ulgXyQ.js";import{R as Ta}from"./ReportViewer-6fiUOpia.js";import{T as ta,c as Ia,a as te,b as Pe}from"./tabs-LVLqFmg8.js";import{a as S}from"./api-D4wZw0UH.js";import{S as Y}from"./skeleton-pjAvuINO.js";import{T as Me,a as Te,b as le,c as b,d as Ie,e as f}from"./table-COOU52Wi.js";import{S as Ha}from"./ScrollableTabs-YiqLlStu.js";import{S as He,a as Fe,b as _e,c as Oe,d as E}from"./select-CBT_nKlY.js";import{C as Xe}from"./date-picker-mToGb7oG.js";import{F as la}from"./filter-gOeMInR0.js";import{P as ra}from"./plus-Dh7Dt_tT.js";import{C as na}from"./chevron-left-CbPy8EFq.js";import{D as Ee}from"./download-DIPdrrqa.js";import{s as Ke,a as Qe}from"./popover-C7gdwKT_.js";import"./alert-B9DjTOjI.js";import"./index-DOwr6rWC.js";import"./getDaysInMonth-PbrptmuI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=Aa("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),Fa=()=>{const[t,n]=l.useState("payroll_summary"),[o,h]=l.useState([]);l.useEffect(()=>{(async()=>{try{const v=((await S.list("payroll",{sort:"StartDate DESC",pageSize:100})).data||[]).map(C=>({label:`${C.Reason} (${C.StartDate} - ${C.EndDate})`,value:String(C.PayrollID)}));h(v)}catch(N){console.error("Failed to fetch payrolls for reports",N)}})()},[]);const H=[{key:"start_date",label:"Start Date",type:"date",defaultValue:new Date(new Date().getFullYear(),0,1).toISOString().split("T")[0]},{key:"end_date",label:"End Date",type:"date",defaultValue:new Date().toISOString().split("T")[0]}],x=[{key:"payroll_id",label:"Select Payroll",type:"select",options:o}],d={payroll_summary:{type:"payroll_summary",title:"Payroll Summary Report",description:"Overview of payroll periods within a date range.",columns:[{key:"PayrollID",label:"ID"},{key:"Description",label:"Description"},{key:"StartDate",label:"Start Date",format:c=>c?new Date(c).toLocaleDateString():"-"},{key:"EndDate",label:"End Date",format:c=>c?new Date(c).toLocaleDateString():"-"},{key:"TotalDays",label:"Days"},{key:"Status",label:"Status"},{key:"CreatedDate",label:"Created On",format:c=>c?new Date(c).toLocaleDateString():"-"}],filters:H},payroll_salary_sheet:{type:"payroll_salary_sheet",title:"Payroll Salary Sheet",description:"Detailed salary sheet for a specific payroll period.",columns:[{key:"EmployeeID",label:"ID"},{key:"EmployeeName",label:"Name"},{key:"NationalID",label:"National ID"},{key:"TotalHoursWorked",label:"Hours"},{key:"OvertimeHours",label:"Overtime"},{key:"AbsentHours",label:"Absent"},{key:"Currency",label:"Currency"},{key:"GrossSalary",label:"Gross",format:c=>Number(c).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"NetSalary",label:"Net Pay",format:c=>Number(c).toLocaleString(void 0,{minimumFractionDigits:2})}],filters:x},payroll_components_breakdown:{type:"payroll_components_breakdown",title:"Payroll Components Breakdown",description:"Detailed list of additions and deductions per employee for a specific payroll.",columns:[{key:"EmployeeName",label:"Name"},{key:"ComponentName",label:"Component"},{key:"ComponentType",label:"Type",format:c=>e.jsx("span",{className:c==="Addition"?"text-green-600":"text-red-600",children:c})},{key:"Amount",label:"Amount",format:c=>Number(c).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"Currency",label:"Curr"},{key:"Notes",label:"Notes"}],filters:x}}[t];return e.jsxs("div",{className:"space-y-6",children:[e.jsx(W,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(U,{className:"p-4",children:e.jsx(ta,{value:t,onValueChange:n,className:"w-full",children:e.jsxs(Ia,{className:"grid w-full grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border border-[#124562]/20 p-1 rounded-lg",children:[e.jsx(te,{value:"payroll_summary",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Payroll Summary"}),e.jsx(te,{value:"payroll_salary_sheet",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Salary Sheet"}),e.jsx(te,{value:"payroll_components_breakdown",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Components Breakdown"})]})})})}),e.jsx("div",{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 rounded-xl hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30 p-6",children:e.jsx(Ta,{reportType:d.type,title:d.title,description:d.description,columns:d.columns,filterFields:d.filters,disableAutoFetch:!0})})]})},ae={listPayrolls:async(t={})=>{const n=typeof t.page=="number"?t.page:0;return await S.list("payroll",{page:n,pageSize:t.pageSize||10,sort:"DESC",...t.filters||{}})},listEmployeeSalaries:async(t={})=>{const n=await S.list("employeesalary",{page:t.page||0,pageSize:t.pageSize||10,sort:"ASC",field:"EmployeeID",...t.payrollId&&{exact_filters:JSON.stringify({Payroll:t.payrollId})},...t.employeeName&&{EmployeeName:{$like:`%${t.employeeName}%`}},...t.department&&{Department:t.department},...t.status&&{Status:t.status}});if(n.data&&n.data.length>0){const o=await Promise.all(n.data.map(async h=>{try{const x=(await S.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:h.SalaryID}),sort:"ASC"})).data.reduce((D,d)=>(d.IsAdd?D.additions+=d.Amount||0:D.deductions+=d.Amount||0,D),{additions:0,deductions:0});return{...h,TotalEarnings:x.additions,TotalDeductions:x.deductions}}catch(H){return console.error("Error fetching salary components:",H),h}}));return{...n,data:o}}return n},getSalaryDetails:async t=>{const n=await S.get("employeesalary",t),o=await S.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:t}),sort:"ASC",pageSize:1e3});return{...n,components:o.data||[]}},createPayroll:async t=>await S.create("payroll",{...t,Status:"Pending",CreatedBy:1}),deletePayroll:async t=>(await S.list("employeesalary",{exact_filters:JSON.stringify({PayrollID:t}),sort:"ASC",pageSize:1e3}),await S.delete("payroll",t)),approvePayroll:async(t,n)=>await S.update("payroll",t,{Status:"Approved",ApprovedBy:n,ApprovalDate:A(new Date,"yyyy-MM-dd HH:mm:ss")}),exportPayroll:async(t,n="pdf")=>await S.get(`payroll/export/${t}`,{format:n}),getPayrollSummary:async t=>{try{return await S.get("payroll/summary",{payrollId:t})}catch(n){throw console.error("Error fetching payroll summary:",n),n}},updatePayrollStatus:async(t,n)=>await S.update("payroll",t,n),getEmployeeDeductionTypes:async t=>{try{return(await S.list("contractpaytype",{filters:JSON.stringify({EmployeeID:t}),sort:"ASC"})).data||[]}catch(n){return console.error("Error fetching deduction types:",n),[]}}};function _a({payrolls:t,loading:n,payrollSearch:o,setPayrollSearch:h,payrollStatusFilter:H,setPayrollStatusFilter:x,payrollPage:D,setPayrollPage:d,payrollPageSize:c,payrollTotal:N,handleSelectPayroll:v,handleDeletePayroll:C,setApprovingPayroll:R,setApprovalComments:z,setShowApproveDialog:G,setShowNewPayrollDialog:M,formatDate:m,getStatusBadge:r}){return e.jsxs(W,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(q,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsx(X,{className:"text-[#30c0da]",children:"Payroll Periods"}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(I,{placeholder:"Search payrolls...",className:"pl-10 w-full",value:o,onChange:i=>{h(i.target.value),d(1)}})]}),e.jsxs(He,{value:H,onValueChange:i=>{x(i),d(1)},children:[e.jsxs(Fe,{className:"w-[180px]",children:[e.jsx(la,{className:"w-4 h-4 mr-2"}),e.jsx(_e,{placeholder:"Filter by status"})]}),e.jsxs(Oe,{children:[e.jsx(E,{value:"all",children:"All Statuses"}),e.jsx(E,{value:"Draft",children:"Draft"}),e.jsx(E,{value:"Pending",children:"Pending"}),e.jsx(E,{value:"Approved",children:"Approved"}),e.jsx(E,{value:"Rejected",children:"Rejected"}),e.jsx(E,{value:"Processing",children:"Processing"})]})]})]})]})}),e.jsx(U,{children:n.payroll?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):t.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(ka,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll periods"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by creating a new payroll period."}),e.jsx("div",{className:"mt-6",children:e.jsxs(g,{onClick:()=>M(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(ra,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Me,{children:[e.jsx(Te,{children:e.jsxs(le,{children:[e.jsx(b,{children:"ID"}),e.jsx(b,{children:"Period"}),e.jsx(b,{children:"Days"}),e.jsx(b,{children:"Reason"}),e.jsx(b,{children:"Status"}),e.jsx(b,{children:"Created"}),e.jsx(b,{className:"text-right",children:"Actions"})]})}),e.jsx(Ie,{children:t.map(i=>e.jsxs(le,{children:[e.jsxs(f,{className:"font-medium",children:["#",i.PayrollID]}),e.jsx(f,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(Ea,{className:"w-4 h-4 mr-2 text-gray-500"}),m(new Date(i.StartDate))," - ",m(new Date(i.EndDate))]})}),e.jsx(f,{children:i.TotalDays}),e.jsx(f,{className:"max-w-xs truncate",children:i.Reason}),e.jsx(f,{children:r(i.Status)}),e.jsx(f,{children:m(new Date(i.CreatedDate))}),e.jsx(f,{children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>v(i),children:[e.jsx(ea,{className:"w-4 h-4 mr-1"})," View"]}),(i.Status==="Draft"||i.Status==="Pending")&&e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>C(i),disabled:n.action,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[n.action?e.jsx(se,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(Ae,{className:"w-4 h-4 mr-1"}),"Delete"]}),(i.Status==="Pending"||i.Status==="Processing")&&e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>{R(i),z(""),G(!0)},disabled:n.action,className:"text-green-600 hover:text-green-700 hover:bg-green-50",children:[n.action?e.jsx(se,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(ke,{className:"w-4 h-4 mr-1"}),"Approve"]})]})})]},i.PayrollID))})]}),N>c&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(D-1)*c+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(D*c,N)})," ","of ",e.jsx("span",{className:"font-medium",children:N})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>d(i=>Math.max(1,i-1)),disabled:D===1||n.payroll,children:[e.jsx(na,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>d(i=>i+1),disabled:D*c>=N||n.payroll,children:["Next ",e.jsx(aa,{className:"w-4 h-4 ml-1"})]})]})]})]})})]})}function Oa({selectedPayroll:t,salaries:n,loading:o,salarySearch:h,setSalarySearch:H,salaryStatusFilter:x,setSalaryStatusFilter:D,salaryPage:d,setSalaryPage:c,salaryPageSize:N,salaryTotal:v,selectedSalary:C,fetchSalaryDetails:R,setShowExportDialog:z,formatDate:G,formatCurrency:M,getStatusBadge:m}){return t?e.jsxs(W,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(q,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx(X,{className:"text-[#30c0da]",children:"Employee Salaries"}),e.jsxs(sa,{children:[t.Reason," • ",G(t.StartDate)," - ",G(t.EndDate)]})]}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(I,{placeholder:"Search employees...",className:"pl-10 w-full",value:h,onChange:r=>{H(r.target.value),c(1)}})]}),e.jsxs(He,{value:x,onValueChange:r=>{D(r),c(1)},children:[e.jsxs(Fe,{className:"w-[180px]",children:[e.jsx(la,{className:"w-4 h-4 mr-2"}),e.jsx(_e,{placeholder:"Filter by status"})]}),e.jsxs(Oe,{children:[e.jsx(E,{value:"all",children:"All Statuses"}),e.jsx(E,{value:"Draft",children:"Draft"}),e.jsx(E,{value:"Pending",children:"Pending"}),e.jsx(E,{value:"Approved",children:"Approved"}),e.jsx(E,{value:"Paid",children:"Paid"}),e.jsx(E,{value:"Rejected",children:"Rejected"})]})]}),e.jsxs(g,{variant:"outline",onClick:()=>z(!0),disabled:o.action,children:[e.jsx(Ee,{className:"w-4 h-4 mr-2"}),"Export"]})]})]})}),e.jsx(U,{children:o.salaries?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):n.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(qe,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No employee salaries"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"No salaries found for the selected payroll period."})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Me,{children:[e.jsx(Te,{children:e.jsxs(le,{children:[e.jsx(b,{children:"Employee"}),e.jsx(b,{children:"Department"}),e.jsx(b,{children:"Position"}),e.jsx(b,{className:"text-right",children:"Gross Salary"}),e.jsx(b,{className:"text-right",children:"Additions"}),e.jsx(b,{className:"text-right",children:"Deductions"}),e.jsx(b,{className:"text-right",children:"System Net"}),e.jsx(b,{className:"text-right",children:"Manual Override"}),e.jsx(b,{className:"text-right",children:"Effective Net"}),e.jsx(b,{children:"Status"}),e.jsx(b,{className:"text-right",children:"Actions"})]})}),e.jsx(Ie,{children:n.map(r=>{const i=r.GrossSalary||0,re=r.TotalDeductions||0,V=r.TotalAdditions||r.TotalEarnings||0,ne=r.SystemNetSalary||i+V-re,L=r.ManualNetSalary,oe=L!==null?L:ne,F=L!==null;return e.jsxs(le,{children:[e.jsx(f,{className:"font-medium",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-2",children:(r.employees_FirstName||r.EmployeeName||"").charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{children:r.employees_FirstName&&r.employees_LastName?`${r.employees_FirstName} ${r.employees_LastName}`:r.EmployeeName}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",r.EmployeeID]})]})]})}),e.jsx(f,{children:r.employees_Department||r.Department}),e.jsx(f,{children:r.job_JobName||r.Position}),e.jsx(f,{className:"text-right",children:M(i,r.Currency)}),e.jsx(f,{className:"text-right text-green-600",children:M(V,r.Currency)}),e.jsxs(f,{className:"text-right text-red-600",children:["-",M(re,r.Currency)]}),e.jsx(f,{className:"text-right text-gray-600",children:M(ne,r.Currency)}),e.jsx(f,{className:"text-right",children:F?e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-orange-600",children:M(L,r.Currency)}),r.ManualAdjustDate&&e.jsx("div",{className:"text-xs text-gray-500",children:new Date(r.ManualAdjustDate).toLocaleDateString()})]}):e.jsx("span",{className:"text-gray-400",children:"-"})}),e.jsxs(f,{className:"text-right font-medium",children:[e.jsx("div",{className:F?"text-orange-600":"",children:M(oe,r.Currency)}),F&&e.jsx("div",{className:"text-xs text-orange-500",children:"Manual Override"})]}),e.jsx(f,{children:m(r.Status)}),e.jsx(f,{children:e.jsx("div",{className:"flex justify-end",children:e.jsxs(g,{variant:"ghost",size:"sm",onClick:()=>R(r),disabled:o.details,children:[e.jsx(ea,{className:"w-4 h-4 mr-1"}),o.details&&(C==null?void 0:C.SalaryID)===r.SalaryID?"Loading...":"View"]})})})]},r.SalaryID)})})]}),v>N&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(d-1)*N+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(d*N,v)})," ","of ",e.jsx("span",{className:"font-medium",children:v})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>c(r=>Math.max(1,r-1)),disabled:d===1||o.salaries,children:[e.jsx(na,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(g,{variant:"outline",size:"sm",onClick:()=>c(r=>r+1),disabled:d*N>=v||o.salaries,children:["Next ",e.jsx(aa,{className:"w-4 h-4 ml-1"})]})]})]})]})})]}):e.jsx(W,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(U,{className:"pt-6",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx(qe,{className:"mx-auto h-12 w-12 text-[#30c0da]"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll selected"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Select a payroll period to view employee salaries."})]})})})}function Ra({employeeName:t,employeeId:n,department:o,position:h,salaryMonth:H,salaryDate:x,basicSalary:D,earnings:d,deductions:c,currency:N,onClose:v}){const C=l.useRef(null),[R,z]=l.useState(null),[G,M]=l.useState(null),[m,r]=l.useState(null),[i,re]=l.useState(new Set);l.useEffect(()=>{(async()=>{try{const y=await fe.getImage("company_logo");y!=null&&y.image_data&&z(y.image_data);const O=await fe.getCurrency("global_currency");O!=null&&O.currency&&M(O.currency);const Q=await fe.getCompanyName("company_name");Q!=null&&Q.company_name&&r(Q.company_name)}catch(y){console.error("Error fetching company config:",y)}})()},[]);const V=d.reduce((p,y)=>p+(y.amount||0),0),L=c.filter((p,y)=>!i.has(y)).reduce((p,y)=>p+(y.amount||0),0),oe=V-L,F=G||N,K=p=>{re(y=>{const O=new Set(y);return O.has(p)?O.delete(p):O.add(p),O})},Ne=()=>{window.print()};return e.jsxs("div",{className:"payslip-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"print-controls",children:[v&&e.jsx("button",{onClick:v,className:"px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300 hover:bg-gray-100",children:"Close"}),e.jsxs("button",{onClick:Ne,className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors ml-auto",children:[e.jsx(oa,{size:20}),"Print Payslip"]})]}),e.jsxs("div",{ref:C,className:"payslip-container",children:[e.jsxs("div",{className:"logo-section",children:[R?e.jsx("img",{src:R,alt:"Company Logo",className:"company-logo",style:{width:"100px",height:"90px",objectFit:"contain"}}):e.jsx("div",{className:"logo",children:"◆"}),e.jsx("div",{className:"company-header flex-1",children:e.jsx("div",{className:"company-name",children:m||"Company"})})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee's name:"}),e.jsx("span",{className:"info-value",children:t})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee ID:"}),e.jsx("span",{className:"info-value",children:n})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Department:"}),e.jsx("span",{className:"info-value",children:o})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Position:"}),e.jsx("span",{className:"info-value",children:h})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Salary for month:"}),e.jsx("span",{className:"info-value",children:H})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Date:"}),e.jsx("span",{className:"info-value",children:x})]}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:"Basic Salary"}),e.jsxs("td",{className:"table-amount",children:[F," ",D.toFixed(2)]})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[d.map((p,y)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:p.label}),e.jsx("td",{className:"table-amount",children:p.amount>0?`${F} ${p.amount.toFixed(2)}`:""})]},y)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Gross Salary"}),e.jsxs("td",{className:"table-amount",children:[F," ",V.toFixed(2)]})]})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[c.map((p,y)=>e.jsxs("tr",{className:i.has(y)?"hidden-deduction":"",children:[e.jsx("td",{className:"table-label",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{children:p.label}),p.notes&&e.jsx("div",{className:"text-xs text-gray-600 font-normal mt-1 print:text-gray-700",children:p.notes})]}),e.jsx("button",{onClick:()=>K(y),className:"ml-2 p-1 rounded hover:bg-gray-200 transition-colors print:hidden",title:i.has(y)?"Show deduction":"Hide deduction",children:e.jsx(Ma,{className:"h-3 w-3 text-gray-500"})})]})}),e.jsx("td",{className:"table-amount",children:p.amount>0?`${F} ${p.amount.toFixed(2)}`:""})]},y)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Total Deduction:"}),e.jsxs("td",{className:"table-amount",children:[F," ",L.toFixed(3)]})]}),e.jsxs("tr",{className:"net-salary",children:[e.jsx("td",{className:"table-label",children:"Net Salary:"}),e.jsxs("td",{className:"table-amount",children:[F," ",oe.toFixed(2)]})]})]})}),e.jsx("div",{className:"annotation-section",children:e.jsx("div",{className:"annotation-label",children:"Annotation"})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-info",style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"20px"},children:[e.jsx("p",{style:{margin:"4px 0"},children:"Building 2358, Road 2830, Block 428, Al Seef-Bahrain"}),e.jsx("p",{style:{margin:"4px 0"},children:"مبنى 2358، طريق 2830، مجمع 428، السيف  مملكة البحرين"}),e.jsx("p",{style:{margin:"4px 0"},children:"16161613 Calls and WhatsApp"})]}),e.jsx("div",{className:"footer",children:e.jsxs("p",{style:{margin:0},children:["© ",new Date().getFullYear()," ",m]})})]})]})}const rs=()=>{var Ue,Je,Ye;const[t,n]=l.useState("payroll"),[o,h]=l.useState({payroll:!1,salaries:!1,details:!1,action:!1}),[H,x]=l.useState(null),[D,d]=l.useState(null),[c,N]=l.useState(!1),[v,C]=l.useState(null),[R,z]=l.useState(""),[G,M]=l.useState([]),[m,r]=l.useState(null),[i,re]=l.useState(null),[V,ne]=l.useState(1),[L]=l.useState(10),[oe,F]=l.useState(0),[K,Ne]=l.useState(""),[p,y]=l.useState("all"),[O,Q]=l.useState([]),[P,ia]=l.useState(null),[k,da]=l.useState([]),[ve,Re]=l.useState(1),[ze]=l.useState(10),[ca,ma]=l.useState(0),[xe,Le]=l.useState(""),[he,$e]=l.useState("all"),[xa,ie]=l.useState(!1),[ha,Be]=l.useState(!1),[pa,we]=l.useState(!1),[ua,pe]=l.useState(!1),[ya,de]=l.useState(!1);l.useState(!0);const[za,ja]=l.useState([]),[La,ga]=l.useState([]),[j,Se]=l.useState(null),[De,Ce]=l.useState({}),[$a,ba]=l.useState(null),[$,ue]=l.useState({StartDate:A(Ke(new Date),"yyyy-MM-dd"),EndDate:A(Qe(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${A(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}),[ye,fa]=l.useState("pdf"),Ge=async()=>{h(a=>({...a,payroll:!0})),x(null);try{const s={page:Math.max(0,V-1),pageSize:L,sort:"CreatedDate",order:"desc"};K&&(s.search=K),p!=="all"&&(s.status=p);const u=await ae.listPayrolls(s);M(u.data),F(u.total)}catch(a){console.error("Error fetching payrolls:",a),x(a.message||"Failed to fetch payrolls")}finally{h(a=>({...a,payroll:!1}))}},Na=async()=>{if(m){h(a=>({...a,salaries:!0})),x(null);try{const a={page:ve-1,pageSize:ze,payrollId:m.PayrollID,field:"EmployeeName",sort:"ASC"};xe&&(a.search=xe),he!=="all"&&(a.status=he);const s=await ae.listEmployeeSalaries(a);Q(s.data),ma(s.total)}catch(a){console.error("Error fetching employee salaries:",a),x(a.message||"Failed to fetch employee salaries")}finally{h(a=>({...a,salaries:!1}))}}},Ve=async a=>{ia(a),h(s=>({...s,details:!0})),x(null),ga([]),pe(!1);try{const s=await ae.getSalaryDetails(a.SalaryID);console.log("Salary details response:",s),console.log("Salary components:",s.components),da(s.components),Se({ManualNetSalary:a.ManualNetSalary===null||a.ManualNetSalary===void 0?"":String(a.ManualNetSalary),ManualAdjustNote:a.ManualAdjustNote||"",TotalHoursWorked:a.TotalHoursWorked===null||a.TotalHoursWorked===void 0?"":String(a.TotalHoursWorked),OvertimeHours:a.OvertimeHours===null||a.OvertimeHours===void 0?"":String(a.OvertimeHours),AbsentHours:a.AbsentHours===null||a.AbsentHours===void 0?"":String(a.AbsentHours),DelayHours:a.DelayHours===null||a.DelayHours===void 0?"":String(a.DelayHours),LeaveHours:a.LeaveHours===null||a.LeaveHours===void 0?"":String(a.LeaveHours)});const u={};(s.components||[]).forEach(w=>{w!=null&&w.SalarySubID&&(u[w.SalarySubID]={Amount:w.Amount===null||w.Amount===void 0?"":String(w.Amount),Notes:w.Notes||""})}),Ce(u);const _=s.components.filter(w=>!w.IsAdd),B=[...new Map(_.map(w=>[w.ComponentID,w])).values()];ja(B),we(!0)}catch(s){console.error("Error fetching salary details:",s),x(s.message||"Failed to fetch salary details")}finally{h(s=>({...s,details:!1}))}},va=async()=>{if(!(!P||!j)){h(a=>({...a,action:!0})),x(null),d(null);try{const a=j.ManualNetSalary.trim()===""?null:Number(j.ManualNetSalary);if(a!==null&&!Number.isFinite(a))throw new Error("Manual Net Salary must be a valid number");await S.update("employeesalary",P.SalaryID,{ManualNetSalary:a,ManualAdjustNote:j.ManualAdjustNote.trim()===""?null:j.ManualAdjustNote,TotalHoursWorked:j.TotalHoursWorked.trim()===""?null:Number(j.TotalHoursWorked),OvertimeHours:j.OvertimeHours.trim()===""?null:Number(j.OvertimeHours),AbsentHours:j.AbsentHours.trim()===""?null:Number(j.AbsentHours),DelayHours:j.DelayHours.trim()===""?null:Number(j.DelayHours),LeaveHours:j.LeaveHours.trim()===""?null:Number(j.LeaveHours),NetSalary:a});const s=Object.entries(De).map(([u,_])=>{const B=_.Amount.trim()===""?0:Number(_.Amount);return S.update("employeesalarysub",u,{Amount:Number.isFinite(B)?B:0,Notes:_.Notes.trim()===""?null:_.Notes})});await Promise.all(s),P&&await Ve(P),d("Salary details updated successfully"),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error saving salary details:",a),x(a.message||"Failed to save salary details")}finally{h(a=>({...a,action:!1}))}}},wa=async()=>{if(!$.StartDate||!$.EndDate||!$.Reason){x("Please fill in all required fields");return}h(a=>({...a,action:!0})),x(null);try{const a={...$,Status:"Pending",CreatedBy:1,CreatedDate:A(new Date,"yyyy-MM-dd HH:mm:ss")};await ae.createPayroll(a),await Ge(),ie(!1),d("Payroll period created successfully"),ue({StartDate:A(Ke(new Date),"yyyy-MM-dd"),EndDate:A(Qe(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${A(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()})}catch(a){console.error("Error creating payroll:",a),x(a.message||"Failed to create payroll period")}finally{h(a=>({...a,action:!1}))}},Sa=async a=>{if(window.confirm(`Are you sure you want to delete payroll for ${J(a.StartDate)} - ${J(a.EndDate)}? This will also delete all associated salary records.`)){h(s=>({...s,action:!0})),x(null);try{await ae.deletePayroll(a.PayrollID),M(s=>s.filter(u=>u.PayrollID!==a.PayrollID)),(m==null?void 0:m.PayrollID)===a.PayrollID&&(r(null),n("payroll")),d("Payroll deleted successfully"),setTimeout(()=>d(null),5e3)}catch(s){console.error("Error deleting payroll:",s),x(s.message||"Failed to delete payroll")}finally{h(s=>({...s,action:!1}))}}},Da=async()=>{if(v){h(a=>({...a,action:!0})),x(null);try{await S.update("payroll",v.PayrollID,{Status:"Approved",ApprovedBy:1,ApprovalDate:A(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:R||null}),M(a=>a.map(s=>s.PayrollID===v.PayrollID?{...s,Status:"Approved",ApprovedBy:1,ApprovalDate:A(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:R}:s)),N(!1),C(null),z(""),d("Payroll approved successfully"),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error approving payroll:",a),x(a.message||"Failed to approve payroll")}finally{h(a=>({...a,action:!1}))}}},Ca=async()=>{if(m){h(a=>({...a,action:!0})),x(null);try{await ae.exportPayroll(m.PayrollID,ye),de(!1),d(`Payroll exported successfully as ${ye.toUpperCase()}`),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error exporting payroll:",a),x(a.message||"Failed to export payroll")}finally{h(a=>({...a,action:!1}))}}},Pa=a=>{r(a),Re(1),Le(""),$e("all"),n("salaries")},je=(a,s="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:s||"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(a||0),J=a=>{if(!a)return"N/A";try{const s=typeof a=="string"?new Date(a):a;return isNaN(s.getTime())?"Invalid Date":s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}},We=a=>{const u={Draft:{variant:"bg-gray-100 text-gray-800",label:"Draft"},Pending:{variant:"bg-yellow-100 text-yellow-800",label:"Pending"},Approved:{variant:"bg-green-100 text-green-800",label:"Approved"},Rejected:{variant:"bg-red-100 text-red-800",label:"Rejected"},Processing:{variant:"bg-blue-100 text-blue-800",label:"Processing"},Paid:{variant:"bg-purple-100 text-purple-800",label:"Paid"}}[a]||{variant:"bg-gray-100 text-gray-800",label:a};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${u.variant}`,children:u.label})};return l.useEffect(()=>{Ge()},[V,K,p]),l.useEffect(()=>{(async()=>{try{const s=await fe.getCurrency("global_currency");s!=null&&s.currency&&ba(s.currency)}catch(s){console.error("Error fetching global currency:",s)}})()},[]),l.useEffect(()=>{m&&Na()},[m,ve,xe,he]),o.payroll&&G.length===0?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(Y,{className:"h-8 w-48"}),e.jsx(Y,{className:"h-4 w-64"})]}),e.jsx(Y,{className:"h-10 w-32"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsx(Y,{className:"h-32 w-full"}),e.jsx(Y,{className:"h-32 w-full"}),e.jsx(Y,{className:"h-32 w-full"})]}),e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx(Y,{className:"h-10 w-full md:w-1/3"}),e.jsx("div",{className:"space-y-2",children:Array(5).fill(0).map((a,s)=>e.jsx(Y,{className:"h-20 w-full"},s))})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Payroll Management"}),e.jsx("p",{className:"text-gray-600",children:"Manage employee salaries and payroll processing"})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs(g,{onClick:()=>ie(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(ra,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}),D&&e.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:D}),e.jsx("button",{onClick:()=>d(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(Ae,{className:"w-4 h-4"})})]}),H&&e.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:H}),e.jsx("button",{onClick:()=>x(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(Ae,{className:"w-4 h-4"})})]}),e.jsxs(ta,{value:t,onValueChange:n,className:"w-full",children:[e.jsxs(Ha,{className:"md:grid md:grid-cols-3 max-w-fit mb-5",children:[e.jsx(te,{value:"payroll",children:"Payroll Periods"}),e.jsxs(te,{value:"salaries",disabled:!m,children:["Employee Salaries",m&&` (${m.Reason})`]}),e.jsx(te,{value:"reports",children:"Reports"})]}),e.jsx(Pe,{value:"payroll",className:"space-y-6",children:e.jsx(_a,{payrolls:G,loading:o,payrollSearch:K,setPayrollSearch:Ne,payrollStatusFilter:p,setPayrollStatusFilter:y,payrollPage:V,setPayrollPage:ne,payrollPageSize:L,payrollTotal:oe,handleSelectPayroll:Pa,handleDeletePayroll:Sa,setApprovingPayroll:C,setApprovalComments:z,setShowApproveDialog:N,setShowNewPayrollDialog:ie,formatDate:J,getStatusBadge:We})}),e.jsx(Pe,{value:"salaries",className:"space-y-6",children:e.jsx(Oa,{selectedPayroll:m,salaries:O,loading:o,salarySearch:xe,setSalarySearch:Le,salaryStatusFilter:he,setSalaryStatusFilter:$e,salaryPage:ve,setSalaryPage:Re,salaryPageSize:ze,salaryTotal:ca,selectedSalary:P,fetchSalaryDetails:Ve,setShowExportDialog:de,formatDate:J,formatCurrency:je,getStatusBadge:We})}),e.jsx(Pe,{value:"reports",className:"space-y-6",children:e.jsx(Fa,{})})]}),e.jsx(Z,{open:xa,onOpenChange:ie,children:e.jsxs(ee,{className:"sm:max-w-[500px]",children:[e.jsx(ce,{children:e.jsx(me,{children:"Create New Payroll Period"})}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx(T,{htmlFor:"startDate",children:"Start Date"}),e.jsx(Xe,{date:$.StartDate?new Date($.StartDate):void 0,onChange:a=>{if(!a)return;const s=A(a,"yyyy-MM-dd"),u=new Date(a);u.setMonth(u.getMonth()+1),u.setDate(0),ue(_=>({..._,StartDate:s,EndDate:A(u,"yyyy-MM-dd"),TotalDays:Math.ceil((u.getTime()-a.getTime())/(1e3*60*60*24))+1,Reason:`Payroll for ${A(a,"MMMM yyyy")}`}))}})]}),e.jsxs("div",{children:[e.jsx(T,{htmlFor:"endDate",children:"End Date"}),e.jsx(Xe,{date:$.EndDate?new Date($.EndDate):void 0,onChange:a=>{if(!a)return;const s=A(a,"yyyy-MM-dd");ue(u=>({...u,EndDate:s,TotalDays:Math.ceil((a.getTime()-new Date(u.StartDate||"").getTime())/(1e3*60*60*24))+1}))}})]}),e.jsxs("div",{children:[e.jsx(T,{htmlFor:"reason",children:"Reason / Description"}),e.jsx(I,{id:"reason",value:$.Reason,onChange:a=>ue(s=>({...s,Reason:a.target.value})),placeholder:"e.g., Monthly Payroll - January 2024"})]}),e.jsxs("div",{children:[e.jsx(T,{children:"Total Days"}),e.jsx(I,{value:$.TotalDays||"",readOnly:!0,disabled:!0})]})]})}),e.jsxs(ge,{children:[e.jsx(g,{variant:"outline",onClick:()=>ie(!1),disabled:o.action,children:"Cancel"}),e.jsx(g,{onClick:wa,disabled:o.action,children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Creating..."]}):"Create Payroll"})]})]})}),e.jsx(Z,{open:ha,onOpenChange:Be,children:e.jsxs(ee,{className:"sm:max-w-2xl",children:[e.jsxs(ce,{children:[e.jsx(me,{children:"Payroll Summary"}),m&&e.jsxs(be,{children:[m.Reason," • ",J(m.StartDate)," - ",J(m.EndDate)]})]}),o.action?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):i?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(W,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(q,{className:"pb-2 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(X,{className:"text-lg text-[#30c0da]",children:"Total Employees"})}),e.jsx(U,{children:e.jsx("div",{className:"text-3xl font-bold text-[#30c0da]",children:i.totalEmployees})})]}),e.jsxs(W,{className:"bg-gradient-to-br from-green-50 to-transparent border-green-200 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 hover:border-green-300",children:[e.jsx(q,{className:"pb-2 bg-gradient-to-r from-green-100 via-green-50 to-transparent border-b border-green-200",children:e.jsx(X,{className:"text-lg text-green-600",children:"Total Gross"})}),e.jsx(U,{children:e.jsx("div",{className:"text-3xl font-bold text-green-600",children:je(i.totalGross,i.currency)})})]}),e.jsxs(W,{className:"bg-gradient-to-br from-blue-50 to-transparent border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:border-blue-300",children:[e.jsx(q,{className:"pb-2 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent border-b border-blue-200",children:e.jsx(X,{className:"text-lg text-blue-600",children:"Total Net"})}),e.jsx(U,{children:e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:je(i.totalNet,i.currency)})})]})]}),e.jsxs(W,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(q,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(X,{className:"text-[#30c0da]",children:"Status Breakdown"})}),e.jsx(U,{children:e.jsx("div",{className:"space-y-2",children:Object.entries(i.statusCounts||{}).map(([a,s])=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:a}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-16 text-right",children:s}),e.jsx("div",{className:"ml-2 w-32 bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${s/i.totalEmployees*100}%`}})})]})]},a))})})]}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(g,{variant:"outline",onClick:()=>de(!0),children:[e.jsx(Ee,{className:"w-4 h-4 mr-2"}),"Export Report"]}),e.jsx(g,{onClick:()=>{Be(!1),n("salaries")},children:"View Salaries"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No summary data available"})]})}),e.jsx(Z,{open:ya,onOpenChange:de,children:e.jsxs(ee,{className:"sm:max-w-md",children:[e.jsxs(ce,{children:[e.jsx(me,{children:"Export Payroll Data"}),m&&e.jsxs(be,{children:["Export data for ",m.Reason]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(T,{children:"Format"}),e.jsxs(He,{value:ye,onValueChange:a=>fa(a),children:[e.jsx(Fe,{className:"w-full",children:e.jsx(_e,{placeholder:"Select format"})}),e.jsxs(Oe,{children:[e.jsx(E,{value:"pdf",children:"PDF Document"}),e.jsx(E,{value:"excel",children:"Excel Spreadsheet"}),e.jsx(E,{value:"csv",children:"CSV File"})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"The export will include all employee salary details for the selected payroll period."})]}),e.jsxs(ge,{className:"sm:justify-between",children:[e.jsx(g,{variant:"outline",onClick:()=>de(!1),disabled:o.action,children:"Cancel"}),e.jsx(g,{onClick:Ca,disabled:o.action,children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ee,{className:"w-4 h-4 mr-2"}),"Export ",ye.toUpperCase()]})})]})]})}),e.jsx(Z,{open:pa,onOpenChange:we,children:e.jsx(ee,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:o.details?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):P&&m&&j?e.jsxs("div",{className:"space-y-6",children:[e.jsxs(ce,{children:[e.jsx(me,{children:"Salary Details"}),e.jsxs(be,{children:[P.EmployeeName," • Salary ID: ",P.SalaryID]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"System Net Salary"}),e.jsx(I,{value:je(P.SystemNetSalary||0,P.Currency),readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Manual Override (Net Salary)"}),e.jsx(I,{value:j.ManualNetSalary,onChange:a=>Se(s=>s&&{...s,ManualNetSalary:a.target.value}),placeholder:"Leave empty to use System Net",disabled:o.action})]}),e.jsxs("div",{className:"md:col-span-2 space-y-2",children:[e.jsx(T,{children:"Manual Adjust Note"}),e.jsx(I,{value:j.ManualAdjustNote,onChange:a=>Se(s=>s&&{...s,ManualAdjustNote:a.target.value}),placeholder:"Reason for manual override",disabled:o.action})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Total Hours Worked"}),e.jsx(I,{value:j.TotalHoursWorked,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Overtime Hours"}),e.jsx(I,{value:j.OvertimeHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Absent Hours"}),e.jsx(I,{value:j.AbsentHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Delay Hours"}),e.jsx(I,{value:j.DelayHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(T,{children:"Leave Hours"}),e.jsx(I,{value:j.LeaveHours,readOnly:!0,disabled:!0})]})]}),e.jsxs(W,{children:[e.jsxs(q,{children:[e.jsx(X,{className:"text-base",children:"Salary Components"}),e.jsx(sa,{children:"Placeholder list from employeesalarysub (editable Amount / Notes)"})]}),e.jsx(U,{children:k.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No components found"}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(Me,{children:[e.jsx(Te,{children:e.jsxs(le,{children:[e.jsx(b,{children:"Type"}),e.jsx(b,{children:"Is Add"}),e.jsx(b,{className:"text-right",children:"Amount"}),e.jsx(b,{children:"Notes"})]})}),e.jsx(Ie,{children:k.map(a=>{var s,u;return e.jsxs(le,{children:[e.jsx(f,{children:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown"}),e.jsx(f,{children:a.IsAdd?"Add":"Deduct"}),e.jsx(f,{className:"text-right",children:e.jsx(I,{value:((s=De[a.SalarySubID])==null?void 0:s.Amount)??"",onChange:_=>Ce(B=>{var w;return{...B,[a.SalarySubID]:{Amount:_.target.value,Notes:((w=B[a.SalarySubID])==null?void 0:w.Notes)??""}}}),disabled:o.action})}),e.jsx(f,{children:e.jsx(I,{value:((u=De[a.SalarySubID])==null?void 0:u.Notes)??"",onChange:_=>Ce(B=>{var w;return{...B,[a.SalarySubID]:{Amount:((w=B[a.SalarySubID])==null?void 0:w.Amount)??"",Notes:_.target.value}}}),disabled:o.action})})]},a.SalarySubID)})})]})})})]}),e.jsxs(ge,{className:"sm:justify-between",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(g,{variant:"outline",onClick:()=>we(!1),disabled:o.action,children:"Close"}),e.jsxs(g,{variant:"outline",onClick:()=>pe(!0),disabled:o.action||!m||k.length===0,children:[e.jsx(oa,{className:"w-4 h-4 mr-2"}),"Print Payslip"]})]}),e.jsx(g,{onClick:va,disabled:o.action,children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Saving..."]}):"Save Changes"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No salary details available"})})}),e.jsx(Z,{open:ua,onOpenChange:pe,children:e.jsx(ee,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:P&&m&&k.length>0?e.jsx(Ra,{employeeName:`${k[0].employees_FirstName||""} ${k[0].employees_LastName||""}`.trim()||P.EmployeeName,employeeId:String(k[0].employees_EmployeeID||P.EmployeeID),department:k[0].employees_Department||P.Department,position:k[0].job_JobName||P.Position,salaryMonth:A(m.StartDate,"MMMM yyyy"),salaryDate:A(m.EndDate,"dd-MM-yyyy"),basicSalary:((Ue=k.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("basic")}))==null?void 0:Ue.Amount)||((Je=k.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("main salary")}))==null?void 0:Je.Amount)||((Ye=k.filter(a=>a.IsAdd)[0])==null?void 0:Ye.Amount)||0,earnings:k.filter(a=>{var s;return a.IsAdd&&!((s=a.contractpaytype_ContractPayTypeName)!=null&&s.toLowerCase().includes("basic"))}).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),deductions:k.filter(a=>!a.IsAdd).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0,notes:a.Notes||""})),currency:k[0].Currency||P.Currency||"BHD",onClose:()=>pe(!1)}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No payslip data available"})})}),e.jsx(Z,{open:c,onOpenChange:N,children:e.jsxs(ee,{className:"sm:max-w-md",children:[e.jsxs(ce,{children:[e.jsx(me,{children:"Approve Payroll"}),v&&e.jsxs(be,{children:["Approve payroll for ",J(v.StartDate)," - ",J(v.EndDate),e.jsx("br",{}),e.jsx("strong",{children:"Reason:"})," ",v.Reason]})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{children:[e.jsx(T,{htmlFor:"approvalComments",children:"Approval Comments (Optional)"}),e.jsx("textarea",{id:"approvalComments",value:R,onChange:a=>z(a.target.value),placeholder:"Add any comments or notes about this approval...",className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none",rows:4})]}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(ke,{className:"h-5 w-5 text-blue-400"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Payroll Approval"}),e.jsx("div",{className:"mt-2 text-sm text-blue-700",children:e.jsx("p",{children:'This will approve the payroll and update the status to "Approved". The approval details will be recorded in the system.'})})]})]})})]}),e.jsxs(ge,{className:"sm:justify-between",children:[e.jsx(g,{variant:"outline",onClick:()=>{N(!1),C(null),z("")},disabled:o.action,children:"Cancel"}),e.jsx(g,{onClick:Da,disabled:o.action,className:"bg-green-600 hover:bg-green-700 text-white",children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Approving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(ke,{className:"w-4 h-4 mr-2"}),"Approve Payroll"]})})]})]})})]})};export{rs as default};

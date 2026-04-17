import{c as _a,r as p,j as e,l as U,o as W,x as k,m as ae,n as te,S as oa,I as L,F as $a,B as b,y as La,J as ia,L as se,X as He,am as Ie,C as ca,U as ta,p as da,ab as Ce,aU as sa,D as Z,a as ee,b as he,d as xe,a8 as $,K as Se,e as De}from"./index-BWxYj8Yn.js";import{R as Oa}from"./ReportViewer-BzU972mA.js";import{T as ma,c as za,a as ce,b as Te}from"./tabs-DJVEQakK.js";import{a as M}from"./api-DQu1nJ6T.js";import{S as K}from"./skeleton-wWkG3PBi.js";import{T as _e,a as $e,b as de,c as D,d as Le,e as C}from"./table-DNTKUU7p.js";import{S as Ra}from"./ScrollableTabs-B2QfYCUE.js";import{S as Oe,a as ze,b as Re,c as Be,d as _}from"./select-ChTXfIcE.js";import{C as la}from"./date-picker-aBGRW_T6.js";import{F as pa}from"./filter-C-6dXtOn.js";import{P as ua}from"./plus-CPhIOZVy.js";import{C as ha}from"./chevron-left-CVEk4VF5.js";import{D as Fe}from"./download-BXyOkn6q.js";import{d as ra,f as na}from"./popover-DdDhSmCm.js";import"./alert-CgXCxBS9.js";import"./index-uUjxPWuf.js";import"./getDaysInMonth-OktlZaQ5.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=_a("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),Ba=()=>{const[u,r]=p.useState("payroll_summary"),[t,n]=p.useState([]);p.useEffect(()=>{(async()=>{try{const g=((await M.list("payroll",{sort:"StartDate DESC",pageSize:100})).data||[]).map(A=>({label:`${A.Reason} (${A.StartDate} - ${A.EndDate})`,value:String(A.PayrollID)}));n(g)}catch(x){console.error("Failed to fetch payrolls for reports",x)}})()},[]);const m=[{key:"start_date",label:"Start Date",type:"date",defaultValue:new Date(new Date().getFullYear(),0,1).toISOString().split("T")[0]},{key:"end_date",label:"End Date",type:"date",defaultValue:new Date().toISOString().split("T")[0]}],o=[{key:"payroll_id",label:"Select Payroll",type:"select",options:t}],c={payroll_summary:{type:"payroll_summary",title:"Payroll Summary Report",description:"Overview of payroll periods within a date range.",columns:[{key:"PayrollID",label:"ID"},{key:"Description",label:"Description"},{key:"StartDate",label:"Start Date",format:i=>i?new Date(i).toLocaleDateString():"-"},{key:"EndDate",label:"End Date",format:i=>i?new Date(i).toLocaleDateString():"-"},{key:"TotalDays",label:"Days"},{key:"Status",label:"Status"},{key:"CreatedDate",label:"Created On",format:i=>i?new Date(i).toLocaleDateString():"-"}],filters:m},payroll_salary_sheet:{type:"payroll_salary_sheet",title:"Payroll Salary Sheet",description:"Detailed salary sheet for a specific payroll period.",columns:[{key:"EmployeeID",label:"ID"},{key:"EmployeeName",label:"Name"},{key:"NationalID",label:"National ID"},{key:"TotalHoursWorked",label:"Hours"},{key:"OvertimeHours",label:"Overtime"},{key:"AbsentHours",label:"Absent"},{key:"Currency",label:"Currency"},{key:"GrossSalary",label:"Gross",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"NetSalary",label:"Net Pay",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})}],filters:o},payroll_components_breakdown:{type:"payroll_components_breakdown",title:"Payroll Components Breakdown",description:"Detailed list of additions and deductions per employee for a specific payroll.",columns:[{key:"EmployeeName",label:"Name"},{key:"ComponentName",label:"Component"},{key:"ComponentType",label:"Type",format:i=>e.jsx("span",{className:i==="Addition"?"text-green-600":"text-red-600",children:i})},{key:"Amount",label:"Amount",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"Currency",label:"Curr"},{key:"Notes",label:"Notes"}],filters:o}}[u];return e.jsxs("div",{className:"space-y-6",children:[e.jsx(U,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(W,{className:"p-4",children:e.jsx(ma,{value:u,onValueChange:r,className:"w-full",children:e.jsxs(za,{className:"grid w-full grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border border-[#124562]/20 p-1 rounded-lg",children:[e.jsx(ce,{value:"payroll_summary",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Payroll Summary"}),e.jsx(ce,{value:"payroll_salary_sheet",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Salary Sheet"}),e.jsx(ce,{value:"payroll_components_breakdown",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Components Breakdown"})]})})})}),e.jsx("div",{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 rounded-xl hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30 p-6",children:e.jsx(Oa,{reportType:c.type,title:c.title,description:c.description,columns:c.columns,filterFields:c.filters,disableAutoFetch:!0})})]})},oe={listPayrolls:async(u={})=>{const r=typeof u.page=="number"?u.page:0;return await M.list("payroll",{page:r,pageSize:u.pageSize||10,sort:"DESC",...u.filters||{}})},listEmployeeSalaries:async(u={})=>{const r=await M.list("employeesalary",{page:u.page||0,pageSize:u.pageSize||10,sort:"ASC",field:"EmployeeID",...u.payrollId&&{exact_filters:JSON.stringify({Payroll:u.payrollId})},...u.employeeName&&{EmployeeName:{$like:`%${u.employeeName}%`}},...u.department&&{Department:u.department},...u.status&&{Status:u.status}});if(r.data&&r.data.length>0){const t=await Promise.all(r.data.map(async n=>{try{const o=(await M.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:n.SalaryID}),sort:"ASC"})).data.reduce((d,c)=>(c.IsAdd?d.additions+=c.Amount||0:d.deductions+=c.Amount||0,d),{additions:0,deductions:0});return{...n,TotalEarnings:o.additions,TotalDeductions:o.deductions}}catch(m){return console.error("Error fetching salary components:",m),n}}));return{...r,data:t}}return r},getSalaryDetails:async u=>{const r=await M.get("employeesalary",u),t=await M.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:u}),sort:"ASC",pageSize:1e3});return{...r,components:t.data||[]}},createPayroll:async u=>await M.create("payroll",{...u,Status:"Pending",CreatedBy:1}),deletePayroll:async u=>(await M.list("employeesalary",{exact_filters:JSON.stringify({PayrollID:u}),sort:"ASC",pageSize:1e3}),await M.delete("payroll",u)),approvePayroll:async(u,r)=>await M.update("payroll",u,{Status:"Approved",ApprovedBy:r,ApprovalDate:k(new Date,"yyyy-MM-dd HH:mm:ss")}),exportPayroll:async(u,r="pdf")=>await M.get(`payroll/export/${u}`,{format:r}),getPayrollSummary:async u=>{try{return await M.get("payroll/summary",{payrollId:u})}catch(r){throw console.error("Error fetching payroll summary:",r),r}},updatePayrollStatus:async(u,r)=>await M.update("payroll",u,r),getEmployeeDeductionTypes:async u=>{try{return(await M.list("contractpaytype",{filters:JSON.stringify({EmployeeID:u}),sort:"ASC"})).data||[]}catch(r){return console.error("Error fetching deduction types:",r),[]}}};function Va({payrolls:u,loading:r,payrollSearch:t,setPayrollSearch:n,payrollStatusFilter:m,setPayrollStatusFilter:o,payrollPage:d,setPayrollPage:c,payrollPageSize:i,payrollTotal:x,handleSelectPayroll:g,handleDeletePayroll:A,setApprovingPayroll:H,setApprovalComments:I,setShowApproveDialog:O,setShowNewPayrollDialog:w,formatDate:h,getStatusBadge:z}){return e.jsxs(U,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsx(te,{className:"text-[#30c0da]",children:"Payroll Periods"}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(oa,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(L,{placeholder:"Search payrolls...",className:"pl-10 w-full",value:t,onChange:l=>{n(l.target.value),c(1)}})]}),e.jsxs(Oe,{value:m,onValueChange:l=>{o(l),c(1)},children:[e.jsxs(ze,{className:"w-[180px]",children:[e.jsx(pa,{className:"w-4 h-4 mr-2"}),e.jsx(Re,{placeholder:"Filter by status"})]}),e.jsxs(Be,{children:[e.jsx(_,{value:"all",children:"All Statuses"}),e.jsx(_,{value:"Draft",children:"Draft"}),e.jsx(_,{value:"Pending",children:"Pending"}),e.jsx(_,{value:"Approved",children:"Approved"}),e.jsx(_,{value:"Rejected",children:"Rejected"}),e.jsx(_,{value:"Processing",children:"Processing"})]})]})]})]})}),e.jsx(W,{children:r.payroll?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):u.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx($a,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll periods"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by creating a new payroll period."}),e.jsx("div",{className:"mt-6",children:e.jsxs(b,{onClick:()=>w(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(ua,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(_e,{children:[e.jsx($e,{children:e.jsxs(de,{children:[e.jsx(D,{children:"ID"}),e.jsx(D,{children:"Period"}),e.jsx(D,{children:"Days"}),e.jsx(D,{children:"Reason"}),e.jsx(D,{children:"Status"}),e.jsx(D,{children:"Created"}),e.jsx(D,{className:"text-right",children:"Actions"})]})}),e.jsx(Le,{children:u.map(l=>e.jsxs(de,{children:[e.jsxs(C,{className:"font-medium",children:["#",l.PayrollID]}),e.jsx(C,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(La,{className:"w-4 h-4 mr-2 text-gray-500"}),h(new Date(l.StartDate))," - ",h(new Date(l.EndDate))]})}),e.jsx(C,{children:l.TotalDays}),e.jsx(C,{className:"max-w-xs truncate",children:l.Reason}),e.jsx(C,{children:z(l.Status)}),e.jsx(C,{children:h(new Date(l.CreatedDate))}),e.jsx(C,{children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>g(l),children:[e.jsx(ia,{className:"w-4 h-4 mr-1"})," View"]}),(l.Status==="Draft"||l.Status==="Pending")&&e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>A(l),disabled:r.action,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[r.action?e.jsx(se,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(He,{className:"w-4 h-4 mr-1"}),"Delete"]}),(l.Status==="Pending"||l.Status==="Processing")&&e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>{H(l),I(""),O(!0)},disabled:r.action,className:"text-green-600 hover:text-green-700 hover:bg-green-50",children:[r.action?e.jsx(se,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(Ie,{className:"w-4 h-4 mr-1"}),"Approve"]})]})})]},l.PayrollID))})]}),x>i&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(d-1)*i+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(d*i,x)})," ","of ",e.jsx("span",{className:"font-medium",children:x})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>c(l=>Math.max(1,l-1)),disabled:d===1||r.payroll,children:[e.jsx(ha,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>c(l=>l+1),disabled:d*i>=x||r.payroll,children:["Next ",e.jsx(ca,{className:"w-4 h-4 ml-1"})]})]})]})]})})]})}function Ga({selectedPayroll:u,salaries:r,loading:t,salarySearch:n,setSalarySearch:m,salaryStatusFilter:o,setSalaryStatusFilter:d,salaryPage:c,setSalaryPage:i,salaryPageSize:x,salaryTotal:g,selectedSalary:A,fetchSalaryDetails:H,setShowExportDialog:I,formatDate:O,formatCurrency:w,getStatusBadge:h,onPrintPayslip:z}){return u?e.jsxs(U,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx(te,{className:"text-[#30c0da]",children:"Employee Salaries"}),e.jsxs(da,{children:[u.Reason," • ",O(u.StartDate)," - ",O(u.EndDate)]})]}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(oa,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(L,{placeholder:"Search employees...",className:"pl-10 w-full",value:n,onChange:l=>{m(l.target.value),i(1)}})]}),e.jsxs(Oe,{value:o,onValueChange:l=>{d(l),i(1)},children:[e.jsxs(ze,{className:"w-[180px]",children:[e.jsx(pa,{className:"w-4 h-4 mr-2"}),e.jsx(Re,{placeholder:"Filter by status"})]}),e.jsxs(Be,{children:[e.jsx(_,{value:"all",children:"All Statuses"}),e.jsx(_,{value:"Draft",children:"Draft"}),e.jsx(_,{value:"Pending",children:"Pending"}),e.jsx(_,{value:"Approved",children:"Approved"}),e.jsx(_,{value:"Paid",children:"Paid"}),e.jsx(_,{value:"Rejected",children:"Rejected"})]})]}),e.jsxs(b,{variant:"outline",onClick:()=>I(!0),disabled:t.action,children:[e.jsx(Fe,{className:"w-4 h-4 mr-2"}),"Export"]})]})]})}),e.jsx(W,{children:t.salaries?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):r.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(ta,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No employee salaries"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"No salaries found for the selected payroll period."})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(_e,{children:[e.jsx($e,{children:e.jsxs(de,{children:[e.jsx(D,{children:"Employee"}),e.jsx(D,{children:"Department"}),e.jsx(D,{children:"Position"}),e.jsx(D,{className:"text-right",children:"Gross Salary"}),e.jsx(D,{className:"text-right",children:"Additions"}),e.jsx(D,{className:"text-right",children:"Deductions"}),e.jsx(D,{className:"text-right",children:"System Net"}),e.jsx(D,{className:"text-right",children:"Manual Override"}),e.jsx(D,{className:"text-right",children:"Effective Net"}),e.jsx(D,{children:"Status"}),e.jsx(D,{className:"text-right",children:"Actions"})]})}),e.jsx(Le,{children:r.map(l=>{const R=l.GrossSalary||0,B=l.TotalDeductions||0,le=l.TotalAdditions||l.TotalEarnings||0,X=l.SystemNetSalary||R+le-B,J=l.ManualNetSalary,re=J!==null?J:X,G=J!==null;return e.jsxs(de,{children:[e.jsx(C,{className:"font-medium",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-2",children:(l.employees_FirstName||l.EmployeeName||"").charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{children:l.employees_FirstName&&l.employees_LastName?`${l.employees_FirstName} ${l.employees_LastName}`:l.EmployeeName}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",l.EmployeeID]})]})]})}),e.jsx(C,{children:l.employees_Department||l.Department}),e.jsx(C,{children:l.job_JobName||l.Position}),e.jsx(C,{className:"text-right",children:w(R,l.Currency)}),e.jsx(C,{className:"text-right text-green-600",children:w(le,l.Currency)}),e.jsxs(C,{className:"text-right text-red-600",children:["-",w(B,l.Currency)]}),e.jsx(C,{className:"text-right text-gray-600",children:w(X,l.Currency)}),e.jsx(C,{className:"text-right",children:G?e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-orange-600",children:w(J,l.Currency)}),l.ManualAdjustDate&&e.jsx("div",{className:"text-xs text-gray-500",children:new Date(l.ManualAdjustDate).toLocaleDateString()})]}):e.jsx("span",{className:"text-gray-400",children:"-"})}),e.jsxs(C,{className:"text-right font-medium",children:[e.jsx("div",{className:G?"text-orange-600":"",children:w(re,l.Currency)}),G&&e.jsx("div",{className:"text-xs text-orange-500",children:"Manual Override"})]}),e.jsx(C,{children:h(l.Status)}),e.jsx(C,{children:e.jsxs("div",{className:"flex justify-end gap-1",children:[e.jsxs(b,{variant:"ghost",size:"sm",onClick:()=>H(l),disabled:t.details,children:[e.jsx(ia,{className:"w-4 h-4 mr-1"}),t.details&&(A==null?void 0:A.SalaryID)===l.SalaryID?"Loading...":"View"]}),z&&e.jsxs(b,{variant:"ghost",size:"sm",onClick:()=>z(l),disabled:t.action,children:[e.jsx(Ve,{className:"w-4 h-4 mr-1"}),"Print"]})]})})]},l.SalaryID)})})]}),g>x&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(c-1)*x+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(c*x,g)})," ","of ",e.jsx("span",{className:"font-medium",children:g})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>i(l=>Math.max(1,l-1)),disabled:c===1||t.salaries,children:[e.jsx(ha,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(b,{variant:"outline",size:"sm",onClick:()=>i(l=>l+1),disabled:c*x>=g||t.salaries,children:["Next ",e.jsx(ca,{className:"w-4 h-4 ml-1"})]})]})]})]})})]}):e.jsx(U,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(W,{className:"pt-6",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx(ta,{className:"mx-auto h-12 w-12 text-[#30c0da]"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll selected"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Select a payroll period to view employee salaries."})]})})})}class ie{static getInstance(){return ie.instance||(ie.instance=new ie),ie.instance}async getPayslipTemplate(r){var t,n;try{if(r){const d=await M.get("Printables",r);if(d!=null&&d.success&&(d!=null&&d.data))return d.data}const m=await M.list("Printables",{filter:{DocType:"payslip",IsDefault:!0},pageSize:1});if(m!=null&&m.success&&((t=m==null?void 0:m.data)==null?void 0:t.length)>0)return m.data[0];const o=await M.list("Printables",{filter:{DocType:"payslip"},pageSize:1});return o!=null&&o.success&&((n=o==null?void 0:o.data)==null?void 0:n.length)>0?o.data[0]:null}catch(m){return console.error("Error fetching payslip template:",m),null}}async fetchCompanyConfig(){var r,t,n;try{const[m,o,d]=await Promise.allSettled([Ce.getImage("company_logo"),Ce.getCurrency("global_currency"),Ce.getCompanyName("company_name")]);return{companyLogo:m.status==="fulfilled"&&((r=m.value)==null?void 0:r.image_data)||null,globalCurrency:o.status==="fulfilled"&&((t=o.value)==null?void 0:t.currency)||null,companyName:d.status==="fulfilled"&&((n=d.value)==null?void 0:n.company_name)||null}}catch(m){return console.error("Error fetching company config:",m),{companyName:null,companyLogo:null,globalCurrency:null}}}processTemplate(r,t){if(!r)return"";const n=t.earnings.reduce((i,x)=>i+(x.amount||0),0),m=t.deductions.reduce((i,x)=>i+(x.amount||0),0),o=n-m,d={employee_name:t.employeeName,employeeId:t.employeeId,department:t.department,position:t.position,salary_month:t.salaryMonth,salary_date:t.salaryDate,basic_salary:t.basicSalary,gross_salary:n,total_deductions:m,net_salary:o,currency:t.globalCurrency||t.currency,company_name:t.companyName||"Company",company_logo:t.companyLogo||"",items:t.earnings.map(i=>({label:i.label,amount:i.amount,formatted_amount:`${t.globalCurrency||t.currency} ${i.amount.toFixed(2)}`})),deductions:t.deductions.map(i=>({label:i.label,amount:i.amount,notes:i.notes||"",formatted_amount:`${t.globalCurrency||t.currency} ${i.amount.toFixed(2)}`})),earnings_total:n,earnings_count:t.earnings.length,deductions_total:m,deductions_count:t.deductions.length,formatted_basic_salary:`${t.globalCurrency||t.currency} ${t.basicSalary.toFixed(2)}`,formatted_gross_salary:`${t.globalCurrency||t.currency} ${n.toFixed(2)}`,formatted_total_deductions:`${t.globalCurrency||t.currency} ${m.toFixed(2)}`,formatted_net_salary:`${t.globalCurrency||t.currency} ${o.toFixed(2)}`,current_date:new Date().toLocaleDateString(),current_year:new Date().getFullYear().toString()};let c=r;if(Object.keys(d).forEach(i=>{const x=d[i];if(typeof x=="string"||typeof x=="number"){const g=new RegExp(`\\{${i}\\}`,"g");c=c.replace(g,String(x))}}),Object.keys(d).forEach(i=>{const x=d[i];if(typeof x=="string"||typeof x=="number"){const g=new RegExp(`\\{%\\s*${i}\\s*%\\}`,"g");c=c.replace(g,String(x))}}),d.items&&Array.isArray(d.items)){const i=/{%\s*for\s+(\w+)\s+in\s+items\s*%}([\s\S]*?){%\s*endfor\s*%}/g;let x;for(;(x=i.exec(c))!==null;){const[g,A,H]=x,I=d.items.map(O=>{let w=H;const h=new RegExp(`{%\\s*${A}\\.(\\w+)\\s*%}`,"g");return w=w.replace(h,(z,l)=>{const R=O[l];return R!=null?String(R):""}),w}).join("");c=c.replace(g,I)}}if(d.deductions&&Array.isArray(d.deductions)){const i=/{%\s*for\s+(\w+)\s+in\s+deductions\s*%}([\s\S]*?){%\s*endfor\s*%}/g;let x;for(;(x=i.exec(c))!==null;){const[g,A,H]=x,I=d.deductions.map(O=>{let w=H;const h=new RegExp(`{%\\s*${A}\\.(\\w+)\\s*%}`,"g");return w=w.replace(h,(z,l)=>{const R=O[l];return R!=null?String(R):""}),w}).join("");c=c.replace(g,I)}}return c}async generatePayslipHTML(r,t){try{const n=await this.fetchCompanyConfig(),m={...r,...n},o=await this.getPayslipTemplate(t);return o!=null&&o.HtmlCode?this.processTemplate(o.HtmlCode,m):this.getDefaultPayslipHTML(m)}catch(n){throw console.error("Error generating payslip HTML:",n),n}}getDefaultPayslipHTML(r){const t=r.earnings.reduce((d,c)=>d+(c.amount||0),0),n=r.deductions.reduce((d,c)=>d+(c.amount||0),0),m=t-n,o=r.globalCurrency||r.currency;return`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { size: A4 portrait; margin: 12mm; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { 
      font-family: 'Georgia', serif; 
      color: #2c3e50; 
      margin: 0; 
      padding: 0;
      background: white;
    }
    .payslip-container {
      max-width: 100%;
      margin: 0 auto;
      background: white;
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
  </style>
</head>
<body>
  <div class="payslip-container">
    <div class="logo-section">
      ${r.companyLogo?`<img src="${r.companyLogo}" alt="Company Logo" style="width: 100px; height: 90px; object-fit: contain;">`:'<div class="logo">◆</div>'}
      <div class="company-header flex-1">
        <div class="company-name">${r.companyName||"Company"}</div>
      </div>
    </div>

    <div class="section-divider"></div>

    <div class="info-row">
      <span class="info-label">Employee's name:</span>
      <span class="info-value">${r.employeeName}</span>
    </div>
    <div class="info-row">
      <span class="info-label">Employee ID:</span>
      <span class="info-value">${r.employeeId}</span>
    </div>
    <div class="info-row">
      <span class="info-label">Department:</span>
      <span class="info-value">${r.department}</span>
    </div>
    <div class="info-row">
      <span class="info-label">Position:</span>
      <span class="info-value">${r.position}</span>
    </div>
    <div class="info-row">
      <span class="info-label">Salary for month:</span>
      <span class="info-value">${r.salaryMonth}</span>
    </div>
    <div class="info-row">
      <span class="info-label">Date:</span>
      <span class="info-value">${r.salaryDate}</span>
    </div>

    <div class="section-divider"></div>

    <table class="salary-table">
      <tbody>
        <tr>
          <td class="table-label">Basic Salary</td>
          <td class="table-amount">${o} ${r.basicSalary.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <div class="section-divider"></div>

    <table class="salary-table">
      <tbody>
        ${r.earnings.map(d=>`
          <tr>
            <td class="table-label">${d.label}</td>
            <td class="table-amount">${d.amount>0?`${o} ${d.amount.toFixed(2)}`:""}</td>
          </tr>
        `).join("")}
        <tr class="total-row">
          <td class="table-label">Gross Salary</td>
          <td class="table-amount">${o} ${t.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <div class="section-divider"></div>

    <table class="salary-table">
      <tbody>
        ${r.deductions.map(d=>`
          <tr>
            <td class="table-label">${d.label}</td>
            <td class="table-amount">${d.amount>0?`${o} ${d.amount.toFixed(2)}`:""}</td>
          </tr>
        `).join("")}
        <tr class="total-row">
          <td class="table-label">Total Deduction:</td>
          <td class="table-amount">${o} ${n.toFixed(2)}</td>
        </tr>
        <tr class="net-salary">
          <td class="table-label">Net Salary:</td>
          <td class="table-amount">${o} ${m.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <div class="annotation-section">
      <div class="annotation-label">Annotation</div>
    </div>

    <div class="section-divider"></div>

    <div class="footer">
      <p>© ${new Date().getFullYear()} ${r.companyName||"Company"}</p>
    </div>
  </div>
</body>
</html>`}async printPayslip(r,t){try{const n=await this.generatePayslipHTML(r,t),m=window.open("","_blank","width=800,height=600");if(!m)throw new Error("Could not open print window");m.document.open(),m.document.write(n),m.document.close(),m.onload=()=>{setTimeout(()=>{m.focus(),m.print(),m.onafterprint=()=>{m.close()},setTimeout(()=>{m.close()},2e3)},500)}}catch(n){throw console.error("Error printing payslip:",n),n}}async previewPayslip(r,t){try{return await this.generatePayslipHTML(r,t)}catch(n){throw console.error("Error previewing payslip:",n),n}}}const Pe=ie.getInstance();function Ua({employeeName:u,employeeId:r,department:t,position:n,salaryMonth:m,salaryDate:o,basicSalary:d,earnings:c,deductions:i,currency:x,onClose:g}){const A=p.useRef(null),[H,I]=p.useState(!1),[O,w]=p.useState(""),[h,z]=p.useState(!1),[l,R]=p.useState(new Set),B={employeeName:u,employeeId:r,department:t,position:n,salaryMonth:m,salaryDate:o,basicSalary:d,earnings:c,deductions:i,currency:x};p.useEffect(()=>{(async()=>{try{const E=await Pe.previewPayslip(B);w(E)}catch(E){console.error("Error generating payslip preview:",E)}})()},[B]);const le=f=>{R(E=>{const P=new Set(E);return P.has(f)?P.delete(f):P.add(f),P})},X=async()=>{I(!0);try{await Pe.printPayslip(B)}catch(f){console.error("Error printing payslip:",f)}finally{I(!1)}},J=async()=>{try{const f=await Pe.previewPayslip(B);w(f),z(!0)}catch(f){console.error("Error generating preview:",f)}},re=c.reduce((f,E)=>f+(E.amount||0),0),ye=i.filter((f,E)=>!l.has(E)).reduce((f,E)=>f+(E.amount||0),0),ne=re-ye,Y=x;return e.jsxs("div",{className:"payslip-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"print-controls",children:[g&&e.jsx(b,{onClick:g,variant:"outline",children:"Close"}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsxs(b,{onClick:J,variant:"outline",disabled:H,children:[e.jsx(sa,{className:"w-4 h-4 mr-2"}),"Preview Template"]}),e.jsx(b,{onClick:X,disabled:H,children:H?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Printing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ve,{className:"w-4 h-4 mr-2"}),"Print Payslip"]})})]})]}),e.jsxs("div",{ref:A,className:"payslip-container",children:[e.jsxs("div",{className:"logo-section",children:[e.jsx("div",{className:"logo",children:"◆"}),e.jsx("div",{className:"company-header flex-1",children:e.jsx("div",{className:"company-name",children:"Company"})})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee's name:"}),e.jsx("span",{className:"info-value",children:u})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee ID:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Department:"}),e.jsx("span",{className:"info-value",children:t})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Position:"}),e.jsx("span",{className:"info-value",children:n})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Salary for month:"}),e.jsx("span",{className:"info-value",children:m})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Date:"}),e.jsx("span",{className:"info-value",children:o})]}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:"Basic Salary"}),e.jsxs("td",{className:"table-amount",children:[Y," ",d.toFixed(2)]})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[c.map((f,E)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:f.label}),e.jsx("td",{className:"table-amount",children:f.amount>0?`${Y} ${f.amount.toFixed(2)}`:""})]},E)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Gross Salary"}),e.jsxs("td",{className:"table-amount",children:[Y," ",re.toFixed(2)]})]})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[i.map((f,E)=>e.jsxs("tr",{className:l.has(E)?"hidden-deduction":"",children:[e.jsx("td",{className:"table-label",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{children:f.label}),f.notes&&e.jsx("div",{className:"text-xs text-gray-600 font-normal mt-1 print:text-gray-700",children:f.notes})]}),e.jsx("button",{onClick:()=>le(E),className:"ml-2 p-1 rounded hover:bg-gray-200 transition-colors print:hidden",title:l.has(E)?"Show deduction":"Hide deduction",children:e.jsx(sa,{className:"h-3 w-3 text-gray-500"})})]})}),e.jsx("td",{className:"table-amount",children:f.amount>0?`${Y} ${f.amount.toFixed(2)}`:""})]},E)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Total Deduction:"}),e.jsxs("td",{className:"table-amount",children:[Y," ",ye.toFixed(3)]})]}),e.jsxs("tr",{className:"net-salary",children:[e.jsx("td",{className:"table-label",children:"Net Salary:"}),e.jsxs("td",{className:"table-amount",children:[Y," ",ne.toFixed(2)]})]})]})}),e.jsx("div",{className:"annotation-section",children:e.jsx("div",{className:"annotation-label",children:"Annotation"})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-info",style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"20px"},children:[e.jsx("p",{style:{margin:"4px 0"},children:"Building 2358, Road 2830, Block 428, Al Seef-Bahrain"}),e.jsx("p",{style:{margin:"4px 0"},children:"مبنى 2358، طريق 2830، مجمع 428، السيف  مملكة البحرين"}),e.jsx("p",{style:{margin:"4px 0"},children:"16161613 Calls and WhatsApp"})]}),e.jsx("div",{className:"footer",children:e.jsxs("p",{style:{margin:0},children:["© ",new Date().getFullYear()," Company"]})})]}),e.jsx(Z,{open:h,onOpenChange:z,children:e.jsx(ee,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Payslip Preview"}),e.jsx(b,{onClick:()=>z(!1),variant:"outline",children:"Close"})]}),e.jsx("div",{className:"border rounded-lg overflow-auto",style:{maxHeight:"70vh"},children:e.jsx("iframe",{srcDoc:O,style:{width:"100%",height:"600px",border:"none"},title:"Payslip Preview"})})]})})})]})}const pt=()=>{var Ze,ea,aa;const[u,r]=p.useState("payroll"),[t,n]=p.useState({payroll:!1,salaries:!1,details:!1,action:!1}),[m,o]=p.useState(null),[d,c]=p.useState(null),[i,x]=p.useState(!1),[g,A]=p.useState(null),[H,I]=p.useState(""),[O,w]=p.useState([]),[h,z]=p.useState(null),[l,R]=p.useState(null),[B,le]=p.useState(1),[X]=p.useState(10),[J,re]=p.useState(0),[G,ye]=p.useState(""),[ne,Y]=p.useState("all"),[f,E]=p.useState([]),[P,xa]=p.useState(null),[S,ya]=p.useState([]),[Ae,Ge]=p.useState(1),[Ue]=p.useState(10),[ga,fa]=p.useState(0),[ge,We]=p.useState(""),[fe,Je]=p.useState("all"),[ba,me]=p.useState(!1),[ja,Ye]=p.useState(!1),[va,Ee]=p.useState(!1),[Na,be]=p.useState(!1),[wa,pe]=p.useState(!1);p.useState(!0);const[Wa,Sa]=p.useState([]),[Ja,Da]=p.useState([]),[j,je]=p.useState(null),[qe,Ke]=p.useState(!1),[Q,Me]=p.useState({}),[Ya,Ca]=p.useState(null),[V,ve]=p.useState({StartDate:k(ra(new Date),"yyyy-MM-dd"),EndDate:k(na(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${k(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}),[Ne,Pa]=p.useState("pdf"),Xe=async()=>{n(a=>({...a,payroll:!0})),o(null);try{const s={page:Math.max(0,B-1),pageSize:X,sort:"CreatedDate",order:"desc"};G&&(s.search=G),ne!=="all"&&(s.status=ne);const y=await oe.listPayrolls(s);w(y.data),re(y.total)}catch(a){console.error("Error fetching payrolls:",a),o(a.message||"Failed to fetch payrolls")}finally{n(a=>({...a,payroll:!1}))}},Aa=async()=>{if(h){n(a=>({...a,salaries:!0})),o(null);try{const a={page:Ae-1,pageSize:Ue,payrollId:h.PayrollID,field:"EmployeeName",sort:"ASC"};ge&&(a.search=ge),fe!=="all"&&(a.status=fe);const s=await oe.listEmployeeSalaries(a);E(s.data),fa(s.total)}catch(a){console.error("Error fetching employee salaries:",a),o(a.message||"Failed to fetch employee salaries")}finally{n(a=>({...a,salaries:!1}))}}},ke=async a=>{xa(a),n(s=>({...s,details:!0})),o(null),Da([]),be(!1),Ke(!1);try{const s=await oe.getSalaryDetails(a.SalaryID);console.log("Salary details response:",s),console.log("Salary components:",s.components),ya(s.components),je({ManualNetSalary:a.ManualNetSalary===null||a.ManualNetSalary===void 0?"":String(a.ManualNetSalary),ManualAdjustNote:a.ManualAdjustNote||"",TotalHoursWorked:a.TotalHoursWorked===null||a.TotalHoursWorked===void 0?"":String(a.TotalHoursWorked),OvertimeHours:a.OvertimeHours===null||a.OvertimeHours===void 0?"":String(a.OvertimeHours),AbsentHours:a.AbsentHours===null||a.AbsentHours===void 0?"":String(a.AbsentHours),DelayHours:a.DelayHours===null||a.DelayHours===void 0?"":String(a.DelayHours),LeaveHours:a.LeaveHours===null||a.LeaveHours===void 0?"":String(a.LeaveHours)});const y={};(s.components||[]).forEach(N=>{N!=null&&N.SalarySubID&&(y[N.SalarySubID]={Amount:N.Amount===null||N.Amount===void 0?"":String(N.Amount),Notes:N.Notes||""})}),Me(y);const v=s.components.filter(N=>!N.IsAdd),F=[...new Map(v.map(N=>[N.ComponentID,N])).values()];Sa(F),Ee(!0)}catch(s){console.error("Error fetching salary details:",s),o(s.message||"Failed to fetch salary details")}finally{n(s=>({...s,details:!1}))}};p.useEffect(()=>{if(!j||qe||!S||S.length===0)return;const a=S.reduce((y,v)=>{var ue;const F=((ue=Q==null?void 0:Q[v.SalarySubID])==null?void 0:ue.Amount)??"",N=F.trim()===""?0:Number(F),T=Number.isFinite(N)?N:0;return y+(v.IsAdd?T:-T)},0),s=String(Number.isFinite(a)?a:0);j.ManualNetSalary!==s&&je(y=>y&&{...y,ManualNetSalary:s})},[Q,S,qe,j]);const Ea=async()=>{if(!(!P||!j)){n(a=>({...a,action:!0})),o(null),c(null);try{const a=j.ManualNetSalary.trim()===""?null:Number(j.ManualNetSalary);if(a!==null&&!Number.isFinite(a))throw new Error("Manual Net Salary must be a valid number");await M.update("employeesalary",P.SalaryID,{ManualNetSalary:a,ManualAdjustNote:j.ManualAdjustNote.trim()===""?null:j.ManualAdjustNote,TotalHoursWorked:j.TotalHoursWorked.trim()===""?null:Number(j.TotalHoursWorked),OvertimeHours:j.OvertimeHours.trim()===""?null:Number(j.OvertimeHours),AbsentHours:j.AbsentHours.trim()===""?null:Number(j.AbsentHours),DelayHours:j.DelayHours.trim()===""?null:Number(j.DelayHours),LeaveHours:j.LeaveHours.trim()===""?null:Number(j.LeaveHours),NetSalary:a});const s=Object.entries(Q).map(([y,v])=>{const F=v.Amount.trim()===""?0:Number(v.Amount);return M.update("employeesalarysub",y,{Amount:Number.isFinite(F)?F:0,Notes:v.Notes.trim()===""?null:v.Notes})});await Promise.all(s),P&&await ke(P),c("Salary details updated successfully"),setTimeout(()=>c(null),5e3)}catch(a){console.error("Error saving salary details:",a),o(a.message||"Failed to save salary details")}finally{n(a=>({...a,action:!1}))}}},Ma=async a=>{var s,y;try{if(n(T=>({...T,action:!0})),await ke(a),S.length===0)throw new Error("No salary components found");const v=S.filter(T=>T.IsAdd),F=S.filter(T=>!T.IsAdd),N={employeeName:a.EmployeeName||"",employeeId:String(a.EmployeeID||""),department:a.employees_Department||a.Department||"",position:a.job_JobName||a.Position||"",salaryMonth:h?k(h.StartDate,"MMMM yyyy"):"",salaryDate:h?k(h.EndDate,"dd-MM-yyyy"):"",basicSalary:((s=v.find(T=>{var ue;return(ue=T.ComponentName)==null?void 0:ue.toLowerCase().includes("basic")}))==null?void 0:s.Amount)||((y=v[0])==null?void 0:y.Amount)||0,earnings:v.map(T=>({label:T.ComponentName||"Unknown",amount:T.Amount||0})),deductions:F.map(T=>({label:T.ComponentName||"Unknown",amount:T.Amount||0,notes:T.Notes||""})),currency:a.Currency||"BHD"};await Pe.printPayslip(N),c("Payslip printed successfully"),setTimeout(()=>c(null),3e3)}catch(v){console.error("Error printing payslip:",v),o(v.message||"Failed to print payslip")}finally{n(v=>({...v,action:!1}))}},ka=async()=>{if(!V.StartDate||!V.EndDate||!V.Reason){o("Please fill in all required fields");return}n(a=>({...a,action:!0})),o(null);try{const a={...V,Status:"Pending",CreatedBy:1,CreatedDate:k(new Date,"yyyy-MM-dd HH:mm:ss")};await oe.createPayroll(a),await Xe(),me(!1),c("Payroll period created successfully"),ve({StartDate:k(ra(new Date),"yyyy-MM-dd"),EndDate:k(na(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${k(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()})}catch(a){console.error("Error creating payroll:",a),o(a.message||"Failed to create payroll period")}finally{n(a=>({...a,action:!1}))}},Ta=async a=>{if(window.confirm(`Are you sure you want to delete payroll for ${q(a.StartDate)} - ${q(a.EndDate)}? This will also delete all associated salary records.`)){n(s=>({...s,action:!0})),o(null);try{await oe.deletePayroll(a.PayrollID),w(s=>s.filter(y=>y.PayrollID!==a.PayrollID)),(h==null?void 0:h.PayrollID)===a.PayrollID&&(z(null),r("payroll")),c("Payroll deleted successfully"),setTimeout(()=>c(null),5e3)}catch(s){console.error("Error deleting payroll:",s),o(s.message||"Failed to delete payroll")}finally{n(s=>({...s,action:!1}))}}},Ha=async()=>{if(g){n(a=>({...a,action:!0})),o(null);try{await M.update("payroll",g.PayrollID,{Status:"Approved",ApprovedBy:1,ApprovalDate:k(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:H||null}),w(a=>a.map(s=>s.PayrollID===g.PayrollID?{...s,Status:"Approved",ApprovedBy:1,ApprovalDate:k(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:H}:s)),x(!1),A(null),I(""),c("Payroll approved successfully"),setTimeout(()=>c(null),5e3)}catch(a){console.error("Error approving payroll:",a),o(a.message||"Failed to approve payroll")}finally{n(a=>({...a,action:!1}))}}},Ia=async()=>{if(h){n(a=>({...a,action:!0})),o(null);try{await oe.exportPayroll(h.PayrollID,Ne),pe(!1),c(`Payroll exported successfully as ${Ne.toUpperCase()}`),setTimeout(()=>c(null),5e3)}catch(a){console.error("Error exporting payroll:",a),o(a.message||"Failed to export payroll")}finally{n(a=>({...a,action:!1}))}}},Fa=a=>{z(a),Ge(1),We(""),Je("all"),r("salaries")},we=(a,s="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:s||"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(a||0),q=a=>{if(!a)return"N/A";try{const s=typeof a=="string"?new Date(a):a;return isNaN(s.getTime())?"Invalid Date":s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}},Qe=a=>{const y={Draft:{variant:"bg-gray-100 text-gray-800",label:"Draft"},Pending:{variant:"bg-yellow-100 text-yellow-800",label:"Pending"},Approved:{variant:"bg-green-100 text-green-800",label:"Approved"},Rejected:{variant:"bg-red-100 text-red-800",label:"Rejected"},Processing:{variant:"bg-blue-100 text-blue-800",label:"Processing"},Paid:{variant:"bg-purple-100 text-purple-800",label:"Paid"}}[a]||{variant:"bg-gray-100 text-gray-800",label:a};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${y.variant}`,children:y.label})};return p.useEffect(()=>{Xe()},[B,G,ne]),p.useEffect(()=>{(async()=>{try{const s=await Ce.getCurrency("global_currency");s!=null&&s.currency&&Ca(s.currency)}catch(s){console.error("Error fetching global currency:",s)}})()},[]),p.useEffect(()=>{h&&Aa()},[h,Ae,ge,fe]),t.payroll&&O.length===0?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(K,{className:"h-8 w-48"}),e.jsx(K,{className:"h-4 w-64"})]}),e.jsx(K,{className:"h-10 w-32"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsx(K,{className:"h-32 w-full"}),e.jsx(K,{className:"h-32 w-full"}),e.jsx(K,{className:"h-32 w-full"})]}),e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx(K,{className:"h-10 w-full md:w-1/3"}),e.jsx("div",{className:"space-y-2",children:Array(5).fill(0).map((a,s)=>e.jsx(K,{className:"h-20 w-full"},s))})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Payroll Management"}),e.jsx("p",{className:"text-gray-600",children:"Manage employee salaries and payroll processing"})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs(b,{onClick:()=>me(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(ua,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}),d&&e.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:d}),e.jsx("button",{onClick:()=>c(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(He,{className:"w-4 h-4"})})]}),m&&e.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:m}),e.jsx("button",{onClick:()=>o(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(He,{className:"w-4 h-4"})})]}),e.jsxs(ma,{value:u,onValueChange:r,className:"w-full",children:[e.jsxs(Ra,{className:"md:grid md:grid-cols-3 max-w-fit mb-5",children:[e.jsx(ce,{value:"payroll",children:"Payroll Periods"}),e.jsxs(ce,{value:"salaries",disabled:!h,children:["Employee Salaries",h&&` (${h.Reason})`]}),e.jsx(ce,{value:"reports",children:"Reports"})]}),e.jsx(Te,{value:"payroll",className:"space-y-6",children:e.jsx(Va,{payrolls:O,loading:t,payrollSearch:G,setPayrollSearch:ye,payrollStatusFilter:ne,setPayrollStatusFilter:Y,payrollPage:B,setPayrollPage:le,payrollPageSize:X,payrollTotal:J,handleSelectPayroll:Fa,handleDeletePayroll:Ta,setApprovingPayroll:A,setApprovalComments:I,setShowApproveDialog:x,setShowNewPayrollDialog:me,formatDate:q,getStatusBadge:Qe})}),e.jsx(Te,{value:"salaries",className:"space-y-6",children:e.jsx(Ga,{selectedPayroll:h,salaries:f,loading:t,salarySearch:ge,setSalarySearch:We,salaryStatusFilter:fe,setSalaryStatusFilter:Je,salaryPage:Ae,setSalaryPage:Ge,salaryPageSize:Ue,salaryTotal:ga,selectedSalary:P,fetchSalaryDetails:ke,setShowExportDialog:pe,formatDate:q,formatCurrency:we,getStatusBadge:Qe,onPrintPayslip:Ma})}),e.jsx(Te,{value:"reports",className:"space-y-6",children:e.jsx(Ba,{})})]}),e.jsx(Z,{open:ba,onOpenChange:me,children:e.jsxs(ee,{className:"sm:max-w-[500px]",children:[e.jsx(he,{children:e.jsx(xe,{children:"Create New Payroll Period"})}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx($,{htmlFor:"startDate",children:"Start Date"}),e.jsx(la,{date:V.StartDate?new Date(V.StartDate):void 0,onChange:a=>{if(!a)return;const s=k(a,"yyyy-MM-dd"),y=new Date(a);y.setMonth(y.getMonth()+1),y.setDate(0),ve(v=>({...v,StartDate:s,EndDate:k(y,"yyyy-MM-dd"),TotalDays:Math.ceil((y.getTime()-a.getTime())/(1e3*60*60*24))+1,Reason:`Payroll for ${k(a,"MMMM yyyy")}`}))}})]}),e.jsxs("div",{children:[e.jsx($,{htmlFor:"endDate",children:"End Date"}),e.jsx(la,{date:V.EndDate?new Date(V.EndDate):void 0,onChange:a=>{if(!a)return;const s=k(a,"yyyy-MM-dd");ve(y=>({...y,EndDate:s,TotalDays:Math.ceil((a.getTime()-new Date(y.StartDate||"").getTime())/(1e3*60*60*24))+1}))}})]}),e.jsxs("div",{children:[e.jsx($,{htmlFor:"reason",children:"Reason / Description"}),e.jsx(L,{id:"reason",value:V.Reason,onChange:a=>ve(s=>({...s,Reason:a.target.value})),placeholder:"e.g., Monthly Payroll - January 2024"})]}),e.jsxs("div",{children:[e.jsx($,{children:"Total Days"}),e.jsx(L,{value:V.TotalDays||"",readOnly:!0,disabled:!0})]})]})}),e.jsxs(Se,{children:[e.jsx(b,{variant:"outline",onClick:()=>me(!1),disabled:t.action,children:"Cancel"}),e.jsx(b,{onClick:ka,disabled:t.action,children:t.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Creating..."]}):"Create Payroll"})]})]})}),e.jsx(Z,{open:ja,onOpenChange:Ye,children:e.jsxs(ee,{className:"sm:max-w-2xl",children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Payroll Summary"}),h&&e.jsxs(De,{children:[h.Reason," • ",q(h.StartDate)," - ",q(h.EndDate)]})]}),t.action?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):l?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(U,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"pb-2 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(te,{className:"text-lg text-[#30c0da]",children:"Total Employees"})}),e.jsx(W,{children:e.jsx("div",{className:"text-3xl font-bold text-[#30c0da]",children:l.totalEmployees})})]}),e.jsxs(U,{className:"bg-gradient-to-br from-green-50 to-transparent border-green-200 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 hover:border-green-300",children:[e.jsx(ae,{className:"pb-2 bg-gradient-to-r from-green-100 via-green-50 to-transparent border-b border-green-200",children:e.jsx(te,{className:"text-lg text-green-600",children:"Total Gross"})}),e.jsx(W,{children:e.jsx("div",{className:"text-3xl font-bold text-green-600",children:we(l.totalGross,l.currency)})})]}),e.jsxs(U,{className:"bg-gradient-to-br from-blue-50 to-transparent border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:border-blue-300",children:[e.jsx(ae,{className:"pb-2 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent border-b border-blue-200",children:e.jsx(te,{className:"text-lg text-blue-600",children:"Total Net"})}),e.jsx(W,{children:e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:we(l.totalNet,l.currency)})})]})]}),e.jsxs(U,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(te,{className:"text-[#30c0da]",children:"Status Breakdown"})}),e.jsx(W,{children:e.jsx("div",{className:"space-y-2",children:Object.entries(l.statusCounts||{}).map(([a,s])=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:a}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-16 text-right",children:s}),e.jsx("div",{className:"ml-2 w-32 bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${s/l.totalEmployees*100}%`}})})]})]},a))})})]}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(b,{variant:"outline",onClick:()=>pe(!0),children:[e.jsx(Fe,{className:"w-4 h-4 mr-2"}),"Export Report"]}),e.jsx(b,{onClick:()=>{Ye(!1),r("salaries")},children:"View Salaries"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No summary data available"})]})}),e.jsx(Z,{open:wa,onOpenChange:pe,children:e.jsxs(ee,{className:"sm:max-w-md",children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Export Payroll Data"}),h&&e.jsxs(De,{children:["Export data for ",h.Reason]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx($,{children:"Format"}),e.jsxs(Oe,{value:Ne,onValueChange:a=>Pa(a),children:[e.jsx(ze,{className:"w-full",children:e.jsx(Re,{placeholder:"Select format"})}),e.jsxs(Be,{children:[e.jsx(_,{value:"pdf",children:"PDF Document"}),e.jsx(_,{value:"excel",children:"Excel Spreadsheet"}),e.jsx(_,{value:"csv",children:"CSV File"})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"The export will include all employee salary details for the selected payroll period."})]}),e.jsxs(Se,{className:"sm:justify-between",children:[e.jsx(b,{variant:"outline",onClick:()=>pe(!1),disabled:t.action,children:"Cancel"}),e.jsx(b,{onClick:Ia,disabled:t.action,children:t.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Fe,{className:"w-4 h-4 mr-2"}),"Export ",Ne.toUpperCase()]})})]})]})}),e.jsx(Z,{open:va,onOpenChange:Ee,children:e.jsx(ee,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:t.details?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):P&&h&&j?e.jsxs("div",{className:"space-y-6",children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Salary Details"}),e.jsxs(De,{children:[P.EmployeeName," • Salary ID: ",P.SalaryID]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"System Net Salary"}),e.jsx(L,{value:we(P.SystemNetSalary||0,P.Currency),readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"Manual Override (Net Salary)"}),e.jsx(L,{value:j.ManualNetSalary,onChange:a=>{Ke(!0),je(s=>s&&{...s,ManualNetSalary:a.target.value})},placeholder:"Leave empty to use System Net",disabled:t.action})]}),e.jsxs("div",{className:"md:col-span-2 space-y-2",children:[e.jsx($,{children:"Manual Adjust Note"}),e.jsx(L,{value:j.ManualAdjustNote,onChange:a=>je(s=>s&&{...s,ManualAdjustNote:a.target.value}),placeholder:"Reason for manual override",disabled:t.action})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"Total Hours Worked"}),e.jsx(L,{value:j.TotalHoursWorked,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"Overtime Hours"}),e.jsx(L,{value:j.OvertimeHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"Absent Hours"}),e.jsx(L,{value:j.AbsentHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"Delay Hours"}),e.jsx(L,{value:j.DelayHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx($,{children:"Leave Hours"}),e.jsx(L,{value:j.LeaveHours,readOnly:!0,disabled:!0})]})]}),e.jsxs(U,{children:[e.jsxs(ae,{children:[e.jsx(te,{className:"text-base",children:"Salary Components"}),e.jsx(da,{children:"Placeholder list from employeesalarysub (editable Amount / Notes)"})]}),e.jsx(W,{children:S.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No components found"}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(_e,{children:[e.jsx($e,{children:e.jsxs(de,{children:[e.jsx(D,{children:"Type"}),e.jsx(D,{children:"Is Add"}),e.jsx(D,{className:"text-right",children:"Amount"}),e.jsx(D,{children:"Notes"})]})}),e.jsx(Le,{children:S.map(a=>{var s,y;return e.jsxs(de,{children:[e.jsx(C,{children:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown"}),e.jsx(C,{children:a.IsAdd?"Add":"Deduct"}),e.jsx(C,{className:"text-right",children:e.jsx(L,{value:((s=Q[a.SalarySubID])==null?void 0:s.Amount)??"",onChange:v=>Me(F=>{var N;return{...F,[a.SalarySubID]:{Amount:v.target.value,Notes:((N=F[a.SalarySubID])==null?void 0:N.Notes)??""}}}),disabled:t.action})}),e.jsx(C,{children:e.jsx(L,{value:((y=Q[a.SalarySubID])==null?void 0:y.Notes)??"",onChange:v=>Me(F=>{var N;return{...F,[a.SalarySubID]:{Amount:((N=F[a.SalarySubID])==null?void 0:N.Amount)??"",Notes:v.target.value}}}),disabled:t.action})})]},a.SalarySubID)})})]})})})]}),e.jsxs(Se,{className:"sm:justify-between",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(b,{variant:"outline",onClick:()=>Ee(!1),disabled:t.action,children:"Close"}),e.jsxs(b,{variant:"outline",onClick:()=>be(!0),disabled:t.action||!h||S.length===0,children:[e.jsx(Ve,{className:"w-4 h-4 mr-2"}),"Print Payslip"]})]}),e.jsx(b,{onClick:Ea,disabled:t.action,children:t.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Saving..."]}):"Save Changes"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No salary details available"})})}),e.jsx(Z,{open:Na,onOpenChange:be,children:e.jsx(ee,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:P&&h&&S.length>0?e.jsx(Ua,{employeeName:`${S[0].employees_FirstName||""} ${S[0].employees_LastName||""}`.trim()||P.EmployeeName,employeeId:String(S[0].employees_EmployeeID||P.EmployeeID),department:S[0].employees_Department||P.Department,position:S[0].job_JobName||P.Position,salaryMonth:k(h.StartDate,"MMMM yyyy"),salaryDate:k(h.EndDate,"dd-MM-yyyy"),basicSalary:((Ze=S.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("basic")}))==null?void 0:Ze.Amount)||((ea=S.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("main salary")}))==null?void 0:ea.Amount)||((aa=S.filter(a=>a.IsAdd)[0])==null?void 0:aa.Amount)||0,earnings:S.filter(a=>{var s;return a.IsAdd&&!((s=a.contractpaytype_ContractPayTypeName)!=null&&s.toLowerCase().includes("basic"))}).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),deductions:S.filter(a=>!a.IsAdd).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0,notes:a.Notes||""})),currency:S[0].Currency||P.Currency||"BHD",onClose:()=>be(!1)}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No payslip data available"})})}),e.jsx(Z,{open:i,onOpenChange:x,children:e.jsxs(ee,{className:"sm:max-w-md",children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Approve Payroll"}),g&&e.jsxs(De,{children:["Approve payroll for ",q(g.StartDate)," - ",q(g.EndDate),e.jsx("br",{}),e.jsx("strong",{children:"Reason:"})," ",g.Reason]})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{children:[e.jsx($,{htmlFor:"approvalComments",children:"Approval Comments (Optional)"}),e.jsx("textarea",{id:"approvalComments",value:H,onChange:a=>I(a.target.value),placeholder:"Add any comments or notes about this approval...",className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none",rows:4})]}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(Ie,{className:"h-5 w-5 text-blue-400"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Payroll Approval"}),e.jsx("div",{className:"mt-2 text-sm text-blue-700",children:e.jsx("p",{children:'This will approve the payroll and update the status to "Approved". The approval details will be recorded in the system.'})})]})]})})]}),e.jsxs(Se,{className:"sm:justify-between",children:[e.jsx(b,{variant:"outline",onClick:()=>{x(!1),A(null),I("")},disabled:t.action,children:"Cancel"}),e.jsx(b,{onClick:Ha,disabled:t.action,className:"bg-green-600 hover:bg-green-700 text-white",children:t.action?e.jsxs(e.Fragment,{children:[e.jsx(se,{className:"w-4 h-4 mr-2 animate-spin"}),"Approving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ie,{className:"w-4 h-4 mr-2"}),"Approve Payroll"]})})]})]})})]})};export{pt as default};

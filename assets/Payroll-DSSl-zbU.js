import{p as fa,r as l,j as e,C as L,l as O,t as v,i as U,k as J,S as Oe,I as ie,F as ja,B as u,o as ba,ag as $e,L as Q,aj as ge,ai as fe,a5 as He,U as _e,m as va,b4 as je,D as X,a as K,b as oe,c as ne,a1 as G,a2 as pe,d as ye}from"./index-BjKA31UA.js";import{R as Na}from"./ReportViewer-ToQAH0Hc.js";import{T as Be,a as wa,b as W,c as ue}from"./tabs-CnBQJwo2.js";import{a as D}from"./api-B_-oJrlX.js";import{S as z}from"./skeleton-Zvv9WreH.js";import{S as Da}from"./ScrollableTabs-C97d5-Mi.js";import{S as ve,a as Ne,b as we,c as De,d as S}from"./select-86dh3sFh.js";import{C as Re}from"./date-picker-CGxuiQ3_.js";import{T as Ge,a as Ve,b as ce,c as N,d as Ue,e as w}from"./table-Chl0BsOH.js";import{F as Je}from"./filter-Crg1mm_J.js";import{P as We}from"./plus-BbljjHW0.js";import{C as Ye}from"./chevron-left-RwTFEiw2.js";import{D as be}from"./download-Dl6-7sU4.js";import{s as ze,a as Le}from"./popover-DFWOaWtO.js";import"./alert-C2YMlm0O.js";import"./index-CZVvjTco.js";import"./getDaysInMonth-NNolBCSP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=fa("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),Ca=()=>{const[t,r]=l.useState("payroll_summary"),[n,h]=l.useState([]);l.useEffect(()=>{(async()=>{try{const y=((await D.list("payroll",{sort:"StartDate DESC",pageSize:100})).data||[]).map(j=>({label:`${j.Reason} (${j.StartDate} - ${j.EndDate})`,value:String(j.PayrollID)}));h(y)}catch(p){console.error("Failed to fetch payrolls for reports",p)}})()},[]);const P=[{key:"start_date",label:"Start Date",type:"date",defaultValue:new Date(new Date().getFullYear(),0,1).toISOString().split("T")[0]},{key:"end_date",label:"End Date",type:"date",defaultValue:new Date().toISOString().split("T")[0]}],x=[{key:"payroll_id",label:"Select Payroll",type:"select",options:n}],d={payroll_summary:{type:"payroll_summary",title:"Payroll Summary Report",description:"Overview of payroll periods within a date range.",columns:[{key:"PayrollID",label:"ID"},{key:"Description",label:"Description"},{key:"StartDate",label:"Start Date",format:i=>i?new Date(i).toLocaleDateString():"-"},{key:"EndDate",label:"End Date",format:i=>i?new Date(i).toLocaleDateString():"-"},{key:"TotalDays",label:"Days"},{key:"Status",label:"Status"},{key:"CreatedDate",label:"Created On",format:i=>i?new Date(i).toLocaleDateString():"-"}],filters:P},payroll_salary_sheet:{type:"payroll_salary_sheet",title:"Payroll Salary Sheet",description:"Detailed salary sheet for a specific payroll period.",columns:[{key:"EmployeeID",label:"ID"},{key:"EmployeeName",label:"Name"},{key:"NationalID",label:"National ID"},{key:"TotalHoursWorked",label:"Hours"},{key:"OvertimeHours",label:"Overtime"},{key:"AbsentHours",label:"Absent"},{key:"Currency",label:"Currency"},{key:"GrossSalary",label:"Gross",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"NetSalary",label:"Net Pay",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})}],filters:x},payroll_components_breakdown:{type:"payroll_components_breakdown",title:"Payroll Components Breakdown",description:"Detailed list of additions and deductions per employee for a specific payroll.",columns:[{key:"EmployeeName",label:"Name"},{key:"ComponentName",label:"Component"},{key:"ComponentType",label:"Type",format:i=>e.jsx("span",{className:i==="Addition"?"text-green-600":"text-red-600",children:i})},{key:"Amount",label:"Amount",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"Currency",label:"Curr"},{key:"Notes",label:"Notes"}],filters:x}}[t];return e.jsxs("div",{className:"space-y-6",children:[e.jsx(L,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(O,{className:"p-4",children:e.jsx(Be,{value:t,onValueChange:r,className:"w-full",children:e.jsxs(wa,{className:"grid w-full grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border border-[#124562]/20 p-1 rounded-lg",children:[e.jsx(W,{value:"payroll_summary",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Payroll Summary"}),e.jsx(W,{value:"payroll_salary_sheet",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Salary Sheet"}),e.jsx(W,{value:"payroll_components_breakdown",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:"Components Breakdown"})]})})})}),e.jsx("div",{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 rounded-xl hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30 p-6",children:e.jsx(Na,{reportType:d.type,title:d.title,description:d.description,columns:d.columns,filterFields:d.filters,disableAutoFetch:!0})})]})},V={listPayrolls:async(t={})=>{const r=typeof t.page=="number"?t.page:0;return await D.list("payroll",{page:r,pageSize:t.pageSize||10,sort:"DESC",...t.filters||{}})},listEmployeeSalaries:async(t={})=>{const r=await D.list("employeesalary",{page:t.page||0,pageSize:t.pageSize||10,sort:"ASC",field:"EmployeeID",...t.payrollId&&{exact_filters:JSON.stringify({Payroll:t.payrollId})},...t.employeeName&&{EmployeeName:{$like:`%${t.employeeName}%`}},...t.department&&{Department:t.department},...t.status&&{Status:t.status}});if(r.data&&r.data.length>0){const n=await Promise.all(r.data.map(async h=>{try{const x=(await D.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:h.SalaryID}),sort:"ASC"})).data.reduce((f,d)=>(d.IsAdd?f.additions+=d.Amount||0:f.deductions+=d.Amount||0,f),{additions:0,deductions:0});return{...h,TotalEarnings:x.additions,TotalDeductions:x.deductions}}catch(P){return console.error("Error fetching salary components:",P),h}}));return{...r,data:n}}return r},getSalaryDetails:async t=>{const r=await D.get("employeesalary",t),n=await D.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:t}),sort:"ASC",pageSize:1e3});return{...r,components:n.data||[]}},createPayroll:async t=>await D.create("payroll",{...t,Status:"Pending",CreatedBy:1}),deletePayroll:async t=>(await D.list("employeesalary",{exact_filters:JSON.stringify({PayrollID:t}),sort:"ASC",pageSize:1e3}),await D.delete("payroll",t)),approvePayroll:async(t,r)=>await D.update("payroll",t,{Status:"Approved",ApprovedBy:r,ApprovalDate:v(new Date,"yyyy-MM-dd HH:mm:ss")}),exportPayroll:async(t,r="pdf")=>await D.get(`payroll/export/${t}`,{format:r}),getPayrollSummary:async t=>{try{return await D.get("payroll/summary",{payrollId:t})}catch(r){throw console.error("Error fetching payroll summary:",r),r}},updatePayrollStatus:async(t,r)=>await D.update("payroll",t,r),getEmployeeDeductionTypes:async t=>{try{return(await D.list("contractpaytype",{filters:JSON.stringify({EmployeeID:t}),sort:"ASC"})).data||[]}catch(r){return console.error("Error fetching deduction types:",r),[]}}};function Pa({payrolls:t,loading:r,payrollSearch:n,setPayrollSearch:h,payrollStatusFilter:P,setPayrollStatusFilter:x,payrollPage:f,setPayrollPage:d,payrollPageSize:i,payrollTotal:p,handleSelectPayroll:y,handleDeletePayroll:j,setApprovingPayroll:A,setApprovalComments:T,setShowApproveDialog:M,setShowNewPayrollDialog:E,formatDate:m,getStatusBadge:c}){return e.jsxs(L,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsx(J,{className:"text-[#30c0da]",children:"Payroll Periods"}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Oe,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(ie,{placeholder:"Search payrolls...",className:"pl-10 w-full",value:n,onChange:o=>{h(o.target.value),d(1)}})]}),e.jsxs(ve,{value:P,onValueChange:o=>{x(o),d(1)},children:[e.jsxs(Ne,{className:"w-[180px]",children:[e.jsx(Je,{className:"w-4 h-4 mr-2"}),e.jsx(we,{placeholder:"Filter by status"})]}),e.jsxs(De,{children:[e.jsx(S,{value:"all",children:"All Statuses"}),e.jsx(S,{value:"Draft",children:"Draft"}),e.jsx(S,{value:"Pending",children:"Pending"}),e.jsx(S,{value:"Approved",children:"Approved"}),e.jsx(S,{value:"Rejected",children:"Rejected"}),e.jsx(S,{value:"Processing",children:"Processing"})]})]})]})]})}),e.jsx(O,{children:r.payroll?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):t.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(ja,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll periods"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by creating a new payroll period."}),e.jsx("div",{className:"mt-6",children:e.jsxs(u,{onClick:()=>E(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(We,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Ge,{children:[e.jsx(Ve,{children:e.jsxs(ce,{children:[e.jsx(N,{children:"ID"}),e.jsx(N,{children:"Period"}),e.jsx(N,{children:"Days"}),e.jsx(N,{children:"Reason"}),e.jsx(N,{children:"Status"}),e.jsx(N,{children:"Created"}),e.jsx(N,{className:"text-right",children:"Actions"})]})}),e.jsx(Ue,{children:t.map(o=>e.jsxs(ce,{children:[e.jsxs(w,{className:"font-medium",children:["#",o.PayrollID]}),e.jsx(w,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(ba,{className:"w-4 h-4 mr-2 text-gray-500"}),m(new Date(o.StartDate))," - ",m(new Date(o.EndDate))]})}),e.jsx(w,{children:o.TotalDays}),e.jsx(w,{className:"max-w-xs truncate",children:o.Reason}),e.jsx(w,{children:c(o.Status)}),e.jsx(w,{children:m(new Date(o.CreatedDate))}),e.jsx(w,{children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>y(o),children:[e.jsx($e,{className:"w-4 h-4 mr-1"})," View"]}),(o.Status==="Draft"||o.Status==="Pending")&&e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>j(o),disabled:r.action,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[r.action?e.jsx(Q,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(ge,{className:"w-4 h-4 mr-1"}),"Delete"]}),(o.Status==="Pending"||o.Status==="Processing")&&e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>{A(o),T(""),M(!0)},disabled:r.action,className:"text-green-600 hover:text-green-700 hover:bg-green-50",children:[r.action?e.jsx(Q,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(fe,{className:"w-4 h-4 mr-1"}),"Approve"]})]})})]},o.PayrollID))})]}),p>i&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(f-1)*i+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(f*i,p)})," ","of ",e.jsx("span",{className:"font-medium",children:p})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>d(o=>Math.max(1,o-1)),disabled:f===1||r.payroll,children:[e.jsx(Ye,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>d(o=>o+1),disabled:f*i>=p||r.payroll,children:["Next ",e.jsx(He,{className:"w-4 h-4 ml-1"})]})]})]})]})})]})}function Ea({selectedPayroll:t,salaries:r,loading:n,salarySearch:h,setSalarySearch:P,salaryStatusFilter:x,setSalaryStatusFilter:f,salaryPage:d,setSalaryPage:i,salaryPageSize:p,salaryTotal:y,selectedSalary:j,fetchSalaryDetails:A,setShowExportDialog:T,formatDate:M,formatCurrency:E,getStatusBadge:m}){return t?e.jsxs(L,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx(J,{className:"text-[#30c0da]",children:"Employee Salaries"}),e.jsxs(va,{children:[t.Reason," • ",M(t.StartDate)," - ",M(t.EndDate)]})]}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Oe,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(ie,{placeholder:"Search employees...",className:"pl-10 w-full",value:h,onChange:c=>{P(c.target.value),i(1)}})]}),e.jsxs(ve,{value:x,onValueChange:c=>{f(c),i(1)},children:[e.jsxs(Ne,{className:"w-[180px]",children:[e.jsx(Je,{className:"w-4 h-4 mr-2"}),e.jsx(we,{placeholder:"Filter by status"})]}),e.jsxs(De,{children:[e.jsx(S,{value:"all",children:"All Statuses"}),e.jsx(S,{value:"Draft",children:"Draft"}),e.jsx(S,{value:"Pending",children:"Pending"}),e.jsx(S,{value:"Approved",children:"Approved"}),e.jsx(S,{value:"Paid",children:"Paid"}),e.jsx(S,{value:"Rejected",children:"Rejected"})]})]}),e.jsxs(u,{variant:"outline",onClick:()=>T(!0),disabled:n.action,children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Export"]})]})]})}),e.jsx(O,{children:n.salaries?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):r.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(_e,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No employee salaries"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"No salaries found for the selected payroll period."})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Ge,{children:[e.jsx(Ve,{children:e.jsxs(ce,{children:[e.jsx(N,{children:"Employee"}),e.jsx(N,{children:"Department"}),e.jsx(N,{children:"Position"}),e.jsx(N,{className:"text-right",children:"Gross Salary"}),e.jsx(N,{className:"text-right",children:"Additions"}),e.jsx(N,{className:"text-right",children:"Deductions"}),e.jsx(N,{className:"text-right",children:"Net Salary"}),e.jsx(N,{children:"Status"}),e.jsx(N,{className:"text-right",children:"Actions"})]})}),e.jsx(Ue,{children:r.map(c=>{const o=c.GrossSalary||0,B=c.TotalDeductions||0,$=c.NetSalary||o-B;return e.jsxs(ce,{children:[e.jsx(w,{className:"font-medium",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-2",children:c.EmployeeName?c.EmployeeName.charAt(0):"?"}),e.jsxs("div",{children:[e.jsx("div",{children:c.EmployeeName}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",c.EmployeeID]})]})]})}),e.jsx(w,{children:c.Department}),e.jsx(w,{children:c.Position}),e.jsx(w,{className:"text-right",children:E(o,c.Currency)}),e.jsx(w,{className:"text-right text-green-600",children:E(c.TotalEarnings||0,c.Currency)}),e.jsxs(w,{className:"text-right text-red-600",children:["-",E(B,c.Currency)]}),e.jsx(w,{className:"text-right font-medium",children:E($,c.Currency)}),e.jsx(w,{children:m(c.Status)}),e.jsx(w,{children:e.jsx("div",{className:"flex justify-end",children:e.jsxs(u,{variant:"ghost",size:"sm",onClick:()=>A(c),disabled:n.details,children:[e.jsx($e,{className:"w-4 h-4 mr-1"}),n.details&&(j==null?void 0:j.SalaryID)===c.SalaryID?"Loading...":"View"]})})})]},c.SalaryID)})})]}),y>p&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(d-1)*p+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(d*p,y)})," ","of ",e.jsx("span",{className:"font-medium",children:y})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>i(c=>Math.max(1,c-1)),disabled:d===1||n.salaries,children:[e.jsx(Ye,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>i(c=>c+1),disabled:d*p>=y||n.salaries,children:["Next ",e.jsx(He,{className:"w-4 h-4 ml-1"})]})]})]})]})})]}):e.jsx(L,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(O,{className:"pt-6",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx(_e,{className:"mx-auto h-12 w-12 text-[#30c0da]"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll selected"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Select a payroll period to view employee salaries."})]})})})}function ka({employeeName:t,employeeId:r,department:n,position:h,salaryMonth:P,salaryDate:x,basicSalary:f,earnings:d,deductions:i,currency:p,companyName:y="Brilliant Medical Center",companyArabic:j="عيادة برلنت لطب الأسنان",onClose:A}){const T=l.useRef(null),[M,E]=l.useState(null),[m,c]=l.useState(null);l.useEffect(()=>{(async()=>{try{const b=await je.getImage("company_logo");b!=null&&b.image_data&&E(b.image_data);const I=await je.getCurrency("global_currency");I!=null&&I.currency&&c(I.currency)}catch(b){console.error("Error fetching company config:",b)}})()},[]);const o=d.reduce((C,b)=>C+(b.amount||0),0),B=i.reduce((C,b)=>C+(b.amount||0),0),$=o-B,_=m||p,Z=()=>{window.print()};return e.jsxs("div",{className:"payslip-wrapper",children:[e.jsx("style",{children:`
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
          }
          
          body {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          .print-controls {
            display: none !important;
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
      `}),e.jsxs("div",{className:"print-controls",children:[A&&e.jsx("button",{onClick:A,className:"px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300 hover:bg-gray-100",children:"Close"}),e.jsxs("button",{onClick:Z,className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors ml-auto",children:[e.jsx(Sa,{size:20}),"Print Payslip"]})]}),e.jsxs("div",{ref:T,className:"payslip-container",children:[e.jsxs("div",{className:"logo-section",children:[M?e.jsx("img",{src:M,alt:"Company Logo",className:"company-logo",style:{width:"100px",height:"90px",objectFit:"contain"}}):e.jsx("div",{className:"logo",children:"◆"}),e.jsxs("div",{className:"company-header flex-1",children:[e.jsx("div",{className:"company-name",children:y}),e.jsx("div",{className:"company-arabic",children:j})]})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee's name:"}),e.jsx("span",{className:"info-value",children:t})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee ID:"}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Department:"}),e.jsx("span",{className:"info-value",children:n})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Position:"}),e.jsx("span",{className:"info-value",children:h})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Salary for month:"}),e.jsx("span",{className:"info-value",children:P})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Date:"}),e.jsx("span",{className:"info-value",children:x})]}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:"Basic Salary"}),e.jsxs("td",{className:"table-amount",children:[_," ",f.toFixed(2)]})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[d.map((C,b)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:C.label}),e.jsx("td",{className:"table-amount",children:C.amount>0?`${_} ${C.amount.toFixed(2)}`:""})]},b)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Gross Salary"}),e.jsxs("td",{className:"table-amount",children:[_," ",o.toFixed(2)]})]})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[i.map((C,b)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:C.label}),e.jsx("td",{className:"table-amount",children:C.amount>0?`${_} ${C.amount.toFixed(2)}`:""})]},b)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Total Deduction:"}),e.jsxs("td",{className:"table-amount",children:[_," ",B.toFixed(3)]})]}),e.jsxs("tr",{className:"net-salary",children:[e.jsx("td",{className:"table-label",children:"Net Salary:"}),e.jsxs("td",{className:"table-amount",children:[_," ",$.toFixed(2)]})]})]})}),e.jsx("div",{className:"annotation-section",children:e.jsx("div",{className:"annotation-label",children:"Annotation"})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-info",style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"20px"},children:[e.jsx("p",{style:{margin:"4px 0"},children:"Building 2358, Road 2830, Block 428, Al Seef-Bahrain"}),e.jsx("p",{style:{margin:"4px 0"},children:"مبنى 2358، طريق 2830، مجمع 428، السيف  مملكة البحرين"}),e.jsx("p",{style:{margin:"4px 0"},children:"16161613 Calls and WhatsApp"})]}),e.jsx("div",{className:"footer",children:e.jsxs("p",{style:{margin:0},children:["© ",new Date().getFullYear()," ",y]})})]})]})}const Xa=()=>{var Me,Fe,Ie;const[t,r]=l.useState("payroll"),[n,h]=l.useState({payroll:!1,salaries:!1,details:!1,action:!1}),[P,x]=l.useState(null),[f,d]=l.useState(null),[i,p]=l.useState(!1),[y,j]=l.useState(null),[A,T]=l.useState(""),[M,E]=l.useState([]),[m,c]=l.useState(null),[o,B]=l.useState(null),[$,_]=l.useState(1),[Z]=l.useState(10),[C,b]=l.useState(0),[I,qe]=l.useState(""),[ee,Xe]=l.useState("all"),[Ke,Qe]=l.useState([]),[H,Ze]=l.useState(null),[k,ea]=l.useState([]),[de,Se]=l.useState(1),[Ce]=l.useState(10),[aa,sa]=l.useState(0),[ae,Pe]=l.useState(""),[se,Ee]=l.useState("all"),[ta,Y]=l.useState(!1),[ra,ke]=l.useState(!1),[la,me]=l.useState(!1),[oa,q]=l.useState(!1);l.useState(!0);const[Aa,na]=l.useState([]),[Ta,ia]=l.useState([]),[Ma,ca]=l.useState(null),[F,te]=l.useState({StartDate:v(ze(new Date),"yyyy-MM-dd"),EndDate:v(Le(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${v(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}),[re,da]=l.useState("pdf"),Ae=async()=>{h(a=>({...a,payroll:!0})),x(null);try{const s={page:Math.max(0,$-1),pageSize:Z,sort:"CreatedDate",order:"desc"};I&&(s.search=I),ee!=="all"&&(s.status=ee);const g=await V.listPayrolls(s);E(g.data),b(g.total)}catch(a){console.error("Error fetching payrolls:",a),x(a.message||"Failed to fetch payrolls")}finally{h(a=>({...a,payroll:!1}))}},ma=async()=>{if(m){h(a=>({...a,salaries:!0})),x(null);try{const a={page:de-1,pageSize:Ce,payrollId:m.PayrollID,field:"EmployeeName",sort:"ASC"};ae&&(a.search=ae),se!=="all"&&(a.status=se);const s=await V.listEmployeeSalaries(a);Qe(s.data),sa(s.total)}catch(a){console.error("Error fetching employee salaries:",a),x(a.message||"Failed to fetch employee salaries")}finally{h(a=>({...a,salaries:!1}))}}},xa=async a=>{Ze(a),h(s=>({...s,details:!0})),x(null),ia([]);try{const s=await V.getSalaryDetails(a.SalaryID);console.log("Salary details response:",s),console.log("Salary components:",s.components),ea(s.components);const g=s.components.filter(le=>!le.IsAdd),he=[...new Map(g.map(le=>[le.ComponentID,le])).values()];na(he),me(!0)}catch(s){console.error("Error fetching salary details:",s),x(s.message||"Failed to fetch salary details")}finally{h(s=>({...s,details:!1}))}},ha=async()=>{if(!F.StartDate||!F.EndDate||!F.Reason){x("Please fill in all required fields");return}h(a=>({...a,action:!0})),x(null);try{const a={...F,Status:"Pending",CreatedBy:1,CreatedDate:v(new Date,"yyyy-MM-dd HH:mm:ss")};await V.createPayroll(a),await Ae(),Y(!1),d("Payroll period created successfully"),te({StartDate:v(ze(new Date),"yyyy-MM-dd"),EndDate:v(Le(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${v(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()})}catch(a){console.error("Error creating payroll:",a),x(a.message||"Failed to create payroll period")}finally{h(a=>({...a,action:!1}))}},pa=async a=>{if(window.confirm(`Are you sure you want to delete payroll for ${R(a.StartDate)} - ${R(a.EndDate)}? This will also delete all associated salary records.`)){h(s=>({...s,action:!0})),x(null);try{await V.deletePayroll(a.PayrollID),E(s=>s.filter(g=>g.PayrollID!==a.PayrollID)),(m==null?void 0:m.PayrollID)===a.PayrollID&&(c(null),r("payroll")),d("Payroll deleted successfully"),setTimeout(()=>d(null),5e3)}catch(s){console.error("Error deleting payroll:",s),x(s.message||"Failed to delete payroll")}finally{h(s=>({...s,action:!1}))}}},ya=async()=>{if(y){h(a=>({...a,action:!0})),x(null);try{await D.update("payroll",y.PayrollID,{Status:"Approved",ApprovedBy:1,ApprovalDate:v(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:A||null}),E(a=>a.map(s=>s.PayrollID===y.PayrollID?{...s,Status:"Approved",ApprovedBy:1,ApprovalDate:v(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:A}:s)),p(!1),j(null),T(""),d("Payroll approved successfully"),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error approving payroll:",a),x(a.message||"Failed to approve payroll")}finally{h(a=>({...a,action:!1}))}}},ua=async()=>{if(m){h(a=>({...a,action:!0})),x(null);try{await V.exportPayroll(m.PayrollID,re),q(!1),d(`Payroll exported successfully as ${re.toUpperCase()}`),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error exporting payroll:",a),x(a.message||"Failed to export payroll")}finally{h(a=>({...a,action:!1}))}}},ga=a=>{c(a),Se(1),Pe(""),Ee("all"),r("salaries")},xe=(a,s="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:s||"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(a||0),R=a=>{if(!a)return"N/A";try{const s=typeof a=="string"?new Date(a):a;return isNaN(s.getTime())?"Invalid Date":s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}},Te=a=>{const g={Draft:{variant:"bg-gray-100 text-gray-800",label:"Draft"},Pending:{variant:"bg-yellow-100 text-yellow-800",label:"Pending"},Approved:{variant:"bg-green-100 text-green-800",label:"Approved"},Rejected:{variant:"bg-red-100 text-red-800",label:"Rejected"},Processing:{variant:"bg-blue-100 text-blue-800",label:"Processing"},Paid:{variant:"bg-purple-100 text-purple-800",label:"Paid"}}[a]||{variant:"bg-gray-100 text-gray-800",label:a};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${g.variant}`,children:g.label})};return l.useEffect(()=>{Ae()},[$,I,ee]),l.useEffect(()=>{(async()=>{try{const s=await je.getCurrency("global_currency");s!=null&&s.currency&&ca(s.currency)}catch(s){console.error("Error fetching global currency:",s)}})()},[]),l.useEffect(()=>{m&&ma()},[m,de,ae,se]),n.payroll&&M.length===0?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(z,{className:"h-8 w-48"}),e.jsx(z,{className:"h-4 w-64"})]}),e.jsx(z,{className:"h-10 w-32"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsx(z,{className:"h-32 w-full"}),e.jsx(z,{className:"h-32 w-full"}),e.jsx(z,{className:"h-32 w-full"})]}),e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx(z,{className:"h-10 w-full md:w-1/3"}),e.jsx("div",{className:"space-y-2",children:Array(5).fill(0).map((a,s)=>e.jsx(z,{className:"h-20 w-full"},s))})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Payroll Management"}),e.jsx("p",{className:"text-gray-600",children:"Manage employee salaries and payroll processing"})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs(u,{onClick:()=>Y(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(We,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}),f&&e.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:f}),e.jsx("button",{onClick:()=>d(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(ge,{className:"w-4 h-4"})})]}),P&&e.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:P}),e.jsx("button",{onClick:()=>x(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(ge,{className:"w-4 h-4"})})]}),e.jsxs(Be,{value:t,onValueChange:r,className:"w-full",children:[e.jsxs(Da,{className:"md:grid md:grid-cols-3 max-w-fit mb-5",children:[e.jsx(W,{value:"payroll",children:"Payroll Periods"}),e.jsxs(W,{value:"salaries",disabled:!m,children:["Employee Salaries",m&&` (${m.Reason})`]}),e.jsx(W,{value:"reports",children:"Reports"})]}),e.jsx(ue,{value:"payroll",className:"space-y-6",children:e.jsx(Pa,{payrolls:M,loading:n,payrollSearch:I,setPayrollSearch:qe,payrollStatusFilter:ee,setPayrollStatusFilter:Xe,payrollPage:$,setPayrollPage:_,payrollPageSize:Z,payrollTotal:C,handleSelectPayroll:ga,handleDeletePayroll:pa,setApprovingPayroll:j,setApprovalComments:T,setShowApproveDialog:p,setShowNewPayrollDialog:Y,formatDate:R,getStatusBadge:Te})}),e.jsx(ue,{value:"salaries",className:"space-y-6",children:e.jsx(Ea,{selectedPayroll:m,salaries:Ke,loading:n,salarySearch:ae,setSalarySearch:Pe,salaryStatusFilter:se,setSalaryStatusFilter:Ee,salaryPage:de,setSalaryPage:Se,salaryPageSize:Ce,salaryTotal:aa,selectedSalary:H,fetchSalaryDetails:xa,setShowExportDialog:q,formatDate:R,formatCurrency:xe,getStatusBadge:Te})}),e.jsx(ue,{value:"reports",className:"space-y-6",children:e.jsx(Ca,{})})]}),e.jsx(X,{open:ta,onOpenChange:Y,children:e.jsxs(K,{className:"sm:max-w-[500px]",children:[e.jsx(oe,{children:e.jsx(ne,{children:"Create New Payroll Period"})}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx(G,{htmlFor:"startDate",children:"Start Date"}),e.jsx(Re,{date:F.StartDate?new Date(F.StartDate):void 0,onChange:a=>{if(!a)return;const s=v(a,"yyyy-MM-dd"),g=new Date(a);g.setMonth(g.getMonth()+1),g.setDate(0),te(he=>({...he,StartDate:s,EndDate:v(g,"yyyy-MM-dd"),TotalDays:Math.ceil((g.getTime()-a.getTime())/(1e3*60*60*24))+1,Reason:`Payroll for ${v(a,"MMMM yyyy")}`}))}})]}),e.jsxs("div",{children:[e.jsx(G,{htmlFor:"endDate",children:"End Date"}),e.jsx(Re,{date:F.EndDate?new Date(F.EndDate):void 0,onChange:a=>{if(!a)return;const s=v(a,"yyyy-MM-dd");te(g=>({...g,EndDate:s,TotalDays:Math.ceil((a.getTime()-new Date(g.StartDate||"").getTime())/(1e3*60*60*24))+1}))}})]}),e.jsxs("div",{children:[e.jsx(G,{htmlFor:"reason",children:"Reason / Description"}),e.jsx(ie,{id:"reason",value:F.Reason,onChange:a=>te(s=>({...s,Reason:a.target.value})),placeholder:"e.g., Monthly Payroll - January 2024"})]}),e.jsxs("div",{children:[e.jsx(G,{children:"Total Days"}),e.jsx(ie,{value:F.TotalDays||"",readOnly:!0,disabled:!0})]})]})}),e.jsxs(pe,{children:[e.jsx(u,{variant:"outline",onClick:()=>Y(!1),disabled:n.action,children:"Cancel"}),e.jsx(u,{onClick:ha,disabled:n.action,children:n.action?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-4 h-4 mr-2 animate-spin"}),"Creating..."]}):"Create Payroll"})]})]})}),e.jsx(X,{open:ra,onOpenChange:ke,children:e.jsxs(K,{className:"sm:max-w-2xl",children:[e.jsxs(oe,{children:[e.jsx(ne,{children:"Payroll Summary"}),m&&e.jsxs(ye,{children:[m.Reason," • ",R(m.StartDate)," - ",R(m.EndDate)]})]}),n.action?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):o?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(L,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"pb-2 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(J,{className:"text-lg text-[#30c0da]",children:"Total Employees"})}),e.jsx(O,{children:e.jsx("div",{className:"text-3xl font-bold text-[#30c0da]",children:o.totalEmployees})})]}),e.jsxs(L,{className:"bg-gradient-to-br from-green-50 to-transparent border-green-200 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 hover:border-green-300",children:[e.jsx(U,{className:"pb-2 bg-gradient-to-r from-green-100 via-green-50 to-transparent border-b border-green-200",children:e.jsx(J,{className:"text-lg text-green-600",children:"Total Gross"})}),e.jsx(O,{children:e.jsx("div",{className:"text-3xl font-bold text-green-600",children:xe(o.totalGross,o.currency)})})]}),e.jsxs(L,{className:"bg-gradient-to-br from-blue-50 to-transparent border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:border-blue-300",children:[e.jsx(U,{className:"pb-2 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent border-b border-blue-200",children:e.jsx(J,{className:"text-lg text-blue-600",children:"Total Net"})}),e.jsx(O,{children:e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:xe(o.totalNet,o.currency)})})]})]}),e.jsxs(L,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(U,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(J,{className:"text-[#30c0da]",children:"Status Breakdown"})}),e.jsx(O,{children:e.jsx("div",{className:"space-y-2",children:Object.entries(o.statusCounts||{}).map(([a,s])=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:a}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-16 text-right",children:s}),e.jsx("div",{className:"ml-2 w-32 bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${s/o.totalEmployees*100}%`}})})]})]},a))})})]}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(u,{variant:"outline",onClick:()=>q(!0),children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Export Report"]}),e.jsx(u,{onClick:()=>{ke(!1),r("salaries")},children:"View Salaries"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No summary data available"})]})}),e.jsx(X,{open:oa,onOpenChange:q,children:e.jsxs(K,{className:"sm:max-w-md",children:[e.jsxs(oe,{children:[e.jsx(ne,{children:"Export Payroll Data"}),m&&e.jsxs(ye,{children:["Export data for ",m.Reason]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(G,{children:"Format"}),e.jsxs(ve,{value:re,onValueChange:a=>da(a),children:[e.jsx(Ne,{className:"w-full",children:e.jsx(we,{placeholder:"Select format"})}),e.jsxs(De,{children:[e.jsx(S,{value:"pdf",children:"PDF Document"}),e.jsx(S,{value:"excel",children:"Excel Spreadsheet"}),e.jsx(S,{value:"csv",children:"CSV File"})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"The export will include all employee salary details for the selected payroll period."})]}),e.jsxs(pe,{className:"sm:justify-between",children:[e.jsx(u,{variant:"outline",onClick:()=>q(!1),disabled:n.action,children:"Cancel"}),e.jsx(u,{onClick:ua,disabled:n.action,children:n.action?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-4 h-4 mr-2 animate-spin"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Export ",re.toUpperCase()]})})]})]})}),e.jsx(X,{open:la,onOpenChange:me,children:e.jsx(K,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:n.details?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):H&&m&&k.length>0?e.jsx(ka,{employeeName:`${k[0].employees_FirstName||""} ${k[0].employees_LastName||""}`.trim()||H.EmployeeName,employeeId:String(k[0].employees_EmployeeID||H.EmployeeID),department:k[0].employees_Department||H.Department,position:k[0].job_JobName||H.Position,salaryMonth:v(m.StartDate,"MMMM yyyy"),salaryDate:v(m.EndDate,"dd-MM-yyyy"),basicSalary:((Me=k.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("basic")}))==null?void 0:Me.Amount)||((Fe=k.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("main salary")}))==null?void 0:Fe.Amount)||((Ie=k.filter(a=>a.IsAdd)[0])==null?void 0:Ie.Amount)||0,earnings:k.filter(a=>{var s;return a.IsAdd&&!((s=a.contractpaytype_ContractPayTypeName)!=null&&s.toLowerCase().includes("basic"))}).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),deductions:k.filter(a=>!a.IsAdd).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),currency:k[0].Currency||H.Currency||"BHD",onClose:()=>me(!1)}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No salary details available"})})}),e.jsx(X,{open:i,onOpenChange:p,children:e.jsxs(K,{className:"sm:max-w-md",children:[e.jsxs(oe,{children:[e.jsx(ne,{children:"Approve Payroll"}),y&&e.jsxs(ye,{children:["Approve payroll for ",R(y.StartDate)," - ",R(y.EndDate),e.jsx("br",{}),e.jsx("strong",{children:"Reason:"})," ",y.Reason]})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{children:[e.jsx(G,{htmlFor:"approvalComments",children:"Approval Comments (Optional)"}),e.jsx("textarea",{id:"approvalComments",value:A,onChange:a=>T(a.target.value),placeholder:"Add any comments or notes about this approval...",className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none",rows:4})]}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(fe,{className:"h-5 w-5 text-blue-400"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Payroll Approval"}),e.jsx("div",{className:"mt-2 text-sm text-blue-700",children:e.jsx("p",{children:'This will approve the payroll and update the status to "Approved". The approval details will be recorded in the system.'})})]})]})})]}),e.jsxs(pe,{className:"sm:justify-between",children:[e.jsx(u,{variant:"outline",onClick:()=>{p(!1),j(null),T("")},disabled:n.action,children:"Cancel"}),e.jsx(u,{onClick:ya,disabled:n.action,className:"bg-green-600 hover:bg-green-700 text-white",children:n.action?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-4 h-4 mr-2 animate-spin"}),"Approving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(fe,{className:"w-4 h-4 mr-2"}),"Approve Payroll"]})})]})]})})]})};export{Xa as default};

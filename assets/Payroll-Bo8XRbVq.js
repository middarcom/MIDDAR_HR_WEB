import{p as fa,r,j as e,C as L,l as O,t as N,i as U,k as J,S as Oe,I as ie,F as ga,B as u,o as ba,ag as $e,L as Q,aj as je,ai as fe,a6 as He,U as _e,m as Na,b4 as ge,D as X,a as K,b as ne,c as oe,a2 as G,a3 as he,d as ye}from"./index-D-2oGfm2.js";import{R as va}from"./ReportViewer-C3cVUkqt.js";import{T as Be,a as wa,b as W,c as ue}from"./tabs-B4d34lHz.js";import{a as D}from"./api-yQydEdB1.js";import{S as z}from"./skeleton-CTEGeFzV.js";import{S as Da}from"./ScrollableTabs-DU4CUnhW.js";import{S as Ne,a as ve,b as we,c as De,d as S}from"./select-Dx4ckqJH.js";import{C as Re}from"./date-picker-BrhKvW_Q.js";import{T as Ge,a as Ve,b as ce,c as v,d as Ue,e as w}from"./table-BC7xV7IS.js";import{F as Je}from"./filter-Ckjuk7gv.js";import{P as We}from"./plus-BoQkq124.js";import{C as Ye}from"./chevron-left-DUeJIxoc.js";import{D as be}from"./download-BV9Y66Cl.js";import{s as ze,a as Le}from"./popover-CicNmWyn.js";import"./alert-DqYUOjJK.js";import"./index-hJpNuoTJ.js";import"./getDaysInMonth-aWk4UZRu.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=fa("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),Ca=()=>{const[t,l]=r.useState("payroll_summary"),[o,p]=r.useState([]);r.useEffect(()=>{(async()=>{try{const y=((await D.list("payroll",{sort:"StartDate DESC",pageSize:100})).data||[]).map(g=>({label:`${g.Reason} (${g.StartDate} - ${g.EndDate})`,value:String(g.PayrollID)}));p(y)}catch(h){console.error("Failed to fetch payrolls for reports",h)}})()},[]);const P=[{key:"start_date",label:"Start Date",type:"date",defaultValue:new Date(new Date().getFullYear(),0,1).toISOString().split("T")[0]},{key:"end_date",label:"End Date",type:"date",defaultValue:new Date().toISOString().split("T")[0]}],x=[{key:"payroll_id",label:"Select Payroll",type:"select",options:o}],d={payroll_summary:{type:"payroll_summary",title:"Payroll Summary Report",description:"Overview of payroll periods within a date range.",columns:[{key:"PayrollID",label:"ID"},{key:"Description",label:"Description"},{key:"StartDate",label:"Start Date",format:i=>i?new Date(i).toLocaleDateString():"-"},{key:"EndDate",label:"End Date",format:i=>i?new Date(i).toLocaleDateString():"-"},{key:"TotalDays",label:"Days"},{key:"Status",label:"Status"},{key:"CreatedDate",label:"Created On",format:i=>i?new Date(i).toLocaleDateString():"-"}],filters:P},payroll_salary_sheet:{type:"payroll_salary_sheet",title:"Payroll Salary Sheet",description:"Detailed salary sheet for a specific payroll period.",columns:[{key:"EmployeeID",label:"ID"},{key:"EmployeeName",label:"Name"},{key:"NationalID",label:"National ID"},{key:"TotalHoursWorked",label:"Hours"},{key:"OvertimeHours",label:"Overtime"},{key:"AbsentHours",label:"Absent"},{key:"Currency",label:"Currency"},{key:"GrossSalary",label:"Gross",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"NetSalary",label:"Net Pay",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})}],filters:x},payroll_components_breakdown:{type:"payroll_components_breakdown",title:"Payroll Components Breakdown",description:"Detailed list of additions and deductions per employee for a specific payroll.",columns:[{key:"EmployeeName",label:"Name"},{key:"ComponentName",label:"Component"},{key:"ComponentType",label:"Type",format:i=>e.jsx("span",{className:i==="Addition"?"text-green-600":"text-red-600",children:i})},{key:"Amount",label:"Amount",format:i=>Number(i).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"Currency",label:"Curr"},{key:"Notes",label:"Notes"}],filters:x}}[t];return e.jsxs("div",{className:"space-y-6",children:[e.jsx(L,{children:e.jsx(O,{className:"p-4",children:e.jsx(Be,{value:t,onValueChange:l,className:"w-full",children:e.jsxs(wa,{className:"grid w-full grid-cols-1 md:grid-cols-3",children:[e.jsx(W,{value:"payroll_summary",children:"Payroll Summary"}),e.jsx(W,{value:"payroll_salary_sheet",children:"Salary Sheet"}),e.jsx(W,{value:"payroll_components_breakdown",children:"Components Breakdown"})]})})})}),e.jsx(va,{reportType:d.type,title:d.title,description:d.description,columns:d.columns,filterFields:d.filters,disableAutoFetch:!0})]})},V={listPayrolls:async(t={})=>{const l=typeof t.page=="number"?t.page:0;return await D.list("payroll",{page:l,pageSize:t.pageSize||10,sort:"DESC",...t.filters||{}})},listEmployeeSalaries:async(t={})=>{const l=await D.list("employeesalary",{page:t.page||0,pageSize:t.pageSize||10,sort:"ASC",field:"EmployeeID",...t.payrollId&&{exact_filters:JSON.stringify({Payroll:t.payrollId})},...t.employeeName&&{EmployeeName:{$like:`%${t.employeeName}%`}},...t.department&&{Department:t.department},...t.status&&{Status:t.status}});if(l.data&&l.data.length>0){const o=await Promise.all(l.data.map(async p=>{try{const x=(await D.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:p.SalaryID}),sort:"ASC"})).data.reduce((f,d)=>(d.IsAdd?f.additions+=d.Amount||0:f.deductions+=d.Amount||0,f),{additions:0,deductions:0});return{...p,TotalEarnings:x.additions,TotalDeductions:x.deductions}}catch(P){return console.error("Error fetching salary components:",P),p}}));return{...l,data:o}}return l},getSalaryDetails:async t=>{const l=await D.get("employeesalary",t),o=await D.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:t}),sort:"ASC",pageSize:1e3});return{...l,components:o.data||[]}},createPayroll:async t=>await D.create("payroll",{...t,Status:"Pending",CreatedBy:1}),deletePayroll:async t=>(await D.list("employeesalary",{exact_filters:JSON.stringify({PayrollID:t}),sort:"ASC",pageSize:1e3}),await D.delete("payroll",t)),approvePayroll:async(t,l)=>await D.update("payroll",t,{Status:"Approved",ApprovedBy:l,ApprovalDate:N(new Date,"yyyy-MM-dd HH:mm:ss")}),exportPayroll:async(t,l="pdf")=>await D.get(`payroll/export/${t}`,{format:l}),getPayrollSummary:async t=>{try{return await D.get("payroll/summary",{payrollId:t})}catch(l){throw console.error("Error fetching payroll summary:",l),l}},updatePayrollStatus:async(t,l)=>await D.update("payroll",t,l),getEmployeeDeductionTypes:async t=>{try{return(await D.list("contractpaytype",{filters:JSON.stringify({EmployeeID:t}),sort:"ASC"})).data||[]}catch(l){return console.error("Error fetching deduction types:",l),[]}}};function Pa({payrolls:t,loading:l,payrollSearch:o,setPayrollSearch:p,payrollStatusFilter:P,setPayrollStatusFilter:x,payrollPage:f,setPayrollPage:d,payrollPageSize:i,payrollTotal:h,handleSelectPayroll:y,handleDeletePayroll:g,setApprovingPayroll:A,setApprovalComments:T,setShowApproveDialog:M,setShowNewPayrollDialog:E,formatDate:m,getStatusBadge:c}){return e.jsxs(L,{children:[e.jsx(U,{children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsx(J,{children:"Payroll Periods"}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Oe,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(ie,{placeholder:"Search payrolls...",className:"pl-10 w-full",value:o,onChange:n=>{p(n.target.value),d(1)}})]}),e.jsxs(Ne,{value:P,onValueChange:n=>{x(n),d(1)},children:[e.jsxs(ve,{className:"w-[180px]",children:[e.jsx(Je,{className:"w-4 h-4 mr-2"}),e.jsx(we,{placeholder:"Filter by status"})]}),e.jsxs(De,{children:[e.jsx(S,{value:"all",children:"All Statuses"}),e.jsx(S,{value:"Draft",children:"Draft"}),e.jsx(S,{value:"Pending",children:"Pending"}),e.jsx(S,{value:"Approved",children:"Approved"}),e.jsx(S,{value:"Rejected",children:"Rejected"}),e.jsx(S,{value:"Processing",children:"Processing"})]})]})]})]})}),e.jsx(O,{children:l.payroll?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):t.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(ga,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll periods"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Get started by creating a new payroll period."}),e.jsx("div",{className:"mt-6",children:e.jsxs(u,{onClick:()=>E(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(We,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Ge,{children:[e.jsx(Ve,{children:e.jsxs(ce,{children:[e.jsx(v,{children:"ID"}),e.jsx(v,{children:"Period"}),e.jsx(v,{children:"Days"}),e.jsx(v,{children:"Reason"}),e.jsx(v,{children:"Status"}),e.jsx(v,{children:"Created"}),e.jsx(v,{className:"text-right",children:"Actions"})]})}),e.jsx(Ue,{children:t.map(n=>e.jsxs(ce,{children:[e.jsxs(w,{className:"font-medium",children:["#",n.PayrollID]}),e.jsx(w,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(ba,{className:"w-4 h-4 mr-2 text-gray-500"}),m(new Date(n.StartDate))," - ",m(new Date(n.EndDate))]})}),e.jsx(w,{children:n.TotalDays}),e.jsx(w,{className:"max-w-xs truncate",children:n.Reason}),e.jsx(w,{children:c(n.Status)}),e.jsx(w,{children:m(new Date(n.CreatedDate))}),e.jsx(w,{children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>y(n),children:[e.jsx($e,{className:"w-4 h-4 mr-1"})," View"]}),(n.Status==="Draft"||n.Status==="Pending")&&e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>g(n),disabled:l.action,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[l.action?e.jsx(Q,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(je,{className:"w-4 h-4 mr-1"}),"Delete"]}),(n.Status==="Pending"||n.Status==="Processing")&&e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>{A(n),T(""),M(!0)},disabled:l.action,className:"text-green-600 hover:text-green-700 hover:bg-green-50",children:[l.action?e.jsx(Q,{className:"w-4 h-4 mr-1 animate-spin"}):e.jsx(fe,{className:"w-4 h-4 mr-1"}),"Approve"]})]})})]},n.PayrollID))})]}),h>i&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(f-1)*i+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(f*i,h)})," ","of ",e.jsx("span",{className:"font-medium",children:h})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>d(n=>Math.max(1,n-1)),disabled:f===1||l.payroll,children:[e.jsx(Ye,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>d(n=>n+1),disabled:f*i>=h||l.payroll,children:["Next ",e.jsx(He,{className:"w-4 h-4 ml-1"})]})]})]})]})})]})}function Ea({selectedPayroll:t,salaries:l,loading:o,salarySearch:p,setSalarySearch:P,salaryStatusFilter:x,setSalaryStatusFilter:f,salaryPage:d,setSalaryPage:i,salaryPageSize:h,salaryTotal:y,selectedSalary:g,fetchSalaryDetails:A,setShowExportDialog:T,formatDate:M,formatCurrency:E,getStatusBadge:m}){return t?e.jsxs(L,{children:[e.jsx(U,{children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx(J,{children:"Employee Salaries"}),e.jsxs(Na,{children:[t.Reason," • ",M(t.StartDate)," - ",M(t.EndDate)]})]}),e.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(Oe,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(ie,{placeholder:"Search employees...",className:"pl-10 w-full",value:p,onChange:c=>{P(c.target.value),i(1)}})]}),e.jsxs(Ne,{value:x,onValueChange:c=>{f(c),i(1)},children:[e.jsxs(ve,{className:"w-[180px]",children:[e.jsx(Je,{className:"w-4 h-4 mr-2"}),e.jsx(we,{placeholder:"Filter by status"})]}),e.jsxs(De,{children:[e.jsx(S,{value:"all",children:"All Statuses"}),e.jsx(S,{value:"Draft",children:"Draft"}),e.jsx(S,{value:"Pending",children:"Pending"}),e.jsx(S,{value:"Approved",children:"Approved"}),e.jsx(S,{value:"Paid",children:"Paid"}),e.jsx(S,{value:"Rejected",children:"Rejected"})]})]}),e.jsxs(u,{variant:"outline",onClick:()=>T(!0),disabled:o.action,children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Export"]})]})]})}),e.jsx(O,{children:o.salaries?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):l.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(_e,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No employee salaries"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"No salaries found for the selected payroll period."})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(Ge,{children:[e.jsx(Ve,{children:e.jsxs(ce,{children:[e.jsx(v,{children:"Employee"}),e.jsx(v,{children:"Department"}),e.jsx(v,{children:"Position"}),e.jsx(v,{className:"text-right",children:"Gross Salary"}),e.jsx(v,{className:"text-right",children:"Additions"}),e.jsx(v,{className:"text-right",children:"Deductions"}),e.jsx(v,{className:"text-right",children:"Net Salary"}),e.jsx(v,{children:"Status"}),e.jsx(v,{className:"text-right",children:"Actions"})]})}),e.jsx(Ue,{children:l.map(c=>{const n=c.GrossSalary||0,B=c.TotalDeductions||0,$=c.NetSalary||n-B;return e.jsxs(ce,{children:[e.jsx(w,{className:"font-medium",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-2",children:c.EmployeeName?c.EmployeeName.charAt(0):"?"}),e.jsxs("div",{children:[e.jsx("div",{children:c.EmployeeName}),e.jsxs("div",{className:"text-xs text-gray-500",children:["ID: ",c.EmployeeID]})]})]})}),e.jsx(w,{children:c.Department}),e.jsx(w,{children:c.Position}),e.jsx(w,{className:"text-right",children:E(n,c.Currency)}),e.jsx(w,{className:"text-right text-green-600",children:E(c.TotalEarnings||0,c.Currency)}),e.jsxs(w,{className:"text-right text-red-600",children:["-",E(B,c.Currency)]}),e.jsx(w,{className:"text-right font-medium",children:E($,c.Currency)}),e.jsx(w,{children:m(c.Status)}),e.jsx(w,{children:e.jsx("div",{className:"flex justify-end",children:e.jsxs(u,{variant:"ghost",size:"sm",onClick:()=>A(c),disabled:o.details,children:[e.jsx($e,{className:"w-4 h-4 mr-1"}),o.details&&(g==null?void 0:g.SalaryID)===c.SalaryID?"Loading...":"View"]})})})]},c.SalaryID)})})]}),y>h&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsxs("div",{className:"text-sm text-gray-700",children:["Showing ",e.jsx("span",{className:"font-medium",children:(d-1)*h+1})," to"," ",e.jsx("span",{className:"font-medium",children:Math.min(d*h,y)})," ","of ",e.jsx("span",{className:"font-medium",children:y})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>i(c=>Math.max(1,c-1)),disabled:d===1||o.salaries,children:[e.jsx(Ye,{className:"w-4 h-4 mr-1"})," Previous"]}),e.jsxs(u,{variant:"outline",size:"sm",onClick:()=>i(c=>c+1),disabled:d*h>=y||o.salaries,children:["Next ",e.jsx(He,{className:"w-4 h-4 ml-1"})]})]})]})]})})]}):e.jsx(L,{children:e.jsx(O,{className:"pt-6",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx(_e,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No payroll selected"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Select a payroll period to view employee salaries."})]})})})}function ka({employeeName:t,employeeId:l,department:o,position:p,salaryMonth:P,salaryDate:x,basicSalary:f,earnings:d,deductions:i,currency:h,companyName:y="Brilliant Medical Center",companyArabic:g="عيادة برلنت لطب الأسنان",onClose:A}){const T=r.useRef(null),[M,E]=r.useState(null),[m,c]=r.useState(null);r.useEffect(()=>{(async()=>{try{const b=await ge.getImage("company_logo");b!=null&&b.image_data&&E(b.image_data);const I=await ge.getCurrency("global_currency");I!=null&&I.currency&&c(I.currency)}catch(b){console.error("Error fetching company config:",b)}})()},[]);const n=d.reduce((C,b)=>C+(b.amount||0),0),B=i.reduce((C,b)=>C+(b.amount||0),0),$=n-B,_=m||h,Z=()=>{window.print()};return e.jsxs("div",{className:"payslip-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"print-controls",children:[A&&e.jsx("button",{onClick:A,className:"px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300 hover:bg-gray-100",children:"Close"}),e.jsxs("button",{onClick:Z,className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors ml-auto",children:[e.jsx(Sa,{size:20}),"Print Payslip"]})]}),e.jsxs("div",{ref:T,className:"payslip-container",children:[e.jsxs("div",{className:"logo-section",children:[M?e.jsx("img",{src:M,alt:"Company Logo",className:"company-logo",style:{width:"100px",height:"90px",objectFit:"contain"}}):e.jsx("div",{className:"logo",children:"◆"}),e.jsxs("div",{className:"company-header flex-1",children:[e.jsx("div",{className:"company-name",children:y}),e.jsx("div",{className:"company-arabic",children:g})]})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee's name:"}),e.jsx("span",{className:"info-value",children:t})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Employee ID:"}),e.jsx("span",{className:"info-value",children:l})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Department:"}),e.jsx("span",{className:"info-value",children:o})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Position:"}),e.jsx("span",{className:"info-value",children:p})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Salary for month:"}),e.jsx("span",{className:"info-value",children:P})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Date:"}),e.jsx("span",{className:"info-value",children:x})]}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:"Basic Salary"}),e.jsxs("td",{className:"table-amount",children:[_," ",f.toFixed(2)]})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[d.map((C,b)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:C.label}),e.jsx("td",{className:"table-amount",children:C.amount>0?`${_} ${C.amount.toFixed(2)}`:""})]},b)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Gross Salary"}),e.jsxs("td",{className:"table-amount",children:[_," ",n.toFixed(2)]})]})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[i.map((C,b)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:C.label}),e.jsx("td",{className:"table-amount",children:C.amount>0?`${_} ${C.amount.toFixed(2)}`:""})]},b)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:"Total Deduction:"}),e.jsxs("td",{className:"table-amount",children:[_," ",B.toFixed(3)]})]}),e.jsxs("tr",{className:"net-salary",children:[e.jsx("td",{className:"table-label",children:"Net Salary:"}),e.jsxs("td",{className:"table-amount",children:[_," ",$.toFixed(2)]})]})]})}),e.jsx("div",{className:"annotation-section",children:e.jsx("div",{className:"annotation-label",children:"Annotation"})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-info",style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"20px"},children:[e.jsx("p",{style:{margin:"4px 0"},children:"Building 2358, Road 2830, Block 428, Al Seef-Bahrain"}),e.jsx("p",{style:{margin:"4px 0"},children:"مبنى 2358، طريق 2830، مجمع 428، السيف  مملكة البحرين"}),e.jsx("p",{style:{margin:"4px 0"},children:"16161613 Calls and WhatsApp"})]}),e.jsx("div",{className:"footer",children:e.jsxs("p",{style:{margin:0},children:["© ",new Date().getFullYear()," ",y]})})]})]})}const Xa=()=>{var Me,Fe,Ie;const[t,l]=r.useState("payroll"),[o,p]=r.useState({payroll:!1,salaries:!1,details:!1,action:!1}),[P,x]=r.useState(null),[f,d]=r.useState(null),[i,h]=r.useState(!1),[y,g]=r.useState(null),[A,T]=r.useState(""),[M,E]=r.useState([]),[m,c]=r.useState(null),[n,B]=r.useState(null),[$,_]=r.useState(1),[Z]=r.useState(10),[C,b]=r.useState(0),[I,qe]=r.useState(""),[ee,Xe]=r.useState("all"),[Ke,Qe]=r.useState([]),[H,Ze]=r.useState(null),[k,ea]=r.useState([]),[de,Se]=r.useState(1),[Ce]=r.useState(10),[aa,sa]=r.useState(0),[ae,Pe]=r.useState(""),[se,Ee]=r.useState("all"),[ta,Y]=r.useState(!1),[la,ke]=r.useState(!1),[ra,me]=r.useState(!1),[na,q]=r.useState(!1);r.useState(!0);const[Aa,oa]=r.useState([]),[Ta,ia]=r.useState([]),[Ma,ca]=r.useState(null),[F,te]=r.useState({StartDate:N(ze(new Date),"yyyy-MM-dd"),EndDate:N(Le(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${N(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}),[le,da]=r.useState("pdf"),Ae=async()=>{p(a=>({...a,payroll:!0})),x(null);try{const s={page:Math.max(0,$-1),pageSize:Z,sort:"CreatedDate",order:"desc"};I&&(s.search=I),ee!=="all"&&(s.status=ee);const j=await V.listPayrolls(s);E(j.data),b(j.total)}catch(a){console.error("Error fetching payrolls:",a),x(a.message||"Failed to fetch payrolls")}finally{p(a=>({...a,payroll:!1}))}},ma=async()=>{if(m){p(a=>({...a,salaries:!0})),x(null);try{const a={page:de-1,pageSize:Ce,payrollId:m.PayrollID,field:"EmployeeName",sort:"ASC"};ae&&(a.search=ae),se!=="all"&&(a.status=se);const s=await V.listEmployeeSalaries(a);Qe(s.data),sa(s.total)}catch(a){console.error("Error fetching employee salaries:",a),x(a.message||"Failed to fetch employee salaries")}finally{p(a=>({...a,salaries:!1}))}}},xa=async a=>{Ze(a),p(s=>({...s,details:!0})),x(null),ia([]);try{const s=await V.getSalaryDetails(a.SalaryID);console.log("Salary details response:",s),console.log("Salary components:",s.components),ea(s.components);const j=s.components.filter(re=>!re.IsAdd),pe=[...new Map(j.map(re=>[re.ComponentID,re])).values()];oa(pe),me(!0)}catch(s){console.error("Error fetching salary details:",s),x(s.message||"Failed to fetch salary details")}finally{p(s=>({...s,details:!1}))}},pa=async()=>{if(!F.StartDate||!F.EndDate||!F.Reason){x("Please fill in all required fields");return}p(a=>({...a,action:!0})),x(null);try{const a={...F,Status:"Pending",CreatedBy:1,CreatedDate:N(new Date,"yyyy-MM-dd HH:mm:ss")};await V.createPayroll(a),await Ae(),Y(!1),d("Payroll period created successfully"),te({StartDate:N(ze(new Date),"yyyy-MM-dd"),EndDate:N(Le(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${N(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()})}catch(a){console.error("Error creating payroll:",a),x(a.message||"Failed to create payroll period")}finally{p(a=>({...a,action:!1}))}},ha=async a=>{if(window.confirm(`Are you sure you want to delete payroll for ${R(a.StartDate)} - ${R(a.EndDate)}? This will also delete all associated salary records.`)){p(s=>({...s,action:!0})),x(null);try{await V.deletePayroll(a.PayrollID),E(s=>s.filter(j=>j.PayrollID!==a.PayrollID)),(m==null?void 0:m.PayrollID)===a.PayrollID&&(c(null),l("payroll")),d("Payroll deleted successfully"),setTimeout(()=>d(null),5e3)}catch(s){console.error("Error deleting payroll:",s),x(s.message||"Failed to delete payroll")}finally{p(s=>({...s,action:!1}))}}},ya=async()=>{if(y){p(a=>({...a,action:!0})),x(null);try{await D.update("payroll",y.PayrollID,{Status:"Approved",ApprovedBy:1,ApprovalDate:N(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:A||null}),E(a=>a.map(s=>s.PayrollID===y.PayrollID?{...s,Status:"Approved",ApprovedBy:1,ApprovalDate:N(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:A}:s)),h(!1),g(null),T(""),d("Payroll approved successfully"),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error approving payroll:",a),x(a.message||"Failed to approve payroll")}finally{p(a=>({...a,action:!1}))}}},ua=async()=>{if(m){p(a=>({...a,action:!0})),x(null);try{await V.exportPayroll(m.PayrollID,le),q(!1),d(`Payroll exported successfully as ${le.toUpperCase()}`),setTimeout(()=>d(null),5e3)}catch(a){console.error("Error exporting payroll:",a),x(a.message||"Failed to export payroll")}finally{p(a=>({...a,action:!1}))}}},ja=a=>{c(a),Se(1),Pe(""),Ee("all"),l("salaries")},xe=(a,s="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:s||"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(a||0),R=a=>{if(!a)return"N/A";try{const s=typeof a=="string"?new Date(a):a;return isNaN(s.getTime())?"Invalid Date":s.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(s){return console.error("Error formatting date:",s),"Invalid Date"}},Te=a=>{const j={Draft:{variant:"bg-gray-100 text-gray-800",label:"Draft"},Pending:{variant:"bg-yellow-100 text-yellow-800",label:"Pending"},Approved:{variant:"bg-green-100 text-green-800",label:"Approved"},Rejected:{variant:"bg-red-100 text-red-800",label:"Rejected"},Processing:{variant:"bg-blue-100 text-blue-800",label:"Processing"},Paid:{variant:"bg-purple-100 text-purple-800",label:"Paid"}}[a]||{variant:"bg-gray-100 text-gray-800",label:a};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${j.variant}`,children:j.label})};return r.useEffect(()=>{Ae()},[$,I,ee]),r.useEffect(()=>{(async()=>{try{const s=await ge.getCurrency("global_currency");s!=null&&s.currency&&ca(s.currency)}catch(s){console.error("Error fetching global currency:",s)}})()},[]),r.useEffect(()=>{m&&ma()},[m,de,ae,se]),o.payroll&&M.length===0?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(z,{className:"h-8 w-48"}),e.jsx(z,{className:"h-4 w-64"})]}),e.jsx(z,{className:"h-10 w-32"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsx(z,{className:"h-32 w-full"}),e.jsx(z,{className:"h-32 w-full"}),e.jsx(z,{className:"h-32 w-full"})]}),e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx(z,{className:"h-10 w-full md:w-1/3"}),e.jsx("div",{className:"space-y-2",children:Array(5).fill(0).map((a,s)=>e.jsx(z,{className:"h-20 w-full"},s))})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Payroll Management"}),e.jsx("p",{className:"text-gray-600",children:"Manage employee salaries and payroll processing"})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs(u,{onClick:()=>Y(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(We,{className:"w-4 h-4 mr-2"}),"New Payroll Period"]})})]}),f&&e.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:f}),e.jsx("button",{onClick:()=>d(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(je,{className:"w-4 h-4"})})]}),P&&e.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:P}),e.jsx("button",{onClick:()=>x(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(je,{className:"w-4 h-4"})})]}),e.jsxs(Be,{value:t,onValueChange:l,className:"w-full",children:[e.jsxs(Da,{className:"md:grid md:grid-cols-3 max-w-fit mb-5",children:[e.jsx(W,{value:"payroll",children:"Payroll Periods"}),e.jsxs(W,{value:"salaries",disabled:!m,children:["Employee Salaries",m&&` (${m.Reason})`]}),e.jsx(W,{value:"reports",children:"Reports"})]}),e.jsx(ue,{value:"payroll",className:"space-y-6",children:e.jsx(Pa,{payrolls:M,loading:o,payrollSearch:I,setPayrollSearch:qe,payrollStatusFilter:ee,setPayrollStatusFilter:Xe,payrollPage:$,setPayrollPage:_,payrollPageSize:Z,payrollTotal:C,handleSelectPayroll:ja,handleDeletePayroll:ha,setApprovingPayroll:g,setApprovalComments:T,setShowApproveDialog:h,setShowNewPayrollDialog:Y,formatDate:R,getStatusBadge:Te})}),e.jsx(ue,{value:"salaries",className:"space-y-6",children:e.jsx(Ea,{selectedPayroll:m,salaries:Ke,loading:o,salarySearch:ae,setSalarySearch:Pe,salaryStatusFilter:se,setSalaryStatusFilter:Ee,salaryPage:de,setSalaryPage:Se,salaryPageSize:Ce,salaryTotal:aa,selectedSalary:H,fetchSalaryDetails:xa,setShowExportDialog:q,formatDate:R,formatCurrency:xe,getStatusBadge:Te})}),e.jsx(ue,{value:"reports",className:"space-y-6",children:e.jsx(Ca,{})})]}),e.jsx(X,{open:ta,onOpenChange:Y,children:e.jsxs(K,{className:"sm:max-w-[500px]",children:[e.jsx(ne,{children:e.jsx(oe,{children:"Create New Payroll Period"})}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx(G,{htmlFor:"startDate",children:"Start Date"}),e.jsx(Re,{date:F.StartDate?new Date(F.StartDate):void 0,onChange:a=>{if(!a)return;const s=N(a,"yyyy-MM-dd"),j=new Date(a);j.setMonth(j.getMonth()+1),j.setDate(0),te(pe=>({...pe,StartDate:s,EndDate:N(j,"yyyy-MM-dd"),TotalDays:Math.ceil((j.getTime()-a.getTime())/(1e3*60*60*24))+1,Reason:`Payroll for ${N(a,"MMMM yyyy")}`}))}})]}),e.jsxs("div",{children:[e.jsx(G,{htmlFor:"endDate",children:"End Date"}),e.jsx(Re,{date:F.EndDate?new Date(F.EndDate):void 0,onChange:a=>{if(!a)return;const s=N(a,"yyyy-MM-dd");te(j=>({...j,EndDate:s,TotalDays:Math.ceil((a.getTime()-new Date(j.StartDate||"").getTime())/(1e3*60*60*24))+1}))}})]}),e.jsxs("div",{children:[e.jsx(G,{htmlFor:"reason",children:"Reason / Description"}),e.jsx(ie,{id:"reason",value:F.Reason,onChange:a=>te(s=>({...s,Reason:a.target.value})),placeholder:"e.g., Monthly Payroll - January 2024"})]}),e.jsxs("div",{children:[e.jsx(G,{children:"Total Days"}),e.jsx(ie,{value:F.TotalDays||"",readOnly:!0,disabled:!0})]})]})}),e.jsxs(he,{children:[e.jsx(u,{variant:"outline",onClick:()=>Y(!1),disabled:o.action,children:"Cancel"}),e.jsx(u,{onClick:pa,disabled:o.action,children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-4 h-4 mr-2 animate-spin"}),"Creating..."]}):"Create Payroll"})]})]})}),e.jsx(X,{open:la,onOpenChange:ke,children:e.jsxs(K,{className:"sm:max-w-2xl",children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Payroll Summary"}),m&&e.jsxs(ye,{children:[m.Reason," • ",R(m.StartDate)," - ",R(m.EndDate)]})]}),o.action?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):n?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(L,{children:[e.jsx(U,{className:"pb-2",children:e.jsx(J,{className:"text-lg",children:"Total Employees"})}),e.jsx(O,{children:e.jsx("div",{className:"text-3xl font-bold",children:n.totalEmployees})})]}),e.jsxs(L,{children:[e.jsx(U,{className:"pb-2",children:e.jsx(J,{className:"text-lg",children:"Total Gross"})}),e.jsx(O,{children:e.jsx("div",{className:"text-3xl font-bold",children:xe(n.totalGross,n.currency)})})]}),e.jsxs(L,{children:[e.jsx(U,{className:"pb-2",children:e.jsx(J,{className:"text-lg",children:"Total Net"})}),e.jsx(O,{children:e.jsx("div",{className:"text-3xl font-bold",children:xe(n.totalNet,n.currency)})})]})]}),e.jsxs(L,{children:[e.jsx(U,{children:e.jsx(J,{children:"Status Breakdown"})}),e.jsx(O,{children:e.jsx("div",{className:"space-y-2",children:Object.entries(n.statusCounts||{}).map(([a,s])=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:a}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-16 text-right",children:s}),e.jsx("div",{className:"ml-2 w-32 bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${s/n.totalEmployees*100}%`}})})]})]},a))})})]}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsxs(u,{variant:"outline",onClick:()=>q(!0),children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Export Report"]}),e.jsx(u,{onClick:()=>{ke(!1),l("salaries")},children:"View Salaries"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No summary data available"})]})}),e.jsx(X,{open:na,onOpenChange:q,children:e.jsxs(K,{className:"sm:max-w-md",children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Export Payroll Data"}),m&&e.jsxs(ye,{children:["Export data for ",m.Reason]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(G,{children:"Format"}),e.jsxs(Ne,{value:le,onValueChange:a=>da(a),children:[e.jsx(ve,{className:"w-full",children:e.jsx(we,{placeholder:"Select format"})}),e.jsxs(De,{children:[e.jsx(S,{value:"pdf",children:"PDF Document"}),e.jsx(S,{value:"excel",children:"Excel Spreadsheet"}),e.jsx(S,{value:"csv",children:"CSV File"})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"The export will include all employee salary details for the selected payroll period."})]}),e.jsxs(he,{className:"sm:justify-between",children:[e.jsx(u,{variant:"outline",onClick:()=>q(!1),disabled:o.action,children:"Cancel"}),e.jsx(u,{onClick:ua,disabled:o.action,children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-4 h-4 mr-2 animate-spin"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-4 h-4 mr-2"}),"Export ",le.toUpperCase()]})})]})]})}),e.jsx(X,{open:ra,onOpenChange:me,children:e.jsx(K,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:o.details?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):H&&m&&k.length>0?e.jsx(ka,{employeeName:`${k[0].employees_FirstName||""} ${k[0].employees_LastName||""}`.trim()||H.EmployeeName,employeeId:String(k[0].employees_EmployeeID||H.EmployeeID),department:k[0].employees_Department||H.Department,position:k[0].job_JobName||H.Position,salaryMonth:N(m.StartDate,"MMMM yyyy"),salaryDate:N(m.EndDate,"dd-MM-yyyy"),basicSalary:((Me=k.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("basic")}))==null?void 0:Me.Amount)||((Fe=k.find(a=>{var s;return(s=a.contractpaytype_ContractPayTypeName)==null?void 0:s.toLowerCase().includes("main salary")}))==null?void 0:Fe.Amount)||((Ie=k.filter(a=>a.IsAdd)[0])==null?void 0:Ie.Amount)||0,earnings:k.filter(a=>{var s;return a.IsAdd&&!((s=a.contractpaytype_ContractPayTypeName)!=null&&s.toLowerCase().includes("basic"))}).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),deductions:k.filter(a=>!a.IsAdd).map(a=>({label:a.contractpaytype_ContractPayTypeName||a.ComponentName||"Unknown",amount:a.Amount||0})),currency:k[0].Currency||H.Currency||"BHD",onClose:()=>me(!1)}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No salary details available"})})}),e.jsx(X,{open:i,onOpenChange:h,children:e.jsxs(K,{className:"sm:max-w-md",children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Approve Payroll"}),y&&e.jsxs(ye,{children:["Approve payroll for ",R(y.StartDate)," - ",R(y.EndDate),e.jsx("br",{}),e.jsx("strong",{children:"Reason:"})," ",y.Reason]})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{children:[e.jsx(G,{htmlFor:"approvalComments",children:"Approval Comments (Optional)"}),e.jsx("textarea",{id:"approvalComments",value:A,onChange:a=>T(a.target.value),placeholder:"Add any comments or notes about this approval...",className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none",rows:4})]}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(fe,{className:"h-5 w-5 text-blue-400"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:"Payroll Approval"}),e.jsx("div",{className:"mt-2 text-sm text-blue-700",children:e.jsx("p",{children:'This will approve the payroll and update the status to "Approved". The approval details will be recorded in the system.'})})]})]})})]}),e.jsxs(he,{className:"sm:justify-between",children:[e.jsx(u,{variant:"outline",onClick:()=>{h(!1),g(null),T("")},disabled:o.action,children:"Cancel"}),e.jsx(u,{onClick:ya,disabled:o.action,className:"bg-green-600 hover:bg-green-700 text-white",children:o.action?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-4 h-4 mr-2 animate-spin"}),"Approving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(fe,{className:"w-4 h-4 mr-2"}),"Approve Payroll"]})})]})]})})]})};export{Xa as default};

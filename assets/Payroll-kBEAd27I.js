import{c as za,w as ge,r as y,j as e,l as G,o as U,x as H,m as ae,n as se,S as ca,I as R,F as La,B as j,y as Oa,J as da,L as te,X as Ie,at as _e,C as ma,U as la,p as pa,ab as Ee,ak as ra,D as Z,a as ee,b as xe,d as he,a8 as O,K as Ce,e as Pe}from"./index-Bypddhhb.js";import{R as Ra}from"./ReportViewer-DVz8Fq97.js";import{T as ya,c as Ba,a as ce,b as Fe}from"./tabs-2lsKIagL.js";import{a as M}from"./api-Cb5LQrDs.js";import{S as K}from"./skeleton-C1aYo0X8.js";import{T as ze,a as Le,b as de,c as C,d as Oe,e as P}from"./table-Dx_P8oUa.js";import{S as Wa}from"./ScrollableTabs-DinxSRwC.js";import{S as Re,a as Be,b as We,c as Ve,d as L}from"./select-TrMaUGhR.js";import{C as oa}from"./date-picker-0vyu4Len.js";import{F as ua}from"./filter-BDpLCbv7.js";import{P as xa}from"./plus-CAKepzpf.js";import{C as ha}from"./chevron-left-CXJ-LiR7.js";import{D as $e}from"./download-Bq2iB_o9.js";import{d as na,f as ia}from"./popover-7jWD5wH6.js";import"./alert-9C3tueoR.js";import"./index-ClglHxzc.js";import"./getDaysInMonth-CQM246fQ.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=za("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),Va=()=>{const{t:a}=ge(),[r,o]=y.useState("payroll_summary"),[d,c]=y.useState([]);y.useEffect(()=>{(async()=>{try{const u=((await M.list("payroll",{sort:"StartDate DESC",pageSize:100})).data||[]).map(T=>({label:`${T.Reason} (${T.StartDate} - ${T.EndDate})`,value:String(T.PayrollID)}));c(u)}catch(N){console.error("Failed to fetch payrolls for reports",N)}})()},[]);const x=[{key:"start_date",label:a("common.startDate"),type:"date",defaultValue:new Date(new Date().getFullYear(),0,1).toISOString().split("T")[0]},{key:"end_date",label:a("common.endDate"),type:"date",defaultValue:new Date().toISOString().split("T")[0]}],n=[{key:"payroll_id",label:a("payroll.reports.selectPayroll"),type:"select",options:d}],m={payroll_summary:{type:"payroll_summary",title:a("payroll.reports.payrollSummaryTitle"),description:a("payroll.reports.payrollSummaryDesc"),columns:[{key:"PayrollID",label:a("common.id")},{key:"Description",label:a("common.description")},{key:"StartDate",label:a("common.startDate"),format:p=>p?new Date(p).toLocaleDateString():"-"},{key:"EndDate",label:a("common.endDate"),format:p=>p?new Date(p).toLocaleDateString():"-"},{key:"TotalDays",label:a("common.days")},{key:"Status",label:a("common.status")},{key:"CreatedDate",label:a("common.created"),format:p=>p?new Date(p).toLocaleDateString():"-"}],filters:x},payroll_salary_sheet:{type:"payroll_salary_sheet",title:a("payroll.reports.salarySheetTitle"),description:a("payroll.reports.salarySheetDesc"),columns:[{key:"EmployeeID",label:a("common.id")},{key:"EmployeeName",label:a("common.name")},{key:"NationalID",label:a("employees.form.nationalId")},{key:"TotalHoursWorked",label:a("common.hours")},{key:"OvertimeHours",label:a("payroll.reports.overtime")},{key:"AbsentHours",label:a("payroll.reports.absent")},{key:"Currency",label:a("payroll.dialogs.format")},{key:"GrossSalary",label:a("payroll.grossSalary"),format:p=>Number(p).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"NetSalary",label:a("payroll.reports.netPay"),format:p=>Number(p).toLocaleString(void 0,{minimumFractionDigits:2})}],filters:n},payroll_components_breakdown:{type:"payroll_components_breakdown",title:a("payroll.reports.componentsBreakdownTitle"),description:a("payroll.reports.componentsBreakdownDesc"),columns:[{key:"EmployeeName",label:a("common.name")},{key:"ComponentName",label:a("payroll.reports.component")},{key:"ComponentType",label:a("common.type"),format:p=>e.jsx("span",{className:p==="Addition"?"text-green-600":"text-red-600",children:a(p==="Addition"?"payroll.dialogs.add":"payroll.dialogs.deduct")})},{key:"Amount",label:a("common.amount"),format:p=>Number(p).toLocaleString(void 0,{minimumFractionDigits:2})},{key:"Currency",label:a("payroll.reports.currencyShort")},{key:"Notes",label:a("common.notes")}],filters:n}}[r];return e.jsxs("div",{className:"space-y-6",children:[e.jsx(G,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(U,{className:"p-4",children:e.jsx(ya,{value:r,onValueChange:o,className:"w-full",children:e.jsxs(Ba,{className:"grid w-full grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border border-[#124562]/20 p-1 rounded-lg",children:[e.jsx(ce,{value:"payroll_summary",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:a("payroll.reports.payrollSummaryTab")}),e.jsx(ce,{value:"payroll_salary_sheet",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:a("payroll.reports.salarySheetTab")}),e.jsx(ce,{value:"payroll_components_breakdown",className:"bg-gradient-to-r from-[#124562]/5 to-transparent hover:from-[#124562]/10 hover:shadow-md transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#124562] data-[state=active]:to-[#124562]/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#30c0da]/25",children:a("payroll.reports.componentsBreakdownTab")})]})})})}),e.jsx("div",{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 rounded-xl hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30 p-6",children:e.jsx(Ra,{reportType:m.type,title:m.title,description:m.description,columns:m.columns,filterFields:m.filters,disableAutoFetch:!0})})]})},ne={listPayrolls:async(a={})=>{const r=typeof a.page=="number"?a.page:0;return await M.list("payroll",{page:r,pageSize:a.pageSize||10,sort:"DESC",...a.filters||{}})},listEmployeeSalaries:async(a={})=>{const r=await M.list("employeesalary",{page:a.page||0,pageSize:a.pageSize||10,sort:"ASC",field:"EmployeeID",...a.payrollId&&{exact_filters:JSON.stringify({Payroll:a.payrollId})},...a.employeeName&&{EmployeeName:{$like:`%${a.employeeName}%`}},...a.department&&{Department:a.department},...a.status&&{Status:a.status}});if(r.data&&r.data.length>0){const o=await Promise.all(r.data.map(async d=>{try{const x=(await M.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:d.SalaryID}),sort:"ASC"})).data.reduce((n,h)=>(h.IsAdd?n.additions+=h.Amount||0:n.deductions+=h.Amount||0,n),{additions:0,deductions:0});return{...d,TotalEarnings:x.additions,TotalDeductions:x.deductions}}catch(c){return console.error("Error fetching salary components:",c),d}}));return{...r,data:o}}return r},getSalaryDetails:async a=>{const r=await M.get("employeesalary",a),o=await M.list("employeesalarysub",{exact_filters:JSON.stringify({SalaryID:a}),sort:"ASC",pageSize:1e3});return{...r,components:o.data||[]}},createPayroll:async a=>await M.create("payroll",{...a,Status:"Pending",CreatedBy:1}),deletePayroll:async a=>(await M.list("employeesalary",{exact_filters:JSON.stringify({PayrollID:a}),sort:"ASC",pageSize:1e3}),await M.delete("payroll",a)),approvePayroll:async(a,r)=>await M.update("payroll",a,{Status:"Approved",ApprovedBy:r,ApprovalDate:H(new Date,"yyyy-MM-dd HH:mm:ss")}),exportPayroll:async(a,r="pdf")=>await M.get(`payroll/export/${a}`,{format:r}),getPayrollSummary:async a=>{try{return await M.get("payroll/summary",{payrollId:a})}catch(r){throw console.error("Error fetching payroll summary:",r),r}},updatePayrollStatus:async(a,r)=>await M.update("payroll",a,r),getEmployeeDeductionTypes:async a=>{try{return(await M.list("contractpaytype",{filters:JSON.stringify({EmployeeID:a}),sort:"ASC"})).data||[]}catch(r){return console.error("Error fetching deduction types:",r),[]}}};function Ga({payrolls:a,loading:r,payrollSearch:o,setPayrollSearch:d,payrollStatusFilter:c,setPayrollStatusFilter:x,payrollPage:n,setPayrollPage:h,payrollPageSize:m,payrollTotal:p,handleSelectPayroll:N,handleDeletePayroll:u,setApprovingPayroll:T,setApprovalComments:$,setShowApproveDialog:I,setShowNewPayrollDialog:E,formatDate:_,getStatusBadge:g}){const{t:i}=ge();return e.jsxs(G,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsx(se,{className:"text-[#30c0da]",children:i("payroll.periods.title")}),e.jsxs("div",{className:"mt-4 md:mt-0 flex gap-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(ca,{className:"absolute start-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(R,{placeholder:i("payroll.periods.searchPayrolls"),className:"ps-10 w-full",value:o,onChange:l=>{d(l.target.value),h(1)}})]}),e.jsxs(Re,{value:c,onValueChange:l=>{x(l),h(1)},children:[e.jsxs(Be,{className:"w-[180px]",children:[e.jsx(ua,{className:"w-4 h-4 me-2"}),e.jsx(We,{placeholder:i("common.filterByStatus")})]}),e.jsxs(Ve,{children:[e.jsx(L,{value:"all",children:i("payroll.allStatuses")}),e.jsx(L,{value:"Draft",children:i("payroll.status.draft")}),e.jsx(L,{value:"Pending",children:i("common.pending")}),e.jsx(L,{value:"Approved",children:i("payroll.status.approved")}),e.jsx(L,{value:"Rejected",children:i("payroll.status.rejected")}),e.jsx(L,{value:"Processing",children:i("payroll.periods.processing")})]})]})]})]})}),e.jsx(U,{children:r.payroll?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):a.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(La,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:i("payroll.periods.emptyTitle")}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:i("payroll.periods.emptyDesc")}),e.jsx("div",{className:"mt-6",children:e.jsxs(j,{onClick:()=>E(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(xa,{className:"w-4 h-4 me-2"}),i("payroll.periods.newPayrollPeriod")]})})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(ze,{children:[e.jsx(Le,{children:e.jsxs(de,{children:[e.jsx(C,{children:i("common.id")}),e.jsx(C,{children:i("payroll.payPeriod")}),e.jsx(C,{children:i("common.days")}),e.jsx(C,{children:i("common.reason")}),e.jsx(C,{children:i("common.status")}),e.jsx(C,{children:i("common.created")}),e.jsx(C,{className:"text-end",children:i("common.actions")})]})}),e.jsx(Oe,{children:a.map(l=>e.jsxs(de,{children:[e.jsxs(P,{className:"font-medium",children:["#",l.PayrollID]}),e.jsx(P,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(Oa,{className:"w-4 h-4 me-2 text-gray-500"}),_(new Date(l.StartDate))," - ",_(new Date(l.EndDate))]})}),e.jsx(P,{children:l.TotalDays}),e.jsx(P,{className:"max-w-xs truncate",children:l.Reason}),e.jsx(P,{children:g(l.Status)}),e.jsx(P,{children:_(new Date(l.CreatedDate))}),e.jsx(P,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>N(l),children:[e.jsx(da,{className:"w-4 h-4 me-1"})," ",i("common.view")]}),(l.Status==="Draft"||l.Status==="Pending")&&e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>u(l),disabled:r.action,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[r.action?e.jsx(te,{className:"w-4 h-4 me-1 animate-spin"}):e.jsx(Ie,{className:"w-4 h-4 me-1"}),i("common.delete")]}),(l.Status==="Pending"||l.Status==="Processing")&&e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>{T(l),$(""),I(!0)},disabled:r.action,className:"text-green-600 hover:text-green-700 hover:bg-green-50",children:[r.action?e.jsx(te,{className:"w-4 h-4 me-1 animate-spin"}):e.jsx(_e,{className:"w-4 h-4 me-1"}),i("payroll.approve")]})]})})]},l.PayrollID))})]}),p>m&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("div",{className:"text-sm text-gray-700",children:i("payroll.pagination.showingResults",{from:(n-1)*m+1,to:Math.min(n*m,p),total:p})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>h(l=>Math.max(1,l-1)),disabled:n===1||r.payroll,children:[e.jsx(ha,{className:"w-4 h-4 me-1"})," ",i("common.previous")]}),e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>h(l=>l+1),disabled:n*m>=p||r.payroll,children:[i("common.next")," ",e.jsx(ma,{className:"w-4 h-4 ms-1"})]})]})]})]})})]})}function Ua({selectedPayroll:a,salaries:r,loading:o,salarySearch:d,setSalarySearch:c,salaryStatusFilter:x,setSalaryStatusFilter:n,salaryPage:h,setSalaryPage:m,salaryPageSize:p,salaryTotal:N,selectedSalary:u,fetchSalaryDetails:T,setShowExportDialog:$,formatDate:I,formatCurrency:E,getStatusBadge:_,onPrintPayslip:g}){const{t:i}=ge();return a?e.jsxs(G,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx(se,{className:"text-[#30c0da]",children:i("payroll.employeeSalaries.title")}),e.jsxs(pa,{children:[a.Reason," • ",I(a.StartDate)," - ",I(a.EndDate)]})]}),e.jsxs("div",{className:"mt-4 md:mt-0 flex gap-2",children:[e.jsxs("div",{className:"relative flex-1 md:max-w-xs",children:[e.jsx(ca,{className:"absolute start-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(R,{placeholder:i("payroll.employeeSalaries.searchEmployees"),className:"ps-10 w-full",value:d,onChange:l=>{c(l.target.value),m(1)}})]}),e.jsxs(Re,{value:x,onValueChange:l=>{n(l),m(1)},children:[e.jsxs(Be,{className:"w-[180px]",children:[e.jsx(ua,{className:"w-4 h-4 me-2"}),e.jsx(We,{placeholder:i("common.filterByStatus")})]}),e.jsxs(Ve,{children:[e.jsx(L,{value:"all",children:i("payroll.allStatuses")}),e.jsx(L,{value:"Draft",children:i("payroll.status.draft")}),e.jsx(L,{value:"Pending",children:i("common.pending")}),e.jsx(L,{value:"Approved",children:i("payroll.status.approved")}),e.jsx(L,{value:"Paid",children:i("payroll.status.paid")}),e.jsx(L,{value:"Rejected",children:i("payroll.status.rejected")})]})]}),e.jsxs(j,{variant:"outline",onClick:()=>$(!0),disabled:o.action,children:[e.jsx($e,{className:"w-4 h-4 me-2"}),i("common.export")]})]})]})}),e.jsx(U,{children:o.salaries?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):r.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx(la,{className:"mx-auto h-12 w-12 text-gray-400"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:i("payroll.employeeSalaries.noEmployeeSalaries")}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:i("payroll.employeeSalaries.noEmployeeSalariesDesc")})]}):e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs(ze,{children:[e.jsx(Le,{children:e.jsxs(de,{children:[e.jsx(C,{children:i("employees.employee")}),e.jsx(C,{children:i("employees.department")}),e.jsx(C,{children:i("employees.jobTitle")}),e.jsx(C,{className:"text-end",children:i("payroll.grossSalary")}),e.jsx(C,{className:"text-end",children:i("payroll.employeeSalaries.additions")}),e.jsx(C,{className:"text-end",children:i("payroll.deductions")}),e.jsx(C,{className:"text-end",children:i("payroll.employeeSalaries.systemNet")}),e.jsx(C,{className:"text-end",children:i("payroll.employeeSalaries.manualOverride")}),e.jsx(C,{className:"text-end",children:i("payroll.employeeSalaries.effectiveNet")}),e.jsx(C,{children:i("common.status")}),e.jsx(C,{className:"text-end",children:i("common.actions")})]})}),e.jsx(Oe,{children:r.map(l=>{const me=l.GrossSalary||0,B=l.TotalDeductions||0,le=l.TotalAdditions||l.TotalEarnings||0,X=l.SystemNetSalary||me+le-B,J=l.ManualNetSalary,re=J!==null?J:X,V=J!==null;return e.jsxs(de,{children:[e.jsx(P,{className:"font-medium",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium me-2",children:(l.employees_FirstName||l.EmployeeName||"").charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{children:l.employees_FirstName&&l.employees_LastName?`${l.employees_FirstName} ${l.employees_LastName}`:l.EmployeeName}),e.jsxs("div",{className:"text-xs text-gray-500",children:[i("employees.employeeId"),": ",l.EmployeeID]})]})]})}),e.jsx(P,{children:l.employees_Department||l.Department}),e.jsx(P,{children:l.job_JobName||l.Position}),e.jsx(P,{className:"text-end",children:E(me,l.Currency)}),e.jsx(P,{className:"text-end text-green-600",children:E(le,l.Currency)}),e.jsxs(P,{className:"text-end text-red-600",children:["-",E(B,l.Currency)]}),e.jsx(P,{className:"text-end text-gray-600",children:E(X,l.Currency)}),e.jsx(P,{className:"text-end",children:V?e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-orange-600",children:E(J,l.Currency)}),l.ManualAdjustDate&&e.jsx("div",{className:"text-xs text-gray-500",children:new Date(l.ManualAdjustDate).toLocaleDateString()})]}):e.jsx("span",{className:"text-gray-400",children:"-"})}),e.jsxs(P,{className:"text-end font-medium",children:[e.jsx("div",{className:V?"text-orange-600":"",children:E(re,l.Currency)}),V&&e.jsx("div",{className:"text-xs text-orange-500",children:i("payroll.employeeSalaries.manualOverride")})]}),e.jsx(P,{children:_(l.Status)}),e.jsx(P,{children:e.jsxs("div",{className:"flex justify-end gap-1",children:[e.jsxs(j,{variant:"ghost",size:"sm",onClick:()=>T(l),disabled:o.details,children:[e.jsx(da,{className:"w-4 h-4 me-1"}),o.details&&(u==null?void 0:u.SalaryID)===l.SalaryID?i("common.loading"):i("common.view")]}),g&&e.jsxs(j,{variant:"ghost",size:"sm",onClick:()=>g(l),disabled:o.action,children:[e.jsx(Ge,{className:"w-4 h-4 me-1"}),i("payroll.employeeSalaries.print")]})]})})]},l.SalaryID)})})]}),N>p&&e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("div",{className:"text-sm text-gray-700",children:i("payroll.pagination.showingResults",{from:(h-1)*p+1,to:Math.min(h*p,N),total:N})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>m(l=>Math.max(1,l-1)),disabled:h===1||o.salaries,children:[e.jsx(ha,{className:"w-4 h-4 me-1"})," ",i("common.previous")]}),e.jsxs(j,{variant:"outline",size:"sm",onClick:()=>m(l=>l+1),disabled:h*p>=N||o.salaries,children:[i("common.next")," ",e.jsx(ma,{className:"w-4 h-4 ms-1"})]})]})]})]})})]}):e.jsx(G,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:e.jsx(U,{className:"pt-6",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx(la,{className:"mx-auto h-12 w-12 text-[#30c0da]"}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:i("payroll.employeeSalaries.noPayrollSelected")}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:i("payroll.employeeSalaries.selectPayrollDesc")})]})})})}class ie{static getInstance(){return ie.instance||(ie.instance=new ie),ie.instance}async getPayslipTemplate(r){var o,d;try{if(r){const n=await M.get("Printables",r);if(n!=null&&n.success&&(n!=null&&n.data))return n.data}const c=await M.list("Printables",{filter:{DocType:"payslip",IsDefault:!0},pageSize:1});if(c!=null&&c.success&&((o=c==null?void 0:c.data)==null?void 0:o.length)>0)return c.data[0];const x=await M.list("Printables",{filter:{DocType:"payslip"},pageSize:1});return x!=null&&x.success&&((d=x==null?void 0:x.data)==null?void 0:d.length)>0?x.data[0]:null}catch(c){return console.error("Error fetching payslip template:",c),null}}async fetchCompanyConfig(){var r,o,d;try{const[c,x,n]=await Promise.allSettled([Ee.getImage("company_logo"),Ee.getCurrency("global_currency"),Ee.getCompanyName("company_name")]);return{companyLogo:c.status==="fulfilled"&&((r=c.value)==null?void 0:r.image_data)||null,globalCurrency:x.status==="fulfilled"&&((o=x.value)==null?void 0:o.currency)||null,companyName:n.status==="fulfilled"&&((d=n.value)==null?void 0:d.company_name)||null}}catch(c){return console.error("Error fetching company config:",c),{companyName:null,companyLogo:null,globalCurrency:null}}}processTemplate(r,o){if(!r)return"";const d=o.earnings.reduce((m,p)=>m+(p.amount||0),0),c=o.deductions.reduce((m,p)=>m+(p.amount||0),0),x=d-c,n={employee_name:o.employeeName,employeeId:o.employeeId,department:o.department,position:o.position,salary_month:o.salaryMonth,salary_date:o.salaryDate,basic_salary:o.basicSalary,gross_salary:d,total_deductions:c,net_salary:x,currency:o.globalCurrency||o.currency,company_name:o.companyName||"Company",company_logo:o.companyLogo||"",items:o.earnings.map(m=>({label:m.label,amount:m.amount,formatted_amount:`${o.globalCurrency||o.currency} ${m.amount.toFixed(2)}`})),deductions:o.deductions.map(m=>({label:m.label,amount:m.amount,notes:m.notes||"",formatted_amount:`${o.globalCurrency||o.currency} ${m.amount.toFixed(2)}`})),earnings_total:d,earnings_count:o.earnings.length,deductions_total:c,deductions_count:o.deductions.length,formatted_basic_salary:`${o.globalCurrency||o.currency} ${o.basicSalary.toFixed(2)}`,formatted_gross_salary:`${o.globalCurrency||o.currency} ${d.toFixed(2)}`,formatted_total_deductions:`${o.globalCurrency||o.currency} ${c.toFixed(2)}`,formatted_net_salary:`${o.globalCurrency||o.currency} ${x.toFixed(2)}`,current_date:new Date().toLocaleDateString(),current_year:new Date().getFullYear().toString()};let h=r;if(Object.keys(n).forEach(m=>{const p=n[m];if(typeof p=="string"||typeof p=="number"){const N=new RegExp(`\\{${m}\\}`,"g");h=h.replace(N,String(p))}}),Object.keys(n).forEach(m=>{const p=n[m];if(typeof p=="string"||typeof p=="number"){const N=new RegExp(`\\{%\\s*${m}\\s*%\\}`,"g");h=h.replace(N,String(p))}}),n.items&&Array.isArray(n.items)){const m=/{%\s*for\s+(\w+)\s+in\s+items\s*%}([\s\S]*?){%\s*endfor\s*%}/g;let p;for(;(p=m.exec(h))!==null;){const[N,u,T]=p,$=n.items.map(I=>{let E=T;const _=new RegExp(`{%\\s*${u}\\.(\\w+)\\s*%}`,"g");return E=E.replace(_,(g,i)=>{const l=I[i];return l!=null?String(l):""}),E}).join("");h=h.replace(N,$)}}if(n.deductions&&Array.isArray(n.deductions)){const m=/{%\s*for\s+(\w+)\s+in\s+deductions\s*%}([\s\S]*?){%\s*endfor\s*%}/g;let p;for(;(p=m.exec(h))!==null;){const[N,u,T]=p,$=n.deductions.map(I=>{let E=T;const _=new RegExp(`{%\\s*${u}\\.(\\w+)\\s*%}`,"g");return E=E.replace(_,(g,i)=>{const l=I[i];return l!=null?String(l):""}),E}).join("");h=h.replace(N,$)}}return h}async generatePayslipHTML(r,o){try{const d=await this.fetchCompanyConfig(),c={...r,...d},x=await this.getPayslipTemplate(o);return x!=null&&x.HtmlCode?this.processTemplate(x.HtmlCode,c):this.getDefaultPayslipHTML(c)}catch(d){throw console.error("Error generating payslip HTML:",d),d}}getDefaultPayslipHTML(r){const o=r.earnings.reduce((n,h)=>n+(h.amount||0),0),d=r.deductions.reduce((n,h)=>n+(h.amount||0),0),c=o-d,x=r.globalCurrency||r.currency;return`
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
          <td class="table-amount">${x} ${r.basicSalary.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <div class="section-divider"></div>

    <table class="salary-table">
      <tbody>
        ${r.earnings.map(n=>`
          <tr>
            <td class="table-label">${n.label}</td>
            <td class="table-amount">${n.amount>0?`${x} ${n.amount.toFixed(2)}`:""}</td>
          </tr>
        `).join("")}
        <tr class="total-row">
          <td class="table-label">Gross Salary</td>
          <td class="table-amount">${x} ${o.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>

    <div class="section-divider"></div>

    <table class="salary-table">
      <tbody>
        ${r.deductions.map(n=>`
          <tr>
            <td class="table-label">${n.label}</td>
            <td class="table-amount">${n.amount>0?`${x} ${n.amount.toFixed(2)}`:""}</td>
          </tr>
        `).join("")}
        <tr class="total-row">
          <td class="table-label">Total Deduction:</td>
          <td class="table-amount">${x} ${d.toFixed(2)}</td>
        </tr>
        <tr class="net-salary">
          <td class="table-label">Net Salary:</td>
          <td class="table-amount">${x} ${c.toFixed(2)}</td>
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
</html>`}async printPayslip(r,o){try{const d=await this.generatePayslipHTML(r,o),c=window.open("","_blank","width=800,height=600");if(!c)throw new Error("Could not open print window");c.document.open(),c.document.write(d),c.document.close(),c.onload=()=>{setTimeout(()=>{c.focus(),c.print(),c.onafterprint=()=>{c.close()},setTimeout(()=>{c.close()},2e3)},500)}}catch(d){throw console.error("Error printing payslip:",d),d}}async previewPayslip(r,o){try{return await this.generatePayslipHTML(r,o)}catch(d){throw console.error("Error previewing payslip:",d),d}}}const ke=ie.getInstance();function Ja({employeeName:a,employeeId:r,department:o,position:d,salaryMonth:c,salaryDate:x,basicSalary:n,earnings:h,deductions:m,currency:p,onClose:N}){const{t:u}=ge(),T=y.useRef(null),[$,I]=y.useState(!1),[E,_]=y.useState(""),[g,i]=y.useState(!1),[l,me]=y.useState(new Set),B={employeeName:a,employeeId:r,department:o,position:d,salaryMonth:c,salaryDate:x,basicSalary:n,earnings:h,deductions:m,currency:p};y.useEffect(()=>{(async()=>{try{const A=await ke.previewPayslip(B);_(A)}catch(A){console.error("Error generating payslip preview:",A)}})()},[B]);const le=f=>{me(A=>{const k=new Set(A);return k.has(f)?k.delete(f):k.add(f),k})},X=async()=>{I(!0);try{await ke.printPayslip(B)}catch(f){console.error("Error printing payslip:",f)}finally{I(!1)}},J=async()=>{try{const f=await ke.previewPayslip(B);_(f),i(!0)}catch(f){console.error("Error generating preview:",f)}},re=h.reduce((f,A)=>f+(A.amount||0),0),be=m.filter((f,A)=>!l.has(A)).reduce((f,A)=>f+(A.amount||0),0),oe=re-be,Y=p;return e.jsxs("div",{className:"payslip-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"print-controls",children:[N&&e.jsx(j,{onClick:N,variant:"outline",children:u("common.close")}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsxs(j,{onClick:J,variant:"outline",disabled:$,children:[e.jsx(ra,{className:"w-4 h-4 me-2"}),u("payroll.payslip.previewTemplate")]}),e.jsx(j,{onClick:X,disabled:$,children:$?e.jsxs(e.Fragment,{children:[e.jsx(te,{className:"w-4 h-4 me-2 animate-spin"}),u("payroll.payslip.printing")]}):e.jsxs(e.Fragment,{children:[e.jsx(Ge,{className:"w-4 h-4 me-2"}),u("payroll.payslip.printPayslip")]})})]})]}),e.jsxs("div",{ref:T,className:"payslip-container",children:[e.jsxs("div",{className:"logo-section",children:[e.jsx("div",{className:"logo",children:"◆"}),e.jsx("div",{className:"company-header flex-1",children:e.jsx("div",{className:"company-name",children:u("payroll.payslip.company")})})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"info-row",children:[e.jsxs("span",{className:"info-label",children:[u("payroll.payslip.employeeName"),":"]}),e.jsx("span",{className:"info-value",children:a})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("span",{className:"info-label",children:[u("payroll.payslip.employeeId"),":"]}),e.jsx("span",{className:"info-value",children:r})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("span",{className:"info-label",children:[u("employees.department"),":"]}),e.jsx("span",{className:"info-value",children:o})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("span",{className:"info-label",children:[u("employees.jobTitle"),":"]}),e.jsx("span",{className:"info-value",children:d})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("span",{className:"info-label",children:[u("payroll.payslip.salaryForMonth"),":"]}),e.jsx("span",{className:"info-value",children:c})]}),e.jsxs("div",{className:"info-row",children:[e.jsxs("span",{className:"info-label",children:[u("common.date"),":"]}),e.jsx("span",{className:"info-value",children:x})]}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:u("payroll.basicSalary")}),e.jsxs("td",{className:"table-amount",children:[Y," ",n.toFixed(2)]})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[h.map((f,A)=>e.jsxs("tr",{children:[e.jsx("td",{className:"table-label",children:f.label}),e.jsx("td",{className:"table-amount",children:f.amount>0?`${Y} ${f.amount.toFixed(2)}`:""})]},A)),e.jsxs("tr",{className:"total-row",children:[e.jsx("td",{className:"table-label",children:u("payroll.grossSalary")}),e.jsxs("td",{className:"table-amount",children:[Y," ",re.toFixed(2)]})]})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("table",{className:"salary-table",children:e.jsxs("tbody",{children:[m.map((f,A)=>e.jsxs("tr",{className:l.has(A)?"hidden-deduction":"",children:[e.jsx("td",{className:"table-label",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{children:f.label}),f.notes&&e.jsx("div",{className:"text-xs text-gray-600 font-normal mt-1 print:text-gray-700",children:f.notes})]}),e.jsx("button",{onClick:()=>le(A),className:"ml-2 p-1 rounded hover:bg-gray-200 transition-colors print:hidden",title:l.has(A)?u("payroll.payslip.showDeduction"):u("payroll.payslip.hideDeduction"),children:e.jsx(ra,{className:"h-3 w-3 text-gray-500"})})]})}),e.jsx("td",{className:"table-amount",children:f.amount>0?`${Y} ${f.amount.toFixed(2)}`:""})]},A)),e.jsxs("tr",{className:"total-row",children:[e.jsxs("td",{className:"table-label",children:[u("payroll.payslip.totalDeduction"),":"]}),e.jsxs("td",{className:"table-amount",children:[Y," ",be.toFixed(3)]})]}),e.jsxs("tr",{className:"net-salary",children:[e.jsxs("td",{className:"table-label",children:[u("payroll.netSalary"),":"]}),e.jsxs("td",{className:"table-amount",children:[Y," ",oe.toFixed(2)]})]})]})}),e.jsx("div",{className:"annotation-section",children:e.jsx("div",{className:"annotation-label",children:u("payroll.payslip.annotation")})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-info",style:{textAlign:"center",fontSize:"12px",color:"#666",marginTop:"20px"},children:[e.jsx("p",{style:{margin:"4px 0"},children:u("payroll.payslip.addressEn")}),e.jsx("p",{style:{margin:"4px 0"},children:"مبنى 2358، طريق 2830، مجمع 428، السيف  مملكة البحرين"}),e.jsx("p",{style:{margin:"4px 0"},children:u("payroll.payslip.phone")})]}),e.jsx("div",{className:"footer",children:e.jsx("p",{style:{margin:0},children:u("payroll.payslip.copyright",{year:new Date().getFullYear()})})})]}),e.jsx(Z,{open:g,onOpenChange:i,children:e.jsx(ee,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold",children:u("payroll.payslip.preview")}),e.jsx(j,{onClick:()=>i(!1),variant:"outline",children:u("common.close")})]}),e.jsx("div",{className:"border rounded-lg overflow-auto",style:{maxHeight:"70vh"},children:e.jsx("iframe",{srcDoc:E,style:{width:"100%",height:"600px",border:"none"},title:u("payroll.payslip.preview")})})]})})})]})}const us=()=>{var aa,sa,ta;const{t:a}=ge(),[r,o]=y.useState("payroll"),[d,c]=y.useState({payroll:!1,salaries:!1,details:!1,action:!1}),[x,n]=y.useState(null),[h,m]=y.useState(null),[p,N]=y.useState(!1),[u,T]=y.useState(null),[$,I]=y.useState(""),[E,_]=y.useState([]),[g,i]=y.useState(null),[l,me]=y.useState(null),[B,le]=y.useState(1),[X]=y.useState(10),[J,re]=y.useState(0),[V,be]=y.useState(""),[oe,Y]=y.useState("all"),[f,A]=y.useState([]),[k,ga]=y.useState(null),[D,ba]=y.useState([]),[Ae,Ue]=y.useState(1),[Je]=y.useState(10),[fa,ja]=y.useState(0),[fe,Ye]=y.useState(""),[je,qe]=y.useState("all"),[va,pe]=y.useState(!1),[Na,Ke]=y.useState(!1),[wa,Me]=y.useState(!1),[Sa,ve]=y.useState(!1),[Da,ye]=y.useState(!1);y.useState(!0);const[Ya,Ca]=y.useState([]),[qa,Pa]=y.useState([]),[v,Ne]=y.useState(null),[Xe,Qe]=y.useState(!1),[Q,Te]=y.useState({}),[Ka,Ea]=y.useState(null),[W,we]=y.useState({StartDate:H(na(new Date),"yyyy-MM-dd"),EndDate:H(ia(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${H(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}),[Se,ka]=y.useState("pdf"),Ze=async()=>{c(s=>({...s,payroll:!0})),n(null);try{const t={page:Math.max(0,B-1),pageSize:X,sort:"CreatedDate",order:"desc"};V&&(t.search=V),oe!=="all"&&(t.status=oe);const b=await ne.listPayrolls(t);_(b.data),re(b.total)}catch(s){console.error("Error fetching payrolls:",s),n(s.message||a("payroll.messages.fetchPayrollsFailed"))}finally{c(s=>({...s,payroll:!1}))}},Aa=async()=>{if(g){c(s=>({...s,salaries:!0})),n(null);try{const s={page:Ae-1,pageSize:Je,payrollId:g.PayrollID,field:"EmployeeName",sort:"ASC"};fe&&(s.search=fe),je!=="all"&&(s.status=je);const t=await ne.listEmployeeSalaries(s);A(t.data),ja(t.total)}catch(s){console.error("Error fetching employee salaries:",s),n(s.message||a("payroll.messages.fetchEmployeeSalariesFailed"))}finally{c(s=>({...s,salaries:!1}))}}},He=async s=>{ga(s),c(t=>({...t,details:!0})),n(null),Pa([]),ve(!1),Qe(!1);try{const t=await ne.getSalaryDetails(s.SalaryID);console.log("Salary details response:",t),console.log("Salary components:",t.components),ba(t.components),Ne({ManualNetSalary:s.ManualNetSalary===null||s.ManualNetSalary===void 0?"":String(s.ManualNetSalary),ManualAdjustNote:s.ManualAdjustNote||"",TotalHoursWorked:s.TotalHoursWorked===null||s.TotalHoursWorked===void 0?"":String(s.TotalHoursWorked),OvertimeHours:s.OvertimeHours===null||s.OvertimeHours===void 0?"":String(s.OvertimeHours),AbsentHours:s.AbsentHours===null||s.AbsentHours===void 0?"":String(s.AbsentHours),DelayHours:s.DelayHours===null||s.DelayHours===void 0?"":String(s.DelayHours),LeaveHours:s.LeaveHours===null||s.LeaveHours===void 0?"":String(s.LeaveHours)});const b={};(t.components||[]).forEach(S=>{S!=null&&S.SalarySubID&&(b[S.SalarySubID]={Amount:S.Amount===null||S.Amount===void 0?"":String(S.Amount),Notes:S.Notes||""})}),Te(b);const w=t.components.filter(S=>!S.IsAdd),z=[...new Map(w.map(S=>[S.ComponentID,S])).values()];Ca(z),Me(!0)}catch(t){console.error("Error fetching salary details:",t),n(t.message||a("payroll.messages.fetchSalaryDetailsFailed"))}finally{c(t=>({...t,details:!1}))}};y.useEffect(()=>{if(!v||Xe||!D||D.length===0)return;const s=D.reduce((b,w)=>{var ue;const z=((ue=Q==null?void 0:Q[w.SalarySubID])==null?void 0:ue.Amount)??"",S=z.trim()===""?0:Number(z),F=Number.isFinite(S)?S:0;return b+(w.IsAdd?F:-F)},0),t=String(Number.isFinite(s)?s:0);v.ManualNetSalary!==t&&Ne(b=>b&&{...b,ManualNetSalary:t})},[Q,D,Xe,v]);const Ma=async()=>{if(!(!k||!v)){c(s=>({...s,action:!0})),n(null),m(null);try{const s=v.ManualNetSalary.trim()===""?null:Number(v.ManualNetSalary);if(s!==null&&!Number.isFinite(s))throw new Error(a("payroll.messages.manualNetSalaryInvalid"));await M.update("employeesalary",k.SalaryID,{ManualNetSalary:s,ManualAdjustNote:v.ManualAdjustNote.trim()===""?null:v.ManualAdjustNote,TotalHoursWorked:v.TotalHoursWorked.trim()===""?null:Number(v.TotalHoursWorked),OvertimeHours:v.OvertimeHours.trim()===""?null:Number(v.OvertimeHours),AbsentHours:v.AbsentHours.trim()===""?null:Number(v.AbsentHours),DelayHours:v.DelayHours.trim()===""?null:Number(v.DelayHours),LeaveHours:v.LeaveHours.trim()===""?null:Number(v.LeaveHours),NetSalary:s});const t=Object.entries(Q).map(([b,w])=>{const z=w.Amount.trim()===""?0:Number(w.Amount);return M.update("employeesalarysub",b,{Amount:Number.isFinite(z)?z:0,Notes:w.Notes.trim()===""?null:w.Notes})});await Promise.all(t),k&&await He(k),m(a("payroll.messages.salaryDetailsUpdated")),setTimeout(()=>m(null),5e3)}catch(s){console.error("Error saving salary details:",s),n(s.message||a("payroll.messages.saveSalaryDetailsFailed"))}finally{c(s=>({...s,action:!1}))}}},Ta=async s=>{var t,b;try{if(c(F=>({...F,action:!0})),await He(s),D.length===0)throw new Error(a("payroll.messages.noSalaryComponents"));const w=D.filter(F=>F.IsAdd),z=D.filter(F=>!F.IsAdd),S={employeeName:s.EmployeeName||"",employeeId:String(s.EmployeeID||""),department:s.employees_Department||s.Department||"",position:s.job_JobName||s.Position||"",salaryMonth:g?H(g.StartDate,"MMMM yyyy"):"",salaryDate:g?H(g.EndDate,"dd-MM-yyyy"):"",basicSalary:((t=w.find(F=>{var ue;return(ue=F.ComponentName)==null?void 0:ue.toLowerCase().includes("basic")}))==null?void 0:t.Amount)||((b=w[0])==null?void 0:b.Amount)||0,earnings:w.map(F=>({label:F.ComponentName||a("common.unknown"),amount:F.Amount||0})),deductions:z.map(F=>({label:F.ComponentName||a("common.unknown"),amount:F.Amount||0,notes:F.Notes||""})),currency:s.Currency||"BHD"};await ke.printPayslip(S),m(a("payroll.messages.payslipPrinted")),setTimeout(()=>m(null),3e3)}catch(w){console.error("Error printing payslip:",w),n(w.message||a("payroll.messages.printPayslipFailed"))}finally{c(w=>({...w,action:!1}))}},Ha=async()=>{if(!W.StartDate||!W.EndDate||!W.Reason){n(a("payroll.messages.fillRequiredFields"));return}c(s=>({...s,action:!0})),n(null);try{const s={...W,Status:"Pending",CreatedBy:1,CreatedDate:H(new Date,"yyyy-MM-dd HH:mm:ss")};await ne.createPayroll(s),await Ze(),pe(!1),m(a("payroll.messages.payrollCreated")),we({StartDate:H(na(new Date),"yyyy-MM-dd"),EndDate:H(ia(new Date),"yyyy-MM-dd"),Reason:`Payroll for ${H(new Date,"MMMM yyyy")}`,TotalDays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()})}catch(s){console.error("Error creating payroll:",s),n(s.message||a("payroll.messages.createPayrollFailed"))}finally{c(s=>({...s,action:!1}))}},Fa=async s=>{if(window.confirm(a("payroll.messages.deletePayrollConfirm",{start:q(s.StartDate),end:q(s.EndDate)}))){c(t=>({...t,action:!0})),n(null);try{await ne.deletePayroll(s.PayrollID),_(t=>t.filter(b=>b.PayrollID!==s.PayrollID)),(g==null?void 0:g.PayrollID)===s.PayrollID&&(i(null),o("payroll")),m(a("payroll.messages.payrollDeleted")),setTimeout(()=>m(null),5e3)}catch(t){console.error("Error deleting payroll:",t),n(t.message||a("payroll.messages.deletePayrollFailed"))}finally{c(t=>({...t,action:!1}))}}},Ia=async()=>{if(u){c(s=>({...s,action:!0})),n(null);try{await M.update("payroll",u.PayrollID,{Status:"Approved",ApprovedBy:1,ApprovalDate:H(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:$||null}),_(s=>s.map(t=>t.PayrollID===u.PayrollID?{...t,Status:"Approved",ApprovedBy:1,ApprovalDate:H(new Date,"yyyy-MM-dd HH:mm:ss"),ApprovalComments:$}:t)),N(!1),T(null),I(""),m(a("payroll.messages.payrollApproved")),setTimeout(()=>m(null),5e3)}catch(s){console.error("Error approving payroll:",s),n(s.message||a("payroll.messages.approvePayrollFailed"))}finally{c(s=>({...s,action:!1}))}}},_a=async()=>{if(g){c(s=>({...s,action:!0})),n(null);try{await ne.exportPayroll(g.PayrollID,Se),ye(!1),m(a("payroll.messages.payrollExported",{format:Se.toUpperCase()})),setTimeout(()=>m(null),5e3)}catch(s){console.error("Error exporting payroll:",s),n(s.message||a("payroll.messages.exportPayrollFailed"))}finally{c(s=>({...s,action:!1}))}}},$a=s=>{i(s),Ue(1),Ye(""),qe("all"),o("salaries")},De=(s,t="USD")=>new Intl.NumberFormat("en-US",{style:"currency",currency:t||"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(s||0),q=s=>{if(!s)return a("common.na");try{const t=typeof s=="string"?new Date(s):s;return isNaN(t.getTime())?a("payroll.messages.invalidDate"):t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(t){return console.error("Error formatting date:",t),a("payroll.messages.invalidDate")}},ea=s=>{const b={Draft:{variant:"bg-gray-100 text-gray-800",label:a("payroll.status.draft")},Pending:{variant:"bg-yellow-100 text-yellow-800",label:a("common.pending")},Approved:{variant:"bg-green-100 text-green-800",label:a("payroll.status.approved")},Rejected:{variant:"bg-red-100 text-red-800",label:a("payroll.status.rejected")},Processing:{variant:"bg-blue-100 text-blue-800",label:a("payroll.periods.processing")},Paid:{variant:"bg-purple-100 text-purple-800",label:a("payroll.status.paid")}}[s]||{variant:"bg-gray-100 text-gray-800",label:s};return e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${b.variant}`,children:b.label})};return y.useEffect(()=>{Ze()},[B,V,oe]),y.useEffect(()=>{(async()=>{try{const t=await Ee.getCurrency("global_currency");t!=null&&t.currency&&Ea(t.currency)}catch(t){console.error("Error fetching global currency:",t)}})()},[]),y.useEffect(()=>{g&&Aa()},[g,Ae,fe,je]),d.payroll&&E.length===0?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(K,{className:"h-8 w-48"}),e.jsx(K,{className:"h-4 w-64"})]}),e.jsx(K,{className:"h-10 w-32"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsx(K,{className:"h-32 w-full"}),e.jsx(K,{className:"h-32 w-full"}),e.jsx(K,{className:"h-32 w-full"})]}),e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx(K,{className:"h-10 w-full md:w-1/3"}),e.jsx("div",{className:"space-y-2",children:Array(5).fill(0).map((s,t)=>e.jsx(K,{className:"h-20 w-full"},t))})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:a("payroll.title")}),e.jsx("p",{className:"text-gray-600",children:a("payroll.description")})]}),e.jsx("div",{className:"mt-4 md:mt-0",children:e.jsxs(j,{onClick:()=>pe(!0),className:"bg-blue-600 hover:bg-blue-700 text-white",children:[e.jsx(xa,{className:"w-4 h-4 me-2"}),a("payroll.periods.newPayrollPeriod")]})})]}),h&&e.jsxs("div",{className:"mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:h}),e.jsx("button",{onClick:()=>m(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(Ie,{className:"w-4 h-4"})})]}),x&&e.jsxs("div",{className:"mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative",children:[e.jsx("span",{className:"block sm:inline",children:x}),e.jsx("button",{onClick:()=>n(null),className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:e.jsx(Ie,{className:"w-4 h-4"})})]}),e.jsxs(ya,{value:r,onValueChange:o,className:"w-full",children:[e.jsxs(Wa,{className:"md:grid md:grid-cols-3 max-w-fit mb-5",children:[e.jsx(ce,{value:"payroll",children:a("payroll.periods.title")}),e.jsxs(ce,{value:"salaries",disabled:!g,children:[a("payroll.employeeSalaries.title"),g&&` (${g.Reason})`]}),e.jsx(ce,{value:"reports",children:a("common.reports")})]}),e.jsx(Fe,{value:"payroll",className:"space-y-6",children:e.jsx(Ga,{payrolls:E,loading:d,payrollSearch:V,setPayrollSearch:be,payrollStatusFilter:oe,setPayrollStatusFilter:Y,payrollPage:B,setPayrollPage:le,payrollPageSize:X,payrollTotal:J,handleSelectPayroll:$a,handleDeletePayroll:Fa,setApprovingPayroll:T,setApprovalComments:I,setShowApproveDialog:N,setShowNewPayrollDialog:pe,formatDate:q,getStatusBadge:ea})}),e.jsx(Fe,{value:"salaries",className:"space-y-6",children:e.jsx(Ua,{selectedPayroll:g,salaries:f,loading:d,salarySearch:fe,setSalarySearch:Ye,salaryStatusFilter:je,setSalaryStatusFilter:qe,salaryPage:Ae,setSalaryPage:Ue,salaryPageSize:Je,salaryTotal:fa,selectedSalary:k,fetchSalaryDetails:He,setShowExportDialog:ye,formatDate:q,formatCurrency:De,getStatusBadge:ea,onPrintPayslip:Ta})}),e.jsx(Fe,{value:"reports",className:"space-y-6",children:e.jsx(Va,{})})]}),e.jsx(Z,{open:va,onOpenChange:pe,children:e.jsxs(ee,{className:"sm:max-w-[500px]",children:[e.jsx(xe,{children:e.jsx(he,{children:a("payroll.dialogs.createPayrollTitle")})}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx(O,{htmlFor:"startDate",children:a("common.startDate")}),e.jsx(oa,{date:W.StartDate?new Date(W.StartDate):void 0,onChange:s=>{if(!s)return;const t=H(s,"yyyy-MM-dd"),b=new Date(s);b.setMonth(b.getMonth()+1),b.setDate(0),we(w=>({...w,StartDate:t,EndDate:H(b,"yyyy-MM-dd"),TotalDays:Math.ceil((b.getTime()-s.getTime())/(1e3*60*60*24))+1,Reason:`Payroll for ${H(s,"MMMM yyyy")}`}))}})]}),e.jsxs("div",{children:[e.jsx(O,{htmlFor:"endDate",children:a("common.endDate")}),e.jsx(oa,{date:W.EndDate?new Date(W.EndDate):void 0,onChange:s=>{if(!s)return;const t=H(s,"yyyy-MM-dd");we(b=>({...b,EndDate:t,TotalDays:Math.ceil((s.getTime()-new Date(b.StartDate||"").getTime())/(1e3*60*60*24))+1}))}})]}),e.jsxs("div",{children:[e.jsx(O,{htmlFor:"reason",children:a("payroll.dialogs.reasonDescription")}),e.jsx(R,{id:"reason",value:W.Reason,onChange:s=>we(t=>({...t,Reason:s.target.value})),placeholder:a("payroll.dialogs.reasonPlaceholder")})]}),e.jsxs("div",{children:[e.jsx(O,{children:a("payroll.dialogs.totalDays")}),e.jsx(R,{value:W.TotalDays||"",readOnly:!0,disabled:!0})]})]})}),e.jsxs(Ce,{children:[e.jsx(j,{variant:"outline",onClick:()=>pe(!1),disabled:d.action,children:a("common.cancel")}),e.jsx(j,{onClick:Ha,disabled:d.action,children:d.action?e.jsxs(e.Fragment,{children:[e.jsx(te,{className:"w-4 h-4 me-2 animate-spin"}),a("common.creating")]}):a("payroll.dialogs.createPayroll")})]})]})}),e.jsx(Z,{open:Na,onOpenChange:Ke,children:e.jsxs(ee,{className:"sm:max-w-2xl",children:[e.jsxs(xe,{children:[e.jsx(he,{children:a("payroll.dialogs.payrollSummary")}),g&&e.jsxs(Pe,{children:[g.Reason," • ",q(g.StartDate)," - ",q(g.EndDate)]})]}),d.action?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):l?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(G,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"pb-2 bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(se,{className:"text-lg text-[#30c0da]",children:a("payroll.summary.totalEmployees")})}),e.jsx(U,{children:e.jsx("div",{className:"text-3xl font-bold text-[#30c0da]",children:l.totalEmployees})})]}),e.jsxs(G,{className:"bg-gradient-to-br from-green-50 to-transparent border-green-200 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 hover:border-green-300",children:[e.jsx(ae,{className:"pb-2 bg-gradient-to-r from-green-100 via-green-50 to-transparent border-b border-green-200",children:e.jsx(se,{className:"text-lg text-green-600",children:a("payroll.summary.totalGross")})}),e.jsx(U,{children:e.jsx("div",{className:"text-3xl font-bold text-green-600",children:De(l.totalGross,l.currency)})})]}),e.jsxs(G,{className:"bg-gradient-to-br from-blue-50 to-transparent border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:border-blue-300",children:[e.jsx(ae,{className:"pb-2 bg-gradient-to-r from-blue-100 via-blue-50 to-transparent border-b border-blue-200",children:e.jsx(se,{className:"text-lg text-blue-600",children:a("payroll.summary.totalNet")})}),e.jsx(U,{children:e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:De(l.totalNet,l.currency)})})]})]}),e.jsxs(G,{className:"bg-gradient-to-br from-[#124562]/5 to-transparent border-[#124562]/20 hover:shadow-lg hover:shadow-[#30c0da]/10 transition-all duration-300 hover:border-[#124562]/30",children:[e.jsx(ae,{className:"bg-gradient-to-r from-[#124562]/10 via-[#124562]/5 to-transparent border-b border-[#124562]/20",children:e.jsx(se,{className:"text-[#30c0da]",children:a("payroll.summary.statusBreakdown")})}),e.jsx(U,{children:e.jsx("div",{className:"space-y-2",children:Object.entries(l.statusCounts||{}).map(([s,t])=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:s}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-16 text-right",children:t}),e.jsx("div",{className:"ms-2 w-32 bg-gray-200 rounded-full h-2.5",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${t/l.totalEmployees*100}%`}})})]})]},s))})})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsxs(j,{variant:"outline",onClick:()=>ye(!0),children:[e.jsx($e,{className:"w-4 h-4 me-2"}),a("payroll.dialogs.exportReport")]}),e.jsx(j,{onClick:()=>{Ke(!1),o("salaries")},children:a("payroll.dialogs.viewSalaries")})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No summary data available"})]})}),e.jsx(Z,{open:Da,onOpenChange:ye,children:e.jsxs(ee,{className:"sm:max-w-md",children:[e.jsxs(xe,{children:[e.jsx(he,{children:a("payroll.dialogs.exportPayrollData")}),g&&e.jsxs(Pe,{children:["Export data for ",g.Reason]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(O,{children:a("payroll.dialogs.format")}),e.jsxs(Re,{value:Se,onValueChange:s=>ka(s),children:[e.jsx(Be,{className:"w-full",children:e.jsx(We,{placeholder:a("payroll.dialogs.selectFormat")})}),e.jsxs(Ve,{children:[e.jsx(L,{value:"pdf",children:a("payroll.dialogs.pdfDocument")}),e.jsx(L,{value:"excel",children:a("payroll.dialogs.excelSpreadsheet")}),e.jsx(L,{value:"csv",children:a("payroll.dialogs.csvFile")})]})]})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"The export will include all employee salary details for the selected payroll period."})]}),e.jsxs(Ce,{className:"sm:justify-between",children:[e.jsx(j,{variant:"outline",onClick:()=>ye(!1),disabled:d.action,children:"Cancel"}),e.jsx(j,{onClick:_a,disabled:d.action,children:d.action?e.jsxs(e.Fragment,{children:[e.jsx(te,{className:"w-4 h-4 mr-2 animate-spin"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx($e,{className:"w-4 h-4 mr-2"}),"Export ",Se.toUpperCase()]})})]})]})}),e.jsx(Z,{open:wa,onOpenChange:Me,children:e.jsx(ee,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:d.details?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):k&&g&&v?e.jsxs("div",{className:"space-y-6",children:[e.jsxs(xe,{children:[e.jsx(he,{children:a("payroll.dialogs.salaryDetails")}),e.jsxs(Pe,{children:[k.EmployeeName," • Salary ID: ",k.SalaryID]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.systemNetSalary")}),e.jsx(R,{value:De(k.SystemNetSalary||0,k.Currency),readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.manualOverrideNetSalary")}),e.jsx(R,{value:v.ManualNetSalary,onChange:s=>{Qe(!0),Ne(t=>t&&{...t,ManualNetSalary:s.target.value})},placeholder:a("payroll.dialogs.leaveEmptySystemNet"),disabled:d.action})]}),e.jsxs("div",{className:"md:col-span-2 space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.manualAdjustNote")}),e.jsx(R,{value:v.ManualAdjustNote,onChange:s=>Ne(t=>t&&{...t,ManualAdjustNote:s.target.value}),placeholder:a("payroll.dialogs.manualOverrideReason"),disabled:d.action})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.totalHoursWorked")}),e.jsx(R,{value:v.TotalHoursWorked,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.overtimeHours")}),e.jsx(R,{value:v.OvertimeHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.absentHours")}),e.jsx(R,{value:v.AbsentHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.delayHours")}),e.jsx(R,{value:v.DelayHours,readOnly:!0,disabled:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(O,{children:a("payroll.dialogs.leaveHours")}),e.jsx(R,{value:v.LeaveHours,readOnly:!0,disabled:!0})]})]}),e.jsxs(G,{children:[e.jsxs(ae,{children:[e.jsx(se,{className:"text-base",children:a("payroll.dialogs.salaryComponents")}),e.jsx(pa,{children:a("payroll.dialogs.salaryComponentsDesc")})]}),e.jsx(U,{children:D.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:a("payroll.dialogs.noComponentsFound")}):e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(ze,{children:[e.jsx(Le,{children:e.jsxs(de,{children:[e.jsx(C,{children:a("common.type")}),e.jsx(C,{children:a("payroll.dialogs.isAdd")}),e.jsx(C,{className:"text-end",children:a("common.amount")}),e.jsx(C,{children:a("common.notes")})]})}),e.jsx(Oe,{children:D.map(s=>{var t,b;return e.jsxs(de,{children:[e.jsx(P,{children:s.contractpaytype_ContractPayTypeName||s.ComponentName||a("common.unknown")}),e.jsx(P,{children:s.IsAdd?a("payroll.dialogs.add"):a("payroll.dialogs.deduct")}),e.jsx(P,{className:"text-end",children:e.jsx(R,{value:((t=Q[s.SalarySubID])==null?void 0:t.Amount)??"",onChange:w=>Te(z=>{var S;return{...z,[s.SalarySubID]:{Amount:w.target.value,Notes:((S=z[s.SalarySubID])==null?void 0:S.Notes)??""}}}),disabled:d.action})}),e.jsx(P,{children:e.jsx(R,{value:((b=Q[s.SalarySubID])==null?void 0:b.Notes)??"",onChange:w=>Te(z=>{var S;return{...z,[s.SalarySubID]:{Amount:((S=z[s.SalarySubID])==null?void 0:S.Amount)??"",Notes:w.target.value}}}),disabled:d.action})})]},s.SalarySubID)})})]})})})]}),e.jsxs(Ce,{className:"sm:justify-between",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{variant:"outline",onClick:()=>Me(!1),disabled:d.action,children:"Close"}),e.jsxs(j,{variant:"outline",onClick:()=>ve(!0),disabled:d.action||!g||D.length===0,children:[e.jsx(Ge,{className:"w-4 h-4 mr-2"}),"Print Payslip"]})]}),e.jsx(j,{onClick:Ma,disabled:d.action,children:d.action?e.jsxs(e.Fragment,{children:[e.jsx(te,{className:"w-4 h-4 mr-2 animate-spin"}),"Saving..."]}):"Save Changes"})]})]}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:a("payroll.dialogs.noSalaryDetails")})})}),e.jsx(Z,{open:Sa,onOpenChange:ve,children:e.jsx(ee,{className:"sm:max-w-4xl max-h-[95vh] overflow-y-auto",children:k&&g&&D.length>0?e.jsx(Ja,{employeeName:`${D[0].employees_FirstName||""} ${D[0].employees_LastName||""}`.trim()||k.EmployeeName,employeeId:String(D[0].employees_EmployeeID||k.EmployeeID),department:D[0].employees_Department||k.Department,position:D[0].job_JobName||k.Position,salaryMonth:H(g.StartDate,"MMMM yyyy"),salaryDate:H(g.EndDate,"dd-MM-yyyy"),basicSalary:((aa=D.find(s=>{var t;return(t=s.contractpaytype_ContractPayTypeName)==null?void 0:t.toLowerCase().includes("basic")}))==null?void 0:aa.Amount)||((sa=D.find(s=>{var t;return(t=s.contractpaytype_ContractPayTypeName)==null?void 0:t.toLowerCase().includes("main salary")}))==null?void 0:sa.Amount)||((ta=D.filter(s=>s.IsAdd)[0])==null?void 0:ta.Amount)||0,earnings:D.filter(s=>{var t;return s.IsAdd&&!((t=s.contractpaytype_ContractPayTypeName)!=null&&t.toLowerCase().includes("basic"))}).map(s=>({label:s.contractpaytype_ContractPayTypeName||s.ComponentName||a("common.unknown"),amount:s.Amount||0})),deductions:D.filter(s=>!s.IsAdd).map(s=>({label:s.contractpaytype_ContractPayTypeName||s.ComponentName||a("common.unknown"),amount:s.Amount||0,notes:s.Notes||""})),currency:D[0].Currency||k.Currency||"BHD",onClose:()=>ve(!1)}):e.jsx("div",{className:"text-center py-8 text-gray-500",children:a("payroll.dialogs.noPayslipData")})})}),e.jsx(Z,{open:p,onOpenChange:N,children:e.jsxs(ee,{className:"sm:max-w-md",children:[e.jsxs(xe,{children:[e.jsx(he,{children:a("payroll.dialogs.approvePayroll")}),u&&e.jsxs(Pe,{children:["Approve payroll for ",q(u.StartDate)," - ",q(u.EndDate),e.jsx("br",{}),e.jsxs("strong",{children:[a("common.reason"),":"]})," ",u.Reason]})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{children:[e.jsx(O,{htmlFor:"approvalComments",children:a("payroll.dialogs.approvalCommentsOptional")}),e.jsx("textarea",{id:"approvalComments",value:$,onChange:s=>I(s.target.value),placeholder:a("payroll.dialogs.approvalCommentsPlaceholder"),className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none",rows:4})]}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(_e,{className:"h-5 w-5 text-blue-400"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-blue-800",children:a("payroll.dialogs.payrollApproval")}),e.jsx("div",{className:"mt-2 text-sm text-blue-700",children:e.jsx("p",{children:a("payroll.dialogs.payrollApprovalDesc")})})]})]})})]}),e.jsxs(Ce,{className:"sm:justify-between",children:[e.jsx(j,{variant:"outline",onClick:()=>{N(!1),T(null),I("")},disabled:d.action,children:"Cancel"}),e.jsx(j,{onClick:Ia,disabled:d.action,className:"bg-green-600 hover:bg-green-700 text-white",children:d.action?e.jsxs(e.Fragment,{children:[e.jsx(te,{className:"w-4 h-4 mr-2 animate-spin"}),"Approving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(_e,{className:"w-4 h-4 mr-2"}),"Approve Payroll"]})})]})]})})]})};export{us as default};

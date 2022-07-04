import{r as c,g as _,a as aa,_ as ea,b as ra,c as ta}from"./_tslib-832fff42.js";export{D as DemoLink,a7 as generateFilledQuantity,a8 as generateIsFilled,g as getCommodityColumns,a as getEmployeeColumns,b as getRealGridData,v as random,Y as randomAddress,r as randomArrayItem,A as randomBoolean,U as randomBrokerId,Z as randomCity,B as randomColor,F as randomCommodity,V as randomCompanyName,a0 as randomContractType,W as randomCountry,a2 as randomCreatedDate,X as randomCurrency,z as randomDate,E as randomDesk,I as randomEmail,O as randomFeeRate,C as randomId,P as randomIncoterm,w as randomInt,a4 as randomJobTitle,S as randomMaturityDate,a6 as randomName,K as randomPhoneNumber,R as randomPnL,x as randomPrice,N as randomQuantity,y as randomRate,a1 as randomRateType,a5 as randomRating,Q as randomStatusOptions,$ as randomTaxCode,T as randomTradeDate,G as randomTraderName,L as randomUnitPrice,M as randomUnitPriceCurrency,a3 as randomUpdatedDate,J as randomUrl,H as randomUserName,d as renderAvatar,e as renderCountry,u as renderEditCountry,o as renderEditCurrency,s as renderEditIncoterm,p as renderEditProgress,t as renderEditRating,q as renderEditStatus,f as renderEmail,h as renderIncoterm,i as renderLink,j as renderPnl,k as renderProgress,l as renderRating,m as renderStatus,n as renderTotalPrice}from"./_tslib-832fff42.js";import*as oa from"react";import na from"lru-cache";import"@mui/material/Avatar";import"chance";import"@mui/material/colors";import"@mui/styles";import"@mui/material/Tooltip";import"@mui/icons-material/Info";import"clsx";import"@mui/material/styles";import"@mui/material/Rating";import"@mui/icons-material/ReportProblem";import"@mui/icons-material/Autorenew";import"@mui/icons-material/Done";import"@mui/material/Chip";import"@mui/material/Autocomplete";import"@mui/material/InputBase";import"@mui/material/Slider";import"@mui/material/utils";import"@mui/x-data-grid";import"@mui/material/Select";import"@mui/material/MenuItem";import"@mui/material/ListItemIcon";import"@mui/material/ListItemText";const ia=(a,e={})=>{var r;const{averageChildren:t=2,maxDepth:o=1,groupingField:n}=e;if(!(o>1&&null!=n))return a;if(a.rows.length>1e3)throw new Error("MUI: useDemoData tree data mode only works up to 1000 rows.");const i={},s=a.rows.length,m=a.columns.find((a=>a.field===e.groupingField));if(!m)throw new Error("MUI: The tree data grouping field does not exist");m.hide=!0;for(let e=0;e<s;e+=1){const r=a.rows[e],n=Math.floor(e*(Math.pow(t,o)-1)/s)+1,m=Math.floor(Math.log(n)/Math.log(t));i[m]||(i[m]={rows:{},rowIndexes:[]}),i[m].rows[e]={value:r,parentIndex:null},i[m].rowIndexes.push(e)}return Object.entries(i).forEach((([a,{rows:e}])=>{const r=Number(a);Object.values(e).forEach((a=>{const e=[];let t=null;for(let o=r;o>=0;o-=1){let s;o===r?(r>0&&(a.parentIndex=Number(c(i[r-1].rowIndexes))),s=a):s=i[o].rows[t.parentIndex],e.unshift(s.value[n]),t=s}a.value.path=e}))})),Object.assign(Object.assign({},a),{groupingColDef:{headerName:null!==(r=m.headerName)&&void 0!==r?r:m.field,width:250},getTreeDataPath:a=>a.path,treeData:!0})},sa=new na({max:10,maxAge:3e5});const ma=a=>{const e=Object.getOwnPropertyNames(a);for(const r of e){const e=a[r];e&&"object"==typeof e&&ma(e)}return Object.freeze(a)},da=a=>{var e,r,t;const[o,n]=oa.useState(a.rowLength),[i,s]=oa.useState(0),[m,d]=oa.useState(!0),l=oa.useCallback((()=>{let e="Commodity"===a.dataSet?_(a.editable):aa();return a.maxColumns&&(e=e.slice(0,a.maxColumns)),e}),[a.dataSet,a.editable,a.maxColumns]),[u,c]=oa.useState((()=>ia({columns:l(),rows:[]},a.treeData)));return oa.useEffect((()=>{const e=`${a.dataSet}-${o}-${i}-${a.maxColumns}`;if(sa.has(e)){const a=sa.get(e);return c(a),void d(!1)}let r=!0;return ea(void 0,void 0,void 0,(function*(){var t,n,i;let s;d(!0);const m=l();o>1e3?(s=yield ra(1e3,m),s=yield function(a,e,r){return ea(this,void 0,void 0,(function*(){return new Promise((t=>{const o=r.rows,n=r.rows.slice(),i={current:a-o.length};ta({work:function(){const a={};for(let r=0;r<e.length;r+=1){const t=e[r],n=Math.round(Math.random()*(o.length-1));"id"===t.field?a.id=`id-${i.current+o.length}`:a[t.field]=o[n][t.field]}n.push(a),i.current-=1},done:()=>t(Object.assign(Object.assign({},r),{rows:n})),tasks:i})}))}))}(o,m,s)):s=yield ra(o,m),r&&(s=ia(s,{maxDepth:null===(t=a.treeData)||void 0===t?void 0:t.maxDepth,groupingField:null===(n=a.treeData)||void 0===n?void 0:n.groupingField,averageChildren:null===(i=a.treeData)||void 0===i?void 0:i.averageChildren}),"production"!==process.env.NODE_ENV&&ma(s),sa.set(e,s),c(s),d(!1))})),()=>{r=!1}}),[o,u.columns,a.dataSet,a.maxColumns,null===(e=a.treeData)||void 0===e?void 0:e.maxDepth,null===(r=a.treeData)||void 0===r?void 0:r.groupingField,null===(t=a.treeData)||void 0===t?void 0:t.averageChildren,i,l]),{data:u,loading:m,setRowLength:n,loadNewData:()=>{s((a=>a+1))}}};export{da as useDemoData};

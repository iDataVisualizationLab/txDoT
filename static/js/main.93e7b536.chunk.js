(this.webpackJsonptxdot=this.webpackJsonptxdot||[]).push([[0],{214:function(t,e,s){},215:function(t,e,s){},216:function(t,e,s){},221:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s(0),n=s.n(a),c=s(10),r=s.n(c),l=(s(214),s(99)),o=(s(215),s(263)),j=s(264),h=s(265),x=s(262),d=s(266),u=s(256),b=s(268),p=s.p+"static/media/cover.43610a00.jpg",f=s(36),m=s(37),O=s(43),g=s(42),y=s(5),v=s(260),C=s(222),S=s(270),w=s(261),N=s(269),F=s(271),k=s(267),R=s(272),T=(s(216),s(16)),A=function(t){Object(O.a)(s,t);var e=Object(g.a)(s);function s(t){var i;return Object(f.a)(this,s),(i=e.call(this,t)).titles=["Age (Month)","Age (Year)","Modulus of Rupture (psi)","Modulus of Elasticity (ksi)","Concrete Stress (T) (psi)","Concrete Stress (E) (psi)","Total Concrete Stress (psi)","Stress to Strength Ratio (psi/psi)","Number of Load Repetitions to Failure","Number of Load Repetitions","Pavement Damage","Cumulative Damage","Number of Punchouts per Mile"],i.state={visible:!1},i}return Object(m.a)(s,[{key:"componentDidUpdate",value:function(t){if(this.props.rows!==t.rows){for(var e=this.props.rows,s=[],i=[],a=0;a<e[0].length;a++)s.push(1e9),i.push(0);for(var n=0;n<e.length;n++)for(a=0;a<e[n].length;a++)e[n][a]>i[a]&&(i[a]=e[n][a]),e[n][a]<s[a]&&(s[a]=e[n][a]);this.colorRedBlues=[];for(a=0;a<e[0].length;a++){var c=T.e().domain([s[a],(s[a]+i[a])/2,i[a]]).range(["#55f","white","#f55"]);this.colorRedBlues.push(c)}}}},{key:"render",value:function(){var t=this,e=12*this.props.parameter.C18-1,s=this.props.colorgreenred(this.props.rows[e][12]);return this.colorRedBlues?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{id:"div_CRCP_PERFORMANCE",children:[Object(i.jsx)("b",{children:"CRCP PERFORMANCE"}),Object(i.jsx)("br",{}),"Number of Punchouts per Mile:",Object(i.jsx)("input",{type:"TEXT",disabled:!0,style:{"background-color":s,textAlign:"center",fontSize:17,fontWeight:"bold"},value:parseFloat(this.props.rows[e][12]).toFixed(2),size:"7"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{id:"divCheckbox1",children:[Object(i.jsx)("input",{type:"checkbox",id:"checkbox1",onChange:function(e){return t.setState({visible:e.target.checked})}}),Object(i.jsx)("label",{for:"checkbox1",children:" Analysis Result "})," "]}),Object(i.jsxs)("table",{style:{width:"99%",fontSize:"12px",display:this.state.visible?"table":"none"},border:"1",id:"analysisTable",children:[Object(i.jsx)("tr",{style:{backgroundColor:"#888"},children:this.titles.map((function(t){return Object(i.jsx)("td",{children:t})}))}),this.props.rows.map((function(e){return Object(i.jsx)("tr",{children:e.map((function(e,s){return Object(i.jsx)("td",{style:{textAlign:"right",backgroundColor:12===s?t.props.colorgreenred(e):t.colorRedBlues[s](e),paddingRight:"10px",paddingTop:"0px",paddingBottom:"0px"},children:-1!==[1,2,3,12,8,9,5,6,7,10,11].indexOf(s)?parseFloat(e).toFixed(1==s||12==s?2:2==s||3==s||8==s||9==s?0:5==s||6==s?1:7==s?3:4):e})}))})}))]})]}):""}}]),s}(a.Component),M=s(94),G=s.p+"static/media/stress.d2ebc577.csv",B=function(t){Object(O.a)(s,t);var e=Object(g.a)(s);function s(t){var i;Object(f.a)(this,s),(i=e.call(this,t)).colorGreenRed=T.e().domain([0,25]).range(["#0f0","#f00"]),i.tip=Object(M.tip)().attr("class","d3-tip").offset([-10,0]).html((function(t){var e="#Punchouts per Mile: <span style='color:"+i.colorGreenRed(t.y)+"; font-weight: bold'>"+parseFloat(t.y).toFixed(2)+"</span><br>";return e+="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Age (months):  <span style='color:white; font-weight: bold'>"+t.x+"</span>"})),i.init=!0,i.recompute=function(){var t,e=i.state.data,s=9,a=[],n=[];a.push(1),a.push(a[0]/12),a.push(i.props.parameter.F8),a.push(7600*a[2]/1e3),a.push(+e[s-2]["STR (T)"]),a.push(e[s-2]["STR (E)"]*a[3]/5e3),a.push(a[4]+a[5]),a.push(a[6]/a[2]),a.push(11800*Math.pow(a[7],o(i.props.parameter.F19))),a.push(1e6*(((t=i.props.parameter.C24)<=2?1:t>=4?.6:.7)*i.props.parameter.C25)/12/i.props.parameter.C18),a.push(a[9]/a[8]),a.push(a[10]),a.push(18.985/(1+5*Math.pow(a[11],-1.1))),n.push(a);for(var c=0;c<i.props.parameter.C18;c++){0!=c&&(s=8);for(var r=0;r<12;r++)if(0==c&&0==r);else{s+=1;var l=[];l.push(a[0]+1),l.push(l[0]/12),l.push(i.props.parameter.F8*Math.pow(30*l[0]/(4+25.5*l[0]),.5)),l.push(7600*l[2]/1e3),l.push(+e[s-2]["STR (T)"]),l.push(e[s-2]["STR (E)"]*l[3]/5e3),l.push(l[4]+l[5]),l.push(l[6]/l[2]),l.push(11800*Math.pow(l[7],o(i.props.parameter.F19))),l.push(a[9]),l.push(l[9]/l[8]),l.push(a[11]+l[10]),l.push(18.985/(1+5*Math.pow(l[11],-1.1))),13==s&&(s=1),n.push(l),a=l}}function o(t){return t<200?.0221*t-15.97:t<300?.0164*t-14.83:t<500?.0038*t-11.05:t<1e3?33e-5*t-9.31:71e-5*t-9.69}i.setState({row1:a,rows:n,rowIndexStress:s})},i.parameterGraph=function(){for(var t=i.state.width,e=i.state.height,s=i.state.rows,a=[],n=0;n<s.length;n++){var c={};c.x=s[n][0],c.y=s[n][12],a.push(c)}var r=T.e().domain([0,T.d(a,(function(t){return t.x}))]).range([0,t]),l=T.e().domain([0,T.d(a,(function(t){return t.y}))]).range([e,0]),o=T.a(r).tickSizeInner(-e).tickSizeOuter(0).tickPadding(10),j=T.b(l).tickSizeInner(-t).tickSizeOuter(0).tickPadding(10),h=T.c().x((function(t){return r(t.x)})).y((function(t){return l(t.y)}));i.setState({xScale:r,yScale:l,xAxis:o,yAxis:j,line:h,dataset:a})},i.tableCreate=function(){};var a={top:20,right:80,bottom:60,left:120},n=900-a.left-a.right,c=400-a.top-a.bottom;return i.state={margin:a,width:n,height:c,row1:[],rows:[],init:!0},i}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var t=this;T.g(G).then((function(e){t.setState({data:e}),t.recompute(),t.tableCreate(),t.parameterGraph()}))}},{key:"componentDidUpdate",value:function(t){var e=this.props.init!==t.init&&this.props.init;if(this.init=e||this.init,(this.props.parameter!==t.parameter||this.init)&&(this.recompute(),this.parameterGraph(),this.state.data&&this.refs.svg&&this.state.xAxis&&this.state.yAxis)){var s=T.f(this.refs.svg).select("g.content");s.selectAll(".xaxis").attr("transform","translate(0,"+this.state.height+")").call(this.state.xAxis),s.selectAll(".yaxis").call(this.state.yAxis),this.init&&this.state.dataset.length&&(this.init=!1)}}},{key:"render",value:function(){var t=this;this.props.classes;return this.state.rows.length&&this.state.dataset?Object(i.jsxs)(u.a,{container:!0,alignItems:"center",direction:"column",spacing:1,children:[Object(i.jsx)(u.a,{item:!0,xs:11,children:Object(i.jsx)("svg",{ref:"svg",width:this.state.width+this.state.margin.left+this.state.margin.right,height:this.state.height+this.state.margin.top+this.state.margin.bottom,children:Object(i.jsxs)("g",{className:"content",transform:"translate("+this.state.margin.left+","+this.state.margin.top+")",children:[Object(i.jsx)("text",{className:"xAxisText",style:{textAnchor:"middle",textShadow:"1px 1px 0 rgba(200, 200, 200, 0.7"},fontFamily:"sans-serif",fontSize:"16px",x:this.state.width/2,y:this.state.height+40,children:"Age (months)"}),Object(i.jsx)("text",{className:"YAxisText",transform:"translate(-50,"+this.state.height/2+") rotate(-90)",style:{textAnchor:"middle",textShadow:"1px 1px 0 rgba(200, 200, 200, 0.7"},fontFamily:"sans-serif",fontSize:"16px",children:"Number of Punchouts per Mile"}),Object(i.jsx)("g",{className:"xaxis",transform:"translate(0,"+this.state.height+")"}),Object(i.jsx)("g",{className:"yaxis"}),Object(i.jsx)("path",{className:"line",d:this.state.line(this.state.dataset)}),this.state.dataset.map((function(e){return Object(i.jsx)("circle",{className:"point",r:4,cx:t.state.xScale(e.x),cy:t.state.yScale(e.y),fill:t.colorGreenRed(e.y),strokeWidth:.5,stroke:"#000"})}))]})})}),Object(i.jsx)(u.a,{item:!0,xs:11,children:Object(i.jsx)(A,{parameter:this.props.parameter,colorgreenred:this.colorGreenRed,rows:this.state.rows})})]}):""}}]),s}(a.Component),D=Object(y.a)((function(t){return{root:{width:"100%","& .MuiTextField-root":{width:"100%"},"& input":{width:"100%"}}}}))(B),E=function(t){Object(O.a)(s,t);var e=Object(g.a)(s);function s(t){var i;return Object(f.a)(this,s),(i=e.call(this,t)).handleNext=function(){i.setState({activeStep:i.state.activeStep+1})},i.handleBack=function(){i.setState({activeStep:i.state.activeStep-1})},i.handleReset=function(){i.setState({activeStep:0})},i.state={activeStep:0,stepsLength:3,finished:!1,C18:30,C19:10,C24:2,C25:100,F7:14,F8:570,F16:6,F17:400,F19:539},i}return Object(m.a)(s,[{key:"render",value:function(){var t=this,e=this.props.classes,s=function(){return Object(i.jsx)("div",{className:e.actionsContainer,children:Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{disabled:0===t.state.activeStep,onClick:t.handleBack,className:e.button,children:"Back"}),Object(i.jsx)(b.a,{variant:"contained",color:"primary",onClick:t.handleNext,className:e.button,children:t.state.activeStep===t.state.stepsLength-1?"Finish":"Next"})]})})};return this.state.activeStep!==this.state.stepsLength||this.state.finished||this.setState({finished:!0}),Object(i.jsxs)(v.a,{maxWidth:"lg",children:[" ",Object(i.jsxs)(C.a,{elevation:3,children:[Object(i.jsxs)(S.a,{activeStep:this.state.activeStep,orientation:"vertical",children:[Object(i.jsxs)(w.a,{children:[Object(i.jsx)(N.a,{children:"Step 1"}),Object(i.jsxs)(F.a,{children:[Object(i.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(i.jsxs)(u.a,{container:!0,spacing:4,children:[Object(i.jsxs)(u.a,{container:!0,item:!0,xs:6,spacing:1,justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:6,justify:"flex-start",children:Object(i.jsx)(k.a,{margin:"dense",id:"deisgnNo",label:"Design No",defaultValue:"",variant:"filled"})}),Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"district",label:"DISTRICT",defaultValue:"",variant:"filled"})}),Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"highway",label:"HIGHWAY",defaultValue:"",variant:"filled"})}),Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"county",label:"COUNTY",defaultValue:"",variant:"filled"})})]}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:6,spacing:1,children:[Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"control",label:"CONTROL",defaultValue:"",variant:"filled"})}),Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"date",label:"DATE",defaultValue:"",variant:"filled"})}),Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"section",label:"SECTION",defaultValue:"",variant:"filled"})}),Object(i.jsx)(u.a,{item:!0,xs:6,children:Object(i.jsx)(k.a,{margin:"dense",id:"job",label:"JOB",defaultValue:"",variant:"filled"})})]}),Object(i.jsx)(u.a,{container:!0,item:!0,xs:12,spacing:1,children:Object(i.jsx)(k.a,{id:"comment",label:"COMMENTS",multiline:!0,rows:4,defaultValue:"",variant:"filled"})})]})}),s()]})]}),Object(i.jsxs)(w.a,{children:[Object(i.jsx)(N.a,{children:"Step 2"}),Object(i.jsxs)(F.a,{children:[Object(i.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(i.jsxs)(u.a,{container:!0,spacing:4,children:[Object(i.jsxs)(u.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:12,justify:"flex-start",children:Object(i.jsx)(x.a,{variant:"h6",children:"Basic design information"})}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:11,spacing:1,justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Design life (years)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)(R.a,{value:this.state.C18,onChange:function(e,s){return t.setState({C18:s})},defaultValue:30,min:1,max:100,id:"C18",valueLabelDisplay:"auto"})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Number of punchouts per Mile"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)(R.a,{value:this.state.C19,onChange:function(e,s){return t.setState({C19:s})},id:"C19",defaultValue:10,min:1,max:100,valueLabelDisplay:"auto"})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Total number of lanes in one direction"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)(R.a,{value:this.state.C24,onChange:function(e,s){return t.setState({C24:s})},defaultValue:2,min:1,max:10,id:"C24",valueLabelDisplay:"auto"})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Total design traffic in one direction (million ESAL)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)(R.a,{value:this.state.C25,onChange:function(e,s){return t.setState({C25:s})},defaultValue:100,min:10,max:1e3,id:"C25",valueLabelDisplay:"auto"})})]})]}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:12,justify:"flex-start",children:Object(i.jsx)(x.a,{variant:"h6",children:"Structural design criteria"})}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:11,spacing:1,justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Acceptable number of punchouts per mile"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{})})]})]}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:12,justify:"flex-start",children:Object(i.jsx)(x.a,{variant:"h6",children:"Concrete material information"})}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:11,spacing:1,justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Thickness of Concrete Layer (in.)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)(R.a,{value:this.state.F7,onChange:function(e,s){return t.setState({F7:s})},defaultValue:14,min:2,max:16,id:"F7",valueLabelDisplay:"auto"})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Number of punchouts per Mile"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)(R.a,{value:this.state.F8,onChange:function(e,s){return t.setState({F8:s})},id:"F8",defaultValue:570,min:1,max:1e3,valueLabelDisplay:"auto"})})]})]})]})}),s()]})]}),Object(i.jsxs)(w.a,{children:[Object(i.jsx)(N.a,{children:"Step 3"}),Object(i.jsxs)(F.a,{children:[Object(i.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(i.jsxs)(u.a,{container:!0,spacing:4,children:[Object(i.jsxs)(u.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:12,justify:"flex-start",children:Object(i.jsx)(x.a,{variant:"h6",children:"Base layer information"})}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:11,spacing:1,justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Base type"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Base layer thickness (inches)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Modulus of base layer (ksi)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{})})]})]}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:12,justify:"flex-start",children:Object(i.jsx)(x.a,{variant:"h6",children:"Subgrade layer information"})}),Object(i.jsxs)(u.a,{container:!0,item:!0,xs:11,spacing:1,justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Soil classification system"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Soil classification of subgrade"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{type:"number",id:"16",value:this.state.F16,onChange:function(e,s){return t.setState({F16:s})}})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Modulus of Base Layer (ksi)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{type:"number",id:"17",value:this.state.F17,onChange:function(e,s){return t.setState({F17:s})}})}),Object(i.jsx)(u.a,{item:!0,xs:8,justify:"flex-start",children:Object(i.jsxs)(u.a,{container:!0,xs:12,justify:"flex-start",children:[Object(i.jsx)("span",{children:"Composite K (psi/in.)"}),Object(i.jsx)("span",{className:e.dot,style:{flexGrow:1}})]})}),Object(i.jsx)(u.a,{item:!0,xs:4,children:Object(i.jsx)("input",{type:"number",id:"19",value:this.state.F19,onChange:function(e,s){return t.setState({F19:s})}})})]})]})]})}),s()]})]})]}),this.state.activeStep===this.state.stepsLength&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(C.a,{square:!0,elevation:0,className:e.resetContainer,children:[Object(i.jsx)(x.a,{children:"All steps completed - you're finished"}),Object(i.jsx)(b.a,{onClick:this.handleReset,className:e.button,children:"Reset"})]})}),this.state.finished?Object(i.jsx)(D,{init:this.state.activeStep===this.state.stepsLength,parameter:{C18:this.state.C18,C19:this.state.C19,C24:this.state.C24,C25:this.state.C25,F7:this.state.F7,F8:this.state.F8,F16:this.state.F16,F17:this.state.F17,F19:this.state.F19}}):""]})]})}}]),s}(a.Component),L=Object(y.a)((function(t){return{root:{width:"100%","& .MuiTextField-root":{width:"100%"},"& input":{width:"100%"}},button:{marginTop:t.spacing(1),marginRight:t.spacing(1)},actionsContainer:{marginBottom:t.spacing(2)},resetContainer:{padding:t.spacing(3)},dot:{borderBottom:"3px dotted",marginBottom:"4px"}}}))(E),P=Object(o.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},titleNav:{flexGrow:1},title:{color:"white"},cover:{width:"100%",position:"fixed",background:"linear-gradient(0deg,rgba(0,0,0,0) 0,#000 100%), url(".concat(p,") no-repeat center center fixed"),backgroundSize:"cover",height:"100vh",overflow:"hidden",zIndex:-1}}}));var I=function(){var t=n.a.useState("home"),e=Object(l.a)(t,2),s=e[0],a=e[1],c=P();return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:c.cover}),Object(i.jsx)(j.a,{position:"static",children:Object(i.jsx)(h.a,{children:Object(i.jsx)(x.a,{variant:"h6",className:c.titleNav,children:"TxCRCP-ME"})})}),Object(i.jsxs)("div",{className:c.root,children:[Object(i.jsx)(d.a,{direction:"up",in:"home"===s,mountOnEnter:!0,unmountOnExit:!0,children:Object(i.jsxs)(u.a,{container:!0,spacing:5,alignItems:"center",justify:"center",direction:"column",style:{height:"calc(100vh - 64px)",width:"100%"},children:[Object(i.jsx)(u.a,{item:!0,children:Object(i.jsx)(x.a,{variant:"h3",className:c.title,children:"TxDOT Mechanistic-Empirical CRCP Design System"})}),Object(i.jsxs)(u.a,{container:!0,item:!0,alignItems:"stretch",justify:"center",direction:"column",spacing:3,style:{width:"fit-content"},children:[Object(i.jsx)(u.a,{item:!0,children:Object(i.jsx)(b.a,{variant:"contained",color:"primary",style:{width:"100%"},onClick:function(){return a("CRCP")},children:"CRCP Design"})}),Object(i.jsx)(u.a,{item:!0,children:Object(i.jsx)(b.a,{variant:"contained",style:{width:"100%"},children:"Slab Support"})}),Object(i.jsx)(u.a,{item:!0,children:Object(i.jsx)(b.a,{variant:"contained",style:{width:"100%"},children:"Product Disclaimer"})})]})]})}),Object(i.jsx)(d.a,{direction:"up",in:"CRCP"===s,mountOnEnter:!0,unmountOnExit:!0,children:Object(i.jsx)(L,{})})]})]})},V=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,273)).then((function(e){var s=e.getCLS,i=e.getFID,a=e.getFCP,n=e.getLCP,c=e.getTTFB;s(t),i(t),a(t),n(t),c(t)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),V()}},[[221,1,2]]]);
//# sourceMappingURL=main.93e7b536.chunk.js.map
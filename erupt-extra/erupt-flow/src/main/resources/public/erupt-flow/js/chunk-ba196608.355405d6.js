(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba196608"],{"2c41":function(t,e,o){"use strict";o("a093")},"4e02":function(t,e,o){"use strict";o.d(e,"e",(function(){return n})),o.d(e,"f",(function(){return s})),o.d(e,"g",(function(){return i})),o.d(e,"h",(function(){return a})),o.d(e,"b",(function(){return u})),o.d(e,"m",(function(){return c})),o.d(e,"j",(function(){return m})),o.d(e,"k",(function(){return l})),o.d(e,"a",(function(){return d})),o.d(e,"d",(function(){return p})),o.d(e,"l",(function(){return g})),o.d(e,"i",(function(){return h})),o.d(e,"c",(function(){return f}));var r=o("0c6d");function n(t){return Object(r["a"])({url:"/admin/form/group",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/process/groups",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/admin/form/sort",method:"put",data:t})}function a(t){return Object(r["a"])({url:"/admin/form/group/sort",method:"put",data:t})}function u(t){return Object(r["a"])({url:"/admin/form/group",method:"post",params:{groupName:t}})}function c(t,e){return Object(r["a"])({url:"/admin/form/group/"+t,method:"put",data:e})}function m(t){return Object(r["a"])({url:"/admin/form/group/"+t,method:"delete"})}function l(t,e){return Object(r["a"])({url:"/admin/form/"+t,method:"put",data:e})}function d(t){return Object(r["a"])({url:"/admin/form",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/admin/form/detail/"+t,method:"get"})}function g(t){return Object(r["a"])({url:"/admin/form/detail",method:"put",data:t})}function h(t){return Object(r["a"])({url:"/admin/form/"+t.formId,method:"delete",data:t})}function f(){return Object(r["a"])({url:"/forms",method:"get"})}},"7f4c":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{ref:"panel",staticClass:"from-panel"},[e("div",{staticClass:"from-title"},[e("span",[t._v("流程面板")]),e("div",[e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.newProcess("")}}},[t._v("新建表单")]),e("el-button",{attrs:{icon:"el-icon-plus",size:"mini"},on:{click:t.addGroup}},[t._v("新建分组")])],1)]),e("draggable",{attrs:{list:t.groups,group:"group",handle:".group-sort",filter:".undrag",options:{animation:300,chosenClass:"choose",sort:!0,scroll:!0}},on:{start:function(t){},end:t.groupSort}},t._l(t.groups,(function(o,r){return e("div",{key:r,class:{"form-group":!0,undrag:!1}},[e("div",{staticClass:"form-group-title"},[e("span",[t._v(t._s(o.groupName))]),e("span",[t._v("("+t._s(o.items.length)+")")]),o.groupId>0?e("i",{staticClass:"el-icon-rank group-sort",attrs:{title:"长按拖动可对分组排序"}}):t._e(),o.groupId>0?e("div",[e("el-dropdown",[e("el-button",{staticStyle:{color:"#8c939d"},attrs:{type:"text",icon:"el-icon-setting"}},[t._v("编辑分组")]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{icon:"el-icon-edit-outline"},nativeOn:{click:function(e){return t.editGroup(o)}}},[t._v("修改名称")]),e("el-dropdown-item",{attrs:{icon:"el-icon-delete"},nativeOn:{click:function(e){return t.delGroup(o)}}},[t._v("删除分组")])],1)],1)],1):t._e()]),e("draggable",{staticStyle:{width:"100%","min-height":"25px"},attrs:{list:o.items,group:"group_"+o.groupId,filter:".undrag",handle:".form-sort",options:{animation:300,chosenClass:"choose",scroll:!0,sort:!0}},on:{end:t.formSort,start:function(e){t.movingGroup=o}}},t._l(o.items,(function(r,n){return e("div",{key:n,class:{"form-group-item":!0,undrag:!1}},[e("div",{staticClass:"form-sort",attrs:{title:"长按拖动进行排序"}},[e("i",{class:r.logo.icon,style:"background: "+r.logo.background}),e("span",[t._v(t._s(r.formName))])]),e("div",{staticClass:"desp"},[t._v(t._s(r.remark))]),e("div",[e("span",[t._v("最后更新："+t._s(r.updated))])]),e("div",[r.isStop?t._e():e("div",[e("el-button",{attrs:{icon:"el-icon-edit-outline",size:"mini",type:"text"},on:{click:function(e){return t.editFrom(r,o)}}},[t._v("编辑 ")]),e("el-button",{attrs:{type:"text",icon:"el-icon-close",size:"mini"},on:{click:function(e){return t.stopFrom(r)}}},[t._v("停用")]),e("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"left",trigger:"click",width:"400"},on:{show:function(e){t.moveSelect}}},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.moveSelect,callback:function(e){t.moveSelect=e},expression:"moveSelect"}},t._l(t.groups,(function(r){return e("el-radio",{directives:[{name:"show",rawName:"v-show",value:r.groupId>0,expression:"g.groupId > 0"}],key:r.id,staticStyle:{margin:"10px"},attrs:{label:r.groupId,border:"",disabled:r.groupId===o.groupId}},[t._v(t._s(r.groupName)+" ")])})),1),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.moveFrom(r)}}},[t._v("确定")])],1),e("el-button",{attrs:{slot:"reference",icon:"el-icon-folder",size:"mini",type:"text"},slot:"reference"},[t._v("移动到 ")])],1)],1),r.isStop?e("div",[e("el-button",{attrs:{icon:"el-icon-edit-outline",size:"mini",type:"text"},on:{click:function(e){return t.editFrom(r,o)}}},[t._v("编辑 ")]),e("el-button",{attrs:{type:"text",icon:"el-icon-check",size:"mini"},on:{click:function(e){return t.stopFrom(r)}}},[t._v("启用")]),e("el-button",{attrs:{type:"text",icon:"el-icon-remove",size:"mini"},on:{click:function(e){return t.removeForm(r)}}},[t._v("删除")])],1):t._e()])])})),0),void 0!==o.items&&0!==o.items.length||0!==o.groupId?t._e():e("div",{staticStyle:{"text-align":"center"}},[e("p",{staticStyle:{color:"#C0C4CC"}},[t._v("没有分组的流程会显示在此处")])]),void 0!==o.items&&0!==o.items.length||-1!==o.groupId?t._e():e("div",{staticStyle:{"text-align":"center"}},[e("p",{staticStyle:{color:"#C0C4CC"}},[t._v("停用的流程会显示在此处")])]),(void 0===o.items||0===o.items.length)&&o.groupId>0?e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{staticStyle:{"padding-top":"0"},attrs:{icon:"el-icon-plus",type:"text"},on:{click:function(e){return t.newProcess(o.groupId)}}},[t._v("创建新表单 ")])],1):t._e()],1)})),0)],1)},n=[],s=(o("14d9"),o("b76a")),i=o.n(s),a=o("4e02"),u=o("3786"),c={name:"FormsPanel",components:{draggable:i.a},data(){return{moveSelect:"",movingGroup:{},visible:!1,groups:[]}},created(){sessionStorage.setItem("token",Object(u["a"])())},mounted(){this.getGroups()},methods:{getGroups(){Object(a["e"])().then(t=>{this.groups=t.data,this.groups.forEach(t=>{t.items.forEach(t=>{t.logo=JSON.parse(t.logo)})})})},newProcess(t){this.$store.commit("setTemplate",this.getTemplateData()),this.$store.commit("setIsEdit",!1),this.$router.push("/admin/design?_token="+Object(u["a"])()+"&groupId="+t)},groupSort(){this.groups.length<=0||Object(a["h"])(this.groups.map(t=>t.groupId)).then(t=>{this.getGroups()}).catch(t=>{this.getGroups(),this.$message.error(t.response.message)})},formSort(){this.movingGroup.items.length<=0||Object(a["g"])(this.movingGroup.items.map(t=>t.formId)).then(t=>{this.movingGroup={},this.getGroups()}).catch(t=>{this.movingGroup={},this.getGroups(),this.$message.error(t.response.message)})},addGroup(){this.$prompt("请输入要添加的组名","新的分组名",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[\u4E00-\u9FA5A-Za-z0-9\\-]{1,30}$/,inputErrorMessage:"分组名不能为空且长度小于30",inputPlaceholder:"请输入分组名"}).then(({value:t})=>{Object(a["b"])(t).then(t=>{this.$message.success(t.message),this.getGroups()}).catch(t=>this.$message.error(t.response.data))})},delGroup(t){t.items&&t.items.length>0?this.$message.warning("分组下有表单，禁止删除"):this.$confirm("确定要删除分组 "+t.groupName+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(a["j"])(t.groupId).then(t=>{this.$message.success(t.message),this.getGroups()}).catch(t=>this.$message.error(t.response.message))})},editGroup(t){this.$prompt("请输入新的组名","修改分组名",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[\u4E00-\u9FA5A-Za-z0-9\\-]{1,30}$/,inputErrorMessage:"分组名不能为空且长度小于30",inputPlaceholder:"请输入分组名",inputValue:t.name}).then(({value:e})=>{Object(a["m"])(t.groupId,{groupId:t.groupId,groupName:e}).then(t=>{this.$message.success(t.message),this.getGroups()}).catch(t=>this.$message.error(t.response.data))})},getTemplateData(t,e){return t},removeForm(t){this.$confirm("删除流程后无法恢复，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(a["i"])(t).then(t=>{this.$message.success(t.message),this.getGroups(),this.moveSelect=null}).catch(t=>this.$message.error(t.response.message))})},editFrom(t,e){this.$router.push("/admin/design?code="+t.formId+"&_token="+Object(u["a"])())},stopFrom(t){t.isStop?this.$confirm("启用后将会进入 “其他” 分组，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(a["k"])(t.formId,{formId:t.formId,groupId:"0"}).then(t=>{this.$message.success(t.message),this.getGroups(),this.moveSelect=null}).catch(t=>this.$message.error(t.response.message))}):this.$confirm("流程停用后将会移到 “已停用” 分组，您可以再次启用或者删除它，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(a["k"])(t.formId,{formId:t.formId,groupId:"-1"}).then(t=>{this.$message.success(t.message),this.getGroups(),this.moveSelect=null}).catch(t=>this.$message.error(t.response.message))})},moveFrom(t){t.isStop?this.$message.warning("停用的流程禁止移动，你可以将其启用后移动"):null!==this.moveSelect&&""!==this.moveSelect?Object(a["k"])(t.formId,{formId:t.formId,groupId:this.moveSelect}).then(t=>{this.getGroups(),this.moveSelect=null}).catch(t=>this.$message.error(t.response.message)):this.$message.error("请选择分组")}}},m=c,l=(o("2c41"),o("2877")),d=Object(l["a"])(m,r,n,!1,null,"19875ec1",null);e["default"]=d.exports},a093:function(t,e,o){}}]);
//# sourceMappingURL=chunk-ba196608.355405d6.js.map
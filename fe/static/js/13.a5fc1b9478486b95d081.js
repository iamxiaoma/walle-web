webpackJsonp([13],{HdAN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),o=n("exGp"),c=n.n(o),i=n("Dd8w"),l=n.n(i),s={0:"无效",1:"正常"},u=n("oZit"),d=n("NYxO"),p={name:"roles",mixins:[n("3HZp").a],data:function(){return{enableCreate:!1,value:"",columns:function(){var e=this;return[{prop:"name",label:"项目名",width:180},{prop:"status",label:"状态",width:140,render:function(e,t){return s[t.row.status]}},{prop:"environment_name",label:"环境",width:150},{label:"空间",width:150,prop:"space_name"},{label:"操作",minWidth:220,render:function(t,n,r){return t("div",[e.renderMemberTool(n.row),e.renderEditTool(n.row),e.renderCopyTool(n.row),e.renderReadTool(n.row),e.renderTestTool(n.row),e.renderDeleteTool(n.row)])}}]}.call(this),form:{search:""},breadcrumbData:[{to:"",name:"项目"}]}},watch:{value:function(){this.search()}},computed:l()({},Object(d.c)(["user","space","spaceName"])),methods:{callServe:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.table;return c()(a.a.mark(function n(){var r,o,c,i,l;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.f)({size:t.page.size,page:t.page.currentPage,kw:e.value});case 2:r=n.sent,o=r.data,c=o.list,i=o.count,l=o.enable_create,e.enableCreate=l,t.page.total=i,t.list=c;case 10:case"end":return n.stop()}},n,e)}))()},search:function(){this.callServe()},addProject:function(){this.$router.push("/"+this.spaceName+"/project/create")},edit:function(e){this.$router.push("/"+this.spaceName+"/project/edit/"+e.id)},read:function(e){this.$router.push("/"+this.spaceName+"/project/read/"+e.id)},editmembers:function(e){this.$router.push("/"+this.spaceName+"/project/members/"+e.id)},renderReadTool:function(e){var t=this,n=this.$createElement;return e.enable_view?n("el-button",{attrs:{type:"text",icon:"el-icon-view",size:"small"},on:{click:function(){return t.read(l()({},e))}}},["查看"]):null},renderEditTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(){return t.edit(l()({},e))}}},["编辑"]):null},renderCopyTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"wl-icon-copy",size:"small"},on:{click:function(){return t.copy(l()({},e))}}},["复制"]):null},renderDeleteTool:function(e){var t=this,n=this.$createElement;return e.enable_delete?n("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"small"},class:"user-delete",on:{click:function(){return t.delete(l()({},e))}}},["删除"]):null},renderMemberTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(){return t.editmembers(l()({},e))}}},["成员管理"]):null},renderTestTool:function(e){var t=this,n=this.$createElement;return e.enable_update?n("el-button",{attrs:{type:"text",icon:"wl-icon-test",size:"small"},on:{click:function(){return t.test(l()({},e))}}},["检测"]):null},test:function(e){this.$router.push("/"+this.spaceName+"/project/detection/"+e.id)},copy:function(e){var t=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.b)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"复制成功!"});case 4:case"end":return n.stop()}},n,t)}))()},deleteRole:function(e){var t=this;return c()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.c)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"删除成功!"});case 4:case"end":return n.stop()}},n,t)}))()},delete:function(e){var t=this;this.$confirm("确定删除该项目吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRole(e)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wl-project"},[n("wl-breadcrumb",{attrs:{data:e.breadcrumbData,isBackButton:!1}}),e._v(" "),n("el-form",{attrs:{inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入项目名称",size:"small"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),e._v(" "),e.enableCreate?n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addProject}},[e._v("新建项目")])],1):e._e()],1),e._v(" "),n("wl-table",{ref:"table",attrs:{columns:e.columns},on:{callServe:e.callServe}})],1)},staticRenderFns:[]};var f=n("VU/8")(p,m,!1,function(e){n("nTDJ")},null,null);t.default=f.exports},nTDJ:function(e,t){}});
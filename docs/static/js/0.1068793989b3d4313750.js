webpackJsonp([0],{mvHQ:function(e,t,r){e.exports={default:r("qkKv"),__esModule:!0}},q8zr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("mvHQ"),o=r.n(a),n={name:"Propertys",data:function(){return{propDatas:[{name:"dropdown-data",type:"Array",value:"[]",remark:"<strong>数据源</strong>支持两种格式的数据源，可以是普通数组<code>[&acute;Vue&acute;, ...]</code>，也可以是<code>[{text: &acute;Vue&acute;, value: &acute;Vue&acute;}, ...]</code>。第二种类型的数据源的<code>text</code>是必须的，当需要禁用某项时，可添加一个<code>disabled</code>的属性并且将值设置为<code>true</code>"},{name:"v-model",type:"Array | String",value:"",remark:"默认显示的值"},{name:"placeholder",type:"String",value:"",remark:"html原有属性"},{name:"disabled",type:"Boolean",value:"false",remark:"html原有属性"},{name:"multiple",type:"Boolean",value:"false",remark:"是否允许多选"},{name:"search",type:"Boolean",value:"false",remark:"是否允许搜索，当设置为<code>true</code>时，会把html原有<code>readonly</code>属性设置为<code>false</code>"},{name:"size",type:"Number",value:"0",remark:"下拉项的可视数，超过设置的值将显示滚动条"},{name:"is-dropdown",type:"Boolean",value:"false",remark:"是否在组件渲染完成，显示下拉项"}]}},methods:{consoleInfo:function(e,t){e=o()(e),console.info("%c演示-"+t+"%c输出：%c"+e,"color: #47B784;","color: #000;","background-color: #d1ecf1; border-color: #d1ecf1; color: #0c5460; border-radius: 0.25rem; padding: 0.25rem 0.5rem;")}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[e._m(0),e._v(" "),r("tbody",e._l(e.propDatas,function(t,a){return r("tr",{key:a},[r("td",[e._v(e._s(t.name))]),e._v(" "),r("td",[e._v(e._s(t.type))]),e._v(" "),r("td",[e._v(e._s(t.value))]),e._v(" "),r("td",{domProps:{innerHTML:e._s(t.remark)}})])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",{staticClass:"bg-info"},[t("tr",[t("th",{staticStyle:{width:"10rem"}},[this._v("属性名")]),this._v(" "),t("th",{staticStyle:{width:"8rem"}},[this._v("类型")]),this._v(" "),t("th",{staticStyle:{width:"5rem"}},[this._v("默认值")]),this._v(" "),t("th",[this._v("说明")])])])}]},s=r("VU/8")(n,l,!1,null,null,null);t.default=s.exports},qkKv:function(e,t,r){var a=r("FeBl"),o=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}});
//# sourceMappingURL=0.1068793989b3d4313750.js.map
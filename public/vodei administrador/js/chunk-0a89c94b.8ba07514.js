(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a89c94b"],{5559:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-list-group",t._l(t.temporadas,(function(e,o){return a("b-list-group-item",{key:o},[a("label",[t._v(t._s(e.titulo))]),t.seleccionable?a("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:function(e){return t.selContenido(o)}}},[t._v(" Seleccionar ")]):t._e()],1)})),1)],1)},r=[],n=a("5530"),i=a("2f62"),s={name:"ListaContenido",props:{temporadas:{type:Array,default:null},seleccionable:{type:Boolean,default:!0}},data:function(){return{state:"not_accepted"}},methods:Object(n["a"])({selContenido:function(t){this.updateTemporada(this.temporadas[t]),this.updateCapitulos(this.temporadas[t].id_temporada)}},Object(i["d"])("Catalogo",["updateTemporada"]),{},Object(i["b"])("Catalogo",["updateCapitulos"]))},l=s,c=a("2877"),d=Object(c["a"])(l,o,r,!1,null,"2034007a",null);e["a"]=d.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var o=a("1d80"),r=a("5899"),n="["+r+"]",i=RegExp("^"+n+n+"*"),s=RegExp(n+n+"*$"),l=function(t){return function(e){var a=String(o(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},6419:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"ModalPelicula",title:"Confirme"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var o=e.ok,r=e.cancel;return[a("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){o(),t._agregarTemporada()}}},[t._v(" Agregar ")]),a("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return r()}}},[t._v(" Cancelar ")])]}}])},[a("h5",[t._v("¿Agregar Temporada?")]),a("b-form",{on:{submit:function(t){t.preventDefault()}}},[a("b-form-group",{attrs:{align:"center",id:"input-group-temporada-modal",label:"Temporada","label-for":"temporada-modal"}},[a("b-form-input",{attrs:{id:"temporada-modal",type:"text",readonly:""},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}})],1),null!=t.contenido?a("b-form-group",{attrs:{align:"center",id:"input-group-serie-modal",label:"Serie","label-for":"serie-modal"}},[a("b-form-input",{attrs:{id:"serie-modal",type:"text",readonly:""},model:{value:t.contenido.Titulo,callback:function(e){t.$set(t.contenido,"Titulo",e)},expression:"contenido.Titulo"}})],1):t._e(),a("b-form-group",{attrs:{id:"input-group-sinopsis",label:"Sinopsis:","label-for":"sinopsis"}},[a("b-form-textarea",{attrs:{id:"sinopsis",placeholder:"Ingrese sinopsis...",rows:"3",readonly:"",required:"","max-rows":"6"},model:{value:t.sinopsis,callback:function(e){t.sinopsis=e},expression:"sinopsis"}})],1)],1)],1),a("b-container",[a("h1",{staticClass:"display-4 my-3"},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),t._v(" Agregar Temporada ")]),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("b-form-row",[a("b-col",{attrs:{"cols-sm":"12","cols-md":"4"}},[0===t.series.length?a("b-alert",{attrs:{variant:"warning",show:""}},[a("i",{staticClass:"fa fa-exclamation-triangle",attrs:{"aria-hidden":"true"}}),t._v(" No hay series registradas. ")]):null==t.contenido?a("b-form-group",{attrs:{id:"input-group-serie",label:"Serie:","label-for":"serie"}},[a("b-input-group",[a("b-form-input",{attrs:{id:"serie",type:"text",required:"",placeholder:"Ingrese el nombre de la serie"},on:{keyup:t.filtrar},model:{value:t.filtro,callback:function(e){t.filtro=e},expression:"filtro"}}),a("b-input-group-addon",[a("b-button",{attrs:{variant:"info"},on:{click:t.filtrar}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),t._v(" Buscar ")])],1)],1),a("ListaContenido",{attrs:{contenidos:t.catalogo}})],1):a("div",[a("b-button",{attrs:{variant:"danger",block:""},on:{click:function(e){return t.reiniciarSerie()}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("ContenidoIndividual",{attrs:{titulo:t.contenido.Titulo,portada:t.contenido.portada,nTemp:t.contenido.nTemp,detalles:!1,tContenido:1}})],1)],1),a("b-col",{attrs:{"cols-sm":"12","cols-md":"4"}},[a("div",{staticClass:"border-bottom mb-2"},[a("label",[t._v("Temporadas")])]),null==t.contenido?a("b-alert",{attrs:{variant:"warning",show:""}},[a("i",{staticClass:"fa fa-exclamation-triangle",attrs:{"aria-hidden":"true"}}),t._v(" Seleccione una serie. ")]):0===t.temporadas.length?a("b-alert",{attrs:{variant:"warning",show:""}},[a("i",{staticClass:"fa fa-exclamation-triangle",attrs:{"aria-hidden":"true"}}),t._v(" La serie no posee temporadas aun. ")]):a("ListaTemporadas",{staticClass:"overflow-auto listas",attrs:{temporadas:t.temporadas,seleccionable:!1}})],1),a("b-col",{attrs:{"cols-sm":"12","cols-md":"4"}},[a("b-form-group",{attrs:{align:"center",id:"input-group-temporada",label:"Agregue temporada","label-for":"temporada"}},[a("b-form-input",{attrs:{id:"temporada",type:"text",required:""},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}})],1),a("b-form-group",{attrs:{id:"input-group-sinopsis",label:"Sinopsis:","label-for":"sinopsis"}},[a("b-form-textarea",{attrs:{id:"sinopsis",placeholder:"Ingrese sinopsis...",rows:"3",required:"","max-rows":"6"},model:{value:t.sinopsis,callback:function(e){t.sinopsis=e},expression:"sinopsis"}})],1),a("b-overlay",{staticClass:"d-inline-blocks",attrs:{show:t.cargando,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.ModalPelicula",modifiers:{ModalPelicula:!0}}],attrs:{block:"",variant:"primary",type:"submit",disabled:null==t.contenido}},[t._v(" Agregar ")])],1),a("b-button",{attrs:{block:"",type:"reset",variant:"danger"}},[t._v(" Cancelar ")])],1)],1)],1)])],1)},r=[],n=a("5530"),i=a("2f62"),s=a("fe0a"),l=a("f8b6"),c=a("5559"),d=a("a29b"),u={name:"AgregarTemporada",mixins:[d["a"]],data:function(){return{filtro:"",titulo:"",sinopsis:""}},computed:Object(n["a"])({},Object(i["c"])("Catalogo",["series","contenido","temporadas","temporada","catalogo"]),{},Object(i["c"])(["cargando"])),methods:Object(n["a"])({},Object(i["b"])("Catalogo",["agregarTemporada","cargarSeries"]),{},Object(i["d"])("Catalogo",["filtrarContenido","updateContenido","updateTemporadas","modifySerie"]),{},Object(i["d"])(["addBreadcrumb"]),{getTemporada:function(){return{id:"temp-"+this.contenido.id+"-"+this.temporadas.length,id_serie:this.contenido.id,titulo:this.titulo,sinopsis:this.sinopsis}},filtrar:function(){this.filtrarContenido({contenido:this.series,texto:this.filtro})},_agregarTemporada:function(){var t=this,e=this.agregarTemporada(this.getTemporada());e.then((function(e){t.show(e,"Temporada","agregada")}))},reiniciarSerie:function(){this.updateContenido(null),this.updateTemporadas([])}}),created:function(){this.cargarSeries(),this.addBreadcrumb([{text:"Home",to:{name:"Home"}},{text:"Contenido",to:{name:"Contenido"}},{text:"Agregar Temporada",to:{name:"Agregar Temporada"}}])},destroyed:function(){this.modifySerie(null)},components:{ListaContenido:s["a"],ContenidoIndividual:l["a"],ListaTemporadas:c["a"]}},p=u,f=a("2877"),m=Object(f["a"])(p,o,r,!1,null,"56342a85",null);e["default"]=m.exports},7156:function(t,e,a){var o=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var n,i;return r&&"function"==typeof(n=e.constructor)&&n!==a&&o(i=n.prototype)&&i!==a.prototype&&r(t,i),t}},"74f0":function(t,e,a){"use strict";var o=a("9183"),r=a.n(o);r.a},9183:function(t,e,a){},"99af":function(t,e,a){"use strict";var o=a("23e7"),r=a("d039"),n=a("e8b5"),i=a("861d"),s=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),f=a("2d00"),m=p("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",h=f>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=u("concat"),C=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:n(t)},y=!h||!v;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,o,r,n,i=s(this),u=d(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(n=-1===e?i:arguments[e],C(n)){if(r=l(n.length),p+r>b)throw TypeError(g);for(a=0;a<r;a++,p++)a in n&&c(u,p,n[a])}else{if(p>=b)throw TypeError(g);c(u,p++,n)}return u.length=p,u}})},a29b:function(t,e,a){"use strict";a("99af");e["a"]={methods:{show:function(t,e,a){var o="",r="",n="";t.error?(o="No se pudo ".concat(a," la ").concat(e),r="danger",n="fa-times",alert(t.error_object)):(o="".concat(e," ").concat(a," satisfactoriamente"),r="success",n="fa-check");var i=this.$createElement,s=i("p",{class:["text-center","mb-0"]},[i("i",{class:["fa",n]})," ".concat(o)]),l=i("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[i("strong",{class:"mr-2"},"¡Nueva Notificacion!"),i("small",{class:"ml-auto text-italics"},"Ahora")]);this.$bvToast.toast([s],{title:[l],autoHideDelay:5e3,toaster:"b-toaster-bottom-right",appendToast:!1,variant:r})}}}},a9e3:function(t,e,a){"use strict";var o=a("83ab"),r=a("da84"),n=a("94ca"),i=a("6eeb"),s=a("5135"),l=a("c6b6"),c=a("7156"),d=a("c04e"),u=a("d039"),p=a("7c73"),f=a("241c").f,m=a("06cf").f,b=a("9bf2").f,g=a("58a8").trim,h="Number",v=r[h],C=v.prototype,y=l(p(C))==h,_=function(t){var e,a,o,r,n,i,s,l,c=d(t,!1);if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+c}for(n=c.slice(2),i=n.length,s=0;s<i;s++)if(l=n.charCodeAt(s),l<48||l>r)return NaN;return parseInt(n,o)}return+c};if(n(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,T=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof T&&(y?u((function(){C.valueOf.call(a)})):l(a)!=h)?c(new v(_(e)),a,T):_(e)},k=o?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)s(v,x=k[w])&&!s(T,x)&&b(T,x,m(v,x));T.prototype=C,C.constructor=T,i(r,h,T)}},f8b6:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"shadow",staticStyle:{width:"100%"},attrs:{title:t.titulo,"header-tag":"header","footer-tag":"footer",align:"center","img-src":"http://localhost:3000/uploads/portadas/"+t.portada},scopedSlots:t._u([t.detalles?{key:"footer",fn:function(){return[a("b-overlay",{staticClass:"d-inline-blocks",attrs:{show:t.cargando,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.cargarContenido()}}},[t._v("Detalles ")])],1)]},proxy:!0}:null],null,!0)},[1===t.tContenido?a("b-card-text",[t._v("Numero de temporadas: "+t._s(t.nTemp))]):t._e()],1)],1)},r=[],n=(a("caad"),a("a9e3"),a("2532"),a("96cf"),a("1da1")),i=a("5530"),s=a("2f62"),l={name:"ContenidoIndividual",props:{titulo:{type:String,default:""},portada:{type:String,default:""},nTemp:{type:Number,default:0},detalles:{type:Boolean,default:!0},tContenido:{type:Number,default:0},id:{type:String,default:""}},methods:Object(i["a"])({},Object(s["b"])("Catalogo",["updatePelicula","updateSerie"]),{},Object(s["d"])("Catalogo",["updateContenido"]),{cargarContenido:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id.includes("mov")){e.next=8;break}return e.next=3,t.updatePelicula(t.id);case 3:a=e.sent,t.updateContenido(a),t.$router.push("/contenido/detalles-contenido/".concat(t.id)),e.next=13;break;case 8:return e.next=10,t.updateSerie(t.id);case 10:o=e.sent,t.updateContenido(o),t.$router.push("/contenido/detalles-contenido/".concat(t.id));case 13:case"end":return e.stop()}}),e)})))()}}),computed:Object(i["a"])({},Object(s["c"])("Catalogo",["pelicula","serie","contenido"]),{},Object(s["c"])(["cargando"]))},c=l,d=a("2877"),u=Object(d["a"])(c,o,r,!1,null,"cc1e9c88",null);e["a"]=u.exports},fe0a:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-list-group",t._l(t.contenidos,(function(e,o){return a("b-list-group-item",{key:o,staticClass:"d-flex item"},[a("div",[a("b-img",{staticClass:"image",attrs:{src:"http://localhost:3000/uploads/portadas/"+e.portada,fluid:"",alt:"portada"}})],1),a("div",{staticClass:"ml-4"},[a("div",[a("h5",[t._v(t._s(e.Titulo))])]),a("div",[a("h6",[t._v(t._s(e.nTemp))])])]),a("div",{staticClass:"check ml-auto"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.selContenido(o)}}},[t._v(" Seleccionar ")])],1)])})),1)],1)},r=[],n=(a("a9e3"),a("5530")),i=a("2f62"),s={name:"ListaContenido",props:{contenidos:{type:Array,default:null},tContenido:{type:Number,default:0}},data:function(){return{state:"not_accepted"}},methods:Object(n["a"])({selContenido:function(t){this.updateContenido(this.contenidos[t]),this.updateTemporadas(this.contenidos[t].id)}},Object(i["b"])("Catalogo",["updateTemporadas"]),{},Object(i["d"])("Catalogo",["updateContenido"]))},l=s,c=(a("74f0"),a("2877")),d=Object(c["a"])(l,o,r,!1,null,"07df9034",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-0a89c94b.8ba07514.js.map
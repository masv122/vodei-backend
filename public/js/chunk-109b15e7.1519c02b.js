(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-109b15e7"],{"3e41":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ContenidoEmisionEspecifico",{attrs:{emisiones:e.emisionesEstrenos,tipo:"Estrenos"}}),n("ContenidoEmisionEspecifico",{attrs:{emisiones:e.emisionesSeries,tipo:"Series"}}),n("ContenidoEmisionEspecifico",{attrs:{emisiones:e.emisionesContemporaneas,tipo:"Contemporaneas"}})],1)},a=[],r=(n("96cf"),n("1da1")),o=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NavContenidoEmision",{attrs:{tipo:e.tipo}}),n("b-container",{staticClass:"p-2",attrs:{fluid:""}},[n("b-row",e._l(e.emisiones,(function(t,i){return n("b-col",{key:i,attrs:{md:"3"},on:{click:function(n){return e.seleccionarEmision(t)}}},[n("ContenidoIndividual",{class:[e.emision.id===t.id?"shadow-lg":"shadow-sm",e.emision.id===t.id?"border-success":"",e.emision.id===t.id?"bg-light":""],attrs:{id:t.id_contenido}})],1)})),1)],1)],1)},c=[],d=n("f8b6"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{attrs:{id:"gestionEmision",title:e.modo+" Contenido en Emision"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var i=t.ok,a=t.cancel;return["Agregar"===e.modo?n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(t){i(),e.agregarEmision()}}},[e._v(" Agregar ")]):n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(t){i(),e.modificarEmision()}}},[e._v(" Modificar ")]),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Cancelar ")])]}}]),model:{value:e.gestionEmision,callback:function(t){e.gestionEmision=t},expression:"gestionEmision"}},[n("b-card",{attrs:{"body-class":"text-center","header-tag":"nav"}},[n("ListaContenido",{attrs:{contenidos:e.catalogo}})],1)],1),n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1"}},[e._v(e._s(e.tipo))]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-button-group",[n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.cargarContenido("Agregar")}}},[n("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}})]),n("b-button",{attrs:{variant:"warning",disabled:void 0==e.emision.id},on:{click:function(t){return e.cargarContenido("Editar")}}},[n("i",{staticClass:"fas fa-edit "})]),n("b-button",{attrs:{variant:"danger",disabled:void 0==e.emision.id},on:{click:function(t){return e.confirmacionEliminar()}}},[n("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])],1)],1)],1)],1)},l=[],m=n("fe0a"),f=n("2f62"),p=n("a29b"),b={name:"NavContenidoEmision",mixins:[p["a"]],components:{ListaContenido:m["a"]},props:{tipo:{type:String,default:""}},data:function(){return{catalogo:[],modo:"",gestionEmision:!1}},computed:Object(o["a"])({},Object(f["c"])("Catalogo",["contenido"]),{},Object(f["c"])("emisiones",["emision"]),{getEmision:function(){return{id_contenido:this.contenido.id,tipo:this.getTipo,id:this.emision.id}},getTipo:function(){switch(this.tipo){case"Estrenos":return 0;case"Series":return 1;case"Contemporaneas":return 2;default:return 2}}}),methods:Object(o["a"])({},Object(f["b"])("Catalogo",["cargarPeliculas","cargarSeries"]),{},Object(f["d"])("Catalogo",["updateSelContenido"]),{},Object(f["b"])("emisiones",["insertEmision","loadEmisionesTipo","loadEmisionExistente","deleteEmision","modifyEmision"]),{cargarContenido:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.modo=e,n.t0=t.tipo,n.next="Estrenos"===n.t0?4:"Series"===n.t0?8:"Contemporaneas"===n.t0?12:16;break;case 4:return n.next=6,t.cargarPeliculas(0);case 6:return t.catalogo=n.sent,n.abrupt("break",17);case 8:return n.next=10,t.cargarSeries();case 10:return t.catalogo=n.sent,n.abrupt("break",17);case 12:return n.next=14,t.cargarPeliculas(1);case 14:return t.catalogo=n.sent,n.abrupt("break",17);case 16:return n.abrupt("break",17);case 17:"Editar"===e&&t.updateSelContenido(t.emision.id_contenido),t.gestionEmision=!t.gestionEmision;case 19:case"end":return n.stop()}}),n)})))()},agregarEmision:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadEmisionExistente(e.getEmision.id_contenido);case 2:if(n=t.sent,n.error){t.next=20;break}if(!(parseInt(n.cant.cant)>0)){t.next=8;break}e.show({error:!0},"emision porque esta repetida","agregar"),t.next=20;break;case 8:return t.next=10,e.insertEmision(e.getEmision);case 10:if(i=t.sent,i.error){t.next=19;break}a=0;case 13:if(!(a<=2)){t.next=19;break}return t.next=16,e.loadEmisionesTipo(a);case 16:a++,t.next=13;break;case 19:e.show(i,"emision","agregada");case 20:case"end":return t.stop()}}),t)})))()},modificarEmision:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadEmisionExistente(e.getEmision.id_contenido);case 2:if(n=t.sent,n.error){t.next=20;break}if(!(parseInt(n.cant.cant)>0)){t.next=8;break}e.show({error:!0},"emision porque esta repetida","modificar"),t.next=20;break;case 8:return t.next=10,e.modifyEmision(e.getEmision);case 10:if(i=t.sent,i.error){t.next=19;break}a=0;case 13:if(!(a<=2)){t.next=19;break}return t.next=16,e.loadEmisionesTipo(a);case 16:a++,t.next=13;break;case 19:e.show(i,"Emision","modificada");case 20:case"end":return t.stop()}}),t)})))()},eliminarEmision:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.deleteEmision(e.emision.id);case 2:if(n=t.sent,n.error){t.next=11;break}i=0;case 5:if(!(i<=2)){t.next=11;break}return t.next=8,e.loadEmisionesTipo(i);case 8:i++,t.next=5;break;case 11:e.show(n,"Emision","eliminada");case 12:case"end":return t.stop()}}),t)})))()},confirmacionEliminar:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$bvModal.msgBoxConfirm("¿Desea eliminar la emision?",{title:"Confirme",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Si",cancelTitle:"No",footerClass:"p-2",hideHeaderClose:!1,centered:!0});case 2:n=t.sent,n&&e.eliminarEmision();case 4:case"end":return t.stop()}}),t)})))()}}),created:function(){}},g=b,h=n("2877"),v=Object(h["a"])(g,u,l,!1,null,"66c677da",null),E=v.exports,x={name:"ContenidoEmisionEspecifico",components:{ContenidoIndividual:d["a"],NavContenidoEmision:E},props:{tipo:{type:String,default:""},emisiones:{type:Array,default:function(){return[]}}},computed:Object(o["a"])({},Object(f["c"])("emisiones",["emision"])),methods:Object(o["a"])({},Object(f["d"])("emisiones",["updateEmision"]),{seleccionarEmision:function(e){this.updateEmision(e)}})},C=x,k=Object(h["a"])(C,s,c,!1,null,"741b5ef6",null),w=k.exports,O={name:"ContenidoEmision",components:{ContenidoEmisionEspecifico:w},computed:Object(o["a"])({},Object(f["c"])("emisiones",["emisionesEstrenos","emisionesSeries","emisionesContemporaneas"])),methods:Object(o["a"])({},Object(f["d"])(["addBreadcrumb"]),{},Object(f["b"])("emisiones",["loadEmisionesTipo"])),created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<=2)){t.next=7;break}return t.next=4,e.loadEmisionesTipo(n);case 4:n++,t.next=1;break;case 7:e.addBreadcrumb([{text:"Home",to:{name:"Home"}},{text:"Contenido en Emision",to:{name:"Contenido en Emision"}}]);case 8:case"end":return t.stop()}}),t)})))()}},_=O,j=Object(h["a"])(_,i,a,!1,null,"1d4f83ca",null);t["default"]=j.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("1d80"),a=n("5899"),r="["+a+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,n){var i=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var r,o;return a&&"function"==typeof(r=t.constructor)&&r!==n&&i(o=r.prototype)&&o!==n.prototype&&a(e,o),e}},"7a4e":function(e,t,n){},"99af":function(e,t,n){"use strict";var i=n("23e7"),a=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),c=n("50c4"),d=n("8418"),u=n("65f0"),l=n("1dde"),m=n("b622"),f=n("2d00"),p=m("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",h=f>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=l("concat"),E=function(e){if(!o(e))return!1;var t=e[p];return void 0!==t?!!t:r(e)},x=!h||!v;i({target:"Array",proto:!0,forced:x},{concat:function(e){var t,n,i,a,r,o=s(this),l=u(o,0),m=0;for(t=-1,i=arguments.length;t<i;t++)if(r=-1===t?o:arguments[t],E(r)){if(a=c(r.length),m+a>b)throw TypeError(g);for(n=0;n<a;n++,m++)n in r&&d(l,m,r[n])}else{if(m>=b)throw TypeError(g);d(l,m++,r)}return l.length=m,l}})},a29b:function(e,t,n){"use strict";n("99af");t["a"]={methods:{show:function(e,t,n){var i="",a="",r="";e.error?(i="No se pudo ".concat(n," la ").concat(t),a="danger",r="fa-times"):(i="".concat(t," ").concat(n," satisfactoriamente"),a="success",r="fa-check");var o=this.$createElement,s=o("p",{class:["text-center","mb-0"]},[o("i",{class:["fa",r]})," ".concat(i)]),c=o("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[o("strong",{class:"mr-2"},"¡Nueva Notificacion!"),o("small",{class:"ml-auto text-italics"},"Ahora")]);this.$bvToast.toast([s],{title:[c],autoHideDelay:5e3,toaster:"b-toaster-bottom-right",appendToast:!1,variant:a})}}}},a9e3:function(e,t,n){"use strict";var i=n("83ab"),a=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),d=n("7156"),u=n("c04e"),l=n("d039"),m=n("7c73"),f=n("241c").f,p=n("06cf").f,b=n("9bf2").f,g=n("58a8").trim,h="Number",v=a[h],E=v.prototype,x=c(m(E))==h,C=function(e){var t,n,i,a,r,o,s,c,d=u(e,!1);if("string"==typeof d&&d.length>2)if(d=g(d),t=d.charCodeAt(0),43===t||45===t){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+d}for(r=d.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>a)return NaN;return parseInt(r,i)}return+d};if(r(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var k,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(x?l((function(){E.valueOf.call(n)})):c(n)!=h)?d(new v(C(t)),n,w):C(t)},O=i?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;O.length>_;_++)s(v,k=O[_])&&!s(w,k)&&b(w,k,p(v,k));w.prototype=E,E.constructor=w,o(a,h,w)}},ec56:function(e,t,n){"use strict";var i=n("7a4e"),a=n.n(i);a.a},f8b6:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{staticClass:"shadow",staticStyle:{width:"100%"},attrs:{title:""==e.titulo?e.contenido.Titulo:e.titulo,"header-tag":"header","footer-tag":"footer",align:"center","img-src":"/uploads/portadas/"+(""==e.portada?e.contenido.portada:e.portada)},scopedSlots:e._u([e.detalles?{key:"footer",fn:function(){return[n("b-overlay",{staticClass:"d-inline-blocks",attrs:{show:e.cargando,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.cargarContenido()}}},[e._v("Detalles ")])],1)]},proxy:!0}:null],null,!0)},[1===e.tContenido?n("b-card-text",[e._v("Numero de temporadas: "+e._s(e.nTemp))]):e._e()],1)],1)},a=[],r=(n("caad"),n("a9e3"),n("2532"),n("5530")),o=(n("96cf"),n("1da1")),s=n("2f62"),c={name:"ContenidoIndividual",props:{titulo:{type:String,default:""},portada:{type:String,default:""},nTemp:{type:Number,default:0},detalles:{type:Boolean,default:!0},tContenido:{type:Number,default:0},id:{type:String,default:""}},data:function(){return{contenido:{Titulo:"",portada:"poster.png"}}},watch:{id:{immediate:!0,deep:!0,handler:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.includes("mov")){n.next=6;break}return n.next=3,t.updatePelicula(e);case 3:t.contenido=n.sent,n.next=9;break;case 6:return n.next=8,t.updateSerie(e);case 8:t.contenido=n.sent;case 9:case"end":return n.stop()}}),n)})))()}}},methods:Object(r["a"])({},Object(s["b"])("Catalogo",["updatePelicula","updateSerie"]),{},Object(s["d"])("Catalogo",["updateContenido"]),{cargarContenido:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id.includes("mov")){t.next=8;break}return t.next=3,e.updatePelicula(e.id);case 3:n=t.sent,e.updateContenido(n),e.$router.push("/contenido/detalles-contenido/".concat(e.id)),t.next=13;break;case 8:return t.next=10,e.updateSerie(e.id);case 10:i=t.sent,e.updateContenido(i),e.$router.push("/contenido/detalles-contenido/".concat(e.id));case 13:case"end":return t.stop()}}),t)})))()}}),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id.includes("mov")){t.next=6;break}return t.next=3,e.updatePelicula(e.id);case 3:e.contenido=t.sent,t.next=9;break;case 6:return t.next=8,e.updateSerie(e.id);case 8:e.contenido=t.sent;case 9:case"end":return t.stop()}}),t)})))()},computed:Object(r["a"])({},Object(s["c"])(["cargando"]))},d=c,u=n("2877"),l=Object(u["a"])(d,i,a,!1,null,"09b1746e",null);t["a"]=l.exports},fe0a:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-list-group",e._l(e.contenidos,(function(t,i){return n("b-list-group-item",{key:i,class:[e.selContenido===t.id?"shadow":"","sala",e.selContenido===t.id?"border-secondary":"",e.selContenido===t.id?"bg-light":"","d-flex item","mb-1"],attrs:{href:"#"},on:{click:function(n){return e.seleccionarContenido(t.id,i)}}},[n("div",[n("b-img",{staticClass:"image",attrs:{src:"/uploads/portadas/"+t.portada,fluid:"",alt:"portada"}})],1),n("div",{staticClass:"ml-4"},[n("div",[n("h5",[e._v(e._s(t.Titulo))])]),n("div",[n("h6",[e._v(e._s(t.nTemp))])])])])})),1)],1)},a=[],r=(n("a9e3"),n("5530")),o=n("2f62"),s={name:"ListaContenido",props:{contenidos:{type:Array,default:null},tContenido:{type:Number,default:0}},data:function(){return{state:"not_accepted"}},computed:Object(r["a"])({},Object(o["c"])("Catalogo",["selContenido"])),methods:Object(r["a"])({seleccionarContenido:function(e,t){this.updateContenido(this.contenidos[t]),this.updateTemporadas(this.contenidos[t].id),this.updateSelContenido(e)}},Object(o["b"])("Catalogo",["updateTemporadas"]),{},Object(o["d"])("Catalogo",["updateContenido","updateSelContenido"])),beforeDestroy:function(){this.updateSelContenido(null)}},c=s,d=(n("ec56"),n("2877")),u=Object(d["a"])(c,i,a,!1,null,"53e2ffb3",null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-109b15e7.1519c02b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-331b0e02"],{5899:function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(n,e,t){var a=t("1d80"),i=t("5899"),o="["+i+"]",r=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(n){return function(e){var t=String(a(e));return 1&n&&(t=t.replace(r,"")),2&n&&(t=t.replace(s,"")),t}};n.exports={start:c(1),end:c(2),trim:c(3)}},"6fbb":function(n,e,t){},7156:function(n,e,t){var a=t("861d"),i=t("d2bb");n.exports=function(n,e,t){var o,r;return i&&"function"==typeof(o=e.constructor)&&o!==t&&a(r=o.prototype)&&r!==t.prototype&&i(n,r),n}},"7a4e":function(n,e,t){},"99af":function(n,e,t){"use strict";var a=t("23e7"),i=t("d039"),o=t("e8b5"),r=t("861d"),s=t("7b0b"),c=t("50c4"),u=t("8418"),l=t("65f0"),d=t("1dde"),f=t("b622"),b=t("2d00"),m=f("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",v=b>=51||!i((function(){var n=[];return n[m]=!1,n.concat()[0]!==n})),g=d("concat"),S=function(n){if(!r(n))return!1;var e=n[m];return void 0!==e?!!e:o(n)},_=!v||!g;a({target:"Array",proto:!0,forced:_},{concat:function(n){var e,t,a,i,o,r=s(this),d=l(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?r:arguments[e],S(o)){if(i=c(o.length),f+i>h)throw TypeError(p);for(t=0;t<i;t++,f++)t in o&&u(d,f,o[t])}else{if(f>=h)throw TypeError(p);u(d,f++,o)}return d.length=f,d}})},a29b:function(n,e,t){"use strict";t("99af");e["a"]={methods:{show:function(n,e,t){var a="",i="",o="";n.error?(a="No se pudo ".concat(t," la ").concat(e),i="danger",o="fa-times"):(a="".concat(e," ").concat(t," satisfactoriamente"),i="success",o="fa-check");var r=this.$createElement,s=r("p",{class:["text-center","mb-0"]},[r("i",{class:["fa",o]})," ".concat(a)]),c=r("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[r("strong",{class:"mr-2"},"¡Nueva Notificacion!"),r("small",{class:"ml-auto text-italics"},"Ahora")]);this.$bvToast.toast([s],{title:[c],autoHideDelay:5e3,toaster:"b-toaster-bottom-right",appendToast:!1,variant:i})}}}},a9e3:function(n,e,t){"use strict";var a=t("83ab"),i=t("da84"),o=t("94ca"),r=t("6eeb"),s=t("5135"),c=t("c6b6"),u=t("7156"),l=t("c04e"),d=t("d039"),f=t("7c73"),b=t("241c").f,m=t("06cf").f,h=t("9bf2").f,p=t("58a8").trim,v="Number",g=i[v],S=g.prototype,_=c(f(S))==v,F=function(n){var e,t,a,i,o,r,s,c,u=l(n,!1);if("string"==typeof u&&u.length>2)if(u=p(u),e=u.charCodeAt(0),43===e||45===e){if(t=u.charCodeAt(2),88===t||120===t)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(o=u.slice(2),r=o.length,s=0;s<r;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,a)}return+u};if(o(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,C=function(n){var e=arguments.length<1?0:n,t=this;return t instanceof C&&(_?d((function(){S.valueOf.call(t)})):c(t)!=v)?u(new g(F(e)),t,C):F(e)},k=a?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)s(g,x=k[w])&&!s(C,x)&&h(C,x,m(g,x));C.prototype=S,S.constructor=C,r(i,v,C)}},aa22:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("NavSalasFunciones"),n.salas?t("Salas"):n._e(),n.funciones?t("Funciones"):n._e()],1)},i=[],o=t("5530"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"text-center"},[t("h3",{staticClass:"display-4 my-4"},[n._v("Salas")]),t("b-container",{attrs:{fluid:""}},[t("b-row",{attrs:{"no-gutters":""}},n._l(n.salas,(function(e,a){return t("b-col",{key:e.id,attrs:{cols:"3"},on:{click:function(e){return n.seleccionarSala(a)}}},[t("Sala",{class:[n.selSala===a?"shadow-lg":"shadow","sala",n.selSala===a?"border-warning":"",n.selSala===a?"bg-light":""],attrs:{sala:e}})],1)})),1)],1)],1)},s=[],c=t("2f62"),u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-card",{attrs:{"no-body":""}},[t("b-card-title",{staticClass:"mt-2"},[n._v("Sala #"+n._s(null==n.sala?"":n.sala.numero))]),t("b-card-text",[t("b-list-group",[t("b-list-group-item",{staticClass:"mt-1",attrs:{variant:"success"}},[n._v(" Funcion Anterior: "+n._s(n.funcionAnterior.contenido.Titulo)+" ")]),t("b-list-group-item",{staticClass:"mt-1",attrs:{variant:"warning"}},[n._v(" Funcion Actual "),t("b-list-group",{staticClass:"mt-2",attrs:{flush:""}},[t("b-list-group-item",{staticClass:"mt-1",attrs:{variant:"light"}},[n._v(" "+n._s(n.funcionActual.hora_inicio)+" ")]),t("b-list-group-item",{staticClass:"mt-1",attrs:{variant:"light"}},[n._v(" "+n._s(n.funcionActual.contenido.Titulo)+" ")]),t("b-list-group-item",{staticClass:"mt-1",attrs:{variant:"light"}},[n._v(" "+n._s(n.funcionActual.hora_fin)+" ")])],1)],1),t("b-list-group-item",{staticClass:"mt-1",attrs:{variant:"secondary"}},[n._v(" Siguiente Funcion: "+n._s(n.funcionSiguiente.contenido.Titulo)+" ")])],1)],1)],1)],1)},l=[],d=(t("caad"),t("2532"),t("96cf"),t("1da1")),f={name:"Sala",props:{sala:{type:Object,default:null}},data:function(){return{funcionAnterior:{hora_inicio:"Sin Funcion",Titulo:"Sin Funcion",contenido:{Titulo:"Sin Funcion"}},funcionActual:{hora_inicio:"Sin Funcion",hora_fin:"Sin Funcion",contenido:{Titulo:"Sin Funcion"}},funcionSiguiente:{hora_fin:"Sin Funcion",Titulo:"Sin Funcion",contenido:{Titulo:"Sin Funcion"}}}},methods:Object(o["a"])({},Object(c["b"])("salasFunciones",["loadFuncionAnterior","loadFuncionActual","loadFuncionSiguiente"]),{},Object(c["b"])("Catalogo",["updateSerie","updatePelicula"])),computed:{},created:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.loadFuncionAnterior(n.sala.id);case 2:return t=e.sent,e.next=5,n.loadFuncionActual(n.sala.id);case 5:return a=e.sent,e.next=8,n.loadFuncionSiguiente(n.sala.id);case 8:if(i=e.sent,!t.funcion){e.next=22;break}if(n.funcionAnterior.hora_inicio=t.funcion.hora_inicio,n.funcionAnterior.hora_fin=t.funcion.hora_fin,!t.funcion.id_contenido.includes("mov")){e.next=18;break}return e.next=15,n.updatePelicula(t.funcion.id_contenido);case 15:e.t0=e.sent,e.next=21;break;case 18:return e.next=20,n.updateSerie(t.funcion.id_contenido);case 20:e.t0=e.sent;case 21:n.funcionAnterior.contenido=e.t0;case 22:if(!a.funcion){e.next=35;break}if(n.funcionActual.hora_inicio=a.funcion.hora_inicio,n.funcionActual.hora_fin=a.funcion.hora_fin,!a.funcion.id_contenido.includes("mov")){e.next=31;break}return e.next=28,n.updatePelicula(a.funcion.id_contenido);case 28:e.t1=e.sent,e.next=34;break;case 31:return e.next=33,n.updateSerie(a.funcion.id_contenido);case 33:e.t1=e.sent;case 34:n.funcionActual.contenido=e.t1;case 35:if(!i.funcion){e.next=48;break}if(n.funcionSiguiente.hora_inicio=i.funcion.hora_inicio,n.funcionSiguiente.hora_fin=i.funcion.hora_fin,!i.funcion.id_contenido.includes("mov")){e.next=44;break}return e.next=41,n.updatePelicula(i.funcion.id_contenido);case 41:e.t2=e.sent,e.next=47;break;case 44:return e.next=46,n.updateSerie(i.funcion.id_contenido);case 46:e.t2=e.sent;case 47:n.funcionSiguiente.contenido=e.t2;case 48:case"end":return e.stop()}}),e)})))()}},b=f,m=t("2877"),h=Object(m["a"])(b,u,l,!1,null,null,null),p=h.exports,v={name:"Salas",components:{Sala:p},data:function(){return{selSala:null}},computed:Object(o["a"])({},Object(c["c"])("salasFunciones",["salas"])),methods:Object(o["a"])({},Object(c["d"])("salasFunciones",["updateSala"]),{seleccionarSala:function(n){this.selSala=n,this.updateSala(this.salas[n])}})},g=v,S=(t("ef6c"),Object(m["a"])(g,r,s,!1,null,"4c740303",null)),_=S.exports,F=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[t("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1"}},[t("i",{staticClass:"fa fa-film",attrs:{"aria-hidden":"true"}})]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-navbar-nav",[t("b-nav-item",{attrs:{active:n.salas,disabled:n.salas},on:{click:function(e){return n.setSalas()}}},[n._v("Salas")]),t("b-nav-item",{attrs:{active:n.funciones,disabled:n.funciones},on:{click:function(e){return n.setFunciones()}}},[n._v("Funciones")])],1),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n.salas?t("NavSalas",{staticClass:"ml-auto"}):n._e(),n.funciones?t("NavFunciones",{staticClass:"ml-auto"}):n._e()],1)],1)],1)},x=[],C=t("a29b"),k=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-modal",{attrs:{id:"gestionSala",title:n.modo+" Sala"},scopedSlots:n._u([{key:"modal-footer",fn:function(e){var a=e.ok,i=e.cancel;return["Agregar"===n.modo?t("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){a(),n.insertarSala()}}},[n._v(" Agregar ")]):t("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){a(),n.modificarSala()}}},[n._v(" Modificar ")]),t("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(n){return i()}}},[n._v(" Cancelar ")])]}}])},[t("form",{on:{submit:function(n){n.preventDefault()}}},[t("b-form-input",{attrs:{type:"number",placeholder:"Introduzca numero de sala"},model:{value:n.numero,callback:function(e){n.numero=e},expression:"numero"}})],1)]),t("b-navbar-nav",[t("b-button-group",[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.gestionSala",modifiers:{gestionSala:!0}}],attrs:{variant:"primary"},on:{click:function(e){return n.setModo("Agregar")}}},[t("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}}),n._v(" Agregar Sala ")]),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.gestionSala",modifiers:{gestionSala:!0}}],attrs:{variant:"warning",disabled:null==n.sala},on:{click:function(e){return n.setModo("Editar")}}},[t("i",{staticClass:"fas fa-edit "}),n._v(" Editar Sala ")]),t("b-button",{attrs:{variant:"danger",disabled:null==n.sala},on:{click:function(e){return n.confirmacionEliminar()}}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),n._v(" Eliminar Sala ")])],1)],1)],1)},w=[],O={name:"NavSalas",mixins:[C["a"]],data:function(){return{numero:"",modo:"Agregar",idSala:""}},computed:Object(o["a"])({},Object(c["c"])("salasFunciones",["sala"])),methods:Object(o["a"])({},Object(c["b"])("salasFunciones",["insertSala","loadSalas","deleteSala","modifySala"]),{insertarSala:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.insertSala({numero:n.numero});case 2:t=e.sent,t.error||(n.loadSalas(),n.numero=""),n.show(t,"Sala","agregada");case 5:case"end":return e.stop()}}),e)})))()},modificarSala:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.modifySala({numero:n.numero,id:n.sala.id});case 2:t=e.sent,t.error||(n.loadSalas(),n.numero=""),n.show(t,"Sala","modificada");case 5:case"end":return e.stop()}}),e)})))()},eliminarSala:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.deleteSala(n.sala.id);case 2:t=e.sent,t.error||n.loadSalas(),n.show(t,"Sala","eliminada");case 5:case"end":return e.stop()}}),e)})))()},confirmacionEliminar:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$bvModal.msgBoxConfirm("¿Desea eliminar la sala?",{title:"Confirme",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Si",cancelTitle:"No",footerClass:"p-2",hideHeaderClose:!1,centered:!0});case 2:t=e.sent,t&&n.eliminarSala();case 4:case"end":return e.stop()}}),e)})))()},setModo:function(n){this.modo=n,this.numero="Agregar"===n?"":this.sala.numero}})},j=O,y=Object(m["a"])(j,k,w,!1,null,"7a4d4fee",null),A=y.exports,E=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-modal",{attrs:{id:"gestionFuncion",title:n.modo+" Funcion"},scopedSlots:n._u([{key:"modal-footer",fn:function(e){var a=e.ok,i=e.cancel;return["Agregar"===n.modo?t("b-button",{attrs:{size:"sm",variant:"success",disabled:n.datosCompletos},on:{click:function(e){a(),n.insertarFuncion()}}},[n._v(" Agregar ")]):t("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){a(),n.modificarFuncion()}}},[n._v(" Modificar ")]),t("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(n){return i()}}},[n._v(" Cancelar ")])]}}])},[t("b-card",{attrs:{"body-class":"text-center","header-tag":"nav"},scopedSlots:n._u([{key:"header",fn:function(){return[t("b-nav",{attrs:{"card-header":""}},[t("b-nav-text",[n._v("Seleccione un Contenido: ")]),t("b-nav-item-dropdown",{attrs:{id:"my-nav-dropdown",text:n.tipoContenido,"toggle-class":"nav-link-custom",right:""}},[t("b-dropdown-item",{on:{click:function(e){return n.setContenido(0)}}},[n._v("Estrenos")]),t("b-dropdown-item",{on:{click:function(e){return n.setContenido(1)}}},[n._v("Series")]),t("b-dropdown-item",{on:{click:function(e){return n.setContenido(2)}}},[n._v("Contemporaneos")]),t("b-dropdown-item",[n._v("Cartelera")])],1)],1)]},proxy:!0}])},[t("ListaContenido",{attrs:{contenidos:n.catalogo}})],1),t("b-card",{staticClass:"mt-2",scopedSlots:n._u([{key:"header",fn:function(){return[t("b-nav",{attrs:{"card-header":""}},[t("b-nav-text",[n._v("Seleccione una Sala ")])],1)]},proxy:!0}])},[t("ListaSalas",{attrs:{salas:n.salas}})],1),t("b-card",{staticClass:"mt-2",scopedSlots:n._u([{key:"header",fn:function(){return[t("b-nav",{attrs:{"card-header":""}},[t("b-nav-text",[n._v("Complete los datos ")])],1)]},proxy:!0}])},[t("form",{on:{submit:function(n){n.preventDefault()}}},[t("b-form-group",{attrs:{id:"input-group-fecha",label:"Fecha de estreno:","label-for":"fecha"}},[t("b-input-group",{staticClass:"mb-3"},[t("b-form-input",{attrs:{id:"example-input",type:"text",placeholder:"YYYY-MM-DD"},model:{value:n.fecha,callback:function(e){n.fecha=e},expression:"fecha"}}),t("b-input-group-append",[t("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"es-ES",required:""},model:{value:n.fecha,callback:function(e){n.fecha=e},expression:"fecha"}})],1)],1)],1),t("b-form-group",{attrs:{id:"input-group-hora-inicio",label:"Hora Inicio:","label-for":"hora-inicio"}},[t("b-form-select",{attrs:{id:"hora-inicio",options:n.horasInicio,required:""},model:{value:n.horaInicio,callback:function(e){n.horaInicio=e},expression:"horaInicio"}})],1),t("b-form-group",{attrs:{id:"input-group-hora-fin",label:"Hora Fin:","label-for":"hora-fin"}},[t("b-form-select",{attrs:{id:"hora-fin",options:n.horasFin,required:""},model:{value:n.horaFin,callback:function(e){n.horaFin=e},expression:"horaFin"}})],1)],1)])],1),t("b-navbar-nav",[t("b-button-group",[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.gestionFuncion",modifiers:{gestionFuncion:!0}}],attrs:{variant:"primary"},on:{click:function(e){return n.setModo("Agregar")}}},[t("i",{staticClass:"fa fa-plus-circle",attrs:{"aria-hidden":"true"}}),n._v(" Agregar Funcion ")]),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.gestionFuncion",modifiers:{gestionFuncion:!0}}],attrs:{variant:"warning",disabled:null==n.funcion},on:{click:function(e){return n.setModo("Editar")}}},[t("i",{staticClass:"fas fa-edit "}),n._v(" Editar Funcion ")]),t("b-button",{attrs:{variant:"danger",disabled:null==n.funcion},on:{click:function(e){return n.confirmacionEliminar()}}},[t("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}}),n._v(" Eliminar Funcion ")])],1)],1)],1)},N=[],I=t("fe0a"),T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-list-group",n._l(n.salas,(function(e,a){return t("b-list-group-item",{key:e.id,class:[n.selSala===e.id?"shadow":"","sala",n.selSala===e.id?"border-secondary":"",n.selSala===e.id?"bg-light":"","d-flex item","mb-1"],attrs:{href:"#"},on:{click:function(t){return n.seleccionarSala(e.id,a)}}},[t("div",{staticClass:"ml-4"},[t("h5",[n._v("Sala #"+n._s(e.numero))])])])})),1)],1)},M=[],R={name:"ListaSalas",props:{salas:{type:Array,default:null}},data:function(){return{}},computed:Object(o["a"])({},Object(c["c"])("salasFunciones",["selSala"])),methods:Object(o["a"])({seleccionarSala:function(n,e){this.updateSala(this.salas[e]),this.updateSelSala(n)}},Object(c["d"])("salasFunciones",["updateSala","updateSelSala"])),destroyed:function(){this.updateSelSala(null)}},P=R,$=Object(m["a"])(P,T,M,!1,null,"d9b89078",null),z=$.exports,H={name:"NavFunciones",mixins:[C["a"]],components:{ListaContenido:I["a"],ListaSalas:z},data:function(){return{modo:"Agregar",fecha:"",horaInicio:null,horaFin:null,id:"",horasInicio:[{value:null,text:"Por favor seleccione una hora de inicio"},{value:"08:00:00",text:"08:00 AM"},{value:"11:00:00",text:"11:00 AM"},{value:"13:00:00",text:"01:00 PM"},{value:"16:00:00",text:"04:00 PM"}],horasFin:[{value:null,text:"Por favor seleccione una hora de finalizacion"},{value:"11:00:00",text:"11:00 AM"},{value:"13:00:00",text:"01:00 PM"},{value:"16:00:00",text:"04:00 PM"},{value:"20:00:00",text:"08:00 PM"}],idContenido:"",idSala:"",tipoContenido:"Estreno"}},computed:Object(o["a"])({},Object(c["c"])("salasFunciones",["funcion","salas","sala"]),{},Object(c["c"])("Catalogo",["peliculas","catalogo","tipo","contenido"]),{datosCompletos:function(){return""===this.idSala&&""===this.idContenido&&""===this.fecha&&null===this.horaInicio&&null===this.horaFin},getFuncion:function(){return{id_contenido:null==this.funcion?this.contenido.id:this.idContenido,id_sala:null==this.funcion?this.sala.id:this.idSala,fecha:this.fecha,hora_inicio:this.horaInicio,hora_fin:this.horaFin,id:this.id}}}),methods:Object(o["a"])({},Object(c["b"])("Catalogo",["cargarPeliculas","cargarSeries"]),{},Object(c["b"])("salasFunciones",["insertFuncion","loadFunciones","deleteFuncion","modifyFuncion"]),{},Object(c["d"])("salasFunciones",["updateSelSala"]),{},Object(c["d"])("Catalogo",["updateSelContenido"]),{insertarFuncion:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.insertFuncion(n.getFuncion);case 2:t=e.sent,t.error||(n.loadFunciones(),n.sala=null,n.contenido=null,n.fecha="",n.horaInicio=null,n.horaFin=null),n.show(t,"Funcion","agregada");case 5:case"end":return e.stop()}}),e)})))()},modificarFuncion:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.modifyFuncion(n.getFuncion);case 2:t=e.sent,t.error||(n.loadFunciones(),n.idSala=null,n.idContenido=null,n.fecha="",n.horaInicio=null,n.horaFin=null),n.show(t,"Funcion","modificada");case 5:case"end":return e.stop()}}),e)})))()},borrarFuncion:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.deleteFuncion(n.funcion.id);case 2:t=e.sent,t.error||n.loadFunciones(),n.show(t,"Funcion","eliminada");case 5:case"end":return e.stop()}}),e)})))()},confirmacionEliminar:function(){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$bvModal.msgBoxConfirm("¿Desea eliminar la funcion?",{title:"Confirme",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Si",cancelTitle:"No",footerClass:"p-2",hideHeaderClose:!1,centered:!0});case 2:t=e.sent,t&&n.borrarFuncion();case 4:case"end":return e.stop()}}),e)})))()},setModo:function(n){this.modo=n,this.idContenido="Agregar"===n?"":this.funcion.id_contenido,this.idSala="Agregar"===n?"":this.funcion.id_sala,this.fecha="Agregar"===n?"":this.funcion.fecha,this.horaInicio="Agregar"===n?null:this.funcion.hora_inicio,this.horaFin="Agregar"===n?null:this.funcion.hora_fin,this.id="Agregar"===n?"":this.funcion.id,"Editar"===n&&(this.updateSelSala(this.funcion.id_sala),this.updateSelContenido(this.funcion.id_contenido))},setContenido:function(n){switch(n){case 0:this.cargarPeliculas(0),this.tipoContenido="Estrenos";break;case 1:this.cargarSeries(),this.tipoContenido="Series";break;case 2:this.cargarPeliculas(1),this.tipoContenido="Contemporaneas";break;default:break}}}),created:function(){this.cargarSeries(),this.cargarPeliculas(0)}},B=H,L=Object(m["a"])(B,E,N,!1,null,"b91308ce",null),D=L.exports,V={name:"NavSalasFunciones",mixins:[C["a"]],components:{NavSalas:A,NavFunciones:D},computed:Object(o["a"])({},Object(c["c"])(["salas","funciones"])),methods:Object(o["a"])({},Object(c["d"])(["setSalas","setFunciones"]))},Y=V,q=Object(m["a"])(Y,F,x,!1,null,"a1295b02",null),G=q.exports,J=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"text-center"},[t("h3",{staticClass:"display-4 my-4"},[n._v("Funciones")]),t("b-row",n._l(n.funciones,(function(e,a){return t("b-col",{key:e.id,attrs:{cols:"3"}},[t("Funcion",{class:[n.selFuncion===a?"shadow-lg":"shadow-sm","sala",n.selFuncion===a?"border-success":"",n.selFuncion===a?"bg-light":""],attrs:{funcion:e},on:{click:function(e){return n.seleccionarFuncion(a)}}})],1)})),1)],1)},U=[],X=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-card",{attrs:{"no-body":"","header-tag":"header","footer-tag":"footer","header-bg-variant":n.estructuraFuncion(n.funcion.hora_inicio).colorHeader,"footer-bg-variant":"secondary"},scopedSlots:n._u([{key:"header",fn:function(){return[t("h4",[t("b-badge",{attrs:{variant:n.estructuraFuncion(n.funcion.hora_inicio).colorBadge}},[n._v(n._s(n.estructuraFuncion(n.funcion.hora_inicio).orden)+" Funcion")])],1)]},proxy:!0},{key:"footer",fn:function(){return[t("b-badge",{attrs:{variant:"success"}},[t("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})])]},proxy:!0}])},[t("b-list-group",[t("b-list-group-item",{staticClass:"border"},[n._v(n._s(n.funcion.titulo))]),t("b-list-group-item",{staticClass:"border"},[n._v("Sala "+n._s(n.funcion.numeroSala))]),t("b-list-group-item",{staticClass:"border"},[n._v(n._s(n._f("moment")(n.funcion.hora_inicio,"h:mm:ss a")))]),t("b-list-group-item",{staticClass:"border"},[n._v(n._s(n._f("moment")(n.funcion.hora_fin,"h:mm:ss a")))])],1)],1)],1)},K=[],Q={name:"Funcion",props:{funcion:{type:Object,default:null}},methods:{estructuraFuncion:function(n){return"08:00:00"==n?{orden:"Primera",colorBadge:"primary",colorHeader:"info"}:"11:00:00"==n?{orden:"Segunda",colorBadge:"secondary",colorHeader:"success"}:"13:00:00"==n?{orden:"Tercera",colorBadge:"danger",colorHeader:"warning"}:{orden:"Cuarta",colorBadge:"light",colorHeader:"dark"}}}},W=Q,Z=Object(m["a"])(W,X,K,!1,null,"98a96572",null),nn=Z.exports,en={name:"Funciones",components:{Funcion:nn},data:function(){return{selFuncion:null}},computed:Object(o["a"])({},Object(c["c"])("salasFunciones",["funciones"])),methods:Object(o["a"])({},Object(c["d"])("salasFunciones",["updateFuncion"]),{seleccionarFuncion:function(n){this.selFuncion=n,this.updateFuncion(this.funciones[n])}})},tn=en,an=Object(m["a"])(tn,J,U,!1,null,"14ec63ab",null),on=an.exports,rn={components:{Salas:_,Funciones:on,NavSalasFunciones:G},data:function(){return{}},computed:Object(o["a"])({},Object(c["c"])(["salas","funciones"])),methods:Object(o["a"])({},Object(c["d"])(["addBreadcrumb","setTabSalasFunciones"]),{},Object(c["b"])("salasFunciones",["loadSalas","loadFunciones"])),created:function(){this.loadSalas(),this.loadFunciones(),this.addBreadcrumb([{text:"Home",to:{name:"Home"}},{text:"Salas y Funciones",to:{name:"Salas y Funciones"}}])}},sn=rn,cn=Object(m["a"])(sn,a,i,!1,null,"04e59515",null);e["default"]=cn.exports},ec56:function(n,e,t){"use strict";var a=t("7a4e"),i=t.n(a);i.a},ef6c:function(n,e,t){"use strict";var a=t("6fbb"),i=t.n(a);i.a},fe0a:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-list-group",n._l(n.contenidos,(function(e,a){return t("b-list-group-item",{key:a,class:[n.selContenido===e.id?"shadow":"","sala",n.selContenido===e.id?"border-secondary":"",n.selContenido===e.id?"bg-light":"","d-flex item","mb-1"],attrs:{href:"#"},on:{click:function(t){return n.seleccionarContenido(e.id,a)}}},[t("div",[t("b-img",{staticClass:"image",attrs:{src:"/uploads/portadas/"+e.portada,fluid:"",alt:"portada"}})],1),t("div",{staticClass:"ml-4"},[t("div",[t("h5",[n._v(n._s(e.Titulo))])]),t("div",[t("h6",[n._v(n._s(e.nTemp))])])])])})),1)],1)},i=[],o=(t("a9e3"),t("5530")),r=t("2f62"),s={name:"ListaContenido",props:{contenidos:{type:Array,default:null},tContenido:{type:Number,default:0}},data:function(){return{state:"not_accepted"}},computed:Object(o["a"])({},Object(r["c"])("Catalogo",["selContenido"])),methods:Object(o["a"])({seleccionarContenido:function(n,e){this.updateContenido(this.contenidos[e]),this.updateTemporadas(this.contenidos[e].id),this.updateSelContenido(n)}},Object(r["b"])("Catalogo",["updateTemporadas"]),{},Object(r["d"])("Catalogo",["updateContenido","updateSelContenido"])),beforeDestroy:function(){this.updateSelContenido(null)}},c=s,u=(t("ec56"),t("2877")),l=Object(u["a"])(c,a,i,!1,null,"53e2ffb3",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-331b0e02.654bf3de.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ef4dfd"],{"11b4":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Jumbotron",{attrs:{titulo:"Contenido",pieTitulo:t.pieTitulo}}),a("NavContenido"),a("div",[0==t.catalogo.length?a("b-card",{staticClass:"mb-2 text-center"},[a("h6",{staticClass:"display-4"},[t._v("Aun no hay "+t._s(t.tipo)+"s registradas")])]):a("Catalogo"),a("Paginacion")],1)],1)},i=[],r=a("5530"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"p-2",attrs:{fluid:""}},[t.cargandoCatalogo?a("LoadingCatalogo"):a("b-row",t._l(t.catalogo,(function(e,o){return a("b-col",{key:o,attrs:{cols:"3"}},[a("ContenidoIndividual",{attrs:{titulo:e.Titulo,tContenido:t.tContenido,portada:e.portada,id:e.id}})],1)})),1)],1)],1)},s=[],c=a("f8b6"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",t._l(t.cantidad,(function(e,o){return a("b-col",{key:o,attrs:{cols:"3"}},[a("b-overlay",{attrs:{show:!0,rounded:"sm"}},[a("b-card",{staticClass:"shadow",staticStyle:{width:"100%"},attrs:{"footer-tag":"footer",align:"center"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"pie-card"})]},proxy:!0}],null,!0)},[a("div",{staticClass:"imagen-card rounded mb-3"})])],1)],1)})),1)],1)},d=[],u={name:"LoadingCatalogo",data:function(){return{cantidad:4}}},p=u,f=(a("360d"),a("2877")),b=Object(f["a"])(p,l,d,!1,null,null,null),m=b.exports,v=a("2f62"),g={name:"Catalogo",computed:Object(r["a"])({},Object(v["c"])("Catalogo",["catalogo","tContenido"]),{},Object(v["c"])(["cargandoCatalogo"])),components:{ContenidoIndividual:c["a"],LoadingCatalogo:m}},h=g,C=Object(f["a"])(h,n,s,!1,null,"392edc34",null),S=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"shadow rounded",attrs:{fluid:""}},[a("b-nav",{staticClass:"my-2",attrs:{pills:""}},[a("b-nav-item",{staticClass:"mt-4",attrs:{active:!!t.botones[0]},on:{click:function(e){t.cargarPeliculas(0).then((function(){t.updateFiltros(t.catalogo)})),t.setActivo(0),t.modifyTContenido(0),t.resetFiltros()}}},[t._v(" Estrenos")]),a("b-nav-item",{staticClass:"mt-4",attrs:{active:!!t.botones[1]},on:{click:function(e){t.cargarSeries().then((function(){t.updateFiltros(t.catalogo)})),t.setActivo(1),t.modifyTContenido(1),t.resetFiltros()}}},[t._v(" Series")]),a("b-nav-item",{staticClass:"mt-4",attrs:{active:!!t.botones[2]},on:{click:function(e){t.cargarPeliculas(1).then((function(){t.updateFiltros(t.catalogo)})),t.resetFiltros(),t.setActivo(2)}}},[t._v(" Contemporaneas")]),a("div",{staticClass:"border rounded p-1"},[a("b-dropdown-header",[t._v("Selecciona el tipo de contenido a agregar")]),a("b-dropdown",{attrs:{text:"Agregar Peliculas"}},[a("b-dropdown-divider"),a("b-dropdown-item",{attrs:{to:{name:"Agregar Pelicula",params:{tipo:0}}}},[t._v("Estreno")]),a("b-dropdown-item",{attrs:{to:{name:"Agregar Pelicula",params:{tipo:1}}}},[t._v("Contempornea")])],1),a("b-dropdown",{attrs:{text:"Agregar Series"}},[a("b-dropdown-divider"),a("b-dropdown-item",{attrs:{to:{name:"Agregar Serie"}}},[t._v("Serie")]),a("b-dropdown-item",{attrs:{to:{name:"Agregar Temporada"}}},[t._v("Temporada")]),a("b-dropdown-item",{attrs:{to:{name:"Agregar Capitulo"}}},[t._v("Capitulo")])],1)],1),a("b-nav-form",{staticClass:"ml-auto"},[a("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[a("b-button-group",[a("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){return t.filtrar()}}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),t._v(" Buscar")]),a("b-button",{attrs:{variant:"warning"},on:{click:function(e){t.filtros=!t.filtros}}},[a("i",{staticClass:"fa fa-filter",attrs:{"aria-hidden":"true"}}),t._v(" Filtrar")])],1)]},proxy:!0}])},[a("b-form-input",{attrs:{type:"text",placeholder:"Buscar"},on:{keyup:function(e){return t.filtrar()}},model:{value:t.findText,callback:function(e){t.findText=e},expression:"findText"}})],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.filtros,expression:"filtros"}],staticClass:"nav_bar_contenido_y_filtro"},[a("div",{staticClass:"form-inline my-2 justify-content-center"},[a("b-input-group",{staticClass:"m-1",attrs:{size:"sm",prepend:"Idioma"}},[a("div",[a("b-form-select",{attrs:{options:t.idioma,size:"sm"},model:{value:t.idiomaSel,callback:function(e){t.idiomaSel=e},expression:"idiomaSel"}})],1)]),a("b-input-group",{staticClass:"m-1",attrs:{size:"sm",prepend:"Genero"}},[a("div",[a("b-form-select",{attrs:{options:t.genero,size:"sm"},model:{value:t.generoSel,callback:function(e){t.generoSel=e},expression:"generoSel"}})],1)]),t.botones[1]?t._e():a("b-input-group",{staticClass:"m-1",attrs:{size:"sm",prepend:"Director"}},[a("div",[a("b-form-select",{attrs:{options:t.director,size:"sm"},model:{value:t.directorSel,callback:function(e){t.directorSel=e},expression:"directorSel"}})],1)]),a("b-input-group",{staticClass:"m-1",attrs:{size:"sm",prepend:"Pais"}},[a("div",[a("b-form-select",{attrs:{options:t.pais,size:"sm"},model:{value:t.paisSel,callback:function(e){t.paisSel=e},expression:"paisSel"}})],1)]),a("b-input-group",{staticClass:"m-1",attrs:{size:"sm",prepend:"Productora"}},[a("div",[a("b-form-select",{attrs:{options:t.productora,size:"sm"},model:{value:t.productoraSel,callback:function(e){t.productoraSel=e},expression:"productoraSel"}})],1)]),a("b-input-group",{staticClass:"m-1",attrs:{size:"sm",prepend:"Año"}},[a("div",[a("b-form-select",{attrs:{options:t.año,size:"sm"},model:{value:t.añoSel,callback:function(e){t.añoSel=e},expression:"añoSel"}})],1)])],1)])],1)],1)},x=[],w={name:"NavContenido",data:function(){return{filtros:!1,idiomaSel:"",generoSel:"",directorSel:"",paisSel:"",productoraSel:"","añoSel":"",botones:{0:!0,1:!1,2:!1},findText:""}},computed:Object(r["a"])({},Object(v["c"])("Catalogo",["series","peliculas","catalogo"]),{},Object(v["c"])("filtros",["idioma","genero","director","pais","productora","año"])),methods:Object(r["a"])({},Object(v["d"])(["addBreadcrumb"]),{},Object(v["d"])("Catalogo",["modifyTContenido","filtrarContenido"]),{},Object(v["d"])("filtros",["updateFiltros"]),{},Object(v["b"])("Catalogo",["cargarPeliculas","cargarSeries"]),{setActivo:function(t){for(var e in this.botones)this.botones[e]=e==t},filtrar:function(){this.botones[0]?this.filtrarContenido(this.getParams(this.peliculas)):this.botones[1]?this.filtrarContenido(this.getParams(this.series)):this.filtrarContenido(this.getParams(this.peliculas))},resetFiltros:function(){this.idiomaSel="",this.generoSel="",this.directorSel="",this.paisSel="",this.productoraSel="",this.añoSel=""},getParams:function(t){return{contenido:t,texto:this.findText,idioma:this.idiomaSel,genero:this.generoSel,director:this.directorSel,pais:this.paisSel,productora:this.productoraSel,"año":this.añoSel}}})},y=w,j=Object(f["a"])(y,_,x,!1,null,"0ac7bf0f",null),O=j.exports,k=a("4239"),N=a("ec70"),A={name:"Contenido",data:function(){return{pieTitulo:"En este apartado podras navegar por todo el catalogo que ofrece Vodei asi como agregar nuevo contenido o modifcarlo"}},computed:Object(r["a"])({},Object(v["c"])("Catalogo",["peliculas","catalogo","tipo"])),components:{Catalogo:S,NavContenido:O,Paginacion:k["a"],Jumbotron:N["a"]},methods:Object(r["a"])({},Object(v["d"])(["addBreadcrumb"]),{},Object(v["d"])("filtros",["updateFiltros"]),{},Object(v["d"])("Catalogo",["updateCatalogo"]),{},Object(v["b"])("Catalogo",["cargarPeliculas","cargarSeries"])),mounted:function(){var t=this;this.cargarSeries(),this.cargarPeliculas(0).then((function(){t.updateFiltros(t.peliculas)}))},created:function(){this.addBreadcrumb([{text:"Home",to:{name:"Home"}},{text:"Contenido",to:{name:"Contenido"}}])},destroyed:function(){this.updateCatalogo(null)}},E=A,T=(a("aa94"),Object(f["a"])(E,o,i,!1,null,"161d74c0",null));e["default"]=T.exports},"16d7":function(t,e,a){},"360d":function(t,e,a){"use strict";var o=a("9ccb"),i=a.n(o);i.a},4239:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("div",{staticClass:"overflow-auto"},[a("b-pagination-nav",{attrs:{"link-gen":t.linkGen,"number-of-pages":10,"use-router":"",align:"center"}})],1)])],1)},i=[],r={name:"Paginacion",methods:{linkGen:function(t){return 1===t?"?":"?page=".concat(t)}}},n=r,s=a("2877"),c=Object(s["a"])(n,o,i,!1,null,"187f68e7",null);e["a"]=c.exports},4899:function(t,e,a){"use strict";var o=a("16d7"),i=a.n(o);i.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var o=a("1d80"),i=a("5899"),r="["+i+"]",n=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var a=String(o(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var o=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,n;return i&&"function"==typeof(r=e.constructor)&&r!==a&&o(n=r.prototype)&&n!==a.prototype&&i(t,n),t}},"9ccb":function(t,e,a){},a9e3:function(t,e,a){"use strict";var o=a("83ab"),i=a("da84"),r=a("94ca"),n=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),d=a("c04e"),u=a("d039"),p=a("7c73"),f=a("241c").f,b=a("06cf").f,m=a("9bf2").f,v=a("58a8").trim,g="Number",h=i[g],C=h.prototype,S=c(p(C))==g,_=function(t){var e,a,o,i,r,n,s,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+l}for(r=l.slice(2),n=r.length,s=0;s<n;s++)if(c=r.charCodeAt(s),c<48||c>i)return NaN;return parseInt(r,o)}return+l};if(r(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var x,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(S?u((function(){C.valueOf.call(a)})):c(a)!=g)?l(new h(_(e)),a,w):_(e)},y=o?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;y.length>j;j++)s(h,x=y[j])&&!s(w,x)&&m(w,x,b(h,x));w.prototype=C,C.constructor=w,n(i,g,w)}},aa94:function(t,e,a){"use strict";var o=a("f199"),i=a.n(o);i.a},ec70:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.visible,expression:"!visible"}],attrs:{variant:"outline-success",href:""},on:{click:function(e){t.visible=!t.visible}}},[a("i",{staticClass:"fas fa-eye    "})]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],attrs:{variant:"outline-danger"},on:{click:function(e){t.visible=!t.visible}}},[a("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})]),a("transition",{attrs:{name:"fade"}},[a("b-jumbotron",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"mb-1 jumbo",attrs:{"bg-variant":"light",header:t.titulo,lead:t.pieTitulo}},[a("p",[t._v(t._s(t.parrafo))]),a("b-button",{attrs:{variant:"success",href:"#"}},[a("i",{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),t._v(" Documentacion "+t._s(t.titulo))]),a("div",{staticClass:"ml-auto"})],1)],1)],1)},i=[],r={name:"Jumbotron",props:{titulo:{type:String,default:""},pieTitulo:{type:String,default:""}},data:function(){return{visible:!0,parrafo:"Pára mas informacion visite la documentacion"}}},n=r,s=(a("4899"),a("2877")),c=Object(s["a"])(n,o,i,!1,null,"051844c2",null);e["a"]=c.exports},f199:function(t,e,a){},f8b6:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"shadow",staticStyle:{width:"100%"},attrs:{title:t.titulo,"header-tag":"header","footer-tag":"footer",align:"center","img-src":"http://localhost:3000/uploads/portadas/"+t.portada},scopedSlots:t._u([t.detalles?{key:"footer",fn:function(){return[a("b-overlay",{staticClass:"d-inline-blocks",attrs:{show:t.cargando,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.cargarContenido()}}},[t._v("Detalles ")])],1)]},proxy:!0}:null],null,!0)},[1===t.tContenido?a("b-card-text",[t._v("Numero de temporadas: "+t._s(t.nTemp))]):t._e()],1)],1)},i=[],r=(a("caad"),a("a9e3"),a("2532"),a("96cf"),a("1da1")),n=a("5530"),s=a("2f62"),c={name:"ContenidoIndividual",props:{titulo:{type:String,default:""},portada:{type:String,default:""},nTemp:{type:Number,default:0},detalles:{type:Boolean,default:!0},tContenido:{type:Number,default:0},id:{type:String,default:""}},methods:Object(n["a"])({},Object(s["b"])("Catalogo",["updatePelicula","updateSerie"]),{},Object(s["d"])("Catalogo",["updateContenido"]),{cargarContenido:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id.includes("mov")){e.next=8;break}return e.next=3,t.updatePelicula(t.id);case 3:a=e.sent,t.updateContenido(a),t.$router.push("/contenido/detalles-contenido/".concat(t.id)),e.next=13;break;case 8:return e.next=10,t.updateSerie(t.id);case 10:o=e.sent,t.updateContenido(o),t.$router.push("/contenido/detalles-contenido/".concat(t.id));case 13:case"end":return e.stop()}}),e)})))()}}),computed:Object(n["a"])({},Object(s["c"])("Catalogo",["pelicula","serie","contenido"]),{},Object(s["c"])(["cargando"]))},l=c,d=a("2877"),u=Object(d["a"])(l,o,i,!1,null,"cc1e9c88",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-58ef4dfd.051cb364.js.map
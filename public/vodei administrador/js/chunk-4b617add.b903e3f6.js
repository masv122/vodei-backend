(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b617add"],{"165b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{id:"ModalSerie",title:"Confirme"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.ok,r=e.cancel;return[o("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){a(),t._agregarSerie()}}},[t._v(" Agregar ")]),o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return r()}}},[t._v(" Cancelar ")])]}}])},[o("ContenidoModalSerie",{attrs:{serie:t.retornaSerie()}})],1),o("b-container",[o("h1",{staticClass:"display-4 my-3"},[o("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),t._v(" Agregar Serie ")]),o("form",{on:{submit:function(t){t.preventDefault()}}},[o("b-form-row",[o("b-col",{attrs:{"cols-sm":"12","cols-md":"6"}},[o("b-form-group",[o("b-form-group",{attrs:{id:"input-group-titulo",label:"Titulo:","label-for":"titulo"}},[o("b-form-input",{attrs:{id:"titulo",type:"text",required:"",placeholder:"Ingrese Titulo"},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}})],1),o("b-form-group",{attrs:{id:"input-group-idioma",label:"Idioma:","label-for":"idioma"}},[o("b-form-select",{attrs:{id:"idioma",options:t.idiomas,required:""},model:{value:t.idiomasSel,callback:function(e){t.idiomasSel=e},expression:"idiomasSel"}})],1),o("b-form-group",{attrs:{id:"input-group-subtitulo",label:"Subtitulo:","label-for":"input-1"}},[o("b-form-select",{attrs:{id:"subtitulo",options:t.subtitulos,required:""},model:{value:t.subtitulosSel,callback:function(e){t.subtitulosSel=e},expression:"subtitulosSel"}})],1),o("b-form-group",{attrs:{id:"input-group-productora",label:"Productora:","label-for":"productora"}},[o("b-form-input",{attrs:{id:"productora",type:"text",required:"",placeholder:"Ingrese Productora"},model:{value:t.productora,callback:function(e){t.productora=e},expression:"productora"}})],1),o("b-form-group",{attrs:{id:"input-group-actores",label:"Actores:","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"actores",type:"text",required:"",placeholder:"Ingrese Actores"},model:{value:t.actores,callback:function(e){t.actores=e},expression:"actores"}})],1)],1)],1),o("b-col",{attrs:{"cols-sm":"12","cols-md":"6"}},[o("b-form-group",[o("b-form-group",{attrs:{id:"input-group-titulo-original",label:"Titulo original:","label-for":"titulo-original"}},[o("b-form-input",{attrs:{id:"titulo-original",type:"text",required:"",placeholder:"Ingrese Titulo original"},model:{value:t.tituloOriginal,callback:function(e){t.tituloOriginal=e},expression:"tituloOriginal"}})],1),o("b-form-group",{attrs:{id:"input-group-genero",label:"Genero:","label-for":"genero"}},[o("b-form-select",{attrs:{id:"genero",options:t.genero,required:""},model:{value:t.generoSel,callback:function(e){t.generoSel=e},expression:"generoSel"}})],1),o("b-form-group",{attrs:{id:"input-group-pais",label:"Pais:","label-for":"pais"}},[o("b-form-select",{attrs:{id:"pais",options:t.pais,required:""},model:{value:t.paisSel,callback:function(e){t.paisSel=e},expression:"paisSel"}})],1),o("b-form-group",{attrs:{id:"input-group-fecha",label:"Fecha de estreno:","label-for":"fecha"}},[o("b-input-group",{staticClass:"mb-3"},[o("b-form-input",{attrs:{id:"example-input",type:"text",placeholder:"YYYY-MM-DD"},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}}),o("b-input-group-append",[o("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"es-ES",required:"","aria-controls":"example-input"},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1)],1)],1),o("b-form-group",[o("div",{staticClass:"mt-1"},[t._v(" Portada Seleccionada: "+t._s(t.portada?t.portada.name:"")+" ")]),o("b-form-file",{attrs:{accept:"image/*",state:Boolean(t.portada),placeholder:"Selecciona una portada o arrastrala aqui...","drop-placeholder":"Arrastrala aqui...",required:""},model:{value:t.portada,callback:function(e){t.portada=e},expression:"portada"}})],1)],1)],1)],1),o("b-form-group",{attrs:{id:"input-group-sinopsis",label:"Sinopsis:","label-for":"sinopsis"}},[o("b-form-textarea",{attrs:{id:"sinopsis",placeholder:"Ingrese sinopsis...",rows:"3",required:"","max-rows":"6"},model:{value:t.sinopsis,callback:function(e){t.sinopsis=e},expression:"sinopsis"}})],1),o("b-form-group",{attrs:{align:"center"}},[o("b-overlay",{staticClass:"d-inline-blocks",attrs:{show:t.cargando,rounded:"",opacity:"0.6","spinner-small":"","spinner-variant":"primary"}},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.ModalSerie",modifiers:{ModalSerie:!0}}],attrs:{block:"",variant:"primary",type:"submit",disabled:t.isDisabled}},[t._v(" Agregar ")])],1),o("b-button",{attrs:{block:"",type:"reset",variant:"danger"}},[t._v(" Restablecer ")])],1)],1)])],1)},r=[],i=o("5530"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){e.preventDefault(),t.agregarSerie(t.retornaSerie())}}},[o("b-form-row",[o("b-col",{attrs:{"cols-sm":"12","cols-md":"6"}},[o("b-form-group",[o("b-form-group",{attrs:{id:"input-group-titulo",label:"Titulo:","label-for":"titulo"}},[o("b-form-input",{attrs:{id:"titulo",type:"text",readonly:""},model:{value:t.titulo,callback:function(e){t.titulo=e},expression:"titulo"}})],1),o("b-form-group",{attrs:{id:"input-group-idioma",label:"Idioma:","label-for":"idioma"}},[o("b-form-input",{attrs:{id:"idioma",readonly:""},model:{value:t.idioma,callback:function(e){t.idioma=e},expression:"idioma"}})],1),o("b-form-group",{attrs:{id:"input-group-subtitulo",label:"Subtitulo:","label-for":"subtitulo"}},[o("b-form-input",{attrs:{id:"subtitulo",readonly:""},model:{value:t.subtitulo,callback:function(e){t.subtitulo=e},expression:"subtitulo"}})],1),o("b-form-group",{attrs:{id:"input-group-productora",label:"Productora:","label-for":"productora"}},[o("b-form-input",{attrs:{id:"productora",type:"text",readonly:""},model:{value:t.productora,callback:function(e){t.productora=e},expression:"productora"}})],1),o("b-form-group",{attrs:{id:"input-group-actores",label:"Actores:","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"actores",type:"text",readonly:""},model:{value:t.actores,callback:function(e){t.actores=e},expression:"actores"}})],1)],1)],1),o("b-col",{attrs:{"cols-sm":"12","cols-md":"6"}},[o("b-form-group",[o("b-form-group",{attrs:{id:"input-group-titulo-original",label:"Titulo original:","label-for":"titulo-original"}},[o("b-form-input",{attrs:{id:"titulo-original",type:"text",readonly:""},model:{value:t.tituloOriginal,callback:function(e){t.tituloOriginal=e},expression:"tituloOriginal"}})],1),o("b-form-group",{attrs:{id:"input-group-genero",label:"Genero:","label-for":"genero"}},[o("b-form-input",{attrs:{id:"genero",readonly:""},model:{value:t.genero,callback:function(e){t.genero=e},expression:"genero"}})],1),o("b-form-group",{attrs:{id:"input-group-pais",label:"Pais:","label-for":"pais"}},[o("b-form-input",{attrs:{id:"pais",readonly:""},model:{value:t.pais,callback:function(e){t.pais=e},expression:"pais"}})],1),o("b-form-group",{attrs:{id:"input-group-fecha",label:"Fecha:","label-for":"fecha"}},[o("b-form-input",{attrs:{id:"fecha",readonly:""},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1),o("b-form-group",{attrs:{id:"input-group-portadas",label:"Portada:","label-for":"portadas"}},[o("b-form-input",{attrs:{id:"portadas",type:"text",readonly:""},model:{value:t.portada,callback:function(e){t.portada=e},expression:"portada"}})],1)],1)],1)],1),o("b-form-group",{attrs:{id:"input-group-sinopsis",label:"Sinopsis:","label-for":"sinopsis"}},[o("b-form-textarea",{attrs:{id:"sinopsis",placeholder:"Ingrese sinopsis...",rows:"3",readonly:"","max-rows":"6"},model:{value:t.sinopsis,callback:function(e){t.sinopsis=e},expression:"sinopsis"}})],1)],1)])},s=[],n=(o("b0c0"),{name:"ContenidoModalSerie",props:{serie:null,type:Object},data:function(){return{titulo:this.serie.titulo,idioma:this.serie.idioma,subtitulo:this.serie.subtitulo,productora:this.serie.productora,actores:this.serie.actores,tituloOriginal:this.serie.tituloOriginal,genero:this.serie.genero,pais:this.serie.pais,fecha:this.serie.fecha,portada:this.serie.portada.name,sinopsis:this.serie.sinopsis}}}),u=n,c=o("2877"),p=Object(c["a"])(u,l,s,!1,null,"9afde732",null),d=p.exports,b=o("2f62"),f=o("a29b"),m={name:"Serie",mixins:[f["a"]],data:function(){return{idiomasSel:null,subtitulosSel:null,generoSel:null,paisSel:null,idiomas:[{value:null,text:"Por favor selecciona un idioma"},{value:"es-LA",text:"Español Latino"},{value:"es-ES",text:"Español España"},{value:"en-US",text:"Ingles Nortea-Americano"},{value:"en-UK",text:"Ingles Britanico"},{value:"jap",text:"Japones"},{value:"chn",text:"Chino"}],subtitulos:[{value:null,text:"Por favor selecciona un Subtitulo"},{value:"es-LA",text:"Español Latino"},{value:"es-ES",text:"Español España"},{value:"en-US",text:"Ingles Nortea-Americano"},{value:"en-UK",text:"Ingles Britanico"},{value:"jap",text:"Japones"},{value:"chn",text:"Chino"}],genero:[{value:null,text:"Por favor selecciona un Genero"},{value:"Drama",text:"Drama"},{value:"Accion",text:"Accion"},{value:"Suspenso",text:"Suspenso"},{value:"Ciencia Ficcion",text:"Ciencia Ficcion"},{value:"No-binario",text:"No-Binario"}],pais:[{value:null,text:"Por favor selecciona un Pais"},{value:"usa",text:"Estados Unidos"},{value:"uk",text:"Reino Unido"},{value:"en-US",text:"Ingles Nortea-Americano"},{value:"en-UK",text:"Ingles Britanico"},{value:"jap",text:"Japon"},{value:"chn",text:"China"}],portada:null,titulo:"",productora:"",actores:"",tituloOriginal:"",fecha:"",sinopsis:"",id:0}},computed:Object(i["a"])({},Object(b["c"])("Catalogo",["series"]),{},Object(b["c"])(["cargando"]),{isDisabled:function(){return null===this.portada||""===this.sinopsis}}),methods:Object(i["a"])({},Object(b["d"])(["addBreadcrumb"]),{},Object(b["b"])("Catalogo",["agregarSerie"]),{retornaSerie:function(){return{id:"ser-"+this.series.length,titulo:this.titulo,idioma:this.idiomasSel,subtitulo:this.subtitulosSel,productora:this.productora,actores:this.actores,tituloOriginal:this.tituloOriginal,genero:this.generoSel,pais:this.paisSel,fecha:this.fecha,portada:null===this.portada?"":this.portada,sinopsis:this.sinopsis,tipo:this.tipo}},_agregarSerie:function(){var t=this,e=this.agregarSerie(this.retornaSerie());e.then((function(e){t.show(e,"Serie","agregada")}))}}),components:{ContenidoModalSerie:d},created:function(){this.addBreadcrumb([{text:"Home",to:{name:"Home"}},{text:"Contenido",to:{name:"Contenido"}},{text:"Agregar Serie",to:{name:"Agregar Serie"}}])}},g=m,h=Object(c["a"])(g,a,r,!1,null,"64a7173b",null);e["default"]=h.exports},"99af":function(t,e,o){"use strict";var a=o("23e7"),r=o("d039"),i=o("e8b5"),l=o("861d"),s=o("7b0b"),n=o("50c4"),u=o("8418"),c=o("65f0"),p=o("1dde"),d=o("b622"),b=o("2d00"),f=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",h=b>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),v=p("concat"),x=function(t){if(!l(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},S=!h||!v;a({target:"Array",proto:!0,forced:S},{concat:function(t){var e,o,a,r,i,l=s(this),p=c(l,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?l:arguments[e],x(i)){if(r=n(i.length),d+r>m)throw TypeError(g);for(o=0;o<r;o++,d++)o in i&&u(p,d,i[o])}else{if(d>=m)throw TypeError(g);u(p,d++,i)}return p.length=d,p}})},a29b:function(t,e,o){"use strict";o("99af");e["a"]={methods:{show:function(t,e,o){var a="",r="",i="";t.error?(a="No se pudo ".concat(o," la ").concat(e),r="danger",i="fa-times",alert(t.error_object)):(a="".concat(e," ").concat(o," satisfactoriamente"),r="success",i="fa-check");var l=this.$createElement,s=l("p",{class:["text-center","mb-0"]},[l("i",{class:["fa",i]})," ".concat(a)]),n=l("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[l("strong",{class:"mr-2"},"¡Nueva Notificacion!"),l("small",{class:"ml-auto text-italics"},"Ahora")]);this.$bvToast.toast([s],{title:[n],autoHideDelay:5e3,toaster:"b-toaster-bottom-right",appendToast:!1,variant:r})}}}},b0c0:function(t,e,o){var a=o("83ab"),r=o("9bf2").f,i=Function.prototype,l=i.toString,s=/^\s*function ([^ (]*)/,n="name";a&&!(n in i)&&r(i,n,{configurable:!0,get:function(){try{return l.call(this).match(s)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-4b617add.b903e3f6.js.map
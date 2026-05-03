import{d as L,m as r,n as v,o as p,a as f,k as n,y as _,f as g,q as D,t as N,p as A,j as V,_ as W}from"./index-raaDErrg.js";import{e as H}from"./events-syaJFb0M.js";const k=M=>(A("data-v-cb740738"),M=M(),V(),M),B={class:"newsletter-admin"},C=k(()=>n("div",{class:"page-header"},[n("h1",null,"Newsletter versenden")],-1)),O={class:"proposal-section"},U=["disabled"],j={key:0,class:"week-info"},z={key:0,class:"error-message"},P={key:1,class:"success-message"},q={key:2,class:"success-message"},F={class:"form-section"},K={class:"field"},Z=k(()=>n("label",{for:"newsletter-title"},"Betreff",-1)),G={class:"field"},R=k(()=>n("label",{for:"newsletter-content"},"Inhalt (HTML)",-1)),J={class:"field"},Q=k(()=>n("label",{for:"newsletter-text"},"Textversion (Plain Text)",-1)),X={key:3,class:"send-section"},ee=["disabled"],te=["disabled"],se={key:4,class:"preview-section"},ae=k(()=>n("h2",null,"Vorschau",-1)),ne=["innerHTML"],le=L({__name:"NewsletterAdmin",setup(M){r.locale("de");const h=v(""),o=v(""),$=v(""),i=v(!1),d=v(!1),w=v(null),c=v("");function y(){const s=r();return{start:s,end:s.add(7,"days").endOf("day")}}function x(s){if(s.artistOrder){const e=s.artistOrder.split(",").map(a=>parseInt(a.trim())).filter(a=>!isNaN(a)),t=e.map(a=>s.artists.find(u=>u.id===a)).filter(a=>a!==void 0),m=s.artists.filter(a=>!e.includes(a.id));return[...t,...m]}return s.artists}function Y(s){return s.replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').trim()}function T(s){let e="";for(const t of s){const m=r(t.date).locale("de").format("dddd, DD. MMMM YYYY"),a=r(t.date).format("HH:mm");e+=`<h2>Diese Woche im Autohaus: ${m} – ${t.title}</h2>
`,e+=`<p><strong>Einlass: ${a} Uhr</strong></p>
`,t.image_url&&(e+=`<p><img src="${t.image_url}" alt="${t.title}" style="max-width:100%;height:auto;"></p>
`),e+=t.descriptionShort+`
`;const u=x(t);for(const l of u)e+=`
<h3>${l.name}</h3>
`,l.description&&(e+=`<p>${l.description}</p>
`);e+=`
<p>`,e+=`<a href="https://altesauto.haus/event/${t.id}">Mehr Infos</a>`,t.shopLink&&(e+=` &nbsp;|&nbsp; <a href="${t.shopLink}">Tickets kaufen</a>`),e+=`</p>
`,e+=`
<hr>

`}return e+=`<p><a href="https://altesauto.haus">Zur Homepage</a></p>
`,e+=`<p style="font-size: 0.85em; color: #666;">Du möchtest keine Newsletter mehr erhalten? <a href="{%link_unsubscribe}">Hier abmelden</a></p>
`,e}function I(s){let e="";for(const t of s){const m=r(t.date).locale("de").format("dddd, DD. MMMM YYYY"),a=r(t.date).format("HH:mm");e+=`Diese Woche im Autohaus: ${m} – ${t.title}
`,e+=`${"=".repeat(60)}

`,e+=`Einlass: ${a} Uhr

`,e+=Y(t.descriptionShort)+`
`;const u=x(t);for(const l of u)e+=`
--- ${l.name} ---
`,l.description&&(e+=Y(l.description)+`
`);e+=`
Mehr Infos: https://altesauto.haus/event/${t.id}
`,t.shopLink&&(e+=`Tickets kaufen: ${t.shopLink}
`),e+=`
${"─".repeat(40)}

`}return e+=`Zur Homepage: https://altesauto.haus

`,e+=`Du möchtest keine Newsletter mehr erhalten? {%link_unsubscribe}
`,e}async function E(){i.value=!0,c.value="",w.value=null;try{const{start:s,end:e}=y(),a=((await H.getAll()).results||[]).filter(l=>{const b=r(l.date);return b.isAfter(s.subtract(1,"ms"))&&b.isBefore(e.add(1,"ms"))}).sort((l,b)=>r(l.date).valueOf()-r(b.date).valueOf());if(a.length===0){c.value=`Keine Events in der Woche ${s.format("DD.MM.")} – ${e.format("DD.MM.YYYY")} gefunden.`;return}const u=a.map(l=>`${r(l.date).locale("de").format("DD.MM.")} ${l.title}`);h.value=u.join("  /  "),o.value=T(a),$.value=I(a)}catch(s){c.value="Fehler beim Laden der Events: "+((s==null?void 0:s.message)||s)}finally{i.value=!1}}async function S(s=!1){if(!(!h.value||!o.value)){d.value=!0,c.value="",w.value=null;try{await H.sendNewsletter(h.value,o.value,$.value,s),w.value=s?"test":"live"}catch(e){c.value="Fehler beim Versenden: "+((e==null?void 0:e.message)||e)}finally{d.value=!1}}}return(s,e)=>(p(),f("div",B,[C,n("div",O,[n("button",{class:"btn-primary",onClick:E,disabled:i.value||d.value},_(i.value?"Wird geladen...":"Vorschlag erstellen"),9,U),i.value?g("",!0):(p(),f("p",j,"Nächste Woche: "+_(y().start.format("DD.MM."))+" – "+_(y().end.format("DD.MM.YYYY")),1))]),c.value?(p(),f("div",z,_(c.value),1)):g("",!0),w.value==="test"?(p(),f("div",P,"Test-Newsletter erfolgreich versendet!")):g("",!0),w.value==="live"?(p(),f("div",q,"Newsletter erfolgreich versendet!")):g("",!0),n("div",F,[n("div",K,[Z,D(n("input",{id:"newsletter-title",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>h.value=t),placeholder:"z.B. 21.03. Konzertname  /  22.03. Anderes Event"},null,512),[[N,h.value]])]),n("div",G,[R,D(n("textarea",{id:"newsletter-content","onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),placeholder:"Newsletter-Inhalt als HTML...",rows:"20"},null,512),[[N,o.value]])]),n("div",J,[Q,D(n("textarea",{id:"newsletter-text","onUpdate:modelValue":e[2]||(e[2]=t=>$.value=t),placeholder:"Newsletter-Inhalt als reiner Text...",rows:"15"},null,512),[[N,$.value]])])]),h.value&&o.value?(p(),f("div",X,[n("button",{class:"btn-test",onClick:e[3]||(e[3]=t=>S(!0)),disabled:d.value||i.value},_(d.value?"Wird versendet...":"Test versenden"),9,ee),n("button",{class:"btn-send",onClick:e[4]||(e[4]=t=>S(!1)),disabled:d.value||i.value},_(d.value?"Wird versendet...":"Newsletter jetzt versenden"),9,te)])):g("",!0),o.value?(p(),f("div",se,[ae,n("div",{class:"preview-box",innerHTML:o.value},null,8,ne)])):g("",!0)]))}}),ie=W(le,[["__scopeId","data-v-cb740738"]]);export{ie as default};

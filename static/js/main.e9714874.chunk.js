(this["webpackJsonppaint-store"]=this["webpackJsonppaint-store"]||[]).push([[0],{23:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(8),s=t(16),r=t.n(s),o=t(12),c=(t(23),t(2)),i=t(18),d=t(1),l=function(e){var a=e.quantityOfWalls,t=Array(a).fill(null),s=Object(n.useState)(!1),r=Object(i.a)(s,2),o=(r[0],r[1],t.map((function(e,a){var n=function(e){return console.log(e.target.checked)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"wall-height-".concat(a),children:["Altura Parede ",a,Object(d.jsx)("input",{id:"wall-height-".concat(a),type:"number",min:1,max:15,step:.1,required:!0})]}),Object(d.jsxs)("label",{htmlFor:"wall-length-".concat(a),children:["Comprimento Parede ",a,Object(d.jsx)("input",{id:"wall-length-".concat(a),type:"number",min:1,max:15,step:.01,required:!0})]}),Object(d.jsxs)("label",{htmlFor:"wall-".concat(a,"-has-window"),children:["Possui janela",Object(d.jsx)("input",{id:"wall-".concat(a,"-has-window"),type:"checkbox",onChange:n})]}),Object(d.jsxs)("label",{htmlFor:"wall-".concat(a,"-has-door"),children:["Possui porta",Object(d.jsx)("input",{id:"wall-".concat(a,"-has-door"),type:"checkbox",onChange:n})]}),console.log(t)]})})));return Object(d.jsx)("div",{children:o})},u=function(){var e="1. Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros, mas podem possuir alturas e larguras diferentes;\n  2. O total de \xe1rea das portas e janelas deve ser no m\xe1ximo 50 % da \xe1rea de parede;\n  3. A altura de paredes com porta deve ser, no m\xednimo, 30 cent\xedmetros maior que a altura da porta;\n  4. Cada janela possui as medidas: 2, 00 x 1, 20 mtos;\n  5. Cada porta possui as medidas: 0, 80 x 1, 90;\n  6. Cada litro de tinta \xe9 capaz de pintar 5 metros quadrados;\n  7. N\xe3o considerar teto nem piso.;\n  8. As varia\xe7\xf5es de tamanho das latas de tinta s\xe3o: ;\n  - 0, 5 L;\n  - 2, 5 L;\n  - 3, 6 L;\n  - 18 L; ".split(";").map((function(e,a){return Object(d.jsx)("p",{children:e},a)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Regras de neg\xf3cio"}),Object(d.jsx)(l,{quantityOfWalls:4}),Object(d.jsx)("ul",{children:e})]})},p=function(){return Object(d.jsx)(c.c,{children:Object(d.jsx)(c.a,{exact:!0,path:"/desafio-DIGITAL-REPUBLIC",component:u})})};var j=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("p",{children:"Uma aplica\xe7\xe3o web que ajude o usu\xe1rio a calcular a quantidade de tinta necess\xe1ria para pintar uma sala."}),Object(d.jsx)("p",{children:"Essa aplica\xe7\xe3o deve considerar que a sala \xe9 composta de 4 paredes e deve permitir que o usu\xe1rio escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede."}),Object(d.jsx)("p",{children:"Com base na quantidade necess\xe1ria o sistema deve apontar tamanhos de lata de tinta que o usu\xe1rio deve comprar."}),Object(d.jsx)(p,{})]})},m=(t(32),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,o=a.getTTFB;t(e),n(e),s(e),r(e),o(e)}))});r.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),m()}},[[33,1,2]]]);
//# sourceMappingURL=main.e9714874.chunk.js.map
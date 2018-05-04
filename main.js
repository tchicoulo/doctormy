 let text    = document.querySelector(".text");
 let epaule  = document.querySelector("#epaule");
 let coude  = document.querySelector("#coude");
 let poignet  = document.querySelector("#poignet");
 let hanche  = document.querySelector("#hanche");
 let genou  = document.querySelector("#genou");
 let cheville  = document.querySelector("#cheville");


epaule.addEventListener("mouseover", function(){
text.innerHTML = "<b>L'Epaule:</b><br/><br />L'épaule (nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain.";
});
coude.addEventListener("mouseover", function(){
text.innerHTML = "<b>Le Coude:</b><br/><br />Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.";
});
poignet.addEventListener("mouseover", function(){
text.innerHTML = "<b>Le Poignet:</b><br /><br />Le poignet est une région du membre supérieur située entre la main et l'avant-bras, et contenant le carpe. Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d'adapter la capacité de flexion-extension maximale des doigts et de la préhension.";
});
hanche.addEventListener("mouseover", function(){
text.innerHTML = "<b>La Hanche:</b><br /><br />La hanche ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os iliaque et le fémur.";
});
genou.addEventListener("mouseover", function(){
text.innerHTML = "<b>Le Genou:</b><br /><br />Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou.";
});
cheville.addEventListener("mouseover", function(){
text.innerHTML = "<b>La Cheville:</b><br /><br />La cheville ou cou-de-pied est l'articulation qui relie la jambe et le pied. Une cheville adulte est composée, au point de vue osseux, de l'épiphyse inférieure du tibia (malléole interne et plafond), de l'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, on parle d'articulation supinale de l'arrière pied.";
});



epaule.addEventListener("mouseout", function(){
text.innerHTML = "";
});
coude.addEventListener("mouseout", function(){
text.innerHTML = "";
});
poignet.addEventListener("mouseout", function(){
text.innerHTML = "";
});
hanche.addEventListener("mouseout", function(){
text.innerHTML = "";
});
genou.addEventListener("mouseout", function(){
text.innerHTML = "";
});
cheville.addEventListener("mouseout", function(){
text.innerHTML = "";
});

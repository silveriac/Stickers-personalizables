window.onload = (evt) =>{
    //document.getElementById("Character").addEventListener("click", () =>{selectImage()});
    populate("CharacterModal");
    populate("HatsModal");
    populate("GlassesModal");
    populate("OthersModal");
    document.getElementById("Character").addEventListener("click", ()=>{changeView("CharacterModal")});
    document.getElementById("Hat").addEventListener("click", ()=>{changeView("HatsModal")});
    document.getElementById("Glasses").addEventListener("click", ()=>{changeView("GlassesModal")});
    document.getElementById("Other").addEventListener("click", ()=>{changeView("OthersModal")});
    console.log(document.getElementById("CharacterModal"));

}

const changeView = (modal) => {
    document.getElementById("CharacterModal").classList.remove("view");
    document.getElementById("HatsModal").classList.remove("view");
    document.getElementById("GlassesModal").classList.remove("view");
    document.getElementById("OthersModal").classList.remove("view");
    if(modal) document.getElementById(modal).classList.add("view");
}

const populate = (categoryModal) =>{
    let category = "";
    let none = document.createElement("img");
    none.src = "./assets/none.png"
    none.alt = "none"


    const fill = (cat) =>{
        document.getElementById(categoryModal).appendChild(none);
        none.addEventListener("click", ()=>{
            document.getElementById(`main${category}`).src = "";
            changeView();
        });
        galleryContent[cat].forEach((image, index) => {
            let currentImage = document.createElement("img");
            currentImage.src = `./assets/${image.src}`;
            currentImage.alt = `image ${index}`;
            currentImage.addEventListener("click", ()=>{
                document.getElementById(`main${category}`).src = `./assets/${image.src}`;
                changeView();
            });
            document.getElementById(categoryModal).appendChild(currentImage);
            console.log(index);
        })
    }
    switch(categoryModal){
        case "CharacterModal":
            category = "Character"
            fill('Character');
            break;
        case "HatsModal":
            category = "Hat"
            fill('Hat');
            break;
        case "GlassesModal":
            category = "Glasses"
            fill('Glasses');
            break;
        case "OthersModal":
            category = "Other"
            fill('Other');
            break;
        default:
            changeView();

    };

}



const galleryContent  = {
    'Character':[
      {'src': "personajes/skulliver-white.png", 'alt': "current character"},
      {'src': "personajes/skulliver-blue.png", 'alt': "current character"},
      {'src': "personajes/skulliver-yellow.png", 'alt': "current character"},
      {'src': "personajes/therry-blue.png", 'alt': "current character"},
      {'src': "personajes/therry-panda.png", 'alt': "current character"},
      {'src': "personajes/therry-pardo.png", 'alt': "current character"},
      {'src': "personajes/therry-polar.png", 'alt': "current character"},
      {'src': "personajes/alen-blue.png", 'alt': "current character"},
      {'src': "personajes/alen-gray.png", 'alt': "current character"},
      {'src': "personajes/alen-green.png", 'alt': "current character"},
      {'src': "personajes/bumi-brown.png", 'alt': "current character"},
      {'src': "personajes/bumi-yellow.png", 'alt': "current character"},
      {'src': "personajes/bumi-white.png", 'alt': "current character"},
      {'src': "personajes/catherine-black.png", 'alt': "current character"},
      {'src': "personajes/catherine-orange.png", 'alt': "current character"},
      {'src': "personajes/don-brown.png", 'alt': "current character"},
      {'src': "personajes/don-doberman.png", 'alt': "current character"},
      {'src': "personajes/horacio-brown.png", 'alt': "current character"},
      {'src': "personajes/horacio-blue.png", 'alt': "current character"},
      {'src': "personajes/robberto-blue.png", 'alt': "current character"},
      {'src': "personajes/robberto-gray.png", 'alt': "current character"},
      {'src': "personajes/robberto-yellow.png", 'alt': "current character"},
      {'src': "personajes/jackson-orange.png", 'alt': "current character"},
      {'src': "personajes/jackson-blue.png", 'alt': "current character"},
    ],
    'Hat':[
        {'src': "gorros/sombrero-mago-azul.png", 'alt': "current hat"},
        {'src': "gorros/sombrero-mago-negro.png", 'alt': "current hat"},
        {'src': "gorros/sombrero-mago-violeta.png", 'alt': "current hat"},
        {'src': "gorros/gorro-baseball-azul.png", 'alt': "current hat"},
        {'src': "gorros/gorro-baseball-rojo.png", 'alt': "current hat"},
        {'src': "gorros/gorro-baseball-rosa.png", 'alt': "current hat"},
        {'src': "gorros/gorro-navideno.png", 'alt': "current hat"},
        {'src': "gorros/cresta-azul.png", 'alt': "current hat"},
        {'src': "gorros/cresta-roja.png", 'alt': "current hat"},
        {'src': "gorros/cresta-verde.png", 'alt': "current hat"},
        {'src': "gorros/sombrero-corsario.png", 'alt': "current hat"},
        {'src': "gorros/sombrero-pirata.png", 'alt': "current hat"},
        {'src': "gorros/sombrero-cowboy.png", 'alt': "current hat"},
        {'src': "gorros/sombrero-fedora.png", 'alt': "current hat"},
        {'src': "gorros/top-hat-negro.png", 'alt': "current hat"},
        {'src': "gorros/top-hat-rojo.png", 'alt': "current hat"},
        {'src': "gorros/top-hat-violeta.png", 'alt': "current hat"},
        {'src': "gorros/unicuerno-amarillo.png", 'alt': "current hat"},
        {'src': "gorros/unicuerno-azul.png", 'alt': "current hat"},
        {'src': "gorros/unicuerno-blanco.png", 'alt': "current hat"},
        {'src': "gorros/fez.png", 'alt': "current hat"},
        {'src': "gorros/cuernos-marrones.png", 'alt': "current hat"},
        {'src': "gorros/cuernos-rojos.png", 'alt': "current hat"},
        {'src': "gorros/cuernos-negros.png", 'alt': "current hat"},
        {'src': "gorros/cuernos-violetas.png", 'alt': "current hat"},
        {'src': "gorros/gorro-cumple.png", 'alt': "current hat"}
    ],
    'Glasses':[
        {'src': "lentes/potter-marron.png", 'alt': "current glasses"},
        {'src': "lentes/potter-negro.png", 'alt': "current glasses"},
        {'src': "lentes/aviador.png", 'alt': "current glasses"},
        {'src': "lentes/parche.png", 'alt': "current glasses"},
        {'src': "lentes/monoculo.png", 'alt': "current glasses"},
        {'src': "lentes/lentes-sol.png", 'alt': "current glasses"},
        {'src': "lentes/lentes-sol-negros.png", 'alt': "current glasses"}

    ],
    'Other':[
        {'src': "otros/chiva-marron.png", 'alt': "current misc"},
        {'src': "otros/chiva-negra.png", 'alt': "current misc"},
        {'src': "otros/mostacho-marron.png", 'alt': "current misc"},
        {'src': "otros/mostacho-negro.png", 'alt': "current misc"},
        {'src': "otros/nariz-payaso.png", 'alt': "current misc"},
        {'src': "otros/monio-azul.png", 'alt': "current misc"},
        {'src': "otros/monio-rojo.png", 'alt': "current misc"},
        {'src': "otros/monio-rosa.png", 'alt': "current misc"},
        {'src': "otros/lips-red.png", 'alt': "current misc"},
        {'src': "otros/lips-black.png", 'alt': "current misc"}
    ]
}
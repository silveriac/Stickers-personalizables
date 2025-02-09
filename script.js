window.onload = (evt) =>{
    //document.getElementById("Character").addEventListener("click", () =>{selectImage()});
    populate("CharacterModal");
    populate("HatsModal");
    populate("GlassesModal");
    populate("OthersModal");
    document.getElementById("Character").addEventListener("click", ()=>{changeModal("CharacterModal")});
    document.getElementById("Hat").addEventListener("click", ()=>{changeModal("HatsModal")});
    document.getElementById("Glasses").addEventListener("click", ()=>{changeModal("GlassesModal")});
    document.getElementById("Other").addEventListener("click", ()=>{changeModal("OthersModal")});
    console.log(Math.floor(Math.random() *  (galleryContent['Character'].length - 1)));
    console.log(galleryContent['Character'][ Math.floor(Math.random() *  (galleryContent['Character'].length - 1))]["src"]);
    generateRandom("Character");
    generateRandom("Hat");
    generateRandom("Glasses");
    generateRandom("Other");
    //Math.floor(Math.random() * max)

}

const changeModal = (modal) => {
    document.getElementById("CharacterModal").classList.remove("view");
    document.getElementById("HatsModal").classList.remove("view");
    document.getElementById("GlassesModal").classList.remove("view");
    document.getElementById("OthersModal").classList.remove("view");
    if(modal) document.getElementById(modal).classList.add("view");
    console.log("hoi");
    
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
        });
        galleryContent[cat].forEach((image, index) => {
            let currentImage = document.createElement("img");
            currentImage.src = `./assets/${image.src}`;
            currentImage.alt = `image ${index}`;
            currentImage.addEventListener("click", ()=>{
                if(cat === "Character") document.querySelector("#Name p").innerHTML=`${image.name}`;
                document.getElementById(`main${category}`).src = `./assets/${image.src}`;
                changePreview(category, `./assets/${image.src}`);
                changeModal();
            });
            document.getElementById(categoryModal).appendChild(currentImage);
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
            changeModal();
    };
}

const changePreview = (category, link) =>{
    console.log("hola");
    document.querySelector(`#${category} img`).src = link;

}

const generateRandom = (category) => {
    let source = `./assets/${galleryContent[category][ Math.floor(Math.random() *  (galleryContent[category].length - 1))]["src"]}`;
    document.getElementById(`main${category}`).src = source;
    changePreview(category, source);

}



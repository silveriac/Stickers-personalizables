window.onload = (evt) =>{
    //document.getElementById("Character").addEventListener("click", () =>{selectImage()});
    populate("CharacterModal");
    populate("HatsModal");
    populate("GlassesModal");
    populate("OthersModal");
    populate("Others2Modal");
    document.getElementById("Character").addEventListener("click", ()=>{changeModal("CharacterModal")});
    document.getElementById("Hat").addEventListener("click", ()=>{changeModal("HatsModal")});
    document.getElementById("Glasses").addEventListener("click", ()=>{changeModal("GlassesModal")});
    document.getElementById("Other").addEventListener("click", ()=>{changeModal("OthersModal")});
    document.getElementById("Other2").addEventListener("click", ()=>{changeModal("Others2Modal")});
    document.getElementById("random").addEventListener("click", ()=>{generateRandom()});
    generateRandom();
}
const generateRandom = () =>{
    randomize("Character");
    if(Math.floor(Math.random() * 10) > 2) randomize("Hat");
    if(Math.floor(Math.random() * 10) > 3) randomize("Glasses");
    if(Math.floor(Math.random() * 10) > 5) randomize("Other");
    if(Math.floor(Math.random() * 10) > 5) {randomize("Other2"); console.log("prueba1");
    };
}
const randomize = (category) => {
    let number = Math.floor(Math.random() *  (galleryContent[category].length - 1))
    let source = `./assets/${galleryContent[category][number]["src"]}`;
    let image = document.getElementById(`main${category}`);
    let name = galleryContent[category][number]['name'];
    if(category === "Character") changeName(name);
    image.src = source;
    image.setAttribute("class", name);
    changePreview(category, source);
}
const changeModal = (modal) => {
    document.getElementById("CharacterModal").classList.remove("view");
    document.getElementById("HatsModal").classList.remove("view");
    document.getElementById("GlassesModal").classList.remove("view");
    document.getElementById("OthersModal").classList.remove("view");
    document.getElementById("Others2Modal").classList.remove("view");
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
            changeModal();
        });
        galleryContent[cat].forEach((image, index) => {
            let currentImage = document.createElement("img");
            currentImage.src = `./assets/${image.src}`;
            currentImage.alt = `image ${index}`;
            currentImage.addEventListener("click", ()=>{
                if(cat === "Character") changeName(image.name);
                let bigImage = document.getElementById(`main${category}`)
                bigImage.src = `./assets/${image.src}`;
                bigImage.setAttribute("class", image.name)
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
        case "Others2Modal":
            category = "Other2"
            fill('Other2');
            break;
        default:
            changeModal();
    };
}

const changePreview = (category, link) =>{
    document.querySelector(`#${category} img`).src = link;
}

const changeName = (name) =>{
    document.getElementById("Design").setAttribute("class", name)
    document.querySelector("#Name p").innerHTML=`${name}`
}



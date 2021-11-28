let input = document.querySelector("#fileselect")
let btn = document.querySelector(".upload")
let dragArea = document.querySelector(".dragArea")
let images = document.querySelector(".images")
input.addEventListener("change", (e) => {
    let files = Array.from((e.target.files));
    files.forEach(file => {
        console.log(file);
        addImage(file);
        console.log(input.files[0].size / 1024 + "Kb" + " " + input.files[0].type);
    });
})

function addImage(file) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("loadend", () => {
        let col12 = document.createElement("div")
        let col4 = document.createElement("div")
        let col4_2 = document.createElement("div")
        col12.style.width="89%"
        col4_2.className = "col-lg-3"
        col4.className = "col-lg-3"
        col12.className = ("col-lg-12  d-flex justify-content-between")
        let img = document.createElement("img")
        img.className="col-lg-3"
        img.src = fileReader.result
        col12.appendChild(img)
        col4.append(input.files[0].size + " " + "kb")
        col4_2.append(input.files[0].type)
        col12.appendChild(col4)
        col12.append(col4_2)
        images.append(col12)
        img.style.width = "80px";
        img.style.height = "60px";
        img.style.marginTop = "15px";
        let icon=document.createElement("i")
        icon.className="far fa-trash-alt col-lg-3";
        icon.style.cursor="pointer"
        icon.style.fontSize="35px"
        col12.append(icon)
 icon.onclick=function(){
     col12.remove();
 }
    })

}
btn.onclick = function () {
    input.click();
}
dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
})
dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files)
    files.forEach(file => {
        addImage(file);
        // console.log(file);

    })
})
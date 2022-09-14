function inicio() {
    const para = document.createElement("p");
    const node = document.createTextNode("This is a paragraph.");
    
    para.appendChild(node);
    document.getElementById("box").appendChild(para);
}

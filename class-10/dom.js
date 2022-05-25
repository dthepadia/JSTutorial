//element creation

function addNewElement() {
    let div1 = document.createElement("div");
    //<div></div>
    div1.innerText = "JS created element";
    div1.addEventListener('click',()=>{alert("triggered")})
    //<div>JS created element</div>
    document.body.appendChild(div1);
    let div2 = document.createElement("input");
    //<div></div>
    //div2.innerText = "Div2";
    //<div>JS created element</div>
    document.body.appendChild(div2);
    // //<body>
    // <div1></div1>
    // <div2>
    // </body>
}
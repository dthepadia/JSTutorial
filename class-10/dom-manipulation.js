///tagName id class
//getElementByTagName getElementById getElementByClass

function swapUser() {
    //Multiple nodes when called by tag name
    
    // let node = document.getElementsByTagName('div')
    // [div#container1, div#container, container1: div#container1, container: div#container]
    let node = document.getElementById('container');
    if(node.innerText === "Admin") {
        node.innerText = "Normal User"
    } else {
        node.innerText = "Admin"
    }
}
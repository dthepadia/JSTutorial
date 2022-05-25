
function parent() {
    console.log("Parent Function");
    event.stopPropagation();
}

function child() {
    console.log("Child Function");
    event.stopPropagation();
}

function bodyFunction() {
    console.log("Body ffunction")
}


function startCapture() {
    const bodyCapture = document.getElementById("body-id")
    bodyCapture.addEventListener('click',function parentCapture() {
        console.log("Parent Capture")
    }, true);
    const parentCapture = document.getElementById('parent-capturing');
    const childCapture = document.getElementById('child-capturing');
    // parentCapture.addEventListener('click',function parentCapture() {
    //     console.log("Parent Capture")
    // }, true);
    childCapture.addEventListener('click', function childCapture() {
        console.log("Child Capture");
    }, true)
    event.stopPropagation();
}
function parentCapture() {
    console.log("Parent Capture")
}
function childCapture() {
    console.log("Child Capture");
}
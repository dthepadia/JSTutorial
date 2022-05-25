//clientHeight clientWidth
function startProgress() {
    const node = document.getElementById('progress');
    
    const id = setInterval(()=> {
     let width = parseInt(node.style.width);//0%
     //width =0
      if(width < 100) {
          node.style.width = width + 10 + "%";
      }
      console.log(node.style.width, "Updated width");
    }, 3000)
    clearInterval(id)
}

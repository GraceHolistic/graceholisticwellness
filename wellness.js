alert('js attached');
document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
  
    var li = document.createElement("li");
    li.innerText = text;
  
    document.getElementById("list").appendChild(li);
  }
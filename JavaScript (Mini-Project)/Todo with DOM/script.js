let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let li = e.target.parentElement;
    li.remove();
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let li = this.parentElement;
//     li.remove();
//   });
// }

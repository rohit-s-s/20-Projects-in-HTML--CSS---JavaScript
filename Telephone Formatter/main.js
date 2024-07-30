const container = document.createElement("div");
document.querySelector(".root").appendChild(container);

const input = document.createElement("input");
input.setAttribute("type", "text");
input.addEventListener("change", (e) => textFormatter(e));
container.appendChild(input);

function textFormatter(e) {
  let prefix = new String();
  let suffix = new String();
  let result = new String();
  const value = e.target.value;
  if (value.length >= 3) {
    prefix = value.slice(0, 3);
    suffix = value.slice(3)
    result = `(${prefix})-`+`${suffix}`
  } 
  input.value = result
}

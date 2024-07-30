function run() {
  const htmlCode = document.getElementById("html-code").value;
  const cssCode = document.getElementById("css-code").value;
  const jsCode = document.getElementById("js-code").value;
  const outPut = document.getElementById("output");

//   outPut.contentWindow.document.write(htmlCode + "<style>" + cssCode + "</style>");
outPut.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>"
outPut.contentWindow.eval(jsCode)

}

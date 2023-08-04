const inputs = [
  { id: "searchTitle", className: "title", checkbox: false },
  { id: "searchAuthor", className: "author", checkbox: false },
  { id: "selectChallenge", className: "challenge", checkbox: false },
  { id: "selectType", className: "type", checkbox: false },
  { id: "checkPrevention", className: "prevention", checkbox: true },
  { id: "checkResilience", className: "resilience", checkbox: true },
  { id: "checkRecovery", className: "recovery", checkbox: true },
  { id: "checkGender", className: "gender", checkbox: true },
  { id: "checkLegal", className: "legal", checkbox: true },
  { id: "checkInstitutional", className: "institutional", checkbox: true },
  { id: "checkManagement", className: "management", checkbox: true },
];

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  for (const inputData of inputs) {
    const param = urlParams.get(inputData.className);
    if (param) {
      const input = document.getElementById(inputData.id);
      if (inputData.checkbox) {
        input.checked = true;
      } else {
        input.value = param;
      }
    }
  }
  filter();
};

function filter() {
  const urlParams = new URLSearchParams();

  let table, tr, td, i;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  let numHidden = 0;
  document.getElementById("empty").style.display = "none";
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "";

    for (k = 0; k < inputs.length; k++) {
      if (tr[i].style.display === "none") continue;

      const inputData = inputs[k];
      const input = document.getElementById(inputData.id);
      let inputText = input.value;

      if (inputData.checkbox) {
        if (!input.checked) {
          continue;
        }
        inputText = "✅";
        urlParams.set(inputData.className, "true");
      } else if (inputText) {
        urlParams.set(inputData.className, inputText);
      }

      const td = tr[i].getElementsByClassName(inputData.className)[0];
      const tdText = td.textContent || td.innerText;
      if (!tdText.toUpperCase().includes(inputText.toUpperCase())) {
        tr[i].style.display = "none";
        numHidden++;
      }
    }
  }

  if (numHidden >= tr.length - 1) {
    document.getElementById("empty").style.display = "";
  }
  window.history.replaceState(null, null, "?" + urlParams.toString());
}

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    filter();
  }
});

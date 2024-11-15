let nom = [];
let email = [];

let btn = document.querySelector("button");

btn.onclick = AjoutPart(nom, email);

function AjoutPart(nom, email) {
  alert()
  nom.push(document.getElementById("nm").value);
  email.push(document.getElementById("em").value);
  for (let i = 0; i < nom.lenght; i++) {
    document.getElementById("p").innerHTML += nom[i] + email[i];
  }
}

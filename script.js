let btnAjouterExper = document.getElementById("btn_Ajouter_Exper");
let zoneTargeted = "";

let zonesData = {
  zoneConference: [],
  zoneReception: [],
  zoneServeur: [],
  zoneSecurite: [],
  zoneArchive: [],
  zonePersonnel: [],
};

document.getElementById("btn_Ajouter_Exper").addEventListener("click", () => {
  document.getElementById("formExper").innerHTML += `
    <div id="form_Exper" class="border-2 p-2 border-gray-400 rounded-lg">

   <div id="countinerExperience">
                      <div class="flex flex-col">
                        <label for="name_Expe">Nom:</label>
                        <input
                          id="nomEx"
                          name="nomExperience"
                          type="text"
                          class="nomExper rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="Nom"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label for="name_Expe">Duree:</label>
                        <input
                          id="roleEx"
                          name="roleExperience"
                          type="text"
                          class=" roleExper rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="Ex: 2 ans"
                        />
                      </div>
                    </div>
                    
                    </div>
                    <div class="w-full h-1 rounded-lg bg-green-500 my-2 " ></div>
    `;
});
// form de validation
let input_picture = document.getElementById("input_photo");
let nom_Employer = document.getElementById("lastname");
let prenom_Employer = document.getElementById("firstname");
let email_Employer = document.getElementById("email");
let telephone_Employer = document.getElementById("telephone");

// Ajouter staff
let ArrayStaff = [];
let idcount = 1;
let countinerExperience = document.getElementById("countinerExperience");
formAjouterStaff = document.forms["formAjouterStaff"];

formAjouterStaff.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = e.target;

  // ---------formValidation-------
  if (!formValidation(formAjouterStaff)) {
    return;
  }

  // -----------------------------

  let nomExp = document.querySelectorAll(".nomExper");
  let roleExp = document.querySelectorAll(".roleExper");
  let arrayExper = [];

  let employee = {
    id: idcount,
    photo: formAjouterStaff.input_photo.value,
    nom: formAjouterStaff.lastname.value,
    prenom: formAjouterStaff.firstname.value,
    poste: formAjouterStaff.poste.value,
    email: formAjouterStaff.email.value,
    telephone: formAjouterStaff.telephone.value,
    exper: arrayExper,
    assignedZones: [],
  };

  // Array experience

  for (let i = 0; i < nomExp.length; i++) {
    arrayExper.push({
      nom: nomExp[i].value,
      role: roleExp[i].value,
    });
  }
  ArrayStaff.push(employee);

  console.log(ArrayStaff);

  localStorage.setItem("staffData", JSON.stringify(ArrayStaff));
  idcount++;
  formAjouterStaff.reset();
  // pour refrech le photo
  document.getElementById("formExper").innerHTML = "";
  cover_photo.style.backgroundImage = "";
  icon_cover.style.display = "block";

  alert("Employe ajoute avec succes!");
  afficherStaff();
});

// form validation

function formValidation(formAjouterStaff) {
  // REGEX
  let regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/;
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regexTel = /^(?:\+212|00212|0)(6|7)\d{8}$/;
  let regexURL =
    /^(https?:\/\/(?:www\.)?|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

  //  INPUTS
  let photo = formAjouterStaff.input_photo;
  let nom = formAjouterStaff.lastname;
  let prenom = formAjouterStaff.firstname;
  let poste = formAjouterStaff.poste;
  let email = formAjouterStaff.email;
  let tel = formAjouterStaff.telephone;

  let validForm = true;

  //  VALIDATION PHOTO
  if (!regexURL.test(photo.value)) {
    photo.style.borderColor = "red";
    validForm = false;
  } else {
    photo.style.borderColor = "green";
  }

  //  VALIDATION NOM
  if (!regexName.test(nom.value)) {
    nom.style.borderColor = "red";
    validForm = false;
  } else {
    nom.style.borderColor = "green";
  }

  //  VALIDATION PRENOM
  if (!regexName.test(prenom.value)) {
    prenom.style.borderColor = "red";
    validForm = false;
  } else {
    prenom.style.borderColor = "green";
  }

  // VALIDATION POSTE
  if (!regexName.test(poste.value)) {
    poste.style.borderColor = "red";
    validForm = false;
  } else {
    poste.style.borderColor = "green";
  }

  //  VALIDATION EMAIL
  if (!regexEmail.test(email.value)) {
    email.style.borderColor = "red";
    validForm = false;
  } else {
    email.style.borderColor = "green";
  }

  // VALIDATION TELEPHONE
  if (!regexTel.test(tel.value)) {
    tel.style.borderColor = "red";
    validForm = false;
  } else {
    tel.style.borderColor = "green";
  }

  // if (!validForm)
  return validForm;
}

// load data from localStorage
let data = localStorage.getItem("staffData");
if (data) {
  ArrayStaff = JSON.parse(data);

  if (ArrayStaff.length > 0) {
    idcount = ArrayStaff[ArrayStaff.length - 1].id + 1;
  } else {
    idcount = 1;
  }
} else {
  idcount = 1;
}
console.log(ArrayStaff);

// save local storage
function saveToLocaleStorage() {}

// photo modal
let input_photo = document.getElementById("input_photo");
let cover_photo = document.getElementById("cover_photo_ajouterStaff");
let icon_cover = document.getElementById("icon_cover_AjouterStaff");
input_photo.addEventListener("input", function () {
  cover_photo.style.backgroundImage = `url(${input_photo.value})`;
  icon_cover.style.display = "none";
});

// -----------ajouter employee dans aside
function afficherStaff() {
  let sidBar = document.getElementById("side-bar");
  let new_Employee = document.querySelector(".new_Employee");
  new_Employee.innerHTML = "";

  ArrayStaff.forEach((employe) => {
    let div = document.createElement("div");
    new_Employee.innerHTML += `
       <div class="emplye flex justify-between bg-slate-200 rounded-md py-2 my-4 px-1 hover:animate-bounce ">
          <div class="flex justify-evenly gap-1">
            <div>
              <img class="w-12 rounded-full" src="${employe.photo}" alt="" />
            </div>
            <div class="flex flex-col px-1">
              <label class="text-sm" for="nom">${employe.nom} ${employe.prenom}</label>
              <label for="poste" class="text-red-600">${employe.poste}</label>
            </div>
          </div>
          <div class="flex items-center">
          <button type="button" class="btnAfficherProfil cursor-pointer" data-id="${employe.id}" command="show-modal" commandfor="dialogProfil">
            <svg
              class="w-9 text-gray-800 dark:text-black hover:text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"
              />
            </svg>
            </button>
          </div>
        </div>`;
    new_Employee.appendChild(div);
  });

  activerProfil();
}

afficherStaff();

let zones = document.querySelectorAll(".zones");
// console.log(zones);
zones.forEach((zone) => {
  // console.log(zone.getAttribute("id"));
  zone.addEventListener("click", (event) => {
    let zoneTargeted = event.target.getAttribute("id");
    console.log(event.target.getAttribute("id"));
    // addTozone(zoneTargeted);
  });
});
// btn add employe les list  data-unique = ${obj.id}
// afficher list
let currentZone = "";
document.getElementById("modalList").close();
let btnZones = document.querySelectorAll(".btnZones");
btnZones.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    currentZone = btn.target.closest(".zones").getAttribute("id");
    document.getElementById("modalList").showModal();
    afficherListEmployes();
  });
});

//-------------------- Afficher profil--------------------
function activerProfil() {
  let buttonsProfil = document.querySelectorAll(".btnAfficherProfil");

  buttonsProfil.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.getAttribute("data-id");
      let employe = ArrayStaff.find((e) => e.id == id);

      let profilPhoto = document.getElementById("profilPhoto");
      if (employe.photo) {
        profilPhoto.style.backgroundImage = `url(${employe.photo})`;
        profilPhoto.style.backgroundSize = "cover";
        profilPhoto.style.backgroundPosition = "center";
        document.getElementById("icon_cover_AfficherPro").style.display =
          "none";
      }
      document.getElementById("profilNom").textContent = employe.nom;
      document.getElementById("profilPrenom").textContent = employe.prenom;
      document.getElementById("profilPoste").textContent = employe.poste;
      document.getElementById("profilEmail").textContent = employe.email;
      document.getElementById("profilTel").textContent = employe.telephone;

      let expDiv = document.getElementById("profilExperience");
      expDiv.innerHTML = "";

      employe.exper.forEach((exp) => {
        expDiv.innerHTML += `
          <div class="flex justify-between p-1 my-1 rounded">
          <div>
          <strong>Nom:</strong>
             <span>${exp.nom}</span> 
          </div>
          <div>
          <strong>Duree:</strong>
             <span>${exp.role}</span> 
          </div>
             
          </div>`;
      });
    });
  });
}

// afficher list Employe
function afficherListEmployes() {
  let container = document.querySelector("#modalList .flex.flex-col");
  if (!container) return;

  container.innerHTML = "";

  ArrayStaff.forEach((emp) => {
    container.innerHTML += `
      <div class="emplye flex justify-between bg-slate-200 rounded-md py-2 my-4 px-1 hover:animate-bounce ">
          <div class="flex justify-evenly gap-1">
            <div>
              <img class="w-12 rounded-full" src="${emp.photo}" alt="" />
            </div>
            <div class="flex flex-col px-1">
              <label class="text-sm" for="nom">${emp.nom} ${emp.prenom}</label>
              <label for="poste" class="text-red-600">${emp.poste}</label>
            </div>
          </div>
          <div class="flex items-center">
          <button type="button" class="btnAjouterToZones cursor-pointer" data-id="${emp.id}" command="show-modal" commandfor="modalList">
            <svg class="w-6 h-6 text-gray-800 dark:text-green-500 hover:text-white hover:bg-green-500 rounded" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
</svg>
            </button>
          </div>
        </div>
    `;
  });

  let listBtns = document.querySelectorAll(".btnAjouterToZones");

  listBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.getAttribute("data-id");
      let emp = ArrayStaff.find((e) => e.id == id);

      if (!allowZone(emp.poste, currentZone)) {
        alert(" Ce poste n’est pas autorise");
        return;
      }
      zonesData[currentZone].push(emp);

      let index = ArrayStaff.findIndex((e) => e.id == emp.id);
      if (index !== -1) ArrayStaff.splice(index, 1);

      // refresh sidebar
      afficherStaff();

      let zoneDiv = document.querySelector(`#${currentZone} .empList`);

      zoneDiv.innerHTML += `
      <div class="flex justify-between bg-slate-200 rounded-md py-2 px-1 w-full cursor-pointer">
        <div class="flex justify-evenly gap-1">
          <div>
            <img class="w-12 rounded-full" src="${emp.photo}" alt="" />
          </div>
          <div class="flex flex-col px-1">
            <label>${emp.nom} ${emp.prenom}</label>
            <label class="text-red-600">${emp.poste}</label>
          </div>
        </div>
         <button class="remove-from-zone text-red-600 p-0 font-bold px-1 hover:bg-red-500 rounded cursor-pointer" data-id="${emp.id}">
            <svg class="w-6 h-6 text-gray-800 hover:text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

  </button>
      </div>
    `;
      document.getElementById("modalList").close();

      // remplir popup modal data
      document.getElementById(
        "listPhoto"
      ).style.backgroundImage = `url(${emp.photo})`;
      document.getElementById("listNom").textContent = emp.nom;
      document.getElementById("listPrenom").textContent = emp.prenom;
      document.getElementById("listPoste").textContent = emp.poste;
      document.getElementById("listEmail").textContent = emp.email;
      document.getElementById("listTel").textContent = emp.telephone;

      let expDiv = document.getElementById("listExperience");
      expDiv.innerHTML = "";

      emp.exper.forEach((ex) => {
        expDiv.innerHTML += `
          <div class="border p-1 my-1 rounded">
            <strong>Role:</strong> ${ex.nom} <br>
            <strong>duree:</strong> ${ex.role}
          </div>
        `;
      });
    });
  });
}

function allowZone(employeePoste, zoneId) {
  const rules = {
    zoneConference: [
      "Manager",
      "Reception",
      "Techniciens IT",
      "Agents de sécurité",
      "Nettoyage",
      "Autres rôles",
    ],
    zoneReception: ["Reception", "Manager"],
    zoneServeur: ["Techniciens IT", "Manager"],
    zoneSecurite: ["Agents de sécurité", "Manager"],
    zoneArchive: ["Manager", "Autres rôles"],

    zonePersonnel: [
      "Manager",
      "Reception",
      "Techniciens IT",
      "Agents de sécurité",
      "Nettoyage",
      "Autres rôles",
    ],
  };

  return rules[zoneId].includes(employeePoste);
}

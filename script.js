let btnAjouterExper = document.getElementById("btn_Ajouter_Exper");

document.getElementById("btn_Ajouter_Exper").addEventListener("click", () => {
  document.getElementById("formExper").innerHTML += `
    <div id="form_Exper" class="border-2 p-2 border-gray-400 rounded-lg">

   <div id="countinerExperience">
                      <div class="flex flex-col">
                        <label for="name_Expe">Nom</label>
                        <input
                          id="nomEx"
                          name="nomExperience"
                          type="text"
                          class="nomExper rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="Nom"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label for="name_Expe">Role</label>
                        <input
                          id="roleEx"
                          name="roleExperience"
                          type="text"
                          class=" roleExper rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="role"
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

function formValidation(e) {
  let regexPhoto = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?$/;
  e.preventDefault();
  if (input_picture.value == "") {
    input_picture.style.borderColor = "red";
    return;
  }
}

// Ajouter staff
let ArrayStaff = [];
let idcount = 1;
let countinerExperience = document.getElementById("countinerExperience");
formAjouterStaff = document.forms["formAjouterStaff"];

formAjouterStaff.addEventListener("submit", (e) => {
  e.preventDefault();

  let nomExp = document.querySelectorAll(".nomExper");
  let roleExp = document.querySelectorAll(".roleExper");
  let arrayExper = [];

  let form = e.target;

  let employee = {
    id: idcount,
    photo: formAjouterStaff.input_photo.value,
    nom: formAjouterStaff.lastname.value,
    prenom: formAjouterStaff.firstname.value,
    email: formAjouterStaff.email.value,
    telephone: formAjouterStaff.telephone.value,
    exper: arrayExper,
  };
  // Array experience

  for (let i = 0; i < nomExp.length; i++) {
    arrayExper.push({
      nom: nomExp[i].value,
      role: roleExp[i].value,
    });
  }
  ArrayStaff.push(employee);
  idcount++;
  console.log(ArrayStaff);
  localStorage.setItem("staffData", JSON.stringify(ArrayStaff));
  formAjouterStaff.reset();
  // pour refrech le photo
  document.getElementById("formExper").innerHTML = "";
  cover_photo.style.backgroundImage = "";
  icon_cover.style.display = "block";

  alert("Employé ajouté avec succès!");
  location.reload();
});
// load data from localStorage
let data = localStorage.getItem("staffData");
if (data) {
  ArrayStaff = JSON.parse(data);
  console.log(ArrayStaff);
}

// save local storage
function saveToLocaleStorage() {}

// photo modal
let input_photo = document.getElementById("input_photo");
let cover_photo = document.getElementById("cover_photo");
let icon_cover = document.getElementById("icon_cover");
input_photo.addEventListener("input", function () {
  cover_photo.style.backgroundImage = `url(${input_photo.value})`;
  icon_cover.style.display = "none";
});

// -----------ajouter employee dans aside
function afficherStaff() {
  let sidBar = document.getElementById("side-bar");
  let new_Employee = document.querySelectorAll(".new_Employee");
  new_Employee = document.createElement("div");
  sidBar.appendChild(new_Employee);
  new_Employee.innerHTML= "";

  ArrayStaff.forEach((employe) => {
    let div = document.createElement("div");
    div.innerHTML = `
       <div class=" flex justify-between bg-slate-200 rounded-md py-2 my-2 px-1">
          <div class="flex justify-evenly gap-1">
            <div>
              <img class="w-12 rounded-full" src="${employe.photo}" alt="" />
            </div>
            <div class="flex flex-col px-1">
              <label for="nom">${employe.nom}</label>
              <label for="poste" class="text-red-600">${employe.prenom}</label>
            </div>
          </div>
          <div class="flex items-center">
            <svg
              class="w-9 text-gray-800 dark:text-black"
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
          </div>
        </div>`;
    new_Employee.appendChild(div);
  });
  
}
  
afficherStaff();
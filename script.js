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

// console.log(formAjouterStaff);

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

let btnAjouterExper = document.getElementById('btn_Ajouter_Exper');




document.getElementById('btn_Ajouter_Exper').addEventListener("click", ()=>{
    document.getElementById("formExper").innerHTML +=`
    <div class="border-2 p-2 border-gray-400 rounded-lg">

   <div>
                      <div class="flex flex-col">
                        <label for="name_Expe">Nom</label>
                        <input
                          id="nomExper"
                          type="text"
                          class="rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="Nom"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label for="name_Expe">Role</label>
                        <input
                          id="roleExper"
                          type="text"
                          class="rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="role"
                        />
                      </div>
                    </div>
                    
                    </div>
                    <div class="w-full h-1 rounded-lg bg-green-500 my-2 " ></div>
    `;
})
// form de validation
function formValidation(){

}

// Ajouter staff
let ArrayStaff = [];
formAjouterStaff = document.forms["formAjouterStaff"];
formAjouterStaff.addEventListener("submit", function (e) {
   
    e.preventDefault()
    console.log(11);
    let employee = {
        photo : formAjouterStaff.input_photo.value,
        nom : formAjouterStaff.lastname.value,
        prenom : formAjouterStaff.firstname.value,
        email : formAjouterStaff.email.value,
        telephone : formAjouterStaff.telephone.value,
        exper : [
            {
                nom : formAjouterStaff.nomExper.value,
                role : formAjouterStaff.roleExper.value,
            }
        ]
    }
      console.log(employee);
    ArrayStaff.push(employee);
    console.log(ArrayStaff);
    formAjouterStaff.reset();
    
});


// photo modal
let input_photo = document.getElementById('input_photo');
let cover_photo = document.getElementById('cover_photo');
let icon_cover = document.getElementById('icon_cover');
input_photo.addEventListener("input",function(){
   cover_photo.style.backgroundImage = `url(${input_photo.value})`;
   icon_cover.style.display = 'none';
})


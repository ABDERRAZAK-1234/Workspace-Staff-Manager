let btnAjouterExper = document.getElementById('btn_Ajouter_Exper');




document.getElementById('btn_Ajouter_Exper').addEventListener("click", ()=>{
    document.getElementById("formExper").innerHTML +=`
   <div>
                      <div class="flex flex-col">
                        <label for="name_Expe">Nom</label>
                        <input
                          type="text"
                          class="rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="Nom"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label for="name_Expe">Role</label>
                        <input
                          type="text"
                          class="rounded-lg py-2 px-1 bg-gray-700/25"
                          placeholder="role"
                        />
                      </div>
                    </div>
                    <div class="w-full h-1 rounded-lg bg-slate-400 my-2 " ></div>
    `;
})

// Ajouter staff

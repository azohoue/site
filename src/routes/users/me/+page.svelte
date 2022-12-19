<section id="user-home" class="w-full h-full pt-10 px-4 xl:px-0 flex justify-center">
    <div class="w-full h-fit xl:w-[80vw] sm:grid sm:grid-cols-[280px,1fr] xl:grid-cols-[280px,1fr,280px]">
        <div class="filter-container flex-col items-start hidden sm:flex">
            <div id="filter-header" class="flex gap-x-1 justify-center items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                <h3 class="uppercase text-[#A4A4A4] text-sm font-semibold">Filtre de recherche</h3>
            </div>
            <div class="flex flex-col gap-4">
                <div id="location-filter" class="flex flex-col gap-2">
                    <h3 class="text-md font-semibold">Localisation</h3>
                    <div id="location-values" class="flex flex-col gap-y-4">
                        <div class="flex gap-x-1">
                            <input id="50.000F - 100.000F" type="checkbox" class="checkbox" />
                            <label for="50.000F - 100.000F" class=" text-gray-400 select-none">Bénin</label>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Burkina Faso</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Côte d'ivoire</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Mali</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Sénégal</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Togo</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Non spécifié</span>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div id="location-filter" class="flex flex-col gap-2">
                    <h3 class="text-md font-semibold">Salaire</h3>
                    <div id="location-values" class="flex flex-col gap-y-4">
                        <div class="flex gap-x-1">
                            <input id="50.000F - 100.000F" type="checkbox" class="checkbox" />
                            <label for="50.000F - 100.000F" class=" text-gray-400 select-none">50.000F - 100.000F</label>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">100.000F - 200.000F</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">200.000F - 500.000F</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">500.000F - 900.000F</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Plus</span>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div id="location-filter" class="flex flex-col gap-2">
                    <h3 class="text-md font-semibold">Type de contrat</h3>
                    <div id="location-values" class="flex flex-col gap-y-4">
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">CDD</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">CDI</span>
                        </div>
                        <div class="flex gap-x-1">
                            <input type="checkbox" class="checkbox" />
                            <span class=" text-gray-400 select-none">Contrat d'apprentissage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offers-list flex flex-col gap-y-4 pb-10">
            <div id="offers-list-header" class="flex justify-between">
                <h3 class="text-md font-semibold">Liste des offres</h3>
                <div class="text-sm flex gap-x-1 w-fit items-center">
                    <span>Trier par</span> 
                    <select class="p-0 outline-none">
                        <option>Plus récent</option>
                        <option>Plus vus</option>
                        <option>Salaire croissant</option>
                        <option>Salaire décroissant</option>
                      </select>
                </div>
            </div>
            <div id="list" class="w-full flex flex-col gap-y-4">
                {#each Array(20) as _}
                <div class="bg-white w-full h-[184px] border-[1px] rounded-md shadow-sm p-4 flex flex-col justify-center gap-2">
                    <div class="flex justify-between">
                        <h6 class="text-base font-semibold">azohoue</h6>
                        <span>Il y a 3 mois</span>
                    </div>
                    <h3 class="font-semibold text-[20px]">Designer UI/UX</h3>
                    <div class="job-details flex gap-4">
                        <div class="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                              </svg>
                              <span>Sénégal</span>
                        </div>
                        <div class="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                              </svg>
                              <span>CDD</span>
                        </div>
                        <div class="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                          </svg>
                          <span>CDD</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-[#EE786B]">
                        <h3 class="cursor-pointer">Voir plus > </h3>
                        <button class="border-[1px] font-semibold rounded-md px-[16px] py-[7.2px] border-[#EE786B] text-[#EE786B] normal-case">Postuler</button>
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="hidden xl:flex"></div>
    </div>
</section>

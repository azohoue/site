<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    const jobs = data.jobs.jobs

</script>
<section id="acceuil" class="h-full w-full flex flex-col items-center py-10 px-4 sm:px-0 overflow-x-hidden overflow-y-auto">
    <div class="w-full sm:w-[60vw] flex flex-col gap-y-5">
        <div class="h-10 border-b-2 flex justify-between items-center">
            <h2 class="sm:text-xl font-semibold">Vos offres d'emploi</h2>
            <button class="flex items-center gap-x-1 text-sm dropdown dropdown-bottom cursor-pointer indicator">
                <!-- <span class="indicator-item badge indicator-start">0</span>  -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                    <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
                  </svg>
                <label>Filtrer vos offres</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Toutes</a></li>
                    <li><a>En ligne</a></li>
                    <li><a>Fermée</a></li>
                    <li><a>Refusée</a></li>
                    <li><a>En attente</a></li>
                  </ul>                
            </button>
        </div>
        <!--  -->
        <div id="offers-list" class="flex flex-col gap-y-5">
            {#each jobs as job}
                 <div class="offer h-32 w-full bg-white shadow-sm rounded-md border-[1px] border-[#A4A4A480] grid grid-rows-[48px,1fr] p-2">
                     <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-[20px]">{job.name}</h3>
                        <div class="flex gap-x-2 font-semibold text-[#A4A4A4]">
                            <div class="flex gap-x-1 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                  </svg>
                                  <span>{job.views.length}</span>
                            </div>
                            <div class="flex gap-x-1 text-sm items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                  </svg>
                                  
                                <span class=" text-sm">{job.location}</span>
                            </div>
                        </div>
                     </div>
                     <div class="flex justify-between items-center">
                        <div class="flex flex-col items-stretch">
                            <div class="flex gap-x-2">
                                <div class="flex gap-x-1 text-sm items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                      </svg>                                      
                                    <span>{job.salary}</span>
                                </div>
                                <div class="flex gap-x-1 text-sm items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                      </svg>                                      
                                    <span>{job.contract}</span>
                                </div>
                            </div>
                            <div>
                                {#if job.status == "En ligne"}
                                <p class="badge rounded-sm online">En ligne</p>
                                {:else if job.status == "Fermée"}
                                    <p class="badge rounded-sm offline">Fermée</p>
                                {:else if job.status == "Refusée"}
                                    <p class="badge rounded-sm reject">Refusée</p>
                                {:else}
                                    <p class="badge rounded-sm pending">En attente</p>
                                {/if}
                            </div>
                        </div>
                        <!-- bouton modifier -->
                        <div>
                            <button class="normal-case px-[12px] py-2 border-[1px] rounded-md text-red-400 hover:text-white hover:bg-red-400 border-[#F87171] transition-all">Modifier</button>
                        </div>
                     </div>
                 </div>
            {:else}
                 <p class="w-full italic font-semibold">Aucune publication pour le moment</p>
            {/each}

        </div>
 
          <div class="btn-group border-none">
            <button class="btn btn-sm bg-[#1F2937] border-none">1</button>
            <button class="btn btn-sm bg-white text-black border-none">2</button>
            <!-- <button class="btn btn-sm bg-white text-black border-none">3</button> -->
            <!-- <button class="btn btn-sm bg-white text-black border-none">4</button> -->
          </div>

    </div>
</section>

<style>
    .online{
        background-color: #27ae60;
        border: #27ae60;
    }
    .reject{
        background-color: #e74c3c;
        border: #e74c3c;
    }
    .pending{
        background-color: #f9ca24;
        border: #f9ca24;
    }
    .offline{
        background-color: #95a5a6;
        border: #95a5a6;
    }
</style>
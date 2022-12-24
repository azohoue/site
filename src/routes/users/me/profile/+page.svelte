<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<div id="profile" class="py-10 px-4 sm:px-0 flex flex-col items-center gap-y-4 h-fit overflow-auto">
    <div id="user-profile" class="min-h-[360px] w-full sm:w-[640px] flex flex-col gap-5">
        <div id="user-profile-header">
            <h3 class="text-md font-semibold text-red-400">Informations personnelles</h3>
            <p class="text-sm text-[#8A8FAC]">Veuillez saisir vos informations personnelles pour nous permettre de vous joindre.</p>
        </div>
        <form id="user-profile-content" class="h-full w-full bg-white rounded-md border-[1px] border-[#A4A4A480] shadow-sm grid grid-rows-[1fr,72px]">
            <div class="flex flex-col justify-center">
                <div class="flex flex-col sm:flex-row  gap-x-4 px-4">
                    <!-- Nom de famille form -->
                    <div class="form-control w-full ">
                     <label class="label">
                       <span class="label-text">Nom de famille</span>
                     </label>
                     <input type="text" placeholder="Ex: Djossou" class="input input-bordered w-full" />
                     <label class="label">
                       <!-- <span class="label-text-alt">Alt label</span> -->
                     </label>
                   </div>
                   <!-- Prénoms form -->
                   <div class="form-control w-full">
                     <label class="label">
                       <span class="label-text">Prénoms</span>
                     </label>
                     <input type="text" placeholder="Ex: Paul" class="input input-bordered w-full" />
                     <label class="label">
                       <!-- <span class="label-text-alt">Alt label</span> -->
                     </label>
                   </div>
             </div>
             <div class="w-full px-4">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Adresse email</span>
                  </label>
                  <input type="text" placeholder="Ex: paul.djossou@azohoue.com" class="input input-bordered w-full" />
                  <label class="label">
                    <!-- <span class="label-text-alt">Alt label</span> -->
                  </label>
                </div>
             </div>
             <div class="w-full px-4">
                <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Photo de profile (jpg, png)</span>
                </label>
                <input type="file" class="file-input  w-full file-input-bordered" />
                <label class="label">
                    <!-- <span class="label-text-alt">Alt label</span> -->
                </label>
                </div>
            </div>
            <!--  -->
            </div>
            <div id="form-submit" class="flex justify-end px-4 items-center gap-x-4 border-t-[1px]">
                <!--  -->
                <button class="text-gray-500" type="reset">Annuler</button>
                <button class=" px-3 py-2 border-[1px] border-[#F87171] rounded-md text-red-400 hover:bg-red-400 hover:text-white transition-all  normal-case">Modifier</button>
            </div>
        </form>
    </div>
<!--  sm:w-[60vw] en bas de ca-->
    <div id="password-setting" class="min-h-[360px] w-full sm:w-[640px] flex flex-col gap-5">
        <div id="user-profile-header">
            <h3 class="text-md font-semibold text-red-400">Sécurité du compte</h3>
            <p class="text-sm text-[#8A8FAC]">Modifier votre mot de passe en entrant les informations correspondantes.</p>
        </div>
        <!--  -->
        <form id="user-profile-content" class="h-full w-full bg-white rounded-md border-[1px] border-[#A4A4A480] shadow-sm grid grid-rows-[1fr,72px]">
            <div class="flex flex-col justify-center">
                <div class="w-full px-4">
                    <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Ancien mot de passe</span>
                    </label>
                    <input type="password" placeholder="********" class="input input-bordered w-full" />
                    <label class="label">
                        <!-- <span class="label-text-alt">Alt label</span> -->
                    </label>
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:gap-4 px-4">
                        <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Nouveau mot de passe</span>
                        </label>
                        <input type="password" placeholder="********" class="input input-bordered w-full" />
                        <label class="label">
                            <!-- <span class="label-text-alt">Alt label</span> -->
                        </label>
                        </div>
                        <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Confirmation du mot de passe</span>
                        </label>
                        <input type="password" placeholder="********" class="input input-bordered w-full" />
                        <label class="label">
                            <!-- <span class="label-text-alt">Alt label</span> -->
                        </label>
                        </div>
                </div>
            </div>
            <div id="form-submit" class="flex justify-end px-4 items-center gap-x-4 border-t-[1px]">
                <!--  -->
                <button>Annuler</button>
                <button class="px-3 py-2 border-[1px] border-[#F87171] rounded-md text-red-400 hover:bg-red-400 hover:text-white transition-all  normal-case">Changer le mot de passe</button>
            </div>
        </form>
    </div>
</div>
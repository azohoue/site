<script lang="ts">
    import {marked} from "marked"
	import sanitizeHTML from "sanitize-html"

    let preview:HTMLDivElement;

    let emploi:any ={
        description: ""
    }

    const renderHTML = ()=>{      
		preview.innerHTML = sanitizeHTML(marked(emploi.description), {
			allowedTags: ["h1", "h2", "h3", "h4", "h5",
			"h6", "p", "a", "ul", "li", "ol,", "b",
			"hr", "pre","u","blockquote",
			"i", "em", "strong"
		]
		})
	}

</script>
<section id="creator" class="w-full h-full flex justify-center py-10 px-4 sm:px-0">
    <div class="w-full sm:w-[80vw] lg:w-[60vw] h-fit mb-10">
        <div id="offer-header" class="mb-5 border-b-2">
            <h3 class="text-[20px] font-semibold h-10">Créer une offre d'emploi</h3>
        </div>
        <div id="offer-details" class="flex flex-col gap-4">
            <div id="offer-name" class="flex flex-col gap-1">
                <h3 class="text-md font-semibold">Nom du poste</h3>
                <span class="text-sm text-[#8A8FAC]">Veuillez saisir vos informations sur votre entreprise.</span>
                <input type="text" class="input input-bordered w-full" placeholder="Ex: Designer UI/UX">
            </div>
            <!--  -->
            <div id="location-salary" class="flex flex-col sm:flex-row gap-5">
                <div class="form-control w-full gap-1">
                    <h3 class="text-md font-semibold">Localisation</h3>
                    <input type="text" placeholder="Ex: Djossou" class="input input-bordered w-full" />
                  </div>
                  <div class="form-control w-full gap-1">
                    <h3 class="text-md font-semibold">Salaire</h3>
                    <input type="text" placeholder="Ex: Paul" class="input input-bordered w-full" />
                  </div>
            </div>
            <!--  -->
            <div id="offer-contrat" class="flex flex-col gap-1">
                <h3 class="text-md font-semibold">Type de contrat</h3>
                <!-- <span class="text-sm text-[#8A8FAC]">Veuillez saisir vos informations sur votre entreprise.</span> -->
                <input type="text" class="input input-bordered w-full" placeholder="Ex: Designer UI/UX">
            </div>
            <!--  -->
            <div id="offer-description" class="flex flex-col gap-1 ">
                <h3 class="text-md font-semibold">Description du poste</h3>
                <span class="text-sm text-[#8A8FAC]">Donner plus de détails sur le poste dont vous souhaitez faire l'annonce.</span>
                <div class="border-[1px] w-full h-[280px] rounded-md bg-white grid grid-rows-[48px,1fr] p-1">

                    <div class="border-b-[1px] flex gap-2 items-center justify-center sm:justify-start">
                        <div class="h-10 w-10 flex justify-center items-center" on:click={()=>{
                            emploi.description += "* "
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
                            </svg>
                        </div>
                        <div class="h-10 w-10 flex justify-center items-center cursor-pointer" on:click={()=>{
                            emploi.description += "** **"
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
                            </svg>
                        </div>
                        <!--  -->
                        <div class="h-10 w-10 flex justify-center items-center cursor-pointer" on:click={()=>{
                            emploi.description += "_ _"
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
                            </svg>
                        </div>
                        <div class="h-10 w-10 flex justify-center items-center cursor-pointer" on:click={()=>{
                            emploi.description += "[]()"
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
                            </svg>
                        </div>
                        <div class="h-10 w-10 flex justify-center items-center cursor-pointer" on:click={()=>{
                            emploi.description += "# "
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z" />
                            </svg>
                        </div>
                        <div class="h-10 w-10 flex justify-center items-center cursor-pointer" on:click={()=>{
                            emploi.description += "## "
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24" >
                                <path fill="currentColor" d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z" />
                            </svg>
                        </div>
                        <div class="h-10 w-10 flex justify-center items-center cursor-pointer" on:click={()=>{
                            emploi.description += "### "
                        }}>
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z" />
                            </svg>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <textarea bind:value={emploi.description} on:input={renderHTML} class="w-full h-full p-2 resize-none outline-none" placeholder="Ex: Nous somme à la recherche d'un designer avec au moins 2 années d'expérience..."></textarea>
                    </div>
                </div>
                <!-- <input type="text" class="input input-bordered w-full h-[280px]" placeholder="Ex: Designer UI/UX"> -->
                <div id="preview" bind:this={preview} class="min-h-0 bg-white border-[1px] px-4">

                </div>
            </div>
            <div class="h-[60px] w-full mb-10 flex items-center justify-end">
                <button class="btn normal-case">Soumettre l'offre</button>
            </div>
        </div>
    </div>
</section>
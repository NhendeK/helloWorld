import { arushaRegion} from "../Modules/Arusha.js";
import { darEsSalaamRegion } from "../Modules/dar.js";
import { geitaRegion } from "../Modules/geita.js";
import { dodomaRegion } from "../Modules/Dodoma.js";
import { iringaRegion } from "../Modules/Iringa.js";
import { kageraRegion } from "../Modules/Kagera.js";
import {kataviRegion} from "../Modules/Katavi.js";
import { kigomaRegion } from "../Modules/Kigoma.js";
import { kilimanjaroRegion } from "../Modules/Kilimanjaro.js";
import { lindiRegion } from "../Modules/Lindi.js";
import { manyaraRegion } from "../Modules/Manyara.js";
import { maraRegion } from "../Modules/Mara.js";
import { mbeyaRegion } from "../Modules/Mbeya.js";
import { morogoroRegion } from "../Modules/Morogoro.js";
import {mtwaraRegion} from "../Modules/Mtwara.js";
import { mwanzaRegion } from "../Modules/Mwanza.js";
import { njombeRegion } from "../Modules/Njombe.js";
import { pwaniRegion } from "../Modules/Pwani.js";
import { rukwaRegion } from "../Modules/Rukwa.js";
import { ruvumaRegion } from "../Modules/Ruvuma.js";
import { singidaRegion } from "../Modules/Singida.js";
import { shinyangaRegion } from "../Modules/Shinyanga.js";
import { simiyuRegion } from "../Modules/Simiyu.js";
import { songweRegion } from "../Modules/Songwe.js";
import { taboraRegion } from "../Modules/Tabora.js";
import { tangaRegion } from "../Modules/Tanga.js";
import { regions } from "../Modules/regions.js";

updateRegions();

const regionDrop=document.getElementById("region");
regionDrop.addEventListener("change", updateDistricts);

const districtDrop=document.getElementById("district");
districtDrop.addEventListener("change", updateWards);

const wardDrop=document.getElementById("ward");
wardDrop.addEventListener("change",updateVillages);

const villageDrop=document.getElementById("village");
villageDrop.addEventListener("change", updateStreets);

function search() {

    function regionData(region) {
        const regionCapitalized = region.toUpperCase();

        if (regionCapitalized === "DAR ES SALAAM") {
            return darEsSalaamRegion;
        } 
        else {
            const regionArray = regionCapitalized.toLowerCase();
            return eval(regionArray + "Region");
        }

    }

    function districtOf(region) {
        const theRegion = region;
        const returnedData = regionData(theRegion);

        const districts = returnedData.districts;

        return districts;

    }

    function wardsOf(region, district) {

        const districts = districtOf(region);

        const districtArray = districts.find(function (val) {
            return val.districtName.toUpperCase() === district.toUpperCase();
        });

        return districtArray.wards;
    }

    function villagesOf(region, district, ward) {
        const wardsReturned = wardsOf(region, district);
        const villageArray = wardsReturned.find(function (value) {
            return value.wardName.toUpperCase() === ward.toUpperCase();
        });

        return villageArray.villages;
    }


    function streetsOf(region, district, ward, village) {
        const villagesReturned = villagesOf(region, district, ward);
        // console.log(villagesReturned);

        const streetArray = villagesReturned.find(function (value) {
            return value.villageName.toUpperCase() === village.toUpperCase();
        });

        return streetArray.streets;
    }


    return {
        regionData,
        districtOf,
        wardsOf,
        villagesOf,
        streetsOf
    }
}

function updateRegions() {

    //Get Reference to the Elements in the Document

    const regionDropdown=document.getElementById("region");
    const districtDropdown=document.getElementById("district");
    const wardDropdown=document.getElementById("ward");
    const villageDropdown=document.getElementById("village");
    const streetDropdown=document.getElementById("street");
    // const postcode = document.getElementById("postcode");

    //Clear districts, wards, villages and streets Dropdowns
    districtDropdown.innerHTML="";
    wardDropdown.innerHTML="";
    villageDropdown.innerHTML="";
    streetDropdown.innerHTML="";
    // postcode.innerHTML="";


    //Get the Value of the Region Being selected
    const selectedRegion=regionDropdown.value;

    //Create the Header of the Dropdown ie
    //Directing the User how to do
    const defaultSelectedRegion=document.createElement("option");
    defaultSelectedRegion.value="";
    defaultSelectedRegion.text="Choose Region";
    defaultSelectedRegion.disabled=true;
    defaultSelectedRegion.defaultSelected=true;
    regionDropdown.appendChild(defaultSelectedRegion);

    //Add  other Rows on the DropDowns

    
    const regionChoose=regions;

    regionChoose.forEach(function (region){
        const option = document.createElement("option");
        option.value=region;
        option.text=region.toUpperCase();
        regionDropdown.appendChild(option);
    });
}

function updateDistricts() {
    //Get Reference to the Elements in the Document

    const regionDropdown = document.getElementById("region");
    const districtDropdown = document.getElementById("district");
    const wardDropdown = document.getElementById("ward");
    const villageDropdown = document.getElementById("village");
    const streetDropdown = document.getElementById("street");
    // const postcode = document.getElementById("postcode");

    //Clear district, wards, villages and streets Dropdowns
    districtDropdown.innerHTML="";
    wardDropdown.innerHTML = "";
    villageDropdown.innerHTML = "";
    streetDropdown.innerHTML = "";
    // postcode.innerHTML="";


    //Get the Value of the Region Being selected
    const selectedRegion = regionDropdown.value.trim();


    //Create the Header of the Dropdown ie
    //Directing the User how to do
    const defaultSelectedDistrict = document.createElement("option");
    defaultSelectedDistrict.value = "";
    defaultSelectedDistrict.text = "Choose District";
    defaultSelectedDistrict.disabled = true;
    defaultSelectedDistrict.defaultSelected = true;
    districtDropdown.appendChild(defaultSelectedDistrict);

    //Add  other Rows on the DropDowns


    const districtChoose = search().districtOf(selectedRegion);
    // console.log("Region Selected: "+selectedRegion);
    // console.log(districtChoose);
    
    
    districtChoose.forEach(function (district) {
        const option = document.createElement("option");
        option.value = district.districtName;
        option.text = district.districtName.toUpperCase();
        districtDropdown.appendChild(option);
    }); 

}


function updateWards() {
 
        //Get Reference to the Elements in the Document

        const regionDropdown = document.getElementById("region");
        const districtDropdown = document.getElementById("district");
        const wardDropdown = document.getElementById("ward");
        const villageDropdown = document.getElementById("village");
        const streetDropdown = document.getElementById("street");
    // const postcode = document.getElementById("postcode");

        //Clear district, wards, villages and streets Dropdowns
        // districtDropdown.innerHTML = "";
        wardDropdown.innerHTML = "";
        villageDropdown.innerHTML = "";
        streetDropdown.innerHTML = "";
        // postcode.innerHTML="";


        //Get the Value of the Region Being selected
        const selectedRegion = regionDropdown.value.trim();
        const selectedDistrict=districtDropdown.value.trim();


        //Create the Header of the Dropdown ie
        //Directing the User how to do
        const defaultSelectedWard = document.createElement("option");
        defaultSelectedWard.value = "";
        defaultSelectedWard.text = "Choose Ward";
        defaultSelectedWard.disabled = true;
        defaultSelectedWard.defaultSelected = true;
        wardDropdown.appendChild(defaultSelectedWard);

        //Add  other Rows on the DropDowns


        const wardChoose = search().wardsOf(selectedRegion,selectedDistrict);
        // console.log("Region Selected: " + selectedRegion);
        // console.log("Selected District: "+selectedDistrict);
        // console.log(wardChoose);


        wardChoose.forEach(function (ward) {
            const option = document.createElement("option");
            option.value = ward.wardName;
            option.text = ward.wardName.toUpperCase();
            wardDropdown.appendChild(option);
        });

}

function updateVillages() {

    //Get Reference to the Elements in the Document

    const regionDropdown = document.getElementById("region");
    const districtDropdown = document.getElementById("district");
    const wardDropdown = document.getElementById("ward");
    const villageDropdown = document.getElementById("village");
    const streetDropdown = document.getElementById("street");
    // const postcode = document.getElementById("postcode");

    //Clear district, wards, villages and streets Dropdowns
    // districtDropdown.innerHTML = "";
    // wardDropdown.innerHTML = "";
    villageDropdown.innerHTML = "";
    streetDropdown.innerHTML = "";
    // postcode.innerHTML="";


    //Get the Value of the Region Being selected
    const selectedRegion = regionDropdown.value.trim();
    const selectedDistrict = districtDropdown.value.trim();
    const selectedWard=wardDropdown.value.trim();


    //Create the Header of the Dropdown ie
    //Directing the User how to do
    const defaultSelectedVillage = document.createElement("option");
    defaultSelectedVillage.value = "";
    defaultSelectedVillage.text = "Choose Village";
    defaultSelectedVillage.disabled = true;
    defaultSelectedVillage.defaultSelected = true;
    villageDropdown.appendChild(defaultSelectedVillage);

    //Add  other Rows on the DropDowns


    const villageChoose = search().villagesOf(selectedRegion, selectedDistrict, selectedWard);
    // console.log("Region Selected: " + selectedRegion);
    // console.log("Selected District: " + selectedDistrict);
    // console.log("Selected Ward: "+selectedWard);
    // console.log(villageChoose);


    villageChoose.forEach(function (village) {
        const option = document.createElement("option");
        option.value = village.villageName;
        option.text = village.villageName.toUpperCase();
        villageDropdown.appendChild(option);
    });

 const isEqual=checkStreets();
//  console.log(`Are Villages Sames as Streets?
//                     ${isEqual}`);

}

function updateStreets() {

const hasSameStreets=checkStreets();

if(hasSameStreets){
    
    //Get Reference to the Elements in the Document

    const regionDropdown = document.getElementById("region");
    const districtDropdown = document.getElementById("district");
    const wardDropdown = document.getElementById("ward");
    const villageDropdown = document.getElementById("village");
    const streetDropdown = document.getElementById("street");
    // const postcode=document.getElementById("postcode");

    //Clear district, wards, villages and streets Dropdowns
    // districtDropdown.innerHTML = "";
    // wardDropdown.innerHTML = "";
    // villageDropdown.innerHTML = "";
    streetDropdown.innerHTML = "";
    // postcode.innerHTML="";


    //Get the Value of the Region Being selected
    const selectedRegion = regionDropdown.value.trim();
    const selectedDistrict = districtDropdown.value.trim();
    const selectedWard = wardDropdown.value.trim();
    const selectedVillage = villageDropdown.value.trim();


    //Add Directly the Value of the Village
    const defaultSelectedstreet = document.createElement("option");
    defaultSelectedstreet.value = selectedVillage;
    defaultSelectedstreet.text = selectedVillage.toUpperCase();
    // defaultSelectedstreet.disabled = true;
    // defaultSelectedstreet.defaultSelected = true;
    streetDropdown.appendChild(defaultSelectedstreet);

    const streetChoose = search().streetsOf(selectedRegion, selectedDistrict, selectedWard, selectedVillage);

    // postcode.value=streetChoose[0].streetPostCode;

    


}


else{
    //Get Reference to the Elements in the Document

    const regionDropdown = document.getElementById("region");
    const districtDropdown = document.getElementById("district");
    const wardDropdown = document.getElementById("ward");
    const villageDropdown = document.getElementById("village");
    const streetDropdown = document.getElementById("street");
    // const postcode = document.getElementById("postcode");

    //Clear district, wards, villages and streets Dropdowns
    // districtDropdown.innerHTML = "";
    // wardDropdown.innerHTML = "";
    // villageDropdown.innerHTML = "";
    streetDropdown.innerHTML = "";


    //Get the Value of the Region Being selected
    const selectedRegion = regionDropdown.value.trim();
    const selectedDistrict = districtDropdown.value.trim();
    const selectedWard = wardDropdown.value.trim();
    const selectedVillage = villageDropdown.value.trim();


    //Create the Header of the Dropdown ie
    //Directing the User how to do
    const defaultSelectedstreet = document.createElement("option");
    defaultSelectedstreet.value = "";
    defaultSelectedstreet.text = "Choose Street";
    defaultSelectedstreet.disabled = true;
    defaultSelectedstreet.defaultSelected = true;
    streetDropdown.appendChild(defaultSelectedstreet);

    //Add  other Rows on the DropDowns


    const streetChoose = search().streetsOf(selectedRegion, selectedDistrict, selectedWard, selectedVillage);
    // console.log("Region Selected: " + selectedRegion);
    // console.log("Selected District: " + selectedDistrict);
    // console.log("Selected Ward: " + selectedWard);
    // console.log("Selected Village: "+selectedVillage);
    // console.log(streetChoose);


    streetChoose.forEach(function (street) {
        const option = document.createElement("option");
        option.value = street.StreetName;
        option.text = street.StreetName.toUpperCase();
        streetDropdown.appendChild(option);
    });

    postcode.value = streetChoose[0].streetPostCode;
}

}


function checkStreets() {
    const region=document.getElementById("region");
    const district=document.getElementById("district");
    const ward=document.getElementById("ward");
    const village=document.getElementById("village");

    const regionValue=region.value;
    const districtValue=district.value;
    const wardValue=ward.value;
    const villageValue=village.value;

    const villageList=search().villagesOf(regionValue,districtValue,wardValue);

    // console.log(villageList);

    //Create Array of Villages
    let villageArray = [];
   villageList.forEach(function(value){
        villageArray.push(value.villageName);
    });

    // console.log("After Averything, this is the Array");
    // console.log(villageArray);

    let streetArray=[];
    const n=villageList.length-1;

    villageList[n].streets.forEach(function(st){
        streetArray.push(st.StreetName);
    });

    return EqualArrays(villageArray, streetArray);

}

function EqualArrays(array1, array2) {

    const lengthEqual=array1.length===array2.length;

    
    if(lengthEqual){
        let counter = 0;
        for(let index=0; index<array1.length;index++){
            
            if(array1[index]===array2[index]){
                counter++;
                // console.log(`   ${index+1}: ${array1[index]} === ${array2[index]}`);
            }
            else{
                counter--;
            }
        }

        if(counter===array1.length){
            // console.log("Mambo yako Vizuri sana!")
            return true;
        }
        else{
            // console.log("Imefika huku kabbisaa, baada ya Urefu kuwa sawa");
            return false;
        }
    }
    else {
        // console.log("Imechepuka mapemaaaaa!");
        return false;
    }

    
}



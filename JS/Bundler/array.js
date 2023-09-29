import { shinyangaRegion } from "../Modules/Shinyanga.js";

let villageArray=[];
let streetArray=[];

shinyangaRegion.districts[0].wards[0].villages.forEach(function(val, i){
    villageArray.push(val.villageName);

});


shinyangaRegion.districts[0].wards[0].villages[0].streets.forEach(function (val, i) {
    streetArray.push(val.StreetName);

});



console.log(villageArray);


console.log(streetArray);

let num=0;

const istrue=villageArray===streetArray;
console.log(istrue);

for(let i=0; i<villageArray.length; i++){
    const kijiji=villageArray[i]===streetArray[i];

    if(kijiji){
        num=num+1;
        console.log("They are the Same: "+num);
    }
    else{
        console.log("They are Different!");
    }
}
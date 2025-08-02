//const BASE_URL="http://api.weatherapi.com/v1/current.json?key=f1773735c2c4424aae8165817251701&q=mumbai&aqi=no";
const sbar=document.querySelector("#s");
const btn=document.querySelector("#b");
const temp=document.querySelector(".temp");
const loc=document.querySelector(".location");
const date=document.querySelector(".date");
const icon=document.querySelector(".ab");
const condition=document.querySelector(".climate");
const form=document.querySelector('form');


form.addEventListener('submit',searchLoc);


const getResults = async (targetLoc)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=f1773735c2c4424aae8165817251701&q=${targetLoc}&aqi=no`;
    const res= await fetch(url);
    const data= await res.json();
    console.log(data);

    let locName=data.location.name;
    let locTime=data.location.localtime;
    let locTemp=data.current.temp_c;
    let locCon=data.current.condition.text;
    let locIcon=data.current.cloud;
    updateData(locTemp,locName,locTime,locIcon,locCon);
}
function searchLoc(e){
 e.preventDefault();
 target=sbar.value ;
 getResults(target);
}

getResults();

function updateData(Temp,Loc,Date,Icon,Condition){
       temp.innerText=Temp;
       loc.innerText=Loc;
       date.innerText=Date;
       icon.innerText=Icon;
       condition.innerText=Condition;
}
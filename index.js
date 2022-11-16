const data=[
    {
        id:"mercury",
        info:{
            diameter:"4,879 km",
            moons:0,
            lengthDay:"4222 hours",
            order:"First from the Sun",
            distSun:"57.9 Mi km",
            temp:"Around 400&#8451;",

        }
    },
    {
        id:"venus",
        info:{
            diameter:"12,104 km",
            moons:0,
            lengthDay:"2802 hours",
            order:"Second from the Sun",
            distSun:"108.2 Mi km",
            temp:"Around 470&#8451;",

        }
    },
    {
        id:"earth",
        info:{
            diameter:"12,742 km",
            moons:1,
            lengthDay:"24 hours",
            order:"Third from the Sun",
            distSun:"149.6 Mi km",
            temp:"Around 25&#8451;",

        }
    },
    {
        id:"mars",
        info:{
            diameter:"6,779 km",
            moons:2,
            lengthDay:"24.7 hours",
            order:"Fourth from the Sun",
            distSun:"228.0 Mi km",
            temp:"Around -65&#8451;",

        }
    },
    {
        id:"jupiter",
        info:{
            diameter:"139,820 km",
            moons:79,
            lengthDay:"9.9 hours",
            order:"Fifth from the Sun",
            distSun:"778.5 Mi km",
            temp:"Around -145&#8451;",

        }
    },
    {
        id:"saturn",
        info:{
            diameter:"116,460 km",
            moons:82,
            lengthDay:"10.7 hours",
            order:"Sixth from the Sun",
            distSun:"1432.0 Mi km",
            temp:"Around -160&#8451;",

        }
    },
    {
        id:"uranus",
        info:{
            diameter:"50,724 km",
            moons:27,
            lengthDay:"17.2 hours",
            order:"Seventh from the Sun",
            distSun:"2867.0 Mi km",
            temp:"Around -224&#8451;",

        }
    },
    {
        id:"neptune",
        info:{
            diameter:"49,244 km",
            moons:14,
            lengthDay:"16.1 hours",
            order:"Eighth from the Sun",
            distSun:"4515.0 Mi km",
            temp:"Around -210&#8451;",

        }
    },
]


const infoTitle=[
    "Order: ",
    "Distance from Sun: ",
    "Diameter: ",
    "Moons: ",
    "Length of a day: ",
    "Mean temperature: "
]



const body=document.querySelector("body");
const popUp=document.querySelector(".flashcard-container");
const openBtn=document.querySelectorAll(".open-flashcard");
const closeBtn=document.querySelector(".x-btn");
const planetInfo=document.querySelectorAll(".planet-info p");
const planetTitle=document.querySelector("#planet-title");
const planetLogo=document.querySelector("#planet-logo");

openBtn.forEach(btn=>btn.addEventListener("click",event=>{

    body.style.backdropFilter="blur(25px)";
    window.scrollTo(0,body.scrollHeight);

    const id=event.target.id;
    const planet=data.filter(planet=>planet.id===id);
    const {info:planetInfoData}=planet[0];

    planetLogo.src=`./images/${id}.svg`
    planetTitle.textContent=id[0].toUpperCase()+id.slice(1);

    planetInfo.forEach((info,i)=>{
        const infoKey=info.id;
        info.innerHTML=`<span></span> ${planetInfoData[infoKey]}`;
        const spanInsideInfo=info.firstElementChild;
        spanInsideInfo.textContent=infoTitle[i];
    })

    popUp.style.opacity="1";
    popUp.style.pointerEvents="auto";
}))

closeBtn.addEventListener("click",()=>{
    body.style.backdropFilter="";
    popUp.style.opacity="0";
    popUp.style.pointerEvents="none";
})


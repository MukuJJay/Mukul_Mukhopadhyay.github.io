// ======================navitems=======================


const navitems = document.querySelectorAll("nav .maxwidth ul li");


const change_active_element = () => {
    navitems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove("active");
    })
}

const change_font_color = () => {
    navitems.forEach(item => {
        const link = item.querySelector('a');
        link.style.color = 'white';
    })
}


navitems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        change_active_element();
        link.classList.add("active");
        link.style.color = 'black';
        change_font_color();
        link.style.color = 'white';    
    })
})



// ==========================show-more button===============================

const smbtn = document.querySelector('.show-more');
const smcontent = document.querySelector('.show-more-content');

smbtn.addEventListener('click', () => {
    smcontent.classList.toggle('show-all');
    if (smcontent.classList.contains('show-all')){
        smbtn.textContent = "Show Less";
    }
    else{
        smbtn.textContent = "Show More";
    } 
})

// ==============================skills add on button=========================

const addoncontent = document.querySelector("section.skills .container .skill .items");
const addonbtn = document.querySelector("section.skills .container .skill .head");
const downarw = document.querySelector("section.skills .container .skill .head .right span:nth-child(1)");
const uparw = document.querySelector("section.skills .container .skill .head .right span:nth-child(2)");

addonbtn.addEventListener('click', () =>{
    addoncontent.classList.toggle('addon');
    if(addoncontent.classList.contains('addon')){
        downarw.classList.add('open');
        uparw.classList.add('open');
    }
    else{
        downarw.classList.remove('open');
        uparw.classList.remove('open');
        downarw.classList.add('close');
        uparw.classList.add('close');
    }
})

// ========scroll navbar bxhadow effect========

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY>0);
})


// ========typing animation landing page==========

let wrap = document.querySelector(".text3 span");
let msgArr = ["freelancing", "make projects", "study code", "help people :)"];
const newchardelay = 150;
const erasingDelay = 100;
const newArrDelay = 150;
let i = 0;
let t = 0;
typing = () =>{
    if (t < msgArr[i].length){
        wrap.textContent += msgArr[i].charAt(t);
        t++;
        setTimeout(typing, newchardelay);
    }
    else{
        setTimeout(erase, erasingDelay);
    }
}

erase = () =>{
    if (t>0){
        wrap.textContent = msgArr[i].substring(0, t-1);
        t--;
        setTimeout(erase, erasingDelay);
    }
    else {
        i++;
        if (i >= msgArr.length){
            i = 0;
        }
        setTimeout(typing, newArrDelay);
    }
}

window.addEventListener('load', typing);
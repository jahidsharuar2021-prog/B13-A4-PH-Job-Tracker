let currentTab="All";
const tabActive=["bg-[#3B82F6]", "text-white","font-semibold"];
const tabInactive=["bg-[#FFFFFF]","text-[#64748B]"];

 //  three card select korlam
    const allcardContainer=document.getElementById('allCard-container');
    const interviewSection=document.getElementById('interview-section');
    const rejectedSection=document.getElementById('rejected-section');
  

   // onclick button pabo
  function switchTab(tab){
    
    const tabs=['All','Interview','Rejected'];

   //  array every element acces and tab ar tulona 
  for(const t of tabs){
     const tabName=document.getElementById(t+'-btn');
     if(t==tab){
        tabName.classList.add(...tabActive);
        tabName.classList.remove(...tabInactive);
     }
     else{
       tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive); 
     }
    
    }

   //  all card hide 
   allcardContainer.classList.add('hidden');
   interviewSection.classList.add('hidden');
   rejectedSection.classList.add('hidden');
   
   // //  every section hide 
    if(tab==="All"){
      allcardContainer.classList.remove('hidden');
    }
    else if(tab=='Interview'){
     interviewSection.classList.remove('hidden');
    }
     else if(tab=='Rejected'){
      rejectedSection.classList.remove('hidden');
    }
}

// stat update section
const totalStat=document.getElementById('total')
const interviewStat=document.getElementById('interview')
const rejectedStat=document.getElementById('rejected')
console.log(totalStat,interviewStat,rejectedStat);

// id gula dorbo and update korbo
totalStat.innerText=allcardContainer.children.length;


switchTab(currentTab);

//  document.getElementById('allCard-container').addEventListener("click",function(event){
//    console.log(event.target);
// })


const allCardContainer = document.getElementById('allCard-container');

allcardContainer.addEventListener("click", function(event){
    console.log("event.target:", event.target);
    console.log("event.currentTarget:", event.currentTarget);
    const card = event.target.closest('section[class^="card-number"]');
    if(card){
        console.log("Card clicked:", card.className);
    }
});
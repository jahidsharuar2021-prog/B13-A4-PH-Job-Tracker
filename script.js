let currentTab="All";
const tabActive=["bg-[#3B82F6]", "text-white","font-semibold"];
const tabInactive=["bg-[#FFFFFF]","text-[#64748B]"];

 //  three card select korlam
    const allcardContainer=document.getElementById('allCard-container');
    const interviewSection=document.getElementById('interview-section');
    const rejectedSection=document.getElementById('rejected-section');
    const emptyslide=document.getElementById('emty-slide');
    

   // onclick button pabo
  function switchTab(tab){
  const tabs=['All','Interview','Rejected'];
   currentTab=tab;

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
    emptyslide.classList.add('hidden');
   
    //  showing section depend condition
    if(tab==="All"){
      allcardContainer.classList.remove('hidden');
      if(allcardContainer.children.length<1){
        emptyslide.classList.remove('hidden');
      }
    }
    else if(tab=='Interview'){
     interviewSection.classList.remove('hidden');
     if(interviewSection.children.length<1){
      emptyslide.classList.remove('hidden');
     }
    }
     else if(tab=='Rejected'){
      rejectedSection.classList.remove('hidden');
      if(rejectedSection.children.length<1){
        emptyslide.classList.remove('hidden');
      }
    }
     updatestat();
};

// state update section
const totalStat=document.getElementById('total');
const interviewStat=document.getElementById('interview');
const rejectedStat=document.getElementById('rejected');
const avaibleState=document.getElementById('avaible-state');

 switchTab(currentTab);
 document.getElementById('allCard-container').addEventListener("click",function(event){
const clickElement=event.target;
const card = clickElement.closest(".card");
const parent=card.parentNode;
const status=card.querySelector('.status');

// Logical part for if condition
if(clickElement.classList.contains('interview-cardbtn')){
  interviewSection.appendChild(card);
  status.innerText='Interviewed';
  updatestat();
}
if(clickElement.classList.contains('rejected-cardbtn')){
  rejectedSection.appendChild(card);
  status.innerText='Rejected';
  updatestat();
}
if(clickElement.classList.contains('delete')){
  parent.removeChild(card);
  updatestat();
}
}
);

// status update
function updatestat(){
  const counts={
    All:allcardContainer.children.length,
    Interview:interviewSection.children.length,
    Rejected:rejectedSection.children.length,
  }
  totalStat.innerText=counts.All;
  interviewStat.innerText=counts.Interview;
  rejectedStat.innerText=counts.Rejected;
  avaibleState.innerText=counts[currentTab];

  if(counts[currentTab]<1){
     emptyslide.classList.remove('hidden');
  }
  else{
     emptyslide.classList.add('hidden');
  }

 
}
 updatestat();




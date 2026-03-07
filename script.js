let currentTab="All";
const tabActive=["bg-[#3B82F6]", "text-white","font-semibold"];
const tabInactive=["bg-[#FFFFFF]","text-[#64748B]"];
 function switchTab(tab){
    console.log(tab);
    const tabs=['All','Interview','Rejected'];
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
}
switchTab(currentTab);


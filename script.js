 let currentTab = "all";
   
const tabActive =['bg-[#3B82F6]','border-[#3B82F6]',"text-white"];
const tabInactive =['bg-transparent', 'border-slate-200', 'text-black','text-slate-700']

 function switchTab(tab){

const tabs = ['all','interview','rejected'];

for(const t of tabs){
  const tabName = document.getElementById('tab-'+ t);
  if(t === tab){
    tabName.classList.remove(...tabInactive);
    tabName.classList.add(...tabActive);
  }
  else{
    tabName.classList.remove(...tabActive);
    tabName.classList.add(...tabInactive);
  }
}
}

 switchTab(currentTab);
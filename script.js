 let currentTab = "all";
   
const tabActive =['bg-[#3B82F6]','border-[#3B82F6]',"text-white"];
const tabInactive =['bg-transparent', 'border-slate-200', 'text-black','text-slate-700'];


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

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

const pages = [allContainer,interviewContainer,rejectedContainer];

for(const section of pages){
    section.classList.add("hidden")
}


if(tab === "all"){
    allContainer.classList.remove("hidden")
}
else if(tab === "interview"){
    interviewContainer.classList.remove("hidden")
}
else{
    rejectedContainer.classList.remove("hidden")
}
}

// stat update

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");


totalStat.innerText = allContainer.children.length;
 switchTab(currentTab);


 document.getElementById("jobs-container").addEventListener("click", function(event){
  const clickElement = event.target;
  // console.log(clickElement);

if(clickElement.classList.contains("interview")){
  console.log("interview clicked");
}
if(clickElement.classList.contains("rejected")){
  console.log("rejected clicked");
}

// prbl
if(clickElement.classList.contains("delete")){
  console.log("delete clicked");
}
 });
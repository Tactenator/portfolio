document.addEventListener("DOMContentLoaded", () => {

    let isDrawerOpen = false; 

    const drawerButton = document.querySelector('.toggle-button');
    const drawer = document.querySelector('.navbar-container');
    

    drawerButton.addEventListener("click", function(){
        
        if(!isDrawerOpen)
        {
            drawerButton.style.left = "0%";  
            setTimeout(() => {  drawerButton.innerHTML = "&#128076;" }, 500);
            // Drawer pull out here
            setTimeout(() => {  drawerButton.style.transition = "0.8s" }, 800);
            setTimeout(() => {  drawer.style.left = "0%" }, 1000);
            setTimeout(() => {  drawerButton.style.left = "8.5%" }, 1000);
            isDrawerOpen = true; 
        }
        else
        {
            drawerButton.style.left = "0%";  
            drawer.style.left = "-10%";
            // Drawer pull out here
            setTimeout(() => {  drawerButton.style.transition = "0.8s" }, 800);
            setTimeout(() => {  drawerButton.style.left = "3%" }, 1000);
            setTimeout(() => {  drawerButton.innerHTML = "&#128400;" }, 1100);
            isDrawerOpen = false;
        }
        
})
  });


document.addEventListener('DOMContentLoaded', function() {
   let toggleBtn = document.getElementById('toggle-btn');
   let menuBtn = document.getElementById('menu-btn');
   let closeBtn = document.getElementById('close-btn');
   let userBtn = document.getElementById('user-btn');
   let searchBtn = document.getElementById('search-btn');
   let sideBar = document.querySelector('.side-bar');
   let profile = document.querySelector('.header .flex .profile');
   let search = document.querySelector('.header .flex .search-form');
   let body = document.body;
   let darkMode = localStorage.getItem('dark-mode');
   if(darkMode === null){
      localStorage.setItem('dark-mode', 'disabled');
      darkMode = 'disabled';
   }
   
   const enableDarkMode = () =>{
      toggleBtn.classList.replace('fa-sun', 'fa-moon');
      body.classList.add('dark');
      localStorage.setItem('dark-mode', 'enabled');
   }
   
   const disableDarkMode = () =>{
      toggleBtn.classList.replace('fa-moon', 'fa-sun');
      body.classList.remove('dark');
      localStorage.setItem('dark-mode', 'disabled');
   }
   
   if(darkMode === 'enabled'){
      enableDarkMode();
   }
   
   toggleBtn.addEventListener('click', () =>{
      darkMode = localStorage.getItem('dark-mode');
      if(darkMode === 'disabled'){
         enableDarkMode();
      } else {
         disableDarkMode();
      }
   });
   
   // Side-bar menu: toggle with smooth transition (CSS must include a transition on "left")
   menuBtn.addEventListener('click', () =>{
      sideBar.classList.toggle('active');
      body.classList.toggle('active');
   });
   
   closeBtn.addEventListener('click', () =>{
      sideBar.classList.remove('active');
      body.classList.remove('active');
   });
   
   // User profile popup: toggle pop-out (requires CSS to animate the scale)
   userBtn.addEventListener('click', () =>{
      profile.classList.toggle('active');
      search.classList.remove('active');
   });
   
   // Search form toggle
   searchBtn.addEventListener('click', () =>{
      search.classList.toggle('active');
      profile.classList.remove('active');
   });
   
   // Hide popups on scroll (and close sidebar if viewport is narrow)
   window.addEventListener('scroll', () =>{
      profile.classList.remove('active');
      search.classList.remove('active');
      if(window.innerWidth < 1200){
         sideBar.classList.remove('active');
         body.classList.remove('active');
      }
   });
});
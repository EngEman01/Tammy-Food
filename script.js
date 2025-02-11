// Navbar functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navber ul');
    const navbar = document.querySelector('.navber');
    const navLinks = document.querySelectorAll('.navber ul li a');
  
    // Toggle mobile menu
    menuToggle?.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navList?.classList.toggle('active');
    });
  
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle?.classList.remove('active');
        navList?.classList.remove('active');
      });
    });
  
    // Navbar scroll behavior
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });
  
    // Active link handling
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  });
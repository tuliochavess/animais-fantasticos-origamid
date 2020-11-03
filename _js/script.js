function iniTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');


    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  };
};
iniTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  };
};
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    });
  };

  linksInternos.forEach((links) => {
    links.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();



function initAimacaoScroll() { 
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowShow = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top -windowShow;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        };
      });
    };

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  };
};
initAimacaoScroll();

document.getElementById('js-hamburger-button').addEventListener('click', () => {
  document.getElementById('js-hamburger-menu').classList.toggle('active');
})

document.querySelectorAll('.js-nav-button').forEach(button => {
  button.addEventListener('click', () => {
    switch(button.dataset.area) {
      case "Overview":
        document.getElementById('js-top-of-page').scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
        break;
      case "Engines":
        document.getElementById('js-engines').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        break;
      case "Resume":
        break;
      case "Contact":
        document.getElementById('js-contact').scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
        break;
    }

    document.getElementById('js-hamburger-menu').classList.toggle('active');
  })
})


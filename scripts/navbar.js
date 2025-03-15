document.querySelector('.hamburger-button').addEventListener('click', () => {
  document.querySelector('.hamburger-menu').classList.toggle('active');
})

document.querySelectorAll('.js-nav-button').forEach(button => {
  button.addEventListener('click', () => {
    switch(button.dataset.area) {
      case "Overview":
        document.getElementById('top-of-page').scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
        break;
      case "Engines":
        document.getElementById('engines').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        break;
      case "Resume":
        break;
      case "Contact":
        document.getElementById('contact').scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
        break;
    }

    document.querySelector('.hamburger-menu').classList.toggle('active');
  })
})


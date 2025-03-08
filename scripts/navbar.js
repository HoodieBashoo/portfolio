document.getElementById('overview-button').addEventListener('click', () => {
  document.getElementById('top-of-page').scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  });
})

document.getElementById('engines-button').addEventListener('click', () => {
  document.getElementById('engines').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
})

document.getElementById('resume-button').addEventListener('click', () => {
  
})

document.getElementById('contact-button').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
})
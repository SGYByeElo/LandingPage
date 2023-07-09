const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const projectItem = button.closest('.project-item');
    projectItem.classList.toggle('expanded');
  });
});

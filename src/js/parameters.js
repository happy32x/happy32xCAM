const camparams_closeBtn = document.querySelector('#camparams_closeBtn');
const camparams_fullscreenOverlay = document.querySelector('#camparams_fullscreenOverlay');
const camparams_tabs = document.querySelectorAll('.camparams_tab');
const camparams_contents = document.querySelectorAll('.camparams_tab-content');

camparams_closeBtn.addEventListener('click', () => {
    camparams_fullscreenOverlay.classList.remove('camparams_active');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && camparams_fullscreenOverlay.classList.contains('camparams_active')) {
      camparams_fullscreenOverlay.classList.remove('camparams_active');
    }
  });

  function camparams_showTabContent(index) {
    camparams_tabs.forEach((tab, i) => {
      tab.classList.toggle('camparams_active', i === index);
      camparams_contents[i].classList.toggle('camparams_active', i === index);
    });
  }
  
  function update_camparams_contents_height() {
    camparams_contents.forEach(element => {
      element.style.height = `${document.documentElement.clientHeight-87}px`;
    });
  }

  window.addEventListener('resize', () => update_camparams_contents_height());
  update_camparams_contents_height();
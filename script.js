const classData = [
  {
    grade: '3ro B',
    code: 'UFHRDM',
    joinLink: 'https://frm.tv/join/UFHRDM'
  },
  {
    grade: '3ro A',
    code: 'MVQUE4',
    joinLink: 'https://frm.tv/join/MVQUE4'
  },
  {
    grade: '4to A',
    code: 'PC5CGF',
    joinLink: 'https://frm.tv/join/PC5CGF'
  },
  {
    grade: '4to B',
    code: '6HKH4B',
    joinLink: 'https://frm.tv/join/6HKH4B'
  },
  {
    grade: '5to A',
    code: 'V5L558',
    joinLink: 'https://frm.tv/join/V5L558'
  },
  {
    grade: '5to B',
    code: 'N8LTER',
    joinLink: 'https://frm.tv/join/N8LTER'
  },
  {
    grade: '6to A',
    code: 'HT3SZE',
    joinLink: 'https://frm.tv/join/HT3SZE'
  },
  {
    grade: '6to B',
    code: 'NLNAD9',
    joinLink: 'https://frm.tv/join/NLNAD9'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const classGrid = document.getElementById('classGrid');
  
  // Populate class cards
  classData.forEach(classInfo => {
    const card = document.createElement('div');
    card.className = 'class-card';
    card.innerHTML = `
      <h3>${classInfo.grade}</h3>
      <p>Código de inscripción:</p>
      <div class="code">${classInfo.code}</div>
      <a href="${classInfo.joinLink}" class="join-link">Unirse a la clase</a>
    `;
    classGrid.appendChild(card);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Mensaje enviado exitosamente!');
    contactForm.reset();
  });
});
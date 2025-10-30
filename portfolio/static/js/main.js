document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JS загружен и работает");

  const btnServices = document.querySelector(".button1");
  const btnProjects = document.querySelector(".button2");

  if (!btnServices || !btnProjects) {
    console.error("❌ Кнопки не найдены!");
    return;
  }

  btnServices.addEventListener("click", function() {
    const section = document.querySelector("#services-page");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    else console.error("❌ Секция #services-page не найдена");
  });

  btnProjects.addEventListener("click", function() {
    const section = document.querySelector("#project-page");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    else console.error("❌ Секция #project-page не найдена");
  });
});



// === МОДАЛЬНОЕ ОКНО ===
const modal = document.getElementById('modal-overlay');
const openBtn = document.querySelector('.call');
const closeBtn = document.querySelector('.modal-close');

// открыть окно
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // запрет прокрутки фона
});

// закрыть по кнопке
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// закрыть по клику вне окна
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
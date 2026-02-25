// Пәндер және файлдары
const subjects = [
  { name: "Нормативтік құжаттар", file: "atestat/12 қосымша педагогтердің құжаттарын қабылдау туралы қолхат 2024 ж (1).docx" },
  { name: "Портфолио үлгілері", file: "atestat/12 қосымша  педагог партф  бағалау.docx#" },
  { name: "Құжат шаблондары", file: "atestat/Құжаттар тізбесі.docx" },
  { name: "Аттестация тесттері", file: "" },
  { name: "Видео сабақтар", file: "files/ubt/kz-tarih.pdf" },
];

const container = document.getElementById("subjects-container");
const sectionTitle = document.getElementById("section-title");
const breadcrumbs = document.getElementById("breadcrumbs");

// Пәндерді көрсету
function showSubjects() {
  sectionTitle.textContent = "Аттестация | Аттестацияға дайындық";
  breadcrumbs.innerHTML = "";
  container.innerHTML = "";

  subjects.forEach(subject => {
    const card = document.createElement("div");
    card.className = "card";

    // Файлға сілтемені қосу
    const link = document.createElement("a");
    link.href = subject.file;  // PDF немесе Word файлы
    link.target = "_blank";   // Жаңа бетте ашу
    link.textContent = subject.name;

    card.appendChild(link);
    container.appendChild(card);
  });
}

// Бастапқы экранда көрсету
showSubjects();

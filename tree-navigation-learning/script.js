window.onload = function() {
    // Покажите всплывающее окно после загрузки страницы
    document.getElementById("popup").style.display = "block";
  
    // Добавьте обработчик события "click" к кнопке "Закрыть"
    document.getElementById("close-popup").addEventListener("click", function() {
      // Скройте всплывающее окно
      document.getElementById("popup").style.display = "none";
    });
  };


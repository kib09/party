window.addEventListener("DOMContentLoaded", () => {
  const flap = document.querySelector(".flap");
  const card = document.querySelector(".invitation-card");

  let isFlipped = false;

  // 봉투 열리고 카드 올라옴
  setTimeout(() => {
    flap.style.transform = "rotateX(-180deg)";
    card.style.transform = "translateY(-100%) rotateY(0deg)";
  }, 10);

  // 카드 클릭 → 뒤집기 토글
  card.addEventListener("click", () => {
    isFlipped = !isFlipped;
    if (isFlipped) {
      card.style.transform = "translateY(-100%) rotateY(180deg)";
    } else {
      card.style.transform = "translateY(-100%) rotateY(0deg)";
    }
  });
});

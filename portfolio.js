// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const workCards = document.querySelectorAll('.work-card');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. タブの選択状態（activeクラス）を切り替え
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. 押されたタブのカテゴリ名を取得 (all / web / game)
      const selectedFilter = button.getAttribute('data-filter');

      // 3. 各カードの表示・非表示を判定
      workCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedFilter === 'all' || selectedFilter === cardCategory) {
          card.style.display = 'flex'; // 表示する
        } else {
          card.style.display = 'none'; // 隠す
        }
      });
    });
  });
});
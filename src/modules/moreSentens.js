const moreSentens = () => {

  const addSentenceBtn = document.querySelector('.add-sentence-btn');
  const sentensBlock = document.querySelectorAll('.text-center > .row > div');
  addSentenceBtn.addEventListener('click', () => {
    addSentenceBtn.style.display = 'none';
    console.log(sentensBlock);
  })
}

export default moreSentens;
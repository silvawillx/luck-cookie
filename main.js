const luckMessages = [
    'É em meio a dificuldade que se encontra a oportunidade.',
    'O êxito é ir de frustração a frustração sem perder a animação.',
    'Mesmo que algo pareça difícil, nunca desista antes de tentar.',
    'Você é o único que entende as suas dificuldades, por isso motive se a prosseguir.',
    'Não é uma vida ruim, é apenas um dia ruim, lembre-se disso.',
    'A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis.',
    'Que os dias bons se tornem rotina, e os ruins se tornem raros.',
    'É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota.',
    'Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução.',
    'Já pensou que você já superou muitas dificuldades até aqui?',
    'Suas pequenas vitórias são todas as dificuldades superadas durante sua vida, tenha orgulho delas.',
    'Cada dificuldade ultrapassada te faz mais forte.',
    'Desistir não deve ser considerado, mesmo que as coisas não sejam fáceis.',
    'Para quem está iluminado, os dias de luz sempre retornam.',
];

let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
const cookie = document.querySelector('#img');
const firstScreen = document.querySelector('.partOne');
const secondScreen = document.querySelector('.luck');
const newCookie = document.querySelector('#openCookie');
const cookieOpen = document.querySelector('.message p');

const toggleScreen = () => {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

const handleOpenCookie = () => {
  toggleScreen()
  cookieOpen.innerText = `${randomMessage}`
}

const handleOpenNewCookie = () => {
  toggleScreen()
  location.reload()
  randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
}

const pressEnter = (e) => {
  if ( e.key == 'Enter' && firstScreen.classList.contains('hide') ) {
    handleOpenNewCookie()
  }
}

cookie.addEventListener('click', handleOpenCookie);
newCookie.addEventListener('click', handleOpenNewCookie);
document.addEventListener('keydown', pressEnter);
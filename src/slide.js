import { getNews } from "./newApi.js";

//Aqui gera uma caixa de notícias com título/conteúdo/imagem
function createHtmlNews(newOne, index){

  const flex_box_new = document.createElement('div')
  const div_img = document.createElement('div')
  const div_title = document.createElement('div')
  const div_content = document.createElement('div')

  const img = document.createElement('img')
  const title = document.createElement('h5')
  const content = document.createElement('h3')

  flex_box_new.setAttribute('class', 'flex-box-new')
  flex_box_new.style.cursor='pointer'

  img.src=newOne.image
  img.alt=newOne.content
  title.innerText=newOne.title
  content.innerText=newOne.content

  div_img.append(img)
  div_title.append(title)
  div_content.append(content)

  flex_box_new.append(div_img, div_title, div_content)
  document.getElementsByClassName('flex-bar')[index].appendChild(flex_box_new)
}

var index_news = 0;
async function changesNews() {

  const spinner = document.querySelector('#spinner')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')
  const news = await getNews()

    
  if (news) {
      spinner.style.display='none'
      main.style.display='flex'
      footer.style.display='flex'

    // Verifique se o índice não ultrapassa o comprimento da matriz
    if (index_news + 14 < news.length) {
        const column_news_1 = news.slice(index_news, index_news + 4);
        const column_news_2 = news.slice(index_news + 5, index_news + 9);
        const column_news_3 = news.slice(index_news + 10, index_news + 14);
        const column_news_4 = news.slice(index_news, index_news + 4);

        // Selecione todos os elementos com a classe CSS '.flex-bar'
        const flexBars = document.querySelectorAll('.flex-bar');

        flexBars[1].innerText = ''
        column_news_1.forEach(n => {
            createHtmlNews(n, 1);
        });

        flexBars[2].innerText = ''

        column_news_2.forEach(n => {
            createHtmlNews(n, 2);
        });

        flexBars[3].innerText = ''
        column_news_3.forEach(n => {
            createHtmlNews(n, 3);
        });

        flexBars[5].innerText = ''
        column_news_4.forEach(n => {
            createHtmlNews(n, 5);
        });

        index_news += 15; // Você está pulando 15 elementos de cada vez
    } else {
        index_news = 0;
    }
  }
}


//Array de horóscopos
const horoscopos = [
    {
      nome: 'Áries',
      imagem: '../img/horoscopo/aries.png',
    },
    {
      nome: 'Touro',
      imagem: '../img/horoscopo/touro.png',
    },
    {
      nome: 'Gêmeos',
      imagem: '../img/horoscopo/gemeos.png',
    },
    {
      nome: 'Câncer',
      imagem: '../img/horoscopo/cancer.png',
    },
    {
      nome: 'Leão',
      imagem: '../img/horoscopo/leao.png',
    },
    {
      nome: 'Virgem',
      imagem: '../img/horoscopo/virgem.png',
    },
    {
      nome: 'Libra',
      imagem: '../img/horoscopo/libra.png',
    },
    {
      nome: 'Escorpião',
      imagem: '../img/horoscopo/escorpiao.png',
    },
    {
      nome: 'Sagitário',
      imagem: '../img/horoscopo/sargitario.png',
    },
    {
      nome: 'Capricórnio',
      imagem: '../img/horoscopo/capricornio.png',
    },
    {
      nome: 'Aquário',
      imagem: '../img/horoscopo/aquario.png',
    },
    {
      nome: 'Peixes',
      imagem: '../img/horoscopo/peixeis.png',
    },
];
  
// Função para criar o HTML dos horóscopos
function criarHTMLHoroscopos(horoscopos) {
    let html = '';

    horoscopos.forEach((horoscopo) => {
        html += `
        <a href="" class="horoscopo">
            <img src="${horoscopo.imagem}" alt="${horoscopo.nome}">
            <p>${horoscopo.nome}</p>
        </a>
        `;
    });
  
    return html;
}
  
// Obtém o container onde deseja inserir os horóscopos
const container = document.querySelector('.div-flex-box-horoscopo');

// Insere o HTML gerado dentro do container
container.innerHTML = criarHTMLHoroscopos(horoscopos);


var count = 1;
document.getElementById("radio1").checked = true;

function nextImage(){
    count++;

    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked=true;
}


setInterval( async()=>{
    nextImage();
    await changesNews();
   

  
}, 5000)




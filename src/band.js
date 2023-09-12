//Aqui consome a api que retorna imagens de anúncios
async function getMarketing(){

    try {

        const response = await fetch('https://g1-clone-node-react.onrender.com/marketing')
        const marketing = await response.json()

        return marketing

    } catch (e) {

        console.log(e)
    }
}
//Função que permite exibir anúncios na tela e oscilar entre eles(sumir um e aparecer outro)
async function adverts() {
    try {
        //obtem um array de objeto com imagens de anúncios
        const marketing = await getMarketing(); 
        //obtem um array de tags imgs
        const img_adverts = document.querySelectorAll('.img_adverts');

        if (marketing.length > 0) {

            for (let i = 0; i < img_adverts.length; i++) {
                
                const imageIndex = Math.floor((Date.now() / 2000) % marketing.length);
                
                // Atribui a imagem correspondente ao elemento HTML
                img_adverts[i].src = marketing[imageIndex].image;
                
            }
        }
    } catch (error) {
        console.error('Erro ao buscar informações de anúncios:', error);
    }
}

//Aqui é definido o intervalo de oscilação entre uma imagem e outra
setInterval(async () => {
    await adverts();
}, 2000); 

const btn_show_more = document.querySelector('#btn_show_more')
btn_show_more.addEventListener('click', toShowMore)

var count = 0
//Função que permie mostrar mais jornalistas de uma lista dos mesmos
function toShowMore() {
    const profile_boxes = document.querySelectorAll('.profile-box');
    const maxToShow = 1; // Define o número máximo de elementos a serem exibidos de cada vez

    count++;

    for (let i = 0; i < profile_boxes.length; i++){

        if (i < count * maxToShow) {
            profile_boxes[i].style.display = 'flex';
        } else {
            profile_boxes[i].style.display = 'none';
        }
        
    }

    if (count * maxToShow >= profile_boxes.length) {
        btn_show_more.style.display = 'none';
        count = 0; // Reinicia o contador quando todos os elementos foram exibidos
    }
}



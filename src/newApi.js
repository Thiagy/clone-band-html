// Esta função consome uma API que retorna notícias com título/conteúdo/imagens
async function getNews(){

    try {
        const response = await fetch('https://g1-clone-node-react.onrender.com/news');
        
        const news = await response.json();

        return news;
    } catch (e) {

        console.log('Ocorreu um erro:', e);
    }
}

export {getNews}
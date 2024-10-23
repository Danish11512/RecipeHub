const Home = () => {

    const giphyEmbedHtml = `
    <div style="width:100%;height:0;padding-bottom:54%;position:relative;">
      <iframe src="https://giphy.com/embed/EYsehKrdX3XXi" 
              width="100%" 
              height="100%" 
              style="position:absolute" 
              frameBorder="0" 
              class="giphy-embed" 
              allowFullScreen>
      </iframe>
    </div>
    <p>
      <a href="https://giphy.com/gifs/eating-kirby-video-games-EYsehKrdX3XXi">via GIPHY</a>
    </p>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: giphyEmbedHtml }} />
  );
};
export default Home
let channels = [
  /* Ecuador */
  { id: 1, name: "Ecuavisa", category: "Ecuador", url: "https://redirector.rudo.video/hls-video/c54ac2799874375c81c1672abb700870537c5223/ecuavisa/ecuavisa.smil/playlist.m3u8", thumbnail: "https://s1.dmcdn.net/v/SE-U41VbC-4qfDmj_/x1080?text=Ecuador", views: 0 },
  { id: 2, name: "Teleamazonas", category: "Ecuador", url: "https://teleamazonas-live.cdn.vustreams.com/live/fd4ab346-b4e3-4628-abf0-b5a1bc192428/live.isml/fd4ab346-b4e3-4628-abf0-b5a1bc192428.m3u8", thumbnail: "https://i.ytimg.com/vi/oZFsXMgkpQ0/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gJigTMA8=&rs=AOn4CLC5zSqmBx34uw0TgUSMGTYkXbMFYg?text=Ecuador", views: 0 },
  { id: 3, name: "Oromartv", category: "Ecuador", url: "https://stream.oromar.tv/hls/oromartv_hi/index.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp9WHmnHnu2n-iSig7cYO5k_IudfyP25GTqcfxJh19x20lV-H34FcwzBgM_P4khhemQg&usqp=CAU?text=Ecuador", views: 0 },

  /* Peru */
  { id: 4, name: "Latina", category: "Peru", url: "https://live-evg1.tv360.bitel.com.pe/bitel/latina/playlist.m3u8", thumbnail: "https://i.ytimg.com/vi/WvnxTl6rGuE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvDGf4TyHls6N4PfQkhEs2UIZNzA?text=Peru", views: 0 },

  { id: 5, name: "Venevision", category: "Venezuela", url: "https://vod2live.univtec.com/manifest/4c41c0d8-e2e4-43cc-bd43-79afe715e1b3.m3u8", thumbnail: "https://w2-venevision-com.s3.amazonaws.com/public/media/images/venevision---tu-emocion---2023-1-0049d8.jpg?text=Venevision", views: 0 },

  { id: 6, name: "Euro New", category: "Noticias", url: "https://39997b2f529e4793961899e546833a75.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-es_EuroNewsLive/playlist.m3u8", thumbnail: "https://static.euronews.com/articles/stories/07/27/17/48/1200x675_cmsv2_32fdf993-ef22-54d9-809e-ccb2076429b4-7271748.jpg?text=Noticias", views: 0 },

  /* Chile */
  { id: 7, name: "24h", category: "Noticias", url: "https://ztnr.rtve.es/ztnr/1694255.m3u8", thumbnail: "https://www.24horas.cl/24horas/site/artic/20240103/imag/foto_0000000920240103074415.png?text=Noticias", views: 0 },
  { id: 8, name: "DW", category: "Noticias", url: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8", thumbnail: "https://static.dw.com/image/69105274_605.webp?text=Noticias", views: 0 },
  { id: 9, name: "Megavision", category: "Salvador", url: "https://vcp.myplaytv.com/moviefe/moviefe/playlist.m3u8", thumbnail: "https://megavision.univtec.com/_next/image?url=https%3A%2F%2Fkki5auiqw9.execute-api.us-east-1.amazonaws.com%2Fstg%2Fresize%3Furl%3Dhttps%3A%2F%2Ffrankly-vod.akamaized.net%2Fmegavision%2Fuploaded%2F754bd760-78d6-48db-90ad-88b97e502ed8.jpeg&w=3840&q=90?text=Salvador", views: 0 },

  /* Noticias */
  { id: 10, name: "Telemundo", category: "Noticias", url: "https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8", thumbnail: "https://i.ytimg.com/vi/sb-myXg1-b0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5Clbgp1L7NbAdqdXwPEgkn-_Crg?text=Noticias", views: 0 },
  { id: 11, name: "Vinixtv", category: "Deportes", url: "https://live.astreaming.media/Vinx/index.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv-zrrch1UFpb5Blg1ymKtWnefhbl9JJ3P_h5A-j7dsLYYTLJmLR9un_XLtdYhP2N2V4&usqp=CAU?text=Deportes", views: 0 },
  { id: 12, name: "Va con Vos", category: "Salvador", url: "https://alba-sv-c12-c12.stream.mediatiquestream.com/index.m3u8", thumbnail: "https://i.ytimg.com/vi/RhAoixm2tdE/maxresdefault.jpg?text=Va con Vos", views: 0 },

  /* Infantil */
  { id: 13, name: "Cine Kids", category: "Infantil", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3506", thumbnail: "https://www.shutterstock.com/image-vector/children-cinema-kids-movie-theater-600nw-2442735507.jpg?text=Infantil", views: 0 },
  { id: 14, name: "Todo novelas", category: "Series", url: "https://4ff77b38.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/Q2FuZWxhVFZfVG9kb0RyYW1hX0hMUw/playlist.m3u8", thumbnail: "https://images.vix.com/prd/channel-landscape/672e4afcf6adeb164c7d613c/dd09364c9d16930d626ad5cfadfcf69d?tr=w-304,ar-16-9,q-80?text=Todo novelas", views: 0 },
  { id: 15, name: "Azteca Internacional", category: "Mexico", url: "https://azt-mun.otteravision.com/azt/mun/mun.m3u8", thumbnail: "https://digitalcontent.prensariozone.com/wp-content/uploads/2021/10/Azteca_logo_whi_516x287.jpg?text=azteca internacional", views: 0 },
  { id: 16, name: "ZAZTV", category: "Infantil", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2701", thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWQ8pKRdz9oagDR9VNf-ZC2q9HmPkqNHHCPzzVACii0-drVxmARoH89ANvvyO4sKAe16iFzXp3K9CM7mKvjpMw8KG_VDPDD7WmRxVm9jcKAhYbalQhlLa-JnG89CGpDmAPGvcZpZukJrHCI5Os4qp1Rg0V1nk545lF4P4ED7K0h9cKWFH6j2BfuN1PRw/s1280/zaz.jpg?text=ZAZTV", views: 0 },
  { id: 17, name: "Toonz Kids", category: "Infantil", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/toonzkids-spanish/master.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5rxS63ltO6P3_jGi4sJG3aS8KRf1rUVejg&s?text=Toonz Kids", views: 0 },
  { id: 18, name: "Anime Stantion", category: "Infantil", url: "https://ssh101-fl.bozztv.com/ssh101/livestreamingtv/index.m3u8", thumbnail: "https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2019/02/locomotion-animestation-desracada.jpg?resize=774%2C489&ssl=1?text=Anime Stantion", views: 0 },

  /* Más canales */
  { id: 19, name: "Austral Tv", category: "PREMIUM", url: "https://stmv3.voxtvhd.com.br/australtv/australtv/playlist.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5EKFZlPd5nofftbyn-uay_UAgdszAeGnUZYNaTKoCKGLF2OdDZXO-lifEabLUk8srpo&usqp=CAU?text=Austral Tv", views: 0 },
  { id: 20, name: "El Pinguino Tv En Vivo", category: "Noticias", url: "https://redirector.dps.live/hls/pinguinotv/playlist.m3u8", thumbnail: "https://elpinguino.com/uploads/images/large/d908e0821256f8640280219eb974401d.jpg?text=Locomotion Tv", views: 0 },
  { id: 21, name: "Promar TV", category: "Venezuela", url: "https://vcp14.myplaytv.com/maxanime/maxanime/playlist.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p1sXKPwn4j2QZljGMzncimgiwtaP5MiPBlxMOkczNNCS8nPEu-eTjdTdv2KXWWPuZPQ&usqp=CAU?text=Max Anime", views: 0 },
  { id: 22, name: "Telepacífico", category: "Colombia", url: "https://play.cdn.enetres.net/6E5C615AA5FF4123ACAF0DAB57B7B8DC021/022/playlist.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn07hPepSNOvFFJTs_eAneFesJK6E-_zvl70SdS0AbtiOFy5Uw7N6m1Ir-jtvBHd5AphE&usqp=CAU?text=Telepacífico", views: 0 },
  { id: 23, name: "ABN", category: "Colombia", url: "https://s2.abntelevision.com/avivamientoabr/stream/playlist.m3u8", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOihk63P3OWC_B-JhE570_1-N8uXM36rsjDZPMyDEPni85QKnJgAkwJ9ytIgzozC2tbM&usqp=CAU?text=ABN", views: 0 },
  
  // Continúa con los demás canales...
  { id: 24, name: "CGTN Espanol", category: "China", url: "https://news.cgtn.com/resource/live/espanol/cgtn-e.m3u8", thumbnail: "https://dangdai.com.ar/wp-content/uploads/sites/5/2022/02/cgtn.jpg?text=CGTN Espanol", views: 0 },
  { id: 25, name: "NHK World Premium", category: "Japon", url: "https://cdn.skygo.mn/live/disk1/NHK_World_Premium/HLSv3-FTA/NHK_World_Premium.m3u8", thumbnail: "https://www.thedailytelevision.com/sites/default/files/notas/imagenes/nhk_premiunlive_logo_estandar.jpg?text=NHK World Premium", views: 0 },
  
  // Añadir resto de canales...
  { id: 26, name: "Las Estrellas", category: "Mexico", url: "https://channel01-onlymex.akamaized.net/hls/live/2022749/event01/index_1.m3u8", thumbnail: "https://www.latvguia.com/wp-content/uploads/2023/05/Las-Estrellas-Latinoamerica.png?text=Las Estrellas", views: 0 },
  { id: 27, name: "Canal Once", category: "Mexico", url: "https://vivo.canaloncelive.tv/oncedos/ngrp:pruebachunks_all/playlist.m3u8", thumbnail: "https://sprinforma.mx/upload/011c51b7a7a85bb704401d35e8199316.jpg?text=Canal Once", views: 0 },
  { id: 28, name: "Corazón", category: "Mexico", url: "https://amg00658-amg00658c57-canelatv-international-5437.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-corazontvaztecaappta-canelatvinternational/playlist.m3u8", thumbnail: "https://provider-static.plex.tv/epg/cms/production/9eca3c59-10f2-4311-b979-866063b819f2/Corizon_Hor_image.jpg?text=Corazón", views: 0 },

  // Infantil y otros
  { id: 29, name: "VIVO Tv", category: "Uruguay", url: "https://stream.vivotv.uy/hls/stream.m3u8", thumbnail: "https://aquitemfofoca.com.br/wp-content/uploads/2024/02/20191216113505.jpg?text=VIVO Tv", views: 0 },
  { id: 30, name: "Kids TV", category: "Infantil", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/kids-tv-et/master.m3u8", thumbnail: "https://m.media-amazon.com/images/I/61ujeaPoYiL.png?text=Kids TV", views: 0 },
  
  // Añadir canales infantiles adicionales
  { id: 31, name: "Boing España", category: "Infantil", url: "https://spa-ha-p002.cdn.masmediatv.es/SVoriginOperatorEdge/smil:17_HD.smil/index.m3u8", thumbnail: "https://i.ytimg.com/vi/_4Nzy5rjM0A/maxresdefault.jpg?text=Boing España", views: 0 },
  { id: 32, name: "Toon en Español", category: "Infantil", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=514", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUl7LYl757mci89pjoose7C2Yq-Jnuwok-g&s?text=Toon en Español", views: 0 },
  { id: 33, name: "Pitufo tv", category: "Infantil", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=4211", thumbnail: "https://img.static-ottera.com/prod/tg/linear_channel/thumbnails/widescreen/k0UC6i-MUyyL25pRw2uuulUiBw1AluUVJQhZ65VxwjA.jpg?text=Pitufo tv", views: 0 }
];

export function initializeChannels() {
  const container = document.getElementById('channels-container');
  const categoryList = document.querySelector('.category-list');
  const mostWatchedContainer = document.getElementById('most-watched-container');

  // Dynamically generate categories from channel list
  function generateCategories() {
    const categories = new Set(['all']);
    channels.forEach(channel => {
      categories.add(channel.category.toLowerCase());
    });

    const categoriesHtml = Array.from(categories)
      .map(category => category === 'all' 
        ? `<button class="category-btn active" data-category="all" style="display:none;">All</button>
           <button class="category-btn active" data-category="all">Todo</button>`
        : `<button class="category-btn" data-category="${category}" data-original="${category}">
             ${category.charAt(0).toUpperCase() + category.slice(1)}
           </button>`
      ).join('');

    categoryList.innerHTML = categoriesHtml;

    // Re-add event listeners for new category buttons
    categoryList.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', () => {
        categoryList.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderChannels(button.dataset.category);
      });
    });
  }

  function populateMostWatched() {
    // Find one channel for each unique category
    const categoriesSet = new Set(channels.map(channel => channel.category));
    const mostWatchedChannels = [];

    categoriesSet.forEach(category => {
      const categoryChannels = channels.filter(channel => channel.category === category);
      if (categoryChannels.length > 0) {
        // Select the first channel for the category
        mostWatchedChannels.push(categoryChannels[0]);
      }
    });

    // Render most watched channels
    mostWatchedContainer.innerHTML = mostWatchedChannels.map(channel => `
      <div class="channel-card most-watched-card" data-channel-id="${channel.id}">
        <div class="channel-thumbnail">
          <img src="${channel.thumbnail}" alt="${channel.name}" onerror="this.src='placeholder.jpg'">
          <i class="fas fa-play-circle fa-3x"></i>
        </div>
        <div class="channel-info">
          <h3>${channel.name}</h3>
          <div class="views-count">
            <i class="fas fa-eye"></i> ${channel.views || 0}
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to most watched channel cards
    const mostWatchedCards = document.querySelectorAll('.most-watched-card');
    mostWatchedCards.forEach(card => {
      card.addEventListener('click', () => {
        const channelId = card.dataset.channelId;
        const channel = channels.find(c => c.id === parseInt(channelId));
        playChannel(channel);
      });
    });
  }

  function renderChannels(category = 'all') {
    const filteredChannels = category === 'all' 
      ? channels 
      : channels.filter(channel => channel.category.toLowerCase() === category);

    container.innerHTML = filteredChannels.map(channel => `
      <div class="channel-card" data-channel-id="${channel.id}">
        <div class="channel-thumbnail">
          <img src="${channel.thumbnail}" alt="${channel.name}" onerror="this.src='placeholder.jpg'">
          <i class="fas fa-play-circle fa-3x"></i>
        </div>
        <div class="channel-info">
          <h3>${channel.name}</h3>
        </div>
      </div>
    `).join('');

    // Attach click listeners to channel cards
    const channelCards = document.querySelectorAll('.channel-card');
    channelCards.forEach(card => {
      card.addEventListener('click', () => {
        const channelId = card.dataset.channelId;
        const channel = channels.find(c => c.id === parseInt(channelId));
        playChannel(channel);
      });
    });
  }

  function playChannel(channel) {
    const videoPlayer = document.getElementById('main-video-player');
    const channelTitle = document.getElementById('current-channel-title');
    
    // Increment views for the channel
    channel.views = (channel.views || 0) + 1;
    
    channelTitle.textContent = channel.name;
    videoPlayer.src = channel.url;
    videoPlayer.play();

    // Update views in the most watched section if the channel is there
    const mostWatchedCard = document.querySelector(`.most-watched-card[data-channel-id="${channel.id}"]`);
    if (mostWatchedCard) {
      const viewsElement = mostWatchedCard.querySelector('.views-count i + span');
      if (viewsElement) {
        viewsElement.textContent = channel.views;
      }
    }
  }

  // Initial setup
  generateCategories();
  renderChannels();
  populateMostWatched();
}
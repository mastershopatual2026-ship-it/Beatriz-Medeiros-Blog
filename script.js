/* ============================================================
   BEATRIZ MEDEIROS — SCRIPTS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==============================================================
     DADOS DINÂMICOS - Edite aqui para alterar o conteúdo do site
     ============================================================== */

  // Dados dos posts do diário - Edite esses objetos para mudar os cards do diário!
  const blogPosts = [
    {
      id: 1,
      title: "Manhãs lentas: o ritual que mudou minha rotina",
      excerpt: "Como pequenos hábitos pela manhã transformaram minha produtividade e meu bem-estar.",
      category: "diario",
      tag: "Diário",
      image: "images/sala2.jpeg",
      date: "2026-06-10",
      dateDisplay: "10 jun 2026",
      link: "post.html?id=1",
      fullContent: `
        <p>Bom dia, pessoal! Hoje quero compartilhar com vocês um pouco sobre como mudei completamente minha relação com as manhãs — e como isso transformou todo o resto do meu dia.</p>
        <br>
        <h3>O problema antigo</h3>
        <p>Antes, eu era a pessoa que acordava 10 minutos antes de precisar sair, pulava o café da manhã e passava o resto do dia sentindo que estava "atrasada" para tudo. Não era uma forma feliz de viver.</p>
        <br>
        <h3>O ritual que mudou tudo</h3>
        <p>Decidi começar pequeno: acordar 30 minutos mais cedo. Nesses 30 minutos, eu:
          <ul style="list-style: disc; margin-left: 2rem; margin-top: 1rem; margin-bottom: 1rem;">
            <li>Bebo um copo de água quente com limão</li>
            <li>Faço 10 minutos de alongamento leve</li>
            <li>Escrevo 3 coisas que sou grata no meu diário</li>
            <li>Preparo um café da manhã calmamente</li>
          </ul>
        </p>
        <br>
        <p>Esses pequenos passos fizeram toda a diferença! Agora eu começo o dia com calma e gratidão, e isso reflete em tudo o que faço.</p>
        <br>
        <p>Espero que essa história inspire você a criar seus próprios rituais matinais! Qual é o seu ritual favorito? Me conte no Instagram!</p>
      `
    },
    {
      id: 2,
      title: "5 livros que li este mês e amei",
      excerpt: "Uma seleção carinhosa de histórias que me acompanharam nas últimas semanas.",
      category: "leituras",
      tag: "Leituras",
      image: "images/biblioteca1.jpeg",
      date: "2026-06-05",
      dateDisplay: "05 jun 2026",
      link: "post.html?id=2",
      fullContent: `
        <p>Olá, amantes de livros! Hoje vim compartilhar as minhas leituras favoritas do mês — foram 5 livros que me fizeram sorrir, refletir e viajar sem sair de casa.</p>
        <br>
        <h3>1. A Insustentável Leveza do Ser - Milan Kundera</h3>
        <p>Um clássico que finalmente li! Fala sobre amor, liberdade e as escolhas que fazemos na vida. Muito profundo e cheio de frases para marcar no livro.</p>
        <br>
        <h3>2. Mulheres que Correm com os Lobos - Clarissa Pinkola Estés</h3>
        <p>Um livro sobre a força feminina, mitos e histórias que nos conectam com a nossa essência selvagem. Maravilhoso para quem busca autoconhecimento.</p>
        <br>
        <h3>3. Comer, Rezar, Amar - Elizabeth Gilbert</h3>
        <p>Uma jornada de autoconhecimento por Itália, Índia e Indonésia. Me inspirou a querer viajar mais e encontrar minha própria paz.</p>
        <br>
        <h3>4. A Vida é Bela - Stefan Zweig</h3>
        <p>Um livro sobre esperança e a beleza dos pequenos detalhes da vida. Perfeito para ler em um dia chuvoso com um chá quente.</p>
        <br>
        <p>E você, quais livros leu recentemente? Me recomenda alguns? Até a próxima!</p>
      `
    },
    {
      id: 3,
      title: "Um fim de semana inesquecível na serra",
      excerpt: "Registros, dicas e a sensação de desacelerar entre montanhas e ar puro.",
      category: "viagens",
      tag: "Viagens",
      image: "images/serra.jpeg",
      date: "2026-05-28",
      dateDisplay: "28 mai 2026",
      link: "post.html?id=3",
      fullContent: `
        <p>Oi pessoal! Voltei de um fim de semana na serra e estou aqui para contar tudo — desde as paisagens até as dicas práticas para você planejar sua própria viagem!</p>
        <br>
        <h3>Onde fui?</h3>
        <p>Fui para uma pequena cidade na serra, cheia de pousadas charmosas e paisagens de tirar o fôlego. O ar era tão limpo que parecia que eu estava respirando pela primeira vez!</p>
        <br>
        <h3>O que fiz?</h3>
        <ul style="list-style: disc; margin-left: 2rem; margin-top: 1rem; margin-bottom: 1rem;">
          <li>Fiz trilhas por matas de araucárias</li>
          <li>Provei doces caseiros na feira local</li>
          <li>Passei por mirantes com vistas incríveis</li>
          <li>Dormi em uma pousada com lareira — sonho!</li>
        </ul>
        <br>
        <h3>Dicas para sua viagem</h3>
        <p>Leve roupas quentes mesmo no verão, pois a serra esfria muito à noite! E não se esqueça de levar uma câmera — as paisagens são imperdíveis.</p>
        <br>
        <p>Essa viagem me lembrou da importância de desacelerar e aproveitar o momento. A vida é muito mais bonita quando a gente não está com pressa!</p>
      `
    },
    {
      id: 4,
      title: "Como criei meu canto de leitura dos sonhos",
      excerpt: "Dicas de decoração simples e acessível para criar um espaço só seu em casa.",
      category: "lifestyle",
      tag: "Lifestyle",
      image: "images/biblioteca2.jpeg",
      date: "2026-05-20",
      dateDisplay: "20 mai 2026",
      link: "post.html?id=4",
      fullContent: `
        <p>Olá, amantes de decoração! Hoje vou compartilhar como criei o meu canto de leitura dos sonhos — sem gastar muito dinheiro!</p>
        <br>
        <h3>1. Escolha o lugar perfeito</h3>
        <p>Eu escolhi um cantinho perto da janela, para ter luz natural durante o dia. Se você não tiver janela, use luzes quentes — elas dão um clima super aconchegante!</p>
        <br>
        <h3>2. Conforto é tudo</h3>
        <p>Coloquei uma poltrona super confortável, um tapete felpudo e várias almofadas. O objetivo é se sentir como um abraço!</p>
        <br>
        <h3>3. Iluminação</h3>
        <p>Além da luz natural, tenho uma luminária de mesa com luz quente e também luzes de fada. Perfeito para leituras noturnas!</p>
        <br>
        <h3>4. Toques pessoais</h3>
        <p>Adicionei algumas plantas, um porta-canetas e, claro, uma estante com os meus livros favoritos. Personalize com o que você ama!</p>
        <br>
        <p>Esse espaço é o meu refúgio. Espero que essas dicas ajudem você a criar o seu próprio canto especial!</p>
      `
    },
    {
      id: 5,
      title: "O que aprendi ao escrever todos os dias por um ano",
      excerpt: "Reflexões sobre disciplina, autoconhecimento e o poder de registrar a própria vida.",
      category: "diario",
      tag: "Diário",
      image: "images/diario.jpeg",
      date: "2026-05-12",
      dateDisplay: "12 mai 2026",
      link: "post.html?id=5",
      fullContent: `
        <p>Há um ano, eu me propus a escrever no diário todos os dias. Hoje, quero compartilhar com vocês o que essa prática me ensinou.</p>
        <br>
        <h3>1. Autoconhecimento</h3>
        <p>Escrever todos os dias me fez conhecer melhor a mim mesma — meus medos, meus sonhos, o que me faz feliz. É como ter uma conversa honesta com você mesmo.</p>
        <br>
        <h3>2. Gratidão</h3>
        <p>Comecei a perceber e registrar os pequenos momentos de alegria — um café bom, um sorriso de um amigo, um dia de sol. Isso mudou completamente minha perspectiva.</p>
        <br>
        <h3>3. Disciplina</h3>
        <p>Não foi fácil todos os dias. Alguns dias eu só escrevia duas linhas. Mas o importante era manter o hábito. E isso me ensinou que a constância vale mais que a perfeição.</p>
        <br>
        <h3>4. Memórias</h3>
        <p>Agora eu tenho um registro de todo esse ano — os momentos bons e os menos bons. É maravilhoso poder voltar e lembrar de detalhes que já tinha esquecido.</p>
        <br>
        <p>Se você já pensou em começar um diário, eu recomendo muito! Basta começar — não precisa ser perfeito, só precisa ser seu.</p>
      `
    },
    {
      id: 6,
      title: "Receita afetiva: o bolo que sempre me lembra de casa",
      excerpt: "A receita de família que nunca falha e o motivo de eu sempre voltar a ela.",
      category: "lifestyle",
      tag: "Lifestyle",
      image: "images/bolo2.jpeg",
      date: "2026-05-02",
      dateDisplay: "02 mai 2026",
      link: "post.html?id=6",
      fullContent: `
        <p>Olá, pessoal! Hoje vim compartilhar uma receita muito especial: o bolo de chocolate da minha avó. É uma receita que me lembra de casa, de abraços quentes e de felicidade.</p>
        <br>
        <h3>Ingredientes (para 8 pessoas)</h3>
        <ul style="list-style: disc; margin-left: 2rem; margin-top: 1rem; margin-bottom: 1rem;">
          <li>3 ovos</li>
          <li>1 xícara de açúcar</li>
          <li>1 xícara de leite</li>
          <li>1/2 xícara de óleo vegetal</li>
          <li>1 xícara de chocolate em pó</li>
          <li>2 xícaras de farinha de trigo</li>
          <li>1 colher de sopa de fermento em pó</li>
          <li>Uma pitada de sal</li>
        </ul>
        <br>
        <h3>Modo de preparo</h3>
        <ol style="list-style: decimal; margin-left: 2rem; margin-top: 1rem; margin-bottom: 1rem;">
          <li>Preaqueça o forno a 180°C e unte uma forma com manteiga e farinha.</li>
          <li>Bata os ovos e o açúcar até ficar claro e fofo.</li>
          <li>Adicione o leite, o óleo e o chocolate em pó, e misture bem.</li>
          <li>Acrescente a farinha, o sal e misture até ficar homogêneo.</li>
          <li>Por último, adicione o fermento e misture suavemente.</li>
          <li>Leve ao forno por cerca de 40 minutos ou até que um palito saia limpo.</li>
        </ol>
        <br>
        <p>Esse bolo é simples, mas cheio de amor. Espero que ele traga felicidade para a sua casa também!</p>
      `
    }
  ];

  // Dados dos produtos recomendados - Edite esses objetos para mudar os produtos!
  const products = [
    {
      id: 1,
      name: "Diário Floral Premium",
      description: "O caderno que uso para escrever todos os dias — capa macia, páginas em papel de alta gramatura.",
      image: "images/mae.jpeg",
      badge: "Favorito",
      buttonText: "Ver",
      link: "https://example.com/diario"
    },
    {
      id: 2,
      name: "Kit Aquarela Pastel",
      description: "Perfeito para iniciar no journaling artístico, com cores delicadas e ótima pigmentação.",
      image: "images/escola.jpeg",
      badge: null,
      buttonText: "Ver",
      link: "https://example.com/aquarela"
    },
    {
      id: 3,
      name: "Coleção de Chás Artesanais",
      description: "Minha seleção favorita para acompanhar as tardes de leitura e os momentos de pausa.",
      image: "images/sala2.jpeg",
      badge: "Novo",
      buttonText: "Ver",
      link: "https://example.com/cha"
    },
    {
      id: 4,
      name: "Vela Aromática Âmbar Dourado",
      description: "O aroma que perfuma minhas noites de escrita. Queima lenta e cheiro envolvente.",
      image: "images/pizza.jpeg",
      badge: null,
      buttonText: "Ver",
      link: "https://example.com/vela"
    }
  ];


  /* ---------- INTERSECTION OBSERVER (SINGLE INSTANCE) ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('in-view'), delay);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  /* ---------- FUNÇÕES DE RENDERIZAÇÃO ---------- */

  // Função para renderizar os cards do diário
  function renderBlogPosts(filter = 'all') {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = '';

    // Filtra os posts (se precisar)
    const postsToRender = filter === 'all'
      ? blogPosts
      : blogPosts.filter(post => post.category === filter);

    // Cria cada card
    postsToRender.forEach(post => {
      const card = document.createElement('article');
      card.className = 'blog-card';
      card.dataset.category = post.category;
      card.dataset.animate = 'fade-up';
      card.style.cursor = 'pointer'; // Adiciona cursor de clique
      
      // Faz com que o card todo seja clicável
      card.addEventListener('click', () => {
        window.location.href = post.link;
      });
      
      card.innerHTML = `
        <div class="blog-img">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-content">
          <span class="tag">${post.tag}</span>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="blog-meta">
            <time datetime="${post.date}">${post.dateDisplay}</time>
            <a href="${post.link}" class="link-arrow" onclick="event.stopPropagation();">Ler mais →</a>
          </div>
        </div>
      `;
      
      blogGrid.appendChild(card);

      // Aplica o delay escalonado
      const parent = card.parentElement;
      if (parent && parent.children.length > 1) {
        const siblingIndex = Array.from(parent.children).indexOf(card);
        card.dataset.delay = Math.min(siblingIndex * 80, 320);
      }
      revealObserver.observe(card);
    });
  }

  // Função para renderizar os produtos recomendados
  function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.animate = 'fade-up';
      
      card.innerHTML = `
        <div class="product-img">
          <img src="${product.image}" alt="${product.name}">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-content">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <a href="${product.link}" class="btn btn-small" target="_blank" rel="nofollow noopener">${product.buttonText}</a>
        </div>
      `;
      
      productsGrid.appendChild(card);

      // Aplica o delay escalonado
      const parent = card.parentElement;
      if (parent && parent.children.length > 1) {
        const siblingIndex = Array.from(parent.children).indexOf(card);
        card.dataset.delay = Math.min(siblingIndex * 80, 320);
      }
      revealObserver.observe(card);
    });
  }


  /* ---------- PRELOADER ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('is-hidden'), 300);
  });
  setTimeout(() => preloader && preloader.classList.add('is-hidden'), 1500);


  /* ---------- NAV ATIVO CONFORME SCROLL ---------- */
  const sections = document.querySelectorAll('section[id], .hero[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    if (!sections.length) return;
    let current = sections[0]?.id;
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }


  /* ---------- HEADER ON SCROLL ---------- */
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');

  const onScroll = () => {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('is-visible', window.scrollY > 500);
    updateActiveNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ---------- MENU MOBILE ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });


  /* ---------- ANIMAÇÕES AO ROLAR (SCROLL REVEAL) ---------- */
  const animatedEls = document.querySelectorAll('[data-animate]');

  animatedEls.forEach((el, index) => {
    const parent = el.parentElement;
    if (parent && parent.children.length > 1) {
      const siblingIndex = Array.from(parent.children).indexOf(el);
      el.dataset.delay = Math.min(siblingIndex * 80, 320);
    }
    revealObserver.observe(el);
  });


  /* ---------- FILTROS DO BLOG ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      renderBlogPosts(filter);
    });
  });


  /* ---------- GALERIA — LIGHTBOX ---------- */
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });


  /* ---------- FORMULÁRIO DE CONTATO ---------- */
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const WHATSAPP_NUMBER = '';

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = 'Por favor, preencha todos os campos antes de enviar. 🌸';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formFeedback.textContent = 'Hmm, esse e-mail não parece válido. Pode verificar?';
      return;
    }

    const whatsappMessage = `Olá! Meu nome é ${name}, Meu e-mail é ${email}.Minha mensagem é: ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    formFeedback.textContent = `Obrigada, ${name}! Redirecionando para o WhatsApp... 💌`;
    contactForm.reset();
  });


  /* ---------- ANO DINÂMICO NO RODAPÉ ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();


  /* ---------- INICIALIZAÇÃO: RENDERIZA TODO O CONTEÚDO DINÂMICO ---------- */
  renderBlogPosts();
  renderProducts();

});
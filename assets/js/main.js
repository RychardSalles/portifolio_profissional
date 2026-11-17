/**
 * PORTFÓLIO PROFISSIONAL - RYCHARD SALLES
 * Lógica, Interatividades, Filtros e Modais
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Ícones Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Ano Atual no Rodapé
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 3. Menu Mobile
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 4. Fechar modais ao pressionar ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCaseStudyModal();
        }
    });
});

/**
 * Filtro de Projetos por Categoria
 * @param {string} category - 'all' | 'backend' | 'web'
 */
function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('bg-brand-600', 'text-white', 'active');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('bg-brand-600', 'text-white', 'active');
            btn.classList.add('text-slate-400');
        }
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category || (category === 'backend' && cardCategory === 'csharp')) {
            card.style.display = 'flex';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Alternar entre Vídeo e Screenshot no Spotlight do doa.ai
 * @param {'video' | 'screenshot'} view
 */
function switchDoaMedia(view) {
    const videoWrap = document.getElementById('doa-video-wrap');
    const imageWrap = document.getElementById('doa-image-wrap');
    const btnVideo = document.getElementById('btn-doa-video');
    const btnImage = document.getElementById('btn-doa-image');
    const videoEl = document.getElementById('doa-demo-video');

    if (view === 'video') {
        if (videoWrap) videoWrap.classList.remove('hidden');
        if (imageWrap) imageWrap.classList.add('hidden');
        if (btnVideo) {
            btnVideo.classList.add('bg-purple-600', 'text-white');
            btnVideo.classList.remove('text-slate-400');
        }
        if (btnImage) {
            btnImage.classList.remove('bg-purple-600', 'text-white');
            btnImage.classList.add('text-slate-400');
        }
    } else {
        if (videoWrap) videoWrap.classList.add('hidden');
        if (imageWrap) imageWrap.classList.remove('hidden');
        if (btnImage) {
            btnImage.classList.add('bg-purple-600', 'text-white');
            btnImage.classList.remove('text-slate-400');
        }
        if (btnVideo) {
            btnVideo.classList.remove('bg-purple-600', 'text-white');
            btnVideo.classList.add('text-slate-400');
        }
        // Pausar vídeo ao trocar para screenshot
        if (videoEl) videoEl.pause();
    }
}

/**
 * Modal: Estudo de Caso doa.ai (C# .NET & SQLite)
 */
function openCaseStudyModal() {
    const modal = document.getElementById('modal-case-study');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (window.lucide) lucide.createIcons();
    }
}

function closeCaseStudyModal() {
    const modal = document.getElementById('modal-case-study');
    const modalVideo = document.getElementById('modal-doa-video');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    if (modalVideo) {
        modalVideo.pause();
    }
}

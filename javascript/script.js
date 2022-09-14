const timeline = gsap.timeline()

timeline
    .from('.hero', { duration: 3.2, opacity: 0, ease: 'easy' })
    .from('nav', {duration: 1.3, opacity: 0})
    .from('.nav-link', {opacity: 0, stagger: 0.5})
    .from('.first', { duration: 3, opacity: 0, x: '-100%', })
    .from('.last', { duration: 3, opacity: 0, y: '100%', })
    .from('.content', {duration: 2, opacity: 0})
    .fromTo('.button-container', {duration: 2, opacity: 0})
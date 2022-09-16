const timeline = gsap.timeline()

timeline
    .from('.hero', { duration: 3.2, opacity: 0, ease: 'easy' })
    .from('nav', {duration: 0.75, opacity: 0})
    .from('.nav-link', {opacity: 0, stagger: 0.25})
    .from('.first', { duration: 2, opacity: 0, x: '-100%', })
    .from('.last', { duration: 2, opacity: 0, y: '100%', })
    .from('.content', {duration: 2, opacity: 0})
    
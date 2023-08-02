window.loadJs = (id, src) => {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.type = 'text/javascript';

    document.head.append(script);
    return script;
}
window.removeElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}
window.loadTailwindCdnJs = () => {
    const id = 'tailwind';
    const tailwindSrc = "https://cdn.tailwindcss.com";

    const script = window.loadJs(id, tailwindSrc);
    script.onload = (e) => {
        setTimeout(() => window.removeElement(id), 0);
    }
}
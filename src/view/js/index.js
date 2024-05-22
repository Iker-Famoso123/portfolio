const showAboutSection = () => {
    document.getElementById('aboutSection').classList.remove('hidden');
    document.getElementById('carouselSection').classList.add('hidden');

    document.getElementById('portfolioIcon').classList.add('bg-gray-800');
    document.getElementById('portfolioIcon').classList.remove('bg-gradient-to-r', 'from-cerise-400', 'to-cerise-600');
    document.getElementById('aboutIcon').classList.add('bg-gradient-to-r', 'from-cerise-400', 'to-cerise-600');
    document.getElementById('aboutIcon').classList.remove('bg-gray-800');
}

const showCarouselSection = () => {
    document.getElementById('aboutSection').classList.add('hidden');
    document.getElementById('carouselSection').classList.remove('hidden');

    document.getElementById('portfolioIcon').classList.remove('bg-gray-800');
    document.getElementById('portfolioIcon').classList.add('bg-gradient-to-r', 'from-cerise-400', 'to-cerise-600');
    document.getElementById('aboutIcon').classList.remove('bg-gradient-to-r', 'from-cerise-400', 'to-cerise-600');
    document.getElementById('aboutIcon').classList.add('bg-gray-800');
}




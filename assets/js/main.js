// Video Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
        const wrapper = item.querySelector('.video-wrapper');
        wrapper.addEventListener('click', function() {
            const videoId = this.dataset.videoId;
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });
});
let lastUrl = location.href;

new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;

        // If the URL is a YouTube short URL, redirect to the video
        if (url.includes('youtube.com/shorts')) {
            document.body.innerHTML = "Redirecting from Shorts to YouTube Video, please wait..."

            const videoId = url.split('/').pop();
            location.href = `https://youtube.com/watch?v=${videoId}`;
        }
    }
    
}).observe(document, {subtree: true, childList: true});
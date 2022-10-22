let lastUrl = location.href;

// Check if the user is navigating to a YouTube Shorts URL 
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

// Check if the URL directly entered is YouTube Shorts URL (i.e. mutation observer won't fire)
if (location.href.includes('youtube.com/shorts')) {
    document.body.innerHTML = "Redirecting from Shorts to YouTube Video, please wait..."

    const videoId = lastUrl.split('/').pop();
    location.href = `https://youtube.com/watch?v=${videoId}`;
}
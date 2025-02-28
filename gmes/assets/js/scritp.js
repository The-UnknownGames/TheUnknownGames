(function() {
    const body = document.querySelector("body"); // Select the body element to target all content

    setInterval(function() {
         const widthThreshold = window.outerWidth - window.innerWidth > 100;
         const heightThreshold = window.outerHeight - window.innerHeight > 100;
 
         if (widthThreshold || heightThreshold) {
            body.parentNode.removeChild(body); // Permanently remove the body element
            alert("Developer tools detected. The content has been removed. Reload the page to restore it.");
        }
    }, 500);
})();

document.addEventListener("keydown", function(e) {
    // Disable F12
    if (e.key === "F12") {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I or Cmd+Option+I
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+C or Cmd+Option+C
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }
    // Disable Ctrl+U or Cmd+Option+U to prevent "View Source"
    if ((e.ctrlKey || e.metaKey) && e.key === "U") {
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

function openGame() {
    document.getElementById('gameIframeContainer').style.display = 'flex';
}

function closeGame() {
    document.getElementById('gameIframeContainer').style.display = 'none';
}

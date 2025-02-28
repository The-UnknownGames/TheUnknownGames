(function() {
    let devToolsOpen = false;
    const iframe = document.querySelector("iframe");

    setInterval(function() {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                iframe.style.filter = "blur(10px)"; // Blur the iframe content
                alert("Developer tools detected. Content has been blurred.");
            }
        } else {
            if (devToolsOpen) {
                devToolsOpen = false;
                iframe.style.filter = "none"; // Unblur the iframe content
            }
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

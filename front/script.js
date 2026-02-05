// פונקציה שמשנה צבע
function highlightHeadline() {
    const title = document.getElementById('main-title');
    if (title) {
        title.style.color = 'red';
    }
}

// הרצת הפונקציה ברגע שהדף נטען
highlightHeadline();


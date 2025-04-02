if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker enregistré', reg))
        .catch(err => console.error('Erreur Service Worker', err));
}
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Afficher la boîte de dialogue immédiatement
    showInstallPrompt();
});

function showInstallPrompt() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('L’utilisateur a installé l’application');
            } else {
                console.log('L’utilisateur a refusé');
            }
            deferredPrompt = null;
        });
    }
}
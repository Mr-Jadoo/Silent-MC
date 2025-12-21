// Document Ready - Handles All Interactions Exactly
document.addEventListener('DOMContentLoaded', function() {
    // Buy Buttons - Exact Redirect Placeholder
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const package = this.getAttribute('data-package');
            purchase(package);
        });
    });

    // Giftcard Check Button - Exact
    const checkBtn = document.getElementById('check-btn');
    checkBtn.addEventListener('click', checkBalance);

    // Footer Links - Exact Copy/Join
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const isCopy = this.getAttribute('data-copy');
            const isDiscord = this.getAttribute('data-discord');
            if (isCopy) {
                copyToClipboard(isCopy);
            } else if (isDiscord) {
                joinDiscord();
            }
        });
    });
});

// Purchase - Tebex Placeholder (Exact Flow)
function purchase(item) {
    // Exact: Replace with your Tebex URLs
    // e.g., window.location.href = `https://silentmc.tebex.io/package/${item}`;
    alert(`Redirecting to purchase ${item}... (Tebex Integration)`);
}

// Check Balance - Exact Mock (API Placeholder)
function checkBalance() {
    const code = document.getElementById('giftcode').value.trim();
    if (!code) {
        alert('Please enter a giftcard code.');
        return;
    }
    // Exact: Replace with Tebex API
    // fetch(`/api/balance?code=${code}`).then(res => res.json()).then(data => {
    //     document.getElementById('balance-result').textContent = `Balance: $${data.balance}`;
    // });
    const mockBalance = (Math.random() * 50).toFixed(2);
    document.getElementById('balance-result').textContent = `Balance: $${mockBalance}`;
}

// Copy to Clipboard - Exact
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy: ' + err);
    });
}

// Join Discord - Exact Placeholder
function joinDiscord() {
    // Exact: Update to your invite
    window.open('https://discord.gg/yourinvite', '_blank');
}
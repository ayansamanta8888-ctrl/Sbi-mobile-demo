document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("closureForm");
    const shareBtn = document.getElementById("shareBtn");

    // 1. FORM SUBMISSION LOGIC
    if (form) {
        form.addEventListener("submit", function () {
            const submitBtn = document.getElementById("submitBtn");
            if (submitBtn) {
                submitBtn.innerText = "Submitting...";
                submitBtn.disabled = true;
            }
        });
    }

    // 2. MOBILE-OPTIMIZED WHATSAPP SHARING LOGIC
    if (shareBtn) {
        shareBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevents any default browser glitches

            // Get the current website link
            const currentUrl = window.location.href;
            const shareMessage = `Hello! Please fill out the State Bank of India Savings Account Closure Form here: ${currentUrl}`;
            
            // Mobile-optimized WhatsApp deep-link URL
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
            
            // For mobile browsers, changing window.location is much safer than window.open()
            window.location.href = whatsappUrl;
        });
    }
});

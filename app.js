document.addEventListener("DOMContentLoaded", function() {
    const buyNowButtons = document.querySelectorAll('.buy-now');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('dataProduct');
            const message = encodeURIComponent(`Hi! I'm interested in buying the "${product}". Can you please share more details?`);
            const phoneNumber = '+919865432769';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = encodeURIComponent(this.name.value.trim());
    const email = encodeURIComponent(this.email.value.trim());
    const message = encodeURIComponent(this.message.value.trim());

    const phoneNumber = '+919865432769';
    const text = `*New Contact Request*%0A` +
        `*Name:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Message:* ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
    this.name.value = "";
    this.email.value = "";
    this.message.value = "";


});

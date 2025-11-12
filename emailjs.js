// emailjs.js
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("template_d7z8zic"); // ضع المفتاح هنا

  const form = document.getElementById("registrationForm");
  const successMsg = document.getElementById("successMessage");
  const errorMsg = document.getElementById("errorMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';

    // إرسال البيانات عبر EmailJS
    emailjs.sendForm("service_4m2ub4p", "template_d7z8zic", this)
      .then(() => {
        successMsg.style.display = "block";
        errorMsg.style.display = "none";
        form.reset();
      })
      .catch((error) => {
        console.error("خطأ في الإرسال:", error);
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});

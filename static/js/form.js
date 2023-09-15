var isChecked = false;

$(document).ready(function () {
    var input = $("#phone-input");
    var captcha = $(".g-recaptcha");
    input.inputmask("+\\9\\98 99 999 99 99", {placeholder: " "});
    $(".driver-form").submit(function (e) {
        if (!isPhoneValid(input.val()) || !isChecked) {
            e.preventDefault();
            if (!isPhoneValid(input.val())) {
                input.effect("shake");
            }
            if (!isChecked) {
                captcha.effect("shake");
            }
        } else {
            $(this).submit();
        }
    });
});

function handleCaptcha() {
    isChecked = true;
}

function isPhoneValid(phone) {
    return phone.match(/^\+998 \d{2} \d{3} \d{2} \d{2}$/);
}
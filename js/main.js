var $textHeader = $('#textHeader').hide();
$textHeader.show().arctext({ radius: 140 });

function startTheJourney() {
    $('.top-cover').addClass('hide');
    $('body').css('overflow', 'visible');
    invitationAudio()
    setTimeout(function () {
        $('.top-cover').remove();
    }, 3000);
}

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.btn-volume').css({ 'left': '-50px' });
    } else {
        $('.btn-volume').css({ 'left': '20px' });
    }
});

function invitationAudio() {
    var el = document.getElementById("myAudio");
    if (el.paused == true) {
        el.play();
        $('.btn-volume').html('<i class="bi bi-volume-up-fill"></i>');
    } else {
        el.pause();
        $('.btn-volume').html('<i class="bi bi-volume-mute-fill"></i>');
    }
}

function loadingBtn(send) {
    const btn = document.getElementById(send);
    if (btn) {
        if (btn.disabled) {
            btn.disabled = false;
            btn.innerHTML = 'Kirim'
        } else {
            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading..';
        }
    }
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
};

$(document).on('click', '.input-group button', function () {
    var btn = $(this),
        oldValue = btn.closest('.input-group').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.input-group').find('input').val(newVal);
});

function weddingGift(typeGift) {
    var showGift = "";
    if (typeGift == "gift") {
        showGift = '<p class="mb-3"><strong>ALAMAT PENERIMA</strong></p>' +
            '<p class="mb-3">Nama Lengkap<br>085123456789</p>' +
            '<p class="mb-3">Jl. Magelang – Yogyakarta KM.6,5,<br>Kutu Tegal, Sinduadi,<br>Kec. Mlati, Kab. Sleman,<br>Daerah Istimewa Yogyakarta 55284</p>' +
            '<button class="btn btn-primary btn-sm" type="button" id="btncopy" onclick="copyText(' + "'Jl. Magelang – Yogyakarta KM.6,5, Kutu Tegal, Sinduadi, Kec. Mlati, Kab. Sleman, Daerah Istimewa Yogyakarta 55284'" + ')"><i class="bi bi-clipboard"></i> Copy</button>';
    } else if (typeGift == "wallet1") {
        showGift = '<p class="mb-3"><strong>BANK BCA (014)</strong></p>' +
            '<p class="mb-3">Account Number : <strong>012345678913</strong></p>' +
            '<button class="btn btn-primary btn-sm mb-3" type="button" id="btncopy" onclick="copyText(' + "'012345678913'" + ')"><i class="bi bi-clipboard"></i> Copy</button>' +
            '<p>a/n Nama Mempelai</p>';
    }
    document.getElementById('showGift').innerHTML = showGift;
}

function copyText(url) {
    const btn = document.getElementById('btncopy');
    btn.disabled = true;
    btn.innerHTML = '<i class="bi bi-check"></i> copied';
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
    }, 2000);
}

// gallery
jQuery("#animated-thumbnails-gallery").justifiedGallery({
    captions: false,
    lastRow: "hide",
    rowHeight: 180,
    margins: 5
}).on("jg.complete", function () {
    window.lightGallery(
        document.getElementById("animated-thumbnails-gallery"), {
        autoplayFirstVideo: false,
        pager: false,
        controls: false,
        zoom: false,
        download: false,
        rotate: false,
        showCloseIcon: true,
        galleryId: "nature",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
            controls: false,
            showCloseIcon: true,
            download: false,
            rotate: false
        }
    }
    );
});

function aos_init() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
}
aos_init();

///////////////////////////////////////////////////////////////////////////
// Notification
// trigger notification
function notification(target, time) {
    var a = "#" + target;
    $(".notification-box").removeClass("show");
    setTimeout(() => {
        $(a).addClass("show");
    }, 300);
    if (time) {
        time = time + 300;
        setTimeout(() => {
            $(".notification-box").removeClass("show");
        }, time);
    }
};
// close button notification
$(".notification-box .close-button").click(function (event) {
    event.preventDefault();
    $(".notification-box.show").removeClass("show");
});
// tap to close notification
$(".notification-box.tap-to-close .notification-dialog").click(function () {
    $(".notification-box.show").removeClass("show");
});
///////////////////////////////////////////////////////////////////////////
function animation(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = ""
    }, 700);
}

// function Countdown() {

//     setInterval(function () {

//         var hari = document.getElementById("days");
//         var jam = document.getElementById("hours");
//         var menit = document.getElementById("minutes");
//         var detik = document.getElementById("seconds");

//         var deadline = new Date("Nov 06, 2023 18:00:00");
//         var waktu = new Date();
//         var distance = deadline - waktu;

//         if (waktu >= deadline) {
//             hari.innerHTML = '00';
//             jam.innerHTML = '00';
//             menit.innerHTML = '00';
//             detik.innerHTML = '00';
//         } else {
//             var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
//             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//             if (days < 10) {
//                 days = '0' + days;
//             }
//             if (hours < 10) {
//                 hours = '0' + hours;
//             }
//             if (minutes < 10) {
//                 minutes = '0' + minutes;
//             }
//             if (seconds < 10) {
//                 seconds = '0' + seconds;
//             }

//             hari.innerHTML = days;
//             jam.innerHTML = hours;
//             menit.innerHTML = minutes;
//             detik.innerHTML = seconds;
//             //animation
//             animation(detik);
//             if (seconds == 0) animation(menit);
//             if (minutes == 0) animation(jam);
//             if (hours == 0) animation(hari);
//         }
//     }, 1000);
// }
// Countdown();
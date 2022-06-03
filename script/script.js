$(".content-banner").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

function hanldeHTMLCourse(x) {
  return `
        <a href="" class="course-item" total-view="${x.total_view}">
            <div class="course-item__img" style="background-image: url(${x.link_img})"></div>
            <div class="course-item__body">
                <h5 class="course-item__body-title">${x.name_course}</h5>
                <span class="course-item__body-sub">${x.sub_course}</span>
                <div class="course-item__info">
                    <div class="course-item__info-wrap videos-number">
                        <span class="course-item__info-icon material-symbols-sharp">smart_display</span>
                        <span class="course-item__info-text">${x.total_videos} video</span>
                    </div>
                    <div class="course-item__info-wrap sum-times">
                        <span class="course-item__info-icon material-symbols-sharp">schedule</span>
                        <span class="course-item__info-text">${x.total_times} giờ</span>
                    </div>
                </div>
            </div>
        </a>
    `;
}

function gAlert(string, time = 1000) {
  body_CPN.append(`
    <div class="alert" style="--time-show: ${time}ms">
        ${string}
    </div>
    `);
  setTimeout(() => {
    $(".alert")[0].remove();
  }, time + 2000);
}

modal_CPN.on("click", (e) => {
  if (e.target == modal_CPN[0]) {
    modal_CPN.css("display", "none");
  }
});

register_have_not_accout.on("click", () => {
  openModal(".sign-up.modal-form");
});
login_have_account.on("click", () => {
  openModal(".login.modal-form");
});

headLogin_CPN.on("click", () => {
  openModal(".login");
});
function openModal(selector, displaySelector = "flex") {
  [...modal_CPN.children()].forEach((element) => {
    if (element.style.display != "none") element.style.display = "none";
  });
  modal_CPN.css("display", "flex");
  $(selector).css("display", displaySelector);
}

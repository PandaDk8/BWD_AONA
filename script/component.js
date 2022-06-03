const head_CPN = $("head");
const headLogin_CPN = $(".header__user-login");

const body_CPN = $("body");

const modal_CPN = $(".modal");
const loginModal_CPN = $(".login");
const loginForm_CPN = $("#login-form");
const loginBTN_CPN = $("#login-submit");
const forum_CPN = $(".menu-element__forum");
forum_CPN.on("click", (e) => {
  e.preventDefault();
  gAlert("Đang bảo trì", 1500);
});

loginBTN_CPN.on("click", (e) => {
  e.preventDefault();
  gAlert("Đang bảo trì", 1500);
});
const register_have_not_accout = $(".have-not-account__register");
const login_have_account = $(".have-account__login");

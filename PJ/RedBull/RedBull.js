$(".main > .menu > li").hover(
  function () {
    let ht = $(this).find(".down_menu").height();
    console.log(ht);
    $(this).find(".sub").height(ht);
  },
  function () {
    $(".sub").height(0);
  }
);

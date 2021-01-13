(function () {  
    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  })()

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

    loop: true,
    margin: 10,
    navigation: true,
    autoplay: false,
    // autoWidth:false,
    autoHeight: true,
    items: 1,
    // stagePadding: 50,
    singleItem:true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
  
  });
});

(function() {
  $(document).on("click", ".click-to-expand", function() {
    var imageSrc = $(this).parents(".image-grid").find("img").attr("src");
    $(".js-modal-image").attr("src", imageSrc);
  });
})();

(function () {
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

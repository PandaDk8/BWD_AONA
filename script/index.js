

fetch ('./api/courses.json')
  .then (response => response.json())
  .then (data => {
    let courses = data.courses.sort ((courseA, courseB) => courseB.total_view - courseA.total_view).slice (0,5);
    let htmls = courses.map (course => {
      return hanldeHTMLCourse (course);
    });
    let html = htmls.join('');
    $(".courses-popular").append (html);
    $('.courses-popular').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
              centerMode: false,
              adaptiveHeight: true,
              slidesToShow: 1,
              variableWidth: false,
          }
        }
      ]
    });
  })
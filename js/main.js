let mobileMenu = document.querySelector("#mobile-menu");
let hamburger = document.querySelector("#hamburger");
let closeBtn = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
  } else {
    hamburger.classList.add("active");
  }
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  hamburger.classList.remove("active");
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json"
  ).then((response) => response.json());

  // Prepare demo data. The data is joined to map using value of 'hc-key'
  // property by default. See API docs for 'joinBy' for more info on linking
  // data and map.
  const data = [
    ["uz-fa", 10],
    ["uz-tk", 11],
    ["uz-an", 12],
    ["uz-ng", 13],
    ["uz-ji", 14],
    ["uz-si", 15],
    ["uz-ta", 16],
    ["uz-bu", 17],
    ["uz-kh", 18],
    ["uz-qr", 19],
    ["uz-nw", 20],
    ["uz-sa", 21],
    ["uz-qa", 22],
    ["uz-su", 23],
  ];

  // Create the chart
  Highcharts.mapChart("uzb-map", {
    chart: {
      map: topology,
    },

    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 0,
      stops: [[0, "#5F8BBE"]],
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        data: data,
        name: "Hudud",
        states: {
          hover: {
            color: "#8CBFFC",
            borderColor: "white",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });
})();

// import all images from assets/images directory

import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Toyota",
    rating: 112,
    carName: "Toyota Etios 2016",
    imgUrl:"https://zoomcar-assets.zoomcar.com/445080/HostCarImage/host_car_image_445080b1bf2860-f638-40cb-b619-cc350b227230.jpg20231030-55-yincnx",
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Maruti",
    rating: 102,
    carName: "Maruti Suzuki Wagon R 2022",
    imgUrl: "https://zoomcar-assets.zoomcar.com/600665/HostCarImage/host_car_image_6006654f4d5d1c-3b65-4991-8fe0-e6335b2705b2.jpg20240402-36-1qcgm0x",
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "Maruti",
    rating: 132,
    carName: "Maruti Suzuki Swift 2019",
    imgUrl: "https://zoomcar-assets.zoomcar.com/724371/HostCarImage/host_car_image_724371a4746d51-efca-4fc2-8477-67627da90203.jpg20240804-34-1wlodon",
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Hyundai",
    rating: 102,
    carName: "Hyundai Santro 2022",
    imgUrl: "https://zoomcar-assets.zoomcar.com/726585/HostCarImage/RackMultipart20240807-36-3shp5gf04a59e4-71c3-40ea-ad1e-a16f2407e5b3.jpg",
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Tata",
    rating: 94,
    carName: "Tata Tiago 2020",
    imgUrl: "https://zoomcar-assets.zoomcar.com/728529/HostCarImage/RackMultipart20240808-37-m2fk4i92db8a1f-b72a-4d01-bc71-7e8355ce937d.jpg",
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Ford",
    rating: 119,
    carName: "Ford Figo 2016",
    imgUrl: "https://zoomcar-assets.zoomcar.com/719741/HostCarImage/RackMultipart20240727-34-1ngxe6v1ed9b587-e5db-4c9b-949e-8fe6deeacf6b.jpg",
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Tata",
    rating: 82,
    carName: "Tata ALTROZ 2020",
    imgUrl: "https://zoomcar-assets.zoomcar.com/720000/HostCarImage/RackMultipart20240730-37-1wumnema5e8b13b-b182-4da3-82ab-1973d0f80ba0.jpg",
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Renault",
    rating: 52,
    carName: "Renault Triber 2022",
    imgUrl: "https://zoomcar-assets.zoomcar.com/653421/HostCarImage/host_car_image_653421d25afaae-705c-47f2-83cf-b317e5a3cf33.jpg20240518-30-hzq5wy",
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
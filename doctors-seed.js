(function() {
  var doctors, i, j, lat_min, lat_range, lon_min, lon_range;

  doctors = [
    {
      id: 1,
      name: "Emily Johnson",
      description: "Description text about Emily Johnson and her services!",
      imageURL: "/images/female-practitioner-s-11-440x440.jpg",
      coords: {
        lat: 39.1576,
        lon: -77.58
      }
    }, {
      id: 2,
      name: "Michael Weston",
      description: "Description text about Michael Weston and his services.",
      imageURL: "/images/male-doctor-440x440.jpg",
      coords: {
        lat: 39.1429,
        lon: -77.575
      }
    }, {
      id: 3,
      name: "Larry Williams",
      description: "Description text about Larry Williams and his services.",
      imageURL: "/images/smiling-doctor-with-chin-on-hand-s-440x440.jpg",
      coords: {
        lat: 39.1350,
        lon: -77.57
      }
    }, {
      id: 4,
      name: "Nowell Brennan",
      description: "Description text about Nowell Brennan and his services.",
      imageURL: "/images/successful-physician-s-2-440x440.jpg",
      coords: {
        lat: 39.1271,
        lon: -77.565
      }
    }, {
      id: 5,
      name: "Pete Hubert",
      description: "Description text about Pete Hubert and his services.",
      imageURL: "/images/female-practitioner-s-11-440x440.jpg",
      coords: {
        lat: 39.1192,
        lon: -77.56
      }
    }, {
      id: 6,
      name: "Hank Lindsey",
      description: "Description text about Hank Lindsey and his services.",
      imageURL: "/images/male-doctor-440x440.jpg",
      coords: {
        lat: 39.1113,
        lon: -77.555
      }
    }, {
      id: 7,
      name: "Averill Theodore",
      description: "Description text about Averill Theodore and his services.",
      imageURL: "/images/smiling-doctor-with-chin-on-hand-s-440x440.jpg",
      coords: {
        lat: 39.1034,
        lon: -77.55
      }
    }, {
      id: 8,
      name: "Meredith Humbert",
      description: "Description text about Meredith Humbert and his services.",
      imageURL: "/images/successful-physician-s-2-440x440.jpg",
      coords: {
        lat: 39.0937,
        lon: -77.545
      }
    }, {
      id: 9,
      name: "Jennifer Maling",
      description: "Description text about Jennifer Maling and her services.",
      imageURL: "/images/female-practitioner-s-11-440x440.jpg",
      coords: {
        lat: 39.0858,
        lon: -77.54
      }
    }, {
      id: 10,
      name: "Theodore Gregory",
      description: "Description text about Theodore Gregory and his services.",
      imageURL: "/images/male-doctor-440x440.jpg",
      coords: {
        lat: 39.0779,
        lon: -77.535
      }
    }, {
      id: 11,
      name: "Theodore Gregory",
      description: "Description text about Theodore Gregory and his services.",
      imageURL: "/images/male-doctor-440x440.jpg",
      coords: {
        lat: 39.07,
        lon: -77.53
      }
    }
  ];

  lat_min = 39.07;

  lat_range = 39.1576 - lat_min;

  lon_min = -77.53;

  lon_range = -77.58 - lon_min;

  for (i = j = 1; j < 11; i = j += 1) {
    doctors[i].coords.lat = lat_min + Math.random() * lat_range;
    doctors[i].coords.lon = lon_min + Math.random() * lon_range;
  }

  module.exports = doctors;

}).call(this);

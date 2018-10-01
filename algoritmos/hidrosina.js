var gasolineras = [];

$(document).ready(function () {
  peticion();
});

function peticion() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/cesarcano/hg-data/master/Gasolineras/hidrosina-data.json",
    dataType: "JSON",
    success: function (response) {
      res = response.stations;
      res.forEach(element => {
        createHGjson(element);
      });
    }
  });
}
function createHGjson(json_item) {
  let hg_gas = {
    "direccion" : "",
    "lat" : "",
    "lng" : "",
    "marca" : "HIDROSINA"
  } 
  hg_gas.lat = json_item.latitud;
  hg_gas.lng = json_item.longitud;
  hg_gas.direccion = json_item.calle;

  print(hg_gas);
}
function print(json_data) {
  $("#textarea").append(JSON.stringify(json_data));
}
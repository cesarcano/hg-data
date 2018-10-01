var gasolineras = [];

$(document).ready(function () {
  peticion();
});

function peticion() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/cesarcano/hg-data/master/Gasolineras/g500-data(1).json",
    dataType: "JSON",
    success: function (response) {
      response.forEach(element => {
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
    "marca" : "G500"
  } 
  hg_gas.lat = json_item.lat;
  hg_gas.lng = json_item.lng;
  hg_gas.direccion = json_item.calle;

  print(hg_gas);
}
function print(json_data) {
  $("#textarea").append(JSON.stringify(json_data));
}
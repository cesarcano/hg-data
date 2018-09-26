var gasolineras = [];

$(document).ready(function () {
  peticion();
});

function peticion() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/cesarcano/hg-data/master/Gasolineras/shell-data.json",
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
    "marca" : "Shell"
  } 
  let lat = json_item.lat;
  hg_gas.lat = lat.toFixed(4);
  hg_gas.lng = json_item.lng;
  hg_gas.direccion = json_item.address1

  print(hg_gas);
}
function print(json_data) {
  $("#textarea").append(JSON.stringify(json_data));
}
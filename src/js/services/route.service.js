angular.module('planscape').service('RouteService', function($q, $http, localStorageService) {


  /** ******************static variables for form******************** */
  var usStates = [
      { name: 'ALABAMA', abbreviation: 'AL'},
      { name: 'ALASKA', abbreviation: 'AK'},
      { name: 'ARIZONA', abbreviation: 'AZ'},
      { name: 'ARKANSAS', abbreviation: 'AR'},
      { name: 'CALIFORNIA', abbreviation: 'CA'},
      { name: 'COLORADO', abbreviation: 'CO'},
      { name: 'CONNECTICUT', abbreviation: 'CT'},
      { name: 'DELAWARE', abbreviation: 'DE'},
      { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
      { name: 'FLORIDA', abbreviation: 'FL'},
      { name: 'GEORGIA', abbreviation: 'GA'},
      { name: 'HAWAII', abbreviation: 'HI'},
      { name: 'IDAHO', abbreviation: 'ID'},
      { name: 'ILLINOIS', abbreviation: 'IL'},
      { name: 'INDIANA', abbreviation: 'IN'},
      { name: 'IOWA', abbreviation: 'IA'},
      { name: 'KANSAS', abbreviation: 'KS'},
      { name: 'KENTUCKY', abbreviation: 'KY'},
      { name: 'LOUISIANA', abbreviation: 'LA'},
      { name: 'MAINE', abbreviation: 'ME'},
      { name: 'MARYLAND', abbreviation: 'MD'},
      { name: 'MASSACHUSETTS', abbreviation: 'MA'},
      { name: 'MICHIGAN', abbreviation: 'MI'},
      { name: 'MINNESOTA', abbreviation: 'MN'},
      { name: 'MISSISSIPPI', abbreviation: 'MS'},
      { name: 'MISSOURI', abbreviation: 'MO'},
      { name: 'MONTANA', abbreviation: 'MT'},
      { name: 'NEBRASKA', abbreviation: 'NE'},
      { name: 'NEVADA', abbreviation: 'NV'},
      { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
      { name: 'NEW JERSEY', abbreviation: 'NJ'},
      { name: 'NEW MEXICO', abbreviation: 'NM'},
      { name: 'NEW YORK', abbreviation: 'NY'},
      { name: 'NORTH CAROLINA', abbreviation: 'NC'},
      { name: 'NORTH DAKOTA', abbreviation: 'ND'},
      { name: 'OHIO', abbreviation: 'OH'},
      { name: 'OKLAHOMA', abbreviation: 'OK'},
      { name: 'OREGON', abbreviation: 'OR'},
      { name: 'PENNSYLVANIA', abbreviation: 'PA'},
      { name: 'PUERTO RICO', abbreviation: 'PR'},
      { name: 'RHODE ISLAND', abbreviation: 'RI'},
      { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
      { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
      { name: 'TENNESSEE', abbreviation: 'TN'},
      { name: 'TEXAS', abbreviation: 'TX'},
      { name: 'UTAH', abbreviation: 'UT'},
      { name: 'VERMONT', abbreviation: 'VT'},
      { name: 'VIRGINIA', abbreviation: 'VA'},
      { name: 'WASHINGTON', abbreviation: 'WA'},
      { name: 'WEST VIRGINIA', abbreviation: 'WV'},
      { name: 'WISCONSIN', abbreviation: 'WI'},
      { name: 'WYOMING', abbreviation: 'WY' }
  ];


  /** ******************local storage functions******************** */

  function getRoutes() {
    return localStorageService.get('Routes') || [];
  }

  function setRoutes(routes) {
    localStorageService.set('Routes', routes);
  }


  /** ******************data api functions******************** */

// this.getAllLocations = function() {
//         $http({
//             method: 'GET',
//             url: 'https://shielded-atoll-99970.herokuapp.com/'
//         }).then(function successCallback(response) {
//             console.log(response.data);
//             return response.data;
//         }, function errorCallback(response) {
//             console.log("OH NO! ERROR: " + response);
//         });
//
//     };

function getAllLocations($scope) {
        $http({
            method: 'GET',
            url: 'https://shielded-atoll-99970.herokuapp.com/'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.allLocations = response.data;
        }, function errorCallback(response) {
            console.log("OH NO! ERROR: " + response);
        });

    }







    function addLocation(locationObj) {

        $http({
            method: 'POST',
            url: 'https://shielded-atoll-99970.herokuapp.com/',
            data: locationObj
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            console.log("OH NO! UNABLE TO ADD TO DB: " + response);
        });
    }




  /** ******************SERVICE RETURNS THIS OBJECT******************** */

return {

      states: usStates,
      getLocations: getAllLocations,
      addLocation: addLocation,

      get: getRoutes,
      set: setRoutes

};





});


export default function config(stateprovider, routeProvider){
	routeProvider.otherwise('loginNav');


}
config.$inject=['$stateProvider', '$urlRouterProvider'];

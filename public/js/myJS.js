function init()
{
    map = new longdo.Map({
	  placeholder: document.getElementById('map')
	});
	map.Route.placeholder(document.getElementById('result'));
	map.Route.add(new longdo.Marker({ lon: 100.53908184170723, lat: 13.74667374877254 },
		{ 
			title: 'Central World', 
			detail: 'I\'m here' 
		}
	));
	map.Route.add(new longdo.Marker({ lon: 100.53740411996841, lat: 13.805176739896954 },
		{ 
			title: 'SCG Bangsue'
		}
	));
	map.Route.search();
}

function doNothing(){}
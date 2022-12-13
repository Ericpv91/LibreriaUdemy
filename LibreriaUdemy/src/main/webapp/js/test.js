$(document).ready(function(){
	

	comunicacion().then(function(){
			console.log("La aplicacion web sigue su ejecucion");
	})
	
});

async function comunicacion(){
		await $.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletTest",
			data: $.param({
				usuario:"miguel",
				tecnologia:"java"
			}),
			succes: function(data){
				let parsedData = JSON.parse(data);
				console.log(parsedData[1]["autor"]);
			}
		})
}
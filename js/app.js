/*Api-key AIzaSyBDyHyNnTNK0VYCDK2lvF_Vfxkas4AHfl8*/

var test1 = 'global';

$(function(){
	var test2 = 'document-ready';
	$('form').on('submit', function(event){
		event.preventDefault();
		var userSearch = $('#search').val();
		getRequest(userSearch);
	});

  function getRequest(searchTerm){
  	var test4 = 'get-request';
  	var params={
  		part: 'snippet',
  		key: 'AIzaSyBDyHyNnTNK0VYCDK2lvF_Vfxkas4AHfl8',
  		q:searchTerm
  	};

  	var url = 'https://www.googleapis.com/youtube/v3/search';
  	
  	    $.getJSON(url, params, function(data, status, xhr){
  		getResults(data.items);
  	
  		//console.log(status, data.items, xhr);
  		
  		});
  		console.log("ajax complete");
  }

  function getResults(results){
  		var local = $('.titles');
  		$.each(results, function(index, value){
  			console.log(value.snippet.thumbnails.high.url);
  		//local.append('<h2>' +value.snippet.thumbnails.high+ '<h2>');
  	});
  };
});
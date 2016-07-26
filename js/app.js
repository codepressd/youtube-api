/*Api-key AIzaSyBDyHyNnTNK0VYCDK2lvF_Vfxkas4AHfl8*/

$(function(){

	$('form').on('submit', function(event){
		event.preventDefault();
		var userSearch = $('#search').val();
		getRequest(userSearch);
	});

  function getRequest(searchTerm){

  	var params={
  		part: 'snippet',
  		key: 'AIzaSyBDyHyNnTNK0VYCDK2lvF_Vfxkas4AHfl8',
  		maxResults: 10,
  		q:searchTerm
  	};

  	var url = 'https://www.googleapis.com/youtube/v3/search';
  	
  	    $.getJSON(url, params, function(data, status, xhr){
  		getResults(data.items);
  	
  		console.log(data.items);
  		
  		});

  }

  function getResults(results){
  		var thumbArea = $('.thumbs');
  		$.each(results, function(index, value){
  		thumbArea.append('<li><a href='+'"'+'https://www.youtube.com/watch?v='+ value.id.videoId +'"'+'><img src='+'"'+value.snippet.thumbnails.medium.url+'"'+'></a></li>');
  	});
  };
});
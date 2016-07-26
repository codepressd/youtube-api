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
  		q:searchTerm
  	};

  	var url = 'https://www.googleapis.com/youtube/v3/search';
  	
  	    $.getJSON(url, params, function(data, status, xhr){
  		getResults(data.items);
  	
  		//console.log(status, data.items, xhr);
  		
  		});

  }

  function getResults(results){
  		var thumbArea = $('.thumbs');
  		$.each(results, function(index, value){
  		thumbArea.append('<li><img src='+'"'+value.snippet.thumbnails.medium.url+'"'+'></li>');
  	});
  };
});
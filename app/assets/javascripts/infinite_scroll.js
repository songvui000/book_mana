$(document).on('turbolinks:load', function () {
	  $(window).on('scroll', function(){
	    more_posts_url = $('.pagination .next_page a').attr('href');
	    if ( $(window).scrollTop() > $(document).height() - $(window).height() - 100) {
	      $('.pagination').html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />');
	      $.ajax({
	      	url: '/',
	      	type: 'GET',
	      	dataType: 'JSON',
	      	data: {page: i},
	      })
	      .done(function() {
	      	console.log("success");
	      })
	      .fail(function() {
	      	console.log("error");
	      })
	      .always(function() {
	      	console.log("complete");
	      });
	      
	    }
	  });
	});


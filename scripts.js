$(function($){
	$(document).ready(function() {	
		$('.scrolltotop').click(function(){
			$('html').animate({'scrollTop' : '0px'}, 400);
		});
		
		$(window).scroll(function(){
			var upto = $(window).scrollTop();
			if(upto > 500) {
				$('.scrolltotop').fadeIn();
			} else {
				$('.scrolltotop').fadeOut();
			}
		});
		$('.hamburger span i').click(function(){
        	$(this).toggleClass('fa-times')
        });

		$(".mobile-menu-item ul li a ").click(function (){
			$(this).next().slideToggle();

		});

		$(".hamburger span i").click(function (){
			$(".mobile-menu-area").toggleClass('ac-menu');
			$('body').toggleClass('body-overflows');
		});		

		var imageSources = {
			'pork-anime.png': 'pork.png',
			'Squirrel-Fish-Anime.png': 'Squirrel-Fish.png',
			'egg-anime.png': 'egg.png',
			'onigiri-anime.png': 'onigiri.png'
		};
		
		$('.trending-left-img-item img').hover(
			function () {
				var originalSrc = $(this).attr('src');
				var hoverSrc = imageSources[originalSrc];
				$(this).attr('src', hoverSrc);
			},
			function () {
				// Revert to the original source when the mouse leaves
				var originalSrc = $(this).attr('src');
				var originalImageSrc = Object.keys(imageSources).find(key => imageSources[key] === originalSrc);
				$(this).attr('src', originalImageSrc);
			}
		);

	});

	const pollOptions = {
		Yes: 12,
		No: 24,
	};
	
	
	let selectedOption = null;

// Event listener for option selection
$('input[name="radioname"]').on('change', function () {
    const newOption = $(this).val();

    if (selectedOption !== newOption) {
        // If the user is changing their vote, update counts
        if (selectedOption) {
            pollOptions[selectedOption]--;
        }
        pollOptions[newOption]++;

        // Update poll results
        updatePollResults();

        // Update the selected option
        selectedOption = newOption;
    }
});

// Function to update and display poll results
function updatePollResults() {
    const resultsElement = $('#poll-result');
    resultsElement.css('display', 'block');

    let resultsHTML = '<h3>Poll Result</h3>';
    for (const option in pollOptions) {
        resultsHTML += `${option}: ${pollOptions[option]} votes<br>`;
    }

    resultsElement.html(resultsHTML);
}

// Check if the user has already voted and display results if they have
if (selectedOption) {
    updatePollResults();
}
	
	




});
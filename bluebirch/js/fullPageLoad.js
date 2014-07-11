$(document).ready(function() {
			$('#fullpage').fullpage({
				slidesColor: ['#3F729B', '#3F729B', '#758fd9', '#758fd9', '#758fd9'],
				anchors: ['LINK1', 'LINK2', 'LINK3', 'LINK4', 'LINK5'],
				menu: '#menu',
				loopTop: false,
				loopBottom: true,
				verticalCentered: true,
        resize : true,
        scrollingSpeed: 900,
				slidesNavigation: true,
        slidesNavPosition: 'top',
        slidesNavigationTooltips: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
			});
		});
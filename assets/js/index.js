$(document).ready(() => {
    const quotes = $('.quotes h1');
    const infos = $('.info p'); // Targeting all <p> tags within .info
    const photos = $('.front-img .overlay');
    let currentIndex = 0;

    // Initially set all to hidden and only the first element in each group to active
    quotes.addClass('hidden').eq(0).removeClass('hidden').addClass('active').show();
    infos.addClass('hidden').eq(0).removeClass('hidden').addClass('active').show();
    infos.eq(1).removeClass('hidden').addClass('active').show(); // Assume 2 active <p> at start
    photos.addClass('hidden').eq(0).removeClass('hidden').addClass('active').show();

    $('.next').click(function() {
        changeActiveItem(currentIndex + 1); // Increment index for next
    });

    $('.previous').click(function() {
        changeActiveItem(currentIndex - 1); // Decrement index for previous
    });

    function changeActiveItem(newIndex) {
        newIndex = newIndex % quotes.length; // Ensure wrap-around for all elements based on quotes length

        // Manage transitions by toggling classes for all groups
        quotes.eq(currentIndex).removeClass('active').addClass('hidden').hide();
        infos.filter('.active').removeClass('active').addClass('hidden').hide(); // Target only active infos
        photos.eq(currentIndex).removeClass('active').addClass('hidden').hide();

        quotes.eq(newIndex).removeClass('hidden').addClass('active').show();
        infos.eq(newIndex * 2 % infos.length).removeClass('hidden').addClass('active').show(); // Show next pair of <p>, assuming 2 per group
        infos.eq((newIndex * 2 + 1) % infos.length).removeClass('hidden').addClass('active').show();
        photos.eq(newIndex).removeClass('hidden').addClass('active').show();

        currentIndex = newIndex; // Update current index
    }
});



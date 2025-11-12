$(document).ready(function () {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    $('#menu-toggle').click(function () {
        $('#mobile-menu').slideToggle();
    });

    $("#menu-btn").click(function () {
        $("#mobile-menu").slideToggle();
    });

    // Language toggle
    let isEnglish = true;
    $('.lang-toggle').click(function () {
        isEnglish = !isEnglish;

        $('#hero-title').text(isEnglish ? 'Serving Humanity with Compassion' : 'মানবতার সেবায় নিবেদিত');
        $('#hero-subtitle').text(isEnglish ? 'মানবতার সেবায় নিবেদিত' : 'Serving Humanity with Compassion');
        $('#about-title').text(isEnglish ? 'About Us' : 'আমাদের সম্পর্কে');
        $('#about-text').text(isEnglish ?
            'Erfan Ali Srimiti Foundation is dedicated to serving humanity through various welfare projects, empowering communities, and creating a positive impact in society.' :
            'এরফান আলী স্মৃতি ফাউন্ডেশন বিভিন্ন কল্যাণ প্রকল্পের মাধ্যমে মানবতার সেবায় নিবেদিত, সম্প্রদায়কে ক্ষমতায়িত করে এবং সমাজে ইতিবাচক প্রভাব তৈরি করে।'
        );
    });

    const images = [
        'Images/img3.jpg',
        'Images/img4.png',
        'Images/img5.jpg',
        'Images/img6.png'
    ];
    let current = 0;

    setInterval(function () {
        current = (current + 1) % images.length;
        $('.hero-bg').css('background-image', 'url(' + images[current] + ')');
    }, 2000); // Every 10 seconds

});

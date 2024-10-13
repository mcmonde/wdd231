document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('navMenu');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const currentYear = document.getElementById('currentYear');
    const lastModifiedDate = document.getElementById('lastModified');

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Update current year and last modified date
    currentYear.textContent = new Date().getFullYear();
    lastModifiedDate.textContent = new Date(document.lastModified);

    // Destinations data
    const destinations = [
        {
            name: "Eden Nature Park",
            place: "Toril, Davao City",
            type: "Parks and Gardens",
            imageUrl: "https://www.edennaturepark.com.ph/wp-content/uploads/2017/02/eden-logo.png"
        },
        {
            name: "People's Park",
            place: "Palma Gil Street, Davao City",
            type: "Parks and Gardens",
            imageUrl: "https://th.bing.com/th/id/R.e6dc30de6d4e31394baa048a1bad291f?rik=6nELPi%2bwhR53Ow&riu=http%3a%2f%2fwww.phtourguide.com%2fwp-content%2fuploads%2f2011%2f06%2fPeoples-Park.jpg&ehk=HJOja6gs8K3JGTTOHa41NBRbhPMVKUYD2NRREQwhgis%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Davao Butterfly House",
            place: "Barangay Catalunan Grande, Davao City",
            type: "Parks and Gardens",
            imageUrl: "https://th.bing.com/th/id/R.d7721c1f31a4c0a64d074ee17a00caed?rik=b1i20wR0YEkzlA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WUzUj3dCLmY%2fTl2RJSVAoAI%2fAAAAAAAACSY%2f6vXHGExPdiE%2fs640%2fbutterfly%2bhouse.jpg&ehk=xc8fsVOySi41S8zjJxXJR0WiT4n9H0LXCBH%2fcUK40iE%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Philippine Eagle Center",
            place: "Calinan, Davao City",
            type: "Wildlife Centers",
            imageUrl: "https://i.ytimg.com/vi/70ahXhXFJ2I/maxresdefault.jpg"
        },
        {
            name: "Davao Crocodile Park",
            place: "Barangay Woodland, Davao City",
            type: "Wildlife Centers",
            imageUrl: "https://3.bp.blogspot.com/_FwhlyJ47SlI/TLLLSS-ql4I/AAAAAAAAAIw/-hYBIUEwK9E/s1600/bl1.jpg"
        },
        {
            name: "Mount Apo",
            place: "between Davao City, Davao del Sur, and North Cotabato",
            type: "Mountains and Hills",
            imageUrl: "https://th.bing.com/th/id/R.4c4a83587a16be18fe2bdf376a5baf75?rik=dDAvh9Dq9VaQdw&pid=ImgRaw&r=0"
        },
        {
            name: "Mount Talomo",
            place: "Talomo, Davao City",
            type: "Mountains and Hills",
            imageUrl: "https://th.bing.com/th/id/R.5fe53433cdce65ae43450835e7fa87ae?rik=DByhUs3XM7yyBA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-9x2iOmRZiSw%2fTwVcEJ2K2AI%2fAAAAAAAAF5Y%2fSlFYz3UpKko%2fs1600%2f102_0048.JPG&ehk=qFiPM%2byyYmvAil9FCDWAhphWFJx1EexcUpJxPErwHtA%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Samal Island",
            place: "Samal City",
            type: "Beaches and Coastal Areas",
            imageUrl: "https://3.bp.blogspot.com/-4czNNwZNpsw/WC6L_KZjswI/AAAAAAAAAPY/xfQh-tyjAPU_lXuSLGRJXa6r2htFN0_xwCLcB/s1600/Samal-Island%2Bby%2Bmindanaotoursdotcom.jpg"
        },
        {
            name: "Talicud Island",
            place: "Talicud, Samal City",
            type: "Beaches and Coastal Areas",
            imageUrl: "https://th.bing.com/th/id/R.e0b8d74fedbfd1062d9f8e6874cd0274?rik=Zq4LUit5RESS3g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-ZfuSuq_Me9E%2fUZXLZp_LfPI%2fAAAAAAAAGOc%2fAXwY801oDYs%2fs1600%2fIMG_0420c.jpg&ehk=8r2POCmLM1MjIBs464sOXuCS%2ffQDZdEN5cQ8EwnDhzg%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Hagimit Falls",
            place: "Hagimit, Samal City",
            type: "Waterfalls and Rivers",
            imageUrl: "https://th.bing.com/th/id/R.8607a46119549ce53b973693125cca74?rik=yVcmrjvJxh95JQ&riu=http%3a%2f%2fwww.traveltothephilippines.info%2fwp-content%2fuploads%2f2019%2f08%2fDavao-del-Norte-Hagimit-Falls7-1.jpg&ehk=9B11%2bjPG5uT4PFZLFK87a0AM6%2bmHFvC4ZQcf7kVevHw%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            name: "Tamugan River",
            place: "Tamugan, Davao City",
            type: "Waterfalls and Rivers",
            imageUrl: "https://edgedavao.net/wp-content/uploads/2017/03/Tamugan-River_Apo-Agua-Infra.jpg"
        },
    ];

    const destinationSelect = document.getElementById('destination');
    const destinationTypeFilter = document.getElementById('destinationType');
    const destinationContainer = document.getElementById('destinationContainer');

    // Function to create a destination card
    function createDestinationCard(destination) {
        return `
            <div class="destination-card">
                <img src="${destination.imageUrl}" alt="${destination.name}">
                <div class="details">
                    <h3>${destination.name}</h3>
                    <p>Location: ${destination.place}</p>
                    <p>Type: ${destination.type}</p>
                </div>
            </div>
        `;
    }

    // Populate destination dropdown
    if (destinationSelect) {
        destinations.forEach(destination => {
            const option = document.createElement('option');
            option.value = destination.name;
            option.textContent = destination.name;
            destinationSelect.appendChild(option);
        });
    }

    // Display destinations
    function displayDestinations() {
        if (destinationTypeFilter) {
            const selectedType = destinationTypeFilter.value;
            const filteredDestinations = selectedType === 'all'
                ? destinations
                : destinations.filter(destination => destination.type === selectedType);
            if (destinationContainer) {
                destinationContainer.innerHTML = filteredDestinations.map(createDestinationCard).join('');
            }
        }
    }

    // Initialize carousel
    function initializeCarousel() {
        const carouselInner = document.querySelector('.carousel-inner');
        if (carouselInner) {
            carouselInner.innerHTML = destinations.map(destination => `
                <div class="carousel-item">
                    <img src="${destination.imageUrl}" alt="${destination.name}">
                </div>
            `).join('');
            updateCarousel();
        }
    }

    // Update carousel display
    let slideIndex = 0;

    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        const totalSlides = items.length;
        if (totalSlides === 0) return;

        if (slideIndex >= totalSlides) slideIndex = 0;
        if (slideIndex < 0) slideIndex = totalSlides - 1;

        const offset = -slideIndex * 100;
        const carouselInner = document.querySelector('.carousel-inner');
        if (carouselInner) {
            carouselInner.style.transform = `translateX(${offset}%)`;
        }
    }

    // Carousel controls
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');

    if (prevSlide) {
        prevSlide.addEventListener('click', function() {
            slideIndex--;
            updateCarousel();
        });
    }

    if (nextSlide) {
        nextSlide.addEventListener('click', function() {
            slideIndex++;
            updateCarousel();
        });
    }

    // Initial display and setup
    displayDestinations();
    initializeCarousel();

    // Additional logic for filter highlight and other features
    if (destinationTypeFilter) {
        destinationTypeFilter.addEventListener('change', function() {
            destinationTypeFilter.classList.add('option-highlight');
            setTimeout(() => destinationTypeFilter.classList.remove('option-highlight'), 300);
            displayDestinations();
        });
    }

    const visitsElement = document.querySelector(".numberOfTimes");
    let numberOfVisits = Number(localStorage.getItem("visit-times")) || 0;

    if (numberOfVisits > 0) {
        visitsElement.textContent = `You have visited this site ${numberOfVisits} times.`;
    } else {
        visitsElement.textContent = `This is your first visit. Welcome!`;
    }

    numberOfVisits++;
    localStorage.setItem("visit-times", numberOfVisits);
});

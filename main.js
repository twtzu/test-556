function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;

    reveals.forEach(function(reveal) {
        var elementTop = reveal.getBoundingClientRect().top;
        var elementBottom = reveal.getBoundingClientRect().bottom;

        if (elementTop < windowHeight && elementBottom >= 0) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}

function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2");
    var windowHeight = window.innerHeight;

    reveals2.forEach(function(reveal) {
        var elementTop = reveal.getBoundingClientRect().top;
        var elementBottom = reveal.getBoundingClientRect().bottom;

        if (elementTop < windowHeight && elementBottom >= 0) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);
document.addEventListener("DOMContentLoaded", reveal);
window.addEventListener("scroll", reveal2);
window.addEventListener("resize", reveal2);
document.addEventListener("DOMContentLoaded", reveal2);



console.log("Inline script is loaded!");
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";

        document.querySelector(".main-content").style.display = "block";
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel1 = new bootstrap.Carousel(document.getElementById('carousel1'));
    const carousel2 = new bootstrap.Carousel(document.getElementById('carousel2'));

    carousel1._element.addEventListener('slide.bs.carousel', function(event) {
        const slideIndex = event.to;
        carousel2.to(slideIndex);
    });
});

$(document).ready(function() {
    showFoodMenu();

    $(".switch-minuman").click(function() {
        if ($(this).text() === "Minuman") {
            showBeverageMenu();
            $(this).text("Makanan");
        } else {
            showFoodMenu();
            $(this).text("Minuman");
        }
    });

    function showFoodMenu() {
        $(".carousel-indicators.product-label").html(`
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="list-menu active" aria-current="true" aria-label="Slide 1">Ayam Geprek</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="list-menu" aria-label="Slide 2">Lele Goreng<span></span></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="list-menu" aria-label="Slide 3">Gurame Bakar</button>
        <button type="button" data-bs-target="#carouselExampleIndicat b bnnnnnnnnnnnvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvors" data-bs-slide-to="3" class="list-menu" aria-label="Slide 4">Placeholder 1</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="list-menu" aria-label="Slide 5">Placeholder 2</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" class="list-menu" aria-label="Slide 6">Placeholder 3</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" class="list-menu" aria-label="Slide 7">Placeholder 4</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" class="list-menu" aria-label="Slide 8">Placeholder 5</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" class="list-menu" aria-label="Slide 9">Placeholder 6</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" class="list-menu" aria-label="Slide 10">Placeholder 7</button>
        `);

        $(".carousel-inner.product-content").html(`
        <div class="carousel-item product-item active">
        <div class="image-product">
            <img src="img/1.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Ayam Geprek</h2>
            <p><strong>Harga: </strong>Rp. 15.000</p>
            <p><strong>Pendamping: </strong>Sambal, aneka sayur</p>
            <p>Ayam Geprek kami adalah sajian yang memuaskan untuk para pencinta pedas yang mencari petualangan rasa yang menggembirakan di tiap tingkatan pedasnya.</p>
        </div>
    </div>
    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/5.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Lele Goreng</h2>
            <p><strong>Harga: </strong>Rp. 15.000</p>
            <p><strong>Pendamping: </strong>Sambal, aneka sayur</p>
            <p>Lele Goreng yang digoreng langsung saat dipesan memastikan kesegaran di tiap penyajiannya, ditemani dengan lalapan dan sambal yang semakin menambah kenikmatan.</p>
        </div>
    </div>
    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/4.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Gurame Bakar</h2>
            <p><strong>Harga: </strong>Rp. 25.000</p>
            <p><strong>Pendamping: </strong>Sambal, aneka sayur</p>
            <p>Gurame Bakar yang dikembangbiakkan oleh restoran kami sendiri dari bibit sampai besar untuk memastikan kualitasnya, disajikan saat masih hangat semakin menambah nafsu makan</p>
        </div>
    </div>
    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder1.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 1</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 1.</p>
        </div>
    </div>

    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder2.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 2</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 2.</p>
        </div>
    </div>

    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder3.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 3</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 3.</p>
        </div>
    </div>

    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder4.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 4</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 4.</p>
        </div>
    </div>

    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder5.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 5</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 5.</p>
        </div>
    </div>

    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder6.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 6</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 6.</p>
        </div>
    </div>

    <div class="carousel-item product-item">
        <div class="image-product">
            <img src="img/placeholder7.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
            <h2>Placeholder 7</h2>
            <p><strong>Harga: </strong>Rp. 0</p>
            <p><strong>Pendamping:  </strong>-</p>
            <p>This is a placeholder description for item 7.</p>
        </div>
    </div>

        `);
    }

    function showBeverageMenu() {
        $(".carousel-indicators.product-label").html(`
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="list-menu active" aria-current="true" aria-label="Slide 1">Teh</button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="list-menu" aria-label="Slide 2">Kopi</button>
        `);

        $(".carousel-inner.product-content").html(`
            <div class="carousel-item active">
                <div class="image-product">
                    <img src="img/6.jpg" alt="...">
                </div>
                <div class="carousel-caption info-product">
                    <h2>Teh</h2>
                    <p><strong>Harga: </strong>Rp. 15.000</p>
                    <p>Deskripsi Teh</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="image-product">
                    <img src="img/6.jpg" alt="...">
                </div>
                <div class="carousel-caption info-product">
                    <h2>Kopi</h2>
                    <p><strong>Harga: </strong>Rp. 15.000</p>
                    <p>Deskripsi Kopi</p>
                </div>
            </div>
        `);
    }
});

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlzYWRld2EiLCJhIjoiY2xuaHVrM3FjMGxtdzJsbzlhYmR6aDZmbiJ9.6TsLmUc1BMq-dd5gEoxpPg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [115.225019, -8.654076],
    zoom: 14
});

var branch1Coords = [115.225019, -8.654076];
var branch2Coords = [112.6338, -7.9675];

var branch1Marker = createMarker(branch1Coords, 'Denpasar', 'Cabang Pertama');
var branch2Marker = createMarker(branch2Coords, 'Malang', 'Cabang Kedua');

function createMarker(coordinates, label, description) {
    var marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

    var popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${label}</h3><p>${description}</p>`);

    marker.setPopup(popup);
    popup.addTo(map);

    return marker;
}

document.getElementById('branch1').addEventListener('click', function() {
    console.log('Branch 1 clicked'); // Check if this log appears in the console
    map.flyTo({
        center: branch1Coords,
        zoom: 14
    });
});

document.getElementById('branch2').addEventListener('click', function() {
    console.log('Branch 2 clicked'); // Check if this log appears in the console
    map.flyTo({
        center: branch2Coords,
        zoom: 14
    });
});
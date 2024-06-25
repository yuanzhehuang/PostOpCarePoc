<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Operative Care - Home</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
        }
        .hero {
            background-image: url('https://via.placeholder.com/1920x1080');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-align: center;
        }
        .features, .testimonials, .contact-info {
            padding: 50px 0;
        }
    </style>
</head>
<body>

    <div id="navbar-container"></div>

    <div class="hero">
        <div class="hero-content">
            <h1>Welcome to Post Operative Care</h1>
            <p>We enable easy access to physician-provided instructions for patients.</p>
            <a href="contact.html" class="btn btn-primary">Contact Us</a>
        </div>
    </div>

    <div class="container features">
        <h2>Our Services</h2>
        <p>Highlight key services or features of your platform.</p>
    </div>

    <div class="container testimonials">
        <h2>Testimonials</h2>
        <p>Quotes from satisfied users or patients.</p>
    </div>

    <div class="container contact-info">
        <h2>Contact Information</h2>
        <p>Email: info@postopcare.com</p>
        <p>Phone: +1 234 567 890</p>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        // Load the navbar component
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;
                // Add active class to the current page link
                const currentPath = window.location.pathname.split('/').pop();
                const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === currentPath) {
                        link.classList.add('active');
                    }
                });
            });
    </script>
</body>
</html>

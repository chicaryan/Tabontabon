/* General styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f0f0;
    color: #333;
}

/* Header and navigation */
header {
    background-color: #001C30;
    color: #fff;
    padding: 1rem 0;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-img {
    height: 50px;
    margin-right: 1rem;
}

.nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.nav-links li {
    margin: 0 1rem;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    transition: color 0.3s ease;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #ff6347;
    transition: width 0.3s ease, right 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
    right: 0;
}

.nav-links a:hover {
    color: #ff6347;
}

/* Hero section */
.hero {
    background: url('bg-Tabon.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 5rem 0;
    background-size: cover; /* Ensures the image covers the entire screen */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents tiling */
    height: 100vh; /* Makes sure it covers the whole screen */
    margin: 0;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    transition: color 0.3s ease;
}

.hero-content .btn {
    background-color: #ff6347;
    color: #fff;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

/* About section */
.about {
    padding: 3rem 1rem;
    text-align: center;
    background-color: #497D74;
}

.about h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.about p {
    font-size: 1.25rem;
    line-height: 1.6;
}

/* Services section */
.services {
    background-color: #f4f4f4;
    padding: 3rem 1rem;
    text-align: center;
}

.services h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.service-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.card h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.card p {
    font-size: 1rem;
    line-height: 1.6;
}

/* Contact section */
.contact {
    padding: 3rem 1rem;
    text-align: center;
    background-color: #e0f7fa;
}

.contact h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.contact input, .contact textarea {
    width: 100%;
    max-width: 500px;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact button {
    background-color: #ff6347;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact button:hover {
    background-color: #ff4500;
}

/* Footer */
footer {
    background-color: #004d40;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
    }

    .nav-links li {
        margin: 0.5rem 0;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.25rem;
    }

    .service-cards {
        flex-direction: column;
        align-items: center;/* General styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f0f0;
    color: #333;
}

/* Header and navigation */
header {
    background-color: #001C30;
    color: #fff;
    padding: 1rem 0;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-img {
    height: 50px;
    width: 50px; /* Ensure the image is a square */
    margin-right: 1rem;
    border-radius: 50%;
    object-fit: cover; /* Ensure the image covers the entire circle */
}

.menu-button {
    display: none;
    background-color: #ff6347;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
}

.nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.nav-links li {
    margin: 0 1rem;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    position: relative;
    transition: color 0.3s ease;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #ff6347;
    transition: width 0.3s ease, right 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
    right: 0;
}

.nav-links a:hover {
    color: #ff6347;
}

/* Hero section */
.hero {
    background: url('bg-Tabon.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 5rem 0;
    background-size: cover; /* Ensures the image covers the entire screen */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents tiling */
    height: 100vh; /* Makes sure it covers the whole screen */
    margin: 0;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    transition: color 0.3s ease;
}

.hero-content .btn {
    background-color: #ff6347;
    color: #fff;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

/* About section */
.about {
    padding: 3rem 1rem;
    text-align: center;
    background-color: #497D74;
}

.about h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.about p {
    font-size: 1.25rem;
    line-height: 1.6;
}

/* Services section */
.services {
    background-color: #f4f4f4;
    padding: 3rem 1rem;
    text-align: center;
}

.services h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.service-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.card h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.card p {
    font-size: 1rem;
    line-height: 1.6;
}

/* Contact section */
.contact {
    padding: 3rem 1rem;
    text-align: center;
    background-color: #e0f7fa;
}

.contact h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.contact input, .contact textarea {
    width: 100%;
    max-width: 500px;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact button {
    background-color: #ff6347;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact button:hover {
    background-color: #ff4500;
}

/* Footer */
footer {
    background-color: #004d40;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .menu-button {
        display: block;
    }

    .nav-links {
        flex-direction: column;
        display: none;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        margin: 0.5rem 0;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.25rem;
    }

    .service-cards {
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 90%;
        margin-bottom: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .hero-content .btn {
        padding: 0.5rem 1rem;
    }
}
    }

    .card {
        width: 90%;
        margin-bottom: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .hero-content .btn {
        padding: 0.5rem 1rem;
    }
}
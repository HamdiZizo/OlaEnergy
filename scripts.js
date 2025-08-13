:root {
    --ola-yellow: #ffd700;
    --ola-teal: #00a99d;
    --dark-bg: #101010;
    --light-bg: #1a1a1a;
    --white: #ffffff;
    --text-grey: #bdbdbd;
    --font-primary: "Poppins", sans-serif;
    --font-arabic: "Cairo", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    font-family: var(--font-primary);
    background-color: var(--dark-bg);
    color: var(--white);
    line-height: 1.8;
    overflow-x: hidden;
}

body.rtl {
    direction: rtl;
    font-family: var(--font-arabic);
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(10px);
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-logos img {
    height: 55px;
}
.lang-toggle {
    background: var(--ola-yellow);
    color: var(--dark-bg);
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    font-family: var(--font-primary);
    font-weight: 600;
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
}
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://ik.imagekit.io/ko0ec3rfg/Ola/backheroimage.png") no-repeat center center/cover;
    opacity: 0.25;
    z-index: -2;
    animation: zoom-in-out 25s infinite alternate;
}
@keyframes zoom-in-out {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
}
.hero::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle, rgba(18, 18, 18, 0.4) 0%, var(--dark-bg) 70%);
    z-index: -1;
}
.hero-headline .word {
    display: inline-block;
    opacity: 0;
    transform: translateY(30px);
}
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 2rem;
}
.section {
    position: relative;
    overflow: hidden;
}
.section-intro {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 4rem auto;
}
h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: var(--white);
    line-height: 1.3;
    font-weight: 800;
}
h2 {
    font-size: clamp(2rem, 5vw, 2.8rem);
    color: var(--ola-yellow);
    text-align: center;
}
h3 {
    font-size: 1.5rem;
    color: var(--white);
}
p {
    margin-bottom: 1rem;
    color: var(--text-grey);
    max-width: 650px;
}

/* Before & After Slider */
.before-after-slider {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 4rem auto 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    aspect-ratio: 16 / 9;
}
.before-after-slider .before-image,
.before-after-slider .after-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.before-after-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.before-after-slider .after-image {
    width: 50%;
    border-right: 3px solid var(--ola-yellow);
    transition: width 0.3s ease;
}
.slider-handle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 50px;
    cursor: ew-resize;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
}
.slider-handle-button {
    width: 45px;
    height: 45px;
    background: var(--white);
    border-radius: 50%;
    color: var(--dark-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    user-select: none;
}

/* Flywheel Card Row (B2C/B2B) */
.flywheel-card-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 3rem;
}
.flywheel-main-card {
    background: var(--ola-yellow);
    color: var(--dark-bg);
    font-weight: 800;
    font-size: 1.7rem;
    border-radius: 18px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    padding: 2rem 2.5rem;
    min-width: 210px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.flywheel-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
}
.flywheel-card {
    background: var(--light-bg);
    color: var(--ola-teal);
    font-weight: 600;
    font-size: 1.1rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.13);
    padding: 1.1rem 1.5rem;
    min-width: 160px;
    min-height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* Geo-Location Marketing Cards */
.geo-card-stack {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 3rem;
}
.geo-card {
    background: var(--light-bg);
    border-radius: 12px;
    padding: 1.3rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.13);
    display: flex;
    flex-direction: column;
}
.geo-label {
    font-weight: 700;
    color: var(--ola-teal);
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
}
.geo-value {
    color: var(--white);
    font-size: 1rem;
}

/* Image Gallery */
#image-carousel-section {
    background: var(--dark-bg);
    padding: 3rem 2rem 5rem 2rem;
}
#image-carousel-section h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--ola-yellow);
    font-weight: 800;
    font-size: 2rem;
}
#image-carousel {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    height: 350px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
#image-carousel img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
    display: none;
}
#image-carousel img.active {
    display: block;
}
.carousel-controls {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
#carousel-next-button {
    background: var(--ola-yellow);
    border: none;
    color: var(--dark-bg);
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.5rem 1.2rem;
    border-radius: 30px;
    cursor: pointer;
}

/* Footer Accordion */
.footer {
    background: #000;
    text-align: center;
    padding: 3rem 2rem;
}
.footer-accordion {
    max-width: 900px;
    margin: 0 auto;
}
.accordion-item {
    border-bottom: 1px solid rgba(255,255,255,0.13);
}
.accordion-trigger {
    background: none;
    border: none;
    color: var(--ola-yellow);
    font-size: 1.25rem;
    font-weight: 700;
    padding: 1.3rem 0;
    cursor: pointer;
    width: 100%;
    text-align: left;
    outline: none;
    transition: color 0.3s;
}
.accordion-trigger.active {
    color: var(--ola-teal);
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    background: var(--light-bg);
    color: var(--white);
    border-radius: 0 0 8px 8px;
    padding: 0 1rem;
}
.accordion-content p, .accordion-content img {
    margin: 1rem 0;
}
.accordion-content.show {
    padding-bottom: 1rem;
}

/* Responsive */
@media (max-width: 950px) {
    .flywheel-card-row,
    .flywheel-cards { flex-direction: column; align-items: center; }
    .flywheel-main-card { margin-bottom: 1rem; }
}
@media (max-width: 768px) {
    .container { padding: 3rem 1rem; }
    #image-carousel { height: 200px; }
}

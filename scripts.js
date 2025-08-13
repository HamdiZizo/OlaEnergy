<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ola Energy: From Fuel Station to Lifestyle Destination</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Poppins:wght@400;600;700;800&display=swap"
        rel="stylesheet"
    />
</head>
<body data-lang="en">
    <header class="header">
        <div class="header-logos">
            <img
                src="https://ik.imagekit.io/weo7pcw8v/Ola%20TR%20Logo.png?updatedAt=1754672101855"
                alt="Ola Energy Logo"
            />
        </div>
        <button class="lang-toggle" id="lang-toggle-btn">العربية</button>
    </header>

    <main>
        <section class="hero container">
            <div class="hero-background"></div>
            <h1
                class="hero-headline"
                data-lang-en="From only a fuel station... to a Destination."
                data-lang-ar="من مجرد محطة وقود... إلى وجهة متكاملة."
            ></h1>
        </section>

        <section class="section" id="transformation">
            <div class="container">
                <div class="section-intro">
                    <h2
                        class="anim-target"
                        data-lang-en="Visualizing the Transformation"
                        data-lang-ar="تصوّر التحول"
                    ></h2>
                    <p
                        class="anim-target"
                        data-lang-en="We turn functional stops into vibrant lifestyle hubs. Drag the slider to see how."
                        data-lang-ar="نحن نحوّل المحطات الوظيفية إلى مراكز حياة نابضة بالحياة. اسحب المؤشر لترى كيف."
                    ></p>
                </div>
                <div class="before-after-slider anim-target" id="before-after">
                    <div class="before-image">
                        <img
                            src="https://ik.imagekit.io/ko0ec3rfg/Ola/Ola%20-%20Before.jpg"
                            alt="Standard Fuel Station Before Transformation"
                            loading="lazy"
                        />
                    </div>
                    <div class="after-image" id="after-image">
                        <img
                            src="https://ik.imagekit.io/ko0ec3rfg/Ola/d0b637d4-5940-4f2a-b942-5e1e6eec356d.jpg?updatedAt=1753694094824"
                            alt="Vibrant Ola Destination After Transformation"
                            loading="lazy"
                        />
                    </div>
                    <div class="slider-handle" id="slider-handle">
                        <div class="slider-handle-button">↔</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- B2C Flywheel as horizontal cards -->
        <section class="section" id="b2c-cards">
            <div class="container">
                <div class="section-intro">
                    <h2 class="anim-target" data-lang-en="The B2C Flywheel: Gaining Oil ROI" data-lang-ar="دورة النجاح للمستهلك: تحقيق عائد استثمار الزيوت"></h2>
                </div>
                <div class="flywheel-card-row">
                    <div class="flywheel-main-card" data-lang-en="Gaining Oil ROI" data-lang-ar="تحقيق عائد الزيوت"></div>
                    <div class="flywheel-cards">
                        <div class="flywheel-card" data-lang-en="Car Manufacturer Loyalty" data-lang-ar="ولاء شركات تصنيع السيارات"></div>
                        <div class="flywheel-card" data-lang-en="Raising Ola Brand Image" data-lang-ar="تعزيز صورة علامة أولا"></div>
                        <div class="flywheel-card" data-lang-en="Changing Customer Experience" data-lang-ar="تغيير تجربة العملاء"></div>
                        <div class="flywheel-card" data-lang-en="Gas Station Perception" data-lang-ar="تصور محطة الوقود"></div>
                        <div class="flywheel-card" data-lang-en="Auditing & Mystery Shopping" data-lang-ar="التدقيق والمتسوق السري"></div>
                        <div class="flywheel-card" data-lang-en="Marketing & Branding" data-lang-ar="التسويق والعلامة التجارية"></div>
                        <div class="flywheel-card" data-lang-en="Consumer Word-of-Mouth" data-lang-ar="الكلام الشفهي للمستهلك"></div>
                        <div class="flywheel-card" data-lang-en="Gas Station Traffic" data-lang-ar="حركة مرور المحطات"></div>
                        <div class="flywheel-card" data-lang-en="Car Manufacturer Trust" data-lang-ar="ثقة شركات تصنيع السيارات"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- B2B Flywheel as horizontal cards -->
        <section class="section" id="b2b-cards-section">
            <div class="container">
                <div class="section-intro">
                    <h2 class="anim-target" data-lang-en="Oil B2B" data-lang-ar="النفط الشركات"></h2>
                </div>
                <div class="flywheel-card-row">
                    <div class="flywheel-main-card" data-lang-en="Oil B2B" data-lang-ar="النفط الشركات"></div>
                    <div class="flywheel-cards">
                        <div class="flywheel-card" data-lang-en="B2B Events" data-lang-ar="فعاليات الشركات"></div>
                        <div class="flywheel-card" data-lang-en="Launching" data-lang-ar="الإطلاق"></div>
                        <div class="flywheel-card" data-lang-en="Governorate Oil Change Outlet Branding" data-lang-ar="ترويج منافذ تغيير الزيت للمحافظات"></div>
                        <div class="flywheel-card" data-lang-en="B2B Branding Kit" data-lang-ar="مجموعة العلامة التجارية للشركات"></div>
                        <div class="flywheel-card" data-lang-en="Car Manufacturing Partnership" data-lang-ar="شراكة مع شركات تصنيع السيارات"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Geo-Location Marketing stacked cards -->
        <section class="section" id="geo-marketing">
            <div class="container">
                <div class="section-intro">
                    <h2 class="anim-target" data-lang-en="Geo-Location Marketing" data-lang-ar="التسويق عبر المواقع الجغرافية"></h2>
                </div>
                <div class="geo-card-stack">
                    <div class="geo-card">
                        <span class="geo-label" data-lang-en="Objective" data-lang-ar="الهدف"></span>
                        <span class="geo-value" data-lang-en="Drive targeted customer traffic to stations and aggressively promote Ola oil products." data-lang-ar="جذب حركة العملاء المستهدفة إلى المحطات والترويج بقوة لمنتجات زيوت أولا."></span>
                    </div>
                    <div class="geo-card">
                        <span class="geo-label" data-lang-en="Execution" data-lang-ar="التنفيذ"></span>
                        <span class="geo-value" data-lang-en="An on-site marketing campaign and roadshow carnival, managed end-to-end by Switch Communications." data-lang-ar="حملة تسويقية ميدانية وكرنفال ترويجي متنقل، تديره سويتش كوميونيكيشنز بالكامل."></span>
                    </div>
                    <div class="geo-card">
                        <span class="geo-label" data-lang-en="Location" data-lang-ar="الموقع"></span>
                        <span class="geo-value" data-lang-en="Key, high-visibility Ola Energy gas stations across the region." data-lang-ar="محطات وقود أولا إنرجي الرئيسية ذات الظهور العالي في جميع أنحاء المنطقة."></span>
                    </div>
                    <div class="geo-card">
                        <span class="geo-label" data-lang-en="Method" data-lang-ar="الأسلوب"></span>
                        <span class="geo-value" data-lang-en="Direct customer engagement through giveaways, interactive games, and exclusive on-site offers." data-lang-ar="تفاعل مباشر مع العملاء من خلال توزيع الهدايا، والألعاب التفاعلية، والعروض الحصرية في الموقع."></span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Activation Overview Image Gallery (Above Footer) -->
        <section id="image-carousel-section">
            <h2 data-lang-en="Activation Overview" data-lang-ar="نظرة عامة على التفعيل"></h2>
            <div id="image-carousel" aria-label="Image Carousel with Next button">
                <img
                    src="https://ik.imagekit.io/weo7pcw8v/20250720_2002_Vibrant%20Carnival%20Event_remix_01k0mcbr8gfyt9zddkxg4wgjd8.png"
                    alt="Vibrant Carnival Event"
                    class="carousel-image active"
                    loading="lazy"
                />
                <img
                    src="https://ik.imagekit.io/weo7pcw8v/a-captivating-lifestyle-advertisement-sh_BJhEOvCAQrK01sxAtDZo-Q_B4kMHzg6Tg2SH-K4jI6V1A.jpeg"
                    alt="Lifestyle Advertisement"
                    class="carousel-image"
                    loading="lazy"
                />
                <img
                    src="https://ik.imagekit.io/weo7pcw8v/Activaci%C3%B3n%20para%20NutriServicios%20en%20zona%20metropolitana%20de%20Guadalajara_%20%20_Marketing%20%20_BTL%20_StreetMarketing.jfif"
                    alt="Street Marketing"
                    class="carousel-image"
                    loading="lazy"
                />
                <img
                    src="https://ik.imagekit.io/weo7pcw8v/a-hyper-realistic-photo-of-an-ola-energy_wTQqN5hIQSe-8PSD3mXgKw_LK6NOMgdRj6j6n4qIhrwog.jpeg"
                    alt="Ola Energy Photo"
                    class="carousel-image"
                    loading="lazy"
                />
                <!-- ...Add remaining images as needed... -->
                <div class="carousel-controls">
                    <button id="carousel-next-button" aria-label="Next Image">Next</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer Accordion Only -->
    <footer class="footer" role="contentinfo">
        <div class="footer-accordion">
            <div class="accordion-item">
                <button class="accordion-trigger">Who We Are...?</button>
                <div class="accordion-content">
                    <p>
                        Integrated Marketing Powerhouse Since 1996<br />
                        With a legacy of over 29 years, Switch Communications delivers 360° marketing
                        solutions across events, digital, PR, and tech. As part of the Magar Group,
                        with subsidiaries like Egyptian Arts Group & Pulse, we have a robust history of driving
                        real business results for global brands like BMW, Samsung, Nestlé, Vodafone, and Shell.
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger">What We Do...?</button>
                <div class="accordion-content">
                    <p>
                        From Strategy to Execution – One Agency, Infinite Impact<br />
                        Our high-impact experiential marketing services, which include dynamic car launches and
                        interactive exhibition booths, have been trusted by leading brands like Shell, Apache, and Khalda, BMW and Geely.
                        <br />
                        Digital & Growth: Data-driven performance ads, influencer campaigns, and SEO that deliver results for clients like Fayrouz and Cakes House.
                        <br />
                        Tech & Content: Cutting-edge UI/UX, app development, and cinematic production that bring brands to life.
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger">Why Partner With Us?</button>
                <div class="accordion-content">
                    <p>
                        Proven Results, Trusted by Global Brands<br />
                        Our strategies are built on a foundation of deep market expertise and a relentless focus on ROI. Our successful partnership and
                        marketing activities with Shell generated a 40% increase in qualified leads in just three weeks. Led by the artistic direction
                        of Dr. Elhamy Magar and the strategic insight of ex-Samsung/Pfizer strategist Shady Magar, we deliver partnerships that drive growth.
                    </p>
                    <p><strong>Ready to elevate your brand?</strong><br />
                        Contact: Dina Al Ashry: 010-19509494 Or Hamdi El Shim: 010-92760051
                    </p>
                    <img
                        src="https://ik.imagekit.io/weo7pcw8v/Switch%20Communications%20Logo.png?updatedAt=1754664755580"
                        alt="Switch Communications Logo"
                        class="agency-logo"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>

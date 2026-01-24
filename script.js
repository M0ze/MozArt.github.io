document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');

    const PDF_ICON_URL = 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg';

    const initialFiles = [
        { name: "0101_Mastering-CSS-Grid.pdf", type: "pdf" },
        { name: "0203_HTML-CSS-Design-and-Build-Websites.pdf", type: "pdf" },
        { name: "0812_Machine-Learning-for-Absolute-Beginners.pdf", type: "pdf" },
        { name: "1003_JavaScript-Design-Patterns.pdf", type: "pdf" },
        { name: "1113_Responsive-Web-Design-with-HTML5-and-CSS.pdf", type: "pdf" },
        { name: "1203_CRC-From-Concepts-to-Code.pdf", type: "pdf" },
        { name: "1212_Tiny-CSS-Projects.pdf", type: "pdf" },
        { name: "1215_JavaScript-Crash-Course.pdf", type: "pdf" },
        { name: "1301_Introduction_to_Python_and_Large_Language_Models.pdf", type: "pdf" },
        { name: "1307-HTML_CSS_Learn_The Fundamentals_In_7_days.pdf", type: "pdf" },
        { name: "1402_Rust-Web-Programming.pdf", type: "pdf" },
        { name: "1412_MySQL-Crash-Course.pdf", type: "pdf" },
        { name: "1510_CSS-Optimization-Basics.pdf", type: "pdf" },
        { name: "1524_JavaScript-for-Web-Warriors.pdf", type: "pdf" },
        { name: "1602_Modern-Full-Stack-React-Projects.pdf", type: "pdf" },
        { name: "1606_HTML-and-CSS-The-Comprehensive-Guide.pdf", type: "pdf" },
        { name: "1707_Web-design-playground-second-edition.pdf", type: "pdf" },
        { name: "1803_Beginning-C-plus-plus-Game-Programming.pdf", type: "pdf" },
        { name: "1808_HTML_and_CSS_Visual_QuickStart_Guide_9th_Edition.pdf", type: "pdf" },
        { name: "2012_foundations-of-data-science-with-python.pdf", type: "pdf" },
        { name: "2017_blender-basics_classroom-tutorial-book.pdf", type: "pdf" },
        { name: "2101_how-to-build-a-website-with-html-and-css.pdf", type: "pdf" },
        { name: "2602_Prompt_Engineering_for_LLMs_The_Art_and_Science_of_Building_Large.pdf", type: "pdf" },
        { name: "2701_Mastering-Node-js-Web-Development.pdf", type: "pdf" },
        { name: "2811_JavaScript-From-Zero-to-Hero.pdf", type: "pdf" },
        { name: "42e662de0d6a536372911ae4377db4efb53a087e.jpeg", type: "image" },
        { name: "505122396_1022167986737515_3248457515755297441_n.jpg", type: "image" },
        { name: "75732d0d380faea72be22dc0b6398f6275f78b0f.jpeg", type: "image" },
        { name: "80a13abac39122cb5e529eaf0709d134dac6a7f9_2_500x500.jpeg", type: "image" },
        { name: "9780133886177.pdf", type: "pdf" },
        { name: "A_Practical_Introduction_to_Python_Programming_Heinold.pdf", type: "pdf" },
        { name: "An_Introduction_to_GCC-Brian_Gough.pdf", type: "pdf" },
        { name: "b66b2f26459b341d63f2566953c57ec3872f307a.jpeg", type: "image" },
        { name: "bgc_usl_c_1.pdf", type: "pdf" },
        { name: "bgnet_usl_c_1.pdf", type: "pdf" },
        { name: "Blender 3D Architecture, Buildings, and Scenery ( PDFDrive ).pdf", type: "pdf" },
        { name: "Blender 3D_ Noob to Pro ( PDFDrive ).pdf", type: "pdf" },
        { name: "BlenderBasics2ndEdition.pdf", type: "pdf" },
        { name: "blender-book.pdf", type: "pdf" },
        { name: "Blender_Manual_Part1.pdf", type: "pdf" },
        { name: "Blender_Manual_Part2.pdf", type: "pdf" },
        { name: "book.pdf", type: "pdf" },
        { name: "book_sliced.pdf", type: "pdf" },
        { name: "Brockschmidt -- Programming Windows 8 Apps with HTML, CSS, and JavaScript -- 2012.pdf", type: "pdf" },
        { name: "Computer info course units.pdf", type: "pdf" },
        { name: "DeepSeek_R1.pdf", type: "pdf" },
        { name: "Diploma-of-Information-Technology-Standard-Session-Domestic-Course-Outline-Australia-3187-2025_V1.0.pdf", type: "pdf" },
        { name: "discmath-root-b.pdf", type: "pdf" },
        { name: "DIT torrent 1.pdf", type: "pdf" },
        { name: "dmoi3-tablet.pdf", type: "pdf" },
        { name: "Essentials_Scratch_v1.pdf", type: "pdf" },
        { name: "Founds-FP.pdf", type: "pdf" },
        { name: "frontendDEev roadmap.pdf", type: "pdf" },
        { name: "frontend isn_t just UI.pdf", type: "pdf" },
        { name: "Gmu0BoIWkAAqt4c.jpeg", type: "image" },
        { name: "GmuzO-qbAAA20Bt.jpeg", type: "image" },
        { name: "GmvmuAvWYAAZiVg.jpeg", type: "image" },
        { name: "GnenSPXWAAAhARo.jpeg", type: "image" },
        { name: "Gp1_K3PakAAAHhb.png", type: "image" },
        { name: "GqrbPDNXAAEuVFt.jpg", type: "image" },
        { name: "GrvdGweW8AAiog2.jpg", type: "image" },
        { name: "GsLUV4UWkAAetZw.jpg", type: "image" },
        { name: "GsNNssIWUAADhco.jpg", type: "image" },
        { name: "Hooked-How-to-Build-Habit-Forming-Products-_Nir-Eyal_.pdf", type: "pdf" },
        { name: "HowToBeAProgrammer.pdf", type: "pdf" },
        { name: "HTML-1-10_2.jpg", type: "image" },
        { name: "HTML-1-11_1.jpg", type: "image" },
        { name: "HTML-1-1_1.jpg", type: "image" },
        { name: "HTML-1-12_1.jpg", type: "image" },
        { name: "HTML-1-16_1.jpg", type: "image" },
        { name: "HTML-1-17_1.jpg", type: "image" },
        { name: "HTML-1-18_1.jpg", type: "image" },
        { name: "HTML-1-19_1.jpg", type: "image" },
        { name: "HTML-1-20_1.jpg", type: "image" },
        { name: "HTML-1-20_2.jpg", type: "image" },
        { name: "HTML-1-22_1.jpg", type: "image" },
        { name: "HTML-1-24_1.jpg", type: "image" },
        { name: "HTML-1-25_1.jpg", type: "image" },
        { name: "HTML-1-26_1.jpg", type: "image" },
        { name: "HTML-1-26_2.jpg", type: "image" },
        { name: "HTML-1-28_1.jpg", type: "image" },
        { name: "HTML-1-31_1.jpg", type: "image" },
        { name: "HTML-1-33_1.jpg", type: "image" },
        { name: "HTML-1-34_1.jpg", type: "image" },
        { name: "HTML-1-35_1.jpg", type: "image" },
        { name: "HTML-1-36_1.jpg", type: "image" },
        { name: "HTML-1-37_1.jpg", type: "image" },
        { name: "HTML-1-38_1.jpg", type: "image" },
        { name: "HTML-1-39_1.jpg", type: "image" },
        { name: "HTML-1-40_1.jpg", type: "image" },
        { name: "HTML-1-40_2.jpg", type: "image" },
        { name: "HTML-1-41_1.jpg", type: "image" },
        { name: "HTML-1-4_1.jpg", type: "image" },
        { name: "HTML-1-42_1.jpg", type: "image" },
        { name: "HTML-1-43_1.jpg", type: "image" },
        { name: "HTML-1-44_1.jpg", type: "image" },
        { name: "HTML-1-45_1.jpg", type: "image" },
        { name: "HTML-1-46_1.jpg", type: "image" },
        { name: "HTML-1-46_2.jpg", type: "image" },
        { name: "HTML-1-47_1.jpg", type: "image" },
        { name: "HTML-1-48_1.jpg", type: "image" },
        { name: "HTML-1-49_1.jpg", type: "image" },
        { name: "HTML-1-50_1.jpg", type: "image" },
        { name: "HTML-1-51_1.jpg", type: "image" },
        { name: "HTML-1-5_1.jpg", type: "image" },
        { name: "HTML-1-52_1.jpg", type: "image" },
        { name: "HTML-1-52_2.jpg", type: "image" },
        { name: "HTML-1-53_1.jpg", type: "image" },
        { name: "HTML-1-54_1.jpg", type: "image" },
        { name: "HTML-1-55_1.jpg", type: "image" },
        { name: "HTML-1-55_2.jpg", type: "image" },
        { name: "HTML-1-56_1.jpg", type: "image" },
        { name: "HTML-1-57_1.jpg", type: "image" },
        { name: "HTML-1-58_1.jpg", type: "image" },
        { name: "HTML-1-59_1.jpg", type: "image" },
        { name: "HTML-1-60_1.jpg", type: "image" },
        { name: "HTML-1.pdf", type: "pdf" },
        { name: "HTML5 and JavaScript Projects, 2nd Edition.pdf", type: "pdf" },
        { name: "HTML-CSS-and-JavaScript.pdf", type: "pdf" },
        { name: "html-css-javascript-all-in-one-for-dummies.pdf", type: "pdf" },
        { name: "HTMLCSSJSFD_TOC.pdf", type: "pdf" },
        { name: "html,css&JS.pdf", type: "pdf" },
        { name: "Introduction-to-computers-by-Peter-norton-6th-ed.pdf", type: "pdf" },
        { name: "IT co 1.pdf", type: "pdf" },
        { name: "IT vs CyberSec.pdf", type: "pdf" },
        { name: "L0-GLO_en_Glossary - Experience AI.pdf", type: "pdf" },
        { name: "L12-EG_en_AI safety - Educator guide.pdf", type: "pdf" },
        { name: "Linux cyber .pdf", type: "pdf" },
        { name: "Mike-Meyers-CompTIA-A-Certification-All-in-One-Exam-Guide-Tenth-Edition-Exams-220-1001-220-1002-McGraw-Hill-Education-2019.pdf", type: "pdf" },
        { name: "modernC.pdf", type: "pdf" },
        { name: "partitions.pdf", type: "pdf" },
        { name: "pictures of doughnut.png", type: "image" },
        { name: "programming concepts and applications.pdf", type: "pdf" },
        { name: "Programming_Fundamentals_1_Month_Course.pdf", type: "pdf" },
        { name: "Programming.pdf", type: "pdf" },
        { name: "Python_Coding_Manual_Ed24_2025.pdf", type: "pdf" },
        { name: "PythonNotesForProfessionals.pdf", type: "pdf" },
        { name: "responsive-web-design-with-html5-and-css3_compress.pdf", type: "pdf" },
        { name: "Revised_BBC1_IT Essentials_COURSE OUTLINE AY 2024-2025.pdf", type: "pdf" },
        { name: "riyad_us_saliheen.pdf", type: "pdf" },
        { name: "riyad-us-saliheen-vol-1.pdf", type: "pdf" },
        { name: "riyad-us-saliheen-vol-2.pdf", type: "pdf" },
        { name: "Screenshot_22-3-2025_192550_www.instagram.com.jpeg", type: "image" },
        { name: "Screenshot_22-3-2025_19276_www.instagram.com.jpeg", type: "image" },
        { name: "SOC.pdf", type: "pdf" },
        { name: "Tariffs.pdf", type: "pdf" },
        { name: "The Architecture of Computer Hardware, Systems Software, and Networking_ An Information Technology Approach, Fifth Edition ( PDFDrive ) (1).pdf", type: "pdf" },
        { name: "The Architecture of Computer Hardware, Systems Software, and Networking_ An Information Technology Approach, Fifth Edition ( PDFDrive ).pdf", type: "pdf" },
        { name: "the_c_book.pdf", type: "pdf" },
        { name: "The_Complete_C__Python_Coding_Manual_-_21th_Edition_2025.pdf", type: "pdf" },
        { name: "The Complete Guide to Blender G - John M. Blain.pdf", type: "pdf" },
        { name: "ticks.pdf", type: "pdf" },
        { name: "unplugged-en.pdf", type: "pdf" },
        { name: "Web-Design-Lecture-Notes.pdf", type: "pdf" },
        { name: "Zod770S.jpeg", type: "image" }
    ];

    let currentFilter = 'all';

    // Function to create a gallery item element
    function createGalleryItem(file) {
        const item = document.createElement('div');
        item.className = 'item';

        const link = document.createElement('a');
        link.href = `assets/${file.name}`;
        link.target = '_blank'; // Open in new tab

        const contentDiv = document.createElement('div');
        contentDiv.className = 'item-content';

        const title = document.createElement('h3');
        title.textContent = file.name; // Display full filename

        const fileTypePara = document.createElement('p');
        fileTypePara.className = 'file-type';
        fileTypePara.textContent = `Type: ${file.type.toUpperCase()}`;

        if (file.type === 'pdf') {
            const iconContainer = document.createElement('div');
            iconContainer.className = 'pdf-icon';
            const icon = document.createElement('img');
            icon.src = PDF_ICON_URL;
            icon.alt = 'PDF icon';
            iconContainer.appendChild(icon);
            link.appendChild(iconContainer);
        } else { // Assume image
            const image = document.createElement('img');
            image.dataset.src = `assets/${file.name}`;
            image.alt = file.name;
            image.classList.add('lazy-load');
            link.appendChild(image);
        }

        contentDiv.appendChild(title);
        contentDiv.appendChild(fileTypePara);

        item.appendChild(link);
        item.appendChild(contentDiv);

        return item;
    }

    // Intersection Observer for lazy loading images
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                lazyLoadObserver.unobserve(img);
            }
        });
    });

    // Function to load and display gallery items
    function loadGallery(filteredFiles) {
        gallery.innerHTML = ''; // Clear existing gallery
        filteredFiles.forEach(file => {
            const item = createGalleryItem(file);
            gallery.appendChild(item);

            // Observe images for lazy loading
            if (file.type === 'image') {
                const imgElement = item.querySelector('img');
                if (imgElement) {
                    lazyLoadObserver.observe(imgElement);
                }
            }
        });
    }

    // Function to filter files and render the gallery
    function filterAndRenderGallery() {
        const searchTerm = searchInput.value.toLowerCase();

        let filtered = initialFiles.filter(file => {
            const matchesSearch = file.name.toLowerCase().includes(searchTerm);
            const matchesFilter = currentFilter === 'all' || file.type === currentFilter;
            return matchesSearch && matchesFilter;
        });
        loadGallery(filtered);
    }

    // Event Listeners
    searchInput.addEventListener('input', filterAndRenderGallery);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterAndRenderGallery();
        });
    });

    // Initial load of the gallery
    filterAndRenderGallery();
});
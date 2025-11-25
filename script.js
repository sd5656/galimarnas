// زانیاری زمانەکان
const translations = {
    ckb: {
        home: "سەرەکی",
        technology: "تەکنەلۆجیا",
        programming: "پڕۆگرامسازی",
        blog: "بلاگ",
        about: "دەربارەی ئێمە",
        contact: "پەیوەندی",
        menu: "مینۆ",
        welcome: "بەخێربێن بۆ EFG Kurdish",
        welcomeSub: "ماڵپەڕی تەکنەلۆجیا و زانیاری",
        news: "هەواڵەکان",
        popularPosts: "پۆستە زۆر بینراوەکان",
        shareSocial: "هاوبەشی بکە لە کۆمەڵەی میدیایی",
        weAreSocial: "ئێمە لە کۆمەڵەی میدیاییداین",
        facebook: "فیسبوک",
        twitter: "تویتەر",
        linkedin: "لینکدئین",
        telegram: "تێلێگرام",
        whatsapp: "واتسئاپ",
        youtube: "یوتیوب",
        instagram: "ئینستاگرام",
        allRightsReserved: "هەموو مافەکان پارێزراون",
        like: "حەز",
        views: "بینین",
        readMore: "زیاتر بخوێنەوە",
        ageVerification: "پەسەندکردنی تەمەن",
        enterAge: "تکایە تەمەنی خۆت بنووسە",
        underAge: "ببوورە، تەنها کەسانی سەروو ١٨ ساڵان دەتوانن سەردانی ماڵپەڕەکە بکەن",
        welcomeMessage: "بەخێربێیت! دەتوانیت ئێستا ماڵپەڕەکە ببینیت"
    },
    sdh: {
        home: "سەرەکی",
        technology: "تەکنۆلۆژیا",
        programming: "پرۆگرامسازی",
        blog: "بلاگ",
        about: "ده‌رباره‌ی ئێمه‌",
        contact: "په‌یوه‌ندی",
        menu: "مینۆ",
        welcome: "بەخێربێن بۆ EFG Kurdish",
        welcomeSub: "ماڵپەری تەکنۆلۆژیا و زانیاری",
        news: "هەواڵەکان",
        popularPosts: "پۆستە زۆر بینراوەکان",
        shareSocial: "هاوبەشی بکە لە کۆمەڵایەتی میدیایی",
        weAreSocial: "ئێمە لە کۆمەڵایەتی میدیاییداین",
        facebook: "فەیسبووک",
        twitter: "تویتەر",
        linkedin: "لینکدئین",
        telegram: "تێلێگرام",
        whatsapp: "واتسئاپ",
        youtube: "یوتیوب",
        instagram: "ئینستاگرام",
        allRightsReserved: "هەموو مافەکان پارێزراون",
        like: "حەز",
        views: "بینین",
        readMore: "زیاتر بخوێنەوە",
        ageVerification: "پەسەندکردنی تەمەن",
        enterAge: "تکایە تەمەنی خۆت بنووسە",
        underAge: "ببوورە، تەنها کەسانی سەروو ١٨ ساڵان دەتوانن سەردانی ماڵپەڕەکە بکەن",
        welcomeMessage: "بەخێربێیت! دەتوانیت ئێستا ماڵپەڕەکە ببینیت"
    },
    en: {
        home: "Home",
        technology: "Technology",
        programming: "Programming",
        blog: "Blog",
        about: "About Us",
        contact: "Contact",
        menu: "Menu",
        welcome: "Welcome to EFG Kurdish",
        welcomeSub: "Technology and Information Website",
        news: "News",
        popularPosts: "Popular Posts",
        shareSocial: "Share on Social Media",
        weAreSocial: "We Are on Social Media",
        facebook: "Facebook",
        twitter: "Twitter",
        linkedin: "LinkedIn",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        youtube: "YouTube",
        instagram: "Instagram",
        allRightsReserved: "All Rights Reserved",
        like: "Like",
        views: "Views",
        readMore: "Read More",
        ageVerification: "Age Verification",
        enterAge: "Please enter your age",
        underAge: "Sorry, only people over 18 years old can visit the website",
        welcomeMessage: "Welcome! You can now view the website"
    },
    fa: {
        home: "صفحه اصلی",
        technology: "تکنولوژی",
        programming: "برنامه نویسی",
        blog: "بلاگ",
        about: "درباره ما",
        contact: "تماس با ما",
        menu: "منو",
        welcome: "به EFG Kurdish خوش آمدید",
        welcomeSub: "وبسایت تکنولوژی و اطلاعات",
        news: "اخبار",
        popularPosts: "پست های محبوب",
        shareSocial: "اشتراک گذاری در شبکه های اجتماعی",
        weAreSocial: "ما در شبکه های اجتماعی هستیم",
        facebook: "فیس بوک",
        twitter: "توییتر",
        linkedin: "لینکدین",
        telegram: "تلگرام",
        whatsapp: "واتساپ",
        youtube: "یوتیوب",
        instagram: "اینستاگرام",
        allRightsReserved: "تمامی حقوق محفوظ است",
        like: "لایک",
        views: "بازدید",
        readMore: "ادامه مطلب",
        ageVerification: "تایید سن",
        enterAge: "لطفا سن خود را وارد کنید",
        underAge: "متاسفانه فقط افراد بالای 18 سال می توانند از وبسایت بازدید کنند",
        welcomeMessage: "خوش آمدید! اکنون می توانید وبسایت را مشاهده کنید"
    },
    ar: {
        home: "الرئيسية",
        technology: "التكنولوجيا",
        programming: "البرمجة",
        blog: "المدونة",
        about: "من نحن",
        contact: "اتصل بنا",
        menu: "القائمة",
        welcome: "مرحباً بكم في EFG Kurdish",
        welcomeSub: "موقع التكنولوجيا والمعلومات",
        news: "الأخبار",
        popularPosts: "المشاركات الشائعة",
        shareSocial: "مشاركة على وسائل التواصل الاجتماعي",
        weAreSocial: "نحن على وسائل التواصل الاجتماعي",
        facebook: "فيسبوك",
        twitter: "تويتر",
        linkedin: "لينكدإن",
        telegram: "تلغرام",
        whatsapp: "واتساب",
        youtube: "يوتيوب",
        instagram: "إنستغرام",
        allRightsReserved: "جميع الحقوق محفوظة",
        like: "إعجاب",
        views: "مشاهدات",
        readMore: "اقرأ المزيد",
        ageVerification: "التحقق من العمر",
        enterAge: "الرجاء إدخال عمرك",
        underAge: "عذراً، فقط الأشخاص فوق 18 سنة يمكنهم زيارة الموقع",
        welcomeMessage: "أهلاً وسهلاً! يمكنك الآن مشاهدة الموقع"
    }
};

// زانیاری پۆستەکان
const posts = [
    {
        id: 1,
        title: {
            ckb: "دەستپێکی پڕۆگرامسازی لە کوردی",
            sdh: "ده‌ستپێکی پرۆگرامسازی له‌ کوردی",
            en: "Introduction to Programming in Kurdish",
            fa: "آغاز برنامه نویسی به زبان کردی",
            ar: "مقدمة في البرمجة باللغة الكردية"
        },
        content: {
            ckb: "ئەم پۆستە باسی سەرەتاکانی پڕۆگرامسازی دەکات و چۆن دەتوانیت بە زمانی کوردی فێری پڕۆگرامسازی ببیت...",
            sdh: "ئه‌م پۆسته‌ باسی سەرەتاکانی پرۆگرامسازی ده‌کات و چۆن ده‌توانیت به‌ زمانى کوردى فێری پرۆگرامسازی ببیت...",
            en: "This post discusses the basics of programming and how you can learn programming in Kurdish language...",
            fa: "این پست در مورد مبانی برنامه نویسی و چگونگی یادگیری برنامه نویسی به زبان کردی صحبت می‌کند...",
            ar: "تناقش هذه المشاركة أساسيات البرمجة وكيف يمكنك تعلم البرمجة باللغة الكردية..."
        },
        author: "هێمن عەبدوڵڵا",
        date: "2024-01-15",
        views: 1250,
        likes: 89,
        category: "programming"
    },
    {
        id: 2,
        title: {
            ckb: "نوێترین تەکنەلۆژیایەکانی 2024",
            sdh: "نوێترین تەکنۆلۆژیاکانی 2024",
            en: "Latest Technologies of 2024",
            fa: "جدیدترین تکنولوژی های 2024",
            ar: "أحدث التقنيات في 2024"
        },
        content: {
            ckb: "لەم پۆستەدا سەیری نوێترین تەکنەلۆژیاکانی ساڵی 2024 دەکەین و کاریگەرییان لەسەر ژیانی رۆژانەمان...",
            sdh: "له‌م پۆسته‌دا سەیری نوێترین تەکنۆلۆژیاکانی ساڵی 2024 ده‌که‌ین و کاریگەرییان له‌سەر ژیانی رۆژانه‌مان...",
            en: "In this post, we look at the latest technologies of 2024 and their impact on our daily lives...",
            fa: "در این پست، به جدیدترین تکنولوژی های سال 2024 و تاثیر آنها بر زندگی روزمره ما می‌پردازیم...",
            ar: "في هذه المشاركة، ننظر إلى أحدث التقنيات في عام 2024 وتأثيرها على حياتنا اليومية..."
        },
        author: "سارا محەممەد",
        date: "2024-01-10",
        views: 890,
        likes: 67,
        category: "technology"
    },
    {
        id: 3,
        title: {
            ckb: "ڕاهێنانی دەستکاری وێنە بە Photoshop",
            sdh: "ڕاهێنانی ده‌ستکاری وێنه‌ به‌ Photoshop",
            en: "Photo Editing Training with Photoshop",
            fa: "آموزش ویرایش عکس با فتوشاپ",
            ar: "تدريب تعديل الصور باستخدام فوتوشوب"
        },
        content: {
            ckb: "فێری سەرەتاییەکانی دەستکاری وێنە بە Photoshop بە زمانی کوردی...",
            sdh: "فێری سەرەتاییەکانی ده‌ستکاری وێنه‌ به‌ Photoshop به‌ زمانى کوردى...",
            en: "Learn the basics of photo editing with Photoshop in Kurdish language...",
            fa: "مبانی ویرایش عکس با فتوشاپ را به زبان کردی یاد بگیرید...",
            ar: "تعلم أساسيات تعديل الصور باستخدام فوتوشوب باللغة الكردية..."
        },
        author: "ڕەزا عەلی",
        date: "2024-01-05",
        views: 670,
        likes: 45,
        category: "technology"
    }
];

// گۆڕاوە گشتییەکان
let currentLanguage = 'ckb';
let currentTheme = 'light';
let ageVerified = false;
let languageSelected = false;

// بەڵگەنامە ئامادە بوو
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// دەستپێکردنی ئەپ
function initializeApp() {
    loadPreferences();
    setupEventListeners();
    preventDefaultActions();
    
    if (!ageVerified) {
        showAgeVerification();
    } else if (!languageSelected) {
        showLanguageSelector();
    } else {
        showMainContent();
    }
}

// بارکردنەوەی پێشوەختەکان
function loadPreferences() {
    const savedAge = localStorage.getItem('ageVerified');
    const savedLang = localStorage.getItem('preferredLanguage');
    const savedTheme = localStorage.getItem('preferredTheme');
    
    if (savedAge === 'true') {
        ageVerified = true;
    }
    
    if (savedLang) {
        currentLanguage = savedLang;
    }
    
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeSwitcher();
    }
}

// ڕێکخستنی گوێگرەکان
function setupEventListeners() {
    // تەمەن
    document.getElementById('verifyAge').addEventListener('click', verifyAge);
    document.getElementById('ageInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') verifyAge();
    });
    
    // زمان
    document.getElementById('confirmLanguage').addEventListener('click', confirmLanguage);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentLanguage = this.dataset.lang;
        });
    });
    
    // گۆڕینی زمان
    document.querySelectorAll('.language-dropdown button').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLanguage = this.dataset.lang;
            changeLanguage(currentLanguage);
            updateCurrentLangButton();
        });
    });
    
    // ڕوناکی/تاریکی
    document.getElementById('themeSwitcher').addEventListener('click', toggleTheme);
    
    // مینۆی کشاوە
    document.getElementById('mobileMenuBtn').addEventListener('click', openMobileMenu);
    document.getElementById('mobileMenuClose').addEventListener('click', closeMobileMenu);
    document.getElementById('menuOverlay').addEventListener('click', closeMobileMenu);
    
    // مۆدالی پۆست
    document.getElementById('modalClose').addEventListener('click', closePostModal);
    
    // هاوبەشکردن
    document.querySelectorAll('.share-post-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            sharePost(this.dataset.platform);
        });
    });
    
    // حەز
    document.getElementById('likeBtn').addEventListener('click', toggleLike);
}

// ڕێگرتن لە کرداری بنەڕەتی
function preventDefaultActions() {
    // ڕایت کلیک
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // زووم
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // کیبۆرد shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl++ و Ctrl+-
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
            e.preventDefault();
        }
        
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
        }
        
        // Ctrl+Shift+I و Ctrl+Shift+J و Ctrl+Shift+C
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
        }
    });
}

// نیشاندانی پەردەی تەمەن
function showAgeVerification() {
    document.getElementById('ageVerification').style.display = 'flex';
    translateAgeVerification();
}

// وەرگێڕانی پەردەی تەمەن
function translateAgeVerification() {
    const modal = document.querySelector('.age-modal');
    if (modal) {
        const elements = modal.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
    }
}

// پشکنینی تەمەن
function verifyAge() {
    const ageInput = document.getElementById('ageInput');
    const ageError = document.getElementById('ageError');
    const age = parseInt(ageInput.value);
    
    if (isNaN(age) || age < 1 || age > 120) {
        ageError.textContent = translations[currentLanguage].enterAge;
        ageError.style.display = 'block';
        return;
    }
    
    if (age < 18) {
        ageError.textContent = translations[currentLanguage].underAge;
        ageError.style.display = 'block';
        return;
    }
    
    ageVerified = true;
    localStorage.setItem('ageVerified', 'true');
    document.getElementById('ageVerification').style.display = 'none';
    
    if (!languageSelected) {
        showLanguageSelector();
    } else {
        showMainContent();
    }
}

// نیشاندانی هەڵبژاردنی زمان
function showLanguageSelector() {
    document.getElementById('languageSelector').style.display = 'flex';
    translateLanguageSelector();
}

// وەرگێڕانی هەڵبژاردنی زمان
function translateLanguageSelector() {
    const modal = document.querySelector('.language-modal');
    if (modal) {
        const elements = modal.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
    }
}

// پەسەندکردنی زمان
function confirmLanguage() {
    languageSelected = true;
    localStorage.setItem('preferredLanguage', currentLanguage);
    document.getElementById('languageSelector').style.display = 'none';
    showMainContent();
}

// نیشاندانی ناوەڕۆکی سەرەکی
function showMainContent() {
    changeLanguage(currentLanguage);
    loadPosts();
    updateCurrentLangButton();
}

// گۆڕینی زمان
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // وەرگێڕانی هەموو تێکستەکان
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // نوێکردنەوەی پۆستەکان
    loadPosts();
}

// نوێکردنەوەی دوگمەی زمان
function updateCurrentLangButton() {
    const button = document.getElementById('currentLang');
    const langNames = {
        ckb: 'کوردی سۆرانی',
        sdh: 'کوردی بادینی',
        en: 'English',
        fa: 'فارسی',
        ar: 'العربية'
    };
    button.innerHTML = `${langNames[currentLanguage]} <i class="fas fa-chevron-down"></i>`;
}

// بارکردنی پۆستەکان
function loadPosts() {
    const newsGrid = document.getElementById('newsGrid');
    const popularGrid = document.getElementById('popularGrid');
    
    // پاککردنەوەی ناوەڕۆکی پێشوو
    newsGrid.innerHTML = '';
    popularGrid.innerHTML = '';
    
    // پۆستە ئاسایییەکان
    posts.forEach(post => {
        const postElement = createPostElement(post);
        newsGrid.appendChild(postElement);
    });
    
    // پۆستە زۆر بینراوەکان
    const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 3);
    popularPosts.forEach(post => {
        const popularElement = createPopularPostElement(post);
        popularGrid.appendChild(popularElement);
    });
}

// دروستکردنی پۆست
function createPostElement(post) {
    const div = document.createElement('div');
    div.className = 'news-card';
    div.innerHTML = `
        <h3>${post.title[currentLanguage]}</h3>
        <p>${post.content[currentLanguage].substring(0, 100)}...</p>
        <div class="post-stats">
            <span>${post.author}</span>
            <span class="view-count">
                <i class="far fa-eye"></i>
                ${post.views} ${translations[currentLanguage].views}
            </span>
        </div>
    `;
    
    div.addEventListener('click', () => openPostModal(post));
    return div;
}

// دروستکردنی پۆستی زۆر بینراو
function createPopularPostElement(post) {
    const div = document.createElement('div');
    div.className = 'popular-card';
    div.innerHTML = `
        <h4>${post.title[currentLanguage]}</h4>
        <div class="post-stats">
            <span class="view-count">
                <i class="far fa-eye"></i>
                ${post.views} ${translations[currentLanguage].views}
            </span>
        </div>
    `;
    
    div.addEventListener('click', () => openPostModal(post));
    return div;
}

// کردنەوەی مۆدالی پۆست
function openPostModal(post) {
    const modal = document.getElementById('postModal');
    const postTitle = document.getElementById('postTitle');
    const postDate = document.getElementById('postDate');
    const postViews = document.getElementById('postViews');
    const postAuthor = document.getElementById('postAuthor');
    const postContent = document.getElementById('postContent');
    const likeCount = document.getElementById('likeCount');
    
    postTitle.textContent = post.title[currentLanguage];
    postDate.textContent = post.date;
    postViews.textContent = `${post.views} ${translations[currentLanguage].views}`;
    postAuthor.textContent = post.author;
    postContent.textContent = post.content[currentLanguage];
    likeCount.textContent = post.likes;
    
    // زیادکردنی بینین
    post.views++;
    likeCount.setAttribute('data-likes', post.likes);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// داخستنی مۆدالی پۆست
function closePostModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// گۆڕینی حەز
function toggleLike() {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    let likes = parseInt(likeCount.getAttribute('data-likes'));
    
    if (likeBtn.classList.contains('liked')) {
        likeBtn.classList.remove('liked');
        likes--;
        likeBtn.innerHTML = `<i class="far fa-heart"></i> ${translations[currentLanguage].like} ${likes}`;
    } else {
        likeBtn.classList.add('liked');
        likes++;
        likeBtn.innerHTML = `<i class="fas fa-heart"></i> ${translations[currentLanguage].like} ${likes}`;
    }
    
    likeCount.textContent = likes;
    likeCount.setAttribute('data-likes', likes);
}

// هاوبەشکردنی پۆست
function sharePost(platform) {
    const postTitle = document.getElementById('postTitle').textContent;
    const currentUrl = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(currentUrl)}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(postTitle)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(postTitle + ' ' + currentUrl)}`;
            break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// گۆڕینی ڕوناکی/تاریکی
function toggleTheme() {
    if (currentTheme === 'light') {
        currentTheme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        currentTheme = 'light';
        document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('preferredTheme', currentTheme);
    updateThemeSwitcher();
}

// نوێکردنەوەی دوگمەی ڕوناکی/تاریکی
function updateThemeSwitcher() {
    const switcher = document.getElementById('themeSwitcher');
    if (currentTheme === 'light') {
        switcher.innerHTML = '<i class="fas fa-moon"></i><span>ڕوناکی</span>';
    } else {
        switcher.innerHTML = '<i class="fas fa-sun"></i><span>تاریکی</span>';
    }
}

// کردنەوەی مینۆی کشاوە
function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('active');
    document.getElementById('menuOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// داخستنی مینۆی کشاوە
function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('menuOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// زیادکردنی پۆستی نوێ (بۆ نیشاندان)
function addNewPost(title, content, author, category) {
    const newPost = {
        id: posts.length + 1,
        title: {
            ckb: title.ckb || title,
            sdh: title.sdh || title,
            en: title.en || title,
            fa: title.fa || title,
            ar: title.ar || title
        },
        content: {
            ckb: content.ckb || content,
            sdh: content.sdh || content,
            en: content.en || content,
            fa: content.fa || content,
            ar: content.ar || content
        },
        author: author,
        date: new Date().toISOString().split('T')[0],
        views: 0,
        likes: 0,
        category: category
    };
    
    posts.push(newPost);
    loadPosts();
}

// نموونە بۆ زیادکردنی پۆستی نوێ
// addNewPost(
//     {
//         ckb: "سەرناوی نوێ",
//         en: "New Title",
//         fa: "عنوان جدید"
//     },
//     {
//         ckb: "ناوەڕۆکی نوێ...",
//         en: "New content...",
//         fa: "محتوای جدید..."
//     },
//     "نووسەری نوێ",
//     "technology"
// );
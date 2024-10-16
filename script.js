document.addEventListener('DOMContentLoaded', () => {
   const burgerMenu = document.getElementById('burger-menu');
   const mobileMenu = document.getElementById('mobile-menu');
   const mobileMenuItems = mobileMenu.querySelectorAll('li');
   const languageToggle = document.getElementById('language-toggle');
   const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
   const currentLanguageDiv = document.getElementById('current-language');
   const languageOptions = document.getElementById('language-options');
   const languageOptionsList = document.querySelectorAll('.language-option');
   const headerLogo = document.getElementById('header-logo');
   
   let currentLanguage = 'ru';

   burgerMenu.addEventListener('click', () => {
       mobileMenu.classList.toggle('show');
       burgerMenu.classList.toggle('active');

       if (mobileMenu.classList.contains('show')) {
           mobileMenuItems.forEach((item, index) => {
               setTimeout(() => {
                   item.classList.add('show-item');
               }, index * 100); 
           });
       } else {
           mobileMenuItems.forEach(item => item.classList.remove('show-item'));
       }
   });

   // Переключение языка
   const changeLanguage = (selectedLang) => {
       const textRu = ['Меню', 'Мероприятия', 'Новости', 'Галерея', 'О нас', 'Контакты', 'ЗАБРОНИРОВАТЬ'];
       const textEn = ['Menu', 'Events', 'News', 'Gallery', 'About Us', 'Contacts', 'BOOK NOW'];
       const textAr = ['قائمة', 'فعاليات', 'أخبار', 'معرض', 'معلومات عنا', 'اتصال', 'حجز الآن'];
       const textCh = ['菜单', '事件', '新闻', '画廊', '关于我们', '联系', '现在预定'];

       const navLinks = document.querySelectorAll('.header__navigation ul li a');
       const mobileLinks = document.querySelectorAll('.header__mobile-menu ul li a');
       const button = document.querySelectorAll('.header__button');

       const languageText = {
           ru: textRu,
           en: textEn,
           ar: textAr,
           ch: textCh
       };

       if (languageText[selectedLang]) {
           const selectedText = languageText[selectedLang];

           navLinks.forEach((link, index) => link.textContent = selectedText[index]);
           mobileLinks.forEach((link, index) => link.textContent = selectedText[index]);
           button.forEach((btn) => btn.textContent = selectedText[6]);

           currentLanguageDiv.textContent = selectedLang.toUpperCase();
           languageToggle.textContent = selectedLang === 'ru' ? 'English' : selectedLang === 'en' ? 'Русский' : selectedLang === 'ar' ? 'Русский' : 'Русский';
           mobileLanguageToggle.textContent = languageToggle.textContent;
           currentLanguage = selectedLang;
       }
   };

   currentLanguageDiv.addEventListener('click', () => {
       languageOptions.style.display = languageOptions.style.display === 'flex' ? 'none' : 'flex';
   });

   // Смена языка при выборе в выпадающем списке
   languageOptionsList.forEach(option => {
       option.addEventListener('click', (e) => {
           const selectedLang = e.target.getAttribute('data-lang');
           changeLanguage(selectedLang);
           languageOptions.style.display = 'none'; 
       });
   });

   // Смена языка через переключатели languageToggle и mobileLanguageToggle
   languageToggle.addEventListener('click', () => {
       changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru'); 
   });

   mobileLanguageToggle.addEventListener('click', () => {
       changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru'); 
   });

   document.addEventListener('click', (event) => {
       if (!event.target.closest('.header__mobile-language-select')) {
           languageOptions.style.display = 'none';
       }
   });

   // Плавное появление логотипа при скролле
   window.addEventListener('scroll', () => {
       if (window.scrollY > 50) {
           headerLogo.style.opacity = '1';
       } else {
           headerLogo.style.opacity = '0';
       }
   });
});

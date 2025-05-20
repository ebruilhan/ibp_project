document.getElementById('themeToggle').addEventListener('click', function () {
                const body = document.body;
                const currentTheme = body.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                body.setAttribute('data-theme', newTheme);

                const currentLang = document.getElementById('languageToggle').getAttribute('data-lang') || 'tr';
                const isEnglish = currentLang === 'en';

                this.innerHTML = newTheme === 'dark'
                ? `<i class="fas fa-sun"></i> ${isEnglish ? 'Change Theme' : 'Tema Değiştir'}`
                : `<i class="fas fa-moon"></i> ${isEnglish ? 'Change Theme' : 'Tema Değiştir'}`;
            });

            document.getElementById('languageToggle').addEventListener('click', function () {
                const currentLang = this.getAttribute('data-lang') || 'tr';
                const newLang = currentLang === 'tr' ? 'en' : 'tr';
                this.setAttribute('data-lang', newLang);

                document.querySelectorAll('[class*="lang-"]').forEach(el => {
                    if (el.classList.contains(`lang-${newLang}`)) {
                        el.style.display = 'block';
                    } else if (el.classList.contains(`lang-${currentLang}`)) {
                        el.style.display = 'none';
                    }
                });

                const isEnglish = newLang === 'en';
                this.innerHTML = `<i class="fas fa-language"></i> ${isEnglish ? 'TR' : 'EN'}`;

                const themeToggle = document.getElementById('themeToggle');
                const currentTheme = document.body.getAttribute('data-theme') || 'light';
                themeToggle.innerHTML = currentTheme === 'dark'
                ? `<i class="fas fa-sun"></i> ${isEnglish ? 'Change Theme' : 'Tema Değiştir'}`
                : `<i class="fas fa-moon"></i> ${isEnglish ? 'Change Theme' : 'Tema Değiştir'}`;

                const downloadBtn = document.getElementById('downloadPdf');
                downloadBtn.innerHTML = `<i class="fas fa-download"></i> ${isEnglish ? 'Download PDF' : 'PDF İndir'}`;
            });

            document.getElementById('downloadPdf').addEventListener('click', function () {
                const body = document.body;
                const previousTheme = body.getAttribute('data-theme');
                const previousWidth = body.style.width;

    
                body.style.width = "1024px";

                const element = document.querySelector('.container');
                const opt = {
                    margin: [0.5, 0.5, 0.5, 0.5],
                    filename: 'Ebru_Ilhan_CV.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 3, useCORS: true },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
                    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
                };

                html2pdf().set(opt).from(element).save().then(() => {
            
                body.style.width = previousWidth || '';
                });
            });
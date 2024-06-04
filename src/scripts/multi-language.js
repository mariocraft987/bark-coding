const elements = document.querySelectorAll('.multi-language');
const url = `${window.location.origin}/src/translations/languages.json`;
const currentLang = localStorage.getItem('lang');
fetch(url)
    .then(response => response.json())
    .then(data => {
        elements.forEach(element => {
            data.forEach(lang => {
                const option = document.createElement('option');
                option.textContent = lang.name;
                option.value = JSON.stringify(lang);
                if(option.value == currentLang){
                    option.selected = true;
                }
                element.appendChild(option);
            });
            element.addEventListener('change', (e) => {
                localStorage.setItem('lang', e.target.value);
                window.location.reload();
            });
        });
    });

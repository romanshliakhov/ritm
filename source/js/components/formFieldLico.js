const fizicheskoe = document.querySelector('#edit-field-lico-1');
const yuredicheskoe = document.querySelector('#edit-field-lico-2');

const fieldOrg = document.querySelector('.js-form-item-field-nameorganiz');
const activeAdress = document.querySelector('.js-form-item-field-factadres');
const contactFace = document.querySelector('.js-form-item-field-kontaktlico');
const fieldFio = document.querySelector('.js-form-item-field-fio');

if(fizicheskoe && yuredicheskoe) {
    function updateFormVisibility() {
        if (fizicheskoe.checked) {
            fieldFio.style.display = 'block';
            fieldOrg.style.display = 'none';
            activeAdress.style.display = 'none';
            contactFace.style.display = 'none';
        } else if (yuredicheskoe.checked) {
            fieldFio.style.display = 'none';
            fieldOrg.style.display = 'block';
            activeAdress.style.display = 'block';
            contactFace.style.display = 'block';
        }
    }
    
    fizicheskoe.addEventListener('change', updateFormVisibility);
    yuredicheskoe.addEventListener('change', updateFormVisibility);

    // Обновление формы при загрузке страницы
    document.addEventListener('DOMContentLoaded', updateFormVisibility);
}


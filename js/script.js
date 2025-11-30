function initBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.id = 'backToTop';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initQuizForm() {
    const quizForm = document.querySelector('.quiz-form');
    if (!quizForm) return;

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const experienceText = document.getElementById('experience');
        
        if (experienceText.value.length < 20) {
            alert('Пожалуйста, опишите ваш опыт более подробно (минимум 20 символов).');
            return;
        }
        
        alert(`Спасибо, ${nameInput.value}! Ваша заявка успешно принята.`);
        quizForm.reset();
        const investmentValue = document.getElementById('investment-value');
        if(investmentValue) investmentValue.textContent = '0%';
    });

    const investmentSlider = document.getElementById('investment');
    const investmentValueDisplay = document.getElementById('investment-value');
    if (investmentSlider && investmentValueDisplay) {
        investmentSlider.addEventListener('input', function() {
            investmentValueDisplay.textContent = this.value + '%';
        });
    }
}

function initTransformControls() {
    const transformControls = document.querySelectorAll('.transform-controls .transform-box');
    const contentPanels = document.querySelectorAll('.transform-content .content-panel');
    if (transformControls.length > 0 && contentPanels.length > 0) {
        
        transformControls.forEach(button => {
            button.addEventListener('click', () => {
                const targetContentId = button.dataset.content;
                const targetPanel = document.getElementById(targetContentId);
                transformControls.forEach(btn => btn.classList.remove('active'));
                contentPanels.forEach(panel => panel.classList.remove('active'));
                button.classList.add('active');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initBackToTopButton();
    initQuizForm();
    initTransformControls();
});
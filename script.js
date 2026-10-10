document.addEventListener('DOMContentLoaded', () => {
    const entryScreen = document.getElementById('entry-screen');
    const mainContent = document.getElementById('main-content');
    const ipBoxes = document.querySelectorAll('.ip-box');

    
    entryScreen.addEventListener('click', () => {
        entryScreen.classList.add('hidden');
        
        setTimeout(() => {
            entryScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 800); 
    });

    
    ipBoxes.forEach(box => {
        box.addEventListener('click', async function() {
            const textToCopy = this.getAttribute('data-copy');
            const tooltip = this.querySelector('.tooltip');
            const originalText = tooltip.innerText;

            try {
                await navigator.clipboard.writeText(textToCopy);
                
                
                this.style.borderColor = '#4ade80';
                this.style.background = 'rgba(34, 197, 94, 0.1)';
                tooltip.innerText = 'Copied!';
                tooltip.style.color = '#4ade80';
                tooltip.style.opacity = '1';

                
                setTimeout(() => {
                    this.style.borderColor = '';
                    this.style.background = '';
                    tooltip.innerText = originalText;
                    tooltip.style.color = '';
                    tooltip.style.opacity = '';
                }, 2000);

            } catch (err) {
                console.error('Failed to copy text: ', err);
                tooltip.innerText = 'Failed to copy';
            }
        });
    });
});

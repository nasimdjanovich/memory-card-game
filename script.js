window.addEventListener('DOMContentLoaded', () => {
    let loader = document.querySelector('.loader'),
        containerEl = document.querySelector('#container');
        cards_length = 16,
        cards = [];
        previousShownCard = undefined,
        icons = [
            'air-freshener',
            'palette',
            'mug-hot',
            'book',
            'coins',
            'igloo',
            'cog',
            'life-ring'
        ];


    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            container.style.display = 'flex';
        }, 500);
    }, 2000);


// copy the icons (double them);
icons.push(...icons);
for (let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * icons.length);
    const idx2 = Math.floor(Math.random() * icons.length);
    const temp = icons[idx1];
    icons[idx1] = icons[idx2];
    icons[idx2] = temp;
};


for (let i = 0; i < cards_length; i++) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML = `
        <div class="front">
            <i class="fas fa-${icons[i]}"></i>
        </div>
        <div class="back">
            <small>Click Me</small>
        </div>
    `;


    cardEl.addEventListener('click', () => {
        if (!cardEl.classList.contains('show')) {
            cardEl.classList.add('show');
        };
        if (!previousShownCard) {
            previousShownCard = cardEl;
        } else {
            const iconOne = previousShownCard.querySelector('i').classList[1];
            const iconTwo = cardEl.querySelector('i').classList[1];
            if (iconOne !== iconTwo) {
                const temp = previousShownCard;
                setTimeout(() => {
                    temp.classList.remove('show');
                    cardEl.classList.remove('show');
                }, 1000);
            }
            previousShownCard = undefined;
        };
    });
    cards.push(cardEl);
    containerEl.appendChild(cardEl);
};
});
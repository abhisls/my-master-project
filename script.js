fetch('data.json')
    .then(res => res.json())
        .then(data => {
                const grid = document.getElementById('galleryGrid');
                        data.forEach(item => {
                                    const card = document.createElement('div');
                                                card.className = 'card';
                                                            card.innerHTML = `
                                                                            <img src="${item.url}" alt="${item.name}">
                                                                                            <div class="card-info">
                                                                                                                <h3>${item.name}</h3>
                                                                                                                                    <p>${item.category}</p>
                                                                                                                                                    </div>
                                                                                                                                                                `;
                                                                                                                                                                            grid.appendChild(card);
                                                                                                                                                                                    });
                                                                                                                                                                                        })
                                                                                                                                                                                            .catch(err => console.error("JSON Loading Error:", err));

                                                                                                                                                                                            // 2. लाइट/डार्क थीम चेंज करना
                                                                                                                                                                                            document.getElementById('themeBtn').addEventListener('click', () => {
                                                                                                                                                                                                const isLight = document.body.getAttribute('data-theme') === 'light';
                                                                                                                                                                                                    document.body.setAttribute('data-theme', isLight ? '' : 'light');
                                                                                                                                                                                                    });
                                                                                                                                                                                                    
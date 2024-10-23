document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.github.com/users/Kulasq';

    async function fetchGitHubData() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }

            const data = await response.json();

            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-name').textContent = data.name || 'Nome não disponível';
            document.querySelector('.profile-username').textContent = `@${data.login}`;
            document.querySelector('.numbers-item:nth-child(1)').innerHTML = `<h4>Repositórios</h4>${data.public_repos}`;
            document.querySelector('.numbers-item:nth-child(2)').innerHTML = `<h4>Seguidores</h4>${data.followers}`;
            document.querySelector('.numbers-item:nth-child(3)').innerHTML = `<h4>Seguindo</h4>${data.following}`;
            document.querySelector('.profile-link').href = data.html_url;
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    fetchGitHubData();
});

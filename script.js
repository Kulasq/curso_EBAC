document.addEventListener('DOMContentLoaded', () => {
    // URL do GitHub API para obter informações
    const apiUrl = 'https://api.github.com/users/Kulasq';

    // Função para buscar e preencher os dados
    async function fetchGitHubData() {
        try {
            const response = await fetch(apiUrl);

            // Verifica se a resposta é bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }

            const data = await response.json();

            // Preenche os dados no HTML
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

    // Chama a função para buscar os dados
    fetchGitHubData();
});

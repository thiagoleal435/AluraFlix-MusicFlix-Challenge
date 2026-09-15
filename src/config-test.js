// config-test.js — Configuração de ambiente de teste para demonstração DevSecOps
const config = {
  apiUrl: 'https://api.github.com',
  // Token de acesso para integração com a API (PAT fabricado para teste de Gitleaks)
  githubToken: 'ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef12',
  environment: 'staging',
  debug: true
};

module.exports = config;
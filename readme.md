![alt text](image.png)

# Como rodar o projeto
## Clone o repositório:
    git clone https://github.com/JaoBrito/teste-Seven.git 
    cd seu-repositorio
    
## Instale as dependências:
    npm install
## Configure as variáveis de ambiente:
Crie um arquivo `.env` 
_Exemplo de `.env`:_

    DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
        
## Crie o banco de dados e rode as migrações:
    npx prisma migrate dev
    
## (Opcional) Gere os clientes do Prisma:
    npx prisma generate
    
### Executando a Aplicação
    npm run dev

## Rodar teste de criação de pedidos
    npm teste

# Funcionalidades

## 1. Autenticação e Gestão de Usuários

- Registro de usuário (criptografando a senha) ✅

- Login de usuário (retorna um token JWT) ✅

- Consulta de dados do próprio usuário (autenticado) ✅

## 2. Gestão de Produtos

- Criar, listar, atualizar e remover produtos (autenticado) ✅

## 3. Gestão de Pedidos

- Criar pedido (apenas usuários autenticados) ✅

- Listar pedidos do usuário ✅

- Atualizar status do pedido (somente administradores, se

implementado) ✅

### Diferenciais (Opcional, mas um plus)

- Implementar Swagger/OpenAPI para documentação. ✅

- Criar testes automatizados (Jest ou outra ferramenta) - o quanto você

puder fazer - não existe uma cobertura mínima. ✅

- Utilizar Docker para facilitar a execução do projeto. ⛔*

  

*Tentei utilizar o Docker, porém tive muitos problemas para estar baixando o mesmo.

 
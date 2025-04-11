# 📝 **Back-End Gerenciamento de Categorias e Produtos**

Este projeto é uma API back-end para gerenciamento de **categorias** e **produtos**. Desenvolvido com **NestJS**, **TypeScript** e **Mongoose**, ele oferece uma estrutura escalável para operações **REST** com foco em modularidade e boas práticas de desenvolvimento.

---

## 🚀 **Funcionalidades**

### **Back-End**

- API REST para gerenciamento completo de categorias e produtos.
- Conexão com banco de dados **MongoDB** via **Mongoose**.
- Estrutura modular com separação entre camadas (controllers, services, schemas).
- Endpoints de busca por diferentes atributos (nome, tipo, ID).
- Relacionamento entre produtos e categorias.
- Validações de dados com decorators do NestJS.

---

## 🛠️ **Tecnologias Utilizadas**

- **NestJS**: Framework para desenvolvimento back-end em TypeScript.
- **TypeScript**: Tipagem estática que aumenta a robustez do código.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM para interação com MongoDB.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Class-validator** e **Class-transformer**: Validações e transformações de dados.

---

## 🔧 **Como o Sistema Funciona**

1. **Categorias**

   - Criar, listar, atualizar, buscar por ID ou tipo, e excluir categorias.

2. **Produtos**

   - Criar, listar, atualizar, buscar por ID ou nome, e excluir produtos.
   - Associação entre produto e categoria.

3. **Arquitetura Limpa**

   - Separação de responsabilidades com estrutura modular para escalabilidade.

4. **Persistência de Dados**
   - Toda a informação é armazenada no MongoDB com schemas definidos por Mongoose.

---

## 📋 **Requisitos**

- **Node.js** (v14 ou superior)
- **MongoDB** (local ou remoto)

---

## 🔧 **Como Configurar o Projeto**

1. Clone este repositório:  

   git clone https://github.com/Vinicius-Rodriguess/product-category-api.git  

   cd product-category-api

2. Instale as dependências:  

   npm install

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:  

   MONGO_URI=mongodb://localhost:27017/nome-do-banco

4. Inicie o servidor:  

   npm run start:dev

---

## 🖥️ **Exemplo de Uso**

### **Categorias**

- GET /categorias → Lista todas as categorias
- GET /categorias/:id → Busca uma categoria pelo ID
- GET /categorias/tipo/:tipo → Busca categorias por tipo
- POST /categorias → Cria uma nova categoria
- PUT /categorias → Atualiza uma categoria
- DELETE /categorias/:id → Remove uma categoria

### **Produtos**

- GET /produtos → Lista todos os produtos
- GET /produtos/:id → Busca um produto pelo ID
- GET /produtos/nome/:nome → Busca produtos pelo nome
- POST /produtos → Cria um novo produto
- PUT /produtos → Atualiza um produto existente
- DELETE /produtos/:id → Exclui um produto

---

## 📌 **Limitações**

- Requer MongoDB configurado e rodando.
- Sem autenticação implementada (pode ser adicionada futuramente).
- A documentação com Swagger ainda não foi implementada.

---

## ✅ **Melhorias Futuras**

- Implementar autenticação JWT.
- Adicionar Swagger para documentação automática.
- Adicionar testes unitários com Jest.
- Paginação e ordenação nos endpoints de listagem.
- Upload de imagem para produtos.

---

## 👨‍💻 **Autor**

**Vinicius Rodrigues**

- GitHub: [Vinicius-Rodriguess](https://github.com/Vinicius-Rodriguess)
- Email: rodrigues.vini.2004@gmail.com

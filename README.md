# **Gerenciamento de Categorias e Produtos**

![Logo Placeholder](https://via.placeholder.com/200)

## 1. Descrição

O projeto é uma API desenvolvida em **TypeScript** utilizando o **NestJS** como framework back-end.  
O objetivo principal é gerenciar **categorias** e **produtos**, permitindo que os usuários possam criar, visualizar, atualizar e excluir informações. A API é estruturada de forma modular e utiliza **TypeORM** para a manipulação do banco de dados relacional **MySQL**.

---

## 2. Sobre esta API

A API foi projetada para facilitar o gerenciamento de produtos e categorias, fornecendo endpoints REST para operações CRUD. Além disso, implementa boas práticas de desenvolvimento, como a separação de responsabilidades entre entidades, controladores e serviços.

### 2.1. Principais Funcionalidades

1. **Gerenciamento de Categorias**  
   Os endpoints permitem:  
   - Listar todas as categorias.  
   - Buscar uma categoria pelo ID ou tipo.  
   - Criar, atualizar e excluir categorias.

2. **Gerenciamento de Produtos**  
   Os endpoints permitem:  
   - Listar todos os produtos.  
   - Buscar um produto pelo ID ou nome.  
   - Criar, atualizar e excluir produtos.  
   - Relacionar produtos com categorias.

---

## 3. Diagrama de Classes

### Classes Principais:

#### Categoria
- **Tabela**: `tb_categorias`  
- **Atributos**:  
  - `id`: Identificador único da categoria.  
  - `tipo`: Tipo da categoria (máximo de 1000 caracteres).  
  - **Relações**:  
    - `produtos`: Associação com a entidade `Produto`.  

#### Produto
- **Tabela**: `tb_produtos`  
- **Atributos**:  
  - `id`: Identificador único do produto.  
  - `nome`: Nome do produto (máximo de 255 caracteres).  
  - `preco`: Preço do produto (armazenado como decimal).  
  - `foto`: URL da imagem do produto.  
  - **Relações**:  
    - `categoria`: Associação com a entidade `Categoria`.  

---

## 4. Endpoints Disponíveis

### 4.1. Categoria  

#### **GET /categorias**  
Lista todas as categorias.  

#### **GET /categorias/:id**  
Busca uma categoria pelo ID.  

#### **GET /categorias/tipo/:tipo**  
Busca categorias pelo tipo.  

#### **POST /categorias**  
Cria uma nova categoria.  

#### **PUT /categorias**  
Atualiza uma categoria existente.  

#### **DELETE /categorias/:id**  
Exclui uma categoria pelo ID.  

---

### 4.2. Produto  

#### **GET /produtos**  
Lista todos os produtos.  

#### **GET /produtos/:id**  
Busca um produto pelo ID.  

#### **GET /produtos/nome/:nome**  
Busca produtos pelo nome.  

#### **POST /produtos**  
Cria um novo produto.  

#### **PUT /produtos**  
Atualiza um produto existente.  

#### **DELETE /produtos/:id**  
Exclui um produto pelo ID.  

---

## 5. Tecnologias Utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |
| **Servidor**                  | Node.js    |
| **Linguagem de programação**  | TypeScript |
| **Framework**                 | NestJS     |
| **ORM**                       | TypeORM    |
| **Banco de dados Relacional** | MySQL      |

---

## 6. Configuração e Execução

1. Clone o repositório.  
2. Instale as dependências:  
   ```bash
   npm install
   ```  
3. Configure as variáveis de ambiente criando um arquivo `.env` com as seguintes chaves:  
   ```
   DB_HOST=seu_host
   DB_PORT=3306
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=seu_banco
   ```  
4. Execute a aplicação em modo de desenvolvimento:  
   ```bash
   npm run start:dev
   

# 💰 JM-Finance (Front-end)
🚀 Aplicativo mobile para gerenciamento financeiro pessoal, permitindo o cadastro de receitas, despesas e visualização de saldo por categorias.

## 📌 Tecnologias Utilizadas
- **React Native** (Expo)
- **Expo Router** (Navegação)
- **TypeScript**
- **Axios** (Requisições HTTP)
- **React Native Vector Icons**
- **Styled Components** (Estilização)
- **AsyncStorage** (Persistência local)

## 🎨 Design no Figma
Estou desenvolvendo o design do aplicativo **JM-Finance** no **Figma**.  
Você pode visualizar e acompanhar o protótipo pelo link abaixo:  

🔗 [Figma - JM-Finance](https://www.figma.com/design/r33YHjHEGAaer8lXrO4k3b/JM-Finance?node-id=0-1&t=4jzZL5ecgusb36qF-1)  

Esse design orienta o desenvolvimento do app e garante uma interface intuitiva e agradável para os usuários.  

## 📌 Pré-requisitos
Antes de rodar o projeto, certifique-se de ter instalado:
- **Node.js 18+**
- **Expo CLI**
- **VS Code** (ou outro editor de código)
- **Emulador Android/iOS** ou dispositivo físico

## 📌 Configuração da API
O aplicativo consome a API **JM-Finance API**, disponível no repositório:
🔗 [JM-Finance API](https://github.com/JoseMatheus29/JM-Finance-API)

No arquivo `services/api.ts`, configure a URL da API:
```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // 🔹 Altere se necessário
  timeout: 10000,
});

export default api;
```

## 📌 Passo a Passo para Rodar o Projeto

**Clonar o repositório**  
``` git clone https://github.com/seu-usuario/jmfinance-front.git```  
``` cd jmfinance-front```  
**Instalar as dependências**  
```npm install```  
**Rodar o projeto**    
```npx expo start```  
**Rodar no dispositivo**  
Android: Digitalize o QR Code no Expo Go
iOS (Mac): Rode npx expo start --ios
Emulador Android: Rode npx expo start --android

## 📌 Autor
Desenvolvido José Matheus✌  [Veja meu Linkedin](https://www.linkedin.com/in/josé-matheus-de-lima-27706a1b6/)



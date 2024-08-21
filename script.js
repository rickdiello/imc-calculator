/* Eu estou definindo os estilos globais para remover margens e paddings padrão, 
   além de definir a fonte padrão para a aplicação */
   * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Eu configurei o corpo do documento para ter um fundo gradiente e centralizei 
  a calculadora tanto verticalmente quanto horizontalmente */
body {
   background: linear-gradient(135deg, #f0f0f5, #d9d9e3);
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   color: #333;
}

/* Aqui, eu estilizei o container principal da calculadora, adicionando 
  bordas arredondadas, sombras e centralizando o conteúdo */
.container {
   background-color: #ffffff;
   padding: 40px;
   border-radius: 12px;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
   width: 100%;
   max-width: 360px;
   text-align: center;
}

/* Eu defini o estilo do título principal da calculadora */
h1 {
   font-size: 24px;
   margin-bottom: 30px;
   color: #1c1c1e;
}

/* Estes são os estilos que criei para cada grupo de entrada (input), 
  garantindo que o layout ficasse organizado */
.input-group {
   margin-bottom: 20px;
   text-align: left;
}

label {
   display: block;
   font-size: 16px;
   margin-bottom: 8px;
   color: #636366;
}

/* Aqui, eu estilizei os campos de entrada (inputs e selects), 
  adicionando bordas arredondadas e efeitos de foco */
input, select {
   width: 100%;
   padding: 10px;
   font-size: 16px;
   border: 2px solid #d1d1d6;
   border-radius: 8px;
   background-color: #f9f9f9;
   color: #1c1c1e;
   transition: border-color 0.3s;
}

input:focus, select:focus {
   outline: none;
   border-color: #007aff;
}

/* Este é o estilo que defini para o botão de calcular IMC, com cores 
  e efeitos de hover */
.btn {
   width: 100%;
   padding: 12px;
   font-size: 18px;
   background-color: #007aff;
   color: #ffffff;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: background-color 0.3s, box-shadow 0.3s;
}

.btn:hover {
   background-color: #005bb5;
   box-shadow: 0 4px 10px rgba(0, 122, 255, 0.3);
}

/* Eu adicionei este estilo para exibir os resultados após o cálculo do IMC */
.resultado {
   margin-top: 30px;
   font-size: 20px;
   font-weight: 500;
   color: #1c1c1e;
}

/* Este bloco cuida da responsividade para telas menores */
@media (max-width: 768px) {
   .container {
       padding: 20px;
       max-width: 300px;
   }

   h1 {
       font-size: 20px;
   }

   .btn {
       font-size: 16px;
       padding: 10px;
   }
}

/* Aqui, eu criei os estilos para o modo escuro, 
  mudando as cores de fundo e texto */
body.dark-mode {
   background: linear-gradient(135deg, #1c1c1e, #2c2c2e);
   color: #f0f0f5;
}

body.dark-mode .container {
   background-color: #2c2c2e;
   box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}

body.dark-mode input, body.dark-mode select {
   background-color: #3a3a3c;
   color: #f0f0f5;
   border: 2px solid #555555;
}

body.dark-mode .btn {
   background-color: #444444;
   color: #ffffff;
}

body.dark-mode .btn:hover {
   background-color: #555555;
}

/* Estilo para o contêiner do modo escuro */
.dark-mode-toggle {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 20px;
}

/* Estilo para o título do modo escuro */
.dark-mode-toggle h2 {
   font-size: 1.5em;
   color: #333;
   margin-bottom: 10px;
}

/* Estilo para o switch ON/OFF do modo escuro */
.switch {
   position: relative;
   display: inline-block;
   width: 40px;
   height: 20px;
}

.switch input {
   opacity: 0;
   width: 0;
   height: 0;
}

.slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   transition: .4s;
   border-radius: 34px;
}

.slider:before {
   position: absolute;
   content: "";
   height: 16px;
   width: 16px;
   left: 2px;
   bottom: 0px;
   background-color: white;
   transition: .4s;
   border-radius: 50%;
}

input:checked + .slider {
   background-color: #007aff;
}

input:checked + .slider:before {
   transform: translateX(20px);
}

/* Especificamente para o título principal */
body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode h4, body.dark-mode h5, body.dark-mode h6 {
   color: #ffffff; /* Títulos em branco no modo escuro */
}

body.dark-mode input, body.dark-mode select, body.dark-mode button {
   color: #ffffff; /* Altera a cor do texto dos inputs e botões para branco */
}

/* Labels dos campos */
body.dark-mode label {
   color: #ffffff; /* Labels em branco no modo escuro */
}

body.dark-mode .slider {
   background-color: #555; /* Altera a cor do fundo do botão no modo escuro */
}

/* Eu estilizei o modal para exibir o resultado em uma janela centralizada 
  e com fundo escurecido */
.modal {
   display: none; /* Escondi o modal por padrão */
   position: fixed;
   z-index: 1;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro com opacidade */
}

.modal-content {
   background-color: #fefefe;
   margin: 10% auto; /* Centralizei o modal na tela */
   padding: 20px;
   border: 1px solid #888;
   width: 80%;
   max-width: 500px;
   border-radius: 8px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* No modo escuro, eu alterei a cor do fundo e do texto do modal */
body.dark-mode .modal-content {
   background-color: #2c2c2e;
   color: #f0f0f5;
   border-color: #555;
}

/* Eu configurei o estilo do botão de fechar o modal (o "X") */
.close {
   color: #aaa;
   float: right;
   font-size: 28px;
   font-weight: bold;
   cursor: pointer;
}

.close:hover,
.close:focus {
   color: black;
   text-decoration: none;
   cursor: pointer;
}

/* No modo escuro, o "X" do modal fica branco para ser mais visível */
body.dark-mode .close {
   color: #ffffff;
}

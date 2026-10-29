# Respostas escritas - Exercícios de CORS

## Exercício 1
Trecho que habilita o CORS (arquivo `exercicio-1/server.js`):

```javascript
const cors = require('cors');
app.use(cors());
```

## Exercício 2
**Por que a chamada pode funcionar no Postman e falhar no navegador?**

A política de CORS é aplicada pelo **navegador**, não pelo servidor. O Postman não aplica essa regra, então recebe a resposta normalmente.

O navegador percebe que as origens são diferentes (portas 5500 e 3000) e que o servidor não enviou o cabeçalho `Access-Control-Allow-Origin` permitindo o acesso. Por isso, impede que o JavaScript leia a resposta. A API não está fora do ar: a requisição chega ao servidor, mas o navegador bloqueia o acesso ao resultado.

Mensagem vista no console (F12):

```
Access to fetch at 'http://localhost:3000/usuarios' from origin
'http://localhost:5500' has been blocked by CORS policy
```

## Exercício 3
Com o frontend em `http://localhost:5500`, a chamada funciona.

**E se a página rodar em outra origem?** Por exemplo, `http://localhost:5501` (outra porta) ou `https://localhost:5500` (outro protocolo). A origem não corresponde à configurada, então o servidor não a libera e o navegador bloqueia o acesso à resposta, mostrando o erro de CORS no console. A origem precisa bater exatamente em protocolo + host + porta.

## Exercício 4
O HTML está em `exercicio-4/index.html`. Resultado esperado no console:

```
[ { id: 1, nome: 'Ana' } ]
```

## Exercício 5
Configuração (arquivo `exercicio-5/server.js`):

```javascript
app.use(cors({
  origin: 'http://localhost:5500',
  methods: ['GET']
}));
```

**Objetivo de limitar os métodos:** liberar apenas o que a aplicação realmente precisa. Se o frontend só consulta dados, não há motivo para permitir `POST`, `PUT` ou `DELETE` vindos do navegador. Isso deixa a configuração mais segura e controlada.

Lembrete: o CORS não substitui autenticação e autorização.

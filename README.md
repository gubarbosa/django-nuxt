# django-nuxt
Construindo uma aplicação simples usando Nuxt.js/Vue.js e Django

Django é o framework de desenvolvimento web Python mais popular.
Recentemente, ele tem sido amplamente utilizado para desenvolver plataformas de backend, 
fornecendo acesso a dados via REST, GraphQL ou tecnologias similares. 
Embora muitos artigos tenham sido escrito com o objetivo de mostrar a integração do Django como backend com frameworks de frontend Javascript,
como o React, Angular, VueJS, eu não encontrei um artigo completo que apresente a integração do Django com o NuxtJS, 
incluindo o gerenciamento de requisições autenticadas.

Eu gostaria de frisar que muitas outras estratégias poderiam ser empregadas para desenvolver tal integração, 
mas eu apresento a que se parece, ao meu ver, uma das mais adequadas. Eu implemento o backend usando Django 3 com Django REST framework para construir as APIs. 
O frontend é implementado com NuxtJS consumindo e renderizando as respostas JSON oriundas da API Django REST.

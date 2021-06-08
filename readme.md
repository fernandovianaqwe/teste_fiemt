<p>Projeto</p>

<p>Requisitos: Docker</p>

<p>Guia de instalação:</p>

<p>1º: Entrar no arquivo hosts no caminho 'C:\Windows\System32\drivers\etc\hosts' pra Windows, '/private/etc/hosts' ou '/etc/hosts para' MAC ou execute no terminal 'cat /etc/hosts' para linux Adicionar:</p>

<code>127.0.0.1 fiemt.api</code>
<code>127.0.0.1 fiemt.local </code>

<p>Na ultima linha do arquivo.</p>

<p>2º: Escolher um diretorio para fazer o git clone. executar o comando no terminal na preferência:</p>

<code>git clone https://github.com/fernandovianaqwe/teste_fiemt.git</code>

<p>3º: Entrar na pasta clonada com o comando:</p>

<code>cd fiemt</code>

<p>4º: Entrar na pasta laradock com o comando:</p>

<code>cd laradock</code>

<p>5º: Executar o comando docker para baixar os containers e dar os start (pode demorar alguns minutos): </p>

<code>docker-compose up -d nginx mysql5.7 phpmyadmin workspace</code>

<p>6º: Entrar no container workspace para baixar as pedencias do projeto:</p>

<code>docker-compose -it exec workspace /bin/bash</code>

<p>7º: Dar permissão para a pasta e entrar na pasta do prjeto:</p>

<code>chmod -R 777 fiemt/</code>

<code>cd fiemt</code>

<p>8º: Baixar dependências do laravel usando o composer e npm:</p>

<code>composer install</code>

<code>npm install</code>

<p>9º: Rodar a migrate para criar as tabela e os dados de amostra da api:</p>

<code>php artisan migrate</code>

<p>Fim da instalação.</p>


<p>http://fiemt.api/  para acessar a api</p>
<p>http://fiemt.local/ para acessar o front</p>

http://localhost:8081/ acesso phpmyadmin 
<p>local: mysql5.7 <br>
User: root<br>
Password: root</p>


<p>OBS: Se rodar o docker pelo windows deve ficar lento, o linux o docker roda mais rapido.</p>
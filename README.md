# Laravel + Vue.js with Socket.io
A template for starter projects.

### Here are the Steps to follow in order to run this project:
<ul>
  <li>Clone this project through:</li>
    <ul>
      <li>HTTPS: <code>https://github.com/monielly/laravel-socket-io.git</code></li>
      <li>SSH: <code>git@github.com:monielly/laravel-socket-io.git</code></li>
      <li>Github CLI: <code>gh repo clone monielly/laravel-socket-io</code></li>
    </ul>
  </li>
  <li>Create a blank Database.</li>
  <li>Migrate the db-migrations by running this command: <code>php artisan migrate</code>.</li>
  <li>Run the db-seeder with this command: <code>php artisan db:seed</code> or <code>php artisan db:seed --class=CreateAdminUserSeeder</code> and <code>php artisan db:seed --class=PermissionSeeder</code>.
  </li>
  <li>Required npm commands:</li>
    <ul>
      <li><code>sudo npm install --global cross-env</code></li>
      <li><code>rm -rf node_modules && npm install</code></li>
      <li>then lastly, <code>npm run watch</code></li>
    </ul>
  <li>For Socket I.O</li>
  <ul>
     <li>Locate to js files by running this command:</li>
      <ul>
        <li><code>cd resources/js</code></li>
        <li>then run, <code>node server.js</code></li>
      </ul>
  </ul>
  <li>For Php Artisan commands:</li>
    <ul>
      <li><code>php artisan serve</code></li>
      <li>then copy the created URL and port on browser.</li>
    <ul>
  <li>To login on page, see sample account that were created awhile ago on Seeders.</li>
</ul>

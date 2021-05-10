# Laravel + Vue.js with Socket.io
A template for starter projects.

### Here are the Steps to follow in order to run this project:
<ul>
  <li>Clone this project through:</li>
    <ul>
      <li>HTTPS: `https://github.com/monielly/laravel-socket-io.git`</li>
      <li>SSH: `git@github.com:monielly/laravel-socket-io.git`</li>
      <li>Github CLI: `gh repo clone monielly/laravel-socket-io`</li>
    </ul>
  </li>
  <li>Create a blank Database.</li>
  <li>Migrate the db-migrations by running this command: `php artisan migrate`.</li>
  <li>Run the db-seeder with this command: `php artisan db:seed` or `php artisan db:seed --class=CreateAdminUserSeeder` and `php artisan db:seed --class=PermissionSeeder`.
  </li>
  <li>Required npm commands:</li>
    <ul>
      <li>`sudo npm install --global cross-env`</li>
      <li>`rm -rf node_modules && npm install`</li>
      <li>then lastly, `npm run watch`</li>
    </ul>
  <li>For Socket I.O</li>
  <ul>
     <li>Locate to js files by running this command:</li>
      <ul>
        <li>`cd resources/js`</li>
        <li>then run, `node server.js`</li>
      <ul>
  </ul>
  <li>For Php Artisan commands:</li>
    <ul>
      <li>`php artisan serve`</li>
      <li>then copy the created URL and port on browser.</li>
    <ul>
  <li>To login on page, see sample account that were created awhile ago on Seeders.</li>
</ul>

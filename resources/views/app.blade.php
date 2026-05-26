<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
    @inertiaHead

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7P4J67NX86"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-7P4J67NX86');
    </script>
  </head>
  <body class="bg-gray-100 dark:bg-gray-900">
    @inertia
  </body>
</html>

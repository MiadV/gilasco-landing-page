### GilasCo Landing Page

![Website](https://img.shields.io/website?down_color=red&down_message=orange&up_color=green&up_message=Live&url=https%3A%2F%2Fgilasco.com%2F)

This project is based on [Argon Design System React](https://www.creative-tim.com/product/argon-design-system-react) and is bootstraped with [CRA](https://create-react-app.dev/).

![GilasCo Landing Page](/preview-gilasco.com.png)
[Live Website](https://gilasco.com/)

## Development

1. Clone this reposiroty `git clone https://github.com/MiadV/gilasco-landing-page.git`
2. Navigate to project folder and install the dependencies.

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

1. If you’re using [Apache HTTP Server](https://httpd.apache.org/), you need to create a .htaccess file in the public folder that looks like this:
   **Note:** This is necessary since we are using client-side routing.

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

2. Build the project using below command:

```bash
npm run build
# or
yarn run build
```

## Cloning / Forking

Please review the [license]('LICENSE') and remove all client information (logo, address, images, branding content, etc.).

## Credits

- [Creative Tim - Argon Design System](https://www.creative-tim.com)

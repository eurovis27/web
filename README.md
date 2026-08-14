[![Deploy to GitHub Pages](https://github.com/eurovis27/web/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/eurovis27/web/actions/workflows/deploy.yml)

# Eurographics Conference on Visualization 2027 (EuroVis)

This will be the website for the 29th international EuroVis conference, which will take place in 2027 in [Stuttgart, Germany](https://www.openstreetmap.org/relation/5294338). The conference is organized by the [Visualization Research Center (VISUS)](https://www.visus.uni-stuttgart.de/en/) at the University of Stuttgart.

## Contribute

See the [contribution instructions](CONTRIBUTE.md) for information on how to contribute to the website content.

## Development

### NPM

* Open a terminal (e.g., PowerShell) and navigate to the root directory of the project.
* Run `npm install` to install all required dependencies.

**Option 1: Development server**

* Run `npm run dev`.
* Open `http://localhost:4321/` in your browser.

**Option 2: Preview the production build**

To test the production version locally:

* Run `npm run build` to build the production site to `./dist/`.
* Run `npm run preview` to preview the production build locally.

### Python

Alternatively, you can serve the built site using Python's built-in HTTP server:

* Open a terminal (e.g., PowerShell) and navigate to the root directory of the project.
* Run `npm run build`.
* Navigate to the `./dist` folder.
* Run `python -m http.server`.
* Open `http://localhost:8000/` in your browser.

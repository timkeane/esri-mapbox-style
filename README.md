# esri-mapbox-style

This project exists to document this issue:

[The mapbox style for the NYC basemap created by ESRI fails to load in mapbox-gl-js](https://github.com/timkeane/esri-mapbox-style/issues/1)

A running version of this example can be found [here](https://mapshome.nyc.gov/sandbox/esri-mapbox-style/)

To build:

1. Create a .env file in the root of this project and the the following variable definitions:
```
MAPBOX_TOKEN="your-mapbox-token-here"
ESRI_TOKEN="your-esri-token-here"
```
2. Download dependencies and build with your API tokens
```
npm install && npm run build
```
3. Deploy to an HTTP Server

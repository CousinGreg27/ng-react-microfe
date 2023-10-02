## Running project locally
**react-mfe**
- cd into `react-mfe` directory.
- Run `npm i`
- Run `npm run build:webpack`
*After this finishes, you should notice a dist dir in project structure. Cd into this dir*
**Ensure you have http-server npm package installed globally. If not run `npm I -g http-server` or with your preferred package manager.**
- In the dist dir run the following command: `http-server . --cors`
*It should say it is available on port :8080*

**angular-mfe**
- cd into `angular-mfe` dir
- Run `npm i`
- Run `npm run build:single-spa:angular-mfe`
*After this finishes, you should notice a dist dir in project structure. Cd into this dir*
**Ensure current dir is angular-mfe and run command `http-server . --cors`**
*It should say it is available on port :8081*

**shell-app**
- In a new terminal, cd into root of project (ng-react-microfe %)
- Run command `npm start`
*It should say it is running at localhost:9000 and open it in the browser. (Ensure Devtools inspector is open and network is selected)*

You should see our `react-mfe` displayed elements with and additional link to go the angular-mfe. If you look in the network tab you will see it is serving react and react-dom from script tags and
should see our `react-mfe` being loaded in at `localhost:8080/react-mfe-react-mfe.js`.

Once you click the link to go to the `angular-mfe`, notice the network tab changes. Look for `main.js` and open it in a new tab. It loads our `angular-mfe` in a separate port (8081). 
This is allowing SystemJS to handle routing of our microfrontends. (Phase 1)

## Creating and registering a new app/parcel
*If we want to add a new react `parcel`*

## Importing a parcel into a registered application

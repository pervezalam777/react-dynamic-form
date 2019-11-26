# Dynamic Form Builder
This dynamic form builder project helps to create different types of form with 
just config file 

## The following are steps to run the project

```bash
> npm install
> npm start
```

## Test dependency
```bash
> npm i enzyme enzyme-adapter-react-16 react-test-renderer
```

## Use following script for generating code coverage
```bash
> npm run test -- --coverage --watchAll=false
# or
> npm run coverage
```

## Runnig application with docker
The following steps would be require to run build in development mode with Docker. 
It will keep updating your appliction code inside the docker container.

```bash
# build the docker image tag name is "pervezalam777/dynamic-react-form"
> docker build -t pervezalam777/dynamic-react-form -f Dockerfile.dev . 

#
# The follwoing command is valid for window OS for Mac/linux change ${pwd} to $(pwd)
> docker run -p 3000:3000 -v app/node_modules -v ${pwd}:/app pervezalam777/dynamic-react-form

```
> docker on window have some issue with watch for react application. If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an .env file in your project directory if it doesn’t exist, and add CHOKIDAR_USEPOLLING=true to it. This ensures that the next time you run npm start, the watcher uses the polling mode, as necessary inside a VM.

## Pending task
* Support for checkbox element
* Support for file input element
* Localization
* Submit button name hard code 
* Screen reader accessibility 
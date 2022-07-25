# NextJS
## file based routing

## The React Framework for production
## A full stack framework for ReactJs

<hr>

### NextJS - key features and benefits
1. File based routing : Define pages and routes with files and folders instead of code, less code less work highly understandable
2. Server-side Rendering : Automatic page pre-rendering: Great for SEO and initial load, Blending client side and server-side: Fetched data on the server and render finished pages
3. Fullstack Capabilities : Easily add backend (server-side) code to your Next/React app, storing data, getting data, authenctication, etc can be added to your React project

### NextJS allows us to determine when a page should be pre-rendered

create a new next app
`npx create-next-app@latest`

to run the app locally 
`npm run dev`

## NextJS
importing React is not necessary as it is imported behind the scene

## routing 
* folder structure plays an important role in routin g
* multiple pages folder is the main one, must contain index.js file which is the domain.com/ page
* every folder inside page having index.js file will be like domain.com/< folderName >/ 
* other files will be treated as domain.com/< filename> of domain.com/< folderName >/ < filename>

## creating Dynamic pages
* create file with [<filename>].js can access  dynamic parameter values using useRouter hook provided by <mark>NextJS</mark>
* initialy useRouter() will be undefine then it will again render the page carrying page information 

## Linking between pages
* import Link from 'next/Link' with href attribute, anchor tag can also work but it will send a request
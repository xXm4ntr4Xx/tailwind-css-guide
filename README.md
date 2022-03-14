# tailwind-css-guide

1.First we create our next.js  file (in the example we create an app called cat-app)

<img width="329" alt="Screenshot 2022-03-14 at 11 19 24" src="https://user-images.githubusercontent.com/74420607/158161933-3a23b788-65c3-4fc4-ac57-9d97fe4a3a54.png">

code source = npx create-next-app@latest cat-app cd cat-app 
<hr/>

2.We configure tailwind e we initialise the tailwind config file

<img width="408" alt="Screenshot 2022-03-14 at 11 20 47" src="https://user-images.githubusercontent.com/74420607/158162121-89a255fd-5f5e-4acb-870a-306d0a64749b.png">

code source = npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p
<hr/>


##importan
If you get an error about babel compiler

  - create a babelrc file with no extension and add the following line of code

<img width="228" alt="Screenshot 2022-03-14 at 11 27 38" src="https://user-images.githubusercontent.com/74420607/158163062-e8c63cc2-eedb-4538-821d-24aadae8e198.png">

code source = {
    "presets": ["next/babel"],
    "plugins": []
  }
  
  - replace the .eslintrc.json file content with this line of code
  
  <img width="348" alt="Screenshot 2022-03-14 at 11 31 14" src="https://user-images.githubusercontent.com/74420607/158163487-a617d44d-4b52-46d2-b6af-3e64bcb64f7e.png">

source code = {
  "extends": ["next/babel","next/core-web-vitals"]
}

<hr/>
3. Copy this code inside the tailwind.config.js file

<img width="362" alt="Screenshot 2022-03-14 at 11 24 24" src="https://user-images.githubusercontent.com/74420607/158162611-784a2f80-f123-470d-a164-ea71bac260aa.png">


code source = module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
<hr/>

4. On global.css file add the following tailwind structure and basic css

<img width="271" alt="Screenshot 2022-03-14 at 11 32 52" src="https://user-images.githubusercontent.com/74420607/158163713-fbfdd380-31ae-48d7-8b32-916127deb310.png">


source code = @tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

<hr/>

5. Delete unnecessary files

<img width="426" alt="Screenshot 2022-03-14 at 11 35 44" src="https://user-images.githubusercontent.com/74420607/158164202-693b058d-d5aa-4388-ad51-88ef7b96d5da.png">
<hr/>

6.Clean the home page to look like this

<img width="701" alt="Screenshot 2022-03-14 at 11 37 20" src="https://user-images.githubusercontent.com/74420607/158164406-de967bba-a77b-47d8-8ee1-0e1890ac98f6.png">


source code = export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl'>The Cat App</h1>
    </div>
  )
}

<hr/>


7.Add some image on your public folder and import the images using Image components in your home page

source code = 

import Image from "next/image"
import cat1 from "../public/images/cat1.gif"
import cat2 from "../public/images/cat2.gif"
import cat3 from "../public/images/cat3.gif"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row'>
      <h1 className='text-3xl'>The Cat App</h1>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={cat1}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div>
    </div>
  )
}
<hr/>

8. Here an example of extra css style added 

source code =

@tailwind base;
@tailwind components;
@tailwind utilities;

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
<hr/>

Guide complete

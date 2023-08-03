# Flashcards - Learning - App
### Flashcards is a user friendly, nice designed and fully functional application for learning english. 

> #### Technologies used to build Flashcards:
> - Next.js
> - TypeScript
> - TailwindCSS
> - Redux
> - Shadcn-ui
> - Framer Motion

#### Install Flashcards on your machine: (list of steps)
- Type ``git clone https://github.com/KoniczynSzef/Flashcards-Learning-App.git`` to clone my repository
- Run ``npm install`` for installing all necessary dependencies and packages
- Run ``npm run dev`` script for running an application in development mode
- Go to [localhost:3000](http://localhost:3000/) and see the project

If You want, You can also update the list of words:
- Open ***assets*** folder and then ***words.ts*** file
- Simply edit or create new words
- Remember to also update the types for TypeScript
- If You for example decided to create ___wordsC2___ array, go to ``categoryReducers.ts`` file inside of ``context/reducers``
- Add the type to interface so it looks like this: ``
export interface Category { name: 'unknown' | 'B1' | 'B2' | 'C1' | 'C2' }
``
 

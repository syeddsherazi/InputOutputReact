# Implementation Details

Since the scope of task was pretty small, I've implemented a sort of POC keeping things dynamic for themes. I'm deriving themes' config from a json which later can be fetched from backend too. For now just the styling is changing, but feature set can be expanded and we can derive all sort of settings from config for themes and changes UI UX accordingly.

There are two routes:
* Input
* Output

All the components are in `COMPONENTS` hierarchy.

Styles are in styles hierarchy with global and theme styles (ideally if we're working for a SAAS based model, we can get theme css on runtime from backend and fetch it from cdn link too).


# STEPS TO RUN
You'll need npm and node installed.
* Clone app.
* Install setup run command: npm install
* To run project run command: npm start
* Project will start at localhost:3000

Please ping me in case of any queries.

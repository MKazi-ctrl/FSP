# Instructions


## Make a virtual environment in the fsp folder

_You cannot utilize django without activating the virtual environment, it's a must_

- in your command terminal, run **virtualenv env**
- cd to env
- run **source bin/activate** (mac way)

## Back-end

- cd to **env** directory 
- Activate the virtual environment, in mac it's **source bin/activate**
- Before you run back-end, make sure you set-up your local sqlworkbench with django correctly by inputting your credentials in backend/core/settings.py file.
- Name is the name of the schema, user is usually root. You most likely just need to change your password variable.
  <img width="781" alt="image" src="https://github.com/user-attachments/assets/b99fead9-6810-4f99-8a87-cb85e525a43b">

- cd to "backend" and run the line **python manage.py runserver**
- This is the local host link to access back-end **http://127.0.0.1:8000/**
<img width="1335" alt="image" src="https://github.com/user-attachments/assets/c4400279-f907-4005-a8d1-def522340ffa">


- Access the api page using this link: **http://127.0.0.1:8000/api/**
- These are the api that acts as endpoints between mysql where the created schemas are
  <img width="1439" alt="image" src="https://github.com/user-attachments/assets/0bc81075-eb7c-4d4b-91ea-2cbe2b3210e3">
- E.g Support ticket api endpoint: **http://127.0.0.1:8000/api/support/**
  <img width="886" alt="image" src="https://github.com/user-attachments/assets/8ce9ccd0-398a-40d0-9d0c-1665c8f36c7e">



## Front-end

- Go to the front-end directory in your command terminal and run: **npm run dev**
- make sure to npm install in front-end if not already
- This is the local host to access front-end: **http://localhost:5173/**
- You should see this:
  <img width="1438" alt="image" src="https://github.com/user-attachments/assets/83383c65-6ac4-445d-af50-a8b06b855be9">
- The edit functionality works, you can witness the saved changes through this link: **http://127.0.0.1:8000/api/users/**.
  It will update in front-end as well.
  <img width="1241" alt="image" src="https://github.com/user-attachments/assets/a5a1da74-5b78-40fd-975c-03fcb72a9570">







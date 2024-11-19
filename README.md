# Instructions

## Make a virtual environment in the fsp folder

_You cannot utilize django in backend without activating the virtual environment, it's a must_

- in your command terminal, run **virtualenv env**
- cd to env
- run **source bin/activate** (mac way)
  
## Front-end

- Go to the front-end directory in your command terminal and run: **npm run dev**
- make sure to npm install in front-end if not already
- This is the local host to access front-end: **http://localhost:5173/**
- You should see this:
  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/06ea5df1-e963-4e72-9e77-906ee196ee0a">
- To make changes to front-end, it's through the **frontend/src/App.jsx file**, it's currently this:

<img width="638" alt="image" src="https://github.com/user-attachments/assets/e1cb2355-ed5c-4034-8256-471bb594fec5">



## Back-end

- cd to **env** directory 
- Activate the virtual environment if you haven't already, in mac it's **source bin/activate**
- if you're using mac, make sure you run **pip install pymysql** before doing the next steps
- Make sure you set up the password to be the same as your sql work bench before you do the next step.
- The username is typically always **"root"** as you're connecting to a default localhost
<img width="959" alt="image" src="https://github.com/user-attachments/assets/26148803-b0ea-4a74-a284-bf6813e2fe06">


- cd to "backend" and run the line **python manage.py runserver**
- This is the local host link to access back-end **http://127.0.0.1:8000/**
- Access the admin page using this link: **http://127.0.0.1:8000/admin/**
- The superuser I created is Credentials - **User: Admin || Password: portsui6**. If the credentials did not work, you might need to create your own super user locally by running **python manage.py createsuperuser**. Only fill usernname and password, leave other fields blank
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/03691958-5e48-4dbb-917a-21b48130346e">

- Access the api page using this link: **http://127.0.0.1:8000/api/**
<img width="1439" alt="image" src="https://github.com/user-attachments/assets/0bc81075-eb7c-4d4b-91ea-2cbe2b3210e3">







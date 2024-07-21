# usw24
The hackathon project for unikraft summer workshop

## Run the backend app locally
```
npm install 
npm run seed
npm start
```

## Run the frontend app locally
Run locally
```
cd frontend/
npm install 
npm run dev
```

Or run locally using kraftkit with qemu
```
cd frontend/
kraft run --rm -p 8080:8080 --plat qemu --arch x86_64 -M 512M .
```

# usw24
The hackathon project for unikraft summer workshop

## Run the app locally
```
npm install 
npm run seed
npm start

OR

kraft run --rm -p 3000:3000 --plat qemu --arch x86_64 -M 1024M .
```
```
cd frontend/
kraft run --rm -p 8080:8080 --plat qemu --arch x86_64 -M 512M .
```
```
cd deployment-template/
kraft run --rm -p 8081:8080 --plat qemu --arch x86_64 -M 512M .
```

## Deploy the app on kraft cloud
```
kraft cloud deploy -p 3000:3000 -M 256 . 
```
```
cd frontend/
kraft cloud deploy -p 443:8080 -M 512 .
```


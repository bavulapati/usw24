# usw24
The hackathon project for unikraft summer workshop

## Run the app locally
```
kraft run --rm -p 3000:3000 --plat qemu --arch x86_64 -M 512M .
```


## Deploy the app on kraft cloud
```
kraft cloud deploy -p 3000:3000 -M 256 . 
```
```
```

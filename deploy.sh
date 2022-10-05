#!/usr/bin/env sh

set  -en

 npm  run build

 cd dist 

git init

git add -A

git commit -m 'New Deployment'

git push -f git@github.com:Lidyaboshra/Ecommerce-Website.git master:main     

cd -

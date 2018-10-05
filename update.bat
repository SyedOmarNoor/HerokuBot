git add .
SET /A result=!random!*var/32768+1
git commit -am "IDK %result%"
git push -u origin master
pause
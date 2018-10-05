git add .
set /a result=(%random% %% %var%)+1
git commit -am "IDK %result%"
git push -u origin master
pause
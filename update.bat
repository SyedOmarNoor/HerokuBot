git add .
set FILENAME=(%RANDOM%*var/32768+1)
git commit -am "IDK %FILENAME%"
git push -u origin master
end
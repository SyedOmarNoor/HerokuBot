heroku maintenance
for /f "tokens=* delims=" %%a in ('heroku maintenance') do set output=%%a
if %output%==on echo error
if errorlevel=1 echo uh oh
if %output%=="ON" echo error
set /p STATE="Enter maintainence mode state (on/off)."
if "%STATE%"=="on" (
heroku maintenance:on
) else if "%STATE%"=="off" (
heroku maintenance:off
)
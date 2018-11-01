set /p STATE="Enter maintainence mode state (on/off)."
if "%STATE%"=="on" (
heroku maintenance:on
) else if "%STATE%"=="off" (
heroku maintenance:off
)
timeout 5 >nul
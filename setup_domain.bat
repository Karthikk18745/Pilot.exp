@echo off
title Setup realize.responsibly.com Domain
echo ========================================================
echo   Setting up realize.responsibly.com Domain Mapping
echo ========================================================
echo.

:: Check for Administrator Privileges
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Requesting Administrator Privileges...
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

:: Check if entry already exists in hosts file
findstr /C:"realize.responsibly.com" C:\Windows\System32\drivers\etc\hosts >nul 2>&1
if %errorlevel% neq 0 (
    echo. >> %WINDIR%\System32\drivers\etc\hosts
    echo 127.0.0.1 realize.responsibly.com >> %WINDIR%\System32\drivers\etc\hosts
    echo 127.0.0.1 www.realize.responsibly.com >> %WINDIR%\System32\drivers\etc\hosts
    echo [SUCCESS] Added realize.responsibly.com to Windows hosts file!
) else (
    echo [INFO] realize.responsibly.com is already mapped in your Windows hosts file.
)

:: Flush DNS cache
ipconfig /flushdns >nul 2>&1
echo [SUCCESS] Flushed Windows DNS Cache!

echo.
echo ========================================================
echo  All Set! You can now open http://realize.responsibly.com
echo ========================================================
echo.
pause

@echo off
title Primas Tecnologia - Publicar na Nuvem (Firebase)
cls
echo =======================================================
echo        PRIMAS TECNOLOGIA - PUBLICADOR NA NUVEM
echo =======================================================
echo.
echo [1/2] Compilando modulos e atualizando versoes de cache...
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0compilar.ps1"
echo.
echo [2/2] Enviando site Primas Tecnologia para a nuvem (Firebase)...
where firebase >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    call firebase.cmd deploy --only hosting --project primas-tecnologia
) else (
    call npx --yes firebase-tools deploy --only hosting --project primas-tecnologia
)
echo.
echo =======================================================
echo  PUBLICACAO CONCLUIDA COM SUCESSO!
echo =======================================================
echo.
echo  Link Principal: https://primas-tecnologia.web.app
echo  Link Consulta:  https://primas-tecnologia.web.app/consulta-cnpj.html
echo.
set /p ABRIR="Deseja abrir o site no navegador agora? (S/N): "
if /i "%ABRIR%"=="S" (
    start https://primas-tecnologia.web.app
)
pause

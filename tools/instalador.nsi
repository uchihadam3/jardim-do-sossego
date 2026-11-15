; Instalador do Jardim do Sossego (Windows) -- gerado com: makensis tools/instalador.nsi
Unicode true
!include "MUI2.nsh"
!include "LogicLib.nsh"
!include "StrFunc.nsh"
${StrRep}

!define APP "Jardim do Sossego"
!define KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\JardimDoSossego"
Name "${APP}"
OutFile "..\instalador\Instalar Jardim do Sossego.exe"
InstallDir "$LOCALAPPDATA\JardimDoSossego"
RequestExecutionLevel user
SetCompressor /SOLID lzma
BrandingText "${APP}"

!define MUI_ICON "..\instalador\icone.ico"
!define MUI_UNICON "..\instalador\icone.ico"
!define MUI_WELCOMEPAGE_TITLE "Bem-vinda ao ${APP}"
!define MUI_WELCOMEPAGE_TEXT "Este instalador guarda o jogo no seu computador e cria um atalho na área de trabalho e no menu Iniciar.$\r$\n$\r$\nDepois de instalado, o jogo funciona sem internet.$\r$\n$\r$\nClique em Instalar para continuar."
!define MUI_FINISHPAGE_TITLE "Tudo pronto!"
!define MUI_FINISHPAGE_TEXT "O ${APP} foi instalado. Procure o ícone da flor na área de trabalho sempre que quiser cuidar do jardim."
!define MUI_FINISHPAGE_RUN
!define MUI_FINISHPAGE_RUN_TEXT "Abrir o ${APP} agora"
!define MUI_FINISHPAGE_RUN_FUNCTION Abrir

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_LANGUAGE "PortugueseBR"

Var Browser
Var Url

; Edge ou Chrome abrem o jogo numa janela própria, sem barra de endereço
Function AcharNavegador
  StrCpy $Browser ""
  ${If} ${FileExists} "$PROGRAMFILES32\Microsoft\Edge\Application\msedge.exe"
    StrCpy $Browser "$PROGRAMFILES32\Microsoft\Edge\Application\msedge.exe"
  ${ElseIf} ${FileExists} "$PROGRAMFILES64\Microsoft\Edge\Application\msedge.exe"
    StrCpy $Browser "$PROGRAMFILES64\Microsoft\Edge\Application\msedge.exe"
  ${ElseIf} ${FileExists} "$PROGRAMFILES64\Google\Chrome\Application\chrome.exe"
    StrCpy $Browser "$PROGRAMFILES64\Google\Chrome\Application\chrome.exe"
  ${ElseIf} ${FileExists} "$PROGRAMFILES32\Google\Chrome\Application\chrome.exe"
    StrCpy $Browser "$PROGRAMFILES32\Google\Chrome\Application\chrome.exe"
  ${ElseIf} ${FileExists} "$LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
    StrCpy $Browser "$LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
  ${EndIf}
  ${StrRep} $Url "$INSTDIR\jardim.html" "\" "/"
  StrCpy $Url "file:///$Url"
FunctionEnd

Function Abrir
  Call AcharNavegador
  ${If} $Browser != ""
    Exec '"$Browser" --app="$Url"'
  ${Else}
    ExecShell "open" "$INSTDIR\jardim.html"
  ${EndIf}
FunctionEnd

Section "Jogo"
  SetOutPath "$INSTDIR"
  File "/oname=jardim.html" "..\dist\instalar\Jardim-do-Sossego.html"
  File "/oname=jardim.ico" "..\instalador\icone.ico"
  Call AcharNavegador
  ${If} $Browser != ""
    CreateShortCut "$DESKTOP\${APP}.lnk" "$Browser" '--app="$Url"' "$INSTDIR\jardim.ico" 0
    CreateShortCut "$SMPROGRAMS\${APP}.lnk" "$Browser" '--app="$Url"' "$INSTDIR\jardim.ico" 0
  ${Else}
    CreateShortCut "$DESKTOP\${APP}.lnk" "$INSTDIR\jardim.html" "" "$INSTDIR\jardim.ico" 0
    CreateShortCut "$SMPROGRAMS\${APP}.lnk" "$INSTDIR\jardim.html" "" "$INSTDIR\jardim.ico" 0
  ${EndIf}
  WriteUninstaller "$INSTDIR\Desinstalar.exe"
  WriteRegStr HKCU "${KEY}" "DisplayName" "${APP}"
  WriteRegStr HKCU "${KEY}" "DisplayIcon" "$INSTDIR\jardim.ico"
  WriteRegStr HKCU "${KEY}" "UninstallString" '"$INSTDIR\Desinstalar.exe"'
  WriteRegStr HKCU "${KEY}" "InstallLocation" "$INSTDIR"
  WriteRegStr HKCU "${KEY}" "Publisher" "${APP}"
  WriteRegDWORD HKCU "${KEY}" "NoModify" 1
  WriteRegDWORD HKCU "${KEY}" "NoRepair" 1
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\${APP}.lnk"
  Delete "$SMPROGRAMS\${APP}.lnk"
  Delete "$INSTDIR\jardim.html"
  Delete "$INSTDIR\jardim.ico"
  Delete "$INSTDIR\Desinstalar.exe"
  RMDir "$INSTDIR"
  DeleteRegKey HKCU "${KEY}"
SectionEnd

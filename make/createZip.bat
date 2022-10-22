@echo off

@REM Creates a zip file of the current version of the plugin
@REM Contains the root folder, excluding the make folder and anything to do with git

@REM Set the name of the zip file
set ZIPNAME=YouTubeShortsToVideoExtension.zip

@REM Create the zip file
"C:\Program Files\7-Zip\7z.exe" a -t7z %ZIPNAME% ..\ -mx0 -xr!make -xr!.git -xr!.gitignore
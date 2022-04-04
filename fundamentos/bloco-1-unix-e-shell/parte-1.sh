#!/bin/bash

echo '1. Crie um diretório (unix_tests) e navegue até ele'
mkdir unix_tests
cd unix_tests

echo '2. Crie um arquivo de texto (trybe.txt)'
touch trybe.txt

echo '3. Crie uma cópia do arquivo (trybe_backup.txt)'
cp trybe.txt trybe_backup.txt

echo '4. Renomeie o arquivo (trybe2.txt)'
mv trybe.txt trybe2.txt

echo '5. Crie um novo diretório (backup)'
mkdir backup

echo '6. Mova o arquivo trybe_backup.txt para o novo diretório'
mv trybe_backup.txt backup

echo '7. Dentro do diretório unix_tests, crie um novo diretório (backup2)'
mkdir backup2

echo '8. Mova o arquivo trybe_backup da pasta backup para a pasta backup2'
mv backup/trybe_backup.txt backup2

echo '9. Apague a pasta backup'
rmdir backup

echo '10. Renomeie a pasta backup2 para backup'
mv backup2 backup

echo '11. Veja o path complet do diretório atual e liste os arquivos dentro dele'
pwd
ls -l

echo -e '\n12. Apague o diretório backup'
rm -rd backup

echo '13. Limpe o terminal'
clear

echo -e '\n14. Mostre na tela as 5 primeieras skills do arquivo skills.txt'
head -5 skills.txt

echo '15. Mostre na tela as 4 últimas skills do arquivo skills.txt'
tail -4 skills.txt

echo '16. Apague todos os arquivos que terminem em .txt'
rm *.txt
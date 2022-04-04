#!/bin/bash

echo '1. Donwload do arquivo countries.txt na pasta unix_tests através do comando curl'
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

echo '2. Mostre todo o conteúdo de countries.txt na tela'
cat countries.txt

echo '3. Mostre todo o conteúdo de countries.txt, página por página, até encontrar Zambia'
less countries.txt
# Teclas "n" para próximo (next) e "p" para anterior (previous)

echo '4. Mostre novamente o conteúdo de countries.txt, página por página, e utilize um comando para buscar por Zambia'
less countries.txt
# Tecla "/" + "Zambia"

echo '5. Busque por Brazil no countries.txt'
grep Brazil countries.txt

echo '6. Busque novamente por brazil , mas agora utilizando o lower case'
grep -i brazil countries.txt

echo '7. No arquivo phrases.txt, busque pelas frases que não contenham a palavra fox'
grep -v fox phrases.txt

echo '8. Conte o número de palavras do arquivo phrases.txt'
wc -w phrases.txt

echo '9. Conte o número de linhas do arquivo phrases.txt'
wc -l phrases.txt

echo '10. Crie os arquivos empty.tbt e empty.pdf'
touch empty.tbt empty.pdf

echo '11. Liste todos os arquivos do diretório unix_tests'
ls -l

echo '12. Liste todos os arquivos que terminem com txt'
ls -l *.txt

echo '13. Liste todos os arquivos que terminem com tbt ou txt'
ls -l *.t?t

echo '14. Acesse o manual do comando ls'
man ls

# App: localstorage

## Teste Local Storage

    Um exemplo de uso do armazenamento com plugin storage no ionic v3.

## Como executar este exemplo:

### Com Ionic CLI:

Execute o comando abaixo para instalar as dependências

``
$ npm install
``

Em seguida, para executá-lo no dispositivo Android

``
$ ionic cordova platform add android
``

``
$ npm run android
`` 

Ou no iOS

``
$ ionic cordova platform add ios
``

``
$ ionic cordova run ios
``
  - A diferença de ambos é que como uso o Android, criei um script personalizado para limpar o debug anterior, instalar e executar o apk após instalação direto.
  - Pode ser instalado por 
  ``
  npm run apk
  `` sem gerar um novo build.
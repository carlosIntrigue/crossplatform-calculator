# crossplatform-calculator

This is a calculator that runs on ios and web sharing the same codebase

## To run First instal all dependencies with 
```
$ yarn 
```

## Compile the common submodule
```
$ cd packages/common && yarn build
```

## Run web 

```
$ cd packages/web && yarn && yarn start
```

## Run mobile 

```
$ cd packages/mobile && yarn
$ wml add ../common node_modules/@calc/common
$ wml start
$ yarn [ios or android]
```

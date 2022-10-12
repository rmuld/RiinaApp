# Programmeerimine II
Programmeerimine II õppeaines kirjutatud kood

# WaterMeterApp
Loodud app tegeleb veemõõtja ja sellega seonduvate andmete edastamisega läbi api-de

## Kasutatavad tööriistad
- [MS Visual Studio Code](https://code.visualstudio.com/download) koodi kirjutamiseks
 - [Postman API tööriist](https://www.postman.com/) jooksvalt API endpointidele päringute tegemiseks ja testimiseks

# Paigaldamine
1. Klooni repositoorium
```bash
git clone https://github.com/rmuld/RiinaApp.git
```
2. Liigu projekti kausta
```bash
cd RiinaApp
```
3. Paigalda NPM paketid
```bash
npm install
```
4. Käivita projekt
```bash
npm start
```

## Kasutatavad tehnoloogiad
- [NodeJS v16](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://www.npmjs.com/package/express)

## API endpoindid - CRUD API
### Kasutajatega seotud
- Kasutajate pärimine: `GET /api/v1/users/`
- Kasutaja pärimine id alusel: `GET /api/v1/users/:id/`
- Kasutaja loomine: `POST /api/v1/users/`
- Kasutaja muutmine: `PATCH /api/v1/users/:id/`
- Kasutaja kustutamine: `GET /api/v1/users/:id/`

### Aadressidega seotud
- Aadresside pärimine: `GET /api/v1/addresses/`
- Aadressi pärimine id alusel: `GET /api/v1/addresses/:id/`
- Aadressi loomine: `POST /api/v1/addresses/`
- Aadressi muutmine: `PATCH /api/v1/addresses/:id/`
- Aadressi kustutamine: `GET /api/v1/addresses/:id/`

### Veemõõtjatega seotud
- Veemõõtjate pärimine: `GET /api/v1/water-meter/`
- Veemõõtjate pärimine id alusel: `GET /api/v1/water-meter/:id/`
- Veemõõtjate loomine: `POST /api/v1/water-meter/`
- Veemõõtjate muutmine: `PATCH /api/v1/water-meter/:id/`
- Veemõõtjate kustutamine: `GET /api/v1/water-meter/:id/`
# 🚀 ProgettoPersonale

Applicazione web **Full Stack** sviluppata utilizzando **Angular** per il frontend e **Spring Boot** per il backend, con **PostgreSQL** come database relazionale.

Il progetto nasce con l'obiettivo di approfondire lo sviluppo di applicazioni web moderne, separando il livello di presentazione dalla logica applicativa e dalla gestione dei dati.

---

## 🛠️ Tecnologie utilizzate

### Frontend
- Angular 19
- TypeScript
- HTML5
- CSS3
- RxJS
- Angular Router
- Angular Forms
- Angular SSR

### Backend
- Java 17
- Spring Boot 3
- Spring Web
- Spring Data JPA
- Spring Data JDBC
- Hibernate
- Lombok
- BCrypt
- Maven

### Database
- PostgreSQL

---

## 📂 Struttura del progetto

```text
ProgettoPersonale/
│
├── ProgettoBackEnd/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
│
├── ProgettoFR/
│   └── Progetto/
│       ├── src/
│       ├── public/
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
└── README.md
```

Il progetto è quindi suddiviso in due applicazioni indipendenti:

**`ProgettoBackEnd`** contiene il backend realizzato con Spring Boot e si occupa della logica applicativa, dell'accesso al database e dell'esposizione delle API.

**`ProgettoFR/Progetto`** contiene invece il frontend Angular, responsabile dell'interfaccia grafica e dell'interazione con l'utente.

---

## 🏗️ Architettura

L'applicazione segue una struttura **client-server**.

```text
┌───────────────────┐
│      Angular      │
│     Frontend      │
└─────────┬─────────┘
          │
          │ HTTP / REST
          ▼
┌───────────────────┐
│    Spring Boot    │
│      Backend      │
└─────────┬─────────┘
          │
          │ JPA / JDBC
          ▼
┌───────────────────┐
│    PostgreSQL     │
│     Database      │
└───────────────────┘
```

Angular gestisce l'interfaccia dell'applicazione e comunica con il backend tramite richieste HTTP.

Spring Boot gestisce la logica applicativa e l'accesso ai dati, mentre PostgreSQL viene utilizzato per la persistenza delle informazioni.

---

# ⚙️ Installazione

## 1. Clonare la repository

```bash
git clone https://github.com/l3gix/ProgettoPersonale.git
```

Entrare nella cartella:

```bash
cd ProgettoPersonale
```

---

## 2. Configurare PostgreSQL

Assicurarsi di avere **PostgreSQL** installato e avviato.

Creare il database:

```sql
CREATE DATABASE "progettoPersonale";
```

Successivamente configurare le credenziali PostgreSQL all'interno del file:

```text
ProgettoBackEnd/src/main/resources/application.properties
```

Esempio:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/progettoPersonale

spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

> È consigliato non pubblicare password reali o altre credenziali sensibili all'interno della repository.

---

# ☕ Avvio del Backend

## Requisiti

Assicurarsi di avere installato:

```text
Java 17+
Maven
PostgreSQL
```

Entrare nella cartella del backend:

```bash
cd ProgettoBackEnd
```

Avviare Spring Boot:

```bash
mvn spring-boot:run
```

In alternativa, utilizzando il Maven Wrapper se presente:

### Windows

```bash
mvnw.cmd spring-boot:run
```

### Linux / macOS

```bash
./mvnw spring-boot:run
```

Di default Spring Boot sarà disponibile su:

```text
http://localhost:8080
```

---

# 🅰️ Avvio del Frontend

## Requisiti

Assicurarsi di avere installato:

```text
Node.js
npm
```

Entrare nella directory Angular:

```bash
cd ProgettoFR/Progetto
```

Installare le dipendenze:

```bash
npm install
```

Avviare il progetto:

```bash
npm start
```

oppure:

```bash
ng serve
```

Il frontend sarà normalmente disponibile su:

```text
http://localhost:4200
```

---

# 📦 Build del progetto

## Frontend

Per creare una build Angular:

```bash
npm run build
```

I file generati saranno disponibili nella directory:

```text
dist/progetto/
```

---

## Backend

Per creare il file `.jar` del backend:

```bash
mvn clean package
```

Il file generato sarà disponibile nella directory:

```text
target/
```

È possibile eseguirlo tramite:

```bash
java -jar target/ProgettoBackEnd-0.0.1-SNAPSHOT.jar
```

---

# 🧪 Test

## Test Angular

```bash
npm test
```

## Test Spring Boot

```bash
mvn test
```

---

# 🔐 Sicurezza

Il progetto utilizza **BCrypt** per la gestione sicura dell'hashing delle password lato backend.

Per motivi di sicurezza è importante evitare di inserire direttamente nella repository:

```text
Password del database
API Key
Token
Credenziali
Secret
```

Per progetti destinati alla produzione è preferibile utilizzare variabili d'ambiente.

---

# 🔄 Comunicazione Frontend / Backend

Il frontend Angular comunica con il backend Spring Boot attraverso API HTTP.

Il flusso generale dell'applicazione è:

```text
Utente
   │
   ▼
Angular
   │
   │ Richiesta HTTP
   ▼
Spring Controller
   │
   ▼
Service / Logica applicativa
   │
   ▼
Repository
   │
   ▼
PostgreSQL
```

La risposta segue quindi il percorso inverso fino alla visualizzazione dei dati nell'interfaccia Angular.

---

# 💻 Requisiti software

| Software | Versione consigliata |
|---|---|
| Java | 17+ |
| Spring Boot | 3.4.x |
| Angular | 19.x |
| Node.js | versione compatibile con Angular 19 |
| npm | versione recente |
| PostgreSQL | versione recente |
| Maven | 3.x |

---

# 🚧 Stato del progetto

Il progetto è attualmente in fase di sviluppo.

Nuove funzionalità, miglioramenti dell'interfaccia e modifiche all'architettura potranno essere aggiunte progressivamente.

---

# 👨‍💻 Autore

**l3gix**

GitHub: [@l3gix](https://github.com/l3gix)

---

## 📄 Licenza

Progetto realizzato a scopo personale e di apprendimento.

Salvo diversa indicazione, tutti i diritti sul codice sorgente appartengono all'autore.

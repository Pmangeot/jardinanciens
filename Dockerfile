# Utilise une image officielle de Node.js comme base
FROM node:latest

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copie les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le contenu du répertoire actuel dans le répertoire de travail du conteneur
COPY . .

# Expose le port 3000 utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]




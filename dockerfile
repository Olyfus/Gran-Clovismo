FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install 
# RUN npm install \
#     && npm install -g serve \
#     && npm run build \
# && rm -fr node_modules

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular en mode production
RUN npm run build --prod


# Utiliser une image légère basée sur Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers de l'application Angular depuis le conteneur de construction vers le répertoire Nginx
COPY --from=0 /app/dist/gran-clovisimo /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande à exécuter lorsque le conteneur démarre
CMD ["nginx", "-g", "daemon off;"]
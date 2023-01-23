# Presentation du site

Il s'agit d'un site vitrine de presentation et de conseils (sera rarement alimente en articles) qui comportera une partie inscription a une newsletter annuelle (je gere la partie legal) et une partie de reservation d'articles qui s'adaptera aux stocks fournis mais ne comportera pas de paiement et dont la reservation restera faite manuellement.
Le client etant mon frere et le service gratuit, je me reserve le droit de faire a mon gout mais prendrais le feedback de ce dernier par amour fraternel.

## Fonctionnalites integrees

* Styliser le contenu et creer des pages a partir du style et du contenu de la page Facebook existente https://www.facebook.com/jardindesanciens
* Le site est reponsive et adaptive avec un layout modifie selon la vw
* Nav bar stylisee avec plusieurs pages dispos

## To Do list layout

* Nettoyer le code et commenter le layout pour facilement mettre en page selon l'envie
* Rendre uniquement la navbar sticky en version mobile tout en conservant le background du header et en gardant l'integrite de l'image de background
* Ajouter un autre layout d'article pour la version fullscreen pc + de 900 px (image sur le cote sur tout la hauteur un peu comme la version mobile ou l'image est en bas avec un maxheight de l'image et donc un radius qui doit apparaitre cote bas droite de l'image si article-text deviens plus grand (difficile et JS donc pas prioritaire, voir rendu avant))
* Ajouter un background proteifome (type galet triangulaire) au titres h2 qui depasse legerement du background --color-backarticle pour donner un syle moins lourd
* Preparer le layout des item pour la reservation
* Ajouter le footer avec lien rgpd copyright et information microferme (siret et nom)

## Fonctionnalites backend a ajouter

* Recuperer les emails de la newsletter dans un fichier client leger, l'envoi sera fait manuellement
* Faire le system de reservation qui envoit la liste des plants avec Nom et email et possibilite de faire une deuxieme commande (par exemple creation d'un excel avec une page par utilisateur et une colonne par commande d'un meme utilisateur)
# Licence Mathématiques Université Côte d'Azur
![Language](https://img.shields.io/badge/language-Javascript-yellow)

Un site (non-officel) pour regrouper les cours non officiels, se questionner sur l'aspect mesurable du cours de CAL et sur l'unicité du cours de structure algébrique

Par les élèves, pour les élèves (mais payé en cacahuètes).

# CONTRIBUER

Vous avez tapé un cours ou un TD? Vous diposez sous forme PDF d'un document dont pourraient bénificier tout les élèves de math de la L2? Vous avez des idées pour améliorer ou corriger le site? Merci de suivre les instructions suivantes.

## Contribution en documents

Si vous disposez d'un document, utile aux élèves de la L2 (Sujets, Corrections, Cours simplifés, Méthodes, Exos etc): vous êtes au bon endroit! 

**Nous n'acceptons, pour l'instant, seulement les documents au format PDF (de préférence tapés en LATEX).**

## Architecture des fichiers 

Les Fichiers sont rangés dans des dossiers puis fichiers puis sous une forme bien précise que vous vous devez de respecter. Ils se trouvent tous dans le dossier *ressources*. 

D'abord, ils sont rangés par type:
- **cours_pdf**: ici, vous pouvez ajouter des cours que vous avez tapés, des méthodes utiles dans certaines matières (avec les sources si vous en êtes pas à l'origine).
- **exercices_pdf**: ce fichier contient tous les PDF relatif aux exercices. On y trouve donc des sujets de partiel, des sujets de TD et leur correction respectives. 
- **memes_pdf**: je pense qu'il y a de quoi faire des choses marrantes, la partie du site correspondate n'est pas encore exactement codé mais si il y a des gens motivés pour faire des memes ou des blagues marrantes sur les cours, je serai ravi d'avancer la dessus et de les rendre accessibles sur le site
- **autres_pdf**: pour tout les fichiers qui ne rentrent dans aucun des catégories si dessus. **En particulier**, si vous avez écrit un document en LATEX et que vous souhaitez que tout le monde puisse le modifier pour y corriger des erreurs éventuels ou y rajouter des parties, je vous invite à ajouter le fichier .tex associé à votre PDF dans ce dossier en suivant la convention de nommage suivante. 

Ensuite, afin de gérer l'affichage, il faut rentrer les informations des documents dans un fichir .JSON. 
Dans le dossier ressource, il suffira de modifier le fichier *data.json* si les informations date de l'année en cours, et  *data_archives.json* sinon.

Vous devrez remplir, dans la partie adéquate (suivant la même architecture que les fichiers vus plus haut) les infomations suivantes:
- "nom": Le nom du document (Par exemple "Cours de CAL 2024-2025")
- "nom_fichier": le nom de votre fichier .pdf suivant la convention de nommage détaillée dans le paragraphe suivant et précédé de "\\" puis du nom du dossier dans lequel le fichier se trouve
- "nom_correction": *si pertinent* (si c'est quelque chose dont vous disposez de la correction, comme un sujet ou un TD)
- "text": une description plus précise (mais brève) du document en question (elle doit contenir l'auteur du document)

### Exemple

Si vous disposez d'un sujet de partiel de CAL de l'année dernière: 
Vous devez placer votre fichier dans "exercices_pdf" le nommer comme détaillé dans le paragraphe suivant et ajouter dans le fichier "data_archives.json" dans la sous partie "exercices" le bout de code suivant: 

```json 
{ 
    "nom": "Sujet Partiel 1 CAL 2023-2024",
    "nom_fichier": "exercices_pdf\\Examen1_CAL_2023-2024.pdf",
    "nom_correction": "exercices_pdf\\Corriger1_CAL_2023-2024.pdf",
    "text": "Voici le premier sujet de partiel de CAL de 2023-2024 corrigé par *******"
}
```

En n'oubliant pas l'ajout d'une virgule au bloc précédent. Merci par ailleurs de ne pas modifier le fichier au milieu, mais d'ajouter les blocs de code, les uns à la suite des autre, afin d'en conserver la cohérence.


## Convention de nommage

Les fichiers doivent contenir les informations suivantes:

- Type de Fichier (Cours, Correction, exercice etc)
- Numéro *si pertinent* (Si il y a plusieurs sujet sur un partiel, il convient d'y ajouter un numéro adéquat par rapport aux autres fichier déjà présents)
- La date (si c'est un partiel de cette année, ce sera 2024-2025, si c'était de l'année dernière 2023-2024 etc)
- Le nom (CAL, Analyse, Méthodes pour les intégrales généralisés etc)

### Exemple 
Pour un sujet de partiel de CAL de l'année dernière dont vous avez tapé la correction en LATEX, vous pouvez utiliser la covention de nommage suivante:
- Pour le sujet: sujet1_CAL_2023-2024.pdf
- Pour la correction: correction1_CAL_2023-2024.pdf
- Pour le fichier en LATEX: correction1_CAL_2023-2024.tex

## Comment contribuer 

L'intérêt d'utiliser Github (au-delà de pouvoir héberger gratuitement et durablement un site web) est d'avoir déjà tout les outils nécessaire à un projet collaboratif. Nous allons donc tirer partie de la puissance de GIT.

Voici une courte explication [Lien](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request "ici")

### Pour les changement mineurs

Pour des changements comme l'ajout d'un PDF, ou un correction de syntaxe ou d'orthographe, vous pouvez utiliser la méthode suivante.
Vous pouvez fork le repo git, faire les modifications sur votre branche local et ensuite faire un Pull Request sur la branche main. Merci d'utiliser un Pull Request par demande. Si vous avez 2 sujet de CAL avec 2 Correction, merci de séparer les deux sujets dans deux Pull Request différents. 

### Pour les changements majeurs 

Si vous souhaitez ajouter des modifications substentielles au site, je vous conseil de m'en informer à l'avance (afin d'eviter de travailler longement sur une feature qui pourrait ne pas être acceptée) et d'utiliser un fork puis de faire un Pull Request ensuite. En cas de besoin, vous pouvez faire le pull request sur la branch test si les changements risquent de rendre de github-pages malfonctionant.

## Licence
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

## Contacts et Contributeurs

Si vous avez des questions, des remarques ou que vous ne parvenez pas à ajouter les documents dans ce repo git, merci de me contacter par mail : gabriel.legout9@gmail.com 

# Inventory

Front AngularJs permettant de visualiser les facts Ansible des différents serveurs du parc.

## Utilisation

### REDIS

* Installation de REDIS
* Installation de Webdis

### Configuration ansible

* Déposer le plugin Ansible redis.py dans le répertoire Ansible du playbook _library/plugins/cache_

* Configuration à ajouter dans ansible.cgf

   gathering = smart # TODO à valider pour refresh
	 fact_caching = rediseb
	 fact_caching_timeout = 0

   cache_plugins = library/plugins/cache/

### Front

* Configuration de la location du back webdis dans le fichier redis.service.js # TODO à modifier pour conf centrale
* Déploiement du front sur un serveur web


# Notification Service - API REST

Servicio de Notificaiones para Willy App, desarrollado en NodeJS / ExpressJs  y base de datos MongoDB. Esta API recibe eventos de API CORE Willy APP crea los mensajes y los envia al cliente.



## Arquitectura del proyecto

- `package.json`: Configuración del proyecto.
- `/bin/www`: Inicia servidor web.
- `.env.example`: Configuración de ejemplo para variables de entorno.
- `config`: Archivos de configuración(Db, routes).
- `controllers`: Contiene la lógica principal del negocio.
- `lib`: Contiene las clases y metodos relacionados con la lógica.
- `models`: Modelos de datos.


## WORKING
- Update notification
- Refactor codigo
- Tests
- Analizar API CORE y ver que datos voy a recibir -> Adaptar base a ello
- Error handler
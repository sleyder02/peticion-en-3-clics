# Bitácora Clase 58
```

## Datos

Nombre:LEIDER DAVID RAMOS CARO
Fecha:15/07/2026
Clase: 58
Repositorio:https://github.com/sleyder02/programadores-para-la-paz
Rama: git checkout -b clase-58-pdf-peticion-colectiva

## Comunicaciones

¿Por qué es útil convertir los apoyos en un documento PDF?
Porque de esta manera se puede presentar de forma organiza a auna entidad una misma problematica.

¿Qué debe comunicar el PDF?
Titulo, Descripcion, apoyo, justicacion, fecha

¿Qué no debería exagerar el PDF?
no exagerar los datos
## Jurídico

¿Por qué el PDF es un borrador de práctica?
poruque no reemplaza ninguna asesoria juridica.

¿Qué advertencia debe incluir?
requiere revision, antes de llevar a cuelquier entidad

¿Qué datos no deben aparecer en el PDF?
Cedulas, telefonos datos sensibles.
## Tecnología

¿Qué dependencia se instaló?
npm install pdfkit

¿Qué ruta genera el PDF?
GET /api/pdf/:causaId

¿Qué información contiene el PDF?
Contiene la informacion de la causa, junto al apoyo que las personas dan.

¿Cómo probaste la descarga?
curl -L http://localhost:3000/api/pdf/1 --output peticion-causa-1.pdf

## Debate en clase

Respuesta personal:

## Evidencia

PDF generado:
file:///C:/Users/peticion-causa-2.pdf

Commit realizado:git commit -m "Clase 58 agrega generacion de PDF colectivo"

Observaciones:
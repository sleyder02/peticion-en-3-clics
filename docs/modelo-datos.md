# Modelo de datos - Petición en 3 Clics

## Entidad: Causa

Representa una solicitud o necesidad comunitaria.

Campos:

- id
- titulo
- descripcion
- fecha_creacion

## Entidad: Apoyo

Representa el apoyo de una persona a una causa.

Campos:

- id
- causa_id
- nombre
- comentario
- fecha

## Relación

Una causa puede tener muchos apoyos.

Causa 1 ---- N Apoyos

## Regla de privacidad

No se solicita cédula, teléfono, dirección ni datos sensibles.
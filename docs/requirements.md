# 📌 Documento de Requerimientos – TaskManager

## 1. Información General

**Nombre del proyecto:** TaskManager  
**Desarrollador:** Jose Leonardo Chavarro  
**Tecnologías:** Java 17, Spring Boot, Maven, H2 (temporal), Swagger  
**Propósito:** Desarrollar una aplicación web para la gestión de tareas personales, reforzando buenas prácticas de desarrollo backend.

---

## 2. Alcance del Proyecto

TaskManager es una API backend para una aplicación de gestión de tareas. Permitirá a los usuarios:
- Registrar y editar tareas personales.
- Marcar tareas como completadas.
- Consultar tareas filtradas por estado.
- (En versiones futuras) Autenticarse, editar perfil y visualizar estadísticas.

---

## 3. Requerimientos Funcionales (RF)

| Código | Descripción                                                                 |
|--------|-----------------------------------------------------------------------------|
| RF1    | El sistema debe permitir crear tareas con título y descripción.             |
| RF2    | El sistema debe listar todas las tareas del usuario.                        |
| RF3    | El sistema debe permitir editar una tarea existente.                        |
| RF4    | El sistema debe permitir eliminar una tarea.                                |
| RF5    | El sistema debe cambiar el estado de una tarea (pendiente/completada).      |
| RF6    | El sistema debe validar que el título no esté vacío.                        |
| RF7    | El sistema debe permitir registrar nuevos usuarios. *(futuro)*              |
| RF8    | El sistema debe permitir consultar y editar datos del perfil. *(futuro)*    |

---

## 4. Requerimientos No Funcionales (RNF)

| Código | Descripción                                                                 |
|--------|-----------------------------------------------------------------------------|
| RNF1   | La aplicación debe estar desarrollada con Java 17 y Spring Boot 3.          |
| RNF2   | Se debe utilizar Maven para gestión de dependencias.                        |
| RNF3   | Debe incluir documentación automática con Swagger.                          |
| RNF4   | El sistema debe utilizar el patrón MVC.                                     |
| RNF5   | Se debe usar Spring DevTools para recarga automática en desarrollo.         |
| RNF6   | La base de datos inicial será H2 en memoria para pruebas y prototipado.     |
| RNF7   | El código debe seguir buenas prácticas de arquitectura y limpieza.          |

---

## 5. Supuestos

- Este proyecto será extendido en futuras versiones para incluir frontend, autenticación y persistencia real.
- Se asumirá un solo usuario activo mientras se trabaja en la versión inicial (sin login aún).

---

## 6. Glosario

- **CRUD**: Crear, Leer, Actualizar, Eliminar.
- **DTO**: Objeto de Transferencia de Datos.
- **API**: Interfaz de Programación de Aplicaciones.

---

## 7. Versión del documento

- **Fecha de creación:** 2025-06-16  
- **Versión:** 1.0  
- **Estado:** En desarrollo


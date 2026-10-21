# 🌈 ¿Cómo funciona esta app? (explicado para un niño pequeño)

## 🏠 Imagina una casa de juguete

Nuestra app es como una **casa con muchas puertas**. Cada cuarto de la casa es una **pantalla**. Para pasar de un cuarto a otro usamos puertas, pasillos y un armario mágico.

## 🧸 Los tres tipos de puertas

1. **El menú lateral (Drawer)** 🚪: es un cajón que se desliza desde el lado, como una cortina. Te deja elegir entre grandes zonas de la casa: "Tabs + Stack", "Usuario" y "Horario".
2. **Las pestañas (Tabs)** 🗂️: son tres botoncitos abajo en la pantalla: *Stack*, *Home* y *Favoritos*. Tocas uno y cambias de sala rapidito.
3. **La pila (Stack)** 📚: es como una pila de hojas. Cuando vas a una pantalla nueva, pones una hoja encima. Si tocas la flechita ⬅️, quitas la hoja de arriba y vuelves a la anterior.

Las puertas están una dentro de otra, como muñecas rusas 🪆:

```
Menú lateral (Drawer)
 └── Pestañas (Tabs)
      └── Pila de pantallas (Stack)
           ├── Inicio
           ├── Productos → Detalle de un producto
           ├── Carrito
           ├── Perfil
           └── Ajustes
```

## 🛍️ La tiendita

- En **Inicio** hay botones grandes: *Productos*, *Profile*, *Ajustes* y *Abrir menú*.
- En **Productos** ves una lista de cosas para comprar. Tocas "Ver detalles" y llegas a la página de ese producto.
- En el **detalle** puedes tocar "Agregar al carrito" 🛒. Después el botón se pone clarito y dice "Agregado al carrito", para que no lo agregues dos veces.
- En el **Carrito** ves todo lo que elegiste, el total a pagar 💰 y un botoncito de basura 🗑️ para sacar cosas.

## 🧠 La libreta de memoria (el store)

La app tiene una **libretita compartida** donde apunta qué hay en el carrito. Todas las pantallas pueden leerla:

- Cuando agregas algo, se escribe en la libreta y **avisa a todas las pantallas** que estén mirando: "¡Cambió algo!".
- Así, el número del botón "Carrito (2)" se actualiza solito.

Hay dos libretas:
- `products.store.ts`: la lista de productos que existen (como el catálogo de una juguetería).
- `cart.store.ts`: lo que tú pusiste en tu canasta.

## 🔗 ¿Cómo se hablan los archivos? (las conexiones)

Piensa que cada archivo es un amiguito y algunos le piden ayuda a otros con `import` (que significa "préstame esto").

**Las carpetas son los cuartos.** En Expo Router, cada archivo dentro de `src/app/` es una pantalla, y el nombre de la carpeta es la dirección:

| Archivo | Qué es | Con quién se conecta |
|---|---|---|
| `src/app/_layout.tsx` | La puerta principal de la casa. Carga las letras bonitas (fuentes), los colores (`global.css`) y los gestos de los dedos. | Envuelve a todos los demás. |
| `src/app/index.tsx` | El guardia. Apenas entras, te manda a `/home`. | Va hacia el cuarto de inicio. |
| `src/app/(drawer)/_layout.tsx` | Arma el menú lateral. | Contiene a `(tabs)`, `user` y `schedule`. |
| `src/app/(drawer)/(tabs)/_layout.tsx` | Arma las 3 pestañas de abajo. | Contiene a `(stack)`, `home` y `favorites`. |
| `src/app/(drawer)/(tabs)/(stack)/_layout.tsx` | Arma la pila y pone la flechita ⬅️ (o el icono del menú si no hay a dónde volver). | Contiene home, products, cart, profile y settings. |
| `.../products/index.tsx` | Lista de productos. | Lee `products.store` y `cart.store`; enlaza a `/products/[id]` y `/cart`. |
| `.../products/[id].tsx` | Detalle: `[id]` cambia según el producto que toques. | Busca el producto en `products.store` y llama a `addToCart` de `cart.store`. |
| `.../cart/index.tsx` | El carrito. | Lee y quita cosas con `cart.store`. |
| `.../home/index.tsx` | Botones de inicio. | Usa `CustomButton` y navega con `router.push`. |
| `src/shared/CustomButton.tsx` | Un botón bonito que todos reutilizan, como un juguete que se comparte. | Lo usan inicio, productos, carrito y detalle. |
| `src/store/*.ts` | Las libretas de memoria. | Las leen las pantallas de productos, detalle y carrito. |

### 🔑 El truco del `@`

Cuando ves `@/store/cart.store`, el `@` es un atajo mágico que significa "empieza desde la carpeta `src`". Así no te pierdes con muchos `../../..`.

### 📌 Los paréntesis `( )` en los nombres

Una carpeta como `(drawer)` o `(tabs)` es un **cuarto invisible**: ayuda a organizar, pero no aparece en la dirección de la pantalla. Por eso podemos ir a `/products` y no a `/(drawer)/(tabs)/(stack)/products`.

## ✨ Resumen

1. Abres la app → el guardia (`index.tsx`) te lleva a Inicio.
2. Navegas con el menú, las pestañas y la pila.
3. Eliges productos → se guardan en la libreta del carrito.
4. Todas las pantallas leen la misma libreta, así siempre muestran lo mismo.

¡Y listo! 🎉

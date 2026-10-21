# Navegation App

Aplicación móvil hecha con **Expo SDK 57**, **React Native** y **Expo Router** que demuestra cómo combinar los tres tipos de navegación más comunes (Drawer, Tabs y Stack) en una misma app, junto con una pequeña tienda de productos con carrito de compras.

## Descripción

- **Navegación anidada**: un menú lateral (Drawer) contiene una barra de pestañas (Tabs), y una de las pestañas contiene una pila de pantallas (Stack).
- **Catálogo de productos**: lista de productos, pantalla de detalle dinámica (`/products/[id]`) y botón para agregar al carrito.
- **Carrito**: estado global propio (sin librerías externas) con `useSyncExternalStore`; permite agregar, quitar y ver el total.
- **Estilos**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native) y fuentes personalizadas.

## Tecnologías

Expo · Expo Router · React Native · TypeScript · NativeWind · React Native Gesture Handler / Reanimated

## Estructura principal

```
src/
├── app/                 # Rutas (cada archivo es una pantalla)
│   ├── _layout.tsx      # Layout raíz: fuentes, splash y gestos
│   ├── index.tsx        # Redirige a /home
│   └── (drawer)/        # Menú lateral
│       └── (tabs)/      # Pestañas
│           └── (stack)/ # Pila: home, products, cart, profile, settings
├── components/shared/   # Componentes reutilizables
├── shared/              # Componentes reutilizables (CustomButton, CustomDrawer)
└── store/               # Estado global: productos y carrito
```

Una explicación sencilla del funcionamiento y de cómo se conectan los archivos está en [EXPLICACION.md](./EXPLICACION.md).

## Cómo ejecutarla

```bash
npm install
npx expo start
```

Luego abre la app en Android, iOS, web o Expo Go.

## Scripts útiles

```bash
npx expo lint        # Linter
npx tsc --noEmit     # Chequeo de tipos
```

## Licencia

Consulta el archivo [LICENSE](./LICENSE).

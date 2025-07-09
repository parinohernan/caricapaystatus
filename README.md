# Carica Payment Status Pages

Páginas de estado de pago para la aplicación móvil Carica, desplegadas en Netlify.

## 🚀 Funcionalidades

- **Página de pago exitoso**: `/payment/success`
- **Página de pago fallido**: `/payment/failure` 
- **Página de pago pendiente**: `/payment/pending`

Cada página incluye:
- Deep link automático a la app Carica
- Fallback manual si la app no se abre
- Soporte para parámetros de MercadoPago

## 🛠️ Tecnologías

- **Netlify Functions**: Backend serverless
- **HTML/CSS/JavaScript**: Frontend
- **Netlify**: Hosting y despliegue

## 📱 Deep Links

Las páginas generan automáticamente deep links con el esquema:
```
carica://payment/{status}?payment_id={id}&status={status}&preference_id={id}
```

## 🚀 Desarrollo Local

1. **Instalar Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Ejecutar servidor local:**
   ```bash
   netlify dev
   ```

3. **Acceder a las páginas:**
   - http://localhost:8888/payment/success
   - http://localhost:8888/payment/failure
   - http://localhost:8888/payment/pending

## 🌐 Despliegue

El proyecto se despliega automáticamente en Netlify cuando se hace push a la rama principal.

### URLs de producción:
- `/payment/success` - Página de pago exitoso
- `/payment/failure` - Página de pago fallido  
- `/payment/pending` - Página de pago pendiente

## 📋 Parámetros Soportados

- `payment_id`: ID del pago de MercadoPago
- `status`: Estado del pago (approved, rejected, pending)
- `preference_id`: ID de la preferencia de MercadoPago

## 🔧 Configuración

El archivo `netlify.toml` configura:
- Redirecciones de URLs
- Directorio de funciones
- Directorio público 
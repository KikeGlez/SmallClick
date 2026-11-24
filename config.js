/* =====================================================================
   SmallClick — CONFIGURACIÓN DE LA PÁGINA
   Este es el único archivo que necesitas editar (en GitHub: abre el
   archivo, toca el lápiz ✏️, cambia y "Commit changes").
   Regla: el texto va entre comillas "..." y los números sin comillas.
   ===================================================================== */
window.SC_CONFIG = {

  // 1) URL de tu Google Apps Script (termina en /exec). Guarda leads y envía cupones.
  leadEndpoint: "",

  // 2) Enlaces de pago de Stripe (https://buy.stripe.com/...). Vacío = el botón lleva al formulario.
  stripe: {
    USD: { landing: "", site: "", care: "" },
    MXN: { landing: "", site: "", care: "" }
  },

  // 3) Precios de lanzamiento (los que se cobran HOY)
  prices: {
    USD: { landing: 299, site: 499, care: 22 },
    MXN: { landing: 5490, site: 9290, care: 399 }
  },

  // 4) Urgencia: fecha REAL en que terminan los precios de lanzamiento.
  //    Al llegar esa fecha, la página cambia sola a "afterPrices" y el contador desaparece.
  launch: {
    ends: "2026-12-31T23:59:00-06:00",
    afterPrices: {
      USD: { landing: 330, site: 699, care: 28 },
      MXN: { landing: 5990, site: 12990, care: 499 }
    }
  },

  // 5) Lugares disponibles este mes (solo si es verdad). null = no se muestra.
  spotsLeft: null,

  // 6) Cupón de registro (%)
  couponPercent: 8,

  // 7) WhatsApp con lada, solo dígitos (ej. "5215512345678"). Vacío = sin botón.
  whatsapp: "",

  // 8) Correo de contacto que se muestra en la página
  email: "hello@smallclick.com",

  // 9) Portafolio: agrega tus proyectos reales (la imagen súbela a la carpeta portfolio/)
  portfolio: [
    // { name: "Rosa's Bakery", type_en: "Bakery · Dallas, TX", type_es: "Panadería · Dallas, TX",
    //   image: "portfolio/rosas-bakery.jpg", url: "https://rosasbakery.com",
    //   result_en: "Online orders in the first week", result_es: "Pedidos en línea desde la primera semana", plan: "Landing" },
  ],

  // 10) Segundos antes de que aparezca el popup de cotización (0 = nunca automático)
  quotePopupDelay: 25
};

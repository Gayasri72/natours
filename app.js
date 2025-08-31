require('@babel/polyfill');
var $cQivH$axios = require('axios');

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* eslint-disable */
/* eslint-disable */ const $b521082dd449d16e$export$4c5dd147b21b9176 = (
  locations,
) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2F5YXNyaSIsImEiOiJjbWV6MHJxajUwMThzMmtzZ3BzZ3UydWNyIn0.UN_pXq_zyeEERsfgn14BFQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9,
  });
  const bounds = new mapboxgl.LngLatBounds();
  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

/* eslint-disable */
/* eslint-disable */ const $cf8ea27b34b2137b$export$516836c6a9dfc573 = () => {};
const $cf8ea27b34b2137b$export$de026b00723010c1 = (type, msg, time = 7) => {};

const $433b644962c26f49$export$596d806903d1f59e = async (email, password) => {
  try {
    const res = await (0, $parcel$interopDefault($cQivH$axios))({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email: email,
        password: password,
      },
    });
    if (res.data.status === 'success') {
      (0, $cf8ea27b34b2137b$export$de026b00723010c1)(
        'success',
        'Logged in successfully!',
      );
    }
  } catch (err) {
    (0, $cf8ea27b34b2137b$export$de026b00723010c1)(
      'error',
      err.response.data.message,
    );
  }
};
const $433b644962c26f49$export$a0973bcfe11b05c9 = async () => {
  try {
    const res = await (0, $parcel$interopDefault($cQivH$axios))({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    res.data.status = 'success';
  } catch (err) {
    console.log(err.response);
    (0, $cf8ea27b34b2137b$export$de026b00723010c1)(
      'error',
      'Error logging out! Try again.',
    );
  }
};

/* eslint-disable */

const $6842e7be16478138$export$f558026a994b6051 = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';
    const res = await (0, $parcel$interopDefault($cQivH$axios))({
      method: 'PATCH',
      url: url,
      data: data,
    });
    if (res.data.status === 'success')
      (0, $cf8ea27b34b2137b$export$de026b00723010c1)(
        'success',
        `${type.toUpperCase()} updated successfully!`,
      );
  } catch (err) {
    (0, $cf8ea27b34b2137b$export$de026b00723010c1)(
      'error',
      err.response.data.message,
    );
  }
};

/* eslint-disable */

const $73e585bd0c7d6b97$export$8d5bdbf26681c0c2 = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await (0, $parcel$interopDefault($cQivH$axios))(
      `/api/v1/bookings/checkout-session/${tourId}`,
    );
    // console.log(session);
    // 2) Create checkout form + chanre credit card
    await $73e585bd0c7d6b97$var$stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    (0, $cf8ea27b34b2137b$export$de026b00723010c1)('error', err);
  }
};

// DOM ELEMENTS removed for server-side compatibility
// Event listeners removed for server-side compatibility

//# sourceMappingURL=app.js.map

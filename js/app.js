/**
 *
 * @param {NodeList} elmts selected elements from HTML to add events
 * @param {string} event event type 2.g. 'click', 'mouseenter'...
 * @param {Function} callback callback funtion to be executed when event is triggered
 */

export function eventOnElmts(elmts, event, callback) {
  for (const elmt of elmts) {
    elmt.addEventListener(event, callback);
  }
}

fetch(
  'https://www.dabipyeung.com/baexang_back/product/get_products?cate=pp&limit=5&sort=new'
)
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

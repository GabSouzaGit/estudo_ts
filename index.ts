import CachedKeys from "./classes/CachedKeys";

const cache = new CachedKeys();
console.log(cache.set("NAME", "Gabriel", 2000));
console.log(cache.get('NAME'));
setTimeout(() => {
    console.log(cache.get('NAME'));
}, 3000);


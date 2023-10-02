import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const AnimantedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `  <div class="flex justify-center my-6"><ul class="steps"><a href="/login" class="step step-primary" data-svelte-h="svelte-9vbi6e">Sign In</a> <a href="/login/username" class="${[
    "step",
    $page.route.id?.match(/username|photo/g) ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-izx8bk">Choose Username</a> <a href="/login/photo" class="${[
    "step",
    $page.route.id?.includes("photo") ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-k872tv">Upload Photo</a></ul></div> ${validate_component(AnimantedRoute, "AnimantedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="card w-96 bg-neutral text-neutral-content mx-auto"><div class="card-body items-center text-center">${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};

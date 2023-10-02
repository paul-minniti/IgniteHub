import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { u as user, A as AuthCheck } from "../../../chunks/AuthCheck.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${$user ? `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="card-title">Welcome, ${escape($user.displayName)}</h2> <p class="text-center, text-success" data-svelte-h="svelte-fnthq7">You are logged in</p> <button class="btn btn-primary" data-svelte-h="svelte-1gvjv17">Sign out</button>`;
    }
  })}` : `<button class="btn btn-primary" data-svelte-h="svelte-1xxljf2">Sign in With Google</button>`}`;
});
export {
  Page as default
};

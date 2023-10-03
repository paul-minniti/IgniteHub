

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.16e73b97.js","_app/immutable/chunks/scheduler.92391968.js","_app/immutable/chunks/index.0ef68b7d.js","_app/immutable/chunks/stores.10ce8591.js","_app/immutable/chunks/singletons.1d6f716c.js","_app/immutable/chunks/index.7c43458a.js"];
export const stylesheets = [];
export const fonts = [];

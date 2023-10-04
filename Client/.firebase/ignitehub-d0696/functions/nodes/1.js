

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4584f9fa.js","_app/immutable/chunks/scheduler.92391968.js","_app/immutable/chunks/index.0ef68b7d.js","_app/immutable/chunks/stores.ccac1364.js","_app/immutable/chunks/singletons.7d40e15a.js","_app/immutable/chunks/index.7c43458a.js"];
export const stylesheets = [];
export const fonts = [];

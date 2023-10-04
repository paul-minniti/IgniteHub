

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d5496468.js","_app/immutable/chunks/scheduler.92391968.js","_app/immutable/chunks/index.0ef68b7d.js","_app/immutable/chunks/stores.f5b257de.js","_app/immutable/chunks/singletons.7a2cadee.js","_app/immutable/chunks/index.7c43458a.js"];
export const stylesheets = [];
export const fonts = [];

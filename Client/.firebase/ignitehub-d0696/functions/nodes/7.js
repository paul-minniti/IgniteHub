

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.7fa635ba.js","_app/immutable/chunks/scheduler.92391968.js","_app/immutable/chunks/index.0ef68b7d.js"];
export const stylesheets = [];
export const fonts = [];

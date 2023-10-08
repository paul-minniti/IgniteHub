/** @format */

import { goto } from "$app/navigation";

export function routeToPage(route: string, replaceState: boolean = true) {
	goto(`http://localhost:5173${route}`, { replaceState });
}

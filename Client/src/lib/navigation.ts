/** @format */

import { goto } from "$app/navigation";

export function routeToPage(route: string, replaceState: boolean = true) {
	goto(`http://${window.location.host}${route}`, { replaceState });
}

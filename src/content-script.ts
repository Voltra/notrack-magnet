import { cleanMagnetUrl } from "./utils";

document.querySelectorAll<HTMLAnchorElement>("a[href^='magnet:' i]")
	.forEach(magnetLink => {
		magnetLink.href = cleanMagnetUrl(magnetLink.href);
	});
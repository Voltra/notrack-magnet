document.querySelectorAll<HTMLAnchorElement>("a[href^='magnet:' i]")
	.forEach(magnetLink => {
		const url = new URL(magnetLink.href);

		url.searchParams.delete("tr");

		magnetLink.href = url.toString();
	});
export const cleanMagnetUrl = (magnetUrl: string): string => {
	const url = new URL(magnetUrl);

	url.searchParams.delete("tr");

	return url.toString();
};
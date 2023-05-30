function formatPrice(price: number): string {
	const roundedPrice = Math.round(price * 100) / 100; // Round to two decimal places
	const formattedPrice = roundedPrice.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});
	return formattedPrice;
}

export default formatPrice;

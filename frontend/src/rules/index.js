export const emptyRule = (val) => val && val.length > 0 || 'Please type something';
export const emptySelectRule = (val) => !!val?.value || 'Please select something';
export const validationRule = (val, data) => {
	let message = '';
	if (val && +val < data?.min) message = `Please enter a value greater than ${data.min}`;
	if (val && +val > data?.max) message = `Please enter a value lower than ${data.max}`;
	return () => message || true;
};

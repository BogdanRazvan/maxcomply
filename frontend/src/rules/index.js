export const emptyRule = (val) => val && val.length > 0 || 'Please type something';
export const noFileRule = (val) => {
	return val && val.length > 0 || 'Please add a file';
};
export const emptySelectRule = (val) => !!val?.value || 'Please select something';
export const validationRule = (val, data) => {
	let message = '';
	if (val && val.length < data?.min) message = `The value should be at least ${data.min} characters long`;
	if (val && val.length > data?.max) message = `The value should be at most ${data.max} characters long`;
	return () => message || true;
};

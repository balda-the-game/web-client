export default {
	email: (string) => /^[\w-]+@([\w-]+\.)+[\w-]{3,4}$/.test(string),
	password: (string) => /^[\d\w\S]{8,}$/g.test(string),
	username: (string) => /^[^\W\d][\d\w]{2,16}$/g.test(string),
};

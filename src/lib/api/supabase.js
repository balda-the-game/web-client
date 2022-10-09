import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.onAuthStateChange((event, session) => {
	if (event == "SIGNED_IN") console.log("SIGNED_IN", session);
	if (event == "SIGNED_OUT") console.log("SIGNED_OUT", session);
	if (event == "TOKEN_REFRESHED") console.log("TOKEN_REFRESHED", session);
	if (event == "USER_DELETED") console.log("USER_DELETED", session);
	if (event == "PASSWORD_RECOVERY") console.log("PASSWORD_RECOVERY", session);
	if (event == "USER_UPDATED") console.log("USER_UPDATED", session);
});

export async function login({ email, password }) {
	const { user, error } = await supabase.auth.signIn({ email, password });
	if (error) throw error;
	return user;
}
export async function logout() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
}
export async function register({ email, password, ...meta }) {
	const { error } = await supabase.auth.signUp(
		{ email, password },
		{ data: meta }
	);
	if (error) throw error;
}
export async function update(data) {
	const { user, error } = await supabase.auth.update(data);
	if (error) throw error;
	return user;
}
export async function sendResetPasswordEmail(email) {
	const { error } = await supabase.auth.api.resetPasswordForEmail(email, {
		redirectTo: `${import.meta.env.BASE_URL}/reset-password`,
	});
	if (error) throw error;
}
export async function getUserProfile(username) {
	const { data, error } = await supabase
		.from("profiles")
		.select("username, avatar_url")
		.eq("username", username);

	if (error) throw error;
	return data[0];
}

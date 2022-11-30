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
		redirectTo: `${import.meta.env.VITE_BASE_URL}/reset-password/`,
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
// Lobbies
export async function createLobby({
	title,
	key,
	dimention,
	language,
	max_players,
}) {
	const { data, error } = await supabase.from("lobbies").insert([
		{
			title: title,
			key: key,
			dimention: dimention,
			language: language,
			max_players: max_players,
		},
	]);
	if (error) throw error;
	return data;
}
export async function getLobbies() {
	const { data, error } = await supabase.from("lobbies").select("*");
	if (error) throw error;
	return data;
}
export async function joinLobby({ userId, id, key }) {
	let { data, error } = await supabase
		.from("lobbies")
		.select("players_list")
		.eq("id", id)
		.eq("key", key);

	if (data.length == 0) throw new Error("Wrong key or lobby");
	if (error) throw error;

	const players_list = data[0].players_list;
	let newPlayersList = [];

	if (players_list == null) newPlayersList = [userId];
	else if (!players_list.includes(userId))
		newPlayersList = [...players_list, userId];
	else throw new Error("You're already in this lobby");

	console.log(newPlayersList);
	let { data: joinData, error: joinError } = await supabase
		.from("lobbies")
		.update({ players_list: newPlayersList })
		.eq("id", id)
		.eq("key", key);

	if (joinData.length == 0) throw new Error("Couldn't connect to lobby");
	if (joinError) throw error;
	return joinData;
}

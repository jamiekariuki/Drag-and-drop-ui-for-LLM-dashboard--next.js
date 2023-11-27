/* import {
	Facebook,
	OnCommentReplyFacebook,
	OnFirstCommentFacebook,
	OnFirstMessageFacebook,
	OnMessageFacebook,
} from "./nodes/events/facebook/facebook";
import {
	Gmail,
	OnFirstMessageGmail,
	OnMessageGmail,
} from "./nodes/events/gmail/gmail";
import {
	Instagram,
	OnCommentReplyInstagram,
	OnFirstCommentInstagram,
	OnFirstMessageInstagram,
	OnMessageInstagram,
} from "./nodes/events/instagram/instagram";
import {
	Linkedin,
	OnCommentReplyLinkedin,
	OnFirstCommentLinkedin,
	OnFirstMessageLinkedin,
	OnMessageLinkedin,
} from "./nodes/events/linkedin/linkedin";
import {
	OnCommentReplyTwitter,
	OnFirstCommentTwitter,
	OnFirstMessageTwitter,
	OnMessageTwitter,
	Twitter,
} from "./nodes/events/twitter/twitter";
import {
	OnFirstMessageWhatsapp,
	OnMessageWhatsapp,
	Whatsapp,
} from "./nodes/events/whatsapp/whatsapp"; */

import {
	CustomSchedules,
	OnDateSchedules,
	OnDaySchedules,
	OnTimeSchedules,
	Schedules,
} from "./nodes/events/schedules/schedules";

export const nodeTypes = {
	//1. events
	//whatsapp
	/* whatsapp: Whatsapp,
	onFirstMessageWhatsapp: OnFirstMessageWhatsapp,
	onMessageWhatsapp: OnMessageWhatsapp,
	//instagram
	instagram: Instagram,
	onFirstMessageInstagram: OnFirstMessageInstagram,
	onMessageInstagram: OnMessageInstagram,
	onFirstCommentInstagram: OnFirstCommentInstagram,
	onCommentReplyInstagram: OnCommentReplyInstagram,
	//facebook
	facebook: Facebook,
	onFirstMessageFacebook: OnFirstMessageFacebook,
	onMessageFacebook: OnMessageFacebook,
	onFirstCommentFacebook: OnFirstCommentFacebook,
	onCommentReplyFacebook: OnCommentReplyFacebook,
	//twitter
	twitter: Twitter,
	onFirstMessageTwitter: OnFirstMessageTwitter,
	onMessageTwitter: OnMessageTwitter,
	onFirstCommentTwitter: OnFirstCommentTwitter,
	onCommentReplyTwitter: OnCommentReplyTwitter,
	//linkedin
	linkedin: Linkedin,
	onFirstMessageLinkedin: OnFirstMessageLinkedin,
	onMessageLinkedin: OnMessageLinkedin,
	onFirstCommentLinkedin: OnFirstCommentLinkedin,
	onCommentReplyLinkedin: OnCommentReplyLinkedin,
	//gmail
	gmail: Gmail,
	onFirstMessageGmail: OnFirstMessageGmail,
	onMessageGmail: OnMessageGmail, */

	//schedules
	schedules: Schedules,
	onTimeSchedules: OnTimeSchedules,
	onDaySchedules: OnDaySchedules,
	onDateSchedules: OnDateSchedules,
	customSchedules: CustomSchedules,
};

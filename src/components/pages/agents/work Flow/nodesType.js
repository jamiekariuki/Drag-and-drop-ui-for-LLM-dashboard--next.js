import {
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
} from "./nodes/events/whatsapp/whatsapp";

import {
	CustomSchedules,
	OnDateSchedules,
	OnDaySchedules,
	OnTimeSchedules,
	Schedules,
} from "./nodes/events/schedules/schedules";

import {
	CommentReplyFacebookPlugin,
	FacebookPlugin,
	InboxReplyFacebookPlugin,
	PostFacebookPlugin,
	SendMessageFacebookPlugin,
} from "./nodes/plugins/facebook/facebook.plugin";
import {
	GmailPlugin,
	InboxReplyGmailPlugin,
	SendMessageGmailPlugin,
} from "./nodes/plugins/gmail/gmail.plugin";
import {
	CommentReplyInstagramPlugin,
	InboxReplyInstagramPlugin,
	InstagramPlugin,
	PostInstagramPlugin,
	SendMessageInstagramPlugin,
} from "./nodes/plugins/instagram/instagram.plugin";
import {
	CommentReplyLinkedinPlugin,
	InboxReplyLinkedinPlugin,
	LinkedinPlugin,
	PostLinkedinPlugin,
	SendMessageLinkedinPlugin,
} from "./nodes/plugins/linkedin/linkedin.plugin";
import {
	CommentReplyTwitterPlugin,
	InboxReplyTwitterPlugin,
	PostTwitterPlugin,
	SendMessageTwitterPlugin,
	TwitterPlugin,
} from "./nodes/plugins/twitter/twitter.plugin";

import { GooglecalendarPlugin } from "./nodes/plugins/google calendar/googlecalendar.plugin";
import { GoogledocsPlugin } from "./nodes/plugins/google docs/googledocs.plugin";
import { GoogledrivePlugin } from "./nodes/plugins/google drive/googledrive.plugin";
import { GooglesheetsPlugin } from "./nodes/plugins/google sheets/goglesheets.plugin";
import { InventoryPlugin } from "./nodes/plugins/inventory/invetory.plugin";
import {
	InboxReplyWhatsappPlugin,
	SendMessageWhatsappPlugin,
	WhatsappPlugin,
} from "./nodes/plugins/whatsapp/whatsapp.plugin";

import FileTool from "./nodes/tools/file/file.tool";
import HumanTool from "./nodes/tools/human/human.tool";
import MediaTool from "./nodes/tools/media/media.tool";

import ChatbotAgent from "./nodes/AI/Chatbot Agent/chatbot.agent";
import ResearchAgent from "./nodes/AI/Research Agent/research.agent";
import VirtualAgent from "./nodes/AI/Virtual Assistant Agent/virtual.agent";

//------------------------------------------------------------------------
export const nodeTypes = {
	//1. events
	//whatsapp
	whatsapp: Whatsapp,
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
	onMessageGmail: OnMessageGmail,

	//schedules
	schedules: Schedules,
	onTimeSchedules: OnTimeSchedules,
	onDaySchedules: OnDaySchedules,
	onDateSchedules: OnDateSchedules,
	customSchedules: CustomSchedules,

	//2. plugins
	//whatsapp
	whatsappPlugin: WhatsappPlugin,
	inboxReplyWhatsappPlugin: InboxReplyWhatsappPlugin,
	sendMessageWhatsappPlugin: SendMessageWhatsappPlugin,

	//gmail
	gmailPlugin: GmailPlugin,
	inboxReplyGmailPlugin: InboxReplyGmailPlugin,
	sendMessageGmailPlugin: SendMessageGmailPlugin,

	//instagram
	instagramPlugin: InstagramPlugin,
	inboxReplyInstagramPlugin: InboxReplyInstagramPlugin,
	commentReplyInstagramPlugin: CommentReplyInstagramPlugin,
	sendMessageInstagramPlugin: SendMessageInstagramPlugin,
	postInstagramPlugin: PostInstagramPlugin,

	//twitter
	twitterPlugin: TwitterPlugin,
	inboxReplyTwitterPlugin: InboxReplyTwitterPlugin,
	commentReplyTwitterPlugin: CommentReplyTwitterPlugin,
	sendMessageTwitterPlugin: SendMessageTwitterPlugin,
	postTwitterPlugin: PostTwitterPlugin,

	//facebook
	facebookPlugin: FacebookPlugin,
	inboxReplyFacebookPlugin: InboxReplyFacebookPlugin,
	commentReplyFacebookPlugin: CommentReplyFacebookPlugin,
	sendMessageFacebookPlugin: SendMessageFacebookPlugin,
	postFacebookPlugin: PostFacebookPlugin,

	//linkedin
	linkedinPlugin: LinkedinPlugin,
	inboxReplyLinkedinPlugin: InboxReplyLinkedinPlugin,
	commentReplyLinkedinPlugin: CommentReplyLinkedinPlugin,
	sendMessageLinkedinPlugin: SendMessageLinkedinPlugin,
	postLinkedinPlugin: PostLinkedinPlugin,

	//google sheets
	googlesheetsPlugin: GooglesheetsPlugin,

	//google docs
	googledocsPlugin: GoogledocsPlugin,

	//google drive
	googledrivePlugin: GoogledrivePlugin,

	//google calendar
	googlecalendarPlugin: GooglecalendarPlugin,

	//inventory
	inventoryPlugin: InventoryPlugin,

	//tools
	//human
	humanTool: HumanTool,

	//File
	fileTool: FileTool,

	//media
	mediaTool: MediaTool,

	chatbotagent: ChatbotAgent,

	researchagent: ResearchAgent,

	virtualagent: VirtualAgent,
};

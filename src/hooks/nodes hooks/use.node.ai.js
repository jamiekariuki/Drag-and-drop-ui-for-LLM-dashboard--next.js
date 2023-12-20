"use cleint";
import { useState, useEffect } from "react";

const useNodeAi = (data, prompt, setPrompt, promptLength) => {
	const [saveBtn, setSaveBtn] = useState(false);
	const [track, setTrack] = useState(false);
	//chatbot settings
	//ai intelligence
	const [aiLevel, setAiLevel] = useState(
		data.settings.aiLevel ? data.settings.aiLevel : ""
	);
	//usage
	const [usage, setUsage] = useState(
		data.settings.usage ? data.settings.usage : ""
	);
	//abilities
	const [abilities, setAbilities] = useState(
		data.settings.abilities
			? data.settings.abilities
			: {
					timeSchedule: false,
					leadExtraction: false,
					salesAndMarketing: false,
					multiModal: false,
			  }
	);
	const settings = { aiLevel, usage, abilities };
	//----------------------------------------------------------------------

	//chatbot general
	//system prompt----------

	const systemPromptLength = promptLength;
	const systemPrompt = prompt;
	const setSystemPrompt = (value) => {
		if (value.replace(/\s/g, "").length <= systemPromptLength) {
			setPrompt(value);
		}
	};

	//company name----------
	const [companyName, setCompanyNameMain] = useState(
		data.generalPrompts.companyName ? data.generalPrompts.companyName : ""
	);
	const companyNameLength = 50;
	const setCompanyName = (value) => {
		if (value.replace(/\s/g, "").length <= companyNameLength) {
			setCompanyNameMain(value);
		}
	};
	//company info----------
	const [companyInfo, setCompanyInfoMain] = useState(
		data.generalPrompts.companyInfo ? data.generalPrompts.companyInfo : ""
	);
	const companyInfoLength = 5000;
	const setCompanyInfo = (value) => {
		if (value.replace(/\s/g, "").length <= companyInfoLength) {
			setCompanyInfoMain(value);
		}
	};
	//contact----------
	const [contact, setContactMain] = useState(
		data.generalPrompts.contact ? data.generalPrompts.contact : ""
	);
	const contactLength = 40;
	const setContact = (value) => {
		if (value.replace(/\s/g, "").length <= contactLength) {
			setContactMain(value);
		}
	};
	//email----------
	const [email, setEmailMain] = useState(
		data.generalPrompts.email ? data.generalPrompts.email : ""
	);
	const emailLength = 40;
	const setEmail = (value) => {
		if (value.replace(/\s/g, "").length <= emailLength) {
			setEmailMain(value);
		}
	};
	//location----------
	const [location, setLocationMain] = useState(
		data.generalPrompts.location ? data.generalPrompts.location : ""
	);
	const locationLength = 80;
	const setLocation = (value) => {
		if (value.replace(/\s/g, "").length <= locationLength) {
			setLocationMain(value);
		}
	};
	//extrainfo----------
	const [extraInfo, setExtraInfoMain] = useState(
		data.generalPrompts.extraInfo ? data.generalPrompts.extraInfo : ""
	);
	const extraInfoLength = 1000;
	const setExtraInfo = (value) => {
		if (value.replace(/\s/g, "").length <= extraInfoLength) {
			setExtraInfoMain(value);
		}
	};

	const generalPrompts = {
		systemPrompt,
		companyName,
		companyInfo,
		contact,
		email,
		location,
		extraInfo,
	};

	//----------------------------------------------------------------------

	//time schedule
	//schedule Title----------
	const [scheduleTitle, setScheduleTitleMain] = useState(
		data.timeSchedule.scheduleTitle ? data.timeSchedule.scheduleTitle : ""
	);
	const scheduleTitleLength = 50;
	const setScheduleTitle = (value) => {
		if (value.replace(/\s/g, "").length <= scheduleTitleLength) {
			setScheduleTitleMain(value);
		}
	};
	//guest email
	const [guestEmail, setGuestEmail] = useState(
		data.timeSchedule.guestEmail ? data.timeSchedule.guestEmail : false
	);
	//location
	const [scheduleLocation, setScheduleLocation] = useState(
		data.timeSchedule.scheduleLocation
			? data.timeSchedule.scheduleLocation
			: false
	);
	//description
	const [scheduleDescription, setScheduleDescription] = useState(
		data.timeSchedule.scheduleDescription
			? data.timeSchedule.scheduleDescription
			: false
	);
	//busy
	const [scheduleBusy, setScheduleBusy] = useState(
		data.timeSchedule.scheduleBusy ? data.timeSchedule.scheduleBusy : false
	);

	const timeSchedule = {
		scheduleTitle,
		guestEmail,
		scheduleLocation,
		scheduleDescription,
		scheduleBusy,
	};

	//----------------------------------------------------------------------

	//leads
	//leads fields----------
	const [leadsField, setLeadsFieldMain] = useState("");
	const leadsFieldLength = 50;
	const setLeadsField = (value) => {
		if (value.replace(/\s/g, "").length <= leadsFieldLength) {
			setLeadsFieldMain(value);
		}
	};
	//leads saving
	const [leadsSaveDestination, setleadsSaveDestination] = useState(
		data.settings.leadsSaveDestination
			? data.settings.leadsSaveDestination
			: ""
	);

	const leadsExtraction = { leadsField, leadsSaveDestination };

	//----------------------------------------------------------------------

	//sales & marketing
	//preference
	const [sandmPreference, setSandmPreferenceMain] = useState(
		data.salesAndMarketing.sandmPreference
			? data.salesAndMarketing.sandmPreference
			: ""
	);
	const sandmPreferenceLength = 500;
	const setSandmPreference = (value) => {
		if (value.replace(/\s/g, "").length <= sandmPreferenceLength) {
			setSandmPreferenceMain(value);
		}
	};
	//products
	const [sandmProducts, setSandmProducts] = useState(
		data.salesAndMarketing.sandmProducts
			? data.salesAndMarketing.sandmProducts
			: false
	);

	const salesAndMarketing = {
		sandmPreference,
		sandmProducts,
	};

	//----------------------------------------------------------------------

	//multimodal
	//generate image
	const [generateImage, setGenerateImage] = useState(
		data.multimodal.generateImage ? data.multimodal.generateImage : false
	);

	//generate sysytem prompt
	const [generateImagePrompt, setGenerateImagePromptMain] = useState(
		data.multimodal.generateImagePrompt
			? data.multimodal.generateImagePrompt
			: ""
	);
	const generateImagePromptLength = 500;
	const setGenerateImagePrompt = (value) => {
		if (value.replace(/\s/g, "").length <= generateImagePromptLength) {
			setGenerateImagePromptMain(value);
		}
	};

	//process image
	const [processImage, setProcessImage] = useState(
		data.multimodal.processImage ? data.multimodal.processImage : false
	);

	//process sysytem prompt
	const [processImagePrompt, setProcessImagePromptMain] = useState(
		data.multimodal.processImagePrompt
			? data.multimodal.processImagePrompt
			: ""
	);
	const processImagePromptLength = 500;
	const setProcessImagePrompt = (value) => {
		if (value.replace(/\s/g, "").length <= processImagePromptLength) {
			setProcessImagePromptMain(value);
		}
	};

	const multimodal = {
		generateImagePrompt,
		generateImage,
		processImage,
		processImagePrompt,
	};

	//----------------------------------------------------------------------

	//knowledgeRetrival
	//internal bool
	const [internalRetrival, setInternalRetrival] = useState(
		data.knowledgeRetrival.internalRetrival
			? data.knowledgeRetrival.internalRetrival
			: false
	);

	//fqa
	const [fqa, setFqaMain] = useState(
		data.knowledgeRetrival.fqa ? data.knowledgeRetrival.fqa : ""
	);
	const fqaLength = 500;
	const setFqa = (value) => {
		if (value.replace(/\s/g, "").length <= fqaLength) {
			setFqaMain(value);
		}
	};
	//products
	const [products, setProductsMain] = useState(
		data.knowledgeRetrival.products ? data.knowledgeRetrival.products : ""
	);
	const productsLength = 500;
	const setProducts = (value) => {
		if (value.replace(/\s/g, "").length <= productsLength) {
			setProductsMain(value);
		}
	};
	//custom title
	const [customTitle, setCustomTitleMain] = useState(
		data.knowledgeRetrival.customTitle
			? data.knowledgeRetrival.customTitle
			: ""
	);
	const customTitleLength = 500;
	const setCustomTitle = (value) => {
		if (value.replace(/\s/g, "").length <= customTitleLength) {
			setCustomTitleMain(value);
		}
	};
	//custom prompt
	const [customPrompt, setCustomPromptMain] = useState(
		data.knowledgeRetrival.customPrompt
			? data.knowledgeRetrival.customPrompt
			: ""
	);
	const customPromptLength = 500;
	const setCustomPrompt = (value) => {
		if (value.replace(/\s/g, "").length <= customPromptLength) {
			setCustomPromptMain(value);
		}
	};

	const knowledgeRetrival = {
		internalRetrival,
		fqa,
		products,
		customTitle,
		customPrompt,
	};

	//-----------------------------------------------------------------------------------------------------
	const configure = {
		settings,
		generalPrompts,
		timeSchedule,
		leadsExtraction,
		salesAndMarketing,
		multimodal,
		knowledgeRetrival,
	};

	//save btn
	const updateSaveButton = () => {
		if (track && usage !== "" && aiLevel !== "") {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}
		setTrack(true);
	};

	useEffect(() => {
		updateSaveButton();
	}, [
		usage,
		aiLevel,
		systemPrompt,
		companyName,
		companyInfo,
		contact,
		email,
		location,
		extraInfo,
		scheduleTitle,
		guestEmail,
		scheduleLocation,
		scheduleDescription,
		scheduleBusy,
		leadsField,
		leadsSaveDestination,
		sandmPreference,
		sandmProducts,
		generateImage,
		generateImagePrompt,
		processImage,
		processImagePrompt,
		internalRetrival,
		fqa,
		products,
		customTitle,
		customPrompt,
	]);

	return {
		usage,
		setUsage,
		aiLevel,
		setAiLevel,
		abilities,
		setAbilities,
		configure,
		saveBtn,
		setSaveBtn,

		//general
		//system prompt
		systemPrompt,
		setSystemPrompt,
		systemPromptLength,
		//company name
		companyName,
		setCompanyName,
		companyNameLength,
		//company Info
		companyInfo,
		setCompanyInfo,
		companyInfoLength,
		//contact
		contact,
		setContact,
		contactLength,
		//email
		email,
		setEmail,
		emailLength,
		//location
		location,
		setLocation,
		locationLength,
		//extra info
		extraInfo,
		setExtraInfo,
		extraInfoLength,

		//time schedule
		//schdule title
		scheduleTitle,
		setScheduleTitle,
		scheduleTitleLength,
		//guest email
		guestEmail,
		setGuestEmail,
		//location
		scheduleLocation,
		setScheduleLocation,
		//description
		scheduleDescription,
		setScheduleDescription,
		//Busy
		scheduleBusy,
		setScheduleBusy,

		//lead extraction
		//leads fields
		leadsField,
		setLeadsField,
		leadsFieldLength,
		//save destination
		leadsSaveDestination,
		setleadsSaveDestination,

		//sales and marketing
		//preference
		sandmPreference,
		setSandmPreference,
		sandmPreferenceLength,
		//products
		sandmProducts,
		setSandmProducts,

		//multimodal
		//generate image
		generateImage,
		setGenerateImage,
		//generate prompt
		generateImagePrompt,
		setGenerateImagePrompt,
		generateImagePromptLength,
		//process image
		processImage,
		setProcessImage,
		//process prompt
		processImagePrompt,
		setProcessImagePrompt,
		processImagePromptLength,

		//knowledge retrival
		//internal
		internalRetrival,
		setInternalRetrival,
		//fqa
		fqa,
		setFqa,
		fqaLength,
		//products
		products,
		setProducts,
		productsLength,
		//custom title
		customTitle,
		setCustomTitle,
		customTitleLength,
		//custom prompt
		customPrompt,
		setCustomPrompt,
		customPromptLength,
	};
};

export default useNodeAi;

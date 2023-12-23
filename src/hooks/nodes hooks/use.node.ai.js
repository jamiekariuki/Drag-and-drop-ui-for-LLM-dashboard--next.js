"use cleint";
import { useState, useEffect } from "react";

const useNodeAi = (data, prompt, setPrompt, promptLength) => {
	const [saveBtn, setSaveBtn] = useState(false);
	const [track, setTrack] = useState(false);
	//chatbot settings
	//ai intelligence
	const [aiLevel, setAiLevel] = useState(
		//	data.settings.aiLevel ? data.settings.aiLevel : "1"

		data.settings
			? data.settings.aiLevel
				? data.settings.aiLevel
				: "Medium"
			: "Medium"
	);
	//usage
	const [usage, setUsage] = useState(
		data.settings ? (data.settings.usage ? data.settings.usage : "") : ""
	);
	//abilities
	const [abilities, setAbilities] = useState(
		data.settings
			? data.settings.abilities
				? data.settings.abilities
				: {
						timeSchedule: false,
						leadExtraction: false,
						salesAndMarketing: false,
						multiModal: false,
				  }
			: {
					timeSchedule: false,
					leadExtraction: false,
					salesAndMarketing: false,
					multiModal: false,
			  }
	);

	//research setting
	//search quality
	const [searchQuality, setSearchQuality] = useState(
		data.settings
			? data.settings.searchQuality
				? data.settings.searchQuality
				: "Medium"
			: "Medium"
	);

	//task execution
	const [taskExecution, setTaskExecution] = useState(
		data.settings
			? data.settings.taskExecution
				? data.settings.taskExecution
				: "Medium"
			: "Medium"
	);

	const settings = {
		aiLevel,
		usage,
		abilities,
		searchQuality,
		taskExecution,
	};

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
		data.generalPrompts
			? data.generalPrompts.companyName
				? data.generalPrompts.companyName
				: ""
			: ""
	);
	const companyNameLength = 50;
	const setCompanyName = (value) => {
		if (value.replace(/\s/g, "").length <= companyNameLength) {
			setCompanyNameMain(value);
		}
	};
	//company info----------
	const [companyInfo, setCompanyInfoMain] = useState(
		data.generalPrompts
			? data.generalPrompts.companyInfo
				? data.generalPrompts.companyInfo
				: ""
			: ""
	);
	const companyInfoLength = 5000;
	const setCompanyInfo = (value) => {
		if (value.replace(/\s/g, "").length <= companyInfoLength) {
			setCompanyInfoMain(value);
		}
	};
	//contact----------
	const [contact, setContactMain] = useState(
		data.generalPrompts
			? data.generalPrompts.contact
				? data.generalPrompts.contact
				: ""
			: ""
	);
	const contactLength = 40;
	const setContact = (value) => {
		if (value.replace(/\s/g, "").length <= contactLength) {
			setContactMain(value);
		}
	};
	//email----------
	const [email, setEmailMain] = useState(
		data.generalPrompts
			? data.generalPrompts.email
				? data.generalPrompts.email
				: ""
			: ""
	);
	const emailLength = 40;
	const setEmail = (value) => {
		if (value.replace(/\s/g, "").length <= emailLength) {
			setEmailMain(value);
		}
	};
	//location----------
	const [location, setLocationMain] = useState(
		data.generalPrompts
			? data.generalPrompts.location
				? data.generalPrompts.location
				: ""
			: ""
	);
	const locationLength = 80;
	const setLocation = (value) => {
		if (value.replace(/\s/g, "").length <= locationLength) {
			setLocationMain(value);
		}
	};
	//extrainfo----------
	const [extraInfo, setExtraInfoMain] = useState(
		data.generalPrompts
			? data.generalPrompts.extraInfo
				? data.generalPrompts.extraInfo
				: ""
			: ""
	);
	const extraInfoLength = 1000;
	const setExtraInfo = (value) => {
		if (value.replace(/\s/g, "").length <= extraInfoLength) {
			setExtraInfoMain(value);
		}
	};

	//research agent
	//format
	const [format, setFormatMain] = useState(
		data.generalPrompts
			? data.generalPrompts.format
				? data.generalPrompts.format
				: ""
			: ""
	);
	const formatLength = 1000;
	const setFormat = (value) => {
		if (value.replace(/\s/g, "").length <= formatLength) {
			setFormatMain(value);
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
		format,
	};

	//----------------------------------------------------------------------

	//time schedule
	//schedule Title----------
	const [scheduleTitle, setScheduleTitleMain] = useState(
		data.timeSchedule
			? data.timeSchedule.scheduleTitle
				? data.timeSchedule.scheduleTitle
				: ""
			: ""
	);
	const scheduleTitleLength = 50;
	const setScheduleTitle = (value) => {
		if (value.replace(/\s/g, "").length <= scheduleTitleLength) {
			setScheduleTitleMain(value);
		}
	};
	//guest email
	const [guestEmail, setGuestEmail] = useState(
		data.timeSchedule
			? data.timeSchedule.guestEmail
				? data.timeSchedule.guestEmail
				: false
			: false
	);
	//location
	const [scheduleLocation, setScheduleLocation] = useState(
		data.timeSchedule
			? data.timeSchedule.scheduleLocation
				? data.timeSchedule.scheduleLocation
				: false
			: false
	);
	//description
	const [scheduleDescription, setScheduleDescription] = useState(
		data.timeSchedule
			? data.timeSchedule.scheduleDescription
				? data.timeSchedule.scheduleDescription
				: false
			: false
	);
	//busy
	const [scheduleBusy, setScheduleBusy] = useState(
		data.timeSchedule
			? data.timeSchedule.scheduleBusy
				? data.timeSchedule.scheduleBusy
				: false
			: false
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
	const [leadsField, setLeadsFieldMain] = useState(
		data.leadsExtraction
			? data.leadsExtraction.leadsField
				? data.leadsExtraction.leadsField
				: ""
			: ""
	);
	const leadsFieldLength = 50;
	const setLeadsField = (value) => {
		if (value.replace(/\s/g, "").length <= leadsFieldLength) {
			setLeadsFieldMain(value);
		}
	};
	//leads saving
	const [leadsSaveDestination, setleadsSaveDestination] = useState(
		data.leadsExtraction
			? data.leadsExtraction.leadsSaveDestination
				? data.leadsExtraction.leadsSaveDestination
				: ""
			: ""
	);

	const leadsExtraction = { leadsField, leadsSaveDestination };

	//----------------------------------------------------------------------

	//sales & marketing
	//preference
	const [sandmPreference, setSandmPreferenceMain] = useState(
		data.salesAndMarketing
			? data.salesAndMarketing.sandmPreference
				? data.salesAndMarketing.sandmPreference
				: ""
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
		data.salesAndMarketing
			? data.salesAndMarketing.sandmProducts
				? data.salesAndMarketing.sandmProducts
				: false
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
		data.multimodal
			? data.multimodal.generateImage
				? data.multimodal.generateImage
				: false
			: false
	);

	//generate sysytem prompt
	const [generateImagePrompt, setGenerateImagePromptMain] = useState(
		data.multimodal
			? data.multimodal.generateImagePrompt
				? data.multimodal.generateImagePrompt
				: ""
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
		data.multimodal
			? data.multimodal.processImage
				? data.multimodal.processImage
				: false
			: false
	);

	//process sysytem prompt
	const [processImagePrompt, setProcessImagePromptMain] = useState(
		data.multimodal
			? data.multimodal.processImagePrompt
				? data.multimodal.processImagePrompt
				: ""
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
		data.knowledgeRetrival
			? data.knowledgeRetrival.internalRetrival
				? data.knowledgeRetrival.internalRetrival
				: false
			: false
	);

	//fqa
	const [fqa, setFqaMain] = useState(
		data.knowledgeRetrival
			? data.knowledgeRetrival.fqa
				? data.knowledgeRetrival.fqa
				: ""
			: ""
	);
	const fqaLength = 500;
	const setFqa = (value) => {
		if (value.replace(/\s/g, "").length <= fqaLength) {
			setFqaMain(value);
		}
	};
	//products
	const [products, setProductsMain] = useState(
		data.knowledgeRetrival
			? data.knowledgeRetrival.products
				? data.knowledgeRetrival.products
				: ""
			: ""
	);
	const productsLength = 500;
	const setProducts = (value) => {
		if (value.replace(/\s/g, "").length <= productsLength) {
			setProductsMain(value);
		}
	};
	//custom title
	const [customTitle, setCustomTitleMain] = useState(
		data.knowledgeRetrival
			? data.knowledgeRetrival.customTitle
				? data.knowledgeRetrival.customTitle
				: ""
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
		data.knowledgeRetrival
			? data.knowledgeRetrival.customPrompt
				? data.knowledgeRetrival.customPrompt
				: ""
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
	const configure = cleanValues({
		settings,
		generalPrompts,
		timeSchedule,
		leadsExtraction,
		salesAndMarketing,
		multimodal,
		knowledgeRetrival,
	});

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
		searchQuality,
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
		format,
		taskExecution,
	]);

	return {
		usage,
		setUsage,
		aiLevel,
		setAiLevel,
		searchQuality,
		setSearchQuality,
		taskExecution,
		setTaskExecution,
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
		//format
		format,
		setFormat,
		formatLength,

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

//functions
const cleanValues = (obj) => {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}

	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (typeof value === "object") {
			const nestedObj = cleanValues(value);
			if (Object.keys(nestedObj).length !== 0) {
				acc[key] = nestedObj;
			}
		} else if (value !== "") {
			acc[key] = value;
		}
		return acc;
	}, {});
};

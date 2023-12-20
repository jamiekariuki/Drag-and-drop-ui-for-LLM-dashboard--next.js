"use cleint";
import useNodeAi from "@/hooks/nodes hooks/use.node.ai";
import React, { createContext, useContext } from "react";

const NodeAiContext = createContext();

export const useNodeAiContext = () => {
	return useContext(NodeAiContext);
};

export const NodeAiProvider = ({
	children,
	data,
	prompt,
	setPrompt,
	promptLength,
}) => {
	const {
		abilities,
		configure,
		saveBtn,
		setSaveBtn,
		usage,
		setUsage,
		aiLevel,
		setAiLevel,
		setAbilities,
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
		//leads fields
		leadsField,
		setLeadsField,
		leadsFieldLength,
		//save destination
		leadsSaveDestination,
		setleadsSaveDestination,
		//preference
		sandmPreference,
		setSandmPreference,
		sandmPreferenceLength,
		//products
		sandmProducts,
		setSandmProducts,
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
	} = useNodeAi(data, prompt, setPrompt, promptLength);

	return (
		<NodeAiContext.Provider
			value={{
				abilities,
				configure,
				saveBtn,
				setSaveBtn,
				usage,
				setUsage,
				aiLevel,
				setAiLevel,
				setAbilities,
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
				//leads fields
				leadsField,
				setLeadsField,
				leadsFieldLength,
				//save destination
				leadsSaveDestination,
				setleadsSaveDestination,
				//preference
				sandmPreference,
				setSandmPreference,
				sandmPreferenceLength,
				//products
				sandmProducts,
				setSandmProducts,
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
			}}
		>
			{children}
		</NodeAiContext.Provider>
	);
};

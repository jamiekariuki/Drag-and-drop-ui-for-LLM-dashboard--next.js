import { TextArea2 } from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import Switch from "@mui/material/Switch";

const SalesAndMarketingPrompts = () => {
	const {
		sandmPreference,
		setSandmPreference,
		sandmPreferenceLength,
		sandmProducts,
		setSandmProducts,
	} = useNodeAiContext();

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>Sales and Marketing preference/Stratergy</h6>
					<Tooltip
						tip={
							<p>
								This input allows users to specify the sales and
								marketing preferences or strategies for the AI.
								Users can input details about the preferred
								approaches, strategies, or tactics they want the
								AI to employ in sales and marketing endeavors.
								This information guides the AI in tailoring its
								sales pitches, marketing techniques, or customer
								engagement methods according to the specified
								preferences or strategies outlined by the user.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<TextArea2
						node={true}
						error={
							sandmPreference.replace(/\s/g, "").length >=
							sandmPreferenceLength
						}
						label={
							"Enter how you you would like the AI to peach on sales and marketing eg. we have 50% off today, buy 3 get two free..."
						}
						id={"sandmpreference"}
						value={sandmPreference}
						inputHeight={"150px"}
						changeValue={(e) => {
							setSandmPreference(e);
						}}
					/>
					<p
						style={{
							color:
								sandmPreference.replace(/\s/g, "").length >=
									sandmPreferenceLength &&
								"rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{sandmPreference.replace(/\s/g, "").length}/
						{sandmPreferenceLength}
					</p>
				</div>
				{/*-------------------------------------------------------- */}
				<div className="prompt-container">
					<div className="header">
						<h6>Products suggestion</h6>
						<Tooltip
							tip={
								<p>
									Enabling this feature allows the AI to
									suggest products or items from a catalog to
									customers. Users must connect a compatible
									source, such as a plugin, to facilitate the
									AI's access and understanding of the product
									catalog. Once connected, the AI utilizes
									this information to suggest relevant
									products or items to customers based on
									their inquiries or preferences, enhancing
									the overall customer experience.
								</p>
							}
						/>
					</div>
					<div className="switch-input">
						<Switch
							checked={sandmProducts}
							onChange={(e) => setSandmProducts(e.target.checked)}
							inputProps={{ "aria-label": "controlled" }}
							size="small"
						/>
						<p>Enable AI to suggest your products </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SalesAndMarketingPrompts;

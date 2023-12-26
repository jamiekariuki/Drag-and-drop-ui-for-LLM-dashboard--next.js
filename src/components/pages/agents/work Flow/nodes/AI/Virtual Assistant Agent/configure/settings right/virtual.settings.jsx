import "./virtual.settings.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import SelectOption from "@/components/styled components/inputs/select.option";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import { useNodeAiContext } from "@/context/nodeAiContext";
import {
	aiAbilities,
	aiIntelligenceLevel,
	aiTaskExecution,
	aiUsage,
} from "../../../ai.configure.tooltip";

const VirtualSettings = () => {
	const {
		usage,
		setUsage,
		aiLevel,
		setAiLevel,
		abilities,
		setAbilities,
		taskExecution,
		setTaskExecution,
	} = useNodeAiContext();

	//ai intelligence
	const aiList = ["Low ", "Medium", "High"];

	//usage
	const handleChange = (event) => {
		setUsage(event.target.value);
	};

	//abilities
	const handleAbilities = (e, type) => {
		setAbilities((prevAbilities) => ({
			...prevAbilities,
			[type]: e,
		}));
	};

	return (
		<div className="virtual-settings">
			<div className="settings-heading">
				<SettingsIcon className="agent-icon" />
				<h3>Settings</h3>
			</div>

			<div className="ai-settings">
				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "3px",
						}}
					>
						<h6>Intelligence level</h6>
						<Tooltip tip={aiIntelligenceLevel} />
					</div>

					<SelectOption
						label={"AI Intelligence"}
						list={aiList}
						value={aiLevel}
						changeValue={(e) => {
							setAiLevel(e);
						}}
					/>
				</div>

				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "3px",
						}}
					>
						<h6>Task Execution</h6>
						<Tooltip tip={aiTaskExecution} />
					</div>

					<SelectOption
						label={"Task Execution"}
						list={aiList}
						value={taskExecution}
						changeValue={(e) => {
							setTaskExecution(e);
						}}
					/>
				</div>

				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}
					>
						<h6>Usage</h6>
						<Tooltip tip={aiUsage} />
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<p>Public</p>
						<Radio
							checked={usage === "public"}
							onChange={handleChange}
							value="public"
							name="radio-buttons"
							inputProps={{
								"aria-label": "public",
							}}
							size="small"
						/>
						<p>Personal</p>
						<Radio
							checked={usage === "personal"}
							onChange={handleChange}
							value="personal"
							name="radio-buttons"
							inputProps={{
								"aria-label": "personal",
							}}
							size="small"
						/>
					</div>
				</div>

				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}
					>
						<h6>Abilities</h6>
						<Tooltip tip={aiAbilities} />
					</div>

					<div>
						<div style={abilitiesStyle}>
							<Checkbox
								checked={abilities.multiModal}
								size="small"
								onChange={(e) => {
									handleAbilities(
										e.target.checked,
										"multiModal"
									);
								}}
								inputProps={{ "aria-label": "controlled" }}
							/>
							<p>Multimodal</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const abilitiesStyle = {
	display: "flex",
	alignItems: "center",
};

export default VirtualSettings;

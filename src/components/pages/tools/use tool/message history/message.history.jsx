import React from "react";
import "./message.history.scss";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FirstPage } from "@mui/icons-material";

const MessageHistory = ({ onClose }) => {
	const historyData = [
		{
			title: "Weekly analysis",
		},
		{
			title: "Ecommerce updates",
		},
		{
			title: "Marketing report",
		},
		{
			title: "Project meeting notes",
		},
		{
			title: "Sales forecast",
		},
		{
			title: "Financial summary",
		},
		{
			title: "Product launch plans",
		},
		{
			title: "Customer feedback",
		},
		{
			title: "Development progress",
		},
		{
			title: "Team workshop agenda",
		},
		{
			title: "Quarterly review",
		},

		//---
		{
			title: "Weekly analysis",
		},
		{
			title: "Ecommerce updates",
		},
		{
			title: "Marketing report",
		},
		{
			title: "Project meeting notes",
		},
		{
			title: "Sales forecast",
		},
		{
			title: "Financial summary",
		},
		{
			title: "Product launch plans",
		},
		{
			title: "Customer feedback",
		},
		{
			title: "Development progress",
		},
		{
			title: "Team workshop agenda",
		},
		{
			title: "Quarterly review",
		},
		{
			title: "Weekly analysis",
		},
		{
			title: "Ecommerce updates",
		},
		{
			title: "Marketing report",
		},
		{
			title: "Project meeting notes",
		},
		{
			title: "Sales forecast",
		},
		{
			title: "Financial summary",
		},
		{
			title: "Product launch plans",
		},
		{
			title: "Customer feedback",
		},
		{
			title: "Development progress",
		},
		{
			title: "Team workshop agenda",
		},
		{
			title: "Quarterly review",
		},
		{
			title: "Weekly analysis",
		},
		{
			title: "Ecommerce updates",
		},
		{
			title: "Marketing report",
		},
		{
			title: "Project meeting notes",
		},
		{
			title: "Sales forecast",
		},
		{
			title: "Financial summary",
		},
		{
			title: "Product launch plans",
		},
		{
			title: "Customer feedback",
		},
		{
			title: "Development progress",
		},
		{
			title: "Team workshop agenda",
		},
		{
			title: "Quarterly review",
		},
	];
	return (
		<div className="ut-history">
			<div className="ut-history-buttons">
				<Button
					variant="outlined"
					startIcon={<AddIcon className="add-btn-icon" />}
					size="small"
					className="ut-add-btn "
					disableElevation
					onClick={onClose}
				>
					<p>new chat</p>
				</Button>

				<IconButton
					aria-label="go back to chat"
					size="small"
					className="ut-back-icon-wrapper"
					onClick={onClose}
				>
					<FirstPage className="ut-back-icon" />
				</IconButton>
			</div>
			<div className="ut-history">
				<div className="ut-history-container">
					{historyData.map((item, index) => (
						<div
							className="history-container"
							key={index}
							onClick={onClose}
						>
							<h4>{item.title}</h4>

							<div className="history-actions">
								<IconButton aria-label="go back" size="small">
									<EditIcon className="action-icon" />
								</IconButton>

								<IconButton aria-label="go back" size="small">
									<DeleteIcon className="action-icon" />
								</IconButton>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MessageHistory;

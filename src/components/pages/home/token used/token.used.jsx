import React from "react";
import "./token.used.scss";

const TokenUsed = () => {
	const openAiModel = [
		{
			name: "GPT-4",
			color: "rgba(255, 0, 0, 0.663)",
			tokens: 19000,
		},
		{
			name: "GPT-3.5 Turbo",
			color: "rgba(255, 166, 0, 0.648)",
			tokens: 11000,
		},
		{
			name: "davinci-002",
			color: "rgba(22, 127, 22, 0.697)",
			tokens: 6000,
		},
		{
			name: "babbage-002",
			color: "rgba(0, 0, 255, 0.607)",
			tokens: 900,
		},
		{
			name: "Ada v2",
			color: "rgba(129, 19, 129, 0.787)",
			tokens: 15000,
		},

		{
			name: "available",
			color: "rgba(128, 128, 128, 0.524)",
			tokens: 23899,
		},
	];
	const totalTokens = openAiModel.reduce(
		(total, model) => total + model.tokens,
		0
	);
	const availableTokens = 23899;
	const usedTokens = totalTokens - availableTokens;

	return (
		<div className="token-used">
			<div className="token-left-container">
				<div className="token-info">
					<div className="token-title">
						<p>Tokens</p>
					</div>
					<div className="token-info-container">
						<div className="token-platform">
							<h4>LLM Platform:</h4>
							<p>OpenAI's ChatGPT</p>
						</div>

						<button>Purchase more tokens</button>
					</div>
				</div>

				<div className="token-usage">
					<div className="tokens-counter">
						<p>Available tokens:</p>
						<h6>
							{availableTokens >= 1000000
								? `${
										Math.round(availableTokens / 100000) /
										10
								  }M`
								: availableTokens >= 1000
								? `${Math.round(availableTokens / 100) / 10}K`
								: availableTokens}
						</h6>
					</div>
					<div className="tokens-counter">
						<p>Used tokens:</p>
						<h6>
							{usedTokens >= 1000000
								? `${Math.round(usedTokens / 100000) / 10}M`
								: usedTokens >= 1000
								? `${Math.round(usedTokens / 100) / 10}K`
								: usedTokens}
						</h6>
					</div>
				</div>
			</div>

			<div className="token-chart">
				<p>Token consuption</p>
				<div className="token-line-chart">
					{openAiModel.map((model, index) => (
						<div
							className="line-container"
							key={index}
							style={{
								width: `${(
									(model.tokens / totalTokens) *
									100
								).toFixed(1)}%`,
								background: model.color,
							}}
						/>
					))}
				</div>
				<div className="token-keys">
					<p>Models:</p>
					<div className="key-container">
						{openAiModel.map((model, index) => (
							<div className="key-wrapper" key={index}>
								<div
									className="token-key-color"
									style={{ background: model.color }}
								/>
								<h6>{model.name}</h6>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TokenUsed;

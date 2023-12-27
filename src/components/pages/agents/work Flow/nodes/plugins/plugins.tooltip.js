//plugins
export const PluginsId = (
	<div>
		<p>
			Type your unique platform ID of your application from your developer
			platform. Input the specific ID to enable seamless integration
		</p>
	</div>
);

export const PluginsInboxReply = (
	<div>
		<p>
			This node responds to messages within your platform only if an
			existing conversation thread is active. It replies to messages
			within ongoing conversations.
		</p>
	</div>
);

export const PluginsCommentReply = (
	<div>
		<p>
			This node responds to comments within your platform only if an
			existing conversation thread within the comments is active. It
			replies to comments within ongoing conversations.
		</p>
	</div>
);

export const PluginsSendMessage = (
	<div>
		<p>
			This node facilitates message sending within the platform. Users
			have options for execution: sending to one person, a list of people,
			or allowing AI automation. Choosing the AI option empowers the
			virtual assistant to execute the specified action without manual
			input. Simply instruct the assistant and provide the contact(s) for
			seamless message transmission.
		</p>
	</div>
);

export const PluginsPost = (
	<div>
		<p>
			This node facilitates posting content within the platform. Users
			have options for execution: posting to one person, a list of people,
			or enabling AI automation. Opting for AI automation allows the
			assistant to execute specified actions without manual input. Users
			simply instruct the virtual assistant and provide the post data
			source. Additionally, subscribers to premium services can instruct
			the AI to generate images for the post.
		</p>
	</div>
);

export const PluginsRead = (
	<div>
		<p>
			This node will run everytime it recives an instagram message and
			sender ID, Only runs when Instagram is configure in plugins
		</p>
		<h6>This node connects with:</h6>
		<ol>
			<li>Human (plugin)</li>
			<li>ChatBot (AI)</li>
		</ol>
	</div>
);

//none social
export const PluginsAction = (
	<div>
		<p>
			This node governs the actions permitted within the plugin. .
			Customize the allowed actions to grant specific permissions for AI
			operations within the plugin.
		</p>
	</div>
);

export const PluginsDescription = (
	<div>
		<p>
			This node enables users to describe the content contained within the
			plugin, such as Google Docs or Google Spreadsheet. Users can input
			details to describe the contents or nature of the plugin for better
			organization and identification within the platform.
		</p>
	</div>
);

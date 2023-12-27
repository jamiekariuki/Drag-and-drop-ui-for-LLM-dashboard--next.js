//events

export const EventsId = (
	<div>
		<p>
			Type your unique platform ID of your application from your developer
			platform. Input the specific ID to enable seamless integration
		</p>
	</div>
);

export const EventsOnFirstMessage = (
	<div>
		<p>
			This node triggers upon receiving messages from previously
			uninteracted accounts on the platform. It activates when
			encountering a message from an unfamiliar sender, signaling the
			first interaction with that account.
		</p>
	</div>
);

export const EventsOnMessageReply = (
	<div>
		<p>
			This node activates upon receiving messages from accounts previously
			interacted with on the platform. It identifies incoming messages
			from familiar senders, signifying ongoing interactions with those
			accounts.
		</p>
	</div>
);

export const EventsOnFirstComment = (
	<div>
		<p>
			This node triggers upon receiving a comment from previously
			uninteracted accounts on the platform. It activates when
			encountering a comment from an unfamiliar sender, signaling the
			first interaction with that account.
		</p>
	</div>
);

export const EventsOnCommentReply = (
	<div>
		<p>
			This node activates upon receiving comment from accounts previously
			interacted with on the platform. It identifies incoming comments
			from familiar senders, signifying ongoing interactions with those
			accounts.
		</p>
	</div>
);

//schedule
export const EventsSheduleOnTime = (
	<div>
		<p>
			This node runs at the specified time set. Activate run daily for
			recurring daily runs at the set time
		</p>
		{/* <h6>This node connects with:</h6>
		<ol>
			<li>Human (plugin)</li>
			<li>ChatBot (AI)</li>
		</ol> */}
	</div>
);

export const EventsSheduleOnDay = (
	<div>
		<p>
			This node runs at the specified time and day set. Activate run
			weekly for recurring weekly runs at the set time
		</p>
	</div>
);

export const EventsSheduleOnDate = (
	<div>
		<p>
			This node runs at the specified date set. Activate run monthly for
			recurring monthly run at the set date, please note that the node
			will run every month on the exact date and time of the next month
		</p>
	</div>
);

export const EventsSheduleAdvance = (
	<div>
		<p>
			This node enables multiple schedules, date range schedules, and
			Google Calendar integration for scheduling. <br />
			Note: Extensive usage may incur additional credit charges. Exercise
			caution when setting up intricate schedules.
		</p>
	</div>
);

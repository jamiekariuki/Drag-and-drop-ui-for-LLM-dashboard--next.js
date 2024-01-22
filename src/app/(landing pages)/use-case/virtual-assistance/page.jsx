import DoubleSPlit from "@/components/landing pages/double split/double.split";

const VirtualAssistancePage = () => {
	return (
		<div>
			<div className="uc-heading">
				<h1>Laboriosam in accusantium?</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus quidem hic accusamus dolorem natus numquam
					maiores quis non corrupti, cupiditate, quam autem ut,
					corporis libero optio sapiente itaque porro molestias!
				</p>
			</div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/rwpQzkZ3/medium-shot-people-working-office.jpg"
				}
				content={
					<>
						<h1>Lorem, ipsum dolor consectetur</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus quidem hic accusamus dolorem
							natus numquam maiores quis non corrupti, cupiditate,
							quam autem ut, corporis libero optio sapiente itaque
							porro molestias!
						</p>
					</>
				}
				flexReverse={true}
			/>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/rwpQzkZ3/medium-shot-people-working-office.jpg"
				}
				content={
					<>
						<h1>Lorem, ipsum dolor consectetur</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus quidem hic accusamus dolorem
							natus numquam maiores quis non corrupti, cupiditate,
							quam autem ut, corporis libero optio sapiente itaque
							porro molestias!
						</p>
					</>
				}
			/>
			<DoubleSPlit
				image={
					"https://i.postimg.cc/rwpQzkZ3/medium-shot-people-working-office.jpg"
				}
				content={
					<>
						<h1>Lorem, ipsum dolor consectetur</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus quidem hic accusamus dolorem
							natus numquam maiores quis non corrupti, cupiditate,
							quam autem ut, corporis libero optio sapiente itaque
							porro molestias!
						</p>
					</>
				}
				flexReverse={true}
			/>
			<DoubleSPlit
				image={
					"https://i.postimg.cc/rwpQzkZ3/medium-shot-people-working-office.jpg"
				}
				content={
					<>
						<h1>Lorem, ipsum dolor consectetur</h1>

						<div>
							<button>
								<p>click me</p>
							</button>
						</div>
					</>
				}
			/>
		</div>
	);
};

export default VirtualAssistancePage;

import React from 'react';

export default function PhoneLayout({ children }) {
	return (
		// Screen
		<div className='px-10 min-h-screen flex justify-center items-center'>
			{/* Phone */}
			<div className='relative h-[712px] w-[350px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
				<img
					className='absolute h-full inset-0 w-full object-cover'
					src='/bg-phone.jpg'
					alt=''
				/>
				<div className='absolute top-0 inset-x-0 '>
					<div className='h-6 w-8 mx-auto bg-black rounded-b-2xl flex justify-center items-center'>
						<div className='h-3 w-3 -mt-2 bg-gray-700 border-r rotate-45  rounded-full'></div>
					</div>
				</div>
				<div className='relative'>
					<div className='mt-2 mr-7 h-3 flex text-white justify-end space-x-2'>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='far'
							data-icon='signal'
							class='svg-inline--fa fa-signal'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 576 512'
							className='w-4 h-4'
						>
							<path
								fill='currentColor'
								d='M160 288C146.8 288 136 298.8 136 312v176C136 501.3 146.8 512 160 512s24-10.75 24-24v-176C184 298.8 173.3 288 160 288zM32 384C18.75 384 8 394.8 8 408v80c0 13.25 10.75 24 23.1 24S56 501.3 56 488v-80C56 394.8 45.25 384 32 384zM288 192C274.8 192 264 202.8 264 216v272C264 501.3 274.8 512 288 512s24-10.75 24-24v-272C312 202.8 301.3 192 288 192zM416 96c-13.25 0-24 10.75-24 24v368c0 13.25 10.75 24 24 24s24-10.75 24-24V120C440 106.8 429.3 96 416 96zM544 0c-13.25 0-24 10.75-24 24v464c0 13.25 10.75 24 24 24s24-10.75 24-24V24C568 10.75 557.3 0 544 0z'
							></path>
						</svg>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='wifi'
							class='svg-inline--fa fa-wifi'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 640 512'
							className='w-4 h-4'
						>
							<path
								fill='currentColor'
								d='M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z'
							></path>
						</svg>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='battery-half'
							class='svg-inline--fa fa-battery-half'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 576 512'
							className='w-4 h-4'
						>
							<path
								fill='currentColor'
								d='M288 192H96v128h192V192zM544 192V160c0-35.35-28.65-64-64-64H64C28.65 96 0 124.7 0 160v192c0 35.35 28.65 64 64 64h416c35.35 0 64-28.65 64-64v-32c17.67 0 32-14.33 32-32V224C576 206.3 561.7 192 544 192zM480 352H64V160h416V352z'
							></path>
						</svg>
					</div>
					<div className='h-0.5 w-16 mt-2 mr-7 ml-auto bg-white rounded'></div>
					<div className='flex mt-2 flex-col items-center text-white'>
						<svg
							className='w-8 h-8'
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='unlock'
							class='svg-inline--fa fa-unlock'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path
								fill='currentColor'
								d='M448 288v160C448 483.3 419.3 512 384 512H64c-35.35 0-64-28.66-64-63.1v-160c0-35.35 28.65-64 64-64L80 224V144C80 64.59 144.6 0 224 0s144 64.59 144 144V160h-64V144C304 99.88 268.1 64 224 64S144 99.88 144 144V224L384 224C419.3 224 448 252.7 448 288z'
							></path>
						</svg>
						<p className='mt-3 text-6xl text-white font-extralight'>8:43</p>
						<p className='mt-1 text-lg text-white font-light'>Monday, June 7</p>
					</div>
				</div>
				<div className='relative mt-4 mx-2 bg-white/50 backdrop-filter backdrop-blur-md rounded-3xl p-4'>
					<div className='flex justify-between'>
						<div>
							<p className='text-xs font-bold'>8:30 AM</p>
							<h2 className='text-lg font-bold'>Your Daily Morning Feed</h2>
						</div>
						<span className='bg-gray-500 h-8 w-8 rounded-full text-white flex justify-center items-center'>
							11
						</span>
					</div>
					<div className='mt-2 grid grid-cols-2 gap-2'>
						<div>
							<img
								className='rounded-lg '
								src='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_960_720.jpg'
								alt=''
							/>
							<h3 className='mt-2 text-xs font-bold leading-tight'>
								Lorem ipsum dolor sit.
							</h3>
							<p className='mt-1 text-xs'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
								praesentium necessitatibus soluta tempore.
							</p>
						</div>
						<div>
							<img
								className='rounded-lg '
								src='https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg'
								alt=''
							/>
							<h3 className='mt-2 text-xs font-bold leading-tight'>
								Lorem ipsum dolor sit.
							</h3>
							<p className='mt-1 text-xs'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
								praesentium necessitatibus soluta tempore.
							</p>
						</div>
					</div>
					<hr className='mt-4  border-black/20 ' />
					<div className='mt-3 grid grid-cols-3 gap-1 items-end'>
						<div className='col-span-2'>
							<h3 className='text-sm font-bold'>More Updates</h3>
							<p className='text-xs mt-0.5'>
								Medium, Polywork, CSS3, New Next.js v12
							</p>
						</div>
						<ul className='flex flex-row-reverse -space-x-4 space-x-reverse'>
							<li>
								<img
									className='w-8 h-8 rounded-xl bg-white'
									src='/facebook.png'
									alt=''
								/>
							</li>
							<li>
								<img className='w-8 h-8 rounded-xl ' src='/reddit.png' alt='' />
							</li>
							<li>
								<img className='w-8 h-8 rounded-xl ' src='/vercel.png' alt='' />
							</li>
						</ul>
					</div>
				</div>
				<div className='relative flex justify-between px-4 mt-3'>
					<div className='rounded-full flex justify-center items-center -rotate-90 h-14 w-14 bg-gray-400/70 text-white'>
						<svg
							className='w-7 h-7'
							aria-hidden='true'
							focusable='false'
							data-prefix='far'
							data-icon='flashlight'
							class='svg-inline--fa fa-flashlight'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 640 512'
						>
							<path
								fill='currentColor'
								d='M607.1 96h-32c-62.63 0-123.7 18.5-175.9 53.25L383.1 160H48C21.5 160 0 181.5 0 208v96C0 330.5 21.5 352 48 352h335.1l16.12 10.75C452.2 397.5 513.4 416 575.1 416h32c17.62 0 32-14.38 32-32V128C639.1 110.4 625.6 96 607.1 96zM544 365.6c-41.88-4.75-82.13-19.5-117.2-42.87L398.5 304H48v-96h350.5l28.25-18.75C461.9 165.9 502.1 151.2 544 146.4V365.6zM284 232h-24c-13.25 0-24 10.75-24 24c0 13.25 10.75 24 24 24h24c13.25 0 24-10.75 24-24C308 242.8 297.2 232 284 232z'
							></path>
						</svg>
					</div>
					<div className='rounded-full flex justify-center items-center h-14 w-14 bg-gray-400/70 text-white'>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='camera'
							class='svg-inline--fa fa-camera'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path
								fill='currentColor'
								d='M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z'
							></path>
						</svg>
					</div>
				</div>
				<div className='relative h-1 w-36 mt-7 mx-auto bg-white rounded'></div>
			</div>
		</div>
	);
}

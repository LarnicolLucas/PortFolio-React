export default function fond(props){

    return <>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="xMinYMin meet">
        <defs>
			<linearGradient id="gradientFill" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
						
							<stop offset="0" stopColor="#940000" />
						
							<stop offset="0.1111111111111111" stopColor="#a61f1f" />
						
							<stop offset="0.2222222222222222" stopColor="#b63539" />
						
							<stop offset="0.3333333333333333" stopColor="#c54952" />
						
							<stop offset="0.4444444444444444" stopColor="#d15e6c" />
						
							<stop offset="0.5555555555555556" stopColor="#dd7284" />
						
							<stop offset="0.6666666666666666" stopColor="#e6879c" />
						
							<stop offset="0.7777777777777777" stopColor="#ef9cb4" />
						
							<stop offset="0.8888888888888888" stopColor="#f7b1c9" />
						
							<stop offset="1" stopColor="#ffc6de" />
						
			</linearGradient>
		</defs>
        <path 
            fill="url(#gradientFill)"  
            d="M0,192L40,176C80,160,160,128,240,117.3C320,107,400,117,480,128C560,139,640,149,720,144C800,139,880,117,960,96C1040,75,1120,53,1200,64C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
        </svg>
    </>
}
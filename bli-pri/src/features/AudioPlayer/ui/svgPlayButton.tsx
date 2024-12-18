import { TypeSvgComponent } from "../../../shared/Types/types";

export const SvgPlayButton: TypeSvgComponent = ({ isMobile }) => {
	return (
		<>
			{isMobile ? (
				<svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z" fill="white"/>
				</svg>
			) : (
				<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 12 15">
					<path fill="#fff" d="M11.5 6.634a1 1 0 0 1 0 1.732l-9.75 5.63a1 1 0 0 1-1.5-.867V1.871a1 1 0 0 1 1.5-.866l9.75 5.629Z" />
				</svg>
			)}
		</>
	)
}
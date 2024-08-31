import React, { useEffect, useRef, useState } from "react";

const Zoom = ({
	// Initial Settings here ***
	src,
	initialZoomScale = 2,
	zoomStep = 0.1,
	maxZoom = 5,
	minZoom = 1.2,
}) => {
	const [zoom, setZoom] = useState(false);
	const [zoomScale, setZoomScale] = useState(initialZoomScale);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const imgRef = useRef(null);

	useEffect(() => {
		const handleWheel = (e) => {
			if (zoom) {
				e.preventDefault();
				const newZoomScale =
					zoomScale + (e.deltaY < 0 ? zoomStep : -zoomStep);
				setZoomScale(Math.max(minZoom, Math.min(maxZoom, newZoomScale)));
			}
		};

		const img = imgRef.current;
		img.addEventListener("wheel", handleWheel);

		return () => {
			img.removeEventListener("wheel", handleWheel);
		};
	}, [zoom, zoomScale, zoomStep, maxZoom, minZoom]);

	const handleMouseEnter = () => {
		setZoom(true);
	};

	const handleMouseLeave = () => {
		setZoom(false);
	};

	const handleMouseMove = (e) => {
		const img = imgRef.current;
		const rect = img.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setPosition({ x, y });
	};

	const zoomContainerStyle = {
		position: "relative",
		display: "inline-block",
	};

	const zoomImageStyle = {
		width: "100%",
	};

	const zoomLensStyle = {
		// Lens Styles here ***
		position: "absolute",
		border: "2px solid #d4d4d4",
		width: "150px",
		height: "150px",
		borderRadius: "50%",
		backgroundRepeat: "no-repeat",
		pointerEvents: "none",
	};

	return (
		<div style={zoomContainerStyle}>
			<img
				src={src}
				style={zoomImageStyle}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
				ref={imgRef}
			/>
			{zoom && (
				<div
					style={{
						...zoomLensStyle,
						top: position.y - 50,
						left: position.x - 50,
						backgroundImage: `url(${src})`,
						backgroundSize: `${imgRef.current.width * zoomScale}px ${
							imgRef.current.height * zoomScale
						}px`,
						backgroundPosition: `-${position.x * zoomScale - 50}px -${
							position.y * zoomScale - 50
						}px`,
					}}
				/>
			)}
		</div>
	);
};

export default Zoom;

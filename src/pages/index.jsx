import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "../components/Zoom";

const Home = () => {
	return (
		<>
			<section className="banner-area">
				<div className="container">
					<Swiper
						className="banner__slider"
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						loop={true}
						modules={[Autoplay]}
					>
						<SwiperSlide>
							<div className="banner__image">
								<img
									src="/public/assets/images/banner/1.jpg"
									alt="image"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="banner__image">
								<img
									src="/public/assets/images/banner/2.jpg"
									alt="image"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="banner__image">
								<img
									src="/public/assets/images/banner/3.jpg"
									alt="image"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>

			<div className="content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Id blanditiis inventore, earum necessitatibus
								provident quisquam! Repellat corrupti ad accusamus
								magnam officia, porro illum amet non temporibus, ipsa
								vitae quia nemo.
							</p>
						</div>
						<div className="col-lg-4">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Id blanditiis inventore, earum necessitatibus
								provident quisquam! Repellat corrupti ad accusamus
								magnam officia, porro illum amet non temporibus, ipsa
								vitae quia nemo.
							</p>
						</div>
						<div className="col-lg-4">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Id blanditiis inventore, earum necessitatibus
								provident quisquam! Repellat corrupti ad accusamus
								magnam officia, porro illum amet non temporibus, ipsa
								vitae quia nemo.
							</p>
						</div>
						<div className="col-lg-4">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Id blanditiis inventore, earum necessitatibus
								provident quisquam! Repellat corrupti ad accusamus
								magnam officia, porro illum amet non temporibus, ipsa
								vitae quia nemo.
							</p>
						</div>
						<div className="col-lg-4">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Id blanditiis inventore, earum necessitatibus
								provident quisquam! Repellat corrupti ad accusamus
								magnam officia, porro illum amet non temporibus, ipsa
								vitae quia nemo.
							</p>
						</div>
						<div className="col-lg-4">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Id blanditiis inventore, earum necessitatibus
								provident quisquam! Repellat corrupti ad accusamus
								magnam officia, porro illum amet non temporibus, ipsa
								vitae quia nemo.
							</p>
						</div>
						<div className="accordion mt-5" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										Accordion Item #1
									</button>
								</h2>
								<div
									id="collapseOne"
									className="accordion-collapse collapse show"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										<strong>
											This is the first item's accordion body.
										</strong>{" "}
										It is shown by default, until the collapse plugin
										adds the appropriate classes that we use to style
										each element. These classes control the overall
										appearance, as well as the showing and hiding via
										CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables.
										It's also worth noting that just about any HTML
										can go within the <code>.accordion-body</code>,
										though the transition does limit overflow.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										Accordion Item #2
									</button>
								</h2>
								<div
									id="collapseTwo"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										<strong>
											This is the second item's accordion body.
										</strong>{" "}
										It is hidden by default, until the collapse plugin
										adds the appropriate classes that we use to style
										each element. These classes control the overall
										appearance, as well as the showing and hiding via
										CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables.
										It's also worth noting that just about any HTML
										can go within the <code>.accordion-body</code>,
										though the transition does limit overflow.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										Accordion Item #3
									</button>
								</h2>
								<div
									id="collapseThree"
									className="accordion-collapse collapse"
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										<strong>
											This is the third item's accordion body.
										</strong>{" "}
										It is hidden by default, until the collapse plugin
										adds the appropriate classes that we use to style
										each element. These classes control the overall
										appearance, as well as the showing and hiding via
										CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables.
										It's also worth noting that just about any HTML
										can go within the <code>.accordion-body</code>,
										though the transition does limit overflow.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="zoom-area pb-120">
				<div className="container">
					<div className="col-lg-8">
						<div>
							<Zoom src="/public/assets/images/banner/1.jpg" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;

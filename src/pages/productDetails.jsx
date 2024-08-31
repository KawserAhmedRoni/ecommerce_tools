import React from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "../components/Zoom";

const ProductDetails = () => {
	const [value, setvalue] = React.useState(1);

	return (
		<>
			<section className="product-details-area pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<Swiper
								loop={true}
								modules={[Thumbs]}
								className="product-details__slider"
							>
								<SwiperSlide>
									<div className="product-details__image">
										<Zoom
											src={"/public/assets/images/banner/1.jpg"}
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<Zoom
											src={"/public/assets/images/banner/2.jpg"}
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<Zoom
											src={"/public/assets/images/banner/3.jpg"}
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<Zoom
											src={"/public/assets/images/banner/4.jpg"}
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<Zoom
											src={"/public/assets/images/banner/5.jpg"}
										/>
									</div>
								</SwiperSlide>
							</Swiper>
							<Swiper
								className="product-details__slider-thumb"
								loop={true}
								spaceBetween={10}
								slidesPerView={3}
								modules={[Thumbs]}
							>
								<SwiperSlide>
									<div className="product-details__image">
										<img
											className="zoomImage"
											src="/assets/images/bg/1.jpg"
											alt="image"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<img
											className="zoomImage"
											src="/assets/images/bg/2.jpg"
											alt="image"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<img
											className="zoomImage"
											src="/assets/images/bg/3.jpg"
											alt="image"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<img
											className="zoomImage"
											src="/assets/images/bg/4.jpg"
											alt="image"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="product-details__image">
										<img
											className="zoomImage"
											src="/assets/images/bg/5.jpg"
											alt="image"
										/>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="col-lg-6">
							<div className="product-details__content">
								<h2>POP Extra Strawberry</h2>
								<span>Barcode : A02047</span>
								<h3 className="pdct-price">৳ 470.00</h3>
								<div className="description">
									<h4>Product Description</h4>
									<p className="mb-2">
										Rapidiusly transform corporate expertise whereas
										enterprise-wide web services. Progressively
										whiteboard multifunctional networks for pandemic
										total linkage a Synergistically recaptiualize
										client and based gdsh k agsoid gdsash methods.
									</p>
								</div>
								<ul>
									<li>
										<strong>Categories :</strong>
										<a href="#0">Woman</a>
										<span>|</span>
										<a href="#0">Man</a>
										<span>|</span>
										<a href="#0">Kids</a>
										<span>|</span>
										<a href="#0">Accesories</a>
									</li>
									<li>
										<strong>Tags :</strong>
										<a href="#0">Fashion</a>
										<span>|</span>
										<a href="#0">Lifestyle</a>
										<span>|</span>
										<a href="#0">Travel</a>
										<span>|</span>
										<a href="#0">Video</a>
										<span>|</span>
										<a href="#0">Audio</a>
									</li>
									<li className="product-details__share">
										<strong>Share :</strong>
										<a href="#0">
											<i className="ri-facebook-line"></i>
										</a>
										<a href="#0">
											<i className="ri-twitter-line"></i>
										</a>
										<a href="#0">
											<i className="ri-linkedin-line"></i>
										</a>
										<a href="#0">
											<i className="ri-youtube-line"></i>
										</a>
									</li>
								</ul>
								<div className="product-details__process">
									<div className="product-icrse">
										<button onClick={() => setvalue(value - 1 || 1)}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<input type="text" value={value} readOnly />
										<button onClick={() => setvalue(value + 1)}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
									<button className="cart-btn">
										<i className="ri-shopping-basket-line"></i>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="product-details__tab">
						<ul className="nav nav-pills mb-4" role="tablist">
							<li className="nav-item" role="presentation">
								<a
									href="#description"
									data-bs-toggle="tab"
									className="nav-link active"
								>
									description
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									href="#review"
									data-bs-toggle="tab"
									className="nav-link"
								>
									reviews (4)
								</a>
							</li>
						</ul>
						<div className="tab-content">
							<div
								id="description"
								className="tab-pane fade show active"
								role="tabpanel"
							>
								<p>
									Proactively disseminate impactful mindshare without
									technically sound web services. Distiively harness
									compelling innovation before high payoff testing
									procedures. Uniquely fashion customized web services
									with cross functional internal or "organic" sources.
									Uniquely restore error-free e-commerce via
									multidisciplinary antailers. Completely whiteboard
									user friendly quality vectors rather than synergistic
									technologi Professionally evisculate enterprise wide
									metrics without resource maximizing interfaces.
									Synergistically benchmark enterprise-wide e-tailers
									through optimal paradigms. Phosfluorescently foster
									cutting-edge was and benefits without magnetic
								</p>
								<p>
									Completely build emerging ideas through covalent
									applications. Distinctively synthesize user friendly
									collaboration and idsharing with superior content.
									Energistically incentivize user friendly models
									rather than timely convergence. Objectively
									disintermediate high standards in paradigms before
									state the art process improvements. Interactively
									orchestrate plug-and-play human capital whereas
									customer directed initiatives.
								</p>
								<p>
									Intrinsicly provide access to team driven information
									without adaptive content. Collaboratively embrace
									reliable supply chains via extensible benefits.
									Enthusiastically visualize accurate human capital
									before backend meta-services. Continually reinvent
									interdependent schemas through mission-critical
									benefits. Competently leverage existing parallel
									action items through end-to-end "outside the box"
									thinking.
								</p>
							</div>
							<div id="review" className="tab-pane fade" role="tabpanel">
								<p>
									Proactively disseminate impactful mindshare without
									technically sound web services. Distiively harness
									compelling innovation before high payoff testing
									procedures. Uniquely fashion customized web services
									with cross functional internal or "organic" sources.
									Uniquely restore error-free e-commerce via
									multidisciplinary antailers. Completely whiteboard
									user friendly quality vectors rather than synergistic
									technologi Professionally evisculate enterprise wide
									metrics without resource maximizing interfaces.
									Synergistically benchmark enterprise-wide e-tailers
									through optimal paradigms. Phosfluorescently foster
									cutting-edge was and benefits without magnetic
								</p>
								<p>
									Completely build emerging ideas through covalent
									applications. Distinctively synthesize user friendly
									collaboration and idsharing with superior content.
									Energistically incentivize user friendly models
									rather than timely convergence. Objectively
									disintermediate high standards in paradigms before
									state the art process improvements. Interactively
									orchestrate plug-and-play human capital whereas
									customer directed initiatives.
								</p>
								<p>
									Intrinsicly provide access to team driven information
									without adaptive content. Collaboratively embrace
									reliable supply chains via extensible benefits.
									Enthusiastically visualize accurate human capital
									before backend meta-services. Continually reinvent
									interdependent schemas through mission-critical
									benefits. Competently leverage existing parallel
									action items through end-to-end "outside the box"
									thinking.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;

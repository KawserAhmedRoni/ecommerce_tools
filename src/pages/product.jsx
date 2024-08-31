import React from "react";

const Product = () => {
	return (
		<>
			<section className="shop-area pt-120 d-none pb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="shop__content">
								<div className="shop-search">
									<input type="text" />
									<button>
										<i className="ri-search-line"></i>
									</button>
									<div className="shop__item category">
										<h5>
											Category{" "}
											<i className="ri-arrow-down-s-line"></i>
										</h5>
										<ul>
											<li>
												<a href="#0">
													Shirts <span>44</span>
												</a>
											</li>
											<li>
												<a href="#0">
													T-Shirts <span>46</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Bag <span>55</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Pants <span>60</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Jackets <span>42</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Shose <span>13</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Sunglass <span>28</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Ring <span>36</span>
												</a>
											</li>
											<li>
												<a href="#0">
													Watch <span>08</span>
												</a>
											</li>
										</ul>
									</div>
									{/* <div className="shop__item size">
									<h5>
										Category <i className="ri-arrow-down-s-line"></i>
									</h5>
									<ul>
										<li>
											<input type="checkbox" />{" "}
											<label htmlFor="">sm</label>
										</li>
										<li>
											<input type="checkbox" />{" "}
											<label htmlFor="">md</label>
										</li>
										<li>
											<input type="checkbox" />{" "}
											<label htmlFor="">lg</label>
										</li>
										<li>
											<input type="checkbox" />{" "}
											<label htmlFor="">xl</label>
										</li>
										<li>
											<input type="checkbox" />{" "}
											<label htmlFor="">xxl</label>
										</li>
									</ul>
								</div>
								<div className="shop__item ratting">
									<h5>
										Rating <i className="ri-arrow-down-s-line"></i>
									</h5>
									<ul>
										<li>
											<input type="radio" />{" "}
											<label htmlFor="">sm</label>
										</li>
									</ul>
								</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="row">
								<div className="col-lg-3">
									<div className="product__item">
										<div className="product__image">
											<img
												src="/public/assets/images/product/01.webp"
												alt=""
											/>
										</div>
										<h5>Dobby Smart Shirt</h5>
										<span>৳ 1200 </span>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="product__item">
										<div className="product__image">
											<img
												src="/public/assets/images/product/01.webp"
												alt=""
											/>
										</div>
										<h5>Dobby Smart Shirt</h5>
										<span>৳ 1200 </span>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="product__item">
										<div className="product__image">
											<img
												src="/public/assets/images/product/01.webp"
												alt=""
											/>
										</div>
										<h5>Dobby Smart Shirt</h5>
										<span>৳ 1200 </span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Product;

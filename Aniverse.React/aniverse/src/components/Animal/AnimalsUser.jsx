import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
	createAnimal,
	getAnimalCategory,
	getAnimalUser,
} from '../../redux/actions/animalAction';
import Select from 'react-select';

function AnimalsUser(props) {
	const { animalCreate } = props;
	const { animalCategory } = props;
	const { animalsUser } = props;
	const [animalState, setAnimalState] = useState();
	const username = useParams().username;

	const [visibleModal, setVisibleModal] = useState(false);
	useEffect(() => {
		animalCategory();
		setAnimalState(animalState);
		animalsUser(username);
	}, [animalCategory, animalState, animalsUser, username, visibleModal]);

	const handleSubmit = (e) => {
		e.preventDefault();
		animalCreate(animalState);
		setVisibleModal(!visibleModal);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setAnimalState({ ...animalState, ...{ [name]: value } });
	};
	return (
		<div className="row animal-user-profile">
			<div className="user-profile-title">
				<h3 className="animal-title">Animals</h3>
				{props.userProfile.id === props.user.id ? (
					<button
						onClick={() => {
							setVisibleModal(!visibleModal);
						}}
						className="btn btn-primary"
					>
						Add Animal
					</button>
				) : (
					''
				)}
			</div>
			{props.animals.map((animal) => (
				<div className="animal-col col-4" key={animal.id}>
					<Link to={`/animal/${animal.animalname}`} className="animal-card">
						<div className="animal-img-parent">
							<img
								className="animal-img"
								src={
									animal.profilPicture == null
										? `../../img/animal.jpg`
										: `${animal.profilPicture}`
								}
								alt={`${animal.name} profile`}
							/>
						</div>
						<p className="animal-name">{animal.name}</p>
					</Link>
				</div>
			))}
			{visibleModal ? (
				<div
					className="modal fade show animal-modal"
					id="exampleModal"
					tabIndex="-1"
					style={{ display: 'block' }}
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<form onSubmit={handleSubmit} className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Add a Animal
								</h5>
							</div>
							<div className="modal-body">
								<div className="add-modal-form">
									<div className="form-title">
										<div className="animal-form-controller col-6">
											<input
												onChange={handleChange}
												name="name"
												type="text"
												placeholder="Animal first name"
											/>
										</div>
										<div className="animal-form-controller col-6">
											<input
												onChange={handleChange}
												name="animalname"
												type="text"
												placeholder="Animalname"
											/>
										</div>
									</div>
									<div className="animal-form-controller">
										<label className="label-input" htmlFor="animalCategories">
											Category
										</label>
										<Select
											isSearchable
											onChange={(e) => {
												setAnimalState({
													...animalState,
													...{ animalCategoryId: e.id },
												});
											}}
											options={props.category}
											getOptionLabel={(options) => options['name']}
											getOptionValue={(options) => options['id']}
										/>
									</div>
									<div className="animal-form-controller">
										<label className="label-input" htmlFor="birthday">
											Birthday
										</label>
										<input
											onChange={handleChange}
											name="birthday"
											type="date"
											className="form-control"
										/>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-light"
									data-bs-dismiss="modal"
									onClick={() => {
										setVisibleModal(!visibleModal);
									}}
								>
									Close
								</button>
								<button type="submit" className="btn btn-primary">
									Save changes
								</button>
							</div>
						</form>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userProfile: state.userReducer,
		user: state.userNavbarReducer,
		animals: state.animalReducer,
		category: state.animalCategoryReducer,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		animalsUser: (userState) => {
			dispatch(getAnimalUser(userState));
		},
		animalCategory: () => {
			dispatch(getAnimalCategory());
		},
		animalCreate: (animalState) => {
			dispatch(createAnimal(animalState));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsUser);
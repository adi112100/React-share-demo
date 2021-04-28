import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import {
	// share button
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappShareButton,

	// share button icons
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	WhatsappIcon,
} from 'react-share';

const ProfessorDetailPage = (props) => {
	const { Data, match } = props;
	const [professor, setprofessor] = useState(undefined);

	useEffect(() => {
		const data = Data.filter((data) => data.id === parseInt(match.params.slug));
		setprofessor(data[0]);
	}, []);

	useEffect(() => {
		// console.log(professor);
	}, [professor]);

	return (
		<div className='container'>
			<InfoContainer className='row shadow'>
				<div className='col-12 col-md-6'>
					{professor !== undefined && <Img src={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`} className='shadow' alt='professor-pic' />}
					{professor !== undefined && (
						<FlexRow>
							<FacebookShareButton
								url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
								quote={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name} 
								DESCRIPTION: ${professor.background}
								`}
								hashtag='#professor'
							>
								<FacebookIcon round={true} />
							</FacebookShareButton>
							<TwitterShareButton
								url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic.replaceAll(' ', '%')}`}
								title={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name} 
								DESCRIPTION: ${professor.background.slice(0,150) + '...'}
								`}
								hashtag='#professor'
							>
								<TwitterIcon round={true} />
							</TwitterShareButton>
							<LinkedinShareButton
								url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
								title={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name}`}
								summary={`DESCRIPTION: ${professor.background}`}
								quote={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
							>
								<LinkedinIcon round={true} />
							</LinkedinShareButton>
							<WhatsappShareButton
								url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
								title={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name} 
								DESCRIPTION: ${professor.background}
								https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
							>
								<WhatsappIcon round={true} />
							</WhatsappShareButton>
						</FlexRow>
					)}
				</div>
				<div className='col-12 col-md-6'>
					{professor !== undefined && (
						<>
							<h3>Professor Info</h3>
							<p>
								<strong>Name: </strong>
								{professor.professional.first_name} {professor.professional.last_name}
							</p>
							<p>
								<strong>Background: </strong>
								{professor.background}
							</p>
							<hr />
							<p>
								<strong>Methodology: </strong>
								{professor.methodology}
							</p>
							<hr />
							<p>
								<strong>Address:</strong>
								{professor.address} <strong>City:</strong> {professor.city}
							</p>
							<p>
								<strong>Phone: </strong>
								{professor.professional.phone}
							</p>
							<p>
								<strong>Email: </strong>
								{professor.professional.email}
							</p>
							<p>
								<strong>Landline: </strong>
								{professor.professional.landline}
							</p>
						</>
					)}
				</div>
			</InfoContainer>
		</div>
	);
};

export default withRouter(ProfessorDetailPage);

const InfoContainer = styled.div`
	margin-top: 50px;
	min-height: 60vh;

	h3 {
		font-size: 3rem;
		margin-bottom: 40px;
	}

	img {
		width: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
`;

const Img = styled.img`
	margin-top: 20px;
`;

const FlexRow = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;
`;

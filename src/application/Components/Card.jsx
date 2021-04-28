import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { Data } = props;
	return (
		<Flex>
			{Data.map((data) => {
				return (
					<Cards className='card shadow' key={data.id}>
						<img src={`https://dev.perfectprof.com/storage/app/${data.profile_pic}`} className='card-img-top' alt='professor-pic'   />
						<div className='card-body'>
							<h5 className='card-title'>
								{' '}
								<strong style={{ color: 'orange' }}>Professor Name:</strong> {data.professional.first_name} {data.professional.last_name}
							</h5>
							<Link to={`/professor/${data.id}`} className='btn btn-warning mt-4'>
								Explore
							</Link>
						</div>
					</Cards>
				);
			})}
		</Flex>
	);
};

export default Card;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
`;

const Cards = styled.div`
	width: 25rem;
	height: 450px;
	border-radius: 20px;
	margin-bottom: 20px;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	img {
		border-radius: 20px;
		max-height: 300px;
		object-fit: cover;
	}
`;

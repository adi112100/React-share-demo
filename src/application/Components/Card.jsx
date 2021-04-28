import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
	const { Data } = props;
	console.log(Data);
	return (
		<Flex>
			{Data.map((data) => {
				return (
					<Cards className='card shadow' key={data.id}>
						<img src='https://source.unsplash.com/1600x900/?professor' className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>
								{' '}
								<strong style={{ color: 'orange' }}>Professor Name:</strong> {data.professional.first_name} {data.professional.last_name}
							</h5>
							<a href='/' className='btn btn-primary'>
								Explore
							</a>
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
	}
`;

import React from 'react';
import './styles/info.css';

const Info = ({data}) => {
	const high = data.main?.temp_max != null ? `H: ${data.main.temp_max.toFixed()}` : '';
	const low = data.main?.temp_min != null ? `L: ${data.main.temp_min.toFixed()}` : '';

	return (
		<div id='weather-info' className="container">
			<p id="info-city">{data.name ?? ''}</p>
			<p id="info-temp">{data.main?.temp.toFixed() ?? ''}</p>
			<p id="info-HL">{high + ' ' + low}</p>
		</div>
	);
}

export default Info;

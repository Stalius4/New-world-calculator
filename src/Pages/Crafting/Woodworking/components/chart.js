import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';




const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x } y={y} fill="#fafafa" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  };
  
 
export const TimberChart = ({timberData,  domain1, domain2, datakey, topDivClass, imageId, name}) => {

    return (

      <div className={`chart ${topDivClass}`}>
      <div className="display-flex-wood">
                  <img className="timber-image"src={`https://cdn.nwdb.info/db/images/live/v18/icons/items/resource/${imageId}.png` } alt="sd"/>
                  <h1 className="chart-titles">{name}</h1>
              </div>
            <LineChart
            width={350}
            height={200}
              data={timberData}
              margin={{
                top: 0,
                right:10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="5 5"  stroke="#8e8f9066"/>
              <XAxis dataKey="date" stroke="#ffffff93" />
              <YAxis domain={[domain1, domain2]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey={datakey} stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );

}



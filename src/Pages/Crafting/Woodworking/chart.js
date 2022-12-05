import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';




const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x } y={y} fill="#fafafa" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  };
  
 
 const TimberChart = ({timberData}) => {

    return (

          
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
              <YAxis domain={[0.50, 1.2]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="timber_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>
        
    );

}


const LumberChart = ({timberData}) => {

    return (


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
              <YAxis domain={[1, 2]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="lumber_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>
    
    );

}

const WyrdwoodPlank = ({timberData}) => {

    return (

   
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
              <YAxis domain={[6, 11]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>

    );

}

const IronwoodPlank = ({timberData}) => {

    return (

     
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
              <YAxis domain={[15, 19]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="ironwoodplank_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>
         
    );

}

const Greenwood = ({timberData}) => {

    return (

      
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
              <YAxis domain={[0,0.6]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="greenwood_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>
    
    );

}

const Agedwood = ({timberData}) => {

    return (

 
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
              <YAxis domain={[0.15, 0.4]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="agedwood_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>
      
    );

}

const Wyrdwood = ({timberData}) => {

    return (

 
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
              <XAxis dataKey="date" stroke="#ffffff99" />
              <YAxis domain={[1.15, 1.8]} tickCount={20}  stroke="#ffffff80" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} iconSize={50} iconType={"none"}/>
              <Line type="monotone" dataKey="wyrdwood_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>

    );

}


const Ironwood = ({timberData}) => {

    return (


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
              <YAxis domain={[1, 2]} tickCount={20}  stroke="#ffffff93" />
              <Tooltip />
              <Legend verticalAlign="top"  height={36} iconSize={50} iconType={"none"}            
              />
              <Line type="monotone" dataKey="ironwood_price" stroke="orange" label={renderCustomBarLabel} activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="lumber_price" stroke="#82ca9d" label={renderCustomBarLabel} />
              <Line type="monotone" dataKey="wyrdwoodplank_price" stroke="#82ca9d" label={renderCustomBarLabel} /> */}
            </LineChart>

    );

}

export {LumberChart, TimberChart ,WyrdwoodPlank, IronwoodPlank, Greenwood, Agedwood, Wyrdwood, Ironwood }
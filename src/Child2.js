import React, { Component } from "react";
import * as d3 from 'd3';

class Child2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.data2);
    }
    
    componentDidUpdate() {
        
        const groupedData = d3.rollup(
            this.props.data2,
            v => d3.mean(v, d => d.tip), // Compute average tip per day
            d => d.day
          );
    
        const barData = Array.from(groupedData, ([day, avgTip]) => ({
            day,
            avgTip
          }));
     const margin = { top: 40, right: 50, bottom: 80, left: 80 };
            const width = 600;
            const height = 400;
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;
    
            const svg = d3.select(".Child2_svg").attr('width',width).attr('height',height);
    
            const innerChart = svg.select('.inner_chart').attr('transform', `translate(${margin.left}, ${margin.top})`);
            
            
            const yScale = d3.scaleLinear().domain([0, d3.max(barData, d=>d.avgTip)]).range([innerHeight,0]);
    
            const xScale = d3.scaleBand().domain(barData.map(d =>d.day)).range([0, innerWidth]).padding(0.2);
    
            const xAxis = d3.axisBottom(xScale);
    
            const yAxis = d3.axisLeft(yScale);
    
            innerChart.selectAll(".x-axis").data([null]) 
            .join("g").attr('class','x-axis') 
            .attr("transform", `translate(0, ${innerHeight})`)
            .call(xAxis);
    
            innerChart.selectAll(".y-axis").data([null]) 
            .join("g").attr('class','y-axis') 
            .call(yAxis);
    
            innerChart.selectAll("rect").data(barData).join("rect").attr("x", d=>xScale(d.day)).attr('y', d=>yScale(d.avgTip)).attr("fill", '#69b3a2')
            .attr('width', xScale.bandwidth).attr('height', d => height - margin.bottom - yScale(d.avgTip) -40)
            
    
            svg.append('text')
            .attr('x', width/2)
            .attr('y', height - 30)
            .text('Day')
    
            svg.append('text')
            .attr('x', 20)
            .attr('y', 180)
            .text('Tip')
    
            svg.append('text')
            .attr('x', width/2)
            .attr('y', 40)
            .text('Average tip vs Day')
            }
    render() {
        return <svg className="Child2_svg">
            <g className="inner_chart"></g>
        </svg>
    }
}

export default Child2;
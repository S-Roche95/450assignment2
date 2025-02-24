import React, { Component } from "react";
import * as d3 from 'd3';

class Child1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidUpdate() {
        console.log(this.props.data1);

        const margin = { top: 40, right: 50, bottom: 80, left: 80 };
        const width = 600;
        const height = 400;
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(".child1_svg").attr('width',width).attr('height',height);

        const innerChart = svg.select('.inner_chart').attr('transform', `translate(${margin.left}, ${margin.top})`);
        
        const xScale = d3.scaleLinear().domain([0,50]).range([0, innerWidth]);

        const yScale = d3.scaleLinear().domain([0,10]).range([innerHeight,0]);

        const xAxis = d3.axisBottom(xScale);

        const yAxis = d3.axisLeft(yScale);

        innerChart.selectAll(".x-axis").data([null]) 
        .join("g").attr('class','x-axis') 
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis);

        innerChart.selectAll(".y-axis").data([null]) 
        .join("g").attr('class','y-axis') 
        .call(yAxis);

        innerChart.selectAll("circle").data(this.props.data1).join("circle").attr("r", 3).attr("fill", '#69b3a2')
        .attr("cx", d => xScale(d.total_bill)).attr("cy", d => yScale(d.tip))

        svg.append('text')
        .attr('x', width/2)
        .attr('y', height - 30)
        .text('Total Bill')

        svg.append('text')
        .attr('x', 20)
        .attr('y', 180)
        .text('Tip')

        svg.append('text')
        .attr('x', width/2)
        .attr('y', 50)
        .text('Total Bill vs Tip')
        }
    render() {
        return <svg className="child1_svg">
             <g className="inner_chart"></g>
        </svg> 
    }
}

export default Child1;
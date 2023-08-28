import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-draggable-field',
  templateUrl: './draggable-field.component.html',
  styleUrls: ['./draggable-field.component.scss'],
})
export class DraggableFieldComponent implements OnInit {
  public ngOnInit(): void {
    this.drawField();
  }

  public drawField(): void {
    const svg = d3.select('svg').style('width', '100%').style('height', '100%');
    const self = this;
    const dragHandler = d3.drag().on('drag', function (data) {
      const current = d3.select(this);
      current.attr('cx', window?.innerWidth - 10 < data.x ? window?.innerWidth - 10 : data.x);
      current.attr('cy', data?.y - 5 < 1 ? 1 : data.y);
      console.log({data, window, svg});
      self.bluerawLines(circle1, circle2, circle3, svg);
    })

    const circle1 = svg
      .append('circle')
      .attr('cx', 500)
      .attr('cy', 500)
      .attr('r', '20px')
      .attr('stroke', 'blue')
      .style('fill', 'transparent')
      .style('cursor', 'pointer');

    const circle2 = svg.append('circle')
      .attr('cx', 500)
      .attr('cy', 500)
      .attr('r', '20px')
      .attr('stroke', 'blue')
      .style('fill', 'transparent')
      .style('cursor', 'pointer');

    const circle3 = svg.append('circle')
      .attr('cx', 500)
      .attr('cy', 500)
      .attr('r', '20px')
      .attr('stroke', 'blue')
      .style('fill', 'transparent')
      .style('cursor', 'pointer');



    const line = svg.append("line")
      .attr("x1", circle1.attr("cx"))
      .attr("y1", circle1.attr("cy"))
      .attr("x2", circle2.attr("cx"))
      .attr("y2", circle2.attr("cy"))
      .style("stroke", "black");

    const line2 = svg.append("line")
      .attr("x1", circle2.attr("cx"))
      .attr("y1", circle2.attr("cy"))
      .attr("x2", circle3.attr("cx"))
      .attr("y2", circle3.attr("cy"))
      .style("stroke", "black");



    dragHandler(svg.selectAll('circle'));
  }

  public bluerawLines(point1: any, point2: any, point3: any, svg: any): void {
    svg.selectAll('line').remove();
    svg.append("line")
      .attr("x1", point1.attr("cx"))
      .attr("y1", point1.attr("cy"))
      .attr("x2", point2.attr("cx"))
      .attr("y2", point2.attr("cy"))
      .style("stroke", "black");

    svg.append("line")
      .attr("x1", point2.attr("cx"))
      .attr("y1", point2.attr("cy"))
      .attr("x2", point3.attr("cx"))
      .attr("y2", point3.attr("cy"))
      .style("stroke", "black");
  }
}

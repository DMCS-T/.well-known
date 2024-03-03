import{styled}from"@domaintools-frontend/IUI";export const Container=styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;export class Circle{constructor(ctx,position,radius,color){this.ctx=ctx,this.position=position,this.radius=radius,this.color=color,this.opacity=0}static startAngle=0;static endAngle=2*Math.PI;static anticlockwise=!1;draw(){if(!this.opacity)return;const{startAngle:startAngle,endAngle:endAngle,anticlockwise:anticlockwise}=this.constructor;this.ctx.beginPath(),this.ctx.arc(this.position.x,this.position.y,this.radius,startAngle,endAngle,anticlockwise),this.ctx.fillStyle=`rgba(255,255,255,${this.opacity})`,this.ctx.fill()}}
//# sourceURL=https://cdn1.hubspotusercontent-eu1.net/hub/144175474/hub_generated/template_assets/93910556373/1708420560991/growth-customized/templates/Spiders.styles.js
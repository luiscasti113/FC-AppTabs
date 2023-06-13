import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  heartRate: number = 0;
  maxHeartRate: number = 200; // Valor máximo de presión cardíaca
  minHeartRate: number = 60; // Valor mínimo de presión cardíaca
  menuCtrl: any;

  constructor() {
    // Simulación de cambio en la presión cardíaca cada 1 segundo
    setInterval(() => {
      this.heartRate = Math.floor(Math.random() * (this.maxHeartRate - this.minHeartRate + 1) + this.minHeartRate);
    }, 1000);
  }

  calculateStrokeDashArray(): string {
    const circumference = 2 * Math.PI * 45; // Circunferencia del círculo de radio 45px
    return `${circumference}px`;
  }

  calculateStrokeDashOffset(): string {
    const progress = ((this.maxHeartRate - this.heartRate) / (this.maxHeartRate - this.minHeartRate)) * 100;
    const circumference = 2 * Math.PI * 45; // Circunferencia del círculo de radio 45px
    const offset = ((100 - progress) / 100) * circumference;
    return `${offset}px`;
  }

  getBorderColor(): string {
    if (this.heartRate >= 120) {
      return '#ff0000'; // Rojo para una presión alta
    } else if (this.heartRate >= 80) {
      return '#ffff00'; // Amarillo para una presión regular
    } else {
      return '#00ff00'; // Verde para una presión baja
    }
  }

}

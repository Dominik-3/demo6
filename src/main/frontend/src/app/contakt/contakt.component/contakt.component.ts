import {Component, OnInit} from '@angular/core';
import {ContaktService} from '../../contakt.service';
import {Contakt} from '../../contakt.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contakt.component',
  imports: [],
  templateUrl: './contakt.component.html',
  styleUrl: './contakt.component.css',
  standalone: true
})
export class ContaktComponent {
  contakts: Contakt[] = [];
  error: string | null = null;
  loading = true;

  constructor(private contaktService: ContaktService) {}

  ngOnInit(): void{
    this.contaktService.getContakts().subscribe({
      next: (data) => {
        this.contakts = data;
        this.loading = false;
        if (data.length === 0) {
          this.error = "no contakts";
        } else {
          this.error = null;
        }
      },
      error: () => {
        this.error = "nestáhli se kontakty";
        this.loading = false;
      }
    });
  }
}

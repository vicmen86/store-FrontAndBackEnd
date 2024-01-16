import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration=0;
  @Input({required:true}) message='';
  counter=signal(0);
  counterRef:number|undefined; //referencia para destruir el setInterval

  constructor() {
    //No async y se ejecuta antes del render
    //corre una sola vez
    console.log('Constructor');
    console.log('-'.repeat(20));
  }
  ngOnChanges(changes: SimpleChanges) {
    //se ejecuta durante y despues del render
    console.log('ngOnChanges');

    console.log('-'.repeat(20));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue){ //evaluamos un alogica extra para evitar acciones repetidas
      this.doSomething()
   };
  }
  ngOnInit(){
    // se ejecuta despues de renderizar
    //Se ejecuta una sola vez; El lugar perfecto para una peticion async, una promesa(then)y una subscripcion(subs)
  console.log('ngOnInit');
  console.log('-'.repeat(20) + 'Ejecucion de ngOnInit: ');
  console.log('duration =>', this.duration);
  console.log('message =>', this.message);
  this.counterRef = window.setInterval(()=>{
    console.log('run interval');
    this.counter.update(statePrev => statePrev+1)
  },1000)
  }
  ngAfterViewInit(){
    //ciclo de vida que corre despues del ngOnInit
    //Se ejecuta cuando los hijos fueron renderizados
    //
    console.log('ngAfterViewInit');
    console.log('-'.repeat(20) + 'Ejecucion de ngAfterViewInit que pregunta si los hijos se renderizaron');

  }
  ngOnDestroy(){
    //Ver cuando el componente se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(20) + 'Se detruyo el componente counter');
    window.clearInterval(this.counterRef) //destruimos tambien el setinterval
  }
  doSomething(){
    console.log('change duration ');
  }
}

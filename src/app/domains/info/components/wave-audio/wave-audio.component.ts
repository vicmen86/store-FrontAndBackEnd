import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
@Input({required: true}) audioUrl!: string;//el signo de exclamacion me ayuda para inicializarlo en otro momento
@ViewChild('wave') container!:ElementRef;
private ws!: WaveSurfer;
isPlaying =signal(false);

  ngAfterViewInit(){
    //el codigo aqui nos asegura que los hijos se renderizaron
   this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    this.ws.on('play', ()=>this.isPlaying.set(true))
    this.ws.on('pause', ()=>this.isPlaying.set(false))
  }
  playPause(){
    this.ws.playPause()
  }
}

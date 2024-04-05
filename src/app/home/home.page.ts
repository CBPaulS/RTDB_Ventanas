import { Component } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  banio: boolean = false;
  Garaje: boolean = false;
  cocina: boolean = false;
  cuarto: boolean = false;
  sala: boolean = false;
  vestidor: boolean = false;

  constructor(private database: Database) {}

  ngOnInit() {
    this.subscribeToRoom('banio');
    this.subscribeToRoom('Garaje');
    this.subscribeToRoom('cocina');
    this.subscribeToRoom('cuarto');
    this.subscribeToRoom('sala');
    this.subscribeToRoom('vestidor');
  }

  private subscribeToRoom(roomName: string) {
    const route = ref(this.database, "/casa/" + roomName);
    object(route).subscribe(attribute => {
      (this as any)[roomName] = attribute.snapshot.val();
    });
  }
}

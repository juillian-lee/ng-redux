import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { STATE_NAME } from './contato.state';
import { contatoReducer } from './contato.reducer';
import { ContatoEffects } from './contato.effects';
import { ContatoStoreService } from './contato-store.service';
import { ContatoService } from './contato.service';

@NgModule({
  declarations: [],
  imports: [
  StoreModule.forFeature(STATE_NAME, contatoReducer),
      EffectsModule.forFeature([ContatoEffects]),
  ],
  exports: [
      StoreModule,
      EffectsModule,
      HttpClientModule
  ],
  providers: [
      ContatoStoreService,
      ContatoService
  ]
})
export class ContatoStoreModule { }
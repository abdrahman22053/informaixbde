import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { ShopModule } from './modules/shop/shop.module';
import { CartModule } from './modules/cart/cart.module';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './state/products/products.reducer';

import { ProductsEffects } from './state/products/products.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cartReducer } from './state/cart/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ShopModule,
    CartModule,
    FormsModule,
    StoreModule.forRoot({ products: productsReducer }),
    StoreModule.forRoot({ cart: cartReducer }),

    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

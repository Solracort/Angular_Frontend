import { NgModule } from '@angular/core';

import { MenubarModule} from 'primeng/menubar';

import { ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { TableModule} from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
    exports: [
      MenubarModule,
      ButtonModule,
      CardModule,
      FieldsetModule, 
      PanelModule,
      TableModule,
      ToolbarModule
    ]
})
export class PrimeNgModule { }

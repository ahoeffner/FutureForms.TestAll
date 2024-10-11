import { FormsModule, Tag, TagLibrary } from 'futureforms';
import { CustomInput } from './tags/CustomInput';


export class Application
{
   public static async initialize() : Promise<void>
   {
      TagLibrary.addCustomTag(CustomInput);
      FormsModule.initialize();
   }
}